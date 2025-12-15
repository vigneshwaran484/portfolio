import { Code2 } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "Java", "C", "C++", "C#", "JavaScript", "TypeScript", "PHP", "Dart"],
    },
    {
      category: "Web Technologies",
      skills: ["HTML", "CSS", "React", "TSX"],
    },
    {
      category: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-12 animate-fade-in">
          <Code2 className="w-8 h-8 text-cyan-400" />
          <h2 className="text-4xl font-bold text-slate-100">Technical Skills</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glassmorphism p-6 rounded-xl hover:shadow-lg hover:shadow-purple-500/20 transition-all hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-xl font-bold text-slate-100 mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-purple-600/30 text-slate-200 rounded-lg text-sm font-medium hover:bg-purple-600/50 transition-all border border-purple-500/30 hover:border-cyan-400/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
