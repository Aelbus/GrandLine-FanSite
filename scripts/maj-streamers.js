require("dotenv").config();
const AWS = require("aws-sdk");
const fs = require("fs");
const { execSync } = require("child_process");
const path = require("path");

const s3 = new AWS.S3({
  accessKeyId: process.env.NETLIFY_AWS_ACCESS_KEY,
  secretAccessKey: process.env.NETLIFY_AWS_SECRET_KEY,
  region: process.env.NETLIFY_AWS_REGION,
});

const bucketName = process.env.NETLIFY_AWS_BUCKET;
const localStreamersPath = path.join(
  __dirname,
  "../netlify/functions/data/streamers.json"
);
const publicCachePath = path.join(
  __dirname,
  "../public/data/streamers_cache.json"
);

// 🛠️ Helper pour exécuter des commandes
function runCommand(cmd) {
  console.log(`$ ${cmd}`);
  execSync(cmd, { stdio: "inherit" });
}

(async () => {
  try {
    console.log("⬆️ Envoi de streamers.json vers S3...");
    const raw = fs.readFileSync(localStreamersPath, "utf8");
    await s3
      .putObject({
        Bucket: bucketName,
        Key: "streamers.json",
        Body: raw,
        ContentType: "application/json",
      })
      .promise();
    console.log("✅ streamers.json mis à jour dans S3.");

    console.log(
      "⏳ Attente 20 sec pour laisser Netlify enrichir les données..."
    );
    await new Promise((resolve) => setTimeout(resolve, 20000));

    console.log("⬇️ Téléchargement de streamers_cache.json depuis S3...");
    const cacheData = await s3
      .getObject({ Bucket: bucketName, Key: "streamers_cache.json" })
      .promise();
    fs.writeFileSync(publicCachePath, cacheData.Body.toString());
    console.log("✅ streamers_cache.json mis à jour localement.");

    console.log("🏗️ Build du site...");
    runCommand("npm run build");

    console.log("🔧 Commit & push...");
    runCommand("git add .");
    runCommand('git commit -m "💾 Maj streamers + build auto"');
    runCommand("git push origin main");

    console.log("🎉 Terminé !");
  } catch (err) {
    console.error("❌ Erreur pendant la mise à jour :", err.message);
  }
})();
