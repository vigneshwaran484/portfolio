import type { FeaturedProject } from "../../types";
import Card from "../ui/Card";
import StatusBadge from "../ui/StatusBadge";
import Tag from "../ui/Tag";
import { ExternalIcon, GitHubIcon } from "../ui/Icons";

function Label({ children }: { children: string }) {
  return <dt className="mb-1.5 font-mono text-[0.7rem] uppercase tracking-[0.08em] text-txt-2">{children}</dt>;
}

export default function FeaturedProjectCard({ p, index }: { p: FeaturedProject; index: number }) {
  return (
    <Card as="article" interactive index={index} className="flex h-full flex-col p-6 sm:p-7">
      <header className="mb-5 flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-mono text-[0.72rem] text-accent">{p.kind.toLowerCase()}</p>
          <h3 className="mt-1 text-2xl font-semibold tracking-tight text-txt-0">{p.name}</h3>
        </div>
        <StatusBadge status={p.status} />
      </header>

      <dl className="space-y-5 text-[14.5px] leading-relaxed">
        <div>
          <Label>Problem</Label>
          <dd className="text-txt-0">{p.problem}</dd>
        </div>
        <div>
          <Label>Approach</Label>
          <dd className="text-txt-1">{p.approach}</dd>
        </div>
        <div>
          <Label>Key decisions</Label>
          <dd>
            <ol className="space-y-2.5 text-txt-1">
              {p.decisions.map((d, i) => (
                <li key={i} className="grid grid-cols-[1.6rem_1fr]">
                  <span className="pt-[3px] font-mono text-[0.72rem] text-accent" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{d}</span>
                </li>
              ))}
            </ol>
          </dd>
        </div>
        {p.role && (
          <div className="rounded-lg border border-line bg-surface-2 px-4 py-3">
            <Label>My role</Label>
            <dd className="text-[13.5px] text-txt-1">{p.role}</dd>
          </div>
        )}
      </dl>

      <div className="mb-6 mt-6 flex flex-wrap gap-1.5">
        {p.stack.map((s) => (
          <Tag key={s}>{s}</Tag>
        ))}
      </div>

      <footer className="mt-auto flex flex-wrap items-center gap-5 border-t border-line pt-5 text-[0.85rem] font-medium">
        {p.live && (
          <a href={p.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-txt-0 transition-colors hover:text-accent">
            <ExternalIcon width={14} height={14} /> Live demo
          </a>
        )}
        {p.repo && (
          <a href={p.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-txt-0 transition-colors hover:text-accent">
            <GitHubIcon width={14} height={14} /> Source code
          </a>
        )}
        {!p.repo && !p.live && <span className="text-txt-2">Private repository</span>}
        {p.links?.map((l) => (
          <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-txt-0 transition-colors hover:text-accent">
            <ExternalIcon width={14} height={14} /> {l.label}
          </a>
        ))}
      </footer>
    </Card>
  );
}
