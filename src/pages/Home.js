import React from "react";
import "../styles//pages/Home.css";
import prime from "../assets/images/Home.png";

const Home = () => {
  return (
    <div className="home-div">
      <h1>Bienvenue sur GrandLine Galerie Trollesque</h1>
      <p>
        Ce site est un outil pour les streameurs présents sur le serveur
        GrandLineWL GTA5 RP. <br />
        Vous pouvez y retrouver la plupart des affiches et panneaux créer par
        les communautés ainsi que la plupart des streamers du serveur.
        <br />
        L'ajout de contenu est fait manuellement, donc quand j'ai le temps.
        <br />
        Vous pouvez envoyer vos affiches et panneaux, ajoutez vos Streamers
        Favoris dans la section "add?" du site.
        <br />
        <br />
        Merci à tous pour vos retour, c'est trés encourageant. <br />
        En ésperant que le site vous convients. <br />
        <br />
        AeLBuS
      </p>
      <div className="img-home">
        <img src={prime} alt="GrandLineRP by Uskal" />
      </div>
      <div className="info-home">
        <p>
          Remerciement à tous les contributeurs <br />
          Uskal, Fireblaze, Varggan, Dpix et Akuro qui ont lancer la méta
          Affiche
          <br />
          Désolé de ne pas pouvoir citer tous les créateurs
        </p>
      </div>
    </div>
  );
};
export default Home;
