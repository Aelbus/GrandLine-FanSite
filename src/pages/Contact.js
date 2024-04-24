import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "../styles/pages/Contact.css";

function ContactForm() {
  const [isSent, setIsSent] = useState(false);

  const inputRefs = {
    name: useRef(null),
    url: useRef(null),
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const requiredFields = ["name", "url"]; // Changement ici pour vérifier seulement name et email
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
        setIsSent(true); // Met à jour l'état pour afficher le message de confirmation
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi de l'e-mail", error);
      });
  };

  return (
    <div className="contact-div">
      <div className="contact-container">
        <h2>Envoyer vos affiches et panneaux</h2>
        <p>
          Merci de respecter le format PNG ainsi que les dimensions
          <br />
          J'ajoute manuellement les affiches, si la vôtre n'est pas affiché ce
          n'est soit pas encore fait, soit inapproprié. <br />
          <br />
          Hauteur x Largeur
          <br />
          Affiche: 512x330
          <br />
          Panneau 272x512
        </p>
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="contact-label">
            <label htmlFor="name">Pseudo</label>
            <input type="text" name="name" id="name" ref={inputRefs.name} />
          </div>
          <div className="contact-label">
            <label htmlFor="url">Lien Image</label>
            <input type="text" name="url" id="url" ref={inputRefs.url} />{" "}
            {/* Changement ici pour corriger la référence */}
          </div>

          <div className="btn-submit">
            <button type="submit">Envoyer</button>
            {isSent && (
              <p className="Enjoy">Votre message a été envoyé avec succès !</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
