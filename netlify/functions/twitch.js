const axios = require("axios");
const fs = require("fs");
const path = require("path");

// Identifiants Twitch
const clientId = "u1ne1fj44jwu9p37xh6wu7t0n3lg7c";
const clientSecret = "yjg5e9fukj3dlz1frjmxr83ikarsiy";

// Charger les données du fichier JSON
const streamerFilePath = path.join(__dirname, "../data/streamers.json");

exports.handler = async function () {
  try {
    const fileData = fs.readFileSync(streamerFilePath, "utf8");
    const streamers = JSON.parse(fileData);

    // 🔐 Récupérer un token d'accès
    const tokenResponse = await axios.post(
      "https://id.twitch.tv/oauth2/token",
      null,
      {
        params: {
          client_id: clientId,
          client_secret: clientSecret,
          grant_type: "client_credentials",
        },
      }
    );

    const accessToken = tokenResponse.data.access_token;

    // 🔁 Diviser les usernames en lots de 50
    const usernames = streamers.map((s) => s.username);
    const batches = [];

    for (let i = 0; i < usernames.length; i += 50) {
      batches.push(usernames.slice(i, i + 50));
    }

    const enrichedStreamers = [];

    for (const batch of batches) {
      const res = await axios.get(`https://api.twitch.tv/helix/users`, {
        headers: {
          "Client-ID": clientId,
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          login: batch,
        },
      });

      // Associer les données Twitch aux streamers
      res.data.data.forEach((userData) => {
        const original = streamers.find(
          (s) => s.username.toLowerCase() === userData.login.toLowerCase()
        );
        if (original) {
          enrichedStreamers.push({
            ...original,
            profile_image_url: userData.profile_image_url,
            display_name: userData.display_name,
            login: userData.login,
          });
        }
      });
    }

    return {
      statusCode: 200,
      body: JSON.stringify(enrichedStreamers),
      headers: {
        "Content-Type": "application/json",
      },
    };
  } catch (err) {
    console.error("❌ Erreur globale :", err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Erreur lors de la récupération des données Twitch",
      }),
    };
  }
};
