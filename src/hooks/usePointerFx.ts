import { useCallback, useRef } from "react";

const canHover = () => typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;

/**
 * Writes the pointer position into --mx/--my on the element (no React
 * state, no re-renders) for the card spotlight. No-ops on touch devices.
 */
export function usePointerFx<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const raf = useRef(0);

  const onPointerMove = useCallback((e: React.PointerEvent<T>) => {
    const el = ref.current;
    if (!el || !canHover()) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
    });
  }, []);

  return { ref, onPointerMove };
}
