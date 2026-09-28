import { useReveal } from "../../hooks/useReveal";

interface SectionHeaderProps {
  index: string;
  /** Short lowercase path shown in mono above the title, e.g. "projects" */
  label: string;
  title: string;
  blurb?: string;
  id: string;
}

export default function SectionHeader({ index, label, title, blurb, id }: SectionHeaderProps) {
  const reveal = useReveal<HTMLElement>();
  return (
    <header ref={reveal.ref} className={["mb-10 sm:mb-12", reveal.className].join(" ")}>
      <p className="mb-3 font-mono text-[0.78rem] text-txt-2">
        <span className="text-accent">{index}.</span> ~/{label}
      </p>
      <h2 id={id} className="text-3xl font-semibold tracking-tight text-txt-0 sm:text-4xl">
        {title}
      </h2>
      {blurb && <p className="mt-3 max-w-2xl text-[15.5px] text-txt-1">{blurb}</p>}
    </header>
  );
}
