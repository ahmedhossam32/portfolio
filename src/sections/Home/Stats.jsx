import { useEffect, useRef, useState } from "react";
import { Code2, GitBranch, Trophy, GraduationCap } from "lucide-react";

const stats = [
  {
    icon: Code2,
    value: 10,
    suffix: "+",
    label: "Projects Built",
    desc: "Full-stack & backend-focused systems",
    color: "text-purple-400",
    glow: "from-purple-500/30 to-transparent",
  },
  {
    icon: Trophy,
    value: 300,
    suffix: "+",
    label: "LeetCode Problems",
    desc: "Data structures & algorithms mastery",
    color: "text-blue-400",
    glow: "from-blue-500/30 to-transparent",
  },
  {
    icon: GitBranch,
    value: 18,
    suffix: "+",
    label: "GitHub Repositories",
    desc: "Clean architecture & real projects",
    color: "text-purple-400",
    glow: "from-purple-500/30 to-transparent",
  },
  {
    icon: GraduationCap,
    value: 4,
    suffix: " yrs",
    label: "Computer Science",
    desc: "Academic & practical foundation",
    color: "text-blue-400",
    glow: "from-blue-500/30 to-transparent",
  },
];

function CountUpNumber({ value }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        let start = 0;
        const duration = 1200;
        const stepTime = 16;
        const increment = value / (duration / stepTime);

        const timer = setInterval(() => {
          start += increment;
          if (start >= value) {
            setCount(value);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, stepTime);

        observer.disconnect();
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{count}</span>;
}

export default function Stats() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[300px] bg-purple-500/10 blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-8">

        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Experience & Achievements
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A snapshot of my journey in software engineering, backend development,
            and problem solving.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {stats.map((stat, i) => {
            const Icon = stat.icon;

            return (
              <div
                key={i}
                className="
                  relative group
                  rounded-3xl p-8
                  bg-slate-900/60
                  border border-white/10
                  backdrop-blur-xl
                  transition-all duration-500
                  hover:-translate-y-3
                  hover:shadow-[0_25px_80px_-30px_rgba(168,85,247,0.45)]
                "
              >
                <div
                  className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${stat.glow}`}
                />

                <div
                  className={`
                    absolute inset-0 rounded-3xl opacity-0
                    group-hover:opacity-100 transition
                    bg-gradient-to-b ${stat.glow}
                  `}
                />

                <div className="
                  relative z-10 w-14 h-14 mb-6
                  flex items-center justify-center
                  rounded-xl bg-slate-800/80
                  border border-white/10
                ">
                  <Icon size={30} className={stat.color} />
                </div>

                <h3 className="relative z-10 text-4xl font-bold text-white">
                  <CountUpNumber value={stat.value} />
                  {stat.suffix}
                </h3>

                <p className="relative z-10 text-gray-300 mt-2 font-medium">
                  {stat.label}
                </p>

                <p className="relative z-10 text-gray-500 text-sm mt-1">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
