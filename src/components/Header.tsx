import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glassmorphism'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold gradient-text">C. Vigneshwaran</h1>
          <div className="flex gap-2">
            <a
              href="https://github.com/vigneshwaran484"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-cyan-400 text-slate-300 hover:bg-purple-500/10 rounded-full transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/vigneshwaran-c-03b28239a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-cyan-400 text-slate-300 hover:bg-purple-500/10 rounded-full transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:cvickey484@gmail.com"
              className="p-2 hover:text-cyan-400 text-slate-300 hover:bg-purple-500/10 rounded-full transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="/vigneshwaran_resume.pdf"
              download
              className="p-2 hover:text-cyan-400 text-slate-300 hover:bg-purple-500/10 rounded-full transition-all duration-300"
              aria-label="Download Resume"
            >
              <FileText className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
