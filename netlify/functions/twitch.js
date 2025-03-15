const axios = require("axios");
const fs = require("fs");
const path = require("path");

const clientId = process.env.TWITCH_CLIENT_ID;
const clientSecret = process.env.TWITCH_CLIENT_SECRET;

const streamersPath = path.join(__dirname, "data/streamers.json");
const cachePath = path.join(__dirname, "data/streamers_cache.json");
const tokenCachePath = path.join(__dirname, "data/.twitch_token.json");
const publicCachePath = path.join(
  __dirname,
  "../../public/data/streamers_cache.json"
);

// 📦 Lire le token s'il est encore valide
function readCachedToken() {
  try {
    const raw = fs.readFileSync(tokenCachePath, "utf8");
    const { token, expires_at } = JSON.parse(raw);
    if (Date.now() < expires_at) {
      console.log("✅ Token récupéré depuis le cache");
      return token;
    }
    console.log("⏳ Token expiré");
    return null;
  } catch {
    console.log("📭 Aucun token en cache");
    return null;
  }
}

// 💾 Sauvegarder un nouveau token
function cacheToken(token, expiresInSeconds) {
  const expires_at = Date.now() + expiresInSeconds * 1000 - 60000;
  const data = { token, expires_at };
  fs.writeFileSync(tokenCachePath, JSON.stringify(data));
}

// 🔑 Obtenir un token Twitch
async function getTwitchToken() {
  const cached = readCachedToken();
  if (cached) return cached;

  try {
    const res = await axios.post("https://id.twitch.tv/oauth2/token", null, {
      params: {
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: "client_credentials",
      },
    });
    const token = res.data.access_token;
    cacheToken(token, res.data.expires_in);
    console.log("🔐 Nouveau token stocké");
    return token;
  } catch (err) {
    console.error("❌ Erreur récupération token:", err.response?.data || err);
    return null;
  }
}

// 🚀 Enrichir les streamers
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

// 🧠 Lambda principale
exports.handler = async () => {
  try {
    console.log("📚 Lecture du fichier source...");
    const baseData = JSON.parse(fs.readFileSync(streamersPath, "utf8"));

    const token = await getTwitchToken();
    if (!token) throw new Error("Impossible de récupérer le token Twitch");

    console.log("🚀 Enrichissement des streamers...");
    const enriched = await enrichStreamers(baseData, token);

    fs.writeFileSync(cachePath, JSON.stringify(enriched, null, 2));
    fs.writeFileSync(publicCachePath, JSON.stringify(enriched, null, 2)); // Copie publique

    console.log("✅ Données streamers enrichies et sauvegardées");

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    };
  } catch (err) {
    console.error("❌ Erreur principale:", err.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Erreur fonction Twitch" }),
    };
  }
};
