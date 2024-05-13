import { useState, useEffect } from "react";
import "../styles/pages/Stream.css";
import Twitchico from "../assets/icons/twitch.png";
import axios from "axios";

const Stream = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [streamers, setStreamers] = useState([]);
  const [totalStreamers, setTotalStreamers] = useState(0);

  useEffect(() => {
    const fetchStreamerData = async () => {
      try {
        const response = await axios.post(
          `https://id.twitch.tv/oauth2/token?client_id=l9y7l85ti4l8bjgcy73hbp2hwcjras&client_secret=oqubtsg8p3pw1tpqoxu3csverdc598&grant_type=client_credentials`
        );
        const accessToken = response.data.access_token;

        const streamerDataList = [
          {
            username: "LolyPokiCake",
            nomRP: "John APOTRI",
            tag: "Fondateur - Staff",
          },
          { username: "Aminematue", nomRP: "Gaston BIGMAN", tag: "Fondateur" },
          { username: "Dorelium", nomRP: "Matthew BELLAMY", tag: "Staff" },
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
          { username: "zwave69", nomRP: "Lenny CARTER" },
          { username: "locklear", nomRP: "Narine MUCUS" },
          { username: "pauleta_twitch", nomRP: "Stan LAFONDUE" },
          { username: "aneyaris_", nomRP: "Emily PALMER" },
          { username: "gamesroses", nomRP: "BigJack" },
          { username: "carbonhh", nomRP: "Tyler JONES" },
          { username: "gzafizzle", nomRP: "Jimmy OPPENHEIM" },
          { username: "zaardoz", nomRP: "Mike GORDON" },
          { username: "ludmyaa", nomRP: "Tara LEWIS" },
          { username: "hyenaaa", nomRP: "Suzie BIGMAN - Bettie JONES" },
          { username: "anaisMRN", nomRP: "Zoe BAKER", tag: "La Zoooooo'" },
          { username: "nicotheo_off", nomRP: "Robert WALTON" },
          { username: "dvm_medja", nomRP: "Cesar ALARCON" },
          { username: "panpanqqoh", nomRP: "Patrice PLOT" },
          { username: "ayline213", nomRP: "Framboise LOPEZ" },
          { username: "hirukiart", nomRP: "Fraise MIRA" },
          { username: "evelunes", nomRP: "Diana ALLOCCO", tag: "Didi" },
          { username: "ayakataz", nomRP: "Lucy DAMORT" },
          { username: "as_coco", nomRP: "Alya Rosales MORA" },
          { username: "saadikoooi", nomRP: "Harukichi YAMAGUCHI" },
          { username: "latomatemozza", nomRP: "Guadalupe MORA" },
          { username: "bilou", nomRP: "Javier CHAMORRO" },
          { username: "kailussss", nomRP: "Balentina CUCALACHA" },
          { username: "r3ymann", nomRP: "Béatrice BONIFACE" },
          { username: "der_glaude", nomRP: "Monsieur DUBIDON" },
          { username: "feykoww", nomRP: "Stephen W.FAUST" },
          { username: "latuah", nomRP: "Alice DELACOURS" },
          { username: "spincheck", nomRP: "Harry NOLUCK" },
          { username: "zx_yassine", nomRP: "Enriqué DELGADO" },
          { username: "frenchdee", nomRP: "Gary JAY" },
          { username: "nacked", nomRP: "Monique SCHMITTELBOURG" },
          { username: "ekalandras", nomRP: "Ezra GREY" },
          { username: "saniahasna", nomRP: "Felichia DELAMANCHA" },
          { username: "qidou", nomRP: "Addebayo OKONKWO" },
          { username: "kaypstv", nomRP: "Maellys HUNDERSON" },
          { username: "nayrenns", nomRP: "Dylan POTIN" },
          { username: "nekzioh", nomRP: "Léonardo SKORPION" },
          { username: "lil__quinn", nomRP: "Olya NELSON" },
          { username: "terrycoco", nomRP: "Terry COCO" },
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
          { username: "dz_amine", nomRP: "Mchenef Mekthoub", tag: "Double M" },
          { username: "la_tache", nomRP: "Roger ZEFE" },
          { username: "nasd91", nomRP: "Giorgio VASELINELLI" },
          { username: "kozukidbasma", nomRP: "Lilia BENZOUZ" },
          { username: "yanismonkey", nomRP: "Amir ASHRAFI" },
          { username: "jamelito_", nomRP: "Jayden FOREMAN" },
          { username: "idkbutimleila", nomRP: "Assia MALIK" },
          { username: "nadoulliiii", nomRP: "gynnie HARRINGTON" },
          {
            username: "Nounoursbastion",
            nomRP: "Alex Price",
            tag: "Chef ROUX",
          },
          { username: "helfynn", nomRP: "Eustache FERNI" },
        ];

        const promises = streamerDataList.map(({ username }) =>
          axios.get(`https://api.twitch.tv/helix/users?login=${username}`, {
            headers: {
              "Client-ID": "l9y7l85ti4l8bjgcy73hbp2hwcjras",
              Authorization: `Bearer ${accessToken}`,
            },
          })
        );
        const responses = await Promise.all(promises);
        const streamerData = responses.map((response, index) => ({
          ...response.data.data[0],
          nomRP: streamerDataList[index].nomRP,
          tag: streamerDataList[index].tag,
        }));
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
      streamer.display_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      streamer.login.toLowerCase().includes(searchTerm.toLowerCase()) ||
      streamer.nomRP.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (streamer.tag &&
        streamer.tag.toLowerCase().includes(searchTerm.toLowerCase()))
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
                src={streamer.profile_image_url}
                alt={streamer.display_name}
              />
              <figcaption>
                <p>
                  <span className="name">{streamer.display_name}</span>
                  <br />
                  <span className="nomrp">{streamer.nomRP}</span>
                  <br />
                  <span className="tag">{streamer.tag}</span>
                </p>
                <a
                  href={`https://www.twitch.tv/${streamer.login}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Twitchico} alt={streamer.display_name} />
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
