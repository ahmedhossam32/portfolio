import { useEffect, useRef, useState } from "react";
import { Code2, GitBranch, Trophy, GraduationCap } from "lucide-react";

const stats = [
  {
    icon: Code2,
    value: 10,
    suffix: "+",
    label: "Projects Built",
    desc: "Backend & full-stack systems",
    color: "text-purple-400",
    glow: "from-purple-500/30 to-transparent",
  },
  {
    icon: Trophy,
    value: 300,
    suffix: "+",
    label: "LeetCode Problems",
    desc: "DSA & problem solving",
    color: "text-blue-400",
    glow: "from-blue-500/30 to-transparent",
  },
  {
    icon: GitBranch,
    value: 18,
    suffix: "+",
    label: "GitHub Repos",
    desc: "Real-world projects",
    color: "text-purple-400",
    glow: "from-purple-500/30 to-transparent",
  },
  {
    icon: GraduationCap,
    value: 4,
    suffix: " yrs",
    label: "Computer Science",
    desc: "Academic foundation",
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
        const duration = 1000;
        const step = 16;
        const increment = value / (duration / step);

        const timer = setInterval(() => {
          start += increment;
          if (start >= value) {
            setCount(value);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, step);

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
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[500px] h-[250px] bg-purple-500/10 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">

        {/* TITLE */}
        <div className="text-center mb-14 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Experience & Achievements
          </h2>
          <p className="text-gray-400 mt-3 text-sm md:text-base max-w-2xl mx-auto">
            A snapshot of my journey in backend engineering and software
            development.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10">

          {stats.map((stat, i) => {
            const Icon = stat.icon;

            return (
              <div
                key={i}
                className="
                  relative group
                  rounded-2xl md:rounded-3xl
                  p-4 md:p-8
                  bg-slate-900/60
                  border border-white/10
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:shadow-[0_20px_60px_-30px_rgba(168,85,247,0.4)]
                "
              >
                {/* top accent */}
                <div
                  className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${stat.glow}`}
                />

                {/* hover glow */}
                <div
                  className={`
                    absolute inset-0 rounded-3xl opacity-0
                    group-hover:opacity-100 transition
                    bg-gradient-to-b ${stat.glow}
                  `}
                />

                {/* icon */}
                <div
                  className="
                    relative z-10
                    w-10 h-10 md:w-14 md:h-14
                    mb-3 md:mb-6
                    flex items-center justify-center
                    rounded-lg md:rounded-xl
                    bg-slate-800/80
                    border border-white/10
                  "
                >
                  <Icon
                    size={18}
                    className={`${stat.color} md:hidden`}
                  />
                  <Icon
                    size={30}
                    className={`${stat.color} hidden md:block`}
                  />
                </div>

                {/* value */}
                <h3 className="relative z-10 text-2xl md:text-4xl font-bold text-white">
                  <CountUpNumber value={stat.value} />
                  {stat.suffix}
                </h3>

                {/* label */}
                <p className="relative z-10 text-gray-300 mt-1 text-sm md:text-base font-medium">
                  {stat.label}
                </p>

                {/* description (shorter on mobile) */}
                <p className="relative z-10 text-gray-500 text-xs md:text-sm mt-0.5 md:mt-1">
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
