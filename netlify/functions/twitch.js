const fs = require("fs");
const path = require("path");

const cachePath = path.join(__dirname, "../data/streamers_cache.json");

exports.handler = async () => {
  try {
    const cached = JSON.parse(fs.readFileSync(cachePath, "utf8"));
    console.log("✅ Lecture du cache réussie");
    return {
      statusCode: 200,
      body: JSON.stringify(cached),
      headers: {
        "Content-Type": "application/json",
      },
    };
  } catch (err) {
    console.error("❌ Échec de lecture du cache :", err.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Erreur lecture cache" }),
    };
  }
};
