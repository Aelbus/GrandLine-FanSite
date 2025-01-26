import React from "react";
import "../styles/components/footer.css";

const footer = () => {
  return (
    <footer className="footer-div">
      <p>
        © 2025{" "}
        <a href="https://linktr.ee/AelBus" target="_blank" rel="noreferrer">
          AelbusProd{" "}
        </a>
        &{" "}
        <a
          href="https://twitter.com/GrandLineServ"
          target="_blank"
          rel="noreferrer"
        >
          GrandLineServ{" "}
        </a>
        All rights reserved
      </p>
    </footer>
  );
};

export default footer;
