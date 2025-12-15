import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-12 animate-fade-in">
          <Briefcase className="w-8 h-8 text-cyan-400" />
          <h2 className="text-4xl font-bold text-slate-100">Experience</h2>
        </div>
        <div className="glassmorphism p-8 rounded-xl hover:shadow-lg hover:shadow-purple-500/20 transition-all hover:-translate-y-2 animate-fade-in">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold text-slate-100 mb-2">
                ATRIBS Global Technology Solutions
              </h3>
              <p className="text-xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold">Internship</p>
            </div>
            <span className="text-slate-300 font-medium mt-2 md:mt-0">
              JUN 2025 - JUL 2025
            </span>
          </div>
          <p className="text-slate-300 leading-relaxed text-lg">
            Gained foundational knowledge in Embedded Systems and participated in an industrial visit to the IIT Madras Research Park
            and the Precision Engineering and Technology Centre. Observed practical demonstrations of integrated hardware–software
            systems and their application in real-world products.
          </p>
        </div>
      </div>
    </section>
  );
}
