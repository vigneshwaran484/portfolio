import type { SkillGroup } from "../types";

export const skills: SkillGroup[] = [
  {
    code: "LANG",
    name: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "C++", "Java", "Dart", "Bash"],
  },
  {
    code: "AI",
    name: "AI / Agents",
    items: ["ReAct loops", "Tool / function calling", "Ollama", "LangChain", "RAG / FAISS", "MediaPipe", "OpenCV", "scikit-learn"],
  },
  {
    code: "BACK",
    name: "Backend",
    items: ["FastAPI", "Node.js / Express", "PostgreSQL", "SQLite", "Redis", "Firebase", "Linux IPC", "REST / JWT auth"],
  },
  {
    code: "FRONT",
    name: "Frontend",
    items: ["React", "Next.js", "Redux Toolkit / RTK Query", "Flutter", "Tailwind CSS", "Vite"],
  },
  {
    code: "SEC",
    name: "Security / DevSecOps",
    items: ["Semgrep (SAST)", "Gitleaks", "Trivy", "OWASP ZAP (DAST)", "Terraform", "nmap", "netcat / openssl", "BlackArch"],
  },
  {
    code: "INFRA",
    name: "Infra / Tooling",
    items: ["Docker", "Git", "GitHub Actions", "Netlify", "Railway", "Render", "Azure"],
  },
];
