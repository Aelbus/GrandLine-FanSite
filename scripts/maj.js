require("dotenv").config();
const fs = require("fs");
const path = require("path");
const axios = require("axios");
const AWS = require("aws-sdk");
const { execSync } = require("child_process");

const clientId = process.env.TWITCH_CLIENT_ID;
const clientSecret = process.env.TWITCH_CLIENT_SECRET;
const region = process.env.NETLIFY_AWS_REGION;
const bucketName = process.env.NETLIFY_AWS_BUCKET;

const BATCH_SIZE = 30;
const BATCH_DELAY = parseInt(process.env.TWITCH_BATCH_DELAY_MS) || 30000;

const s3 = new AWS.S3({
  accessKeyId: process.env.NETLIFY_AWS_ACCESS_KEY,
  secretAccessKey: process.env.NETLIFY_AWS_SECRET_KEY,
  region,
});

const localStreamersPath = path.join("netlify/functions/data/streamers.json");
const cachePath = path.join("public/data/streamers_cache.json");

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

async function fetchTwitchData(usernames, token) {
  const loginParams = usernames.map((u) => `login=${u}`).join("&");
  const res = await axios.get(
    `https://api.twitch.tv/helix/users?${loginParams}`,
    {
      headers: {
        "Client-ID": clientId,
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data.data;
}

function formatStreamers(rawStreamers, twitchUsers) {
  return rawStreamers.map((s) => {
    const twitch = twitchUsers.find(
      (t) => t.login.toLowerCase() === s.username.toLowerCase()
    );
    return twitch
      ? {
          ...s,
          display_name: twitch.display_name,
          profile_image_url: twitch.profile_image_url,
        }
      : s;
  });
}

function compareStreamers(newData, oldData) {
  const oldMap = new Map(oldData.map((s) => [s.username.toLowerCase(), s]));
  const newMap = new Map(newData.map((s) => [s.username.toLowerCase(), s]));

  const added = [...newMap.keys()].filter((k) => !oldMap.has(k));
  const removed = [...oldMap.keys()].filter((k) => !newMap.has(k));

  const modified = [...newMap.keys()].filter(
    (k) =>
      oldMap.has(k) &&
      JSON.stringify(newMap.get(k)) !== JSON.stringify(oldMap.get(k))
  );

  return {
    added: added.map((k) => newMap.get(k).username),
    removed: removed.map((k) => oldMap.get(k).username),
    modified: modified.map((k) => newMap.get(k).username),
  };
}

(async () => {
  console.log("📖 Lecture des streamers...");

  const rawStreamers = JSON.parse(fs.readFileSync(localStreamersPath, "utf8"));
  let oldCache = [];
  try {
    oldCache = JSON.parse(fs.readFileSync(cachePath, "utf8"));
  } catch {
    console.warn("⚠️ Aucun cache local précédent.");
  }

  const token = await getTwitchToken();
  let enriched = [];

  for (let i = 0; i < rawStreamers.length; i += BATCH_SIZE) {
    const batch = rawStreamers.slice(i, i + BATCH_SIZE);
    const twitchUsers = await fetchTwitchData(
      batch.map((s) => s.username),
      token
    );
    enriched.push(...formatStreamers(batch, twitchUsers));

    if (i + BATCH_SIZE < rawStreamers.length) {
      console.log(`⏳ Attente ${BATCH_DELAY / 1000}s...`);
      await new Promise((res) => setTimeout(res, BATCH_DELAY));
    }
  }

  const changes = compareStreamers(enriched, oldCache);

  console.log("\n📊 Résumé des changements :");
  console.log(`🟢 Ajoutés : ${changes.added.join(", ") || "Aucun"}`);
  console.log(`🟡 Modifiés : ${changes.modified.join(", ") || "Aucun"}`);
  console.log(`🔴 Supprimés : ${changes.removed.join(", ") || "Aucun"}`);

  fs.writeFileSync(cachePath, JSON.stringify(enriched, null, 2));
  console.log("📝 Mise à jour de streamers_cache.json...");

  console.log("🏗️ Build du site...");
  execSync("npm run build", { stdio: "inherit" });

  console.log("🚀 Commit & push Git...");
  execSync(
    'git add . && git commit -m "🆕 Mise à jour streamers_cache.json [auto]" && git push',
    {
      stdio: "inherit",
    }
  );

  console.log("✅ Terminé avec succès !");
})();
