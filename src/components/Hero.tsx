import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [particles, setParticles] = useState<{ id: number; left: number; delay: number }[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute float"
          style={{
            left: `${particle.left}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            backgroundColor: `rgba(${Math.random() > 0.5 ? '139, 92, 246' : '6, 182, 212'}, 0.5)`,
            borderRadius: '50%',
            animation: `float 6s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-100">
            C. Vigneshwaran
          </h1>
          <p className="text-2xl md:text-3xl font-semibold mb-8 h-12 flex items-center justify-center">
            <span className="gradient-text">Computer Science Student</span>
          </p>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
            Computer Science Engineering undergraduate with hands-on experience in Python and Java through internships, hackathons, and coding competitions. Focused on problem-solving and building practical software projects while strengthening core computer science fundamentals.</p>
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:-translate-y-1 glow-effect"
            >
              Get In Touch
            </a>
            <a
              href="/vigneshwaran_resume.pdf"
              download
              className="px-8 py-4 glassmorphism text-slate-100 font-semibold rounded-lg hover:shadow-lg transition-all hover:-translate-y-1"
            >
              Download Resume
            </a>
          </div>
          <a href="#education" className="inline-block animate-bounce">
            <ArrowDown className="w-8 h-8 text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
