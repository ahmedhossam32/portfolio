import programmer from "../../assets/programmer.png";

export default function AboutHome() {
  return (
    <section className="relative w-full py-36 px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-20 w-[500px] h-[500px] bg-purple-600/10 blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <div className="space-y-7 text-gray-300 animate-fade-in-left">

          {/* title */}
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            About{" "}
            <span className="relative text-purple-400">
              Me
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-purple-500/40 rounded-full" />
            </span>
          </h2>

          {/* paragraph 1 */}
          <p className="text-lg leading-relaxed">
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

          {/* paragraph 2 */}
          <p className="text-lg leading-relaxed">
            I have strong foundations in{" "}
            <span className="text-purple-400 font-semibold">
              Object-Oriented Programming, Data Structures & Algorithms, SOLID
              principles, and software design patterns
            </span>
            .
          </p>

          {/* paragraph 3 */}
          <p className="text-lg leading-relaxed">
            My primary focus is{" "}
            <span className="text-white font-semibold">
              backend development
            </span>
            , where I build{" "}
            <span className="text-purple-400 font-semibold">
              scalable, maintainable systems
            </span>{" "}
            using clean architecture, strong engineering principles, and modern
            APIs.
          </p>

          {/* tech pills */}
          <div className="flex flex-wrap gap-3 pt-2">
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
                  px-4 py-1.5 rounded-full text-sm
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

        {/* ================= RIGHT IMAGE ================= */}
        <div className="relative flex justify-center animate-fade-in-right">

          {/* glow */}
          <div className="absolute w-80 h-80 bg-purple-600/20 blur-3xl rounded-full" />

          {/* glass frame */}
          <div
            className="
              relative p-6 rounded-3xl
              bg-white/5 backdrop-blur-xl
              border border-white/10 shadow-2xl
            "
          >
            <img
              src={programmer}
              alt="Programmer Illustration"
              className="
                w-[300px] md:w-[420px]
                animate-float
                drop-shadow-[0_0_50px_rgba(168,85,247,0.35)]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
