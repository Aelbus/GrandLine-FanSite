const axios = require("axios");
const fs = require("fs");
const path = require("path");

const clientId = process.env.TWITCH_CLIENT_ID;
const clientSecret = process.env.TWITCH_CLIENT_SECRET;

// 🔍 Affichage des chemins pour debug
console.log("📂 __dirname =", __dirname);

const streamersPath = path.join(__dirname, "data/streamers.json");
const cachePath = path.join(__dirname, "data/streamers_cache.json");
const tokenCachePath = path.join(__dirname, "data/.twitch_token.json");

console.log("📄 streamersPath:", streamersPath);
console.log("📄 cachePath:", cachePath);
console.log("📄 tokenCachePath:", tokenCachePath);

// 🔄 Lire un token mis en cache
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
  } catch (e) {
    console.log("📭 Aucun token en cache");
    return null;
  }
}

// 💾 Stocker un nouveau token
function cacheToken(token, expiresInSeconds) {
  const expires_at = Date.now() + expiresInSeconds * 1000 - 60000;
  const data = { token, expires_at };
  fs.writeFileSync(tokenCachePath, JSON.stringify(data));
}

// 🔑 Récupérer un token Twitch
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
    const expiresIn = res.data.expires_in;
    cacheToken(token, expiresIn);
    console.log("🔐 Nouveau token stocké");
    return token;
  } catch (err) {
    console.error("❌ Erreur récupération token:", err.response?.data || err);
    return null;
  }
}

// 📦 Enrichir les données Twitch
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

// ✅ Fonction Lambda principale
exports.handler = async () => {
  try {
    console.log("📚 Lecture du fichier source...");
    const baseData = JSON.parse(fs.readFileSync(streamersPath, "utf8"));

    const token = await getTwitchToken();
    if (!token) throw new Error("Impossible de récupérer le token Twitch");

    console.log("🚀 Enrichissement des streamers...");
    const enriched = await enrichStreamers(baseData, token);

    fs.writeFileSync(cachePath, JSON.stringify(enriched, null, 2));
    console.log("✅ Données streamers enrichies et sauvegardées");

    return {
      statusCode: 200,
      body: JSON.stringify(enriched),
      headers: { "Content-Type": "application/json" },
    };
  } catch (err) {
    console.error("❌ Erreur principale:", err.message);

    // 🔁 Lecture du cache
    try {
      console.log("⚠️ Lecture du cache de secours...");
      const cached = JSON.parse(fs.readFileSync(cachePath, "utf8"));
      console.log("✅ Données de secours servies depuis le cache");

      return {
        statusCode: 200,
        body: JSON.stringify(cached),
        headers: { "Content-Type": "application/json" },
      };
    } catch (cacheErr) {
      console.error("🚨 Aucun cache de secours:", cacheErr.message);
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "Impossible de récupérer les données des streamers",
        }),
      };
    }
  }
};
