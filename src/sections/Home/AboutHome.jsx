import programmer from "../../assets/programmer.png";

export default function AboutHome() {
  return (
    <section className="relative w-full py-24 md:py-36 px-6 md:px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0">
        <div className="hidden md:block absolute right-0 top-20 w-[500px] h-[500px] bg-purple-600/10 blur-[160px]" />
      </div>

      <div
        className="
          relative max-w-7xl mx-auto
          flex flex-col
          md:grid md:grid-cols-2
          gap-14 md:gap-20
          items-center
        "
      >
        {/* ================= TEXT ================= */}
        <div className="space-y-6 text-gray-300 text-center md:text-left">

          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            About{" "}
            <span className="relative text-purple-400">
              Me
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-purple-500/40 rounded-full" />
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            I’m a{" "}
            <span className="text-white font-semibold">
              Computer Science senior student
            </span>{" "}
            at the{" "}
            <span className="text-purple-400 font-semibold">
              British University in Egypt
            </span>
            , specializing in{" "}
            <span className="text-purple-400 font-semibold">
              Software Engineering
            </span>
            .
          </p>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            I have strong foundations in{" "}
            <span className="text-purple-400 font-semibold">
              Object-Oriented Programming, Data Structures & Algorithms, SOLID
              principles, and design patterns
            </span>
            .
          </p>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            My primary focus is{" "}
            <span className="text-white font-semibold">
              backend development
            </span>
            , where I build{" "}
            <span className="text-purple-400 font-semibold">
              scalable, maintainable systems
            </span>{" "}
            using clean architecture and modern APIs.
          </p>

          {/* tech pills */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
            {[
              "Java",
              "Spring Boot",
              "REST APIs",
              "SQL",
              "OOP",
              "SOLID",
              "Design Patterns",
              "Git",
            ].map((tech) => (
              <span
                key={tech}
                className="
                  px-3 py-1.5
                  rounded-full text-xs sm:text-sm
                  bg-slate-800/70
                  border border-white/10
                  text-purple-300
                  backdrop-blur
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* ================= IMAGE ================= */}
        <div className="relative flex justify-center">

          {/* glow (desktop only) */}
          <div className="hidden md:block absolute w-80 h-80 bg-purple-600/20 blur-3xl rounded-full" />

          <div
            className="
              relative p-4 md:p-6
              rounded-2xl md:rounded-3xl
              bg-white/5 backdrop-blur-xl
              border border-white/10
              shadow-xl
            "
          >
            <img
              src={programmer}
              alt="Programmer Illustration"
              className="
                w-[200px] sm:w-[240px] md:w-[420px]
                drop-shadow-[0_0_30px_rgba(168,85,247,0.35)]
                md:animate-float
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
