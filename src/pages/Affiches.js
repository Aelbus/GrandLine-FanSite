import { useState } from "react";
import "../styles/pages/Affiche.css";

const Affiches = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // Ajout de l'état de recherche

  const projects = [
    {
      title: "Le Hmar de la Street",
      info: "By Shynrow",
      url: "https://i.goopics.net/lm3pw8.png",
    },
    {
      title: "Grand Line RP",
      info: "By Uskal",
      url: "https://i.goopics.net/nymsvq.png",
    },
    {
      title: "La WeeWee",
      info: "By Tomsy",
      url: "https://i.goopics.net/7jaq9q.png",
    },
    {
      title: "Star Foulah Episode 2",
      info: "By Tomsy",
      url: "https://i.goopics.net/yq7v9e.png",
    },
    {
      title: "Le Gros, La vieille et le Puant",
      info: "By ???",
      url: "https://i.goopics.net/xpq7k3.png",
    },
    {
      title: "Le Testament",
      info: "By ???",
      url: "https://i.goopics.net/5hagtj.png",
    },
    {
      title: "Family Buisness",
      info: "By ???",
      url: "https://i.goopics.net/wx324t.png",
    },
    {
      title: "Attack On TITAN",
      info: "By ???",
      url: "https://i.goopics.net/qxjl4m.png",
    },
    {
      title: "Adieu Mamie",
      info: "By DraZer_",
      url: "https://i.goopics.net/4i7fkd.png",
    },
    {
      title: "Forbaise",
      info: "By Gabrielh",
      url: "https://i.goopics.net/fkvgcu.png",
    },
    {
      title: "S.N.A.K.O.U S6",
      info: "By Mohamed_genie",
      url: "https://i.goopics.net/92ytp1.png",
    },
    {
      title: "Qui retrouvera Gaston ?",
      info: "By Mohamed_genie",
      url: "https://i.goopics.net/9y5rfd.png",
    },
    {
      title: "Baise moi si tu peux",
      info: "By Mohamed_genie",
      url: "https://i.goopics.net/iangsr.png",
    },
    {
      title: "Accident",
      info: "By SuzuuTV",
      url: "https://i.goopics.net/rfsxr3.png",
    },
    {
      title: "Je suis une Teub",
      info: "By Akuro",
      url: "https://i.goopics.net/luus3g.png",
    },
    {
      title: "AGRASMAN",
      info: "By ComKris",
      url: "https://i.goopics.net/tc3r48.png",
    },
    {
      title: "Jasoun et Gastoun Bighess",
      info: "By ???",
      url: "https://i.goopics.net/43v0cy.png",
    },
    {
      title: "Jasonix & Gastonix",
      info: "By Achrafou",
      url: "https://i.goopics.net/npvdnq.png",
    },
    {
      title: "Jason VS Hector",
      info: "By ???",
      url: "https://i.goopics.net/7cnqio.png",
    },
    {
      title: "Hmar Is Back",
      info: "By Arab Supreme",
      url: "https://i.goopics.net/w7ohs4.png",
    },
    {
      title: "Guardian of the TAXI",
      info: "By ???",
      url: "https://i.goopics.net/54ri64.png",
    },
    {
      title: "Gros III",
      info: "By ???",
      url: "https://i.goopics.net/r1twqq.png",
    },
    {
      title: "Gradiator",
      info: "By Beuh",
      url: "https://i.goopics.net/v9gfzw.png",
    },
    {
      title: "Génération YAMAKASI",
      info: "By Chris Blanche",
      url: "https://i.goopics.net/b5ekok.png",
    },
    {
      title: "Festin",
      info: "By ???",
      url: "https://i.goopics.net/xrp5m9.png",
    },
    {
      title: "FuckBoy",
      info: "By Ookamishiro",
      url: "https://i.goopics.net/uonper.png",
    },
    {
      title: "Elle Revient",
      info: "By ???",
      url: "https://i.goopics.net/oljebe.png",
    },
    {
      title: "Chosen Of Aubervilliers",
      info: "By Fireblaze - Uskal",
      url: "https://i.goopics.net/e1uoig.png",
    },
    {
      title: "Bouclette",
      info: "By ???",
      url: "https://i.goopics.net/0isvjc.png",
    },
    {
      title: "Bigtanic",
      info: "By ???",
      url: "https://i.goopics.net/5eydyd.png",
    },
    {
      title: "Bigman à tout faire",
      info: "By Aku",
      url: "https://i.goopics.net/iklktr.png",
    },
    {
      title: "BIGMAN.",
      info: "by Beuh",
      url: "https://i.goopics.net/bv2rae.png",
    },
    {
      title: "Babybel",
      info: "By ???",
      url: "https://i.goopics.net/nngi09.png",
    },
    {
      title: "A Table",
      info: "By ???",
      url: "https://i.goopics.net/icjwd4.png",
    },
    {
      title: "Ahlbatar",
      info: "By ???",
      url: "https://i.goopics.net/ycas1l.png",
    },
    {
      title: "50 Nuances de Mamie Suzie",
      info: "By ???",
      url: "https://i.goopics.net/foghmc.png",
    },
    {
      title: "2 Fat 2 Furious",
      info: "By ???",
      url: "https://i.goopics.net/pi0mx4.png",
    },
    {
      title: "Stan La fondue",
      info: "By Fireblaze",
      url: "https://i.goopics.net/a46d1t.png",
    },
    {
      title: "Le Radin",
      info: "By Eskobar",
      url: "https://i.goopics.net/d8xznt.png",
    },
    {
      title: "Wanted, dead or alive",
      info: "By Maxime Rg",
      url: "https://i.goopics.net/xpxxft.png",
    },
    {
      title: "Mon Frère",
      info: "By Maxime Rg",
      url: "https://i.goopics.net/3iqetw.png",
    },
    {
      title: "Gaston la gâche",
      info: "By Gabin.nsrtxd",
      url: "https://i.goopics.net/rg6qos.png",
    },
    {
      title: "Bienvenue chez les Forbes",
      info: "By Eskobar",
      url: "https://i.goopics.net/niz0jl.png",
    },
    {
      title: "Princesse Nova Oragana",
      info: "By Fireblaze",
      url: "https://i.goopics.net/dkk7rp.png",
    },
    {
      title: "The Walking Bread",
      info: "By Unknown",
      url: "https://i.goopics.net/mectd6.png",
    },
    {
      title: "Vite Larsa",
      info: "By Unknown",
      url: "https://i.goopics.net/9rrsxj.png",
    },
    {
      title: "Trésor Forbes",
      info: "By Dpix",
      url: "https://i.goopics.net/qam844.png",
    },
    {
      title: "The Simian",
      info: "By Varggan",
      url: "https://i.goopics.net/k8a47h.png",
    },
    {
      title: "The Forbes",
      info: "By Fireblaze - Uskal",
      url: "https://i.goopics.net/t6fkpv.png",
    },
    {
      title: "SpiderHalouf",
      info: "By Fireblaze - Uskal - Akuro",
      url: "https://i.goopics.net/istsvz.png",
    },
    {
      title: "Sauvez Walid",
      info: "By Unknown",
      url: "https://i.goopics.net/r3oq9j.png",
    },
    {
      title: "Peter leurs chevilles",
      info: "By Unknown",
      url: "https://i.goopics.net/v9vyx7.png",
    },
    {
      title: "One Pouce",
      info: "By Fireblaze - Uskal",
      url: "https://i.goopics.net/wy3n8p.png",
    },
    {
      title: "Nova dans la peau",
      info: "By Fireblaze - Uskal",
      url: "https://i.goopics.net/viffia.png",
    },
    {
      title: "Mr. & Mrs. Forbes",
      info: "By Unknown",
      url: "https://i.goopics.net/ohw975.png",
    },
    {
      title: "Le diable en Prada",
      info: "By Fireblaze",
      url: "https://i.goopics.net/9yi520.png",
    },
    {
      title: "la Planete des singes",
      info: "By Fireblaze",
      url: "https://i.goopics.net/3qzhq3.png",
    },
    {
      title: "Keskidi",
      info: "By Akuro",
      url: "https://i.goopics.net/fd0se4.png",
    },
    {
      title: "Jason Wick",
      info: "By Fireblaze - Akuro",
      url: "https://i.goopics.net/8i9hdj.jpg",
    },
    {
      title: "Super Bigman Bros",
      info: "By AeLBuS",
      url: "https://i.goopics.net/tsx6uo.png",
    },
    {
      title: "25 Ans, toujours puceau",
      info: "By Fireblaze",
      url: "https://i.goopics.net/nu8idb.png",
    },
    {
      title: "Ah le Radin",
      info: "By unknowm",
      url: "https://i.goopics.net/lft5dr.png",
    },
    {
      title: "The Bachelor",
      info: "By Fireblaze",
      url: "https://i.goopics.net/s12jf8.png",
    },
    {
      title: "Le Branleurs de Chevaux",
      info: "By Fireblaze - Uskal",
      url: "https://i.goopics.net/z1s4cb.png",
    },
    {
      title: "César",
      info: "By Fireblaze",
      url: "https://i.goopics.net/xb56iv.png",
    },
    {
      title: "Breaking BigMan",
      info: "By Unknown",
      url: "https://i.goopics.net/9coql7.png",
    },
    {
      title: "Deapool Wolverine",
      info: "By Fireblaze",
      url: "https://i.goopics.net/aote2b.png",
    },
    {
      title: "GastonBuster",
      info: "By Sxcret.eth",
      url: "https://i.goopics.net/fgtku9.png",
    },
    {
      title: "Grand Theft Fobman",
      info: "By AeLBuS",
      url: "https://i.goopics.net/jgqbwv.png",
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

  // Filtrer les projets en fonction du terme de recherche
  const filteredProjects =
    searchTerm.trim() === ""
      ? projects
      : projects.filter((project) =>
          project.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

  return (
    <main className="projects-div">
      {/* Barre de recherche */}
      <input
        className="search-bar"
        type="text"
        placeholder="Rechercher une affiche par titre..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="card-container-affiche">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="card-affiche"
            onClick={() => openModal(index)}
          >
            <figure>
              <img src={project.url} alt={project.title} />
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
              src={projects[selectedCard].url}
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
