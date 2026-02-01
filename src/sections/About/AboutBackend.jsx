import { CheckCircle } from "lucide-react";

export default function AboutBackend() {
  return (
    <section className="relative py-20 md:py-36 px-6 md:px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">

      {/* background glow (desktop only) */}
      <div className="absolute inset-0 hidden md:block">
        <div className="absolute right-0 top-32 w-[500px] h-[500px] bg-purple-600/10 blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6">

          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Backend Development{" "}
            <span className="text-purple-400">Focus</span>
          </h2>

          <p className="text-gray-400 leading-relaxed text-sm md:text-lg max-w-xl">
            My primary focus is{" "}
            <span className="text-white font-medium">backend engineering</span>,
            where I design{" "}
            <span className="text-purple-400 font-medium">
              scalable, secure, and maintainable systems
            </span>{" "}
            using modern software engineering practices.
          </p>

          <p className="text-gray-400 leading-relaxed text-sm md:text-lg max-w-xl">
            I have built backend and full-stack applications using{" "}
            <span className="text-white font-medium">Java and Spring Boot</span>,
            implementing authentication, RESTful APIs, optimized data access,
            and{" "}
            <span className="text-purple-400 font-medium">
              microservice-ready architectures
            </span>
            .
          </p>

          <p className="text-gray-400 leading-relaxed text-sm md:text-lg max-w-xl">
            I emphasize{" "}
            <span className="text-white font-medium">clean architecture</span>,
            separation of concerns, and long-term maintainability.
          </p>
        </div>

        {/* RIGHT CARD */}
        <div
          className="
            relative
            rounded-2xl md:rounded-3xl
            p-6 md:p-10
            bg-slate-900/60
            border border-white/10
            backdrop-blur
            transition
            md:hover:-translate-y-2
            md:hover:shadow-[0_25px_80px_-30px_rgba(168,85,247,0.45)]
          "
        >
          <ul className="space-y-4 md:space-y-6 text-gray-200">
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
                className="flex items-center gap-3 text-xs md:text-base"
              >
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-purple-400 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
