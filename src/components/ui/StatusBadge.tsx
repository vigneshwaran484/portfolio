import type { ProjectStatus } from "../../types";

const config: Record<ProjectStatus, { label: string; className: string }> = {
  live: { label: "live", className: "text-ok pill--pulse" },
  complete: { label: "complete", className: "text-accent" },
  "in-progress": { label: "in progress", className: "text-warn" },
  research: { label: "research", className: "text-violet" },
};

export default function StatusBadge({ status }: { status: ProjectStatus }) {
  const { label, className } = config[status];
  return (
    <span className={`pill ${className}`}>
      <span className="pill__dot" aria-hidden="true" />
      {label}
    </span>
  );
}
