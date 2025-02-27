import React, { useState, useEffect } from "react";
import axios from "axios";
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
              Survivor: "Le CHAUVE",
              Pentacle: "John APOTRIE",
              FortCarson: "Multiple Personnage",
              RedDeadRP: "",
            },
            tag: "Fondateur - Staff",
            arcs: ["School", "Survivor", "Pentacle", "FortCarson", "RedDeadRP"],
          },
          {
            username: "Pichotm",
            nomRP: {
              School: "",
              Survivor: "",
              Pentacle: "",
              FortCarson: "",
              RedDeadRP: "",
            },
            tag: "Dev - Staff",
            arcs: ["School", "Survivor", "Pentacle", "FortCarson", "RedDeadRP"],
          },
          {
            username: "Aminematue",
            nomRP: {
              School: "Amine ZEUBIO",
              Survivor: "🟡/🔴/🎤 Amine MATHIEU",
              Pentacle: "Gaston BIGMAN",
              FortCarson: "Larry COLBY",
              RedDeadRP: "",
            },
            tag: "Fondateur",
            arcs: ["School", "Survivor", "Pentacle", "FortCarson", "RedDeadRP"],
          },
          {
            username: "IproMx",
            nomRP: {
              School: "Jeffrey ROGER",
              FortCarson: "Père COLBY",
              Survivor: "🔴Axel LERET",
            },
            tag: "Staff",
            arcs: ["School", "FortCarson", "Survivor"],
          },
          {
            username: "Dorelium",
            nomRP: {
              Pentacle: "Matthew BELLAMY",
              Survivor: "🟡Tom LEWIS",
              School: "Alan SMITHY (Prof Thêatre)",
              RedDeadRP: "",
            },
            tag: "Staff",
            arcs: ["Pentacle", "Survivor", "School", "RedDeadRP"],
          },
          {
            username: "malariatv",
            nomRP: {
              Pentacle: "Owen Davis - ZIEGEN",
              Survivor: "🟡Clark LEWIS",
              School: "Ludwig ZIEGEN (Prof SVT)",
              FortCarson: "RIP Le Dragon",
              RedDeadRP: "",
            },
            tag: "Staff",
            arcs: ["Pentacle", "Survivor", "School", "FortCarson", "RedDeadRP"],
          },
          {
            username: "3DENZ",
            nomRP: {
              Pentacle: "Denzel PALMER",
              FortCarson: "Harold SHIPMAN",
              RedDeadRP: "",
            },
            tag: "Staff",
            arcs: ["Pentacle", "FortCarson", "RedDeadRP"],
          },
          {
            username: "zeaaron_",
            nomRP: {
              Pentacle: "Alexandre FORBES",
              School: "Capitaine POLICE",
              Survivor: "🔴Philippe SALAMONCA",
            },
            tag: "Staff",
            arcs: ["Pentacle", "School", "Survivor"],
          },
          {
            username: "postbadon",
            nomRP: {
              Pentacle: "Hector MORA",
              Survivor: "🎥Mali",
              School: "Ganesh VIKAPUTASH (CPE)",
              FortCarson: "Dylan BROOKS",
            },
            tag: "Staff",
            arcs: ["Pentacle", "Survivor", "School", "FortCarson", "RedDeadRP"],
          },
          {
            username: "shreik_",
            nomRP: {
              Pentacle: "Keiko USAGI",
              School: "Keiko USAGI",
              FortCarson: "Keiko USAGI",
              Survivor: "🔴Kiara HANET",
              RedDeadRP: "",
            },
            tag: "Staff",
            arcs: ["Pentacle", "School", "Survivor", "FortCarson", "RedDeadRP"],
          },
          {
            username: "Chunly91",
            nomRP: { RedDeadRP: "" },
            tag: "Staff",
            arcs: ["RedDeadRP"],
          },
          {
            username: "hassvnz",
            nomRP: { Pentacle: "Mikey" },
            arcs: ["Pentacle"],
          },
          {
            username: "zipperr",
            nomRP: {
              Pentacle: "Igor CASIMIR",
              School: "Joshua JOHN",
              Survivor: "🟡/🔴Hassan HAMAR",
              FortCarson: "Nelson POWELL",
            },
            tag: "Staff",
            arcs: ["Pentacle", "School", "FortCarson", "Survivor"],
          },
          {
            username: "hyenaa",
            nomRP: {
              Pentacle: "Suzie BIGMAN - Bettie JONES",
              FortCarson: "Madame SKITTLES",
              RedDeadRP: "",
            },
            tag: "Staff",
            arcs: ["Pentacle", "FortCarson", "RedDeadRP"],
          },
          {
            username: "aimebap",
            nomRP: {
              Pentacle: "Jacky JONES",
              FortCarson: "Le TAXIDERMISTE",
              RedDeadRP: "",
            },
            tag: "Staff",
            arcs: ["Pentacle", "FortCarson", "RedDeadRP"],
          },
          {
            username: "klearradio",
            nomRP: { Pentacle: "Arsene & Melton" },
            tag: "Weazel News",
            arcs: ["Pentacle"],
          },
          {
            username: "RayouLivee",
            nomRP: { FortCarson: "RAVI" },
            tag: "Weazel News",
            arcs: ["FortCarson"],
          },
          {
            username: "Rebeudeter",
            nomRP: {
              School: "Amid SEFIO",
              Survivor: "🟡Jax SOMBRERO",
            },
            arcs: ["School", "Survivor"],
          },
          {
            username: "Kamet0",
            nomRP: {
              School: "Brandon KUROSAKI",
              FortCarson: " Calleb COLBY",
              Survivor: "🟡Habib OCHE",
            },
            arcs: ["School", "FortCarson", "Survivor"],
          },
          {
            username: "Nateos",
            nomRP: {
              School: "Kevin DUCHAMPS",
              FortCarson: "Marie-José DEBRUN",
              Survivor: "🟡Buddy RAY",
              RedDeadRP: "",
            },
            arcs: ["School", "FortCarson", "Survivor", "RedDeadRP"],
          },
          {
            username: "Minos",
            nomRP: {
              School: "Mouloud KEFTA",
              FortCarson: "Marlo MASON",
            },
            arcs: ["School", "FortCarson"],
          },
          {
            username: "Farees",
            nomRP: {
              School: "Bachir LEBDIRI",
            },
            arcs: ["School"],
          },
          {
            username: "Anyme023",
            nomRP: {
              FortCarson: "Andrew WILLIAMS",
            },
            arcs: ["FortCarson"],
          },
          {
            username: "mulann92",
            nomRP: {
              FortCarson: "Lana WILLIAMS",
              RedDeadRP: "Gladysse QUARRANEAU",
            },
            arcs: ["FortCarson", "RedDeadRP"],
          },
          {
            username: "MrBboy45",
            nomRP: {
              School: "Jordan BIRKINS",
              FortCarson: "Benjamin SIMPSON",
              RedDeadRP: "Frank QUARRANEAU",
            },
            arcs: ["School", "FortCarson", "RedDeadRP"],
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
            username: "GrimKujow",
            nomRP: { Survivor: "🟡Douglas MENPHIS" },
            arcs: ["Survivor"],
          },
          {
            username: "Michou",
            nomRP: { School: "Bobby JUNIOR" },
            arcs: ["School"],
          },
          {
            username: "Inoxtag",
            nomRP: {
              School: "Romuald PORNAULT",
              Survivor: "🔴Ousmane DEMBELE",
              RedDeadRP: "",
            },
            arcs: ["School", "Survivor", "RedDeadRP"],
          },
          {
            username: "LeBouseuh",
            nomRP: { School: "Francis LALENE", Survivor: "🔴Patrick BRUNEL" },
            arcs: ["School", "Survivor"],
          },
          {
            username: "mastersnakou",
            nomRP: {
              Pentacle: "Jason BIGMAN",
              School: "John SOURDOUGH",
              Survivor: "🟡Jack SPARDOUGH",
            },
            arcs: ["Pentacle", "School", "Survivor"],
          },
          {
            username: "tatiana_tv",
            nomRP: { Pentacle: "Nova FORBES", FortCarson: "Fidji LAZARE" },
            arcs: ["Pentacle", "FortCarson"],
          },
          {
            username: "idkbutimleila",
            nomRP: { FortCarson: "Louisa LAZARE" },
            arcs: ["FortCarson"],
          },
          {
            username: "manouyee",
            nomRP: {
              FortCarson: "Brook DAWSON",
              RedDeadRP: "",
            },
            arcs: ["FortCarson", "RedDeadRP"],
          },
          {
            username: "elbwa78",
            nomRP: { Pentacle: "Connor FORBES" },
            arcs: ["Pentacle"],
          },
          {
            username: "Skyyart",
            nomRP: { Survivor: "🔴Pierre CARRE" },
            arcs: ["Survivor"],
          },
          {
            username: "Terracid",
            nomRP: { Survivor: "🔴Richard PASTEL" },
            arcs: ["Survivor"],
          },
          {
            username: "Laink",
            nomRP: { Survivor: "🔴Jacques BOULON" },
            arcs: ["Survivor"],
          },
          {
            username: "heavenfox",
            nomRP: {
              Pentacle: "Stella FORBES",
              School: "Marie-jeanne DUBIJON (Prof Arts)",
              Survivor: "🟡Camélia COSTE",
              FortCarson: "Chiara BELLADONNA",
            },
            arcs: ["Pentacle", "School", "Survivor", "FortCarson"],
          },
          {
            username: "MlleHailey",
            nomRP: { School: "Yellow BISHOP", FortCarson: "Brenda POWELL" },
            arcs: ["School", "FortCarson"],
          },
          {
            username: "chach0u__",
            nomRP: {
              Pentacle: "Alix FORBES",
              FortCarson: "Lexie DAWSON",
              RedDeadRP: "Amara LAKATOS",
            },
            arcs: ["Pentacle", "FortCarson", "RedDeadRP"],
          },
          {
            username: "redmafia_tv",
            nomRP: { Pentacle: "David FORBES" },
            arcs: ["Pentacle"],
          },
          {
            username: "darcy_trix",
            nomRP: {
              Pentacle: "Britney HUNDERSON / FORBES",
              FortCarson: " Elena DAWSON",
              RedDeadRP: "Grâce WATSON",
            },

            arcs: ["Pentacle", "FortCarson", "RedDeadRP"],
          },
          {
            username: "xo_trixy",
            nomRP: {
              Pentacle: "Jodie SAVAGE",
              School: "Nova BURGER",
              Survivor: "🔴Alba NANA",
            },
            arcs: ["Pentacle", "Survivor", "School"],
          },
          {
            username: "zwave",
            nomRP: {
              Pentacle: "GENESIS - Lenny CARTER/Ethan WHITE",
              School: "Jean Charles VIVIER (Aziz)",
              Survivor: "🟡Karim BEIDA",
              FortCarson: "Colt WINCHESTER",
            },
            arcs: ["Pentacle", "School", "Survivor", "FortCarson"],
          },
          {
            username: "locklear",
            nomRP: {
              Pentacle: "Narine MUCUS",
              Survivor: "🟡Narine MUCUS 🏆",
              RedDeadRP: "",
            },
            arcs: ["Pentacle", "Survivor", "RedDeadRP"],
          },
          {
            username: "Maghla",
            nomRP: { Survivor: "🟡Stéphanie LEULEU" },
            arcs: ["Survivor"],
          },
          {
            username: "pauleta_twitch",
            nomRP: { Pentacle: "Stan LAFONDUE", Survivor: "🟡François PIGNON" },
            arcs: ["Pentacle", "Survivor"],
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
            nomRP: {
              Pentacle: "Mike GORDON",
              School: "Harry McARTHUR (Prof Musique)",
              FortCarson: "Franco RUSSO",
              RedDeadRP: "",
            },
            arcs: ["Pentacle", "School", "FortCarson", "RedDeadRP"],
          },
          {
            username: "ludmya",
            nomRP: {
              Pentacle: "Tara BIGMAN LEWIS",
              School: "Emily EVANS",
              FortCarson: " Linzee LOVE",
            },
            arcs: ["Pentacle", "School", "FortCarson"],
          },

          {
            username: "anaisMRN",
            nomRP: { Pentacle: "Zoe BAKER" },
            arcs: ["Pentacle"],
          },
          {
            username: "prince_toz",
            nomRP: { Pentacle: "Gustavo CESAR / Grayson FORBES" },
            arcs: ["Pentacle"],
          },
          {
            username: "Laukinawa",
            nomRP: { FortCarson: "Ayana CARTER" },
            arcs: ["FortCarson"],
          },
          {
            username: "A_soyun",
            nomRP: { FortCarson: "Jenna LOWDER" },
            arcs: ["FortCarson"],
          },
          {
            username: "leiona17",
            nomRP: { School: "Leiona WILSON" },
            arcs: ["School"],
          },
          {
            username: "nicotheo_off",
            nomRP: { Pentacle: "Robert WALTON", School: "Bobby LUNIVERS" },
            arcs: ["Pentacle", "School"],
          },
          {
            username: "dvm_medja",
            nomRP: {
              Pentacle: "Cesar ALARCON",
              School: "Jabar JACKSON (Prof Chimie)",
              FortCarson: "SFera LAWRENCE / Sheriff 22",
            },
            arcs: ["Pentacle", "School", "FortCarson"],
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
            nomRP: { Pentacle: "Steeve WALKINS", FortCarson: "Dwayne CARTER" },
            arcs: ["Pentacle", "FortCarson"],
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
            arcs: ["Pentacle"],
          },
          {
            username: "ayakataz",
            nomRP: { Pentacle: "Lucy DAMORT", FortCarson: "Stormy CLOVER" },
            arcs: ["Pentacle", "FortCarson"],
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
            username: "MrPaul_Live",
            nomRP: { School: "MR. WHITE (Prof Langues)" },
            arcs: ["School"],
          },
          {
            username: "latomatemozza",
            nomRP: { Pentacle: "Guadalupe MORA" },
            arcs: ["Pentacle"],
          },
          {
            username: "bilou",
            nomRP: {
              Pentacle: "Javier CHAMORRO",
              School: " Patrick BLONDEL (Prof Sport)",
            },
            arcs: ["Pentacle", "School"],
          },
          {
            username: "JulobsS",
            nomRP: {
              School: "MR. BURTON (Prof Cultur.G)",
            },
            arcs: ["School"],
          },
          {
            username: "Tnopy",
            nomRP: { Pentacle: "Léonard KRUGER" },
            arcs: ["Pentacle"],
          },
          {
            username: "kailussss",
            nomRP: {
              Pentacle: "Balentina CUCALACHA",
              School: "Kaïna (Pion)",
              RedDeadRP: "Jade QUARRANEAU",
            },
            arcs: ["Pentacle", "School", "RedDeadRP"],
          },
          {
            username: "r3ymann",
            nomRP: {
              Pentacle: "Béatrice BONIFACE",
              FortCarson: "Ezekiel WHITEMORE",
              RedDeadRP: "Wade QUARRANEAU",
            },
            arcs: ["Pentacle", "FortCarson", "RedDeadRP"],
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
            nomRP: {
              Pentacle: "Alice DELACOURS",
              FortCarson: "Cassidy SMITH",
            },
            arcs: ["Pentacle", "FortCarson"],
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
            arcs: ["Pentacle"],
          },
          {
            username: "nekzioh",
            nomRP: {
              Pentacle: "Léonardo SKORPION / Damon FORBES",
              School: "Clétus O'NEIL",
              Survivor: "🔴Vince SAVAGE",
            },
            arcs: ["Pentacle", "School", "Survivor"],
          },
          {
            username: "CeliaaXVI",
            nomRP: {
              School: "Elena RIMENEZ",
            },
            arcs: ["School"],
          },
          {
            username: "lil__quinn",
            nomRP: {
              Pentacle: "Olya NELSON",
              School: "Suzie SMITH",
              Survivor: "🔴Victorine DELACOURS",
            },
            arcs: ["Pentacle", "School", "Survivor"],
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
            nomRP: { Pentacle: "Ava MENDEZ", FortCarson: "Arya JENSEN" },
            arcs: ["Pentacle", "FortCarson"],
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
            arcs: ["Pentacle"],
          },
          {
            username: "dilovibes",
            nomRP: { Pentacle: "Samir ALMADA" },
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
            username: "Blaize",
            nomRP: { School: "Nash RONDA (Prof Chimie)" },
            arcs: ["School"],
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
            arcs: ["Pentacle"],
          },
          {
            username: "pleyss2be_p2b",
            nomRP: { Pentacle: "Papicha" },
            arcs: ["Pentacle"],
          },
          {
            username: "covatvv",
            nomRP: { Pentacle: "Logan WALKER", FortCarson: "Elijah STONE" },
            arcs: ["Pentacle", "FortCarson"],
          },
          {
            username: "zulematv",
            nomRP: { Pentacle: "Gaby MONTANA" },
            arcs: ["Pentacle"],
          },
          {
            username: "Eterzx",
            nomRP: { Pentacle: "Jake Prize" },
            arcs: ["Pentacle"],
          },
          {
            username: "Zz_Sumsunnnito_SDF",
            nomRP: { Pentacle: "Steeve/Steevie" },
            arcs: ["Pentacle"],
          },
          {
            username: "fc_vito_",
            nomRP: { Pentacle: "Ghjuvan RICCI" },
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
          {
            username: "OhLaZizanie",
            nomRP: { FortCarson: "Ava CARTER" },
            arcs: ["FortCarson"],
          },
          {
            username: "freboca",
            nomRP: { FortCarson: "Cletus BICOU" },
            arcs: ["FortCarson"],
          },
          {
            username: "clescopaings",
            nomRP: { FortCarson: "Curtis McCOY" },
            arcs: ["FortCarson"],
          },
          {
            username: "Clemsed",
            nomRP: { FortCarson: "Dante BELLADONNA" },
            arcs: ["FortCarson"],
          },
          {
            username: "SkyRavenTV",
            nomRP: { FortCarson: "Gabriel HAMBLE" },
            arcs: ["FortCarson"],
          },
          {
            username: "Boubouune",
            nomRP: { FortCarson: "Kaiya KANE", RedDeadRP: "Nerissa CROWE" },
            arcs: ["FortCarson", "RedDeadRP"],
          },
          {
            username: "beaxttv",
            nomRP: { FortCarson: "Buck HARLOW", Pentacle: "???" },
            arcs: ["FortCarson", "Pentacle"],
          },
          {
            username: "miisterkel",
            nomRP: { FortCarson: "Michael HAWK" },
            arcs: ["FortCarson"],
          },
          {
            username: "PlumeLIVE",
            nomRP: {
              FortCarson: "Virginia WESTWOOD",
              RedDeadRP: "Evangeline CROWE",
            },
            arcs: ["FortCarson", "RedDeadRP"],
          },
          {
            username: "LidailHD",
            nomRP: { FortCarson: "Walker ROLLINS" },
            arcs: ["FortCarson"],
          },
          {
            username: "Larekno",
            nomRP: { RedDeadRP: "Craig DANIEL'S" },
            arcs: ["RedDeadRP"],
          },
          {
            username: "Zekun___",
            nomRP: { RedDeadRP: "Wallas WAYN" },
            arcs: ["RedDeadRP"],
          },
          {
            username: "danycroozer",
            nomRP: { RedDeadRP: "Jeremiah HAWKINS" },
            arcs: ["RedDeadRP"],
          },
          {
            username: "Sin",
            nomRP: { RedDeadRP: "Kimblee REDMOND" },
            arcs: ["RedDeadRP"],
          },
          {
            username: "XnonIFlash",
            nomRP: { RedDeadRP: "Gwenaël BIGNON" },
            arcs: ["RedDeadRP"],
          },
          {
            username: "Kazukatenshi",
            nomRP: { RedDeadRP: "Alan BIGNON" },
            arcs: ["RedDeadRP"],
          },
          {
            username: "pnkevaa",
            nomRP: { RedDeadRP: "Moyyati WAYA'TAGA" },
            arcs: ["RedDeadRP"],
          },
          {
            username: "Xatacks",
            nomRP: { RedDeadRP: "Kosoh WAYA'TAGA" },
            arcs: ["RedDeadRP"],
          },
          {
            username: "alexudl",
            nomRP: { RedDeadRP: "Tawa WAYA'TAGA" },
            arcs: ["RedDeadRP"],
          },
          {
            username: "Kreeks",
            nomRP: { RedDeadRP: "Georges PALMER" },
            arcs: ["RedDeadRP"],
          },
          {
            username: "MetoSpasmyl",
            nomRP: { RedDeadRP: "Bobby GOATY" },
            arcs: ["RedDeadRP"],
          },
          {
            username: "Picmat_",
            nomRP: { RedDeadRP: "" },
            arcs: ["RedDeadRP"],
          },
          {
            username: "khaziz_",
            nomRP: { RedDeadRP: "Eli MULDOON" },
            arcs: ["RedDeadRP"],
          },
          {
            username: "arahfat",
            nomRP: { RedDeadRP: "Clint REED" },
            arcs: ["RedDeadRP"],
          },
          {
            username: "Ekzyyl",
            nomRP: { RedDeadRP: "Owen ADAMS" },
            arcs: ["RedDeadRP"],
          },
          {
            username: "captainorion_",
            nomRP: { RedDeadRP: "Jasko PROSPERIDAD" },
            arcs: ["RedDeadRP"],
          },
          {
            username: "PixelOctet",
            nomRP: { RedDeadRP: "Yélénah PROSPERIDAD" },
            arcs: ["RedDeadRP"],
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
                    {streamer.nomRP[selectedArc] || "???"}
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
