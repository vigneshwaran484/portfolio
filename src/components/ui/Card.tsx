import type { ReactNode } from "react";
import { useReveal } from "../../hooks/useReveal";
import { usePointerFx } from "../../hooks/usePointerFx";

interface CardProps {
  children: ReactNode;
  /** Border highlight + pointer spotlight on hover */
  interactive?: boolean;
  /** Small upward lift on hover (use on clickable-feeling cards) */
  lift?: boolean;
  className?: string;
  /** Stagger index for the reveal delay */
  index?: number;
  as?: "div" | "article" | "section" | "li";
  id?: string;
}

export default function Card({ children, interactive = false, lift = false, className = "", index = 0, as: Tag = "div", id }: CardProps) {
  const reveal = useReveal<HTMLDivElement>();
  const spot = usePointerFx<HTMLDivElement>();

  const setRef = (el: HTMLDivElement | null) => {
    (reveal.ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
    (spot.ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
  };

  return (
    <Tag
      id={id}
      ref={setRef as never}
      onPointerMove={interactive ? (spot.onPointerMove as never) : undefined}
      style={{ transitionDelay: reveal.className.includes("reveal") ? `${Math.min(index * 60, 300)}ms` : undefined }}
      className={["card", interactive ? "card--interactive" : "", lift ? "card--lift" : "", reveal.className, className]
        .filter(Boolean)
        .join(" ")}
    >
      {interactive && <span className="card-spot" aria-hidden="true" />}
      {children}
    </Tag>
  );
}
