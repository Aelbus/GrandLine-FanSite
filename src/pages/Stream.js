import { useState } from "react";
import "../styles/pages/Stream.css";
import Twitchico from "../assets/icons/twitch.png";

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
import ZeAaron from "../assets/images/stream/zeaaron_.png";
import postbadon from "../assets/images/stream/postbadon.png";
import loly from "../assets/images/stream/lolypokicake.png";
import dorel from "../assets/images/stream/Dorelium.png";
import bilou from "../assets/images/stream/Bilou.png";
import reymann from "../assets/images/stream/R3YMANN.png";
import der_glaude from "../assets/images/stream/der_glaude.png";
import latuah from "../assets/images/stream/latuah.png";
import saniahasna from "../assets/images/stream/saniahasna.png";
import qidou from "../assets/images/stream/Qidou.png";
import nekzioh from "../assets/images/stream/NekzioH.png";
import lilquinn from "../assets/images/stream/lil__quinn.png";
import terrycoco from "../assets/images/stream/terrycoco.jpeg";
import violence from "../assets/images/stream/vi00lence.png";
import elfiguees from "../assets/images/stream/el_figuees.png";
import kiko from "../assets/images/stream/kiko_Tech.png";
import klear from "../assets/images/stream/KlearRadio.png";
import laspepitasse from "../assets/images/stream/las_pepitasse.png";
import boblegob from "../assets/images/stream/boblegob.png";
import goudaal from "../assets/images/stream/goudaal.png";
import izacarg from "../assets/images/stream/izac95arg.png";
import siknyre from "../assets/images/stream/siknyre_.png";
import tekoyoung from "../assets/images/stream/tekoyoungcity_.png";
import kalavera from "../assets/images/stream/KaLaVeRaX3.png";
import sayrann from "../assets/images/stream/sayrannW.png";
import heyar from "../assets/images/stream/heyarTV.png";
import zipper from "../assets/images/stream/zipper.png";
import llswi from "../assets/images/stream/LLswi.jpeg";
import nayrenns from "../assets/images/stream/NAYRENNS.png";
import kalandras from "../assets/images/stream/eKalandras.png";
import naked from "../assets/images/stream/Nacked.png";
import frenchdee from "../assets/images/stream/frenchdee.png";
import spincheck from "../assets/images/stream/Spincheck.png";
import feykow from "../assets/images/stream/feykoww.png";
import zxyassine from "../assets/images/stream/zx_yassine.png";
import hirukiart from "../assets/images/stream/hirukiart.png";
import darcy from "../assets/images/stream/darcy_tv.png";
import ayakataz from "../assets/images/stream/ayakataz.png";

