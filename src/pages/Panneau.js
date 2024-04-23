import { useState } from "react";
import "../styles/pages/Panneau.css";
import loupgarou from "../assets/images/panneau/Bigman et loup garou.png";
import bzezilla from "../assets/images/panneau/Bzezilla.png";
import citeor from "../assets/images/panneau/Cité d'or.png";
import godof from "../assets/images/panneau/god of ourzazate.png";
import peurhector from "../assets/images/panneau/Jamais peur d'hector.png";
import KFC from "../assets/images/panneau/KFC deluxe.png";
import marié from "../assets/images/panneau/mariés au premier regard.png";
import matrixé from "../assets/images/panneau/matrixé.png";
import onepiece from "../assets/images/panneau/One piece.png";
import poké from "../assets/images/panneau/Pokémon.png";
import raid from "../assets/images/panneau/raid dingue.png";
import reddeadJ from "../assets/images/panneau/red dead jason.png";
import reddeadN from "../assets/images/panneau/red dead nova.png";
import redumbtion from "../assets/images/panneau/Red Dead Redumbtion.png";
import seigneuranus from "../assets/images/panneau/Seigneur anus.png";
import téléteubé from "../assets/images/panneau/Téléteubé.png";
import cartel from "../assets/images/panneau/The cartel.png";

const Panneau = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const projects = [
    {
      title: "The Cartel",
      info: "By ???",
      image: cartel,
      url: "https://example.com",
    },
    {
      title: "Téléteubé",
      info: "By AeLBuS",
      image: téléteubé,
      url: "https://example.com",
    },
    {
      title: "Le Seigneur des Anus",
      info: "By Varggan",
      image: seigneuranus,
      url: "https://example.com",
    },
    {
      title: "Red Dead Redumbtion",
      info: "By ???",
      image: redumbtion,
      url: "https://example.com",
    },
    {
      title: "Red Dead Jason",
      info: "By Varggan",
      image: reddeadJ,
      url: "https://example.com",
    },
    {
      title: "Red Dead Nova",
      info: "By Varggan",
      image: reddeadN,
      url: "https://example.com",
    },
    {
      title: "Raid dingue",
      info: "By ???",
      image: raid,
      url: "https://example.com",
    },
    {
      title: "Pokémon",
      info: "By ???",
      image: poké,
      url: "https://example.com",
    },
    {
      title: "One Piece",
      info: "By ???",
      image: onepiece,
      url: "https://example.com",
    },
    {
      title: "Matrixé",
      info: "By Varggan",
      image: matrixé,
      url: "https://example.com",
    },
    {
      title: "Mariés au premier regard",
      info: "By ???",
      image: marié,
      url: "https://example.com",
    },
    {
      title: "KFC Delux Edition",
      info: "By ???",
      image: KFC,
      url: "https://example.com",
    },
    {
      title: "Jamais peur d'Hector, GASTOUN & JASOUN",
      info: "By ???",
      image: peurhector,
      url: "https://example.com",
    },
    {
      title: "God Of Ouarzazate",
      info: "By Varggan",
      image: godof,
      url: "https://example.com",
    },
    {
      title: "Les mysterieuse cites d'or",
      info: "By ???",
      image: citeor,
      url: "https://example.com",
    },
    {
      title: "Bzezilla",
      info: "By Varggan",
      image: bzezilla,
      url: "https://example.com",
    },
    {
      title: "Bigman et Loup Garou",
      info: "By ???",
      image: loupgarou,
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
      <div className="card-container-panneau">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card-panneau"
            onClick={() => openModal(index)}
          >
            <figure>
              <img src={project.image} alt={project.title} />
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

export default Panneau;
