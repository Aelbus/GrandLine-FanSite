import React from "react";
import "../styles/pages/Home.css";

const Home = () => {
  return (
    <div className="home-div">
      <div className="home-content">
        <div className="home-text">
          <h1>Bienvenue sur GrandLine Galerie Trollesque</h1>
          <p>
            Ce site est un "Wiki" pour les différents Arc sur le serveur
            GrandLineWL GTA5 / Red Dead RP. <br />
            Vous pouvez y retrouver la plupart des affiches et panneaux créer
            par les communautés ainsi que la plupart des streamers sur les
            différents Arcs.
            <br />
            <br />
            Excusez-moi d'avance s'il y a des erreurs, je ne fais pas partie du
            Staff Grandline.
            <br /> Pour toute demande de modification "NomRP / Pseudo" dans la
            catégorie Joueurs, vous pouvez utiliser le formulaire de contact via
            le téléphone en bas à droite du site.
            <br />
            AFFICHE & PANNEAU en maintenance...
            <br />
            Dev{" "}
            <a href="https://linktr.ee/AelBus" target="_blank" rel="noreferrer">
              AeLBuS
            </a>
            .
          </p>
        </div>
      </div>

      <div className="home-staff">
        <h2>Staffs GrandLine principaux:</h2>
        <div className="staff">
          <a href="https://x.com/AmineMaTue" target="_blank" rel="noreferrer">
            💠 Aminematue 💠
          </a>
          <a href="https://x.com/loly_mohasey" target="_blank" rel="noreferrer">
            💠 LolyPokiCake 💠
          </a>
          <a href="https://x.com/pichotm_" target="_blank" rel="noreferrer">
            💠 Pichotm 💠
          </a>
          <a href="https://x.com/Zipperr_" target="_blank" rel="noreferrer">
            💠 Zipper 💠
          </a>
          <a href="https://x.com/postbadonn" target="_blank" rel="noreferrer">
            💠 PostBadon 💠
          </a>
        </div>
        <p>Et plein d'autre, donnez leurs de la force.</p>
      </div>
    </div>
  );
};

export default Home;
