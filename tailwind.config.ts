import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: {
          DEFAULT: "var(--surface)",
          2: "var(--surface-2)",
        },
        line: {
          DEFAULT: "var(--line)",
          strong: "var(--line-strong)",
        },
        txt: {
          0: "var(--text-0)",
          1: "var(--text-1)",
          2: "var(--text-2)",
        },
        accent: "var(--accent)",
        ok: "var(--ok)",
        warn: "var(--warn)",
        violet: "var(--violet)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      maxWidth: {
        site: "1120px",
      },
    },
  },
  plugins: [],
} satisfies Config;
