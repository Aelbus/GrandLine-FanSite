require("dotenv").config();
const fs = require("fs");
const axios = require("axios");
const AWS = require("aws-sdk");
const { execSync } = require("child_process");

const customCommitMessage = process.argv[2];
const commitMessage =
  customCommitMessage || "🔄 Auto-update streamers_cache.json";

const s3 = new AWS.S3({
  accessKeyId: process.env.NETLIFY_AWS_ACCESS_KEY,
  secretAccessKey: process.env.NETLIFY_AWS_SECRET_KEY,
  region: process.env.NETLIFY_AWS_REGION,
});
const bucketName = process.env.NETLIFY_AWS_BUCKET;

const sourcePath = "netlify/functions/data/streamers.json";
const cachePath = "public/data/streamers_cache.json";

const clientId = process.env.TWITCH_CLIENT_ID;
const clientSecret = process.env.TWITCH_CLIENT_SECRET;

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

function detectChanges(oldList, newList) {
  const oldMap = new Map(oldList.map((s) => [s.username, s]));
  const newMap = new Map(newList.map((s) => [s.username, s]));

  const added = [];
  const modified = [];
  const removed = [];

  for (const [username, newS] of newMap.entries()) {
    if (!oldMap.has(username)) {
      added.push(username);
    } else {
      const oldS = oldMap.get(username);
      const hasChanged =
        oldS.display_name !== newS.display_name ||
        oldS.profile_image_url !== newS.profile_image_url;

      if (hasChanged) {
        modified.push(username);
      }
    }
  }

  for (const username of oldMap.keys()) {
    if (!newMap.has(username)) {
      removed.push(username);
    }
  }

  return { added, modified, removed };
}

async function enrichStreamers(streamers, token) {
  const batches = [];
  for (let i = 0; i < streamers.length; i += 30) {
    batches.push(streamers.slice(i, i + 30));
  }

  let enriched = [];

  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i];
    const logins = batch.map((s) => s.username).join("&login=");
    console.log(`📡 Requête API Twitch pour ${batch.length} utilisateurs...`);

    const res = await axios.get(
      `https://api.twitch.tv/helix/users?login=${logins}`,
      {
        headers: {
          "Client-ID": clientId,
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const users = res.data.data;

    for (const streamer of batch) {
      const match = users.find(
        (u) => u.login.toLowerCase() === streamer.username.toLowerCase()
      );
      enriched.push({
        ...streamer,
        display_name: match?.display_name || streamer.username,
        profile_image_url: match?.profile_image_url || "",
      });
    }

    if (i < batches.length - 1) {
      console.log("⏳ Attente 3s pour éviter le rate-limit...");
      await new Promise((res) => setTimeout(res, 3000));
    }
  }

  return enriched;
}

async function uploadToS3(filePath, key) {
  const fileContent = fs.readFileSync(filePath);
  await s3
    .putObject({
      Bucket: bucketName,
      Key: key,
      Body: fileContent,
      ContentType: "application/json",
    })
    .promise();
  console.log(`☁️ Fichier uploadé sur S3 : ${key}`);
}

async function main() {
  try {
    console.log("📖 Lecture des streamers...");
    const baseStreamers = JSON.parse(fs.readFileSync(sourcePath, "utf8"));

    // 🔃 Upload de streamers.json TOUJOURS
    await uploadToS3(sourcePath, "streamers.json");
    console.log("☁️ Fichier streamers.json mis à jour sur S3.");

    const token = await getTwitchToken();
    const enriched = await enrichStreamers(baseStreamers, token);

    const oldCache = fs.existsSync(cachePath)
      ? JSON.parse(fs.readFileSync(cachePath, "utf8"))
      : [];

    const { added, modified, removed } = detectChanges(oldCache, enriched);

    // Résumé
    console.log("\n📊 Résumé des changements :");
    if (added.length) console.log("🟢 Ajoutés :", added.join(", "));
    if (modified.length) console.log("🟡 Modifiés :", modified.join(", "));
    if (removed.length) console.log("🔴 Supprimés :", removed.join(", "));

    if (!added.length && !modified.length && !removed.length) {
      console.log("✅ Aucun changement dans le cache enrichi.");
    } else {
      fs.writeFileSync(cachePath, JSON.stringify(enriched, null, 2));
      console.log("📝 Cache mis à jour localement.");
      await uploadToS3(cachePath, "streamers_cache.json");
    }

    // Build
    console.log("🏗️ Build du site...");
    execSync("npm run build", { stdio: "inherit" });

    // Push Git
    console.log("🚀 Commit & push Git...");
    execSync(`git add . && git commit -m "${commitMessage}" && git push`, {
      stdio: "inherit",
    });

    console.log("\n✅ Terminé avec succès !");
  } catch (err) {
    console.error("❌ Erreur :", err.message);
  }
}

main();
