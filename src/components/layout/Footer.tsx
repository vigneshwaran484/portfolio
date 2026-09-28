import { profile } from "../../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-site flex-col gap-3 px-4 py-8 text-[0.82rem] text-txt-2 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} {profile.name}. Designed and built with React, Vite and Tailwind.
        </p>
        <p className="font-mono text-[0.76rem]">
          <span className="text-accent">now:</span> <span className="text-txt-1">{profile.currentlyBuilding[0]}</span>
        </p>
      </div>
    </footer>
  );
}
