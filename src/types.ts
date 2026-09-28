export type ProjectStatus = "live" | "complete" | "in-progress" | "research";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface FeaturedProject {
  id: string;
  name: string;
  /** Short label shown in the card header, e.g. "AUTONOMOUS AGENT" */
  kind: string;
  status: ProjectStatus;
  /** One sentence framing the problem */
  problem: string;
  /** Architecture and approach, 2 to 3 sentences */
  approach: string;
  /** Concrete technical decisions, not stack tags */
  decisions: string[];
  stack: string[];
  /** Attribution note for team projects. Rendered verbatim, keep honest. */
  role?: string;
  live?: string;
  repo?: string;
  /** Extra links, e.g. paper draft */
  links?: ProjectLink[];
}

export interface MiniProject {
  name: string;
  tagline: string;
  stack: string[];
  live?: string;
  repo?: string;
  status?: ProjectStatus;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
  stack?: string[];
}

export interface SkillGroup {
  name: string;
  /** Short mono label shown before the group, e.g. "LANG" */
  code: string;
  items: string[];
}

export interface Achievement {
  title: string;
  detail: string;
  year?: string;
}

export interface Certification {
  issuer: string;
  items: string[];
}
