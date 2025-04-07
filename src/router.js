import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Affiche from "./pages/Affiches";
import Error from "./pages/Error";
import Stream from "./pages/Stream";
import Panneau from "./pages/Panneau";
import Vidéo from "./pages/Vidéo";
import Musique from "./pages/Musique";
import Arc from "./pages/Arc";

const router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/affiche" element={<Affiche />} />
        <Route path="/panneau" element={<Panneau />} />
        <Route path="/stream" element={<Stream />} />
        <Route path="/vidéo" element={<Vidéo />} />
        <Route path="/arc" element={<Arc />} />
        <Route path="*" element={<Error />} />
        <Route path="/musique" element={<Musique />} />
      </Routes>
    </>
  );
};

export default router;
