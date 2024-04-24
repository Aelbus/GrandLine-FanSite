import "../styles/pages/Stream.css";
import Twitchico from "../assets/icons/twitch.webp";

import HeavenFox from "../assets/images/stream/HeavenFox.png";
import TatianaTV from "../assets/images/stream/tatiana_tv.png";
import MasterSnakou from "../assets/images/stream/mastersnakou.png";
import Aminematue from "../assets/images/stream/aminematue.png";
import redmafia from "../assets/images/stream/remafia_tv.png";
import DENZ from "../assets/images/stream/3DENZ.png";
import Chachou from "../assets/images/stream/chach0u__.png";
import trixy from "../assets/images/stream/xo_trixy.png";
import aneyaris from "../assets/images/stream/Aneyaris_.png";
import GR from "../assets/images/stream/Gamesroses.png";
import byilhann from "../assets/images/stream/Byilhann.png";
import carbonhh from "../assets/images/stream/CarboNHH.png";
import elbwa from "../assets/images/stream/Elbwa78.png";
import locklear from "../assets/images/stream/Locklear.png";
import samo from "../assets/images/stream/samolito9.png";
import flamby from "../assets/images/stream/Flamby.png";
import ludmyaa from "../assets/images/stream/Ludmyaa.jpeg";
import zaardoz from "../assets/images/stream/Zaardoz.png";
import zwave from "../assets/images/stream/Zwave69.png";
import medja from "../assets/images/stream/DVM_Medja.png";
import gzafizzle from "../assets/images/stream/GzaFizzle.jpeg";
import hyenaa from "../assets/images/stream/hyenaa.png";
import anaisMrn from "../assets/images/stream/anaismrn.png";
import ascoco from "../assets/images/stream/as_coco.png";
import ayline213 from "../assets/images/stream/ayline213.png";
import evelunes from "../assets/images/stream/evelunes.png";
import kailusss from "../assets/images/stream/kailusss.png";
import latomatemozza from "../assets/images/stream/LaTomateMozza.png";
import nicotheo from "../assets/images/stream/Nicotheo_off.png";
import panpanqq from "../assets/images/stream/panpanqqoh.jpeg";
import saadikoi from "../assets/images/stream/saadikoooi.png";

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
      nomRP: "Denzel PALMER",
      nomIRL: "3DENZ",
      info: "STAFF",
      image: DENZ,
      url: "https://www.twitch.tv/3DENZ",
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
      nomRP: "Connor FORBES",
      nomIRL: "Elbwa78",
      image: elbwa,
      info: "No Stream",
      url: "https://www.twitch.tv/elbwa78",
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
      nomRP: "Alix FORBES",
      nomIRL: "Chach0u__",
      image: Chachou,
      info: "No Stream",
      url: "https://www.twitch.tv/Chach0u__",
    },
    {
      nomRP: "César ???",
      nomIRL: "DVM_medja",
      image: medja,
      url: "https://www.twitch.tv/dvm_medja",
    },
    {
      nomRP: "Jodie SAVAGE",
      nomIRL: "Xo_trixy",
      image: trixy,
      url: "https://www.twitch.tv/xo_trixy",
    },
    {
      nomRP: "Lenny CARTER",
      nomIRL: "Zwave69",
      image: zwave,
      url: "https://www.twitch.tv/zwave69",
    },
    {
      nomRP: "Narine MUCUS",
      nomIRL: "Locklear",
      image: locklear,
      url: "https://www.twitch.tv/locklear",
    },
    {
      nomRP: "emily PALMER",
      nomIRL: "Aneyaris_",
      image: aneyaris,
      url: "https://www.twitch.tv/aneyaris_",
    },
    {
      nomRP: "Buck BARREL",
      nomIRL: "Byilhann",
      image: byilhann,
      url: "https://www.twitch.tv/byilhann",
    },
    {
      nomRP: "Ray WILKINS",
      nomIRL: "Samolito9",
      image: samo,
      url: "https://www.twitch.tv/samolito9",
    },
    {
      nomRP: "Steeve ???",
      nomIRL: "Flamby",
      image: flamby,
      url: "https://www.twitch.tv/flamby",
    },
    {
      nomRP: "BigJack",
      nomIRL: "GamesRoses",
      image: GR,
      url: "https://www.twitch.tv/gamesroses",
    },
    {
      nomRP: "Tyler JONES",
      nomIRL: "CarbonHNN",
      image: carbonhh,
      url: "https://www.twitch.tv/carbonhh",
    },
    {
      nomRP: "Jimmy OPPENHEIM",
      nomIRL: "GzaFizzle",
      image: gzafizzle,
      url: "https://www.twitch.tv/gzafizzle",
    },
    {
      nomRP: "??? GORDON",
      nomIRL: "Zaardoz",
      image: zaardoz,
      url: "https://www.twitch.tv/zaardoz",
    },
    {
      nomRP: "Tara LEWIS",
      nomIRL: "Ludmyaa",
      image: ludmyaa,
      info: "No Stream",
      url: "https://www.twitch.tv/ludmyaa",
    },
    {
      nomRP: "Mamie Suzie BIGMAN",
      nomIRL: "Hyenaa",
      image: hyenaa,
      info: "RIP - No Stream",
      url: "https://www.twitch.tv/hyenaaa",
    },
    {
      nomRP: "Zoe BAKER",
      nomIRL: "AnaisMRN",
      image: anaisMrn,
      info: "La Zoooooo'",
      url: "https://www.twitch.tv/anaisMRN",
    },
    {
      nomRP: "Robert WALTON",
      nomIRL: "Nicotheo_Off",
      image: nicotheo,
      info: "",
      url: "https://www.twitch.tv/nicotheo_off",
    },
    {
      nomRP: "Patrice PLOT",
      nomIRL: "PanpanQqOH",
      image: panpanqq,
      info: "",
      url: "https://www.twitch.tv/panpanqqoh",
    },
    {
      nomRP: "Framboise LOPEZ",
      nomIRL: "Ayline213",
      image: ayline213,
      info: "",
      url: "https://www.twitch.tv/ayline213",
    },
    {
      nomRP: "Diana ALLOCCO",
      nomIRL: "Evelunes",
      image: evelunes,
      info: "",
      url: "https://www.twitch.tv/evelunes",
    },
    {
      nomRP: "Alya Rosales MORA",
      nomIRL: "As_Coco",
      image: ascoco,
      info: "",
      url: "https://www.twitch.tv/as_coco",
    },
    {
      nomRP: "Harukichi YAMAGUCHI",
      nomIRL: "Saadikoooi",
      image: saadikoi,
      info: "",
      url: "https://www.twitch.tv/saadikoooi",
    },
    {
      nomRP: "Guadalupe MORA",
      nomIRL: "LaTomateMozza",
      image: latomatemozza,
      info: "No Sream",
      url: "https://www.twitch.tv/latomatemozza",
    },
    {
      nomRP: "Balentina CUCALACHA",
      nomIRL: "Kailusss",
      image: kailusss,
      info: "",
      url: "https://www.twitch.tv/Kailusss",
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
