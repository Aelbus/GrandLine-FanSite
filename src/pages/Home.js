import React from "react";
import "../styles//pages/Home.css";
import prime from "../assets/images/Home.png";

const Home = () => {
  return (
    <div className="home-div">
      <ul>
        Lexique Dimension : Hauteur x Largeur
        <li>Affiche: 512x330</li>
        <li>Panneau 272x512</li>
      </ul>
      <p>MAJ 24/04 21h30- ajouts Barre de recherche "Stream" </p>
      <p>MAJ 24/04 19h30- ajouts Barre de recherche "affiche" </p>
      <p>
        MAJ 24/04 16h30- ajouts d'un formulaire pour envoyez vos images. "Add ?"{" "}
      </p>
      <p>MAJ 24/04 13h30- ajouts streamer + affiche </p>
      <p>MAJ 23/04 20h50 - Ajouts Imports </p>
      <p>MAJ 23/04 17h30 - Ajouts Quelque Stream + redirection</p>
      <p>MAJ 23/04 16h - Ajouts Panneau</p>
      <p>MAJ 23/04 14h - Ajouts d'affiches + redimension des images</p>
      <p>22/04 - Début du projet</p>
      <div className="img-home">
        <img src={prime} alt="GrandLineRP by Uskal" />
      </div>
      <div className="info-home">
        <p>
          Remerciement a tous les contributeurs <br />
          Uskal, Fireblaze, Varggan, Dpix qui ont lancer la méta Affiche
          <br />
          Désolé de ne pas pouvoir citer tous les créateurs
        </p>
      </div>
    </div>
  );
};
export default Home;
