import { useState } from "react";
import "../styles/pages/Stream.css";

const Stream = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const projects = [
    {
      name: "Jason Bigman",
      img: "",
      reseau: [],
    },
  ];
  return (
    <main className="projects-div">
      <div className="card-container"></div>
    </main>
  );
};

export default Stream;
