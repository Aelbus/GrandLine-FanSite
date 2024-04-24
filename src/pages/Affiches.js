import { useState } from "react";
import "../styles/pages/Affiche.css";
import SuperBigmanBros from "../assets/images/affiche/SuperBigmanBros.png";
import puceau from "../assets/images/affiche/25ans_toujours_puceau.png";
import ahleradin from "../assets/images/affiche/Ahleradin.png";
import bachelor from "../assets/images/affiche/Bachelor.png";
import chevaux from "../assets/images/affiche/branleur_chevaux.png";
import cesar from "../assets/images/affiche/Cesar.png";
import breakingbigman from "../assets/images/affiche/BreakBigMan.png";
import deadpool from "../assets/images/affiche/deadpool.png";
import gastonbuster from "../assets/images/affiche/gastonBuster.png";
import gtforbman from "../assets/images/affiche/GTforbman.png";
import jasonwick from "../assets/images/affiche/Jason_Wick.jpg";
import keskidi from "../assets/images/affiche/Keskidi.png";
import planetesinge from "../assets/images/affiche/La_planete_des_singes.png";
import prada from "../assets/images/affiche/le_diable_habille_en_prada.png";
import mrmrsForbes from "../assets/images/affiche/mr&mrs_Forbes.png";
import novapeau from "../assets/images/affiche/Nova_dans_la_Peau.png";
import onepouce from "../assets/images/affiche/one_pouce.png";
import petercheville from "../assets/images/affiche/peterleurs_chevilles.png";
import sauvezwalid from "../assets/images/affiche/sauvez_Walid.png";
import spiderhalouf from "../assets/images/affiche/SpiderHalouf.png";
import theforbes from "../assets/images/affiche/the_forbes.png";
import thesimian from "../assets/images/affiche/The_Simian.png";
import tresorforbes from "../assets/images/affiche/trésor_forbes_dpix.png";
import vitelarsa from "../assets/images/affiche/vite_Larsa.png";
import walkingbread from "../assets/images/affiche/WalkingBread.png";
import princessenova from "../assets/images/affiche/princessenova.png";
import bienvenuforbes from "../assets/images/affiche/bienvenu_chez_les_forbes.png";
import gastonlagache from "../assets/images/affiche/Gaston_la_gache.png";
import monfrere from "../assets/images/affiche/mon_frère.png";
import wanted from "../assets/images/affiche/Wanted.png";
import leradin from "../assets/images/affiche/leradin.png";
import stanlafondue from "../assets/images/affiche/Stan_la_fondue.png";
import fatfurious from "../assets/images/affiche/2fat_2furious.png";
import nuance from "../assets/images/affiche/50_Nuances_de_mamie_Suzie.png";
import albatar from "../assets/images/affiche/Albatar.png";
import atable from "../assets/images/affiche/Atable.png";
import babybel from "../assets/images/affiche/Babybel.png";
import bigman from "../assets/images/affiche/Bgmann_hueb.png";
import bigmanatoutfaire from "../assets/images/affiche/bigman_a_tout_faire_aku.png";
import bigtanic from "../assets/images/affiche/Bigtanic.png";
import bouclette from "../assets/images/affiche/Bouclette.png";
import coa from "../assets/images/affiche/Chosen_of_Aubervilliers_Fireblaze_uskal.png";
import ellerevient from "../assets/images/affiche/Elle_reviens.png";
import fuckboy from "../assets/images/affiche/Fuck_Boy_ookamishiro.png";
import festin from "../assets/images/affiche/Festin.png";
import yamakasi from "../assets/images/affiche/generation_yamakasi_Chris_blanche.png";
import gradiator from "../assets/images/affiche/Gradiator.png";
import grosIII from "../assets/images/affiche/Gros_III.png";
import guardian from "../assets/images/affiche/Guardians_of_the_taxi.png";
import hmarisback from "../assets/images/affiche/hmar_is_back_Arab_Supreme.png";
import jasonvshector from "../assets/images/affiche/jason_vs_hector.png";
import jasonix from "../assets/images/affiche/jasonix_et_gatonix_Achrafou.png";
import bighess from "../assets/images/affiche/Jasoun_et_Gastoun_bighess.png";
import agrasman from "../assets/images/affiche/agrasman_M8_Zay.png";
import teub from "../assets/images/affiche/Je_suis_une_teub.png";
import accident from "../assets/images/affiche/accident_suzuutv.png";
import baisemoi from "../assets/images/affiche/baise_moi_si_tu_peux.png";
import gastonfisc from "../assets/images/affiche/Qui_retrouveras_Gaston_FISC.png";
import snakouS6 from "../assets/images/affiche/snakouS6.png";
import forbaise from "../assets/images/affiche/Forbaise.png";
import adieu from "../assets/images/affiche/adieu_mamie.png";
import titan from "../assets/images/affiche/attack_on_titan.png";
import family from "../assets/images/affiche/family_buisness.png";
import testament from "../assets/images/affiche/le_testament.png";
import puant from "../assets/images/affiche/le_gros_la_vieille_et_le_puant.png";
import starfoulah from "../assets/images/affiche/star_foulah_tomsy.png";
import laweewee from "../assets/images/affiche/la_weewee_tomsy.png";

