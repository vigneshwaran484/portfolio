import { contributions, ctf, practice } from "../../data/security";
import Card from "../ui/Card";
import SectionHeader from "../ui/SectionHeader";
import { ArrowRightIcon, GitHubIcon } from "../ui/Icons";

function Heading({ children }: { children: string }) {
  return <h3 className="mb-4 text-[0.95rem] font-semibold text-txt-0">{children}</h3>;
}

export default function Security() {
  return (
    <section id="security" className="mx-auto max-w-site px-4 py-20 sm:px-6 sm:py-24" aria-labelledby="security-title">
      <SectionHeader
        id="security-title"
        index="03"
        label="security"
        title="Security & open source"
        blurb="The other half of my week: CTFs on BlackArch, pull requests to other people's code, and daily problem solving."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        <Card index={0} className="p-6 sm:p-7">
          <Heading>Open-source contributions</Heading>
          <ul className="space-y-5">
            {contributions.map((c) => (
              <li key={c.url}>
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`pill ${c.state === "merged" ? "text-violet" : "text-ok"}`}>
                    <span className="pill__dot" aria-hidden="true" />
                    {c.state}
                  </span>
                  <span className="font-mono text-[0.76rem] text-txt-2">{c.repo}</span>
                </div>
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-start gap-1.5 font-medium text-txt-0 transition-colors hover:text-accent">
                  <GitHubIcon width={15} height={15} className="mt-[5px] shrink-0" />
                  {c.title}
                </a>
                <p className="mt-1 text-[14px] leading-relaxed text-txt-1">{c.summary}</p>
              </li>
            ))}
          </ul>
        </Card>

        <Card index={1} className="p-6 sm:p-7">
          <Heading>Capture the flag</Heading>
          <ul className="space-y-5">
            {ctf.map((e) => (
              <li key={e.event}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <span className="font-medium text-txt-0">{e.event}</span>
                  <span className="font-mono text-[0.76rem] text-accent">{e.result}</span>
                </div>
                <p className="mt-1 text-[14px] leading-relaxed text-txt-1">{e.detail}</p>
                <a href={e.url} target="_blank" rel="noopener noreferrer" className="mt-1.5 inline-flex items-center gap-1 font-mono text-[0.76rem] text-txt-2 transition-colors hover:text-accent">
                  read the writeups <ArrowRightIcon width={12} height={12} />
                </a>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <ul className="mt-5 grid gap-4 sm:grid-cols-3">
        {practice.map((p, i) => (
          <Card key={p.label} as="li" interactive index={i} className="p-0">
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="block p-5">
              <span className="block font-mono text-2xl font-medium tabular-nums text-txt-0">{p.value}</span>
              <span className="mt-0.5 block text-[0.85rem] text-txt-1">{p.label}</span>
              <span className="mt-1 block font-mono text-[0.72rem] text-txt-2">{p.detail}</span>
            </a>
          </Card>
        ))}
      </ul>
    </section>
  );
}
