/**
 * Security, open source and practice stats. Numbers are snapshots:
 * update them when they change (last checked 2026-09-28).
 */

export interface Contribution {
  repo: string;
  title: string;
  state: "merged" | "open";
  url: string;
  summary: string;
}

export const contributions: Contribution[] = [
  {
    repo: "AnthropicBots/hiero-bot-py",
    title: "Bound progression API calls and fix bot/maintainer messages",
    state: "merged",
    url: "https://github.com/AnthropicBots/hiero-bot-py/pull/140",
    summary:
      "Stopped a FastAPI GitHub bot from walking a repo's whole PR history on every eligibility check: capped pagination, at most 5 concurrent review fetches, a 5-minute per-user stats cache, and a partial-result flag when a cap is hit. Also skipped bot authors and de-duplicated role notices.",
  },
  {
    repo: "logeshv586-code/AIproductfactory",
    title: "Add a circuit breaker for remote LLM providers",
    state: "open",
    url: "https://github.com/logeshv586-code/AIproductfactory/pull/53",
    summary: "Fails fast when a remote LLM provider keeps erroring, instead of letting every request wait on timeouts.",
  },
];

export interface CtfEntry {
  event: string;
  result: string;
  detail: string;
  url: string;
}

export const ctf: CtfEntry[] = [
  {
    event: "Flag Hunt 2026",
    result: "Full clear, team CYBORK",
    detail:
      "I solved the web set myself: hidden DOM, console leaks, JWT decoding, a client-side login secret, localStorage privilege tampering, and a SQL-injection auth bypass.",
    url: "https://github.com/vigneshwaran484/Cyber-Security",
  },
  {
    event: "OverTheWire Bandit",
    result: "Levels 0–20 with writeups",
    detail: "SSH, file forensics, encodings, netcat and openssl, nmap port scanning, restricted shells and SUID escalation. Each writeup covers objective, concepts, commands and why.",
    url: "https://github.com/vigneshwaran484/bandit",
  },
];

export interface PracticeStat {
  value: string;
  label: string;
  detail: string;
  url: string;
}

export const practice: PracticeStat[] = [
  { value: "239", label: "LeetCode solved", detail: "144 easy · 79 medium · 16 hard", url: "https://leetcode.com/u/Vignesh484/" },
  { value: "1,614", label: "LeetCode contest rating", detail: "top 22.6%", url: "https://leetcode.com/u/Vignesh484/" },
  {
    value: "2,169",
    label: "SkillRack programs",
    detail: "Python, C, Java, C++, SQL",
    url: "https://www.skillrack.com/faces/resume.xhtml?id=506125&key=894e27d0773b7abdf6759f1cf5588fc459c733bb",
  },
];
