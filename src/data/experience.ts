import type { Experience } from "../types";

export const experience: Experience[] = [
  {
    company: "Toeddro Adventures Pvt. Ltd.",
    role: "AI Automation & Data Science Intern",
    period: "Apr–Jul 2026",
    location: "Remote",
    bullets: [
      "Built a resumable three-stage lead pipeline in Python: search-based URL discovery, operator-site scraping, then domain-level dedup and phone/service normalisation. It collected roughly 450 unique adventure-operator leads for the ops team.",
      "Built Swift Mailer, a Node.js/Nodemailer outreach tool with CSV recipient import, an SMTP connection check, configurable send delays to stay under rate limits, and an abort switch.",
    ],
    stack: ["Python", "Requests", "BeautifulSoup", "Node.js", "Nodemailer"],
  },
  {
    company: "ATRIBS Global Technology Solutions",
    role: "Application Development Intern",
    period: "Jun–Jul 2025 · Dec 2025–Jan 2026",
    location: "Second term offered on merit",
    bullets: [
      "Built Police Akka: Firebase real-time streams for live incident state, GPS tracking for officer location, and a Groq-hosted LLM that gives citizens legal guidance.",
      "Presented the system architecture to Rockwell Automation mentors and incorporated their review into the data-flow design.",
    ],
    stack: ["Flutter", "Dart", "Firebase", "GPS", "Groq"],
  },
];
