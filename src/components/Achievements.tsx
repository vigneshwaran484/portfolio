import { Trophy, Award } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      title: "Software Hackathon Club in College",
      award: "3rd Prize",
    },
    {
      title: "Robotics club in College",
      award: "3rd Prize",
    },
    {
      title: "Coding competition by Amirta College",
      award: "3rd Prize",
    },
    {
      title: "Ideathon by St josephs college of engineering",
      award: "Top 15",
    },
    {
      title: "Codeathon by CIT college",
      award: "4th Place",
    },
    {
      title: "Spark Sync by St josephs college of engineering",
      award: "3rd Prize",
    },
    {
      title: "Srinivasa Ramanujam Maths competition",
      award: "National Level Participation",
    },
  ];

  const hackathons = [
    "Prompt-a-thon by Google and Vit Chennai",
    "Hack to the future by Easwari Engineering college",
    "Ideathon by St josephs college of engineering",
    "Codeathon by CIT college",
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-12 animate-fade-in">
          <Trophy className="w-8 h-8 text-cyan-400" />
          <h2 className="text-4xl font-bold text-slate-100">Achievements & Hackathons</h2>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-2 animate-fade-in">
            <Award className="w-6 h-6 text-cyan-400" />
            Competition Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="glassmorphism p-6 rounded-xl hover:shadow-lg hover:shadow-purple-500/20 transition-all hover:scale-[1.02] animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="text-lg font-semibold text-slate-100 mb-2">
                  {achievement.title}
                </h4>
                <p className="text-cyan-400 font-bold">{achievement.award}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-2 animate-fade-in">
            <Code2 className="w-6 h-6 text-cyan-400" />
            Hackathons Participated
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {hackathons.map((hackathon, index) => (
              <div
                key={index}
                className="glassmorphism p-5 rounded-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-slate-300 font-medium">{hackathon}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Code2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m18 16 4-4-4-4" />
      <path d="m6 8-4 4 4 4" />
      <path d="m14.5 4-5 16" />
    </svg>
  );
}
