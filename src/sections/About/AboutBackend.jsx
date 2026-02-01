import { CheckCircle } from "lucide-react";

export default function AboutBackend() {
  return (
    <section className="relative py-36 px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-32 w-[500px] h-[500px] bg-purple-600/10 blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <div className="space-y-8">

          {/* title */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Backend Development{" "}
              <span className="text-purple-400">Focus</span>
            </h2>

            <div className="w-20 h-[2px] bg-gradient-to-r from-purple-500 to-transparent" />
          </div>

          {/* text */}
          <p className="text-gray-400 leading-relaxed text-lg max-w-xl">
            My primary focus is{" "}
            <span className="text-white font-medium">
              backend engineering
            </span>
            , where I design{" "}
            <span className="text-purple-400 font-medium">
              scalable, secure, and maintainable systems
            </span>{" "}
            using modern software engineering practices.
          </p>

          <p className="text-gray-400 leading-relaxed text-lg max-w-xl">
            I have built multiple backend and full-stack applications using{" "}
            <span className="text-white font-medium">
              Java and Spring Boot
            </span>
            , implementing authentication, authorization, RESTful APIs,
            optimized database access, and{" "}
            <span className="text-purple-400 font-medium">
              microservice-ready architectures
            </span>
            .
          </p>

          <p className="text-gray-400 leading-relaxed text-lg max-w-xl">
            I strongly emphasize{" "}
            <span className="text-white font-medium">
              clean architecture
            </span>
            , separation of concerns, and long-term maintainability in every
            system I design.
          </p>
        </div>

        {/* ================= RIGHT CARD ================= */}
        <div
          className="
            relative group
            rounded-3xl
            p-10
            bg-slate-900/60
            border border-white/10
            backdrop-blur-xl
            transition-all duration-500
            hover:-translate-y-3
            hover:shadow-[0_25px_80px_-30px_rgba(168,85,247,0.45)]
          "
        >
          {/* top gradient */}
          <div
            className="
              absolute inset-x-0 top-0 h-[2px]
              bg-gradient-to-r from-purple-500/40 via-blue-500/40 to-transparent
            "
          />

          {/* hover glow */}
          <div
            className="
              absolute inset-0 rounded-3xl opacity-0
              group-hover:opacity-100 transition
              bg-gradient-to-b from-purple-500/15 to-transparent
            "
          />

          {/* list */}
          <ul className="relative z-10 space-y-6 text-gray-200">
            {[
              "RESTful API Design",
              "Spring Boot & Spring Security",
              "JPA / Hibernate",
              "Authentication & Authorization",
              "Microservices-ready Architecture",
              "Database Performance Optimization",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-4 text-sm md:text-base"
              >
                <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
