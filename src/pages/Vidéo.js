import React from "react";
import "../styles/pages/Video.css";
import Twitchico from "../assets/icons/twitch.png";
import YTBico from "../assets/icons/youtube.png";
import Twitterico from "../assets/icons/twitter.png";
import Portfolioico from "../assets/icons/portfolio.png";

const Video = () => {
  return (
    <div className="Video-div">
      <div className="Creator-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ODQk4iFmIJw?si=d8pa0xW0BV0b8Zyk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <div className="creator">
          <div className="creator-info">
            <h3>Dpix</h3>
            <p>
              Hello ! Moi c'est Chris, 31 ans et toujours au top 😎 !<br /> Aka
              dPix, professionnellement je travail dans le monde de l'animation
              3D, et sur mon temps libre je fais de la peinture digital et
              traditionnel, ainsi que de l'écriture et du developpement visuel.
              J'ai grandi avec des jeux de plateaux D&G, et suis donc fan de
              RolePlay autant in real Life que IG. N'ayant plus le temps de
              jouer je participe à ma manière au Lore de GrandLine ❤️
            </p>
          </div>
          <div className="creator-reseau">
            <a
              href="https://www.twitch.tv/dpix"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Twitchico} alt="Twitch Icon" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCDO0WfQxtmqV4-SL5_4EnDQ "
              target="_blank"
              rel="noreferrer"
            >
              <img src={YTBico} alt="Youtube Icon" />
            </a>
            <a
              href="https://twitter.com/DeathPix"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Twitterico} alt="Twitter(X) Icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="Creator-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/K4zJMXyV7_U?si=dm-qGhguzzveFz2Y"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <div className="creator">
          <div className="creator-info">
            <h3>Varggan</h3>
            <p>
              Bonjour Je m'appelle Eymen, 😀 <br />
              je suis concept artist et illustrateur (surtout concept artist),
              c'est ma passion depuis toujours, surtout quand ça touche aux jeux
              vidéo. Je suis également designer, dans le montage, tel que les
              miniatures youtube ou autre, je suis toujours à la recherche de
              boulôt. <br /> Bref on s'en fou de ma vie, je suis là pour faire
              kiffer tout le monde avec mes petits travaux. 😎
            </p>
          </div>
          <div className="creator-reseau">
            <a
              href="https://www.twitch.tv/varggan"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Twitchico} alt="#" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCA8zQ-YdZ7MozoPfBdLWxPA"
              target="_blank"
              rel="noreferrer"
            >
              <img src={YTBico} alt="#" />
            </a>
            <a
              href="https://twitter.com/Varggan__"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Twitterico} alt="#" />
            </a>
            <a
              href="https://www.artstation.com/varggan"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Portfolioico} alt="#" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Video;