const Stream = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const projects = [
    {
      nomRP: "John APOTRI - multiRP",
      nomIRL: "LolyPokiCake",
      image: loly,
      info: "Fondateur - Staff",
      url: "https://www.twitch.tv/lolypokicake",
    },
    {
      nomRP: "Gaston BIGMAN",
      nomIRL: "Aminematue",
      image: Aminematue,
      info: "Fondateur",
      url: "https://www.twitch.tv/aminematue",
    },
    {
      nomRP: "Matthew BELLAMY",
      nomIRL: "Dorelium",
      info: "Staff",
      image: dorel,
      url: "https://www.twitch.tv/dorelium",
    },
    {
      nomRP: "Denzel PALMER",
      nomIRL: "3DENZ",
      info: "Staff",
      image: DENZ,
      url: "https://www.twitch.tv/3DENZ",
    },
    {
      nomRP: "Alexandre FORBES",
      nomIRL: "ZeAaron_",
      info: "Staff",
      image: ZeAaron,
      url: "https://www.twitch.tv/zeaaron_",
    },
    {
      nomRP: "Hector MORA",
      nomIRL: "PostbaDON",
      info: "Staff",
      image: postbadon,
      url: "https://www.twitch.tv/postbadon",
    },
    {
      nomRP: "Igor CASIMIR",
      nomIRL: "Zipperr",
      info: "Staff",
      image: zipper,
      url: "https://www.twitch.tv/zipperr",
    },
    {
      nomRP: "Arsene & Melton",
      nomIRL: "KlearRadio",
      image: klear,
      info: "Weazel News",
      url: "https://www.twitch.tv/klearradio",
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
      info: "",
      url: "https://www.twitch.tv/elbwa78",
    },
    {
      nomRP: "Stella FORBES",
      nomIRL: "HeavenFox",
      image: HeavenFox,
      url: "https://www.twitch.tv/heavenfox",
    },
    {
      nomRP: "Alix FORBES",
      nomIRL: "Chach0u__",
      image: Chachou,
      info: "",
      url: "https://www.twitch.tv/Chach0u__",
    },
    {
      nomRP: "David FORBES",
      nomIRL: "REDMAFIA_TV",
      image: redmafia,
      url: "https://www.twitch.tv/redmafia_tv",
    },
    {
      nomRP: "Britney HUNDERSON",
      nomIRL: "Darcy_tv",
      image: darcy,
      info: "Présentatrice Météo",
      url: "https://www.twitch.tv/darcy_tv",
    },
    {
      nomRP: "Cesar ALARCON",
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
      nomRP: "Emily PALMER",
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
      nomRP: "Steeve WALKINS",
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
      nomRP: "Mike GORDON",
      nomIRL: "Zaardoz",
      image: zaardoz,
      url: "https://www.twitch.tv/zaardoz",
    },
    {
      nomRP: "Tara LEWIS",
      nomIRL: "Ludmyaa",
      image: ludmyaa,
      info: "",
      url: "https://www.twitch.tv/ludmyaa",
    },
    {
      nomRP: "Mamie Suzie BIGMAN",
      nomIRL: "Hyenaa",
      image: hyenaa,
      info: "Mort RP",
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
      nomRP: "Fraise MIRA",
      nomIRL: "Hirukiart",
      image: hirukiart,
      info: "",
      url: "https://www.twitch.tv/hirukiart",
    },
    {
      nomRP: "Diana ALLOCCO",
      nomIRL: "Evelunes",
      image: evelunes,
      info: "",
      url: "https://www.twitch.tv/evelunes",
    },
    {
      nomRP: "Lucy DAMORT",
      nomIRL: "AyaKataz",
      image: ayakataz,
      info: "",
      url: "https://www.twitch.tv/ayakataz",
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
      info: "",
      url: "https://www.twitch.tv/latomatemozza",
    },
    {
      nomRP: "Javier CHAMORRO",
      nomIRL: "Bilou",
      image: bilou,
      info: "",
      url: "https://www.twitch.tv/bilou",
    },
    {
      nomRP: "Balentina CUCALACHA",
      nomIRL: "Kailusss",
      image: kailusss,
      info: "",
      url: "https://www.twitch.tv/Kailussss",
    },
    {
      nomRP: "Béatrice BONIFACE",
      nomIRL: "R3YMANN",
      image: reymann,
      info: "",
      url: "https://www.twitch.tv/R3YMANN",
    },
    {
      nomRP: "Monsieur DUBIDON",
      nomIRL: "Der_Glaude",
      image: der_glaude,
      info: "",
      url: "https://www.twitch.tv/R3YMANN",
    },
    {
      nomRP: "Stephen W.FAUST",
      nomIRL: "Feykow",
      image: feykow,
      info: "",
      url: "https://www.twitch.tv/feykoww",
    },
    {
      nomRP: "Alice DELACOURS",
      nomIRL: "Latuah",
      image: latuah,
      info: "",
      url: "https://www.twitch.tv/latuah",
    },
    {
      nomRP: "Harry NOLUCK",
      nomIRL: "SpinCheck",
      image: spincheck,
      info: "",
      url: "https://www.twitch.tv/Spincheck",
    },
    {
      nomRP: "Enriqué DELGADO",
      nomIRL: "ZX_Yassine",
      image: zxyassine,
      info: "",
      url: "https://www.twitch.tv/zx_yassine",
    },
    {
      nomRP: "Gary JAY",
      nomIRL: "FrenchDee",
      image: frenchdee,
      info: "",
      url: "https://www.twitch.tv/frenchdee",
    },
    {
      nomRP: "Monique SCHMITTELBOURG",
      nomIRL: "Nacked",
      image: naked,
      info: "",
      url: "https://www.twitch.tv/nacked",
    },
    {
      nomRP: "Ezra GREY",
      nomIRL: "eKalandras",
      image: kalandras,
      info: "",
      url: "https://www.twitch.tv/ekalandras",
    },
    {
      nomRP: "Felichia DELAMANCHA",
      nomIRL: "SaniaHasna",
      image: saniahasna,
      info: "",
      url: "https://www.twitch.tv/saniahasna",
    },
    {
      nomRP: "Addebayo OKONKWO",
      nomIRL: "Qidou",
      image: qidou,
      info: "",
      url: "https://www.twitch.tv/qidou",
    },
    {
      nomRP: "Dylan POTIN",
      nomIRL: "NAYRENNS",
      image: nayrenns,
      info: "Richie M-Bappe",
      url: "https://www.twitch.tv/nayrenns",
    },
    {
      nomRP: "Léonardo SKORPION",
      nomIRL: "NekZioH",
      image: nekzioh,
      info: "",
      url: "https://www.twitch.tv/nekzioh",
    },
    {
      nomRP: "Olya NELSON",
      nomIRL: "Lil__Quinn",
      image: lilquinn,
      info: "",
      url: "https://www.twitch.tv/lil__quinn",
    },
    {
      nomRP: "Terry COCO",
      nomIRL: "TerryCoco",
      image: terrycoco,
      info: "",
      url: "https://www.twitch.tv/terrycoco",
    },
    {
      nomRP: "Sam DJORIS",
      nomIRL: "Vi00lence",
      image: violence,
      info: "",
      url: "https://www.twitch.tv/vi00lence",
    },
    {
      nomRP: "Isabella LOPEZ",
      nomIRL: "El_Figuees",
      image: elfiguees,
      info: "",
      url: "https://www.twitch.tv/el_figuees",
    },
    {
      nomRP: "Jake THOMPSON",
      nomIRL: "Kiko_Tech",
      image: kiko,
      info: "",
      url: "https://www.twitch.tv/kiko_tech",
    },
    {
      nomRP: "Mercedes MARCOU",
      nomIRL: "Las_Pepitasse",
      image: laspepitasse,
      info: "",
      url: "https://www.twitch.tv/las_pepitasse",
    },
    {
      nomRP: "Michel ENCLUME",
      nomIRL: "BobLeGob",
      image: boblegob,
      info: "",
      url: "https://www.twitch.tv/boblegob",
    },
    {
      nomRP: "Tyler TURNER",
      nomIRL: "Goudaal",
      image: goudaal,
      info: "",
      url: "https://www.twitch.tv/goudaal",
    },
    {
      nomRP: "Daryl DECKER",
      nomIRL: "Izac95arg",
      image: izacarg,
      info: "",
      url: "https://www.twitch.tv/Izac95arg",
    },
    {
      nomRP: "Donnie FRANKLIN",
      nomIRL: "Siknyre_",
      image: siknyre,
      info: "Roi des rats",
      url: "https://www.twitch.tv/siknyre__",
    },
    {
      nomRP: "Tom CARTER",
      nomIRL: "TekoYoungCity_",
      image: tekoyoung,
      info: "",
      url: "https://www.twitch.tv/tekoyoungcity_",
    },
    {
      nomRP: "Tego OCHOA",
      nomIRL: "KaLaVeRaX3",
      image: kalavera,
      info: "",
      url: "https://www.twitch.tv/kalaverax3",
    },
    {
      nomRP: "Ava MENDEZ",
      nomIRL: "SayrannW",
      image: sayrann,
      info: "",
      url: "https://www.twitch.tv/sayrannw",
    },
    {
      nomRP: "Jean-François WALTON",
      nomIRL: "HeyarTV",
      image: heyar,
      info: "",
      url: "https://www.twitch.tv/heyarTV",
    },
    {
      nomRP: "Ketly HISPANIOLA",
      nomIRL: "LLSYWI",
      image: llswi,
      info: "",
      url: "https://www.twitch.tv/llyswi",
    },
  ];

  const filteredProjects = projects.filter(
    (project) =>
      project.nomRP.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.nomIRL.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (project.info &&
        project.info.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <main className="projects-div-stream">
      <input
        className="search-bar"
        type="text"
        placeholder="Rechercher un Streamer par NomRP, PseudoTwitch ou Tag... "
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="card-container-stream">
        {filteredProjects.map((project, index) => (
          <div key={index} className="card-stream">
            <figure>
              <img src={project.image} alt={project.nomIRL} />
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
