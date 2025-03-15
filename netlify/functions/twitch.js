const AWS = require("aws-sdk");
const axios = require("axios");
const fs = require("fs");

const s3 = new AWS.S3({
  accessKeyId: process.env.NETLIFY_AWS_ACCESS_KEY,
  secretAccessKey: process.env.NETLIFY_AWS_SECRET_KEY,
  region: process.env.NETLIFY_AWS_REGION,
});
const bucketName = process.env.NETLIFY_AWS_BUCKET;

const clientId = process.env.TWITCH_CLIENT_ID;
const clientSecret = process.env.TWITCH_CLIENT_SECRET;

// 📦 Lire le token s'il est encore valide
function readCachedToken() {
  try {
    const raw = fs.readFileSync("/tmp/twitch_token.json", "utf8");
    const { token, expires_at } = JSON.parse(raw);

    if (Date.now() < expires_at) {
      return token;
    } else {
      console.log("⏳ Token expiré");
      return null;
    }
  } catch {
    console.log("📭 Aucun token en cache");
    return null;
  }
}

// 💾 Sauvegarder un nouveau token avec sa date d’expiration
function cacheToken(token, expiresInSeconds) {
  const expires_at = Date.now() + expiresInSeconds * 1000 - 60000;
  const data = { token, expires_at };
  fs.writeFileSync("/tmp/twitch_token.json", JSON.stringify(data));
}

// 🔑 Récupérer un token depuis Twitch ou le cache
async function getTwitchToken() {
  const cached = readCachedToken();
  if (cached) {
    console.log("✅ Token récupéré depuis le cache");
    return cached;
  }

  try {
    const res = await axios.post("https://id.twitch.tv/oauth2/token", null, {
      params: {
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: "client_credentials",
      },
    });

    const token = res.data.access_token;
    const expiresIn = res.data.expires_in;

    cacheToken(token, expiresIn);
    console.log("🔐 Nouveau token Twitch stocké");
    return token;
  } catch (err) {
    console.error("❌ Erreur récupération token :", err.response?.data || err);
    return null;
  }
}

// 🚀 Enrichir les données
async function enrichStreamers(streamers, token) {
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
      } catch {
        return streamer;
      }
    })
  );

  return results.map((res) =>
    res.status === "fulfilled" ? res.value : { ...res.reason, fallback: true }
  );
}

// 🧠 Fonction Lambda principale
exports.handler = async () => {
  try {
    // 🛠️ 1. Récupérer les données des streamers depuis S3
    const streamersData = await s3
      .getObject({ Bucket: bucketName, Key: "streamers.json" })
      .promise()
      .then((data) => JSON.parse(data.Body.toString()));

    // 🔑 2. Récupérer un token Twitch
    const token = await getTwitchToken();
    if (!token) throw new Error("Impossible de récupérer le token Twitch");

    // 🌟 3. Enrichir les streamers avec leurs données Twitch
    const enrichedStreamers = await enrichStreamers(streamersData, token);

    // 🪣 4. Enregistrer les données enrichies dans le cache S3
    await s3
      .putObject({
        Bucket: bucketName,
        Key: "streamers_cache.json",
        Body: JSON.stringify(enrichedStreamers, null, 2),
        ContentType: "application/json",
      })
      .promise();

    console.log("✅ Données streamers mises à jour");

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
        error: "Impossible de récupérer les données des streamers",
      }),
    };
  }
};
