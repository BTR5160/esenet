// ESENet 7th Edition Event Data

export interface Speaker {
  id: string;
  name: string;
  title: string;
  bio: string;
  photo: string;
}

export interface Panel {
  id: string;
  title: string;
  time: string;
  description: string;
  speakers: string[];
}

export interface Exhibitor {
  id: string;
  name: string;
  tagline: string;
  category: string;
  booth: string;
  logo: string;
  website: string;
  contact: string;
  description: string;
}

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  tier: 'Platinum' | 'Gold' | 'Silver';
  website: string;
}

export const panels: Panel[] = [
  {
    id: "synapse-fondamentale",
    title: "Synapse Fondamentale : Think, Regulate & Impact",
    time: "09:30 — 10:30",
    description: "Stratégies nationales, cadres éthiques et climat d’affaires pour une adoption responsable et performante de l’intelligence artificielle en Tunisie.",
    speakers: ["sp1", "sp2", "sp3", "sp4", "sp5"]
  },
  {
    id: "synapse-creatrice",
    title: "Synapse Créatrice : AI-preneurs",
    time: "10:30 — 11:30",
    description: "Parcours d’AI-preneurs qui révolutionnent leurs secteurs avec des solutions innovantes et des modèles économiques durables.",
    speakers: ["sp7", "sp8", "sp11" ,"sp12", "sp10","sp6"]
  },
  {
    id: "synapse-futur",
    title: "Synapse du Futur : ESEN Talent Network",
    time: "12:00 — 13:00",
    description: "Construire un réseau de talents pour soutenir l’écosystème IA et créer des ponts entre étudiants, experts et entreprises.",
    speakers: ["sp9","sp13", "sp14", "sp15", "sp16"]
  }
];

export const speakers: Speaker[] = [
  {
    id: "sp1",
    name: "Mme. Wala Turki",
    title: "Conseillère auprès du Ministre - Ministère des Technologies de la Communication",
    bio: "",
    photo: "src/assets/wala_turki.png"
  },
  {
    id: "sp2",
    name: "M. M’hamed Ben Abid",
    title: "Directeur Général Coopération du Climat des Affaires - Ministère de l’Economie et de la Planification",
    bio: "",
    photo: "src/assets/mhamed.png"
  },
  {
    id: "sp3",
    name: "M. Maher Lahmer ",
    title: "CTO - Facilis.ai Ex-Google, IBM",
    bio: "",
    photo: "src/assets/maher_lahmer.png"
  },
  {
    id: "sp4",
    name: "Mme. Senda Boukef",
    title: "Directrice Stratégie Technologique et Transformation - EY",
    bio: "",
    photo: "src/assets/senda_boukef.png"
  },
  {
    id: "sp5",
    name: "M. Hichem Besbes",
    title: "Professeur Sup’Com - Expert National Principal désigné par l’UNESCO",
    bio: "",
    photo: "src/assets/hichem_besbes.png"
  },
  {
    id: "sp6",
    name: "Amine Chouaieb",
    title: "CEO - Nety",
    bio: "",
    photo: "src/assets/Amine_Chouaieb.png"
  },
  {
    id: "sp7",
    name: "Samiha Selmani",
    title: "CEO - Sodino SICAR",
    bio: "",
    photo: "src/assets/Samiha_Selmani.png"
  },
  {
    id: "sp8",
    name: "M. Karim Ahres",
    title: "CEO - Netcom Tunisia",
    bio: "",
    photo: "src/assets/Karim_Ahres.png"
  },
  {
    id: "sp9",
    name: "M. Mondher Kebiri",
    title: "Business Development Manager - Roundesk",
    bio: "",
    photo: "src/assets/Mondher_Kebiri.png"
  },
  {
    id: "sp10",
    name: "Chiraz Arfaoui",
    title: "CEO - Wiki Start Up",
    bio: "",
    photo: "src/assets/chiraz_arfaoui.png"
  },
  {
    id: "sp11",
    name: "Aymen Chakhari",
    title: "Co-fondateur - Roundesk",
    bio: "",
    photo: "src/assets/aymen.png"
  },
  {
    id: "sp12",
    name: "Abdelkerim Rezgui",
    title: "CEO - BI4YOU",
    bio: "",
    photo: "src/assets/abdelkerim_rezgui.png" 
  },
  {
    id: "sp13",
    name: "Bassem Thabti",
    title: "CEO -  VIRTUALDEV",
    bio: "",
    photo: "src/assets/bassem.png" 
  },
  {
    id: "sp14",
    name: "Kamel Gazeh",
    title: "CTO - Qualipro",
    bio: "",
    photo: "src/assets/kamel.png" 
  },
  {
    id: "sp15",
    name: "Youssef Seghaier",
    title: "Technical Lead - Dar Blockchain",
    bio: "",
    photo: "src/assets/seghaier.png" 
  },
  {
    id: "sp16",
    name: "Youssouf MAIGA",
    title: "résident APNA France - Consultant DevOps",
    bio: "",
    photo: "src/assets/photo_youssouf_maiga.png" 
  }
];

