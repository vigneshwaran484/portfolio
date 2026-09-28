import { skills } from "../../data/skills";
import Card from "../ui/Card";
import SectionHeader from "../ui/SectionHeader";
import Tag from "../ui/Tag";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-site px-4 py-20 sm:px-6 sm:py-24" aria-labelledby="skills-title">
      <SectionHeader
        id="skills-title"
        index="04"
        label="skills"
        title="Tech stack"
        blurb="Grouped by where they sit in a system. Depth varies: the AI and backend rows are where most of my project time goes."
      />
      <Card className="p-0">
        <dl className="divide-y divide-line">
          {skills.map((g) => (
            <div key={g.code} className="grid gap-3 px-5 py-5 sm:grid-cols-[180px_1fr] sm:items-center sm:gap-6 sm:px-7">
              <dt className="text-[0.92rem] font-medium text-txt-0">{g.name}</dt>
              <dd className="flex flex-wrap gap-1.5">
                {g.items.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Card>
    </section>
  );
}