const Affiches = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const projects = [
    {
      title: "La WeeWee",
      info: "By Tomsy",
      image: laweewee,
      url: "https://i.goopics.net/7jaq9q.png",
    },
    {
      title: "Star Foulah Episode 2",
      info: "By Tomsy",
      image: starfoulah,
      url: "https://i.goopics.net/yq7v9e.png",
    },
    {
      title: "Le Gros, La vieille et le Puant",
      info: "By ???",
      image: puant,
      url: "https://i.goopics.net/xpq7k3.png",
    },
    {
      title: "Le Testament",
      info: "By ???",
      image: testament,
      url: "https://i.goopics.net/5hagtj.png",
    },
    {
      title: "Family Buisness",
      info: "By ???",
      image: family,
      url: "https://i.goopics.net/wx324t.png",
    },
    {
      title: "Attack On TITAN",
      info: "By ???",
      image: titan,
      url: "https://i.goopics.net/qxjl4m.png",
    },
    {
      title: "Adieu Mamie",
      info: "By Kanosumi",
      image: adieu,
      url: "https://i.goopics.net/4i7fkd.png",
    },
    {
      title: "Forbaise",
      info: "By Gabrielh",
      image: forbaise,
      url: "https://i.goopics.net/fkvgcu.png",
    },
    {
      title: "S.N.A.K.O.U S6",
      info: "By Mohamed_genie",
      image: snakouS6,
      url: "https://i.goopics.net/92ytp1.png",
    },
    {
      title: "Qui retrouvera Gaston ?",
      info: "By Mohamed_genie",
      image: gastonfisc,
      url: "https://i.goopics.net/9y5rfd.png",
    },
    {
      title: "Baise moi si tu peux",
      info: "By Mohamed_genie",
      image: baisemoi,
      url: "https://i.goopics.net/iangsr.png",
    },
    {
      title: "Accident",
      info: "By SuzuuTV",
      image: accident,
      url: "https://i.goopics.net/rfsxr3.png",
    },
    {
      title: "Je suis une Teub",
      info: "By Akuro",
      image: teub,
      url: "https://i.goopics.net/luus3g.png",
    },
    {
      title: "AGRASMAN",
      info: "By M8 Zay",
      image: agrasman,
      url: "https://i.goopics.net/tc3r48.png",
    },
    {
      title: "Jasoun et Gastoun Bighess",
      info: "By ???",
      image: bighess,
      url: "https://i.goopics.net/43v0cy.png",
    },
    {
      title: "Jasonix & Gastonix",
      info: "By Achrafou",
      image: jasonix,
      url: "https://i.goopics.net/npvdnq.png",
    },
    {
      title: "Jason VS Hector",
      info: "By ???",
      image: jasonvshector,
      url: "https://i.goopics.net/7cnqio.png",
    },
    {
      title: "Hmar Is Back",
      info: "By Arab Supreme",
      image: hmarisback,
      url: "https://i.goopics.net/w7ohs4.png",
    },
    {
      title: "Guardian of the TAXI",
      info: "By ???",
      image: guardian,
      url: "https://i.goopics.net/54ri64.png",
    },
    {
      title: "Gros III",
      info: "By ???",
      image: grosIII,
      url: "https://i.goopics.net/r1twqq.png",
    },
    {
      title: "Gradiator",
      info: "By Beuh",
      image: gradiator,
      url: "https://i.goopics.net/v9gfzw.png",
    },
    {
      title: "Génération YAMAKASI",
      info: "By Chris Blanche",
      image: yamakasi,
      url: "https://i.goopics.net/b5ekok.png",
    },
    {
      title: "Festin",
      info: "By ???",
      image: festin,
      url: "https://i.goopics.net/xrp5m9.png",
    },
    {
      title: "FuckBoy",
      info: "By Ookamishiro",
      image: fuckboy,
      url: "https://i.goopics.net/uonper.png",
    },
    {
      title: "Elle Revient",
      info: "By ???",
      image: ellerevient,
      url: "https://i.goopics.net/oljebe.png",
    },
    {
      title: "Chosen Of Aubervilliers",
      info: "By Fireblaze - Uskal",
      image: coa,
      url: "https://i.goopics.net/e1uoig.png",
    },
    {
      title: "Bouclette",
      info: "By ???",
      image: bouclette,
      url: "https://i.goopics.net/0isvjc.png",
    },
    {
      title: "Bigtanic",
      info: "By ???",
      image: bigtanic,
      url: "https://i.goopics.net/5eydyd.png",
    },
    {
      title: "Bigman à tout faire",
      info: "By Aku",
      image: bigmanatoutfaire,
      url: "https://i.goopics.net/iklktr.png",
    },
    {
      title: "BIGMAN.",
      info: "By Beuh",
      image: bigman,
      url: "https://i.goopics.net/bv2rae.pngm",
    },
    {
      title: "Babybel",
      info: "By ???",
      image: babybel,
      url: "https://i.goopics.net/nngi09.png",
    },
    {
      title: "A Table",
      info: "By ???",
      image: atable,
      url: "https://i.goopics.net/icjwd4.png",
    },
    {
      title: "Ahlbatar",
      info: "By ???",
      image: albatar,
      url: "https://i.goopics.net/ycas1l.png",
    },
    {
      title: "50 Nuances de Mamie Suzie",
      info: "By ???",
      image: nuance,
      url: "https://i.goopics.net/foghmc.png",
    },
    {
      title: "2 Fat 2 Furious",
      info: "By ???",
      image: fatfurious,
      url: "https://i.goopics.net/pi0mx4.png",
    },
    {
      title: "Stan La fondue",
      info: "By Fireblaze",
      image: stanlafondue,
      url: "https://i.goopics.net/a46d1t.png",
    },
    {
      title: "Le Radin",
      info: "By Eskobar",
      image: leradin,
      url: "https://i.goopics.net/d8xznt.png",
    },
    {
      title: "Wanted, dead or alive",
      info: "By Maxime Rg",
      image: wanted,
      url: "https://i.goopics.net/xpxxft.png",
    },
    {
      title: "Mon Frère",
      info: "By Maxime Rg",
      image: monfrere,
      url: "https://i.goopics.net/3iqetw.png",
    },
    {
      title: "Gaston la gâche",
      info: "By Gabin.nsrtxd",
      image: gastonlagache,
      url: "https://i.goopics.net/rg6qos.png",
    },
    {
      title: "Bienvenue chez les Forbes",
      info: "By Eskobar",
      image: bienvenuforbes,
      url: "https://i.goopics.net/niz0jl.png",
    },
    {
      title: "Princesse Nova Oragana",
      info: "By Fireblaze",
      image: princessenova,
      url: "https://i.goopics.net/dkk7rp.png",
    },
    {
      title: "The Walking Bread",
      info: "By Unknown",
      image: walkingbread,
      url: "https://i.goopics.net/mectd6.png",
    },
    {
      title: "Vite Larsa",
      info: "By Unknown",
      image: vitelarsa,
      url: "https://i.goopics.net/9rrsxj.png",
    },
    {
      title: "Trésor Forbes",
      info: "By Dpix",
      image: tresorforbes,
      url: "https://i.goopics.net/qam844.png",
    },
    {
      title: "The Simian",
      info: "By Varggan",
      image: thesimian,
      url: "https://i.goopics.net/k8a47h.png",
    },
    {
      title: "The Forbes",
      info: "By Fireblaze - Uskal",
      image: theforbes,
      url: "https://i.goopics.net/t6fkpv.png",
    },
    {
      title: "SpiderHalouf",
      info: "By Fireblaze - Uskal - Akuro",
      image: spiderhalouf,
      url: "https://i.goopics.net/istsvz.png",
    },
    {
      title: "Sauvez Walid",
      info: "By Unknown",
      image: sauvezwalid,
      url: "https://i.goopics.net/r3oq9j.png",
    },
    {
      title: "Peter leurs chevilles",
      info: "By Unknown",
      image: petercheville,
      url: "https://i.goopics.net/v9vyx7.png",
    },
    {
      title: "One Pouce",
      info: "By Fireblaze - Uskal",
      image: onepouce,
      url: "https://i.goopics.net/wy3n8p.png",
    },
    {
      title: "Nova dans la peau",
      info: "By Fireblaze - Uskal",
      image: novapeau,
      url: "https://i.goopics.net/viffia.png",
    },
    {
      title: "Mr. & Mrs. Forbes",
      info: "By Unknown",
      image: mrmrsForbes,
      url: "https://i.goopics.net/ohw975.png",
    },
    {
      title: "Le diable en Prada",
      info: "By Fireblaze",
      image: prada,
      url: "https://i.goopics.net/9yi520.png",
    },
    {
      title: "la Planete des singes",
      info: "By Fireblaze",
      image: planetesinge,
      url: "https://i.goopics.net/3qzhq3.png",
    },
    {
      title: "Keskidi",
      info: "By Akuro",
      image: keskidi,
      url: "https://i.goopics.net/fd0se4.png",
    },
    {
      title: "Jason Wick",
      info: "By Fireblaze - Akuro",
      image: jasonwick,
      url: "https://i.goopics.net/8i9hdj.jpg",
    },
    {
      title: "Super Bigman Bros",
      info: "By AeLBuS",
      image: SuperBigmanBros,
      url: "https://i.goopics.net/tsx6uo.png",
    },
    {
      title: "25 Ans, toujours puceau",
      info: "By Fireblaze",
      image: puceau,
      url: "https://i.goopics.net/nu8idb.png",
    },
    {
      title: "Ah le Radin",
      info: "By unknowm",
      image: ahleradin,
      url: "https://i.goopics.net/lft5dr.png",
    },
    {
      title: "The Bachelor",
      info: "By Fireblaze",
      image: bachelor,
      url: "https://i.goopics.net/s12jf8.png",
    },
    {
      title: "Le Branleurs de Chevaux",
      info: "By Fireblaze - Uskal",
      image: chevaux,
      url: "https://i.goopics.net/z1s4cb.png",
    },
    {
      title: "César",
      info: "By Fireblaze",
      image: cesar,
      url: "https://i.goopics.net/xb56iv.png",
    },
    {
      title: "Breaking BigMan",
      info: "By Unknown",
      image: breakingbigman,
      url: "https://i.goopics.net/9coql7.png",
    },
    {
      title: "Deapool Wolverine",
      info: "By Fireblaze",
      image: deadpool,
      url: "https://i.goopics.net/aote2b.png",
    },
    {
      title: "GastonBuster",
      info: "By Sxcret.eth",
      image: gastonbuster,
      url: "https://i.goopics.net/fgtku9.png",
    },
    {
      title: "Grand Theft Fobman",
      info: "By AeLBuS",
      image: gtforbman,
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

  return (
    <main className="projects-div">
      <div className="card-container-affiche">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card-affiche"
            onClick={() => openModal(index)}
          >
            <figure>
              <img src={project.image} alt={project.title} />
            </figure>
          </div>
        ))}
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
              src={projects[selectedCard].image}
              alt={projects[selectedCard].title}
            />
            <button onClick={copyURL}>Importer en jeu</button>{" "}
            {/* Bouton pour copier l'URL */}
          </div>
        </div>
      )}
    </main>
  );
};

export default Affiches;
