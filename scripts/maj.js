// scripts/maj.js
require("dotenv").config();
const AWS = require("aws-sdk");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const axios = require("axios");

// 📍 Chemins
const streamersPath = path.join(
  __dirname,
  "../netlify/functions/data/streamers.json"
);
const publicCachePath = path.join(
  __dirname,
  "../public/data/streamers_cache.json"
);

// 🌍 Twitch API
const clientId = process.env.TWITCH_CLIENT_ID;
const clientSecret = process.env.TWITCH_CLIENT_SECRET;

// 📦 Lecture JSON
const readJSON = (p) => JSON.parse(fs.readFileSync(p, "utf8"));

// 🔍 Comparaison simple (peut être améliorée si besoin)
function deepCompare(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

// 🔑 Token Twitch
async function getTwitchToken() {
  const res = await axios.post("https://id.twitch.tv/oauth2/token", null, {
    params: {
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: "client_credentials",
    },
  });
  return res.data.access_token;
}

// 📡 Fetch données Twitch par lot de 30
async function enrichStreamers(streamers, token) {
  const usernames = streamers.map((s) => s.username);
  const enriched = [];

  for (let i = 0; i < usernames.length; i += 30) {
    const batch = usernames.slice(i, i + 30);
    const res = await axios.get("https://api.twitch.tv/helix/users", {
      headers: {
        "Client-ID": clientId,
        Authorization: `Bearer ${token}`,
      },
      params: { login: batch },
    });

    const twitchData = res.data.data;

    batch.forEach((username) => {
      const twitchInfo = twitchData.find(
        (u) => u.login.toLowerCase() === username.toLowerCase()
      );
      const base = streamers.find(
        (s) => s.username.toLowerCase() === username.toLowerCase()
      );

      enriched.push({
        ...base,
        display_name: twitchInfo?.display_name || base.username,
        profile_image_url: twitchInfo?.profile_image_url || null,
      });
    });

    // ⏱️ Attente entre les appels si trop long
    if (i + 30 < usernames.length) {
      console.log(`⏳ Attente 30s...`);
      await new Promise((resolve) => setTimeout(resolve, 30000));
    }
  }

  return enriched;
}

(async () => {
  try {
    console.log("📖 Lecture des streamers...");
    const localStreamers = readJSON(streamersPath);

    let currentCache = [];
    if (fs.existsSync(publicCachePath)) {
      currentCache = readJSON(publicCachePath);
    }

    const token = await getTwitchToken();
    const enriched = await enrichStreamers(localStreamers, token);

    if (deepCompare(enriched, currentCache)) {
      console.log("✅ Aucune modification détectée. Pas de build nécessaire.");
      return;
    }

    console.log("📝 Mise à jour de streamers_cache.json...");
    fs.writeFileSync(publicCachePath, JSON.stringify(enriched, null, 2));

    console.log("🏗️ Build du site...");
    execSync("npm run build", { stdio: "inherit" });

    console.log("🚀 Commit & push Git...");
    execSync("git add .", { stdio: "inherit" });
    execSync(`git commit -m "🆕 Mise à jour streamers_cache.json [auto]"`, {
      stdio: "inherit",
    });
    execSync("git push origin main", { stdio: "inherit" });

    console.log("✅ Terminé avec succès !");
  } catch (err) {
    console.error("❌ Erreur pendant le process :", err.message);
  }
})();
