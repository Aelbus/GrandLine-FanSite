import React from "react";
import "../styles/pages/Video.css";
import Twitchico from "../assets/icons/twitch.png";
import YTBico from "../assets/icons/youtube.png";
import Twitterico from "../assets/icons/twitter.png";
import Portfolioico from "../assets/icons/portfolio.png";

const creators = [
  {
    name: "Dpix",
    video: "https://www.youtube.com/embed/ODQk4iFmIJw?si=d8pa0xW0BV0b8Zyk",
    desc: `Hello ! Moi c'est Chris, 31 ans et toujours au top 😎 !
Aka dPix, professionnellement je travaille dans le monde de l'animation 3D, et sur mon temps libre je fais de la peinture digitale et traditionnelle, ainsi que de l'écriture et du développement visuel.
J'ai grandi avec des jeux de plateau D&G, et suis donc fan de RolePlay autant in real life que IG. N'ayant plus le temps de jouer je participe à ma manière au Lore de GrandLine ❤️`,
    links: [
      { href: "https://www.twitch.tv/dpix", icon: Twitchico, alt: "Twitch" },
      {
        href: "https://www.youtube.com/channel/UCDO0WfQxtmqV4-SL5_4EnDQ",
        icon: YTBico,
        alt: "YouTube",
      },
      {
        href: "https://twitter.com/DeathPix",
        icon: Twitterico,
        alt: "Twitter",
      },
    ],
  },
  {
    name: "Varggan",
    video: "https://www.youtube.com/embed/K4zJMXyV7_U?si=dm-qGhguzzveFz2Y",
    desc: `Bonjour je m'appelle Eymen, 😀
Je suis concept artist et illustrateur (surtout concept artist), c'est ma passion depuis toujours, surtout quand ça touche aux jeux vidéo.
Je suis également designer, dans le montage, tel que les miniatures YouTube ou autre. Je suis toujours à la recherche de boulot.
Bref, on s'en fout de ma vie, je suis là pour faire kiffer tout le monde avec mes petits travaux. 😎`,
    links: [
      { href: "https://www.twitch.tv/varggan", icon: Twitchico, alt: "Twitch" },
      {
        href: "https://www.youtube.com/channel/UCA8zQ-YdZ7MozoPfBdLWxPA",
        icon: YTBico,
        alt: "YouTube",
      },
      {
        href: "https://twitter.com/Varggan__",
        icon: Twitterico,
        alt: "Twitter",
      },
      {
        href: "https://www.artstation.com/varggan",
        icon: Portfolioico,
        alt: "ArtStation",
      },
    ],
  },
];

const Video = () => {
  return (
    <div className="Video-div">
      {creators.map((creator, index) => (
        <div className="Creator-container" key={index}>
          <iframe
            src={creator.video}
            title={`video-${index}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <div className="creator">
            <div className="creator-info">
              <h3>{creator.name}</h3>
              <p>{creator.desc}</p>
            </div>
            <div className="creator-reseau">
              {creator.links.map((link, i) => (
                <a key={i} href={link.href} target="_blank" rel="noreferrer">
                  <img src={link.icon} alt={link.alt} />
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Video;
