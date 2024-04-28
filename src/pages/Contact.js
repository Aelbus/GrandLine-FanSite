import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "../styles/pages/Contact.css";

function ContactForm() {
  const [isSent, setIsSent] = useState(false);

  const inputRefs = {
    name: useRef(null),
    title: useRef(null),
    url: useRef(null),
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const requiredFields = ["name", "title", "url"];
    let hasErrors = false;

    requiredFields.forEach((field) => {
      if (!e.target[field].value) {
        hasErrors = true;
        e.target[field].placeholder = "Champ requis";
      }
    });

    if (hasErrors) {
      return;
    }

    emailjs
      .sendForm(
        "service_p4phk6l",
        "template_amv8do6",
        e.target,
        "CHr9ssjH58F9GxVDn"
      )
      .then((result) => {
        console.log("E-mail envoyé avec succès", result.text);
        setIsSent(true);
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi de l'e-mail", error);
      });
  };

  return (
    <div className="contact-div">
      <div className="contact-container">
        <h2>
          Envoyer vos affiches et panneaux <br />
          Ajoutez vos Streameur Favoris
        </h2>
        <p>
          Merci de respecter le format PNG ainsi que les dimensions
          <br />
          J'ajoute manuellement les affiches/panneau/streamer. Si vôtre
          réalisation et/ou nom de streamer n'est pas affiché c'est soit pas
          encore fait, soit inapproprié. <br />
          <br />
          Dimension
          <br />
          <br />
          <a href="https://files.glife.fr/assets/poster_1.png"> Affiche </a>
          <br />
          <a href="https://files.glife.fr/assets/poster_2.png"> Panneau </a>
        </p>
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="contact-label">
            <label htmlFor="name">Pseudo / Streamer</label>
            <input type="text" name="name" id="name" ref={inputRefs.name} />
          </div>
          <div className="contact-label">
            <label htmlFor="title">Titre / Nom RP</label>
            <input
              type="text"
              name="title"
              id="title"
              ref={inputRefs.title}
            />{" "}
          </div>
          <div className="contact-label">
            <label htmlFor="url">Lien Image / Lien Twitch</label>
            <input type="text" name="url" id="url" ref={inputRefs.url} />
          </div>

          <div className="btn-submit">
            {isSent && <p className="Enjoy">Envoyé avec succès !</p>}
            <button type="submit">Envoyer</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
