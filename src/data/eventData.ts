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
  category: 'Startup' | 'Recruiter' | 'Sponsor' | 'University';
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
    speakers: ["sp6", "sp7", "sp8", "sp9", "sp10"]
  },
  {
    id: "synapse-futur",
    title: "Synapse du Futur : ESEN Talent Network",
    time: "12:00 — 13:00",
    description: "Construire un réseau de talents pour soutenir l’écosystème IA et créer des ponts entre étudiants, experts et entreprises.",
    speakers: ["sp5", "sp6", "sp9"]
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
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mehdi"
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
    name: "Dr. Fatima El Khoury",
    title: "Legal Expert — Digital Rights Foundation",
    bio: "",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima"
  }
];

export const exhibitors: Exhibitor[] = [
  {
    id: "ex1",
    name: "EY",
    tagline: "Enterprise analytics solutions",
    category: "Startup",
    booth: "A1",
    logo: "src/assets/EY.png",
    website: "https://example.com",
    contact: "contact@aianalytics.com",
    description: "Leading provider of AI-powered business intelligence and predictive analytics platforms for enterprises."
  },
  {
    id: "ex2",
    name: "Ministére des Technologies de la communication",
    tagline: "Cloud infrastructure & AI deployment",
    category: "Sponsor",
    booth: "A2",
    logo: "src/assets/minis.png",
    website: "https://example.com",
    contact: "info@cloudtech.com",
    description: "Scalable cloud infrastructure solutions designed for AI workloads and machine learning applications."
  },
  {
    id: "ex3",
    name: "Netcom Tunisia",
    tagline: "Connecting tech talent with opportunity",
    category: "Recruiter",
    booth: "B1",
    logo: "src/assets/Netcom Tunisia.png",
    website: "https://example.com",
    contact: "careers@talenthub.com",
    description: "Premier recruitment agency specializing in AI, data science, and tech roles across MENA region."
  },
  {
    id: "ex4",
    name: "Nety",
    tagline: "Advancing AI research & education",
    category: "University",
    booth: "B2",
    logo: "src/assets/nety.png",
    website: "https://example.com",
    contact: "research@esen.tn",
    description: "Leading research laboratory focusing on machine learning, computer vision, and natural language processing."
  },
  {
    id: "ex5",
    name: "roundesk",
    tagline: "Real-time data processing",
    category: "Startup",
    booth: "A3",
    logo: "src/assets/roundesk.png",
    website: "https://example.com",
    contact: "hello@datastream.io",
    description: "Next-generation streaming analytics platform for real-time business insights and decision-making."
  },
  {
    id: "ex6",
    name: "S2T",
    tagline: "AI security & compliance",
    category: "Startup",
    booth: "A4",
    logo: "src/assets/S2T.png",
    website: "https://example.com",
    contact: "security@secureai.com",
    description: "Cybersecurity solutions powered by AI to protect enterprises from emerging digital threats."
  },
  {
    id: "ex7",
    name: "Sodino SICAR",
    tagline: "Venture capital for AI startups",
    category: "Sponsor",
    booth: "A5",
    logo: "src/assets/Sodino SICAR.png",
    website: "https://example.com",
    contact: "invest@innovatetech.vc",
    description: "Early-stage VC firm investing in promising AI and deep tech startups across Africa and Europe."
  },
  {
    id: "ex8",
    name: "UMA",
    tagline: "Tech hiring made simple",
    category: "Recruiter",
    booth: "B3",
    logo: "src/assets/UMA.png",
    website: "https://example.com",
    contact: "jobs@devrecruit.com",
    description: "AI-powered recruitment platform matching developers and data scientists with top companies."
  },
  {
    id: "ex9",
    name: "Wiki Start Up",
    tagline: "Engineering excellence",
    category: "University",
    booth: "B4",
    logo: "src/assets/Wiki Start Up.png",
    website: "https://example.com",
    contact: "contact@polytechnique.tn",
    description: "Premier engineering school offering specialized programs in AI, robotics, and computer science."
  },
 
];

export const sponsors: Sponsor[] = [
  {
    id: "s1",
    name: "TechCorp International",
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=TechCorp",
    tier: "Platinum",
    website: "https://example.com"
  },
  {
    id: "s2",
    name: "Innovation Partners",
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Innovation",
    tier: "Platinum",
    website: "https://example.com"
  },
  
];

export const galleryImages = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
  "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800",
  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800",
  "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800",
  "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
  "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800",
  "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800"
];
