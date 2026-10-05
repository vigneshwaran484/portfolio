/**
 * Security, open source and practice stats. Numbers are snapshots:
 * update them when they change (last checked 2026-10-05).
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

/** Repos where only the merged-PR count is shown, with no per-PR claims. */
export interface CountedContribution {
  repo: string;
  merged: number;
  url: string;
}

export const contributionsProgram = "Open Source Connect India (OSCG 2026)";

export const contributions: Contribution[] = [
  {
    repo: "AnthropicBots/hiero-bot-py",
    title: "Bound progression API calls and fix bot/maintainer messages",
    state: "merged",
    url: "https://github.com/AnthropicBots/hiero-bot-py/pull/140",
    summary:
      "Stopped a FastAPI GitHub bot from walking a repo's whole PR history on every eligibility check: capped pagination, at most 5 concurrent review fetches, a 5-minute per-user stats cache, and a partial-result flag when a cap is hit.",
  },
  {
    repo: "AnthropicBots/hiero-bot-py",
    title: "Count a just-merged PR despite GitHub search lag",
    state: "merged",
    url: "https://github.com/AnthropicBots/hiero-bot-py/pull/150",
    summary:
      "Milestone celebrations were missed because GitHub Search hadn't indexed the merge yet. The bot now checks whether the merged PR is indexed and adds it to the count if not, before the stats are cached. Costs one extra search request per merge.",
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
    repo: "KanishJebaMathewM/Truxify",
    title: "Lazily create the OpenAI client so the voice service loads without a key",
    state: "merged",
    url: "https://github.com/KanishJebaMathewM/Truxify/pull/16935",
    summary:
      "A singleton built its OpenAI client at import time, so a missing API key crashed API startup and stopped two test suites from loading. The client is now created on first use, with a clear error only when a voice query runs.",
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
];

export const counted: CountedContribution[] = [
  {
    repo: "SatyamPandey-07/WorkSphere",
    merged: 11,
    url: "https://github.com/SatyamPandey-07/WorkSphere/pulls?q=is%3Apr+author%3Avigneshwaran484+is%3Amerged",
  },
];

/** Upstream merged PRs in total (excludes PRs into my own forks). */
export const mergedTotal = contributions.filter((c) => c.state === "merged").length + counted.reduce((n, c) => n + c.merged, 0);

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
  { value: "240", label: "LeetCode solved", detail: "144 easy · 80 medium · 16 hard", url: "https://leetcode.com/u/Vignesh484/" },
  { value: "1,614", label: "LeetCode contest rating", detail: "top 22.6%", url: "https://leetcode.com/u/Vignesh484/" },
  {
    value: "2,169",
    label: "SkillRack programs",
    detail: "Python, C, Java, C++, SQL",
    url: "https://www.skillrack.com/faces/resume.xhtml?id=506125&key=894e27d0773b7abdf6759f1cf5588fc459c733bb",
  },
];
