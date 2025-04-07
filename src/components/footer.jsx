import React, { useState, useRef, useEffect } from "react";
import "../styles/components/footer.css";
import { motion } from "framer-motion";
import Phone from "../assets/images/divers/—Pngtree—apple iphone 11 vector mockup_5828059.png";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const [isSent, setIsSent] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isKofiModalOpen, setIsKofiModalOpen] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    emailjs.init("VOTRE_CLE_PUBLIQUE");
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    const form = formRef.current;
    const formData = new FormData(form);
    const requiredFields = ["name", "email", "subject", "message"];
    let hasErrors = false;

    requiredFields.forEach((field) => {
      if (!formData.get(field)) {
        hasErrors = true;
        form.querySelector(`[name="${field}"]`).placeholder = "Champ requis";
      }
    });

    if (hasErrors) return;

    emailjs
      .sendForm(
        "service_p4phk6l",
        "template_amv8do6",
        form,
        "CHr9ssjH58F9GxVDn"
      )
      .then(
        (result) => {
          console.log("E-mail envoyé avec succès", result.text);
          setIsSent(true);
          form.reset();
        },
        (error) => {
          console.error("Erreur lors de l'envoi de l'e-mail", error);
        }
      );
  };

  const togglePhone = () => {
    setIsVisible(!isVisible);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <footer className="footer-div">
      <p className="footer-text">
        © 2025{" "}
        <a href="https://linktr.ee/AelBus" target="_blank" rel="noreferrer">
          AelbusProd
        </a>{" "}
        &{" "}
        <a
          href="https://twitter.com/GrandLineServ"
          target="_blank"
          rel="noreferrer"
        >
          GrandLineServ
        </a>{" "}
        All rights reserved
      </p>

      {/* ✅ Ko-Fi button modale */}
      <button className="kofi-fixed" onClick={() => setIsKofiModalOpen(true)}>
        <img
          src="https://storage.ko-fi.com/cdn/kofi2.png?v=6"
          alt="Buy Me a Coffee at ko-fi.com"
        />
      </button>

      {isKofiModalOpen && (
        <div
          className="kofi-modal-overlay"
          onClick={() => setIsKofiModalOpen(false)}
        >
          <div className="kofi-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setIsKofiModalOpen(false)}
            >
              ✖
            </button>
            <iframe
              id="kofiframe"
              src="https://ko-fi.com/aelbus/?hidefeed=true&widget=true&embed=true&preview=true"
              style={{
                border: "none",
                width: "100%",
                padding: "4px",
                background: "#f9f9f9",
              }}
              height="712"
              title="aelbus"
            ></iframe>
          </div>
        </div>
      )}

      {/* 💻 Desktop / Tablette : Phone */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: isVisible ? 0 : "80%" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="PhoneX"
        onClick={togglePhone}
      >
        <div className="Phone">
          <img
            src={Phone}
            alt="Téléphone"
            className="w-full h-full object-cover"
          />
          <div className="contact-div" onClick={(e) => e.stopPropagation()}>
            <div className="contact-container">
              <h2>Contact</h2>
              <form className="contact-form" onSubmit={sendEmail} ref={formRef}>
                <div className="contact-label">
                  <label htmlFor="name">Nom:</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div className="contact-label">
                  <label htmlFor="email">Email:</label>
                  <input type="email" name="email" id="email" />
                </div>
                <div className="contact-label">
                  <label htmlFor="subject">Sujet:</label>
                  <input type="text" name="subject" id="subject" />
                </div>
                <div className="contact-label">
                  <label htmlFor="message">Message:</label>
                  <textarea name="message" id="message" />
                </div>
                <div className="btn-submit">
                  <button type="submit">Send</button>
                  {isSent && (
                    <p className="Enjoy">Message envoyé avec succès !</p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 📱 Mobile : Bulle + Modale */}
      <div className="chat-bubble" onClick={toggleModal}>
        💬
      </div>

      {isModalOpen && (
        <div className="chat-modal-overlay" onClick={closeModal}>
          <div className="chat-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ✖
            </button>
            <h2>Contact</h2>
            <form className="contact-form" onSubmit={sendEmail} ref={formRef}>
              <div className="contact-label">
                <label htmlFor="name">Nom:</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="contact-label">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="contact-label">
                <label htmlFor="subject">Sujet:</label>
                <input type="text" name="subject" id="subject" />
              </div>
              <div className="contact-label">
                <label htmlFor="message">Message:</label>
                <textarea name="message" id="message" />
              </div>
              <div className="btn-submit">
                <button type="submit">Envoyer</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
