import { useEffect, useMemo, useState } from "react";
import { profile } from "../../data/profile";
import { useActiveSection } from "../../hooks/useActiveSection";
import ThemeToggle from "../ui/ThemeToggle";
import { CloseIcon, FileIcon, MenuIcon } from "../ui/Icons";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#security", label: "Security" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const ids = useMemo(() => links.map((l) => l.href.slice(1)), []);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={[
        "fixed inset-x-0 top-0 z-50 border-b border-transparent transition-colors duration-300",
        scrolled || open ? "nav--scrolled" : "",
      ].join(" ")}
      aria-label="Primary"
    >
      <div className="mx-auto flex h-14 max-w-site items-center justify-between px-4 sm:px-6">
        <a href="#top" className="group flex items-center gap-2.5 text-sm font-semibold text-txt-0" aria-label="Vigneshwaran C, back to top">
          <span
            className="grid h-7 w-7 place-items-center rounded-md border border-line-strong bg-surface font-mono text-[0.7rem] font-medium text-accent transition-colors group-hover:border-accent"
            aria-hidden="true"
          >
            &gt;_
          </span>
          <span className="font-mono tracking-tight">
            vigneshwaran<span className="text-txt-2">.c</span>
          </span>
        </a>

        <div className="flex items-center gap-2">
          <ul className="mr-3 hidden items-center gap-6 md:flex">
            {links.map((l) => {
              const isActive = active === l.href.slice(1);
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    aria-current={isActive ? "location" : undefined}
                    className={["nav-link text-[0.86rem]", isActive ? "nav-link--active" : ""].join(" ")}
                  >
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <a href={profile.resume} download className="btn hidden !h-9 !px-3 !text-[0.82rem] md:inline-flex">
            <FileIcon width={14} height={14} /> Resume
          </a>
          <ThemeToggle />
          <button
            type="button"
            className="icon-btn md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon width={16} height={16} /> : <MenuIcon width={16} height={16} />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-line md:hidden">
          <ul className="mx-auto flex max-w-site flex-col px-4 py-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={["block py-3 text-[0.95rem]", active === l.href.slice(1) ? "text-txt-0" : "text-txt-1"].join(" ")}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="border-t border-line">
              <a href={profile.resume} download className="flex items-center gap-2 py-3 text-[0.95rem] text-accent">
                <FileIcon width={15} height={15} /> Resume (PDF)
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
