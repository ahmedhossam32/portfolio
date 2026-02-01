import csIllustration from "../../assets/CSillustration.png";
import {
  GraduationCap,
  School,
  Calendar,
  Laptop,
} from "lucide-react";

export default function AboutIntro() {
  return (
    <section className="relative py-20 md:py-36 px-6 md:px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">

      {/* background glow (desktop only) */}
      <div className="absolute inset-0 hidden md:block">
        <div className="absolute -left-40 top-20 w-[500px] h-[500px] bg-purple-600/10 blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* ================= LEFT ================= */}
        <div className="space-y-6 md:space-y-8">

          {/* title */}
          <div className="space-y-3">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Background &{" "}
              <span className="relative text-purple-400">
                Education
                <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-purple-500/40 rounded-full" />
              </span>
            </h2>

            <div className="w-16 h-[2px] bg-gradient-to-r from-purple-500 to-transparent" />
          </div>

          {/* text */}
          <p className="text-gray-400 text-sm md:text-lg leading-relaxed max-w-xl">
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
            .
          </p>

          <p className="text-gray-400 text-sm md:text-lg leading-relaxed max-w-xl">
            My main interest is{" "}
            <span className="text-white font-medium">
              backend engineering
            </span>
            , where I focus on building{" "}
            <span className="text-purple-400 font-medium">
              scalable systems, clean APIs, and maintainable architectures
            </span>{" "}
            that solve real-world problems.
          </p>

          {/* info list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">

            {[
              { icon: GraduationCap, text: "Software Engineering" },
              { icon: School, text: "British University in Egypt" },
              { icon: Calendar, text: "Graduation: 2026" },
              { icon: Laptop, text: "Backend & Full-Stack Focus" },
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="
                    flex items-center gap-3
                    px-4 py-3
                    rounded-lg
                    bg-slate-900/60
                    border border-white/10
                    backdrop-blur
                  "
                >
                  <Icon className="w-4 h-4 text-purple-400" />
                  <span className="text-gray-200 text-sm">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= RIGHT (IMAGE) ================= */}
        <div className="flex justify-center md:justify-end mt-6 md:mt-0">

          <img
            src={csIllustration}
            alt="Computer Science Illustration"
            className="
              w-[220px] sm:w-[260px] md:w-[420px]
              opacity-90
            "
          />
        </div>
      </div>
    </section>
  );
}
