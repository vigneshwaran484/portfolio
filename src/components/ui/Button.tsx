import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "default" | "primary" | "ghost";
  download?: boolean;
  external?: boolean;
  className?: string;
  ariaLabel?: string;
}

/* Literal class names so Tailwind's content scan keeps them. */
const variantClass = { default: "", primary: "btn--primary", ghost: "btn--ghost" } as const;

export default function Button({ href, children, variant = "default", download = false, external = false, className = "", ariaLabel }: ButtonProps) {
  const isExternal = external || /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      className={["btn", variantClass[variant], className].filter(Boolean).join(" ")}
      download={download || undefined}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
