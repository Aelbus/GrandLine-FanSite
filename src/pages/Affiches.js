import { useState } from "react";
import "../styles/pages/Affiche.css";

const Affiches = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredIndices, setFilteredIndices] = useState([]);
  const [totalAffiches, setTotalAffiches] = useState(0);

  const projects = [
    {
      title: "Le Mariage Bigman Forbes",
      info: "Dpix",
      url: "https://i.goopics.net/2mass1.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/eb225a3dcbce3796699299ad7ca449a5.png",
    },
    {
      title: "La Big Magouille",
      info: "Lone",
      url: "https://i.goopics.net/cg2bmb.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/0201423f7d49734e5d8cd163cae8278d.png",
    },
    {
      title: "Bonnie & Clyde",
      info: "Sayrann",
      url: "https://i.goopics.net/4uhfn1.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/332cb3c642baaf22da6f5a052eb0666d.png",
    },
    {
      title: "La guerre commence",
      info: "Moha92",
      url: "https://i.goopics.net/pxt1g6.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/a333bafbf7d671a29346058f0d82acca.png",
    },
    {
      title: "11.11.24",
      info: "Moha92",
      url: "https://i.goopics.net/73u447.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/2c4db66ae55fb4cd8e4ce296ae2be6a2.png",
    },
    {
      title: "Jason VS Santana For NOVA",
      info: "Dpix",
      url: "https://i.goopics.net/q6msas.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/63bd93593e0752d57bc9bc872b0a75c5.png",
    },
    {
      title: "PAWN STARS",
      info: "SilentHeal",
      url: "https://i.goopics.net/wuxah0.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/8392027195c4b03ab41f5ac05d71bd9e.png",
    },
    {
      title: "Les BIGMAN",
      info: "SilentHeal",
      url: "https://i.goopics.net/12lvih.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/2e1499ec22bc96b116b97acdf4ff08f6.png",
    },
    {
      title: "The Baiseur",
      info: "Junior7",
      url: "https://i.goopics.net/psfhsj.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/79dd942c97149c95f106b2312e6fae72.png",
    },
    {
      title: "Mon père et moi",
      info: "Junior7",
      url: "https://i.goopics.net/frptd6.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/4eb01ca0cb1e7a0aad4856da4424d43f.png",
    },
    {
      title: "SoloQ",
      info: "Elanciel",
      url: "https://i.goopics.net/svrmv1.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/deeff02977108958fedba38c8e7c7b1c.png",
    },
    {
      title: "Touken7 PS2",
      info: "Hakke95",
      url: "https://i.goopics.net/kna6rn.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/032d9022b90dcfa8ea835d6d33fc4281.png",
    },
    {
      title: "Gromeo & Juliette",
      info: "SilentHeal",
      url: "https://i.goopics.net/2x1qv2.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/b676fa368e744f366f89220b206d0ba5.png",
    },
    {
      title: "Objection !",
      info: "Ficello30",
      url: "https://i.goopics.net/767yan.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/bd36a53c7e44d78a52831f6dd3a47975.png",
    },
    {
      title: "Procces BIGMAN",
      info: "Elanciel",
      url: "https://i.goopics.net/mfpsl0.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/ae91dba8d86d54ca862f45cfb481e50e.png",
    },
    {
      title: "The FLOPGUY",
      info: "DavidTaroz",
      url: "https://i.goopics.net/z9wavv.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/a290c2464fbbbbc45ba2d84575f6dfe5.png",
    },
    {
      title: "Ravagé",
      info: "Nicolassss57",
      url: "https://i.goopics.net/oiubxn.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/5a245ff657c7a591b98e7df0fd9e5046.png",
    },
    {
      title: "Il était une fois Nova",
      info: "Bob L'ingé",
      url: "https://i.goopics.net/eyjtoy.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/b5425c0f02fb9eb872677741b3cd25f1.png",
    },
    {
      title: "FAT Bigman",
      info: "Bob L'ingé",
      url: "https://i.goopics.net/9ms3r2.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/2c777b858b7ee27a33ea7b022c7f1350.png",
    },
    {
      title: "Bruler et Mentir",
      info: "Matt Cllt",
      url: "https://i.goopics.net/x9fown.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/5c1e2760fe2f87b70d2e27a5b30ee693.png",
    },
    {
      title: "Aviatior",
      info: "Inspecteur Barnabite",
      url: "https://i.goopics.net/bau6xd.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/cf28338a2bffd6339f2ead5382112a36.png",
    },
    {
      title: "3,65 Centimètres",
      info: "Matt cllt",
      url: "https://i.goopics.net/pcb6ib.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/e74242f7e0390778f010411b2672f0fc.png",
    },
    {
      title: "KESCAPE Bigman toujours lui",
      info: "Beubz",
      url: "https://i.goopics.net/b2k4f9.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/4c3253e7afc401eef7c012a074d02bfb.png",
    },
    {
      title: "King Fight Golf Club",
      info: "Ilyes",
      url: "https://i.goopics.net/wfb9x4.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/dbe6392589b70177afe6078b36a5d479.png",
    },
    {
      title: "Mon Incroyable Fiancé",
      info: "SilentHeal",
      url: "https://i.goopics.net/49uvqc.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/48af1087b546590f4cbdb352c61f4949.png",
    },
    {
      title: "#freeGaston",
      info: "SilentHeal",
      url: "https://i.goopics.net/6pxay7.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/6b93bc67e6b3a0ea571bd43d2d612ef6.png",
    },
    {
      title: "Da Zebi CODE",
      info: "Garou",
      url: "https://i.goopics.net/t2yce6.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/fb846a1be1b9d702e529c4e3e491c3a7.png",
    },
    {
      title: "Tara Lewis",
      info: "Bambi",
      url: "https://i.goopics.net/i7r81p.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/10a096bda407797459279bb454274f4a.png",
    },
    {
      title: "Sous Ecrou",
      info: "Ilyes",
      url: "https://i.goopics.net/s99hwn.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/d7d7b7bc179476f104d48433af5ae68b.png",
    },
    {
      title: "Bonnie and Clyde",
      info: "Elanciel",
      url: "https://i.goopics.net/3sd2xh.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/6fc8c227bb2793da75159e5e9ab1f39f.png",
    },
    {
      title: "La Gros",
      info: "Azarogg",
      url: "https://i.goopics.net/oa8bxb.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/94143a51db30678631c62d4005547deb.png",
    },
    {
      title: "EGG MILES",
      info: "Elanciel",
      url: "https://i.goopics.net/sbnuk6.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/e41491d61bcdceb8d827fda596a83f74.png",
    },
    {
      title: "MK8 de pute",
      info: "ilyes",
      url: "https://i.goopics.net/kwnbt8.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/236b9b584b3be037b11d4429b5b026b5.png",
    },
    {
      title: "inmangeable",
      info: "Beubz",
      url: "https://i.goopics.net/buula3.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/db95c666ca77d518645d013aa132c37e.png",
    },
    {
      title: "Elle veut  HITCH",
      info: "Elanciel",
      url: "https://i.goopics.net/xr3ajn.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/9159b9549dc124f8cb545f19bbe57254.png",
    },
    {
      title: "BigMen",
      info: "Dragfy",
      url: "https://i.goopics.net/kabi6c.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/15b54d0ec908b0a17ce8fa846a126428.png",
    },
    {
      title: "Mon Incroyable Fiancée",
      info: "SilentHill",
      url: "https://i.postimg.cc/mDXc8zRh/incroyable-fianc-silent-Hill.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/3864e03b98e773ca982f7d042aa968e8.png",
    },
    {
      title: "Jalousie de Miss",
      info: "AeLBuS & Sayrann",
      url: "https://i.postimg.cc/Hxw9VL9x/Jalousie-de-miss-Aelbus-Sayran.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/bd0c2d4819aec6d2a95137a8ec9060ba.png",
    },
    {
      title: "Gaston BIGMAN",
      info: "???",
      url: "https://i.goopics.net/s4r4mk.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/dd835d30962d6114fdc7fc962b60221d.png",
    },
    {
      title: "LADDER",
      info: "SilentHill",
      url: "https://i.goopics.net/dufv2q.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/22c0c018aea2847584b805c351f63bfc.png",
    },
    {
      title: "NYMPHO",
      info: "Garou",
      url: "https://i.goopics.net/a9abpr.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/49afcb460727fc97687c02ecd4807022.png",
    },
    {
      title: "Graisse anatomy",
      info: "Novasihg",
      url: "https://i.goopics.net/y4vis9.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/7236129b075ae22ebf92c4748fa2ce53.png",
    },
    {
      title: "Forbie",
      info: "Novasihg",
      url: "https://i.goopics.net/0inyrv.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/a60b4119f1c393c6c1fa0a932222e60b.png",
    },
    {
      title: "The Bigman",
      info: "SilentHill",
      url: "https://i.goopics.net/076tf5.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/07f8da3c51ae7b8df961c5747ee87cd4.png",
    },
    {
      title: "Seul au monde",
      info: "Matt Cllt",
      url: "https://i.goopics.net/hbcuby.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/64127f4b9d8a26ef1b506692a92b6199.png",
    },
    {
      title: "SanGroku",
      info: "Majado",
      url: "https://i.goopics.net/5pvjil.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/07e56ae17dbb4d3f10bd62474e05714f.png",
    },
    {
      title: "Radin",
      info: "Max Cllt",
      url: "https://i.goopics.net/jih1dj.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/b92cd4e073dd991cf1a5031bc6d0eb1e.png",
    },
    {
      title: "Scarfesse",
      info: "Bob L'ingé",
      url: "https://i.goopics.net/3l9c92.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/e8f434d8ebea134776f9053ff6b8d1cc.png",
    },
    {
      title: "Pretty Man",
      info: "Bob L'ingé",
      url: "https://i.goopics.net/5tfyyh.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/208d2056b0b0bc3872b2b1f65ef2f1fb.png",
    },
    {
      title: "Los Santos",
      info: "Bob L'ingé",
      url: "https://i.goopics.net/9kg36l.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/c936d27a35e1ea131abaaff5b4a56252.png",
    },
    {
      title: "Fast and Furious",
      info: "Bob L'ingé",
      url: "https://i.goopics.net/8i5ox5.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/d2e7de4cf2888001f67e66d5536352ae.png",
    },
    {
      title: "Ava MENDEZ Influenceuse 4",
      info: "AeLBuS & Sayrann",
      url: "https://i.goopics.net/kvlru6.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/05b36f6e4fe4c2fcc37e649a06437b8c.png",
    },
    {
      title: "Ava MENDEZ Influenceuse 3",
      info: "AeLBuS & Sayrann",
      url: "https://i.goopics.net/6t1rn7.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/1a8329ba0b8baacfbe8bd44e61811263.png",
    },
    {
      title: "Ava MENDEZ Influenceuse 2",
      info: "AeLBuS & Sayrann",
      url: "https://i.goopics.net/hoourh.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/f43814749c3144beedc999b871f44bc1.png",
    },
    {
      title: "Ava MENDEZ Influenceuse",
      info: "AeLBuS & Sayrann",
      url: "https://i.goopics.net/r0j3ha.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/ddc2816b001bc692006bae805717b02b.png",
    },
    {
      title: "Fast and furious 21",
      info: "Bob L'ingé",
      url: "https://i.goopics.net/hl1onu.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/b5bc5a413694d40480d5ed29891e38be.png",
    },
    {
      title: "Stage Militaire",
      info: "Eneko",
      url: "https://i.goopics.net/b2t9eh.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/670cf589b8fa426eb285690b2289195d.png",
    },
    {
      title: "Les Bigman",
      info: "Eneko",
      url: "https://i.goopics.net/a5kapg.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/64daa8476bd5955a9d916f450c2eca19.png",
    },
    {
      title: "Grand Line",
      info: "Khannibal",
      url: "https://i.goopics.net/kqmvrk.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/2424822b13954967bfe9dc6c211f521b.png",
    },
    {
      title: "Roméo & Juliette",
      info: "Georges de rimouski",
      url: "https://i.goopics.net/v7kztw.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/602b630548a44ac2fe0ca61606e3d29f.png",
    },
    {
      title: "Fée Clocharde",
      info: "Azur",
      url: "https://i.goopics.net/u8e7i7.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/d703034b0c915960df9af72dde66dce5.png",
    },
    {
      title: "David.",
      info: "Eneko",
      url: "https://i.goopics.net/omo6jw.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/73e019ab7f8f4e00a7129f753c694964.png",
    },
    {
      title: "Plus tard J'atteindrai les pépites d'or",
      info: "Eneko",
      url: "https://i.goopics.net/9bmayt.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/c4836de1f923d95f473a8bd280c5df33.png",
    },
    {
      title: "Le jour où j'ai forbaise Nova",
      info: "Fiicello30",
      url: "https://i.goopics.net/0qae7o.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/b90fa0d103c7f3e9eb58ec106def7f40.png",
    },
    {
      title: "The Terminateur",
      info: "Inspecteur Barnab*te",
      url: "https://i.goopics.net/h5a6mx.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/1fc17f5934ec21e937f1efff7b37bc0d.png",
    },
    {
      title: "Fat & Curious",
      info: "B4K",
      url: "https://i.goopics.net/blikrh.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/7ffc1a126b001da62f2721ca21194f6d.png",
    },
    {
      title: "Histoire impossible",
      info: "Khannibal",
      url: "https://i.goopics.net/2pif6v.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/a9cc7dba85f690b3b270991156af70b3.png",
    },
    {
      title: "Akhy Potter",
      info: "Sims_Artist1",
      url: "https://i.goopics.net/aiecos.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/eb02cbab42fa16aed83708548353defa.png",
    },
    {
      title: "Miss Los Santos",
      info: "Ellanciel",
      url: "https://i.goopics.net/m2a9k5.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/79dd163c6680225b2c2ded91dacdcd3a.png",
    },
    {
      title: "Jason BIGMAN",
      info: "Matt_cllt",
      url: "https://i.goopics.net/5xmfxy.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/70e1bf6ed098bf0414d665103f1c8421.png",
    },
    {
      title: "Gros Lard",
      info: "Eneko",
      url: "https://i.goopics.net/bdmja9.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/5eaaeada8c5fcd1f5b6b3115c06190ea.png",
    },
    {
      title: "Assassin Cringe",
      info: "Eneko",
      url: "https://i.goopics.net/nbcq4j.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/9623e044256af846abbafc4f730c3dd7.png",
    },
    {
      title: "FORBES",
      info: "Eneko",
      url: "https://i.goopics.net/hg7nvr.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/dbc97af303747637cdd3016a5f6a5243.png",
    },
    {
      title: "TULANIC",
      info: "B4K",
      url: "https://i.goopics.net/cbdvlu.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/e172c8eea81ca318b67b58905c6222f4.png",
    },
    {
      title: "Interstegras",
      info: "SØsio",
      url: "https://i.goopics.net/23w5bt.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/369af43a357cc2cb3c9585fa9082c15a.png",
    },
    {
      title: "Big Maman",
      info: "AndJou",
      url: "https://i.goopics.net/wavaol.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/91cd654858860c6a0db3556d2d2ace91.png",
    },
    {
      title: "Brothers Of Destruction",
      info: "Memozb67",
      url: "https://i.goopics.net/2po25j.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/9e329d62f871d406ace5077bc93d8338.png",
    },
    {
      title: "Los Santos Fire",
      info: "Hajar17",
      url: "https://i.goopics.net/z8zcm9.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/19b1578dda039e612dc7ef1739238e6d.png",
    },
    {
      title: "Opération Istambul",
      info: "Bob L'ingé",
      url: "https://i.goopics.net/6vxe6t.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/8603f6147243db9c8f7d87807044ca6f.png",
    },
    {
      title: "Kader 2000",
      info: "Shdw",
      url: "https://i.goopics.net/1tkalq.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/065129d30180963170af240afefdc0af.png",
    },
    {
      title: "J'irai dormir chez vous",
      info: "Hakke95",
      url: "https://i.goopics.net/hi79yz.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/59adb2b54fc9281432a199052be21ac8.png",
    },
    {
      title: "Fatgun Maveribs",
      info: "Tepdo",
      url: "https://i.goopics.net/17jzbk.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/ff29ae4ecab7902d52da8540b37bdf6f.png",
    },
    {
      title: "Le Bigman",
      info: "Moulamax",
      url: "https://i.goopics.net/eijj3m.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/5c1589d35606d7e89460ff6f6cdae488.png",
    },
    {
      title: "Bruleur d'Alexandre",
      info: "Moulamax",
      url: "https://i.goopics.net/6gexyu.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/192707189791ef90e3b125da20b4a026.png",
    },
    {
      title: "La soupe aux forbes pour Noluck",
      info: "Varggan & AeLBuS",
      url: "https://i.postimg.cc/g0tKTSSt/SOUPE-AUX-CHOUX-aelbus-x-Varggan.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/de9ada0e7fff55396b8c7c89127cca1d.png",
    },
    {
      title: "Tout pour la maison de Mamie",
      info: "???",
      url: "https://i.postimg.cc/WbwCfSs0/tout-pour-la-maison-de-mamie.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/f564984649ed399100ea785580d73b2a.png",
    },
    {
      title: "Prison Break",
      info: "Flav",
      url: "https://i.postimg.cc/FRGhvm4V/Prison-break-Flav.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/9e4f8c5345f0b9d0603b02cb45a46b25.png",
    },
    {
      title: "Les vacances des BIGMAN",
      info: "Lone",
      url: "https://i.postimg.cc/cJmmM5Wb/Les-vacances-des-bigman-lone.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/f776317b9049d7bfb6ee33d5cbf04277.png",
    },
    {
      title: "Le Zbeul",
      info: "Silentheal",
      url: "https://i.postimg.cc/hjmGRNGC/LE-ZBEUL-silentheal.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/3014d80b7278c17f53305d8d7ae1fa53.png",
    },
    {
      title: "Le bon la brute et la demente",
      info: "Bob L'ingé",
      url: "https://i.goopics.net/zph9uw.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/4095afc147337eebae2aa90ba5a2e3d5.png",
    },
    {
      title: "JOHN JOID Master SnakBack",
      info: "Bob L'ingé",
      url: "https://i.goopics.net/ku1fy3.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/25accab3e303d80a03198e19fa30b2c2.png",
    },
    {
      title: "Hangover",
      info: "Flav",
      url: "https://i.postimg.cc/VLMRvNJg/Hangover-Flav.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/c0514819bb2cb5e28d586a9211c2d838.png",
    },
    {
      title: "GTHRP",
      info: "Lone",
      url: "https://i.postimg.cc/dV5JywXk/GTHRP-Lone.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/0cf29dab6de6fb53bfcd3a0f5b79139f.png",
    },
    {
      title: "GrandLine",
      info: "Bob L'ingé",
      url: "https://i.goopics.net/uxyi46.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/de6c3f979a1f20a9a9ef260488b6b568.png",
    },
    {
      title: "Grand Forbes Malade",
      info: "Ficello30",
      url: "https://i.postimg.cc/TP6Jgcv4/Grand-forbes-malade-ficello30.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/8282dd85378d384e623c661516b43b69.png",
    },
    {
      title: "Alix Forbes",
      info: "AelBus & Chach0u_",
      url: "https://i.postimg.cc/mD33m1Bg/Alix-Forbes.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/5ffe015734fcd046ed939bcddc5b61b8.png",
    },
    {
      title: "En Plein FEU",
      info: "Elanciel",
      url: "https://i.goopics.net/u2bdrk.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/ce97fb90fa4dd9319cb7ce998d5b113a.png",
    },
    {
      title: "Stella FRIT",
      info: "FireBlaze",
      url: "https://i.goopics.net/dowtm1.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/8a4c4334261f21165183c0858149a8ec.png",
    },
    {
      title: "Game Of Forbes",
      info: "Eddy",
      url: "https://i.goopics.net/2oqr1v.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/3483ae02de99bd676b3a01f906cf5260.png",
    },
    {
      title: "FriendZone",
      info: "Moulamax",
      url: "https://i.goopics.net/xdy1bm.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/753652ab71d2a1084cd3a17d0160a6a9.png",
    },
    {
      title: "Manger Stella",
      info: "Moulamax",
      url: "https://i.goopics.net/nv1qm4.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/7bb12bc0f669c6277a17be8a453b9242.png",
    },
    {
      title: "Après 4h t'est mort",
      info: "Gab",
      url: "https://i.goopics.net/1g6deo.jpg",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/b48c10bda7444e73d13a28645c9bbc28.png",
    },
    {
      title: "Gradiator",
      info: "WARP",
      url: "https://i.goopics.net/63bl6w.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/8de96dcbb130453df4f318a8284bd97d.png",
    },
    {
      title: "Forbaise - Amour impossible",
      info: "CMLBLK",
      url: "https://i.goopics.net/jxpd15.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/0ca9f2630d0e836d5492f1c0069c9d38.png",
    },
    {
      title: "Nova Croft",
      info: "Varggan",
      url: "https://i.goopics.net/y99kk1.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/bc56483b7ae31712bb6c516be4c3b36a.png",
    },
    {
      title: "Retour Vers le Hebs",
      info: "Eddy",
      url: "https://i.goopics.net/dwx1xv.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/d47f3d2b3d1233198bd8850336d69849.png",
    },
    {
      title: "Bigman Psycho",
      info: "Eneko",
      url: "https://i.goopics.net/8evefm.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/86747a76f94da337d5bd6b1fb39fc2c7.png",
    },
    {
      title: "NOVAFLIX - Tapine",
      info: "Eneko",
      url: "https://i.goopics.net/6n5bdl.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/94b13fcaeee37e3ff027195cd4b47d1a.png",
    },
    {
      title: "Sexual PREDATOR",
      info: "mat_cllt",
      url: "https://i.goopics.net/ekfkw6.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/a42f80f65c96a35a71c122dba30eb262.png",
    },
    {
      title: "Traistring Day v2",
      info: "Raf",
      url: "https://i.goopics.net/5hwhtf.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/9a21ebb4ddc777b0242b35be4fe2b489.png",
    },
    {
      title: "Traistring Day",
      info: "Raf",
      url: "https://i.goopics.net/8z5hxn.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/b6765ed30b0fc6609ff4d155612ed4bc.png",
    },
    {
      title: "Chleuhcky",
      info: "Raf",
      url: "https://i.goopics.net/jf89zl.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/a12b30724055f02ac84f332abd1f0313.png",
    },
    {
      title: "Behlul of the carribean",
      info: "Eddy",
      url: "https://i.goopics.net/pantmq.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/ca96525cdd7bbba553107847a761a9ff.png",
    },
    {
      title: "En Cloque mode d'emploi",
      info: "Elanciel",
      url: "https://i.goopics.net/w9ncg2.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/41f583c6d5429e38a1ff942c21bd26e3.png",
    },
    {
      title: "Nous - NOVAFLIX",
      info: "Eneko",
      url: "https://i.goopics.net/912q55.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/9f567cf508a4ae88ad53634ee7137978.png",
    },
    {
      title: "Solitaire 000",
      info: "Eneko",
      url: "https://i.goopics.net/u87bdj.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/b1ef8522e709c30b25c8d36cb2427fc0.png",
    },
    {
      title: "NOVAFLIX - Le Trésor des Forbes - TRIO",
      info: "Eneko",
      url: "https://i.goopics.net/klpkw6.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/7c1c8b434ad287953159c6ca8753e914.png",
    },
    {
      title: "NOVAFLIX - Le Trésor des Forbes - DAVID",
      info: "Eneko",
      url: "https://i.goopics.net/vkzoyw.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/fad0bd156e01d2f259fc354508e54265.png",
    },
    {
      title: "NOVAFLIX - Le Trésor des Forbes - NOVA",
      info: "Eneko",
      url: "https://i.goopics.net/45a3b5.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/9bd0e34af64adda3bf20d372588e42d1.png",
    },
    {
      title: "NOVAFLIX - Forbaise",
      info: "Eneko",
      url: "https://i.goopics.net/cbjao2.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/1b7739e42acf7b1524176dbb026c21e2.png",
    },
    {
      title: "Donne nous la paie DAVID",
      info: "Tepdo",
      url: "https://i.goopics.net/vnigu4.jpg",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/6aa2bd123925b079d1a3e3a51be6014a.png",
    },
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
      title: "Inspector Gadget 2",
      info: "Marouane",
      url: "https://i.goopics.net/37pwp4.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/b45741a0184c98da2206cddb678a3ed5.png",
    },
    {
      title: "Introuvable",
      info: "Lilan",
      url: "https://i.goopics.net/mq3yow.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/a06793f402b53ea55875ac76980dd44a.png",
    },
    {
      title: "Jasoun & Gastoun contre Cesar",
      info: "n7",
      url: "https://i.goopics.net/4cd1yk.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/e05216a455e12de4976c31c1bd7b2469.png",
    },
    {
      title: "L'arnaqueur",
      info: "Lilan",
      url: "https://i.goopics.net/pr6ily.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/8a0a3616e75c7b348a5635028c44a78c.png",
    },
    {
      title: "Opération Portugal",
      info: "COMKRIS",
      url: "https://i.goopics.net/3bu7z3.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/04875d442af2ee88e3ed0a964a13af5c.png",
    },
    {
      title: "Seg Hard",
      info: "Alazul21",
      url: "https://i.goopics.net/3mkerw.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/e58dde332fdefbb2e58c85578a10cc02.png",
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
      title: "HECTOR",
      info: "Sims_Artist1",
      url: "https://i.goopics.net/9k1itq.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/a4a8cf1af1c1593a91054f7561a2e456.png",
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
      url: "https://i.goopics.net/h0n7p2.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/17c97ce3a7cc47bf9f65841d139ef3a1.png",
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
      url: "https://i.goopics.net/dkeq00.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/ed579de61784a5f9ab3d80f7d4342045.png",
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
      info: "Raf",
      url: "https://i.goopics.net/e1qwxk.png",
      import:
        "https://zone52.wizebot.tv/gl-pancarte/imgs/73fef334848ef2478346eec72cff8dec.png",
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

  useState(() => {
    setTotalAffiches(projects.length);
  }, []);

  return (
    <main className="projects-div-affiche">
      <input
        className="search-bar"
        type="text"
        placeholder="Rechercher une affiche par Titre ou Créateur..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <p className="compteur">Nombre d'affiches : {totalAffiches}</p>
      <a
        className="tuto"
        href="https://www.youtube.com/watch?v=xFbs4_-sOig"
        target="_blank"
        rel="noreferrer"
      >
        Comment importer en jeu ?
      </a>
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
