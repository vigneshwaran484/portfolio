import { wins, roles, certifications } from "../../data/achievements";
import Card from "../ui/Card";
import SectionHeader from "../ui/SectionHeader";

function Heading({ children }: { children: string }) {
  return <h3 className="mb-4 text-[0.95rem] font-semibold text-txt-0">{children}</h3>;
}

export default function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-site px-4 py-20 sm:px-6 sm:py-24" aria-labelledby="achievements-title">
      <SectionHeader id="achievements-title" index="05" label="achievements" title="Achievements & certifications" />
      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5">
          <Card index={0} className="p-6 sm:p-7">
            <Heading>Competitions</Heading>
            <ul className="divide-y divide-line">
              {wins.map((w) => (
                <li key={w.detail} className="grid grid-cols-[92px_1fr] gap-3 py-3 text-[14px] first:pt-0 last:pb-0 sm:grid-cols-[110px_1fr]">
                  <span className="font-mono text-[0.78rem] text-accent">{w.title}</span>
                  <span className="text-txt-0">
                    {w.detail}
                    {w.year && <span className="ml-2 font-mono text-[0.72rem] text-txt-2">{w.year}</span>}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
          <Card index={1} className="p-6 sm:p-7">
            <Heading>Roles</Heading>
            <ul className="divide-y divide-line">
              {roles.map((r) => (
                <li key={r.title} className="py-3 text-[14px] first:pt-0 last:pb-0">
                  <span className="font-medium text-txt-0">{r.title}</span>
                  <span className="text-txt-1"> · {r.detail}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
        <Card index={2} className="p-6 sm:p-7">
          <Heading>Certifications</Heading>
          <dl className="space-y-5">
            {certifications.map((c) => (
              <div key={c.issuer}>
                <dt className="font-mono text-[0.76rem] text-accent">{c.issuer}</dt>
                <dd>
                  <ul className="mt-1.5 space-y-1 text-[14px] text-txt-1">
                    {c.items.map((it) => (
                      <li key={it} className="flex gap-2.5">
                        <span className="text-txt-2" aria-hidden="true">
                          –
                        </span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </Card>
      </div>
    </section>
  );
}
