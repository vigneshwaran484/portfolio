export default function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-sm border-t border-purple-500/20 text-slate-300 py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-slate-400">
          Built with React, TypeScript, and Tailwind CSS
        </p>
        <p className="text-slate-500 mt-2">
          &copy; {new Date().getFullYear()} C. Vigneshwaran. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
