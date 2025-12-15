import { Award } from 'lucide-react';

export default function Certificates() {
  const certificates = [
    "DSA using java by Infosys Springboard",
    "Ethical hacking by Great Learning",
    "Python Advanced by HackerRank",
    "Web development by Acmegrade",
    "AI for beginners by HP Life",
    "Cloud computing by NPTEL",
    "Introduction to IoT and Digital Transformation by Cisco",
    "MongoDB Basics for Students by MongoDB",
    "Programming Fundamentals using Python by Infosy",
  ];

  return (
    <section id="certificates" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-12 animate-fade-in">
          <Award className="w-8 h-8 text-cyan-400" />
          <h2 className="text-4xl font-bold text-slate-100">Certificates</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="glassmorphism p-6 rounded-xl hover:shadow-lg hover:shadow-purple-500/20 transition-all hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${(index % 6) * 0.1}s` }}
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-lg mt-1 flex-shrink-0">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <p className="text-slate-300 font-medium leading-relaxed flex-1">
                  {certificate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
