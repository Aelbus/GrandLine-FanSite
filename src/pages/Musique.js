import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import playlistsData from "./playlists.json";
import "../styles/pages/Musique.css";

const Musique = () => {
  const [playlists, setPlaylists] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  useEffect(() => {
    setPlaylists(playlistsData);
  }, []);

  const selectTrack = (url) => {
    setCurrentTrack(url);
    setPlaying(true);
  };

  const togglePlay = () => setPlaying((prev) => !prev);
  const stopPlayback = () => {
    setPlaying(false);
    setCurrentTrack(null);
  };

  const handleVolumeChange = (e) => {
    const value = parseFloat(e.target.value);
    setVolume(value);
  };

  return (
    <>
      <div className="music-layout">
        <div className="playlist-column">
          {playlists.map((creator, idx) => (
            <div className="creator-section" key={idx}>
              <h3>{creator.creator}</h3>
              <ul className="playlist">
                {creator.playlists.map((track, index) => (
                  <li
                    key={index}
                    className={track.url === currentTrack ? "active-track" : ""}
                    onClick={() => selectTrack(track.url)}
                  >
                    {track.title}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="player-column hide-on-mobile">
          {currentTrack ? (
            <ReactPlayer
              url={currentTrack}
              playing={playing}
              controls={true}
              volume={volume}
              width="100%"
              height="100%"
              config={{
                youtube: {
                  playerVars: {
                    modestbranding: 1,
                    controls: 1,
                    showinfo: 0,
                  },
                },
              }}
            />
          ) : (
            <div className="player-placeholder">🎧 Sélectionne une Musique</div>
          )}
        </div>
      </div>

      {currentTrack && (
        <div className="mini-player-sticky">
          <div className="track-info">
            {getTitleFromUrl(currentTrack, playlists)}
          </div>
          <div className="controls">
            <button onClick={togglePlay}>{playing ? "⏸️" : "▶️"}</button>
            <button onClick={stopPlayback}>⏹️</button>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={handleVolumeChange}
              className="volume-slider"
              title="Volume"
            />
          </div>
        </div>
      )}
    </>
  );
};

const getTitleFromUrl = (url, playlists) => {
  for (const creator of playlists) {
    for (const track of creator.playlists) {
      if (track.url === url) return track.title;
    }
  }
  return "Inconnu";
};

export default Musique;
