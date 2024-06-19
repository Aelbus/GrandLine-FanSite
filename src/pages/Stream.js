import React, { useState, useEffect } from "react";
import axios from "axios";
import Twitchico from "../assets/icons/twitch.png";
import "../styles/pages/Stream.css";

const Stream = () => {
  const [streamers, setStreamers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalStreamers, setTotalStreamers] = useState(0);

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
            nomRP: "John APPOTRIE",
            tag: "Fondateur - Staff",
          },
          { username: "Aminematue", nomRP: "Gaston BIGMAN", tag: "Fondateur" },
          { username: "Dorelium", nomRP: "Matthew BELLAMY", tag: "Staff" },
          { username: "malariatv", nomRP: "Owen Davis - Ziggen", tag: "Staff" },
          { username: "3DENZ", nomRP: "Denzel PALMER", tag: "Staff" },
          { username: "zeaaron_", nomRP: "Alexandre FORBES", tag: "Staff" },
          { username: "postbadon", nomRP: "Hector MORA", tag: "Staff" },
          { username: "hassvnz", nomRP: "Mikey", tag: "Staff" },
          { username: "zipperr", nomRP: "Igor CASIMIR", tag: "Staff" },
          {
            username: "klearradio",
            nomRP: "Arsene & Melton",
            tag: "Weazel News",
          },
          {
            username: "barbenoire__00",
            nomRP: "Arsene WASHINGTON",
          },
          {
            username: "Melton_Wine",
            nomRP: "Melton WINE",
          },
          { username: "shreik_", nomRP: "Keiko USAGI" },
          { username: "mastersnakou", nomRP: "Jason BIGMAN" },
          { username: "tatiana_tv", nomRP: "Nova FORBES" },
          { username: "elbwa78", nomRP: "Connor FORBES" },
          { username: "heavenfox", nomRP: "Stella FORBES" },
          { username: "chach0u__", nomRP: "Alix FORBES" },
          { username: "redmafia_tv", nomRP: "David FORBES" },
          {
            username: "darcy_tv",
            nomRP: "Britney HUNDERSON",
            tag: "Présentatrice Météo - Miss Los Santos",
          },
          { username: "xo_trixy", nomRP: "Jodie SAVAGE" },
          {
            username: "zwave69",
            nomRP: "Lenny CARTER Ethan WHITE",
            tag: "Genesis",
          },
          { username: "locklear", nomRP: "Narine MUCUS" },
          { username: "pauleta_twitch", nomRP: "Stan LAFONDUE" },
          { username: "aneyaris_", nomRP: "Emily PALMER" },
          { username: "gamesroses", nomRP: "BigJack" },
          { username: "carbonhh", nomRP: "Tyler JONES" },
          { username: "gzafizzle", nomRP: "Jimmy OPPENHEIM" },
          { username: "zaardoz", nomRP: "Mike GORDON" },
          { username: "ludmyaa", nomRP: "Tara LEWIS" },
          { username: "hyenaa", nomRP: "Suzie BIGMAN - Bettie JONES" },
          { username: "anaisMRN", nomRP: "Zoe BAKER", tag: "La Zoooooo'" },
          { username: "prince_toz", nomRP: "Gustavo CESAR", tag: "GUS" },
          { username: "nicotheo_off", nomRP: "Robert WALTON" },
          { username: "dvm_medja", nomRP: "Cesar ALARCON" },
          { username: "panpanqqoh", nomRP: "Patrice PLOT" },
          { username: "samolito9", nomRP: "Ray WILKINS" },
          { username: "Flamby", nomRP: "Steeve WALKINS" },
          { username: "byilhann", nomRP: "Buck BARREL" },
          { username: "ayline213", nomRP: "Framboise LOPEZ" },
          { username: "hirukiart", nomRP: "Fraise MIRA" },
          { username: "evelunes", nomRP: "Diana ALLOCCO", tag: "Didi" },
          { username: "ayakataz", nomRP: "Lucy DAMORT" },
          { username: "as_coco", nomRP: "Alya Rosales MORA" },
          { username: "saadikoooi", nomRP: "Harukichi YAMAGUCHI" },
          { username: "latomatemozza", nomRP: "Guadalupe MORA" },
          {
            username: "bilou",
            nomRP: "Javier CHAMORRO",
            tag: "Canello - Blagueur fou",
          },
          {
            username: "Tnopy",
            nomRP: "Léonard KRUGER",
            tag: "Juge",
          },
          { username: "kailussss", nomRP: "Balentina CUCALACHA" },
          { username: "r3ymann", nomRP: "Béatrice BONIFACE" },
          { username: "der_glaude", nomRP: "Maurice DUBIDON" },
          { username: "feykoww", nomRP: "Stephen W.FAUST" },
          { username: "latuah", nomRP: "Alice DELACOURS" },
          { username: "spincheck", nomRP: "Harry NOLUCK" },
          { username: "zx_yassine", nomRP: "Enriqué DELGADO" },
          { username: "frenchdee", nomRP: "Gary JAY" },
          { username: "nacked", nomRP: "Monique SCHMITTELBOURG" },
          { username: "saniahasna", nomRP: "Felichia DELAMANCHA" },
          { username: "qidou", nomRP: "Addebayo OKONKWO" },
          {
            username: "kaypstv",
            nomRP: "Maellys HUNDERSON",
            tag: "House Of Secret PROD",
          },
          { username: "nayrenns", nomRP: "Dylan POTIN", tag: "Mbappe" },
          {
            username: "nekzioh",
            nomRP: "Léonardo SKORPION",
            tag: "Damon FORBES",
          },
          { username: "lil__quinn", nomRP: "Olya NELSON" },
          { username: "vi00lence", nomRP: "Sam DJORIS" },
          { username: "el_figuees", nomRP: "Isabella LOPEZ" },
          { username: "kiko_tech", nomRP: "Jake THOMPSON" },
          { username: "las_pepitasse", nomRP: "Mercedes MARCOU" },
          { username: "boblegob", nomRP: "Michel ENCLUME" },
          { username: "goudaal", nomRP: "Tyler TURNER" },
          { username: "izac95arg", nomRP: "Daryl DECKER" },
          {
            username: "siknyre__",
            nomRP: "Donnie FRANKLIN",
            tag: "Roi des Rats",
          },
          { username: "tekoyoungcity_", nomRP: "Tom CARTER" },
          { username: "kalaverax3", nomRP: "Tego OCHOA" },
          { username: "sayrannw", nomRP: "Ava MENDEZ" },
          { username: "heyarTV", nomRP: "Jean-François WALTON" },
          { username: "llyswi", nomRP: "Ketly HISPANIOLA" },
          { username: "jumbo_gumbo", nomRP: "Vincent MOREAU" },
          { username: "saanzou", nomRP: "Luciano PEREZ" },
          { username: "kimalec_", nomRP: "Lucas MORETTI" },
          { username: "pazouzoo", nomRP: "Thorfinn THORSON" },
          { username: "olivanie", nomRP: "Sarahi MORA" },
          { username: "capitaineyahya", nomRP: "Bruno EFENE" },
          {
            username: "reste_special",
            nomRP: "Lucy COWELL-Marie DEFONTAINE",
          },
          { username: "azregafr", nomRP: "Poté ALVAREZ" },
          { username: "Angyalll", nomRP: "Isabella HARRINGTON" },
          { username: "valhalaTV", nomRP: "Brahim SEKSOUKI" },
          { username: "dz_amine", nomRP: "Mchenef MEKTOUB", tag: "Double M" },
          { username: "la_tache", nomRP: "Roger ZEFE" },
          { username: "nasd91", nomRP: "Giorgio VASELINELLI" },
          { username: "kozukidbasma", nomRP: "Lilia BENZOUZ" },
          { username: "yanismonkey", nomRP: "Amir ASHRAFI" },
          { username: "jamelito_", nomRP: "Jayden FOREMAN" },
          { username: "ekalandras", nomRP: "Ezra GREY" },
          { username: "idkbutimleila", nomRP: "Assia MALIK" },
          {
            username: "nadoulliiii",
            nomRP: "Gynnie HARRINGTON",
          },
          {
            username: "Nounoursbastion",
            nomRP: "Alex PRICE",
            tag: "Chef ROUX",
          },
          { username: "helfynn", nomRP: "Eustache FERMI" },
          {
            username: "james__patagheul",
            nomRP: "Moumoudou JOHNSON",
            tag: "MYS & LEWIS Management",
          },
          {
            username: "dilovibes",
            nomRP: "Samir ALMADA",
            tag: "MYS & LEWIS Management",
          },
          {
            username: "TvMadiba",
            nomRP: "Pavel YOGUNSKOI",
          },
          {
            username: "Flyorrr",
            nomRP: "Daniel BOYLER",
          },
          {
            username: "tiks782",
            nomRP: "Aron EL HAITY",
          },
          {
            username: "troismont",
            nomRP: "Damian STEEL",
          },
          {
            username: "Anastronaute_",
            nomRP: "Charlie DAVIS",
          },
          {
            username: "soofiansooo",
            nomRP: "Dr COHEN",
          },
          {
            username: "Yaroph",
            nomRP: "John SMITH",
            tag: "L'Amiral",
          },
          {
            username: "aimebap",
            nomRP: "Jacky JONES",
            tag: "Colonel",
          },
          {
            username: "Melosatv",
            nomRP: "Tallulah SPARKS",
          },
          {
            username: "baba2m",
            nomRP: "Baba J. SANTANA",
          },
          {
            username: "AlexGamingCrew",
            nomRP: "Walter QUEENSEY / Joe HIGHWAY",
          },
          {
            username: "keiiiizz",
            nomRP: "Kelly BARKS",
          },
          {
            username: "ouilli",
            nomRP: "Dr. Charlie ORLANDO",
          },
          {
            username: "MeikhaTV",
            nomRP: "Diane KINGSTON",
          },
          {
            username: "Matsuki_R",
            nomRP: "Mile KINGSTON",
          },
          {
            username: "Medouda",
            nomRP: "Martin MOULIN",
          },
          {
            username: "riinemaa",
            nomRP: "Lovena HISPANIOLA",
          },
          {
            username: "lilrhey",
            nomRP: "Francky GONZALES",
          },
          {
            username: "iSpace",
            nomRP: "Floyd ELLIS",
          },
          {
            username: "real_anantia",
            nomRP: "Jake DEAN",
          },
          {
            username: "misil17_",
            nomRP: "Elros WARD",
          },
          {
            username: "SkelOneS1",
            nomRP: "Frédéric OSWALD",
          },
          {
            username: "Cbl_ttv",
            nomRP: "Kay KATANA",
          },
          {
            username: "Eyalan",
            nomRP: "Winfield BLACKWOOD",
            tag: "Docteur",
          },
          {
            username: "pleyss2be_p2b",
            nomRP: "Papicha",
          },
          {
            username: "covatvv",
            nomRP: "Logan WALKER",
          },
          {
            username: "zulematv",
            nomRP: "Gaby MONTANA",
          },
          {
            username: "Eterzx",
            nomRP: "Jake Prize",
            tag: "Majordome Forbes",
          },
          {
            username: "Zz_Sumsunnnito_SDF",
            nomRP: "Steeve/Steevie",
            tag: "Majordome Gordon",
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

  const filteredStreamers = streamers.filter(
    (streamer) =>
      streamer.display_name &&
      (streamer.display_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        streamer.login.toLowerCase().includes(searchTerm.toLowerCase()) ||
        streamer.nomRP.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (streamer.tag &&
          streamer.tag.toLowerCase().includes(searchTerm.toLowerCase())))
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
        <p className="compteur">Nombre de streamers : {totalStreamers}</p>
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
                  <span className="nomrp">{streamer.nomRP || "Unknown"}</span>
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
