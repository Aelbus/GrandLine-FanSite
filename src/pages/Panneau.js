import { useState } from "react";
import "../styles/pages/Panneau.css";
import loupgarou from "../assets/images/panneau/Bigman_et_loup_garou.png";
import bzezilla from "../assets/images/panneau/Bzezilla.png";
import citeor from "../assets/images/panneau/Cité_or.png";
import godof from "../assets/images/panneau/god_of_ourzazate.png";
import peurhector from "../assets/images/panneau/Jamais_peur_hector.png";
import KFC from "../assets/images/panneau/KFC_deluxe.png";
import marié from "../assets/images/panneau/mariés_au_premier_regard.png";
import matrixé from "../assets/images/panneau/matrixé.png";
import onepiece from "../assets/images/panneau/One_piece.png";
import poké from "../assets/images/panneau/Pokémon.png";
import raid from "../assets/images/panneau/raid_dingue.png";
import reddeadJ from "../assets/images/panneau/red_dead_jason.png";
import reddeadN from "../assets/images/panneau/red_dead_nova.png";
import redumbtion from "../assets/images/panneau/Red_Dead_Redumbtion.png";
import seigneuranus from "../assets/images/panneau/Seigneur_anus.png";
import téléteubé from "../assets/images/panneau/Téléteubé.png";
import again from "../assets/images/panneau/here_we_go_again.png";

const Panneau = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const projects = [
    {
      title: "Here we go again...",
      info: "By AeLBuS",
      image: again,
      url: "https://i.goopics.net/ivv15h.png",
    },
    {
      title: "Téléteubé",
      info: "By AeLBuS",
      image: téléteubé,
      url: "https://i.goopics.net/dmhi4p.png",
    },
    {
      title: "Le Seigneur des Anus",
      info: "By Varggan",
      image: seigneuranus,
      url: "https://i.goopics.net/5llv85.png",
    },
    {
      title: "Red Dead Redumbtion",
      info: "By ???",
      image: redumbtion,
      url: "https://i.goopics.net/509okb.png",
    },
    {
      title: "Red Dead Jason",
      info: "By Varggan",
      image: reddeadJ,
      url: "https://i.goopics.net/o6tkyx.png",
    },
    {
      title: "Red Dead Nova",
      info: "By Varggan",
      image: reddeadN,
      url: "https://i.goopics.net/g486gb.png",
    },
    {
      title: "Raid dingue",
      info: "By ???",
      image: raid,
      url: "https://i.goopics.net/82w7rf.png",
    },
    {
      title: "Pokémon",
      info: "By ???",
      image: poké,
      url: "https://i.goopics.net/p09nrv.png",
    },
    {
      title: "One Piece",
      info: "By ???",
      image: onepiece,
      url: "https://i.goopics.net/btnguc.png",
    },
    {
      title: "Matrixé",
      info: "By Varggan",
      image: matrixé,
      url: "https://i.goopics.net/xjvtec.png",
    },
    {
      title: "Mariés au premier regard",
      info: "By ???",
      image: marié,
      url: "https://i.goopics.net/gf3wt1.png",
    },
    {
      title: "KFC Delux Edition",
      info: "By ???",
      image: KFC,
      url: "https://i.goopics.net/urnyvo.png",
    },
    {
      title: "Jamais peur d'Hector, GASTOUN & JASOUN",
      info: "By ???",
      image: peurhector,
      url: "https://i.goopics.net/wn6tj6.png",
    },
    {
      title: "God Of Ouarzazate",
      info: "By Varggan",
      image: godof,
      url: "https://i.goopics.net/4slg76.png",
    },
    {
      title: "Les mysterieuse cites d'or",
      info: "By ???",
      image: citeor,
      url: "https://i.goopics.net/ykzejf.png",
    },
    {
      title: "Bzezilla",
      info: "By Varggan",
      image: bzezilla,
      url: "https://i.goopics.net/cm8lhz.png",
    },
    {
      title: "Bigman et Loup Garou",
      info: "By ???",
      image: loupgarou,
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
          <div className="modal-content-panneau">
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
