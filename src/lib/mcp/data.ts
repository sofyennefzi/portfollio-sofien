// Static portfolio content mirrored for MCP tools. Keep in sync with src/routes/index.tsx.

export const profile = {
  name: "Sofyen Nefzi",
  title: "Full-Stack Developer & AI Engineer",
  location: "Tunisia",
  bio: "Creative full-stack developer and AI engineer. Founder of AI4Digital and Brima Digital. National Student Entrepreneur (Étudiant-Entrepreneur) recognized by the University of Manouba and the Ministry of Higher Education.",
  website: "https://sofiennefzi.me/",
  email: "sofyennefzi@gmail.com",
  cvUrl: "/sofien-nefzi-cv.pdf",
};

export const experience = [
  { role: "Founder & AI Developer", company: "AI4Digital", url: "https://ai4digital.live" },
  { role: "Founder", company: "Brima Digital", url: "https://brimadigital.com" },
  { role: "Full-Stack Developer", company: "CNSS (Caisse Nationale de Sécurité Sociale)" },
  { role: "E-commerce Specialist", company: "Shop Tounsi" },
];

export const education = [
  "Master in E-Business — ESEN",
  "Licence in Business Computing — ESEN",
  "Baccalauréat Informatique",
];

export const recognition = {
  title: "National Student Entrepreneur Status (Étudiant-Entrepreneur)",
  issuer: "Université de la Manouba & Ministry of Higher Education",
  level: "Initiateur",
  period: "2025 – 2026",
};

export const projectCategories = [
  "Web Development",
  "Mobile",
  "Automation & AI",
  "Strategy & Marketing",
  "Tools & Scripts",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];
