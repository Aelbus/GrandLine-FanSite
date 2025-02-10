import React, { useState, useEffect } from "react";
import axios from "axios";
import Twitchico from "../assets/icons/twitch.png";
import "../styles/pages/Stream.css";

const Stream = () => {
  const [streamers, setStreamers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalStreamers, setTotalStreamers] = useState(0);
  const [selectedArc, setSelectedArc] = useState("School");

  const arcs = ["School", "Survivor", "Pentacle", "Fort Carson"];

  useEffect(() => {
    const fetchStreamerData = async () => {
      try {
        const response = await axios.post(
          `https://id.twitch.tv/oauth2/token`,
          new URLSearchParams({
            client_id: "u1ne1fj44jwu9p37xh6wu7t0n3lg7c",
            client_secret: "77435hlfxy5njb0at679o91w6a2jo6",
            grant_type: "client_credentials",
          })
        );
        const accessToken = response.data.access_token;

        const streamerDataList = [
          {
            username: "LolyPokiCake",
            nomRP: {
              School: "Andrew PETERSON",
              Survivor: "Multiple Personnage",
              Pentacle: "John APOTRIE",
              "Fort Carson": "Multiple Personnage",
            },
            tag: "Fondateur - Staff",
            arcs: ["School", "Survivor", "Pentacle", "Fort Carson"],
          },
          {
            username: "Aminematue",
            nomRP: {
              School: "Amine ZEUBIO",
              Survivor: "Amine MATHIEU",
              Pentacle: "Gaston BIGMAN",
              "Fort Carson": "Larry COLBY",
            },
            tag: "Fondateur",
            arcs: ["School", "Survivor", "Pentacle", "Fort Carson"],
          },
          {
            username: "Dorelium",
            nomRP: { Pentacle: "Matthew BELLAMY" },
            tag: "Staff",
            arcs: ["Pentacle"],
          },
          {
            username: "malariatv",
            nomRP: { Pentacle: "Owen Davis - Ziggen", Survivor: "Clark LEWIS" },
            tag: "Staff",
            arcs: ["Pentacle", "Survivor"],
          },
          {
            username: "3DENZ",
            nomRP: { Pentacle: "Denzel PALMER" },
            tag: "Staff",
            arcs: ["Pentacle"],
          },
          {
            username: "zeaaron_",
            nomRP: { Pentacle: "Alexandre FORBES" },
            tag: "Staff",
            arcs: ["Pentacle"],
          },
          {
            username: "postbadon",
            nomRP: { Pentacle: "Hector MORA" },
            tag: "Staff",
            arcs: ["Pentacle"],
          },
          {
            username: "hassvnz",
            nomRP: { Pentacle: "Mikey" },
            tag: "Staff",
            arcs: ["Pentacle"],
          },
          {
            username: "zipperr",
            nomRP: { Pentacle: "Igor CASIMIR" },
            tag: "Staff",
            arcs: ["Pentacle"],
          },
          {
            username: "klearradio",
            nomRP: { Pentacle: "Arsene & Melton" },
            tag: "Weazel News",
            arcs: ["Pentacle"],
          },
          {
            username: "barbenoire__00",
            nomRP: { Pentacle: "Arsene WASHINGTON" },
            arcs: ["Pentacle"],
          },
          {
            username: "Melton_Wine",
            nomRP: { Pentacle: "Melton WINE" },
            arcs: ["Pentacle"],
          },
          {
            username: "shreik_",
            nomRP: { Pentacle: "Keiko USAGI" },
            arcs: ["Pentacle"],
          },
          {
            username: "mastersnakou",
            nomRP: { Pentacle: "Jason BIGMAN" },
            arcs: ["Pentacle"],
          },
          {
            username: "tatiana_tv",
            nomRP: { Pentacle: "Nova FORBES" },
            arcs: ["Pentacle"],
          },
          {
            username: "elbwa78",
            nomRP: { Pentacle: "Connor FORBES" },
            arcs: ["Pentacle"],
          },
          {
            username: "heavenfox",
            nomRP: { Pentacle: "Stella FORBES" },
            arcs: ["Pentacle"],
          },
          {
            username: "chach0u__",
            nomRP: { Pentacle: "Alix FORBES" },
            arcs: ["Pentacle"],
          },
          {
            username: "redmafia_tv",
            nomRP: { Pentacle: "David FORBES" },
            arcs: ["Pentacle"],
          },
          {
            username: "darcy_trix",
            nomRP: { Pentacle: "Britney HUNDERSON" },
            tag: "Présentatrice Météo - Miss Los Santos",
            arcs: ["Pentacle"],
          },
          {
            username: "xo_trixy",
            nomRP: { Pentacle: "Jodie SAVAGE" },
            arcs: ["Pentacle"],
          },
          {
            username: "zwave69",
            nomRP: { Pentacle: "Lenny CARTER Ethan WHITE" },
            tag: "Genesis",
            arcs: ["Pentacle"],
          },
          {
            username: "locklear",
            nomRP: { Pentacle: "Narine MUCUS" },
            arcs: ["Pentacle"],
          },
          {
            username: "pauleta_twitch",
            nomRP: { Pentacle: "Stan LAFONDUE" },
            arcs: ["Pentacle"],
          },
          {
            username: "aneyaris_",
            nomRP: { Pentacle: "Emily PALMER" },
            arcs: ["Pentacle"],
          },
          {
            username: "gamesroses",
            nomRP: { Pentacle: "BigJack" },
            arcs: ["Pentacle"],
          },
          {
            username: "carbonhh",
            nomRP: { Pentacle: "Tyler JONES" },
            arcs: ["Pentacle"],
          },
          {
            username: "gzafizzle",
            nomRP: { Pentacle: "Jimmy OPPENHEIM" },
            arcs: ["Pentacle"],
          },
          {
            username: "zaardoz",
            nomRP: { Pentacle: "Mike GORDON" },
            arcs: ["Pentacle"],
          },
          {
            username: "ludmyaa",
            nomRP: { Pentacle: "Tara BIGMAN LEWIS" },
            arcs: ["Pentacle"],
          },
          {
            username: "hyenaa",
            nomRP: { Pentacle: "Suzie BIGMAN - Bettie JONES" },
            arcs: ["Pentacle"],
          },
          {
            username: "anaisMRN",
            nomRP: { Pentacle: "Zoe BAKER" },
            tag: "La Zoooooo'",
            arcs: ["Pentacle"],
          },
          {
            username: "prince_toz",
            nomRP: { Pentacle: "Gustavo CESAR" },
            tag: "Grayson FORBES",
            arcs: ["Pentacle"],
          },
          {
            username: "nicotheo_off",
            nomRP: { Pentacle: "Robert WALTON" },
            arcs: ["Pentacle"],
          },
          {
            username: "dvm_medja",
            nomRP: { Pentacle: "Cesar ALARCON" },
            arcs: ["Pentacle"],
          },
          {
            username: "panpanqqoh",
            nomRP: { Pentacle: "Patrice PLOT" },
            arcs: ["Pentacle"],
          },
          {
            username: "samolito9",
            nomRP: { Pentacle: "Ray WILKINS" },
            arcs: ["Pentacle"],
          },
          {
            username: "Flamby",
            nomRP: { Pentacle: "Steeve WALKINS" },
            arcs: ["Pentacle"],
          },
          {
            username: "byilhann",
            nomRP: { Pentacle: "Buck BARREL" },
            arcs: ["Pentacle"],
          },
          {
            username: "ayline213",
            nomRP: { Pentacle: "Framboise LOPEZ" },
            arcs: ["Pentacle"],
          },
          {
            username: "hirukiart",
            nomRP: { Pentacle: "Fraise MIRA" },
            arcs: ["Pentacle"],
          },
          {
            username: "evelunes",
            nomRP: { Pentacle: "Diana ALLOCCO" },
            tag: "Didi",
            arcs: ["Pentacle"],
          },
          {
            username: "ayakataz",
            nomRP: { Pentacle: "Lucy DAMORT" },
            arcs: ["Pentacle"],
          },
          {
            username: "as_coco",
            nomRP: { Pentacle: "Alya Rosales MORA" },
            arcs: ["Pentacle"],
          },
          {
            username: "saadikoooi",
            nomRP: { Pentacle: "Harukichi YAMAGUCHI" },
            arcs: ["Pentacle"],
          },
          {
            username: "latomatemozza",
            nomRP: { Pentacle: "Guadalupe MORA" },
            arcs: ["Pentacle"],
          },
          {
            username: "bilou",
            nomRP: { Pentacle: "Javier CHAMORRO" },
            tag: "Canello - Blagueur fou",
            arcs: ["Pentacle"],
          },
          {
            username: "Tnopy",
            nomRP: { Pentacle: "Léonard KRUGER" },
            tag: "Juge",
            arcs: ["Pentacle"],
          },
          {
            username: "kailussss",
            nomRP: { Pentacle: "Balentina CUCALACHA" },
            arcs: ["Pentacle"],
          },
          {
            username: "r3ymann",
            nomRP: { Pentacle: "Béatrice BONIFACE" },
            arcs: ["Pentacle"],
          },
          {
            username: "der_glaude",
            nomRP: { Pentacle: "Maurice DUBIDON" },
            arcs: ["Pentacle"],
          },
          {
            username: "feykoww",
            nomRP: { Pentacle: "Stephen W.FAUST" },
            arcs: ["Pentacle"],
          },
          {
            username: "latuah",
            nomRP: { Pentacle: "Alice DELACOURS" },
            arcs: ["Pentacle"],
          },
          {
            username: "spincheck",
            nomRP: { Pentacle: "Harry NOLUCK" },
            arcs: ["Pentacle"],
          },
          {
            username: "zx_yassine",
            nomRP: { Pentacle: "Enriqué DELGADO" },
            arcs: ["Pentacle"],
          },
          {
            username: "frenchdee",
            nomRP: { Pentacle: "Gary JAY" },
            arcs: ["Pentacle"],
          },
          {
            username: "nacked",
            nomRP: { Pentacle: "Monique SCHMITTELBOURG" },
            arcs: ["Pentacle"],
          },
          {
            username: "saniahasna",
            nomRP: { Pentacle: "Felichia DELAMANCHA" },
            arcs: ["Pentacle"],
          },
          {
            username: "qidou",
            nomRP: { Pentacle: "Addebayo OKONKWO" },
            arcs: ["Pentacle"],
          },
          {
            username: "kaypstv",
            nomRP: { Pentacle: "Maellys HUNDERSON" },
            tag: "House Of Secret PROD",
            arcs: ["Pentacle"],
          },
          {
            username: "nayrenns",
            nomRP: { Pentacle: "Dylan POTIN" },
            tag: "Mbappe",
            arcs: ["Pentacle"],
          },
          {
            username: "nekzioh",
            nomRP: { Pentacle: "Léonardo SKORPION" },
            tag: "Damon FORBES",
            arcs: ["Pentacle"],
          },
          {
            username: "lil__quinn",
            nomRP: { Pentacle: "Olya NELSON" },
            arcs: ["Pentacle"],
          },
          {
            username: "vi00lence",
            nomRP: { Pentacle: "Sam DJORIS" },
            arcs: ["Pentacle"],
          },
          {
            username: "el_figuees",
            nomRP: { Pentacle: "Isabella LOPEZ" },
            arcs: ["Pentacle"],
          },
          {
            username: "kiko_tech",
            nomRP: { Pentacle: "Jake THOMPSON" },
            arcs: ["Pentacle"],
          },
          {
            username: "las_pepitasse",
            nomRP: { Pentacle: "Mercedes MARCOU" },
            arcs: ["Pentacle"],
          },
          {
            username: "boblegob",
            nomRP: { Pentacle: "Michel ENCLUME" },
            arcs: ["Pentacle"],
          },
          {
            username: "goudaal",
            nomRP: { Pentacle: "Tyler TURNER" },
            arcs: ["Pentacle"],
          },
          {
            username: "izac95arg",
            nomRP: { Pentacle: "Daryl DECKER" },
            arcs: ["Pentacle"],
          },
          {
            username: "siknyre__",
            nomRP: { Pentacle: "Donnie FRANKLIN" },
            tag: "Roi des Rats",
            arcs: ["Pentacle"],
          },
          {
            username: "tekoyoungcity_",
            nomRP: { Pentacle: "Tom CARTER" },
            arcs: ["Pentacle"],
          },
          {
            username: "kalaverax3",
            nomRP: { Pentacle: "Tego OCHOA" },
            arcs: ["Pentacle"],
          },
          {
            username: "sayrannw",
            nomRP: { Pentacle: "Ava MENDEZ" },
            arcs: ["Pentacle"],
          },
          {
            username: "heyarTV",
            nomRP: { Pentacle: "Jean-François WALTON" },
            arcs: ["Pentacle"],
          },
          {
            username: "llyswi",
            nomRP: { Pentacle: "Ketly HISPANIOLA" },
            arcs: ["Pentacle"],
          },
          {
            username: "jumbo_gumbo",
            nomRP: { Pentacle: "Vincent MOREAU" },
            arcs: ["Pentacle"],
          },
          {
            username: "saanzou",
            nomRP: { Pentacle: "Luciano PEREZ" },
            arcs: ["Pentacle"],
          },
          {
            username: "kimalec_",
            nomRP: { Pentacle: "Lucas MORETTI" },
            arcs: ["Pentacle"],
          },
          {
            username: "pazouzoo",
            nomRP: { Pentacle: "Thorfinn THORSON" },
            arcs: ["Pentacle"],
          },
          {
            username: "olivanie",
            nomRP: { Pentacle: "Sarahi MORA" },
            arcs: ["Pentacle"],
          },
          {
            username: "capitaineyahya",
            nomRP: { Pentacle: "Bruno EFENE" },
            arcs: ["Pentacle"],
          },
          {
            username: "reste_special",
            nomRP: { Pentacle: "Lucy COWELL-Marie DEFONTAINE" },
            arcs: ["Pentacle"],
          },
          {
            username: "azregafr",
            nomRP: { Pentacle: "Poté ALVAREZ" },
            arcs: ["Pentacle"],
          },
          {
            username: "Angyalll",
            nomRP: { Pentacle: "Isabella HARRINGTON" },
            arcs: ["Pentacle"],
          },
          {
            username: "valhalaTV",
            nomRP: { Pentacle: "Brahim SEKSOUKI" },
            arcs: ["Pentacle"],
          },
          {
            username: "dz_amine",
            nomRP: { Pentacle: "Mchenef MEKTOUB" },
            tag: "Double M",
            arcs: ["Pentacle"],
          },
          {
            username: "la_tache",
            nomRP: { Pentacle: "Roger ZEFE" },
            arcs: ["Pentacle"],
          },
          {
            username: "nasd91",
            nomRP: { Pentacle: "Giorgio VASELINELLI" },
            arcs: ["Pentacle"],
          },
          {
            username: "kozukidbasma",
            nomRP: { Pentacle: "Lilia BENZOUZ" },
            arcs: ["Pentacle"],
          },
          {
            username: "yanismonkey",
            nomRP: { Pentacle: "Amir ASHRAFI" },
            arcs: ["Pentacle"],
          },
          {
            username: "jamelito_",
            nomRP: { Pentacle: "Jayden FOREMAN" },
            arcs: ["Pentacle"],
          },
          {
            username: "ekalandras",
            nomRP: { Pentacle: "Ezra GREY" },
            arcs: ["Pentacle"],
          },
          {
            username: "idkbutimleila",
            nomRP: { Pentacle: "Assia MALIK" },
            arcs: ["Pentacle"],
          },
          {
            username: "nadoulliiii",
            nomRP: { Pentacle: "Gynnie HARRINGTON" },
            arcs: ["Pentacle"],
          },
          {
            username: "Nounoursbastion",
            nomRP: { Pentacle: "Alex PRICE" },
            tag: "Chef ROUX",
            arcs: ["Pentacle"],
          },
          {
            username: "helfynn",
            nomRP: { Pentacle: "Eustache FERMI" },
            arcs: ["Pentacle"],
          },
          {
            username: "james__patagheul",
            nomRP: { Pentacle: "Moumoudou JOHNSON" },
            tag: "MYS & LEWIS Management",
            arcs: ["Pentacle"],
          },
          {
            username: "dilovibes",
            nomRP: { Pentacle: "Samir ALMADA" },
            tag: "MYS & LEWIS Management",
            arcs: ["Pentacle"],
          },
          {
            username: "TvMadiba",
            nomRP: { Pentacle: "Pavel YOGUNSKOI" },
            arcs: ["Pentacle"],
          },
          {
            username: "Flyorrr",
            nomRP: { Pentacle: "Daniel BOYLER" },
            arcs: ["Pentacle"],
          },
          {
            username: "tiks782",
            nomRP: { Pentacle: "Aron EL HAITY" },
            arcs: ["Pentacle"],
          },
          {
            username: "troismont",
            nomRP: { Pentacle: "Damian STEEL" },
            arcs: ["Pentacle"],
          },
          {
            username: "Anastronaute_",
            nomRP: { Pentacle: "Charlie DAVIS" },
            arcs: ["Pentacle"],
          },
          {
            username: "soofiansooo",
            nomRP: { Pentacle: "Dr COHEN" },
            arcs: ["Pentacle"],
          },
          {
            username: "Yaroph",
            nomRP: { Pentacle: "John SMITH" },
            tag: "L'Amiral",
            arcs: ["Pentacle"],
          },
          {
            username: "aimebap",
            nomRP: { Pentacle: "Jacky JONES" },
            tag: "Colonel",
            arcs: ["Pentacle"],
          },
          {
            username: "Melosatv",
            nomRP: { Pentacle: "Tallulah SPARKS" },
            arcs: ["Pentacle"],
          },
          {
            username: "baba2m",
            nomRP: { Pentacle: "Baba J. SANTANA" },
            arcs: ["Pentacle"],
          },
          {
            username: "AlexGamingCrew",
            nomRP: { Pentacle: "Walter QUEENSEY / Joe HIGHWAY" },
            arcs: ["Pentacle"],
          },
          {
            username: "keiiiizz",
            nomRP: { Pentacle: "Kelly BARKS" },
            arcs: ["Pentacle"],
          },
          {
            username: "ouilli",
            nomRP: { Pentacle: "Dr. Charlie ORLANDO" },
            arcs: ["Pentacle"],
          },
          {
            username: "MeikhaTV",
            nomRP: { Pentacle: "Diane KINGSTON" },
            arcs: ["Pentacle"],
          },
          {
            username: "Matsuki_R",
            nomRP: { Pentacle: "Mile KINGSTON" },
            arcs: ["Pentacle"],
          },
          {
            username: "Medouda",
            nomRP: { Pentacle: "Martin MOULIN" },
            arcs: ["Pentacle"],
          },
          {
            username: "riinemaa",
            nomRP: { Pentacle: "Lovena HISPANIOLA" },
            arcs: ["Pentacle"],
          },
          {
            username: "lilrhey",
            nomRP: { Pentacle: "Francky GONZALES" },
            arcs: ["Pentacle"],
          },
          {
            username: "iSpace",
            nomRP: { Pentacle: "Floyd ELLIS" },
            arcs: ["Pentacle"],
          },
          {
            username: "real_anantia",
            nomRP: { Pentacle: "Jake DEAN" },
            arcs: ["Pentacle"],
          },
          {
            username: "misil17_",
            nomRP: { Pentacle: "Elros WARD" },
            arcs: ["Pentacle"],
          },
          {
            username: "SkelOneS1",
            nomRP: { Pentacle: "Frédéric OSWALD" },
            arcs: ["Pentacle"],
          },
          {
            username: "Cbl_ttv",
            nomRP: { Pentacle: "Kay KATANA" },
            arcs: ["Pentacle"],
          },
          {
            username: "Eyalan",
            nomRP: { Pentacle: "Winfield BLACKWOOD" },
            tag: "Docteur",
            arcs: ["Pentacle"],
          },
          {
            username: "pleyss2be_p2b",
            nomRP: { Pentacle: "Papicha" },
            arcs: ["Pentacle"],
          },
          {
            username: "covatvv",
            nomRP: { Pentacle: "Logan WALKER" },
            arcs: ["Pentacle"],
          },
          {
            username: "zulematv",
            nomRP: { Pentacle: "Gaby MONTANA" },
            arcs: ["Pentacle"],
          },
          {
            username: "Eterzx",
            nomRP: { Pentacle: "Jake Prize" },
            tag: "Majordome Forbes",
            arcs: ["Pentacle"],
          },
          {
            username: "Zz_Sumsunnnito_SDF",
            nomRP: { Pentacle: "Steeve/Steevie" },
            tag: "Majordome Gordon",
            arcs: ["Pentacle"],
          },
          {
            username: "fc_vito_",
            nomRP: { Pentacle: "Ghjuvan RICCI" },
            tag: "L'Italien",
            arcs: ["Pentacle"],
          },
          {
            username: "HasoDaisuHi",
            nomRP: { Pentacle: "Paula NONYME" },
            arcs: ["Pentacle"],
          },
          {
            username: "doctormistakes",
            nomRP: { Pentacle: "Rose WINTER" },
            arcs: ["Pentacle"],
          },
          {
            username: "Jagher_",
            nomRP: { Pentacle: "Arya FOX" },
            arcs: ["Pentacle"],
          },
          {
            username: "CrashKill",
            nomRP: { Pentacle: "Joel DEZIRE" },
            arcs: ["Pentacle"],
          },
          {
            username: "MONKEYDNINI",
            nomRP: { Pentacle: "Miklo" },
            arcs: ["Pentacle"],
          },
          {
            username: "D_Roretsu",
            nomRP: { Pentacle: "Ricco" },
            arcs: ["Pentacle"],
          },
        ];

        const promises = streamerDataList.map(({ username }) =>
          axios.get(`https://api.twitch.tv/helix/users?login=${username}`, {
            headers: {
              "Client-ID": "u1ne1fj44jwu9p37xh6wu7t0n3lg7c",
              Authorization: `Bearer ${accessToken}`,
            },
          })
        );

        const responses = await Promise.all(promises);
        const streamerData = responses
          .map((response, index) => {
            const data = response.data.data[0];
            return data
              ? {
                  ...data,
                  nomRP: streamerDataList[index].nomRP,
                  tag: streamerDataList[index].tag,
                  arcs: streamerDataList[index].arcs,
                }
              : null;
          })
          .filter((streamer) => streamer !== null);

        setStreamers(streamerData);
        setTotalStreamers(streamerData.length);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données des streamers :",
          error
        );
      }
    };

    fetchStreamerData();
  }, []);

  // Filtrage des streamers par filtre sélectionné et recherche
  const filteredStreamers = streamers.filter(
    (streamer) =>
      streamer.arcs.includes(selectedArc) &&
      streamer.display_name &&
      (streamer.display_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        streamer.login.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (streamer.nomRP[selectedArc] &&
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
        placeholder="Rechercher un Streamer par NomRP, PseudoTwitch ou Tag..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="card-container-stream">
        <p className="compteur">
          Nombre de streamers : {filteredStreamers.length}
        </p>
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
                    {streamer.nomRP[selectedArc] || "NomRP non disponible"}
                  </span>
                  <br />
                  <span className="tag">{streamer.tag || ""}</span>
                </p>
                <a
                  href={`https://www.twitch.tv/${streamer.login}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Twitchico}
                    alt={streamer.display_name || "Twitch"}
                  />
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
