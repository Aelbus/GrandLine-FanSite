require("dotenv").config(); // ← Charge les variables du .env

const AWS = require("aws-sdk");
const fs = require("fs");
const path = require("path");

// ⚙️ Configuration AWS depuis .env
const s3 = new AWS.S3({
  accessKeyId: process.env.NETLIFY_AWS_ACCESS_KEY,
  secretAccessKey: process.env.NETLIFY_AWS_SECRET_KEY,
  region: process.env.NETLIFY_AWS_REGION,
});

const bucketName = process.env.NETLIFY_AWS_BUCKET;
const key = "streamers_cache.json";
const outputPath = path.join(__dirname, "../public/data/streamers_cache.json");

// 📥 Télécharger le fichier depuis S3
async function downloadCache() {
  try {
    console.log("📡 Téléchargement depuis S3...");

    const result = await s3
      .getObject({ Bucket: bucketName, Key: key })
      .promise();

    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, result.Body);

    console.log("✅ Fichier streamers_cache.json mis à jour localement.");
  } catch (err) {
    console.error("❌ Impossible de télécharger depuis S3 :", err.message);
  }
}

downloadCache();
