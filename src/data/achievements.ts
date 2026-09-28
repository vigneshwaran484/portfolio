import type { Achievement, Certification } from "../types";

export const wins: Achievement[] = [
  { title: "1st place", detail: "REC TITANIUM 2026, Smart City Debug War Room", year: "2026" },
  { title: "Finalist", detail: "StartUp TN Tourism Hackathon" },
  { title: "3rd place", detail: "Spark Sync, St. Joseph's College of Engineering" },
  { title: "4th place", detail: "Codeathon, Chennai Institute of Technology" },
  { title: "Participant", detail: "Prompt-a-thon, VIT × Google Gemini" },
  { title: "Participant", detail: "Srinivasa Ramanujan Mathematics Competition" },
];

export const roles: Achievement[] = [
  { title: "Technical Lead", detail: "College technical symposium, 200+ attendees" },
  { title: "Microsoft Learn Student Ambassador", detail: "Candidate, applying for the December 2026 cycle" },
];

export const certifications: Certification[] = [
  { issuer: "Google Cloud", items: ["Engineer AI Agents with ADK (skill badge)", "MLOps for Generative AI"] },
  { issuer: "Microsoft Applied Skills", items: ["AI-Assisted Development with GitHub Copilot", "Generative AI in Azure Database for PostgreSQL"] },
  { issuer: "Oracle", items: ["OCI 2025 Certified Foundations Associate"] },
  { issuer: "NPTEL", items: ["Python for Data Science (Elite + Silver)", "Cloud Computing"] },
  { issuer: "Cisco Networking Academy", items: ["Introduction to Cybersecurity", "Operating Systems Basics", "Introduction to Modern AI", "Data Analytics Essentials"] },
  { issuer: "Infosys Springboard", items: ["Linux for Beginners"] },
  { issuer: "MongoDB", items: ["CRUD Operations", "Relational to Document Model", "MongoDB Basics"] },
  { issuer: "HackerRank", items: ["Python (Basic)", "SQL (Basic)"] },
];
