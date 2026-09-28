import { experience } from "../../data/experience";
import Card from "../ui/Card";
import SectionHeader from "../ui/SectionHeader";
import Tag from "../ui/Tag";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-site px-4 py-20 sm:px-6 sm:py-24" aria-labelledby="experience-title">
      <SectionHeader id="experience-title" index="02" label="experience" title="Where I've worked" />
      <ol className="timeline space-y-6 pl-8 sm:pl-10">
        {experience.map((e, i) => (
          <li key={e.company + e.period} className="relative">
            <span
              className="absolute -left-8 top-7 h-[11px] w-[11px] rounded-full border-2 border-accent bg-bg sm:-left-10"
              aria-hidden="true"
            />
            <Card index={i} className="p-6 sm:p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-txt-0">{e.role}</h3>
                <span className="font-mono text-[0.76rem] text-txt-2">{e.period}</span>
              </div>
              <p className="mt-0.5 text-[0.92rem] text-accent">
                {e.company}
                {e.location && <span className="text-txt-2"> · {e.location}</span>}
              </p>
              <ul className="mt-4 space-y-2 text-[14.5px] leading-relaxed text-txt-1">
                {e.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3">
                    <span className="mt-[10px] h-1 w-1 shrink-0 rounded-full bg-txt-2" aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              {e.stack && (
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {e.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              )}
            </Card>
          </li>
        ))}
      </ol>
    </section>
  );
}
