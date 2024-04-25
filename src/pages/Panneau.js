import { useState } from "react";
import "../styles/pages/Panneau.css";

const Panneau = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const projects = [
    {
      title: "FISTE",
      info: "???",
      url: "https://i.goopics.net/ohexfw.png",
    },
    {
      title: "L.A.Noire",
      info: "???",
      url: "https://i.goopics.net/kdlx1m.png",
    },
    {
      title: "Alerte Kehba",
      info: "???",
      url: "https://i.goopics.net/od5x0g.png",
    },
    {
      title: "Here we go again...",
      info: "AeLBuS",
      url: "https://i.goopics.net/ivv15h.png",
    },
    {
      title: "Téléteubé",
      info: "AeLBuS",
      url: "https://i.goopics.net/dmhi4p.png",
    },
    {
      title: "Le Seigneur des Anus",
      info: "Varggan",
      url: "https://i.goopics.net/5llv85.png",
    },
    {
      title: "Red Dead Redumbtion",
      info: "???",
      url: "https://i.goopics.net/509okb.png",
    },
    {
      title: "Red Dead Jason",
      info: "Varggan",
      url: "https://i.goopics.net/o6tkyx.png",
    },
    {
      title: "Red Dead Nova",
      info: "Varggan",
      url: "https://i.goopics.net/g486gb.png",
    },
    {
      title: "Raid dingue",
      info: "???",
      url: "https://i.goopics.net/82w7rf.png",
    },
    {
      title: "Pokémon",
      info: "???",
      url: "https://i.goopics.net/p09nrv.png",
    },
    {
      title: "One Piece",
      info: "???",
      url: "https://i.goopics.net/btnguc.png",
    },
    {
      title: "Matrixé",
      info: "Varggan",
      url: "https://i.goopics.net/xjvtec.png",
    },
    {
      title: "Mariés au premier regard",
      info: "???",
      url: "https://i.goopics.net/gf3wt1.png",
    },
    {
      title: "KFC Delux Edition",
      info: "???",
      url: "https://i.goopics.net/urnyvo.png",
    },
    {
      title: "Jamais peur d'Hector, GASTOUN & JASOUN",
      info: "???",
      url: "https://i.goopics.net/wn6tj6.png",
    },
    {
      title: "God Of Ouarzazate",
      info: "Varggan",
      url: "https://i.goopics.net/4slg76.png",
    },
    {
      title: "Les mysterieuse cites d'or",
      info: "???",
      url: "https://i.goopics.net/ykzejf.png",
    },
    {
      title: "Bzezilla",
      info: "Varggan",
      url: "https://i.goopics.net/cm8lhz.png",
    },
    {
      title: "Bigman et Loup Garou",
      info: "???",
      url: "https://i.goopics.net/x4ecb1.png",
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
    <main className="projects-div-panneau">
      <div className="card-container-panneau">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card-panneau"
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
          <div className="modal-content-panneau">
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

export default Panneau;
