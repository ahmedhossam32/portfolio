import csIllustration from "../../assets/CSillustration.png";
import {
  GraduationCap,
  School,
  Calendar,
  Laptop
} from "lucide-react";

export default function AboutIntro() {
  return (
    <section className="relative py-36 px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0">
        <div className="absolute -left-40 top-20 w-[500px] h-[500px] bg-purple-600/10 blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <div className="space-y-8">

          {/* title */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Background &{" "}
              <span className="relative text-purple-400">
                Education
                <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-purple-500/40 rounded-full" />
              </span>
            </h2>

            <div className="w-20 h-[2px] bg-gradient-to-r from-purple-500 to-transparent" />
          </div>

          {/* paragraphs */}
          <p className="text-gray-400 leading-relaxed text-lg max-w-xl">
            I am a{" "}
            <span className="text-white font-medium">
              Senior Computer Science student
            </span>{" "}
            at the{" "}
            <span className="text-purple-400 font-medium">
              British University in Egypt
            </span>
            , majoring in{" "}
            <span className="text-purple-400 font-medium">
              Software Engineering
            </span>
            . My academic journey has provided me with a strong foundation in
            core computer science concepts and modern software development
            practices.
          </p>

          <p className="text-gray-400 leading-relaxed text-lg max-w-xl">
            I am particularly interested in{" "}
            <span className="text-white font-medium">
              backend engineering
            </span>
            , where I focus on designing{" "}
            <span className="text-purple-400 font-medium">
              scalable systems, clean APIs, and maintainable architectures
            </span>{" "}
            that solve real-world problems.
          </p>

          {/* info grid */}
          <div className="grid grid-cols-2 gap-6 pt-6">

            {[
              {
                icon: GraduationCap,
                text: "Software Engineering",
              },
              {
                icon: School,
                text: "British University in Egypt",
              },
              {
                icon: Calendar,
                text: "Graduation: 2026",
              },
              {
                icon: Laptop,
                text: "Backend & Full-Stack Focus",
              },
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="
                    flex items-center gap-4
                    p-4 rounded-xl
                    bg-slate-900/60
                    border border-white/10
                    backdrop-blur
                  "
                >
                  <Icon className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-200 text-sm md:text-base">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="relative flex justify-center group">

          {/* glow */}
          <div className="absolute w-80 h-80 bg-purple-600/20 blur-3xl rounded-full" />

          {/* glass frame */}
          <div className="
            relative
            p-6
            rounded-3xl
            bg-white/5
            backdrop-blur-xl
            border border-white/10
            shadow-2xl
            transition-all duration-500
            group-hover:scale-105
          ">
            <img
              src={csIllustration}
              alt="Computer Science Illustration"
              className="w-full max-w-md opacity-95"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
