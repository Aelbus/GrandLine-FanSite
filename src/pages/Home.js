import React from "react";
import "../styles//pages/Home.css";

const Home = () => {
  return (
    <div className="home-div">
      <ul>
        Lexique Dimension : Hauteur x Largeur
        <li>Affiche: 512x330</li>
        <li>Panneau 272x512</li>
        <li>Pancartes 307x512</li>
      </ul>
      <p>MAJ 23/04 16h - Ajouts Panneau</p>
      <p>MAJ 23/04 14h - Ajouts d'affiches + redimension des images</p>
    </div>
  );
};
export default Home;
