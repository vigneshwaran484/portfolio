import type { ReactNode } from "react";
import { profile } from "../../data/profile";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { GitHubIcon, LinkedInIcon, MailIcon, FileIcon, PhoneIcon, ArrowRightIcon, CodeIcon } from "../ui/Icons";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-site px-4 py-20 sm:px-6 sm:py-28" aria-labelledby="contact-title">
      <Card className="relative overflow-hidden px-6 py-12 sm:px-12 sm:py-16">
        <div className="bg-grid" aria-hidden="true" />
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <p className="mb-3 font-mono text-[0.78rem] text-txt-2">
              <span className="text-accent">06.</span> ~/contact
            </p>
            <h2 id="contact-title" className="text-3xl font-semibold tracking-tight text-txt-0 sm:text-4xl">
              Let's build something.
            </h2>
            <p className="mt-3 max-w-md text-[15.5px] text-txt-1">
              Fastest route is email. I reply to anything about internships, collaboration, or the projects above.
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              <Button href={`mailto:${profile.email}`} variant="primary">
                <MailIcon width={15} height={15} /> Say hello <ArrowRightIcon width={15} height={15} />
              </Button>
              <Button href={profile.resume} download>
                <FileIcon width={15} height={15} /> Resume PDF
              </Button>
            </div>
          </div>
          <ul className="divide-y divide-line rounded-xl border border-line bg-surface-2">
            <Item icon={<MailIcon />} label="Email" href={`mailto:${profile.email}`} text={profile.email} />
            <Item icon={<PhoneIcon />} label="Phone" href={profile.phoneHref} text={profile.phone} />
            <Item icon={<GitHubIcon />} label="GitHub" href={profile.github} text={`github.com/${profile.handle}`} />
            <Item icon={<LinkedInIcon />} label="LinkedIn" href={profile.linkedin} text="in/vigneshwaran-c484" />
            <Item icon={<CodeIcon />} label="LeetCode" href={profile.leetcode} text="leetcode.com/u/Vignesh484" />
          </ul>
        </div>
      </Card>
    </section>
  );
}

function Item({ icon, label, href, text }: { icon: ReactNode; label: string; href: string; text: string }) {
  const ext = /^https?:\/\//.test(href);
  return (
    <li>
      <a
        href={href}
        target={ext ? "_blank" : undefined}
        rel={ext ? "noopener noreferrer" : undefined}
        className="group flex items-center gap-4 px-5 py-3.5 transition-colors hover:bg-surface"
      >
        <span className="text-txt-2 transition-colors group-hover:text-accent" aria-hidden="true">
          {icon}
        </span>
        <span className="min-w-0">
          <span className="block text-[0.72rem] text-txt-2">{label}</span>
          <span className="block truncate font-mono text-[0.84rem] text-txt-0">{text}</span>
        </span>
      </a>
    </li>
  );
}
