import { GraduationCap } from 'lucide-react';

export default function Education() {
  const education = [
    {
      institution: "St.Josephs's College Of Engineering, Semmancheri",
      degree: "BE Computer Science and Engineering",
      duration: "Aug 2024 — May 2028",
      grade: "1st year CGPA: 8.1",
    },
    {
      institution: "IIT Madras, Adayar",
      degree: "BS Data Science and Application",
      duration: "May 2024 - May 2028",
      grade: "1st year CGPA: 7.2",
    },
    {
      institution: "Devi Academy Senior Secondary School, Valasaravakkam",
      degree: "Higher Secondary",
      duration: "May 2024",
      grade: "92.2%",
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-12 animate-fade-in">
          <GraduationCap className="w-8 h-8 text-cyan-400" />
          <h2 className="text-4xl font-bold text-slate-100">Education</h2>
        </div>
        <div className="grid gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="glassmorphism p-8 rounded-xl hover:shadow-xl transition-all hover:scale-[1.02] hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-2xl font-bold text-slate-100 mb-2">
                {edu.institution}
              </h3>
              <p className="text-xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold mb-3">
                {edu.degree}
              </p>
              <div className="flex flex-wrap gap-4 text-slate-300">
                <span className="font-medium">{edu.duration}</span>
                <span className="text-cyan-400 font-semibold">{edu.grade}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
