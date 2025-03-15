const AWS = require("aws-sdk");
const axios = require("axios");
const fs = require("fs");

// Initialisation AWS S3
const s3 = new AWS.S3({
  accessKeyId: process.env.NETLIFY_AWS_ACCESS_KEY,
  secretAccessKey: process.env.NETLIFY_AWS_SECRET_KEY,
  region: process.env.NETLIFY_AWS_REGION,
});
const bucketName = process.env.NETLIFY_AWS_BUCKET;
const tokenCachePath = "/tmp/twitch_token.json"; // Emplacement du cache temporaire du token

const clientId = process.env.TWITCH_CLIENT_ID;
const clientSecret = process.env.TWITCH_CLIENT_SECRET;

// 📦 Lire le token s'il est encore valide
function readCachedToken() {
  try {
    if (!fs.existsSync(tokenCachePath)) {
      console.log("📭 Aucun token en cache.");
      return null;
    }

    const raw = fs.readFileSync(tokenCachePath, "utf8");
    const { token, expires_at } = JSON.parse(raw);

    if (Date.now() < expires_at) {
      console.log("✅ Token récupéré depuis le cache.");
      return token;
    } else {
      console.log("⏳ Token expiré.");
      return null;
    }
  } catch (err) {
    console.error("❌ Erreur de lecture du cache token :", err.message);
    return null;
  }
}

// 💾 Sauvegarder un nouveau token avec sa date d’expiration
function cacheToken(token, expiresInSeconds) {
  try {
    const expires_at = Date.now() + expiresInSeconds * 1000 - 60000;
    const data = { token, expires_at };
    fs.writeFileSync(tokenCachePath, JSON.stringify(data));
    console.log("📝 Token stocké dans /tmp.");
  } catch (err) {
    console.error("❌ Erreur écriture token :", err.message);
  }
}

// 🔑 Récupérer un token depuis Twitch ou le cache
async function getTwitchToken() {
  const cached = readCachedToken();
  if (cached) return cached;

  try {
    console.log("🔑 Récupération du token Twitch...");
    const res = await axios.post("https://id.twitch.tv/oauth2/token", null, {
      params: {
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: "client_credentials",
      },
    });

    cacheToken(res.data.access_token, res.data.expires_in);
    console.log("✅ Nouveau token Twitch stocké !");
    return res.data.access_token;
  } catch (err) {
    console.error(
      "❌ Erreur récupération token Twitch :",
      err.response?.data || err.message
    );
    throw new Error("Impossible de récupérer le token Twitch.");
  }
}

// 🚀 Enrichir les streamers avec leurs infos Twitch
async function enrichStreamers(streamers, token) {
  console.log("🚀 Enrichissement des streamers en cours...");

  const results = await Promise.allSettled(
    streamers.map(async (streamer) => {
      try {
        const res = await axios.get(
          `https://api.twitch.tv/helix/users?login=${streamer.username}`,
          {
            headers: {
              "Client-ID": clientId,
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const user = res.data.data[0];
        return user
          ? {
              ...streamer,
              display_name: user.display_name,
              profile_image_url: user.profile_image_url,
            }
          : streamer;
      } catch (error) {
        console.error(
          `⚠️ Erreur enrichissement pour ${streamer.username}:`,
          error.message
        );
        return streamer;
      }
    })
  );

  console.log("✅ Enrichissement terminé !");
  return results.map((res) =>
    res.status === "fulfilled" ? res.value : { ...res.reason, fallback: true }
  );
}

// 🧠 Fonction Lambda principale
exports.handler = async () => {
  try {
    console.log("📚 Récupération des streamers depuis S3...");

    // 📂 1. Récupérer `streamers.json` depuis S3
    const streamersData = await s3
      .getObject({ Bucket: bucketName, Key: "streamers.json" })
      .promise()
      .then((data) => JSON.parse(data.Body.toString()))
      .catch((err) => {
        console.error("❌ Erreur récupération streamers.json :", err.message);
        throw new Error("Erreur lecture des streamers depuis S3.");
      });

    // 🔑 2. Récupérer un token Twitch
    const token = await getTwitchToken();

    // 🌟 3. Enrichir les streamers
    const enrichedStreamers = await enrichStreamers(streamersData, token);
    if (!enrichedStreamers.length)
      throw new Error("Données enrichies invalides.");

    // 🪣 4. Sauvegarde dans S3 (`streamers_cache.json`)
    await s3
      .putObject({
        Bucket: bucketName,
        Key: "streamers_cache.json",
        Body: JSON.stringify(enrichedStreamers, null, 2),
        ContentType: "application/json",
      })
      .promise()
      .then(() => console.log("✅ Données streamers mises à jour dans S3."))
      .catch((err) => {
        console.error("❌ Erreur sauvegarde S3 :", err.message);
        throw new Error("Erreur écriture du cache des streamers.");
      });

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
      headers: { "Content-Type": "application/json" },
    };
  } catch (err) {
    console.error("❌ Erreur principale :", err.message);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Impossible de récupérer les données des streamers.",
      }),
    };
  }
};
