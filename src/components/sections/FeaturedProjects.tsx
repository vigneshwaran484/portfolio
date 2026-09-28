import { featured } from "../../data/projects";
import SectionHeader from "../ui/SectionHeader";
import FeaturedProjectCard from "./FeaturedProjectCard";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="mx-auto max-w-site px-4 py-20 sm:px-6 sm:py-24" aria-labelledby="projects-title">
      <SectionHeader
        id="projects-title"
        index="01"
        label="projects"
        title="Selected work"
        blurb="Four systems I can whiteboard end to end. Each one lists the problem, the architecture, and the decisions I would defend in a design review."
      />
      <div className="grid gap-5 lg:grid-cols-2">
        {featured.map((p, i) => (
          <FeaturedProjectCard key={p.id} p={p} index={i} />
        ))}
      </div>
    </section>
  );
}
