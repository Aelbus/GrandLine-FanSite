import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Affiche from "./pages/Affiches";
import Error from "./pages/Error";
import Stream from "./pages/Stream";
import Panneau from "./pages/Panneau";
import Contact from "./pages/Contact";
import Vidéo from "./pages/Vidéo";
import Lucy from "./pages/lucy";

const router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/affiche" element={<Affiche />} />
        <Route path="/panneau" element={<Panneau />} />
        <Route path="/stream" element={<Stream />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/vidéo" element={<Vidéo />} />
        <Route path="/lucy" element={<Lucy />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default router;
