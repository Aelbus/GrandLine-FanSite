import { useState } from "react";
import "../styles/pages/Affiche.css";
import SuperBigmanBros from "../assets/images/affiche/SuperBigmanBros.png";
import puceau from "../assets/images/affiche/25ans toujours puceau.png";
import ahleradin from "../assets/images/affiche/Ahleradin.png";
import bachelor from "../assets/images/affiche/Bachelor.png";
import chevaux from "../assets/images/affiche/branleur chevaux.png";
import cesar from "../assets/images/affiche/Cesar.png";
import breakingbigman from "../assets/images/affiche/BreakBigMan.png";
import deadpool from "../assets/images/affiche/deadpool.png";
import gastonbuster from "../assets/images/affiche/gastonBuster.png";
import gtforbman from "../assets/images/affiche/GTforbman.png";
import jasonwick from "../assets/images/affiche/Jason Wick.jpg";
import keskidi from "../assets/images/affiche/Keskidi.png";
import planetesinge from "../assets/images/affiche/La planete des singes.png";
import prada from "../assets/images/affiche/le diable s'habille en prada.png";
import mrmrsForbes from "../assets/images/affiche/mr&mrs Forbes.png";
import novapeau from "../assets/images/affiche/Nova dans la Peau.png";
import onepouce from "../assets/images/affiche/one pouce.png";
import petercheville from "../assets/images/affiche/peterleurs chevilles.png";
import sauvezwalid from "../assets/images/affiche/sauvez Walid.png";
import spiderhalouf from "../assets/images/affiche/SpiderHalouf.png";
import theforbes from "../assets/images/affiche/the forbes.png";
import thesimian from "../assets/images/affiche/The Simian.png";
import tresorforbes from "../assets/images/affiche/trésor forbes dpix.png";
import vitelarsa from "../assets/images/affiche/vite Larsa.png";
import walkingbread from "../assets/images/affiche/WalkingBread.png";
import princessenova from "../assets/images/affiche/princessenova.png";
import bienvenuforbes from "../assets/images/affiche/bienvenu chez les forbes.png";
import gastonlagache from "../assets/images/affiche/Gaston la gache.png";
import monfrere from "../assets/images/affiche/mon frère.png";
import wanted from "../assets/images/affiche/Wanted.png";
import leradin from "../assets/images/affiche/leradin.png";
import stanlafondue from "../assets/images/affiche/Stan la fondue.png";
import fatfurious from "../assets/images/affiche/2fat 2furious.png";
import nuance from "../assets/images/affiche/50 Nuances de mamie Suzie.png";
import albatar from "../assets/images/affiche/Albatar.png";
import atable from "../assets/images/affiche/Atable.png";
import babybel from "../assets/images/affiche/Babybel.png";
import bigman from "../assets/images/affiche/Bgmann. - hueb.png";
import bigmanatoutfaire from "../assets/images/affiche/bigman a tout faire - aku.png";
import bigtanic from "../assets/images/affiche/Bigtanic.png";
import bouclette from "../assets/images/affiche/Bouclette.png";
import coa from "../assets/images/affiche/Chosen of Aubervilliers - Fireblaze uskal.png";
import ellerevient from "../assets/images/affiche/Elle reviens.png";
import fuckboy from "../assets/images/affiche/Fuck Boy - ookamishiro.png";
import festin from "../assets/images/affiche/Festin.png";
import yamakasi from "../assets/images/affiche/generation yamakasi - Chris blanche.png";
import gradiator from "../assets/images/affiche/Gradiator.png";
import grosIII from "../assets/images/affiche/Gros III.png";
import guardian from "../assets/images/affiche/Guardians of the taxi.png";
import hmarisback from "../assets/images/affiche/hmar is back - Arab Supreme.png";
import jasonvshector from "../assets/images/affiche/jason vs hector.png";
import jasonix from "../assets/images/affiche/jasonix et gatonix - Achrafou.png";
import bighess from "../assets/images/affiche/Jasoun et Gastoun bighess.png";
import agrasman from "../assets/images/affiche/agrasman - M8 Zay.png";
import teub from "../assets/images/affiche/Je suis une teub.png";
import accident from "../assets/images/affiche/accident - suzuutv.png";

