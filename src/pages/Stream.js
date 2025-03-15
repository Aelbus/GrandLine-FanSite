import React, { useState, useEffect } from "react";
import Twitchico from "../assets/icons/twitch.png";
import "../styles/pages/Stream.css";

const Stream = () => {
  const [streamers, setStreamers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArc, setSelectedArc] = useState("Sc");

  const arcs = ["School", "Survivor", "Pentacle", "FortCarson", "RedDeadRP"];

  useEffect(() => {
    const fetchStreamerData = async () => {
      try {
        const timestamp = encodeURIComponent(Date.now());
        const url = `/data/streamers_cache.json?nocache=${timestamp}`;

        console.log(`📡 Chargement depuis : ${url}`);
        const res = await fetch(url);

        if (!res.ok) throw new Error(`Erreur HTTP: ${res.status}`);

        const data = await res.json();
        console.log("📦 Données reçues :", data);

        const streamersArray = Array.isArray(data)
          ? data
          : Array.isArray(data.streamers)
          ? data.streamers
          : [];

        const tagPriority = {
          "Fondateur - Staff": 1,
          Fondateur: 2,
          "Dev - Staff": 3,
          Staff: 4,
        };

        const sortedStreamers = [...streamersArray].sort((a, b) => {
          const tagA = tagPriority[a.tag] || 999;
          const tagB = tagPriority[b.tag] || 999;
          if (tagA !== tagB) return tagA - tagB;

          const nameA = (a.display_name || a.username || "").toLowerCase();
          const nameB = (b.display_name || b.username || "").toLowerCase();
          return nameA.localeCompare(nameB);
        });

        setStreamers(sortedStreamers);
      } catch (error) {
        console.error("❌ Erreur de récupération des streamers :", error);
      }
    };

    fetchStreamerData();
  }, []);

  const filteredStreamers = streamers.filter(
    (streamer) =>
      streamer.arcs?.includes(selectedArc) &&
      streamer.display_name &&
      (streamer.display_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        streamer.username?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (streamer.nomRP?.[selectedArc] &&
          streamer.nomRP[selectedArc]
            .toLowerCase()
            .includes(searchTerm.toLowerCase())) ||
        (streamer.tag &&
          streamer.tag.toLowerCase().includes(searchTerm.toLowerCase())))
  );

  return (
    <main className="projects-div-stream">
      <div className="arc-buttons">
        {arcs.map((arc) => (
          <button
            key={arc}
            className={`arc-button ${selectedArc === arc ? "active" : ""}`}
            onClick={() => setSelectedArc(arc)}
          >
            {arc}
          </button>
        ))}
      </div>

      <input
        className="search-bar"
        type="text"
        placeholder="Rechercher un Streamer par NomRP ou Pseudo Twitch..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="card-container-stream">
        <p className="compteur">
          Nombre de streamers : {filteredStreamers.length}
        </p>
        <p className="ArcSelect">Selectionne un arc</p>

        {filteredStreamers.map((streamer, index) => (
          <div key={index} className="card-stream">
            <figure>
              <img
                src={streamer.profile_image_url || ""}
                alt={streamer.display_name || "Unknown"}
              />
              <figcaption>
                <p>
                  <span className="name">
                    {streamer.display_name || "Unknown"}
                  </span>
                  <br />
                  <span className="nomrp">
                    {streamer.nomRP?.[selectedArc] || "???"}
                  </span>
                  <br />
                  <span className="tag">{streamer.tag || ""}</span>
                </p>
                <a
                  href={`https://www.twitch.tv/${streamer.username}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Twitchico} alt="Twitch" />
                </a>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Stream;
