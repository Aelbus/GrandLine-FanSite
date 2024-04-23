import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Affiche from "./pages/Affiches";
import Error from "./pages/Error";
import Stream from "./pages/Stream";

const router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/affiche" element={<Affiche />} />
        <Route path="/stream" element={<Stream />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default router;