const Affiches = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const projects = [
    {
      title: "Accident",
      info: "By SuzuuTV",
      image: accident,
      url: "https://example.com",
    },
    {
      title: "Je suis une Teub",
      info: "By Akuro",
      image: teub,
      url: "https://example.com",
    },
    {
      title: "AGRASMAN",
      info: "By M8 Zay",
      image: agrasman,
      url: "https://example.com",
    },
    {
      title: "Jasoun et Gastoun Bighess",
      info: "By ???",
      image: bighess,
      url: "https://example.com",
    },
    {
      title: "Jasonix & Gastonix",
      info: "By Achrafou",
      image: jasonix,
      url: "https://example.com",
    },
    {
      title: "Jason VS Hector",
      info: "By ???",
      image: jasonvshector,
      url: "https://example.com",
    },
    {
      title: "Hmar Is Back",
      info: "By Arab Supreme",
      image: hmarisback,
      url: "https://example.com",
    },
    {
      title: "Guardian of the TAXI",
      info: "By ???",
      image: guardian,
      url: "https://example.com",
    },
    {
      title: "Gros III",
      info: "By ???",
      image: grosIII,
      url: "https://example.com",
    },
    {
      title: "Gradiator",
      info: "By ???",
      image: gradiator,
      url: "https://example.com",
    },
    {
      title: "Génération YAMAKASI",
      info: "By FChris Blanche",
      image: yamakasi,
      url: "https://example.com",
    },
    {
      title: "Festin",
      info: "By ???",
      image: festin,
      url: "https://example.com",
    },
    {
      title: "FuckBoy",
      info: "By Ookamishiro",
      image: fuckboy,
      url: "https://example.com",
    },
    {
      title: "Elle Revient",
      info: "By ???",
      image: ellerevient,
      url: "https://example.com",
    },
    {
      title: "Chosen Of Aubervilliers",
      info: "By Fireblaze - Uskal",
      image: coa,
      url: "https://example.com",
    },
    {
      title: "Bouclette",
      info: "By ???",
      image: bouclette,
      url: "https://example.com",
    },
    {
      title: "Bigtanic",
      info: "By ???",
      image: bigtanic,
      url: "https://example.com",
    },
    {
      title: "Bigman à tout faire",
      info: "By Aku",
      image: bigmanatoutfaire,
      url: "https://example.com",
    },
    {
      title: "BIGMAN.",
      info: "By Hueb",
      image: bigman,
      url: "https://example.com",
    },
    {
      title: "Babybel",
      info: "By ???",
      image: babybel,
      url: "https://example.com",
    },
    {
      title: "A Table",
      info: "By ???",
      image: atable,
      url: "https://example.com",
    },
    {
      title: "Ahlbatar",
      info: "By ???",
      image: albatar,
      url: "https://example.com",
    },
    {
      title: "50 Nuances de Mamie Suzie",
      info: "By ???",
      image: nuance,
      url: "https://example.com",
    },
    {
      title: "2 Fat 2 Furious",
      info: "By ???",
      image: fatfurious,
      url: "https://example.com",
    },
    {
      title: "Stan La fondue",
      info: "By Fireblaze",
      image: stanlafondue,
      url: "https://example.com",
    },
    {
      title: "Le Radin",
      info: "By Eskobar",
      image: leradin,
      url: "https://example.com",
    },
    {
      title: "Wanted, dead or alive",
      info: "By Maxime Rg",
      image: wanted,
      url: "https://example.com",
    },
    {
      title: "Mon Frère",
      info: "By Maxime Rg",
      image: monfrere,
      url: "https://example.com",
    },
    {
      title: "Gaston la gâche",
      info: "By Gabin.nsrtxd",
      image: gastonlagache,
      url: "https://example.com",
    },
    {
      title: "Bienvenue chez les Forbes",
      info: "By Eskobar",
      image: bienvenuforbes,
      url: "https://example.com",
    },
    {
      title: "Princesse Nova Oragana",
      info: "By Fireblaze",
      image: princessenova,
      url: "https://example.com",
    },
    {
      title: "The Walking Bread",
      info: "By Unknown",
      image: walkingbread,
      url: "https://example.com",
    },
    {
      title: "Vite Larsa",
      info: "By Unknown",
      image: vitelarsa,
      url: "https://example.com",
    },
    {
      title: "Trésor Forbes",
      info: "By Dpix",
      image: tresorforbes,
      url: "https://example.com",
    },
    {
      title: "The Simian",
      info: "By Varggan",
      image: thesimian,
      url: "https://example.com",
    },
    {
      title: "The Forbes",
      info: "By Fireblaze - Uskal",
      image: theforbes,
      url: "https://example.com",
    },
    {
      title: "SpiderHalouf",
      info: "By Fireblaze - Uskal - Akuro",
      image: spiderhalouf,
      url: "https://example.com",
    },
    {
      title: "Sauvez Walid",
      info: "By Unknown",
      image: sauvezwalid,
      url: "https://example.com",
    },
    {
      title: "Peter leurs chevilles",
      info: "By Unknown",
      image: petercheville,
      url: "https://example.com",
    },
    {
      title: "One Pouce",
      info: "By Fireblaze - Uskal",
      image: onepouce,
      url: "https://example.com",
    },
    {
      title: "Nova dans la peau",
      info: "By Fireblaze - Uskal",
      image: novapeau,
      url: "https://example.com",
    },
    {
      title: "Mr. & Mrs. Forbes",
      info: "By Unknown",
      image: mrmrsForbes,
      url: "https://example.com",
    },
    {
      title: "Le diable en Prada",
      info: "By Fireblaze",
      image: prada,
      url: "https://example.com",
    },
    {
      title: "la Planete des singes",
      info: "By Fireblaze",
      image: planetesinge,
      url: "https://example.com",
    },
    {
      title: "Keskidi",
      info: "By Akuro",
      image: keskidi,
      url: "https://example.com",
    },
    {
      title: "Jason Wick",
      info: "By Fireblaze - Akuro",
      image: jasonwick,
      url: "https://example.com",
    },
    {
      title: "Super Bigman Bros",
      info: "By AeLBuS",
      image: SuperBigmanBros,
      url: "https://example.com",
    },
    {
      title: "25 Ans, toujours puceau",
      info: "By Fireblaze",
      image: puceau,
      url: "https://example.com",
    },
    {
      title: "Ah le Radin",
      info: "By unknowm",
      image: ahleradin,
      url: "https://example.com",
    },
    {
      title: "The Bachelor",
      info: "By Fireblaze",
      image: bachelor,
      url: "https://example.com",
    },
    {
      title: "Le Branleurs de Chevaux",
      info: "By Fireblaze - Uskal",
      image: chevaux,
      url: "https://example.com",
    },
    {
      title: "César",
      info: "By Fireblaze",
      image: cesar,
      url: "https://example.com",
    },
    {
      title: "Breaking BigMan",
      info: "By Unknown",
      image: breakingbigman,
      url: "https://example.com",
    },
    {
      title: "Deapool Wolverine",
      info: "By Fireblaze",
      image: deadpool,
      url: "https://example.com",
    },
    {
      title: "GastonBuster",
      info: "By Sxcret.eth",
      image: gastonbuster,
      url: "https://example.com",
    },
    {
      title: "Grand Theft Fobman",
      info: "By AeLBuS",
      image: gtforbman,
      url: "https://example.com",
    },
  ];

  const openModal = (index) => {
    setSelectedCard(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const copyURL = () => {
    const url = projects[selectedCard].url;
    const el = document.createElement("textarea");
    el.value = url;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    alert("URL copiée dans le presse-papiers !");
  };

  return (
    <main className="projects-div">
      <div className="card-container-affiche">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card-affiche"
            onClick={() => openModal(index)}
          >
            <figure>
              <img src={project.image} alt={project.title} />
              <figcaption>
                <h2>{project.title}</h2>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>{projects[selectedCard].title}</h2>
            <p>{projects[selectedCard].info}</p>
            <img
              src={projects[selectedCard].image}
              alt={projects[selectedCard].title}
            />
            <button onClick={copyURL}>Importer en jeu</button>{" "}
            {/* Bouton pour copier l'URL */}
          </div>
        </div>
      )}
    </main>
  );
};

export default Affiches;
