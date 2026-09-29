/**
 * Security, open source and practice stats. Numbers are snapshots:
 * update them when they change (last checked 2026-09-29).
 * PR states come from GitHub, not the OSCG dashboard (which counts
 * quality-passed PRs as merged before maintainers actually merge them).
 */

export interface Contribution {
  repo: string;
  title: string;
  state: "merged" | "open";
  url: string;
  /** Merged PRs get a full summary; open ones render as a compact line. */
  summary?: string;
}

export const contributionsProgram = "Open Source Connect India (OSCG 2026)";

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
    repo: "KanishJebaMathewM/Truxify",
    title: "Enforce min/max lockDuration in AtomicSwap.openSwap",
    state: "merged",
    url: "https://github.com/KanishJebaMathewM/Truxify/pull/16696",
    summary:
      "The swap contract accepted a lock duration of zero, so a sender could refund immediately and the recipient never had a real window to claim. Added 1-hour and 30-day bounds, checked before the hash lock is consumed so a rejected call doesn't burn it.",
  },
  {
    repo: "AnthropicBots/hiero-bot-py",
    title: "Count a just-merged PR despite GitHub search lag",
    state: "open",
    url: "https://github.com/AnthropicBots/hiero-bot-py/pull/150",
  },
  {
    repo: "AnthropicBots/hiero-bot-py",
    title: "Rotate mentor assignment by audit-log counts instead of login hash",
    state: "open",
    url: "https://github.com/AnthropicBots/hiero-bot-py/pull/151",
  },
  {
    repo: "AnthropicBots/hiero-bot-py",
    title: "Revoke access for accounts missing from GitHub installations on sync",
    state: "open",
    url: "https://github.com/AnthropicBots/hiero-bot-py/pull/152",
  },
  {
    repo: "logeshv586-code/AIproductfactory",
    title: "Add a circuit breaker for remote LLM providers",
    state: "open",
    url: "https://github.com/logeshv586-code/AIproductfactory/pull/53",
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
