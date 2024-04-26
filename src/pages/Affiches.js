import { useState } from "react";
import "../styles/pages/Affiche.css";

const Affiches = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredIndices, setFilteredIndices] = useState([]);

  const projects = [
    {
      title: "Rick Ross",
      info: "Raf",
      url: "https://i.goopics.net/g53a8c.png",
    },
    {
      title: "Blede 2",
      info: "Gab",
      url: "https://i.goopics.net/isoil9.png",
    },
    {
      title: "Prison Bebek",
      info: "Gab",
      url: "https://i.goopics.net/415qug.png",
    },
    {
      title: "On va rater l'avion pour la Turquie",
      info: "Zerek-01",
      url: "https://i.goopics.net/vxi410.png",
    },
    {
      title: "moins 8 Miles Dollaars",
      info: "Gab",
      url: "https://i.goopics.net/kg25wr.png",
    },
    {
      title: "Bled Boys 2 v2",
      info: "Gab",
      url: "https://i.goopics.net/duf3rl.png",
    },
    {
      title: "Bled Boys 2",
      info: "Gab",
      url: "https://i.goopics.net/hecuj7.png",
    },
    {
      title: "Breaking Bled",
      info: "Tomsy",
      url: "https://i.goopics.net/bdjn48.png",
    },
    {
      title: "Menteur",
      info: "r21316",
      url: "https://i.goopics.net/383hyi.png",
    },
    {
      title: "S.D.F.",
      info: "Anos Voldigoad",
      url: "https://i.goopics.net/jgh1cv.png",
    },
    {
      title: "Pain & Gain",
      info: "???",
      url: "https://i.goopics.net/nmuwni.png",
    },
    {
      title: "OR POIRE",
      info: "???",
      url: "https://i.goopics.net/44bcgn.png",
    },
    {
      title: "Nova Ball",
      info: "Eneko",
      url: "https://i.goopics.net/wk81w7.png",
    },
    {
      title: "DAVID",
      info: "Eneko",
      url: "https://i.goopics.net/2tkv1j.png",
    },
    {
      title: "Allez ça part ! Constat ! BIGMAN",
      info: "Gab",
      url: "https://i.goopics.net/toie0l.png",
    },
    {
      title: "A Jamais gros",
      info: "Eneko",
      url: "https://i.goopics.net/3jy6y4.png",
    },
    {
      title: "LAISTER",
      info: "Tomsy",
      url: "https://i.goopics.net/9n3s7h.png",
    },
    {
      title: "La vie de ma mamie",
      info: "Beuh",
      url: "https://i.goopics.net/q1ybi9.png",
    },
    {
      title: "PiB International",
      info: "???",
      url: "https://i.goopics.net/ewmgli.png",
    },
    {
      title: "CoD BIG WAR",
      info: "???",
      url: "https://i.goopics.net/6xvehw.png",
    },
    {
      title: "Mok2",
      info: "???",
      url: "https://i.goopics.net/nrlo85.png",
    },
    {
      title: "Zoé Baker",
      info: "Alf96",
      url: "https://i.goopics.net/m9bgtg.png",
    },
    {
      title: "The Bloodline",
      info: "Tomsy",
      url: "https://i.goopics.net/v6e5kh.png",
    },
    {
      title: "TopGun Maverick",
      info: "KabylDeter",
      url: "https://i.goopics.net/asne1m.png",
    },
    {
      title: "Intouchables",
      info: "KabylDeter",
      url: "https://i.goopics.net/o0wkia.png",
    },
    {
      title: "Mamie on a raté Gwendo",
      info: "Eneko",
      url: "https://i.goopics.net/9qcsrz.png",
    },
    {
      title: "Bois ma pisse",
      info: "Jun",
      url: "https://i.goopics.net/ym4myz.png",
    },
    {
      title: "ça",
      info: "KabylDeter",
      url: "https://i.goopics.net/b45cqo.png",
    },
    {
      title: "Nova Forbes",
      info: "Eneko",
      url: "https://i.goopics.net/bs24dk.png",
    },
    {
      title: "Tamereleporc",
      info: "???",
      url: "https://i.goopics.net/bxt9d3.png",
    },
    {
      title: "Voyage au centre de nova 2",
      info: "Tom38",
      url: "https://i.goopics.net/dpqjen.png",
    },
    {
      title: "Pulp Forbes",
      info: "Eneko",
      url: "https://i.goopics.net/a386an.png",
    },
    {
      title: "NoRage",
      info: "Beuh",
      url: "https://i.goopics.net/pv7m3s.png",
    },
    {
      title: "Le Concess du la Peur ",
      info: "TheoHD",
      url: "https://i.goopics.net/7zzb4x.png",
    },
    {
      title: "Ibn el Kalb",
      info: "Gab",
      url: "https://i.goopics.net/epxvrn.jpg",
    },
    {
      title: "Summer Slam",
      info: "HeyLek216",
      url: "https://i.goopics.net/l0lqaj.png",
    },
    {
      title: "Golf CLub",
      info: "Eneko",
      url: "https://i.goopics.net/tfb36n.png",
    },
    {
      title: "Gaston",
      info: "GioGio",
      url: "https://i.goopics.net/mkhrlc.png",
    },
    {
      title: "Bring him food the Bigman",
      info: "Akhoriz",
      url: "https://i.goopics.net/emtu4g.png",
    },
    {
      title: "Bigman",
      info: "Xili0ne",
      url: "https://i.goopics.net/gln1ws.png",
    },
    {
      title: "Bigman Bad",
      info: "Eneko",
      url: "https://i.goopics.net/kx9w74.png",
    },
    {
      title: "Virus219",
      info: "Uskal",
      url: "https://i.goopics.net/f02j7k.png",
    },
    {
      title: "XXL",
      info: "Tepdo",
      url: "https://i.goopics.net/503v28.png",
    },
    {
      title: "Le Grand Remplacement ",
      info: "Gab",
      url: "https://i.goopics.net/4xrbz5.jpg",
    },
    {
      title: "The Gelatine",
      info: "???",
      url: "https://i.goopics.net/zdz3s3.png",
    },
    {
      title: "Gastonx",
      info: "Eneko",
      url: "https://i.goopics.net/ungf62.png",
    },
    {
      title: "Papoutai",
      info: "Tomsy",
      url: "https://i.goopics.net/c2vqy7.png",
    },
    {
      title: "Big Gaston",
      info: "Laurentoutang",
      url: "https://i.goopics.net/q3ltb7.jpg",
    },
    {
      title: "Zboub III",
      info: "???",
      url: "https://i.goopics.net/5ai7mb.png",
    },
    {
      title: "Very Bad Hlib",
      info: "Sxcret",
      url: "https://i.goopics.net/qkkhyv.png",
    },
    {
      title: "The Grand Line",
      info: "???",
      url: "https://i.goopics.net/dl4cen.png",
    },
    {
      title: "The FISK",
      info: "Drazer_",
      url: "https://i.goopics.net/0lzvuy.png",
    },
    {
      title: "The Bigman Show",
      info: "LeMoussaillon",
      url: "https://i.goopics.net/l2om8f.png",
    },
    {
      title: "The Bigman",
      info: "r21316",
      url: "https://i.goopics.net/3jdhfl.png",
    },
    {
      title: "Shnek",
      info: "???",
      url: "https://i.goopics.net/ur3aif.png",
    },
    {
      title: "Retour vers la femme mure",
      info: "Raf",
      url: "https://i.goopics.net/bgtwmt.png",
    },
    {
      title: "AL Jasino Scarfesse",
      info: "Raf",
      url: "https://i.goopics.net/smdtb9.png",
    },
    {
      title: "Rebondissant",
      info: "Tempdo",
      url: "https://i.goopics.net/g408ls.jpg",
    },
    {
      title: "Qu'est ce qu'on a fait aux Forbes",
      info: "Jumpyman_",
      url: "https://i.goopics.net/zijuvf.png",
    },
    {
      title: "Oputainsamere",
      info: "???",
      url: "https://i.goopics.net/93d1fv.png",
    },
    {
      title: "Les derniers Bigman",
      info: "Eneko",
      url: "https://i.goopics.net/1i48cj.png",
    },
    {
      title: "Le Pari",
      info: "Liv",
      url: "https://i.goopics.net/augmvd.png",
    },
    {
      title: "La Plante",
      info: "Beuh",
      url: "https://i.goopics.net/hnqlbl.png",
    },
    {
      title: "Kill Jason",
      info: "Azarog_",
      url: "https://i.goopics.net/x3h7bt.png",
    },
    {
      title: "Je suis un voleur",
      info: "Gab",
      url: "https://i.goopics.net/lh2r56.jpg",
    },
    {
      title: "Jastoune E-sport",
      info: "ComKris",
      url: "https://i.goopics.net/e36kdn.png",
    },
    {
      title: "Jason Burne",
      info: "Raf",
      url: "https://i.goopics.net/ix62jx.png",
    },
    {
      title: "Insecte Forbes",
      info: "???",
      url: "https://i.goopics.net/zgmm0a.png",
    },
    {
      title: "GreK",
      info: "Benta",
      url: "https://i.goopics.net/ymd7tf.png",
    },
    {
      title: "Fils de Pute",
      info: "???",
      url: "https://i.goopics.net/1odufd.png",
    },
    {
      title: "DeadPool X Wolverine V2",
      info: "ComKris",
      url: "https://i.goopics.net/9tnky6.png",
    },
    {
      title: "BIG MAN",
      info: "???",
      url: "https://i.goopics.net/mz8bya.png",
    },
    {
      title: "Burne",
      info: "Eneko",
      url: "https://i.goopics.net/84qp1c.png",
    },
    {
      title: "Bigman",
      info: "DavidTaroz",
      url: "https://i.goopics.net/a3ks4j.png",
    },
    {
      title: "BigMan Tueurs 2024",
      info: "Eneko",
      url: "https://i.goopics.net/hcooxe.png",
    },
    {
      title: "Amine Zeubio",
      info: "Gab",
      url: "https://i.goopics.net/c9194d.jpg",
    },
    {
      title: "Le Hmar de la Street",
      info: "Shynrow",
      url: "https://i.goopics.net/lm3pw8.png",
    },
    {
      title: "Grand Line RP",
      info: "Uskal",
      url: "https://i.goopics.net/nymsvq.png",
    },
    {
      title: "La WeeWee",
      info: "Tomsy",
      url: "https://i.goopics.net/7jaq9q.png",
    },
    {
      title: "Star Foulah Episode 2",
      info: "Tomsy",
      url: "https://i.goopics.net/yq7v9e.png",
    },
    {
      title: "Le Gros, La vieille et le Puant",
      info: "???",
      url: "https://i.goopics.net/xpq7k3.png",
    },
    {
      title: "Le Testament",
      info: "???",
      url: "https://i.goopics.net/5hagtj.png",
    },
    {
      title: "Family Buisness",
      info: "???",
      url: "https://i.goopics.net/wx324t.png",
    },
    {
      title: "Attack On TITAN",
      info: "???",
      url: "https://i.goopics.net/qxjl4m.png",
    },
    {
      title: "Adieu Mamie",
      info: "DraZer_",
      url: "https://i.goopics.net/4i7fkd.png",
    },
    {
      title: "Forbaise",
      info: "Gabrielh",
      url: "https://i.goopics.net/fkvgcu.png",
    },
    {
      title: "S.N.A.K.O.U S6",
      info: "Mohamed_genie",
      url: "https://i.goopics.net/92ytp1.png",
    },
    {
      title: "Qui retrouvera Gaston ?",
      info: "Mohamed_genie",
      url: "https://i.goopics.net/9y5rfd.png",
    },
    {
      title: "Baise moi si tu peux",
      info: "Mohamed_genie",
      url: "https://i.goopics.net/iangsr.png",
    },
    {
      title: "Accident",
      info: "SuzuuTV",
      url: "https://i.goopics.net/rfsxr3.png",
    },
    {
      title: "Je suis une Teub",
      info: "Akuro",
      url: "https://i.goopics.net/luus3g.png",
    },
    {
      title: "AGRASMAN",
      info: "ComKris",
      url: "https://i.goopics.net/tc3r48.png",
    },
    {
      title: "Jasoun et Gastoun Bighess",
      info: "???",
      url: "https://i.goopics.net/43v0cy.png",
    },
    {
      title: "Jasonix & Gastonix",
      info: "Achrafou",
      url: "https://i.goopics.net/npvdnq.png",
    },
    {
      title: "Jason VS Hector",
      info: "???",
      url: "https://i.goopics.net/7cnqio.png",
    },
    {
      title: "Hmar Is Back",
      info: "Arab Supreme",
      url: "https://i.goopics.net/w7ohs4.png",
    },
    {
      title: "Guardian of the TAXI",
      info: "???",
      url: "https://i.goopics.net/54ri64.png",
    },
    {
      title: "Gros III",
      info: "???",
      url: "https://i.goopics.net/r1twqq.png",
    },
    {
      title: "Gradiator",
      info: "Beuh",
      url: "https://i.goopics.net/v9gfzw.png",
    },
    {
      title: "Génération YAMAKASI",
      info: "Chris Blanche",
      url: "https://i.goopics.net/b5ekok.png",
    },
    {
      title: "Festin",
      info: "???",
      url: "https://i.goopics.net/xrp5m9.png",
    },
    {
      title: "FuckBoy",
      info: "Ookamishiro",
      url: "https://i.goopics.net/uonper.png",
    },
    {
      title: "Elle Revient",
      info: "???",
      url: "https://i.goopics.net/oljebe.png",
    },
    {
      title: "Chosen Of Aubervilliers",
      info: "Fireblaze - Uskal",
      url: "https://i.goopics.net/e1uoig.png",
    },
    {
      title: "Bouclette",
      info: "???",
      url: "https://i.goopics.net/0isvjc.png",
    },
    {
      title: "Bigtanic",
      info: "???",
      url: "https://i.goopics.net/5eydyd.png",
    },
    {
      title: "Bigman à tout faire",
      info: "Aku",
      url: "https://i.goopics.net/iklktr.png",
    },
    {
      title: "BIGMAN.",
      info: "Beuh",
      url: "https://i.goopics.net/bv2rae.png",
    },
    {
      title: "Babybel",
      info: "???",
      url: "https://i.goopics.net/nngi09.png",
    },
    {
      title: "A Table",
      info: "???",
      url: "https://i.goopics.net/icjwd4.png",
    },
    {
      title: "Ahlbatar",
      info: "???",
      url: "https://i.goopics.net/ycas1l.png",
    },
    {
      title: "50 Nuances de Mamie Suzie",
      info: "???",
      url: "https://i.goopics.net/foghmc.png",
    },
    {
      title: "2 Fat 2 Furious",
      info: "???",
      url: "https://i.goopics.net/pi0mx4.png",
    },
    {
      title: "Stan La fondue",
      info: "Fireblaze",
      url: "https://i.goopics.net/a46d1t.png",
    },
    {
      title: "Le Radin",
      info: "Eskobar",
      url: "https://i.goopics.net/d8xznt.png",
    },
    {
      title: "Wanted, dead or alive",
      info: "Maxime Rg",
      url: "https://i.goopics.net/xpxxft.png",
    },
    {
      title: "Mon Frère",
      info: "Maxime Rg",
      url: "https://i.goopics.net/3iqetw.png",
    },
    {
      title: "Gaston la gâche",
      info: "Gabin.nsrtxd",
      url: "https://i.goopics.net/rg6qos.png",
    },
    {
      title: "Bienvenue chez les Forbes",
      info: "Eskobar",
      url: "https://i.goopics.net/niz0jl.png",
    },
    {
      title: "Princesse Nova Oragana",
      info: "Fireblaze",
      url: "https://i.goopics.net/dkk7rp.png",
    },
    {
      title: "The Walking Bread",
      info: "???",
      url: "https://i.goopics.net/mectd6.png",
    },
    {
      title: "Vite Larsa",
      info: "???",
      url: "https://i.goopics.net/9rrsxj.png",
    },
    {
      title: "Trésor Forbes",
      info: "Dpix",
      url: "https://i.goopics.net/qam844.png",
    },
    {
      title: "The Simian",
      info: "Varggan",
      url: "https://i.goopics.net/k8a47h.png",
    },
    {
      title: "The Forbes",
      info: "Fireblaze - Uskal",
      url: "https://i.goopics.net/t6fkpv.png",
    },
    {
      title: "SpiderHalouf",
      info: "Fireblaze - Uskal - Akuro",
      url: "https://i.goopics.net/istsvz.png",
    },
    {
      title: "Sauvez Walid",
      info: "???",
      url: "https://i.goopics.net/r3oq9j.png",
    },
    {
      title: "Peter leurs chevilles",
      info: "???",
      url: "https://i.goopics.net/v9vyx7.png",
    },
    {
      title: "One Pouce",
      info: "Fireblaze - Uskal",
      url: "https://i.goopics.net/wy3n8p.png",
    },
    {
      title: "Nova dans la peau",
      info: "Fireblaze - Uskal",
      url: "https://i.goopics.net/viffia.png",
    },
    {
      title: "Mr. & Mrs. Forbes",
      info: "???",
      url: "https://i.goopics.net/ohw975.png",
    },
    {
      title: "Le diable en Prada",
      info: "Fireblaze",
      url: "https://i.goopics.net/9yi520.png",
    },
    {
      title: "la Planete des singes",
      info: "Fireblaze",
      url: "https://i.goopics.net/3qzhq3.png",
    },
    {
      title: "Keskidi",
      info: "Akuro",
      url: "https://i.goopics.net/fd0se4.png",
    },
    {
      title: "Jason Wick",
      info: "Fireblaze - Akuro",
      url: "https://i.goopics.net/8i9hdj.jpg",
    },
    {
      title: "Super Bigman Bros",
      info: "AeLBuS",
      url: "https://i.goopics.net/tsx6uo.png",
    },
    {
      title: "25 Ans, toujours puceau",
      info: "Fireblaze",
      url: "https://i.goopics.net/nu8idb.png",
    },
    {
      title: "Ah le Radin",
      info: "unknowm",
      url: "https://i.goopics.net/lft5dr.png",
    },
    {
      title: "The Bachelor",
      info: "Fireblaze",
      url: "https://i.goopics.net/s12jf8.png",
    },
    {
      title: "Le Branleurs de Chevaux",
      info: "Fireblaze - Uskal",
      url: "https://i.goopics.net/z1s4cb.png",
    },
    {
      title: "César",
      info: "Fireblaze",
      url: "https://i.goopics.net/xb56iv.png",
    },
    {
      title: "Breaking BigMan",
      info: "???",
      url: "https://i.goopics.net/9coql7.png",
    },
    {
      title: "Deapool Wolverine",
      info: "Fireblaze",
      url: "https://i.goopics.net/aote2b.png",
    },
    {
      title: "GastonBuster",
      info: "Sxcret.eth",
      url: "https://i.goopics.net/fgtku9.png",
    },
    {
      title: "Grand Theft Forbman",
      info: "AeLBuS",
      url: "https://i.goopics.net/jgqbwv.png",
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
    const url = projects[selectedCard].url;
    const el = document.createElement("textarea");
    el.value = url;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    alert("URL copiée dans le presse-papiers !");
  };

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.trim() === "") {
      setFilteredIndices([]);
    } else {
      const filteredIndices = projects
        .map((project, index) => ({ project, index }))
        .filter(({ project }) =>
          project.title.toLowerCase().includes(term.toLowerCase())
        )
        .map(({ index }) => index)
        .filter((index) => index >= 0 && index < projects.length);

      setFilteredIndices(filteredIndices);
    }
  };

  return (
    <main className="projects-div-affiche">
      <input
        className="search-bar"
        type="text"
        placeholder="Rechercher une affiche par titre..."
        value={searchTerm}
        onChange={handleSearch}
      />

      <div className="card-container-affiche">
        {(searchTerm.trim() === ""
          ? projects.map((_, index) => index)
          : filteredIndices
        ).map((index) => {
          if (index >= 0 && index < projects.length) {
            return (
              <div
                key={index}
                className="card-affiche"
                onClick={() => openModal(index)}
              >
                <figure>
                  <img src={projects[index].url} alt={projects[index].title} />
                </figure>
              </div>
            );
          } else {
            console.error("Invalid index:", index);
            return null;
          }
        })}
      </div>
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>{projects[selectedCard].title}</h2>
            <p>{projects[selectedCard].info}</p>
            <img
              src={projects[selectedCard].url}
              alt={projects[selectedCard].title}
            />
            <button className="import" onClick={copyURL}>
              Importer en jeu
            </button>{" "}
          </div>
        </div>
      )}
    </main>
  );
};

export default Affiches;
