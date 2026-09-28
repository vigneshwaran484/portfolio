import { useEffect, useRef, useState } from "react";

/**
 * Marks an element as "in view" once, via IntersectionObserver.
 * Robustness rules:
 *  - The element starts visible in markup. The hidden state is only applied
 *    after mount, so no-JS clients and crawlers always see the content.
 *  - A safety timeout reveals the element even if the observer never fires.
 *  - Reduced-motion users skip the hidden state entirely.
 */
export function useReveal<T extends HTMLElement>(safetyMs = 1500) {
  const ref = useRef<T>(null);
  const [state, setState] = useState<"idle" | "hidden" | "in">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      setState("in");
      return;
    }
    // Already on screen at mount: don't hide it, just fade in next frame.
    const rect = el.getBoundingClientRect();
    const onScreen = rect.top < window.innerHeight && rect.bottom > 0;
    setState(onScreen ? "in" : "hidden");
    if (onScreen) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setState("in");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -40px 0px", threshold: 0.05 },
    );
    io.observe(el);
    const t = window.setTimeout(() => {
      setState("in");
      io.disconnect();
    }, safetyMs + 4000);
    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, [safetyMs]);

  return { ref, className: state === "hidden" ? "reveal reveal--hidden" : state === "in" ? "reveal reveal--in" : "" };
}
