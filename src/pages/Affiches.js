import { useState } from "react";
import "../styles/pages/Affiche.css";

const Affiches = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredIndices, setFilteredIndices] = useState([]);

  const projects = [
    {
      title: "Oui Mile",
      info: "Uskal Fireblaze",
      url: "https://i.goopics.net/j5bsnl.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/19f2fcc13f8f4e842c53ce5cc2c5bd3d.png",
    },
    {
      title: "The Whale",
      info: "Matt_Cllt",
      url: "https://i.goopics.net/kdll3g.jpg",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/6707621ece8cfdf70658d254be4e5420.png",
    },
    {
      title: "La Khnouna",
      info: "COMKRIS",
      url: "https://i.goopics.net/ppvbv7.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/15487d02aa0d1af213987ce47bd7e642.png",
    },
    {
      title: "HUNGER FORBES",
      info: "Eneko",
      url: "https://i.goopics.net/u07qyb.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/40f463706ddeaf74e2e7ba16592114b7.png",
    },
    {
      title: "Qui a fourré Mamie ?",
      info: "Drazer_",
      url: "https://i.goopics.net/4ke1yl.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/37d081bb7074d65e8146e79a60739dbb.png",
    },
    {
      title: "Epouse moi",
      info: "Laurentoutang",
      url: "https://i.goopics.net/o9em8g.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/0a93fc8a528b7dbb24f87d74bb0242f6.png",
    },
    {
      title: "Les Fouines VS Bellamy",
      info: "Hajar DZPS",
      url: "https://i.goopics.net/dmgpgy.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/81705e475bd16f45295ce63400f9a656.png",
    },
    {
      title: "MAMINATOR",
      info: "Wärp",
      url: "https://i.goopics.net/1f64ng.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/6ef6028780e69337cd7d48421239e178.png",
    },
    {
      title: "Les Endettés",
      info: "Hakke95",
      url: "https://i.goopics.net/7vnpbp.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/a0187ac05e87a9b2811e77ce188e2391.png",
    },
    {
      title: "La Frappe de Zongo",
      info: "???",
      url: "https://i.goopics.net/dhg9a6.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/21d78de490ca122b99421d9b66c533db.png",
    },
    {
      title: "Jack Spardough",
      info: "Uskal Fireblaze",
      url: "https://i.goopics.net/rvhcs8.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/91d0d4f1f758d554a52729b62b71334f.png",
    },
    {
      title: "J'ai eteint Nova",
      info: "???",
      url: "https://i.goopics.net/ta46c3.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/9b67c32678d203ed569fa0e70b474daf.png",
    },
    {
      title: "Fiché HESS",
      info: "Drazer_",
      url: "https://i.goopics.net/mvltvv.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/bae4ddc2f7be72ae0a3d2c95f24a46e7.png",
    },
    {
      title: "Frère Soeur Forbes",
      info: "Eneko",
      url: "https://i.goopics.net/2ysj72.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/ca156109ba7e4eee3d6f89db9d7896ff.png",
    },
    {
      title: "Cohabiter",
      info: "Matt_cllt",
      url: "https://i.goopics.net/s6dvk2.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/3ad4500a558f427963b7e1172d651ced.png",
    },
    {
      title: "SAH",
      info: "COMKRIS",
      url: "https://i.goopics.net/togg72.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/ca3f90b7cc54a327b384967b4e5675a7.png",
    },
    {
      title: "La Rupture",
      info: "AeLBuS",
      url: "https://i.goopics.net/i7p7ws.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/b5428cdc4b2745fc35ccc937a567d3b1.png",
    },
    {
      title: "Case Prison",
      info: "Mat_cllt",
      url: "https://i.goopics.net/ajn7i6.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/fe41ffccbc41e11adde8fc1aff7590a3.png",
    },
    {
      title: "LOLY VS matriX-MEN",
      info: "Fireblaze & Akuro & Uskal",
      url: "https://i.goopics.net/ecg98e.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/bc5da72e2b26c26333e1996e1d5711e9.png",
    },
    {
      title: "Vrai Mensonge",
      info: "Varggan",
      url: "https://i.goopics.net/7jtpo5.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/bb484025b9e5a9101ff9be742beb5068.png",
    },
    {
      title: "Rick Ross",
      info: "Raf",
      url: "https://i.goopics.net/g53a8c.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/572e326162b38425cbfe1dd3066dbed8.png",
    },
    {
      title: "Blede 2",
      info: "Gab",
      url: "https://i.goopics.net/isoil9.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/1a55eca2f3a9872ff5508a4c4eb8aea6.png",
    },
    {
      title: "Prison Bebek",
      info: "Gab",
      url: "https://i.goopics.net/415qug.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/29febe87eed495ba702c95bec08e1890.png",
    },
    {
      title: "On va rater l'avion pour la Turquie",
      info: "Zerek-01",
      url: "https://i.goopics.net/vxi410.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/96764e436e41de623757ca950f475793.png",
    },
    {
      title: "moins 8 Miles Dollars",
      info: "Gab",
      url: "https://i.goopics.net/kg25wr.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/690d81d53915f24c3a7b940f0dcb93db.png",
    },
    {
      title: "Bled Boys 2 v2",
      info: "Gab",
      url: "https://i.goopics.net/duf3rl.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/bb5b0db69e881c35a48cc9e003916e1e.png",
    },
    {
      title: "Bled Boys 2",
      info: "Gab",
      url: "https://i.goopics.net/hecuj7.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/7cabe1bb8b0db0a16bc3c92e747eba43.png",
    },
    {
      title: "Breaking Bled",
      info: "Tomsy",
      url: "https://i.goopics.net/bdjn48.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/6bc28ebc9fb84eeb034e92ee6a1cba14.png",
    },
    {
      title: "Menteur",
      info: "r21316",
      url: "https://i.goopics.net/383hyi.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/ab2e4362c9b48f4c593cac494769ee15.png",
    },
    {
      title: "S.D.F.",
      info: "Anos Voldigoad",
      url: "https://i.goopics.net/jgh1cv.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/196423c48e383d7f75ed4838ddaf4376.png",
    },
    {
      title: "Pain & Gain",
      info: "???",
      url: "https://i.goopics.net/nmuwni.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/10dbd5f6a1972bd8f636028390c874fd.png",
    },
    {
      title: "OR POIRE",
      info: "???",
      url: "https://i.goopics.net/44bcgn.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/3bfacb8c1500901c0144957370933d53.png",
    },
    {
      title: "Nova Ball",
      info: "Eneko",
      url: "https://i.goopics.net/wk81w7.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/48a56965f281e86db16f407397ebde49.png",
    },
    {
      title: "DAVID",
      info: "Eneko",
      url: "https://i.goopics.net/2tkv1j.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/1400cafe453f9dafafc63e5dad4fe25b.png",
    },
    {
      title: "Allez ça part ! Constat ! BIGMAN",
      info: "Gab",
      url: "https://i.goopics.net/toie0l.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/a0699c163ec0ef88e9cb9e5525f34cba.png",
    },
    {
      title: "A Jamais gros",
      info: "Eneko",
      url: "https://i.goopics.net/3jy6y4.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/bf945847276c86c55e5bbeac3eed56f4.png",
    },
    {
      title: "LAISTER",
      info: "Tomsy",
      url: "https://i.goopics.net/9n3s7h.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/a55009ff1fbbbfa3bcc0717173a4a638.png",
    },
    {
      title: "La vie de ma mamie",
      info: "Beuh",
      url: "https://i.goopics.net/q1ybi9.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/c67ea1383f787f95588b4f50a2f96edd.png",
    },
    {
      title: "PiB International",
      info: "???",
      url: "https://i.goopics.net/ewmgli.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/0f8f076a40147f3fc4892b3c8f6ec7f5.png",
    },
    {
      title: "CoD BIG WAR",
      info: "???",
      url: "https://i.goopics.net/6xvehw.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/d09a40516c18e15782c8d8ea453d3b95.png",
    },
    {
      title: "Mok2",
      info: "???",
      url: "https://i.goopics.net/nrlo85.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/3398ff1301e2231aa0fc22a0839c287f.png",
    },
    {
      title: "Zoe Baker",
      info: "Alf96",
      url: "https://i.goopics.net/m9bgtg.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/974b3cd28c16cbabbca35a9d086b4ba7.png",
    },
    {
      title: "The Bloodline",
      info: "Tomsy",
      url: "https://i.goopics.net/v6e5kh.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/2800d82d699f3cbf31f6b27a54b8969b.png",
    },
    {
      title: "TopGun Maverick",
      info: "KabylDeter",
      url: "https://i.goopics.net/asne1m.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/00150b8ac905b80df7b18d60d796d2d9.png",
    },
    {
      title: "Intouchables",
      info: "KabylDeter",
      url: "https://i.goopics.net/o0wkia.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/ce6357b460a8d7336998f0c79da73965.png",
    },
    {
      title: "Mamie on a raté Gwendo",
      info: "Eneko",
      url: "https://i.goopics.net/9qcsrz.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/5836194361ef0e48492fd3d51496ddbd.png",
    },
    {
      title: "Bois ma pisse",
      info: "Jun",
      url: "https://i.goopics.net/ym4myz.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/8e9f620f5004cbf6edc161303d2f7b70.png",
    },
    {
      title: "ça",
      info: "KabylDeter",
      url: "https://i.goopics.net/b45cqo.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/1b0706cb8d0345efc58f714d3da3f552.png",
    },
    {
      title: "Nova Forbes",
      info: "Eneko",
      url: "https://i.goopics.net/bs24dk.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/8722d29b29c1618a0b9063565fe0ff05.png",
    },
    {
      title: "Tamereleporc",
      info: "???",
      url: "https://i.goopics.net/bxt9d3.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/11705e0db3b1af8b5a31745ce2a763e2.png",
    },
    {
      title: "Voyage au centre de nova 2",
      info: "Tom38",
      url: "https://i.goopics.net/dpqjen.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/89dcf2580b53ad5a67b8dae7e4484a5f.png",
    },
    {
      title: "Pulp Forbes",
      info: "Eneko",
      url: "https://i.goopics.net/a386an.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/52d066c5c972bec2520c7726a4097146.png",
    },
    {
      title: "Le Concess du la Peur ",
      info: "TheoHD",
      url: "https://i.goopics.net/7zzb4x.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/6c8dac5451aede7f20c84cc0e18b0382.png",
    },
    {
      title: "Ibn el Kalb",
      info: "Gab",
      url: "https://i.goopics.net/epxvrn.jpg",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/59a15b27b6e812997a8e67d82939f34f.png",
    },
    {
      title: "Summer Slam",
      info: "HeyLek216",
      url: "https://i.goopics.net/l0lqaj.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/dbccae51aadc6c555b648088c4604923.png",
    },
    {
      title: "Golf CLub",
      info: "Eneko",
      url: "https://i.goopics.net/tfb36n.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/bd9cc95806f1889722c26603efb07e2c.png",
    },
    {
      title: "Gaston",
      info: "GioGio",
      url: "https://i.goopics.net/mkhrlc.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/b233dd6e4103e8589211461887827e3c.png",
    },
    {
      title: "Bring him food the Bigman",
      info: "Akhoriz",
      url: "https://i.goopics.net/emtu4g.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/4bdd0a4cc15016c6b1f1db36e1f710ce.png",
    },
    {
      title: "Bigman",
      info: "Xili0ne",
      url: "https://i.goopics.net/gln1ws.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/16f983992e5bf804957f3dc16849340c.png",
    },
    {
      title: "Bigman Bad",
      info: "Eneko",
      url: "https://i.goopics.net/kx9w74.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/dec2c197d9721c80ec26e5a2cab63ece.png",
    },
    {
      title: "Virus219",
      info: "Uskal",
      url: "https://i.goopics.net/f02j7k.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/9fff677ac457f91a9ae668866ba97ae8.png",
    },
    {
      title: "XXL",
      info: "Tepdo",
      url: "https://i.goopics.net/503v28.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/388812e6afedb8300fd4e6477e3c7e36.png",
    },
    {
      title: "Le Grand Remplacement ",
      info: "Gab",
      url: "https://i.goopics.net/4xrbz5.jpg",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/1c7631782f1c8fd407614f23b6cb66ad.png",
    },
    {
      title: "The Gelatine",
      info: "???",
      url: "https://i.goopics.net/zdz3s3.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/42a03e3b1cda7560c999ccc510de00c2.png",
    },
    {
      title: "Gastonx",
      info: "Eneko",
      url: "https://i.goopics.net/ungf62.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/b6558056a29f1138323322729c55d50b.png",
    },
    {
      title: "Papoutai",
      info: "Tomsy",
      url: "https://i.goopics.net/c2vqy7.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/3910f234e309d6f939827e7621ea7767.png",
    },
    {
      title: "Big Gaston",
      info: "Laurentoutang",
      url: "https://i.goopics.net/q3ltb7.jpg",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/63e2fc9daabb3812fc79ee6afa9ad6de.png",
    },
    {
      title: "Zboub III",
      info: "???",
      url: "https://i.goopics.net/5ai7mb.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/a026f74628f285d52d6db670c98d7391.png",
    },
    {
      title: "Very Bad Hlib",
      info: "Sxcret",
      url: "https://i.goopics.net/qkkhyv.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/432b24950fba4919da2504c714445bbb.png",
    },
    {
      title: "The Grand Line",
      info: "???",
      url: "https://i.goopics.net/dl4cen.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/809a35c3675f4458c85c787a1318a183.png",
    },
    {
      title: "The FISK",
      info: "Drazer_",
      url: "https://i.goopics.net/0lzvuy.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/5c83f276e8ca39bb2e84f8be3b1c27aa.png",
    },
    {
      title: "The Bigman Show",
      info: "LeMoussaillon",
      url: "https://i.goopics.net/l2om8f.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/50879180adcd05ec82520ab63a89c2c2.png",
    },
    {
      title: "The Bigman",
      info: "r21316",
      url: "https://i.goopics.net/3jdhfl.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/dd269c2b72d16be1790d0a7259e7d914.png",
    },
    {
      title: "Shnek",
      info: "???",
      url: "https://i.goopics.net/ur3aif.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/776bb74ebd4c4d2fcc22233ece559c4c.png",
    },
    {
      title: "Retour vers la femme mure",
      info: "Raf",
      url: "https://i.goopics.net/bgtwmt.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/0e3ab84f6b0dc3ef9940f2fd4cfaaceb.png",
    },
    {
      title: "AL Jasino Scarfesse",
      info: "Raf",
      url: "https://i.goopics.net/smdtb9.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/3a09d37beb03f64de67b5b4802b397e9.png",
    },
    {
      title: "Rebondissant",
      info: "Tempdo",
      url: "https://i.goopics.net/g408ls.jpg",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/7b0fda8ee97192b41110630407ef0490.png",
    },
    {
      title: "Qu'est ce qu'on a fait aux Forbes",
      info: "Jumpyman_",
      url: "https://i.goopics.net/zijuvf.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/19c3306bb32bdc4d4fee3ae0a0204678.png",
    },
    {
      title: "Oputainsamere",
      info: "???",
      url: "https://i.goopics.net/93d1fv.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/0bbae11c85ee2b8034f1d93236475769.png",
    },
    {
      title: "Les dernier Bigman",
      info: "Eneko",
      url: "https://i.goopics.net/1i48cj.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/edb3876dbdc33fdf31bc50c84de58aeb.png",
    },
    {
      title: "Le Pari",
      info: "Liv",
      url: "https://i.goopics.net/augmvd.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/20dada6c34d512d46118b2ab640ec9e7.png",
    },
    {
      title: "La Plante",
      info: "Beuh",
      url: "https://i.goopics.net/hnqlbl.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/2e6d768e7dcc1c712695f11f3faf8d3e.png",
    },
    {
      title: "Kill Jason",
      info: "Azarog_",
      url: "https://i.goopics.net/x3h7bt.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/a967b6be10ca635ec19f1fb21c2576b8.png",
    },
    {
      title: "Je suis un voleur",
      info: "Gab",
      url: "https://i.goopics.net/lh2r56.jpg",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/2d5d50083542714148e864198160f537.png",
    },
    {
      title: "Jastoune E-sport",
      info: "ComKris",
      url: "https://i.goopics.net/e36kdn.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/7db3494624c32082e385557451a810d2.png",
    },
    {
      title: "Jason Burne",
      info: "Raf",
      url: "https://i.goopics.net/ix62jx.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/6e0d302f4acba2622a24666ad952b7fa.png",
    },
    {
      title: "Inceste Forbes",
      info: "???",
      url: "https://i.goopics.net/zgmm0a.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/6fc6551e3dd757a58bf67f55d2d96649.png",
    },
    {
      title: "GreK",
      info: "Benta",
      url: "https://i.goopics.net/ymd7tf.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/94092b8212b3a5c5f7573aac71235c55.png",
    },
    {
      title: "Fils de Pute",
      info: "???",
      url: "https://i.goopics.net/1odufd.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/904b610b39c6fe63c854d7e1bdf58e6f.png",
    },
    {
      title: "DeadPool X Wolverine V2",
      info: "ComKris",
      url: "https://i.goopics.net/9tnky6.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/716055a497c379529b02645ebf556813.png",
    },
    {
      title: "Burne",
      info: "Eneko",
      url: "https://i.goopics.net/84qp1c.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/658e9b7b2c7dc5d9cf49e1474fb1d3b3.png",
    },
    {
      title: "Bigman",
      info: "DavidTaroz",
      url: "https://i.goopics.net/a3ks4j.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/cc0bc6df074e84e2ef306278589b31aa.png",
    },
    {
      title: "BigMan Tueurs 2024",
      info: "Eneko",
      url: "https://i.goopics.net/hcooxe.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/c5c5649052def63fbdb3187f0f175245.png",
    },
    {
      title: "Amine Zeubio",
      info: "Gab",
      url: "https://i.goopics.net/c9194d.jpg",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/900fe85facd717203295533195ed62a4.png",
    },
    {
      title: "Grand Line RP",
      info: "Uskal",
      url: "https://i.goopics.net/nymsvq.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/aed72cd187c488d16423b5afb7b2d49e.png",
    },
    {
      title: "La WeeWee",
      info: "Tomsy",
      url: "https://i.goopics.net/7jaq9q.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/36208df354bc9351f087d810c6118ed9.png",
    },
    {
      title: "Star Foulah Episode 2",
      info: "Tomsy",
      url: "https://i.goopics.net/yq7v9e.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/f0f06adbf5c3db223c373c3bffdca29c.png",
    },
    {
      title: "Le Gros, La vieille et le Puant",
      info: "???",
      url: "https://i.goopics.net/xpq7k3.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/238e3e15dc99bf345cd68f7d1e842a54.png",
    },
    {
      title: "Le Testament",
      info: "???",
      url: "https://i.goopics.net/5hagtj.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/3f863a33088b3ac21d883261d0bc23bf.png",
    },
    {
      title: "Family Buisness",
      info: "???",
      url: "https://i.goopics.net/wx324t.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/ae71b4a9e3a05f40c5f96ce3e1685fe8.png",
    },
    {
      title: "Attack On TITAN",
      info: "???",
      url: "https://i.goopics.net/qxjl4m.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/7a491e75c45a7e068841eac917112e02.png",
    },
    {
      title: "Adieu Mamie",
      info: "DraZer_",
      url: "https://i.goopics.net/4i7fkd.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/e19c40e455d3c19bcaa8146fe60b74e8.png",
    },
    {
      title: "Forbaise",
      info: "Gabrielh",
      url: "https://i.goopics.net/fkvgcu.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/de78968aa831da61d267eddc6b7d8676.png",
    },
    {
      title: "S.N.A.K.O.U S6",
      info: "Mohamed_genie",
      url: "https://i.goopics.net/92ytp1.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/34280e80df06f28b44c039275ed86812.png",
    },
    {
      title: "Qui retrouvera Gaston ?",
      info: "Mohamed_genie",
      url: "https://i.goopics.net/9y5rfd.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/2f3c33c6abe67ff83691856db83c78ef.png",
    },
    {
      title: "Baise moi si tu peux",
      info: "Mohamed_genie",
      url: "https://i.goopics.net/iangsr.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/b685f8fde56080c15d10337ab82e7d0a.png",
    },
    {
      title: "Accident",
      info: "SuzuuTV",
      url: "https://i.goopics.net/rfsxr3.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/bb92ddb5db9a183462a24a4071264a25.png",
    },
    {
      title: "Je suis une Teub",
      info: "Akuro",
      url: "https://i.goopics.net/luus3g.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/2e817975da28e99383bcfe8a2bae0458.png",
    },
    {
      title: "AGRASMAN",
      info: "ComKris",
      url: "https://i.goopics.net/tc3r48.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/7002f9385c957d7c56ebbd0078122bb8.png",
    },
    {
      title: "Jasoun et Gastoun Bighess",
      info: "???",
      url: "https://i.goopics.net/43v0cy.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/0f9912316111da8d4ad36c5924703ced.png",
    },
    {
      title: "Jasonix & Gastonix",
      info: "Achrafou",
      url: "https://i.goopics.net/npvdnq.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/294443b4ef997ff370c98345dc2a8cb1.png",
    },
    {
      title: "Jason VS Hector",
      info: "???",
      url: "https://i.goopics.net/7cnqio.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/a44fad6a3f5e6d94bb057e8a3acd9430.png",
    },
    {
      title: "Hmar Is Back",
      info: "Arab Supreme",
      url: "https://i.goopics.net/w7ohs4.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/a0c4aa49eca6e0f08a6bd9bed78f3e41.png",
    },
    {
      title: "Guardian of the TAXI",
      info: "???",
      url: "https://i.goopics.net/54ri64.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/32e1f8fc7194f1f778b74fc92be29f8a.png",
    },
    {
      title: "Gros III",
      info: "???",
      url: "https://i.goopics.net/r1twqq.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/082c47e8db720f77b7d229e37751d7d9.png",
    },
    {
      title: "Gradiator",
      info: "Beuh",
      url: "https://i.goopics.net/v9gfzw.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/ade6e07130c130133d9f3d62cd9e67c2.png",
    },
    {
      title: "Génération YAMAKASI",
      info: "Chris Blanche",
      url: "https://i.goopics.net/b5ekok.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/1588de536016e8b80ea4b3a34eb0f7c0.png",
    },
    {
      title: "Festin",
      info: "???",
      url: "https://i.goopics.net/xrp5m9.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/60315dd916fda4b75593e39790bdc6f8.png",
    },
    {
      title: "FuckBoy",
      info: "Ookamishiro",
      url: "https://i.goopics.net/uonper.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/8d5b7eafb86b87ec8dfe86f7b3ae52a6.png",
    },
    {
      title: "Elle Revient",
      info: "???",
      url: "https://i.goopics.net/oljebe.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/cdc7097b82f5ddf248e23338668600b4.png",
    },
    {
      title: "Chosen Of Aubervilliers",
      info: "Fireblaze - Uskal",
      url: "https://i.goopics.net/e1uoig.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/47f9d4ba896470a863341a5a19f89253.png",
    },
    {
      title: "Bouclette",
      info: "???",
      url: "https://i.goopics.net/0isvjc.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/0015cdaa4051eba8773a198d941ea871.png",
    },
    {
      title: "Bigtanic",
      info: "???",
      url: "https://i.goopics.net/5eydyd.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/08d5292961ce250602422436facd5d10.png",
    },
    {
      title: "Bigman à tout faire",
      info: "Aku",
      url: "https://i.goopics.net/iklktr.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/a27229d39ab8b3b4dff345bd8ccfed82.png",
    },
    {
      title: "BIGMAN.",
      info: "Beuh",
      url: "https://i.goopics.net/bv2rae.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/75a1384e4b23b4fb0a15a3c2b8f3fc61.png",
    },
    {
      title: "Babybel",
      info: "???",
      url: "https://i.goopics.net/nngi09.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/84d0d58ae67144a1a6dcdc5e421ecd95.png",
    },
    {
      title: "A Table",
      info: "???",
      url: "https://i.goopics.net/icjwd4.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/af10a08179f55f2ec851908e95d9ec11.png",
    },
    {
      title: "Ahlbatar",
      info: "Varggan",
      url: "https://i.goopics.net/ycas1l.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/91a3afacfe3b59ebc1fada7a82941b65.png",
    },
    {
      title: "50 Nuances de Mamie Suzie",
      info: "Uskal Fireblaze",
      url: "https://i.goopics.net/foghmc.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/63647e07ffb14788938fbd496c177661.png",
    },
    {
      title: "2 Fat 2 Furious",
      info: "???",
      url: "https://i.goopics.net/pi0mx4.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/96706ae107ee0c06004f3a518e65b6d2.png",
    },
    {
      title: "Stan La fondue",
      info: "Fireblaze",
      url: "https://i.goopics.net/a46d1t.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/34a772694fba15cad922e46f0bf9c2de.png",
    },
    {
      title: "Le Radin",
      info: "Eskobar",
      url: "https://i.goopics.net/d8xznt.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/cb30f79d15a2bb67eb88770c13c43a39.png",
    },
    {
      title: "Wanted, dead or alive",
      info: "Maxime Rg",
      url: "https://i.goopics.net/xpxxft.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/82f8c05ebd1fa2159c8778db3c59c439.png",
    },
    {
      title: "Mon Frère",
      info: "Maxime Rg",
      url: "https://i.goopics.net/3iqetw.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/a29c2121bcebc802c3476c4ede1fbdb1.png",
    },
    {
      title: "Gaston la gâche",
      info: "Gabin.nsrtxd",
      url: "https://i.goopics.net/rg6qos.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/7ace705d262d3bb672b40bed7c2aec6e.png",
    },
    {
      title: "Bienvenue chez les Forbes",
      info: "Eskobar",
      url: "https://i.goopics.net/niz0jl.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/b49feaf8ea3c7022fe2d6a26567f56f9.png",
    },
    {
      title: "Princesse Nova Oragana",
      info: "Fireblaze",
      url: "https://i.goopics.net/dkk7rp.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/a2b5eb4d6fa552dca65472ffc92b8a7c.png",
    },
    {
      title: "The Walking Bread",
      info: "???",
      url: "https://i.goopics.net/mectd6.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/45ae43496067920d7b78c7daf2c670b0.png",
    },
    {
      title: "Vite Larsa",
      info: "???",
      url: "https://i.goopics.net/9rrsxj.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/374360fb25f9e48c531d8c8d14ede2f6.png",
    },
    {
      title: "Trésor Forbes",
      info: "Dpix",
      url: "https://i.goopics.net/qam844.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/93d7e3efd72d730971682302f58f6b6d.png",
    },
    {
      title: "The Simian",
      info: "Varggan",
      url: "https://i.goopics.net/k8a47h.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/e5bfeaa99794b87ccdaa77d3db713177.png",
    },
    {
      title: "The Forbes",
      info: "Fireblaze - Uskal",
      url: "https://i.goopics.net/t6fkpv.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/e6dcb60948a07565533b79c9892483b4.png",
    },
    {
      title: "SpiderHalouf",
      info: "Fireblaze - Uskal - Akuro",
      url: "https://i.goopics.net/istsvz.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/b4fdea0e0ec8591ca09b5df4a918efb5.png",
    },
    {
      title: "Sauvez Walid",
      info: "???",
      url: "https://i.goopics.net/r3oq9j.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/1fa35af8860493638ce134ded35ee930.png",
    },
    {
      title: "Peter leurs chevilles",
      info: "???",
      url: "https://i.goopics.net/v9vyx7.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/c79c5d5a6ba102f73f2420e7acf1ff46.png",
    },
    {
      title: "One Pouce",
      info: "Fireblaze - Uskal",
      url: "https://i.goopics.net/wy3n8p.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/22f7108872c9fd913f5f0bb4865b14e8.png",
    },
    {
      title: "Nova dans la peau",
      info: "Fireblaze - Uskal",
      url: "https://i.goopics.net/viffia.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/9b98b9065274172ea638440e9964f28f.png",
    },
    {
      title: "Mr. & Mrs. Forbes",
      info: "???",
      url: "https://i.goopics.net/ohw975.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/4840bea85b1ce04861cd4ddfb74a6ce5.png",
    },
    {
      title: "Le diable en Prada",
      info: "Fireblaze",
      url: "https://i.goopics.net/9yi520.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/7dd7b45210d0f58b1035a4e85fe94279.png",
    },
    {
      title: "la Planete des singes",
      info: "Fireblaze",
      url: "https://i.goopics.net/3qzhq3.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/644ff1ed8dc78ad7210ddd3d9ae15967.png",
    },
    {
      title: "Keskidi",
      info: "Akuro",
      url: "https://i.goopics.net/fd0se4.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/cb7c282e1144c2a12e20eb971abf6c4f.png",
    },
    {
      title: "Jason Wick",
      info: "Fireblaze - Akuro",
      url: "https://i.goopics.net/8i9hdj.jpg",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/4cd204090fbf9836708d3ababd07c9d3.png",
    },
    {
      title: "Super Bigman Bros",
      info: "AeLBuS",
      url: "https://i.goopics.net/tsx6uo.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/49166b2bcb82a145db626c46f51d79fd.png",
    },
    {
      title: "25 Ans, toujours puceau",
      info: "Fireblaze",
      url: "https://i.goopics.net/nu8idb.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/768fea929227b1a97347a4d4c4598621.png",
    },
    {
      title: "Ah le Radin",
      info: "unknowm",
      url: "https://i.goopics.net/lft5dr.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/1c023301b0dab6a78d12930a0dc5bbd4.png",
    },
    {
      title: "The Bachelor",
      info: "Fireblaze",
      url: "https://i.goopics.net/s12jf8.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/477aee6ec29e3546f603da53abeeaa62.png",
    },
    {
      title: "Le Branleurs de Chevaux",
      info: "Fireblaze - Uskal",
      url: "https://i.goopics.net/z1s4cb.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/6bb8c0d838fd1f5faeb102ed8e2f4dae.png",
    },
    {
      title: "Cesar",
      info: "Fireblaze",
      url: "https://i.goopics.net/xb56iv.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/09b13bbedc876dc24a802a9e6e36ded3.png",
    },
    {
      title: "Breaking BigMan",
      info: "???",
      url: "https://i.goopics.net/9coql7.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/beb934611ffed1d3f6ecf9fd927f7e8e.png",
    },
    {
      title: "Deadpool Wolverine",
      info: "Fireblaze",
      url: "https://i.goopics.net/aote2b.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/02801a2011c2d6c905b0799c9accd02c.png",
    },
    {
      title: "GastonBuster",
      info: "Sxcret.eth",
      url: "https://i.goopics.net/fgtku9.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/5f7a7074ce110c8050881bbedc4371e0.png",
    },
    {
      title: "Grand Theft Forbman",
      info: "AeLBuS",
      url: "https://i.goopics.net/jgqbwv.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/566ee42e65385952cee849d60b09e9a8.png",
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

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.trim() === "") {
      setFilteredIndices([]);
    } else {
      const filteredIndices = projects
        .map((project, index) => ({ project, index }))
        .filter(
          ({ project }) =>
            project.title.toLowerCase().includes(term.toLowerCase()) ||
            project.info.toLowerCase().includes(term.toLowerCase())
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
        placeholder="Rechercher une affiche par Titre ou Créateur..."
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