export const exhibitors: Exhibitor[] = [
  {
    id: "ex1",
    name: "EY",
    tagline: "",
    category: "",
    booth: "",
    logo: "src/assets/EY.png",
    website: "",
    contact: "",
    description: ""
  },
  {
    id: "ex2",
    name: "Ministére des Technologies de la communication",
    tagline: "",
    category: "",
    booth: "",
    logo: "src/assets/minis.png",
    website: "",
    contact: "",
    description: ""
  },
  {
    id: "ex3",
    name: "Netcom Tunisia",
    tagline: "",
    category: "",
    booth: "",
    logo: "src/assets/Netcom Tunisia.png",
    website: "",
    contact: "",
    description: ""
  },
  {
    id: "ex4",
    name: "Nety",
    tagline: "",
    category: "",
    booth: "",
    logo: "src/assets/nety.png",
    website: "",
    contact: "",
    description: ""
  },
  {
    id: "ex5",
    name: "roundesk",
    tagline: "",
    category: "",
    booth: "",
    logo: "src/assets/roundesk.png",
    website: "",
    contact: "",
    description: ""
  },
  {
    id: "ex6",
    name: "S2T",
    tagline: "",
    category: "",
    booth: "",
    logo: "src/assets/S2T.png",
    website: "",
    contact: "",
    description: ""
  },
  {
    id: "ex7",
    name: "Sodino SICAR",
    tagline: "",
    category: "",
    booth: "",
    logo: "src/assets/Sodino SICAR.png",
    website: "",
    contact: "",
    description: ""
  },
  {
    id: "ex8",
    name: "UMA",
    tagline: "",
    category: "",
    booth: "",
    logo: "src/assets/UMA.png",
    website: "",
    contact: "",
    description: ""
  },
  {
    id: "ex9",
    name: "Wiki Start Up",
    tagline: "",
    category: "",
    booth: "",
    logo: "src/assets/wikistratup.png",
    website: "",
    contact: "",
    description: ""
  },
  {
    id: "ex10",
    name: "Heads app",
    tagline: "",
    category: "",
    booth: "",
    logo: "src/assets/headapp.avif",
    website: "",
    contact: "",
    description: ""
  },
  {
    id: "ex11",
    name: "Medianet",
    tagline: "",
    category: "",
    booth: "",
    logo: "src/assets/medianet.png",
    website: "",
    contact: "",
    description: ""
  },
  {
    id: "ex12",
    name: "Startup village",
    tagline: "",
    category: "",
    booth: "",
    logo: "src/assets/Startup village.png",
    website: "",
    contact: "",
    description: ""
  },
  {
    id: "ex13",
    name: "PwC",
    tagline: "",
    category: "",
    booth: "",
    logo: "src/assets/pwc.svg",
    website: "",
    contact: "",
    description: ""
  },
  {
    id: "ex14",
    name: "Qualipro",
    tagline: "",
    category: "",
    booth: "",
    logo: "src/assets/qualipro.png",
    website: "",
    contact: "",
    description: ""
  },
  {
    id: "ex15",
    name: "STB",
    tagline: "",
    category: "",
    booth: "",
    logo: "src/assets/stb.png",
    website: "",
    contact: "",
    description: ""
  },
  {
    id: "ex16",
    name: "Virtual Dev",
    tagline: "",
    category: "",
    booth: "",
    logo: "src/assets/Virtual Dev.png",
    website: "",
    contact: "",
    description: ""
  },
  {
    id: "ex17",
    name: "ATB",
    tagline: "",
    category: "",
    booth: "",
    logo: "src/assets/atb.png",
    website: "",
    contact: "",
    description: ""
  },
  {
    id: "ex18",
    name: "ATODD",
    tagline: "",
    category: "",
    booth: "",
    logo: "src/assets/logo_atodd-m6LDGWZJlWToG5lo.png.avif",
    website: "",
    contact: "",
    description: ""
  },
  {
    id: "ex19",
    name: "BI4You",
    tagline: "",
    category: "",
    booth: "",
    logo: "src/assets/BI4You.png",
    website: "",
    contact: "",
    description: ""
  },
  {
    id: "ex20",
    name: "Intech solutions",
    tagline: "",
    category: "",
    booth: "",
    logo: "src/assets/InTech.webp",
    website: "",
    contact: "",
    description: ""
  },
  {
    id: "ex21",
    name: "4InA technologie",
    tagline: "",
    category: "",
    booth: "",
    logo: "src/assets/logo4ina.d964e234.png",
    website: "",
    contact: "",
    description: ""
  },
  {
    id: "ex22",
    name: "Bee coders",
    tagline: "",
    category: "",
    booth: "",
    logo: "src/assets/Bee coders.png",
    website: "",
    contact: "",
    description: ""
  },
  {
    id: "ex23",
    name: "OpusLab",
    tagline: "",
    category: "",
    booth: "",
    logo: "src/assets/opus lab.webp",
    website: "",
    contact: "",
    description: ""
  },
  {
    id: "ex25",
    name: "TicDce",
    tagline: "",
    category: "",
    booth: "",
    logo: "src/assets/TicDce.png",
    website: "",
    contact: "",
    description: ""
  },
  {
    id: "ex26",
    name: "Epic Valor X",
    tagline: "",
    category: "",
    booth: "",
    logo: "src/assets/Epic Valor X.png",
    website: "",
    contact: "",
    description: ""
  },
  {
    id: "ex27",
    name: "La poste",
    tagline: "",
    category: "",
    booth: "",
    logo: "src/assets/La poste.png",
    website: "",
    contact: "",
    description: ""
  },
  {
    id: "ex28",
    name: "Agence Colis Postaux Tunis Carthage ",
    tagline: "",
    category: "",
    booth: "",
    logo: "src/assets/Agence Colis Postaux Tunis Carthage .png",
    website: "",
    contact: "",
    description: ""
  },
  {
    id: "ex29",
    name: "UMA PEE",
    tagline: "",
    category: "",
    booth: "",
    logo: "src/assets/UMA PEE.png",
    website: "",
    contact: "",
    description: ""
  },
  {
    id: "ex30",
    name: "BTE",
    tagline: "",
    category: "",
    booth: "",
    logo: "src/assets/BTE.png",
    website: "",
    contact: "",
    description: ""
  },
  {
    id: "ex31",
    name: "Slayton",
    tagline: "",
    category: "",
    booth: "",
    logo: "src/assets/Slayton.png",
    website: "",
    contact: "",
    description: ""
  },
  {
    id: "ex32",
    name: "Dar Blockchaine",
    tagline: "",
    category: "",
    booth: "",
    logo: "src/assets/dar blockchair.png.webp",
    website: "",
    contact: "",
    description: ""
  }
];




export const sponsors: Sponsor[] = [
  {
    id: "s1",
    name: "ATB",
    logo: "src/assets/atb.png",
    tier: "Platinum",
    website: "https://example.com"
  }
  
];

export const galleryImages = [
  "src/assets/8.jpg",
  "src/assets/1.jpg",
  "src/assets/6.jpg",
  "src/assets/3.jpg",
  "src/assets/4.jpg",
  "src/assets/5.jpg",
  
  "src/assets/7.jpg",
  "src/assets/2.jpg",
  
];
