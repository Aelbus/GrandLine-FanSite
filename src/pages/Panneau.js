import { useState } from "react";
import "../styles/pages/Panneau.css";

const Panneau = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [totalPanneaux, setTotalPanneaux] = useState(0);

  const projects = [
    {
      title: "CHAUVA",
      info: "",
      url: "https://i.goopics.net/791uh8.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/f41662fa4a485387a052c1fa2411e7b3.png",
    },
    {
      title: "Nova Army",
      info: "",
      url: "https://i.goopics.net/2uqvax.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/f3c0647a5fbe98919b51c08fc6fe0d3a.png",
    },
    {
      title: "Recherche appartement ou maison",
      info: "Akhoriz",
      url: "https://i.goopics.net/5lsm5s.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/6411e0c968b14689e1fec8e612a75cb8.png",
    },
    {
      title: "David Forbes Boule boule",
      info: "AeLBuS",
      url: "https://i.postimg.cc/13QHbN96/David-et-les-boules-Aelbus.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/c921cef4a3f3c8807c35f2fb3efeb884.png",
    },
    {
      title: "Disaster Gaston",
      info: "???",
      url: "https://i.postimg.cc/R01TMCZ8/Disaster-Gaston.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/bd297a22c87737f52e4d2f29c1f184d3.png",
    },
    {
      title: "A prendre ou a manger",
      info: "JiB",
      url: "https://i.postimg.cc/sDF1JYcY/aminematue-aprendreouamanger-JIB.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/bfefb3360b2cb0221e4b51f834f9396c.png",
    },
    {
      title: "Mysnake",
      info: "Moulamax",
      url: "https://i.postimg.cc/6qtL7ky3/affiche-mysnake-moulamax.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/dc09c0b42f9ace37b935d80e14f68405.png",
    },
    {
      title: "CRISE CORLEONE",
      info: "Raf",
      url: "https://i.goopics.net/hz9478.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/ee10c93df97608eb823290026d263783.png",
    },
    {
      title: "COACH. zone HRP ?",
      info: "AeLBuS",
      url: "https://i.goopics.net/j6n2gn.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/96421b0e3aa6acd141e077854b894f93.png",
    },
    {
      title: "The Queen Grandebite",
      info: "Varggan",
      url: "https://i.goopics.net/wied9f.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/02e8742e5fe947c56d93f80e90a18878.png",
    },
    {
      title: "The Mega Gaston 2",
      info: "shdw_18",
      url: "https://i.goopics.net/gro0xg.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/65cc49020d1cad48fe1ce3242480fa0c.png",
    },
    {
      title: "FISTE",
      info: "???",
      url: "https://i.goopics.net/ohexfw.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/7091265814c8e34b546e14c15b664dc3.png",
    },
    {
      title: "L.A.Noire",
      info: "???",
      url: "https://i.goopics.net/kdlx1m.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/41e96f06a46fe92584c532f1d30dbce2.png",
    },
    {
      title: "Alerte Kehba",
      info: "???",
      url: "https://i.goopics.net/od5x0g.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/2e063327c11cf118a3845d32c8cb123c.png",
    },
    {
      title: "Here we go again...",
      info: "AeLBuS",
      url: "https://i.goopics.net/ivv15h.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/26e993b8d3a1713654151886f14fde58.png",
    },
    {
      title: "Téléteubé",
      info: "AeLBuS",
      url: "https://i.goopics.net/dmhi4p.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/7e9e3d75a5df34244ccf4cdc4c50f20b.png",
    },
    {
      title: "Le Seigneur des Anus",
      info: "Varggan",
      url: "https://i.goopics.net/5llv85.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/10fae1ae4e9b3e0f1ec38173117afe37.png",
    },
    {
      title: "Red Dead Redumbtion",
      info: "???",
      url: "https://i.goopics.net/509okb.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/4127314de11f1afb5fc0f26182e7e561.png",
    },
    {
      title: "Red Dead Jason",
      info: "Varggan",
      url: "https://i.goopics.net/o6tkyx.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/3190234f9ba5971492af81527baf4e09.png",
    },
    {
      title: "Red Dead Nova",
      info: "Varggan",
      url: "https://i.goopics.net/g486gb.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/003a73541ac5af5d8a4584244cc87a91.png",
    },
    {
      title: "Raid dingue",
      info: "???",
      url: "https://i.goopics.net/82w7rf.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/360c2c00a83ed991711843855ca7bc8c.png",
    },
    {
      title: "Pokémon",
      info: "???",
      url: "https://i.goopics.net/p09nrv.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/459830d807f1f00e9ddd56b236b954b1.png",
    },
    {
      title: "Matrixé",
      info: "Varggan",
      url: "https://i.goopics.net/xjvtec.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/eab5c0ad142fca7093f9cbb5c51019ae.png",
    },
    {
      title: "Mariés au premier regard",
      info: "???",
      url: "https://i.goopics.net/gf3wt1.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/1a7f4972622296cdccdd8f3d014db738.png",
    },
    {
      title: "KFC Delux Edition",
      info: "???",
      url: "https://i.goopics.net/urnyvo.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/0e043362e2dd9475eb79070e243ee9d7.png",
    },
    {
      title: "Jamais peur d'Hector, GASTOUN & JASOUN",
      info: "???",
      url: "https://i.goopics.net/wn6tj6.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/8832dadf379a2d0e0db3cac12dcd1e28.png",
    },
    {
      title: "God Of Ouarzazate",
      info: "Varggan",
      url: "https://i.goopics.net/4slg76.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/e1627903a88e0f64bc90aa8ce0253804.png",
    },
    {
      title: "Les mysterieuse cites d'or",
      info: "???",
      url: "https://i.goopics.net/ykzejf.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/c7502185b991f2f3b446b368c508299c.png",
    },
    {
      title: "Bzezilla",
      info: "Varggan",
      url: "https://i.goopics.net/cm8lhz.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/23f80f0858ac8f07e395232997f07deb.png",
    },
    {
      title: "Bigman et Loup Garou",
      info: "???",
      url: "https://i.goopics.net/x4ecb1.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/f89fc239f565d97b738c5ee7685ed42d.png",
    },
  ];

  const openModal = (index) => {
    setSelectedCard(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const copyURL = () => {
    const url = projects[selectedCard].import;
    const el = document.createElement("textarea");
    el.value = url;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    alert("URL copiée dans le presse-papiers !");
  };

  useState(() => {
    setTotalPanneaux(projects.length);
  }, []);

  return (
    <main className="projects-div-panneau">
      <p className="compteur">Nombre de panneaux : {totalPanneaux}</p>

      <a
        className="tuto"
        href="https://www.youtube.com/watch?v=xFbs4_-sOig"
        target="_blank"
        rel="noreferrer"
      >
        Comment importer en jeu ?
      </a>
      <div className="card-container-panneau">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card-panneau"
            onClick={() => openModal(index)}
          >
            <figure>
              <img src={project.url} alt={project.title} />
            </figure>
          </div>
        ))}
      </div>
      {modalOpen && (
        <div className="modal">
          <div className="modal-content-panneau">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>{projects[selectedCard].title}</h2>
            <p>{projects[selectedCard].info}</p>
            <img
              src={projects[selectedCard].url}
              alt={projects[selectedCard].title}
            />
            <button onClick={copyURL}>Importer en jeu</button>{" "}
          </div>
        </div>
      )}
    </main>
  );
};

export default Panneau;
