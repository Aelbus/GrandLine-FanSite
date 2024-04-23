import "../styles/pages/Stream.css";
import Twitchico from "../assets/icons/twitch.webp";

import HeavenFox from "../assets/images/stream/HeavenFox.png";
import TatianaTV from "../assets/images/stream/tatiana_tv.png";
import MasterSnakou from "../assets/images/stream/mastersnakou.png";
import Aminematue from "../assets/images/stream/aminematue.png";
import redmafia from "../assets/images/stream/remafia_tv.png";
import DENZ from "../assets/images/stream/3DENZ.png";

const Stream = () => {
  const projects = [
    {
      nomRP: "Gaston BIGMAN",
      nomIRL: "Aminematue",
      image: Aminematue,
      info: "Fondateur",
      url: "https://www.twitch.tv/aminematue",
    },
    {
      nomRP: "Jason BIGMAN",
      nomIRL: "MasterSnakou",
      image: MasterSnakou,
      url: "https://www.twitch.tv/mastersnakou",
    },
    {
      nomRP: "Nova FORBES",
      nomIRL: "Tatiana_TV",
      image: TatianaTV,
      url: "https://www.twitch.tv/tatiana_tv",
    },
    {
      nomRP: "Stella FORBES",
      nomIRL: "HeavenFox",
      image: HeavenFox,
      url: "https://www.twitch.tv/heavenfox",
    },
    {
      nomRP: "David FORBES",
      nomIRL: "REDMAFIA_TV",
      image: redmafia,
      url: "https://www.twitch.tv/redmafia_tv",
    },
    {
      nomRP: "Denzel PALMER",
      nomIRL: "3DENZ",
      info: "STAFF",
      image: DENZ,
      url: "https://www.twitch.tv/3DENZ",
    },
  ];

  return (
    <main className="projects-div">
      <div className="card-container-stream">
        {projects.map((project, index) => (
          <div key={index} className="card-stream">
            <figure>
              <img src={project.image} alt={project.title} />
              <p className="Infosupp">{project.info}</p>
              <figcaption>
                <h2>{project.nomIRL}</h2>
                <p>{project.nomRP}</p>
                <a href={project.url} target="_blank" rel="noreferrer">
                  <img src={Twitchico} alt={project.nomIRL} />
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
