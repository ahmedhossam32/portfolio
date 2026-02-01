import {
  Code2,
  Server,
  Database,
  Layout,
  Smartphone,
  Wrench,
} from "lucide-react";

export default function AboutSkills() {
  return (
    <section className="relative py-20 md:py-32 px-6 md:px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">

      {/* background glow (desktop only) */}
      <div className="absolute inset-0 hidden md:block">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[300px] bg-purple-500/10 blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto space-y-14 md:space-y-20">

        {/* title */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Technologies & Tools
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-lg">
            Languages, frameworks, and tools I use to design and build
            production-ready systems.
          </p>
        </div>

        {/* grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          <SkillCard
            title="Programming Languages"
            icon={Code2}
            items={["Java", "JavaScript", "TypeScript", "Python", "C++", "Dart", "SQL"]}
          />

          <SkillCard
            title="Backend Technologies"
            icon={Server}
            items={[
              "Spring Boot",
              "Spring Security",
              "Hibernate (JPA)",
              "JWT",
              "OAuth2",
              "REST APIs",
              "Node.js",
              "Express.js",
            ]}
          />

          <SkillCard
            title="Databases"
            icon={Database}
            items={[
              "PostgreSQL",
              "MySQL",
              "MongoDB",
              "Database Design",
              "Query Optimization",
            ]}
          />

          <SkillCard
            title="Frontend Technologies"
            icon={Layout}
            items={[
              "React.js",
              "HTML5",
              "CSS3",
              "Tailwind CSS",
              "Material UI",
            ]}
          />

          <SkillCard
            title="Mobile Development"
            icon={Smartphone}
            items={[
              "Flutter",
              "Dart",
              "REST Integration",
              "JWT Authentication",
            ]}
          />

          <SkillCard
            title="Tools & DevOps"
            icon={Wrench}
            items={[
              "Git",
              "GitHub",
              "Maven",
              "Docker",
              "Postman",
              "Swagger",
              "GitHub Actions",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

/* ============================= */

function SkillCard({ title, icon: Icon, items }) {
  return (
    <div
      className="
        relative
        rounded-2xl md:rounded-3xl
        p-5 md:p-8
        bg-slate-900/60
        border border-white/10
        backdrop-blur
        transition
        md:hover:-translate-y-2
        md:hover:shadow-[0_20px_60px_-30px_rgba(168,85,247,0.45)]
      "
    >
      {/* header */}
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
        <h3 className="text-lg md:text-xl font-semibold text-white">
          {title}
        </h3>
      </div>

      {/* pills */}
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="
              px-3 py-1
              rounded-full
              text-xs md:text-sm
              bg-slate-800/80
              text-gray-300
              border border-white/10
            "
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
