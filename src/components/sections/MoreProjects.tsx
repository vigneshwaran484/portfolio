import { more } from "../../data/projects";
import { profile } from "../../data/profile";
import Card from "../ui/Card";
import { ExternalIcon, FolderIcon, GitHubIcon } from "../ui/Icons";

export default function MoreProjects() {
  return (
    <section className="mx-auto max-w-site px-4 pb-20 sm:px-6 sm:pb-24" aria-labelledby="more-title">
      <div className="mb-6 flex items-center gap-4">
        <h3 id="more-title" className="text-lg font-semibold text-txt-0">
          Other builds
        </h3>
        <span className="h-px flex-1 bg-line" aria-hidden="true" />
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="font-mono text-[0.78rem] text-txt-2 transition-colors hover:text-accent">
          all repos →
        </a>
      </div>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {more.map((p, i) => (
          <Card key={p.name} as="li" interactive lift index={i} className="flex h-full flex-col p-5">
            <div className="flex items-start justify-between gap-3">
              <FolderIcon width={20} height={20} className="text-accent" />
              <div className="flex shrink-0 gap-3 text-txt-2">
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer" aria-label={`${p.name} live site`} className="transition-colors hover:text-accent">
                    <ExternalIcon width={16} height={16} />
                  </a>
                )}
                <a
                  href={p.repo ?? profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={p.repo ? `${p.name} source on GitHub` : `GitHub profile`}
                  className="transition-colors hover:text-accent"
                >
                  <GitHubIcon width={16} height={16} />
                </a>
              </div>
            </div>
            <h4 className="mt-4 text-base font-semibold text-txt-0">{p.name}</h4>
            <p className="mt-1.5 text-[14px] leading-relaxed text-txt-1">{p.tagline}</p>
            <p className="mt-auto pt-4 font-mono text-[0.72rem] text-txt-2">{p.stack.join(" · ")}</p>
          </Card>
        ))}
      </ul>
    </section>
  );
}
