import type { ReactNode } from "react";
import { profile } from "../../data/profile";

/* Tiny token helpers so the snippet reads like highlighted source. */
const K = ({ children }: { children: ReactNode }) => <span className="syn-key">{children}</span>;
const P = ({ children }: { children: ReactNode }) => <span className="syn-prop">{children}</span>;
const S = ({ children }: { children: string }) => <span className="syn-str">"{children}"</span>;
const N = ({ children }: { children: ReactNode }) => <span className="syn-num">{children}</span>;
const U = ({ children }: { children: ReactNode }) => <span className="syn-punc">{children}</span>;
const C = ({ children }: { children: ReactNode }) => <span className="syn-comment">{children}</span>;

const Line = ({ children, indent = 0 }: { children?: ReactNode; indent?: number }) => (
  <span className="code-line">
    {"  ".repeat(indent)}
    {children}
    {"\n"}
  </span>
);

const StrList = ({ name, items }: { name: string; items: string[] }) => (
  <>
    <Line indent={1}>
      <P>{name}</P>
      <U>: [</U>
    </Line>
    {items.map((it) => (
      <Line key={it} indent={2}>
        <S>{it}</S>
        <U>,</U>
      </Line>
    ))}
    <Line indent={1}>
      <U>],</U>
    </Line>
  </>
);

/**
 * Hero "editor window". Every value is read from profile.ts, so the snippet
 * never drifts from the rest of the page. Screen readers get the same facts
 * as a plain list via the visually hidden block below.
 */
export default function CodeWindow() {
  const cgpa = profile.education[0].note.replace(/[^\d.]/g, "");
  return (
    <figure className="card code-window w-full min-w-0" aria-label="Profile summary as code">
      <div className="flex items-center gap-3 border-b border-line bg-surface-2 px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
        </div>
        <span className="rounded-md border border-line bg-surface px-2 py-0.5 text-[0.72rem] text-txt-1">about.ts</span>
        <span className="ml-auto text-[0.68rem] text-txt-2">TypeScript</span>
      </div>

      <pre className="overflow-x-auto py-4 text-txt-0" aria-hidden="true">
        <code>
          <Line>
            <C>// {profile.location}. Open to internships.</C>
          </Line>
          <Line>
            <K>export const</K> <P>engineer</P> <U>=</U> <U>{"{"}</U>
          </Line>
          <Line indent={1}>
            <P>name</P>
            <U>:</U> <S>{profile.name}</S>
            <U>,</U>
          </Line>
          <Line indent={1}>
            <P>role</P>
            <U>:</U> <S>{profile.tagline}</S>
            <U>,</U>
          </Line>
          <Line indent={1}>
            <P>cgpa</P>
            <U>:</U> <N>{cgpa}</N>
            <U>,</U>
          </Line>
          <StrList name="education" items={profile.education.map((e) => e.short)} />
          <StrList name="focus" items={profile.focus} />
          <StrList name="building" items={profile.currentlyBuilding} />
          <StrList name="openTo" items={profile.openTo} />
          <Line>
            <U>{"}"}</U> <K>as const</K>
            <U>;</U>
            <span className="caret" />
          </Line>
        </code>
      </pre>

      <ul className="sr-only">
        {profile.education.map((e) => (
          <li key={e.school}>
            {e.degree}, {e.school} ({e.note})
          </li>
        ))}
        <li>Focus: {profile.focus.join(", ")}</li>
        <li>Currently building: {profile.currentlyBuilding.join("; ")}</li>
        <li>Open to: {profile.seeking}</li>
      </ul>

      <figcaption className="flex items-center justify-between border-t border-line bg-surface-2 px-4 py-1.5 text-[0.66rem] text-txt-2" aria-hidden="true">
        <span className="inline-flex items-center gap-1.5 text-ok">
          <span className="h-1.5 w-1.5 rounded-full bg-ok" /> main
        </span>
        <span>UTF-8 · LF · Ln {14 + profile.openTo.length + profile.education.length + profile.focus.length + profile.currentlyBuilding.length}</span>
      </figcaption>
    </figure>
  );
}
