import {
  Boxes,
  Workflow,
  TrendingUp,
  Puzzle,
  Layers,
  Shapes,
  Database,
  Cpu,
  Network,
  GitMerge,
  Server,
  GitBranch
} from "lucide-react";

export default function AboutFoundation() {
  const foundations = [
    { title: "Data Structures", icon: Boxes },
    { title: "Algorithms", icon: Workflow },
    { title: "Big-O Complexity", icon: TrendingUp },
    { title: "Object-Oriented Programming", icon: Puzzle },
    { title: "SOLID Principles", icon: Layers },
    { title: "Design Patterns", icon: Shapes },
    { title: "Database Design & SQL", icon: Database },
    { title: "Operating Systems Basics", icon: Cpu },
    { title: "Networking (HTTP / TCP-IP)", icon: Network },
    { title: "Concurrency & Async Programming", icon: GitMerge },
    { title: "System Design Fundamentals", icon: Server },
    { title: "Git & Version Control", icon: GitBranch }
  ];

  return (
    <section className="relative py-32 px-8 bg-slate-950 overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[300px] bg-purple-500/10 blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto space-y-20">

        {/* ================= TITLE ================= */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Computer Science Foundation
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Strong understanding of core computer science principles that power
            scalable, maintainable, and high-performance software systems.
          </p>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

          {foundations.map(({ title, icon: Icon }) => (
            <div
              key={title}
              className="
                relative group
                h-[120px]
                rounded-3xl
                bg-slate-900/60
                border border-white/10
                backdrop-blur-xl
                flex flex-col items-center justify-center
                transition-all duration-500
                hover:-translate-y-3
                hover:shadow-[0_25px_80px_-30px_rgba(168,85,247,0.45)]
              "
            >
              {/* top gradient line */}
              <div className="
                absolute inset-x-0 top-0 h-[2px]
                bg-gradient-to-r from-purple-500/40 via-blue-500/40 to-transparent
              " />

              {/* hover glow */}
              <div
                className="
                  absolute inset-0 rounded-3xl opacity-0
                  group-hover:opacity-100 transition
                  bg-gradient-to-b from-purple-500/15 to-transparent
                "
              />

              {/* icon */}
              <Icon className="relative z-10 w-7 h-7 text-purple-400 mb-3" />

              {/* text */}
              <p className="relative z-10 text-gray-200 text-sm md:text-base font-medium text-center px-4">
                {title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
