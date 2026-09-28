import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./Icons";

type Theme = "light" | "dark";

const current = (): Theme => (document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark");

/** Flips data-theme on <html>. The initial value is set by the inline script in index.html. */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => (typeof document === "undefined" ? "dark" : current()));

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* storage blocked: the toggle still works for this visit */
    }
  }, [theme]);

  const next = theme === "dark" ? "light" : "dark";
  return (
    <button type="button" className="icon-btn" onClick={() => setTheme(next)} aria-label={`Switch to ${next} theme`} title={`Switch to ${next} theme`}>
      {theme === "dark" ? <SunIcon width={16} height={16} /> : <MoonIcon width={16} height={16} />}
    </button>
  );
}
