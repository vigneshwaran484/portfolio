import { profile } from "../../data/profile";
import { featured, more } from "../../data/projects";
import { experience } from "../../data/experience";
import { wins } from "../../data/achievements";
import Button from "../ui/Button";
import CodeWindow from "./CodeWindow";
import { GitHubIcon, LinkedInIcon, MailIcon, FileIcon } from "../ui/Icons";

/** CSS-driven staggered entrance (transform only). See .hero-in in theme.css. */
const d = (ms: number) => ({ ["--d" as string]: `${ms}ms` });

const metrics = [
  { v: profile.education[0].note.replace(/[^\d.]/g, ""), l: "CGPA" },
  { v: String(featured.length + more.length), l: "Projects built" },
  { v: String(experience.length), l: "Internships" },
  { v: String(wins.filter((w) => w.title !== "Participant").length), l: "Hackathon placings" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-28 sm:pb-24 sm:pt-36" aria-labelledby="hero-title">
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-glow" aria-hidden="true" />

      <div className="mx-auto grid max-w-site items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <div className="min-w-0">
          <p className="hero-in pill pill--pulse mb-6 text-ok" style={d(0)}>
            <span className="pill__dot" aria-hidden="true" />
            Open to internships
          </p>

          <p className="hero-in mb-2 font-mono text-sm text-txt-2" style={d(40)}>
            <span className="text-accent">$</span> whoami
          </p>
          <h1 id="hero-title" className="hero-in text-4xl font-bold tracking-tight text-txt-0 sm:text-5xl md:text-6xl" style={d(80)}>
            {profile.name}
          </h1>
          <p className="hero-in mt-3 text-xl font-medium text-txt-1 sm:text-2xl" style={d(120)}>
            {profile.tagline}
          </p>

          <p className="hero-in mt-6 max-w-xl text-[15.5px] leading-relaxed text-txt-1" style={d(180)}>
            {profile.summary}
          </p>

          <div className="hero-in mt-8 flex flex-wrap gap-2.5" style={d(240)}>
            <Button href={profile.resume} variant="primary" download ariaLabel="Download resume PDF">
              <FileIcon width={15} height={15} /> Resume
            </Button>
            <Button href={profile.github} ariaLabel="GitHub profile">
              <GitHubIcon width={15} height={15} /> GitHub
            </Button>
            <Button href={profile.linkedin} ariaLabel="LinkedIn profile">
              <LinkedInIcon width={15} height={15} /> LinkedIn
            </Button>
            <Button href={`mailto:${profile.email}`} variant="ghost" ariaLabel="Send email">
              <MailIcon width={15} height={15} /> Email
            </Button>
          </div>

          <dl className="hero-in mt-10 grid max-w-xl grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-6 sm:grid-cols-4" style={d(300)}>
            {metrics.map((m) => (
              <div key={m.l} className="flex flex-col">
                <dt className="mt-0.5 text-[0.78rem] text-txt-2">{m.l}</dt>
                <dd className="order-first font-mono text-2xl font-medium tabular-nums text-txt-0">{m.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-in min-w-0" style={d(160)}>
          <CodeWindow />
        </div>
      </div>
    </section>
  );
}
