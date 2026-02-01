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
  GitBranch,
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
    { title: "Git & Version Control", icon: GitBranch },
  ];

  return (
    <section className="relative py-20 md:py-32 px-6 md:px-8 bg-slate-950 overflow-hidden">

      {/* background glow (desktop only) */}
      <div className="absolute inset-0 hidden md:block">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[300px] bg-purple-500/10 blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto space-y-14 md:space-y-20">

        {/* title */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Computer Science Foundation
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-lg">
            Core CS concepts that enable scalable, maintainable, and
            high-performance software systems.
          </p>
        </div>

        {/* grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8">
          {foundations.map(({ title, icon: Icon }) => (
            <div
              key={title}
              className="
                relative
                rounded-xl md:rounded-3xl
                px-4 py-5 md:p-7
                bg-slate-900/60
                border border-white/10
                backdrop-blur
                flex flex-col items-center justify-center
                transition
                md:hover:-translate-y-2
                md:hover:shadow-[0_20px_60px_-30px_rgba(168,85,247,0.45)]
              "
            >
              <Icon className="w-5 h-5 md:w-7 md:h-7 text-purple-400 mb-2 md:mb-3" />
              <p className="text-gray-200 text-xs sm:text-sm md:text-base text-center font-medium">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
