import {
  Code2,
  Server,
  Database,
  Layout,
  Smartphone,
  Wrench
} from "lucide-react";

export default function AboutSkills() {
  return (
    <section className="relative py-32 px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[300px] bg-purple-500/10 blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto space-y-20">

        {/* ================= TITLE ================= */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Technologies & Tools
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            A comprehensive overview of the programming languages, frameworks,
            tools, and platforms I use to design, build, and deploy modern
            software systems.
          </p>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          <SkillCard
            title="Programming Languages"
            icon={Code2}
            items={[
              "Java",
              "JavaScript",
              "TypeScript",
              "Python",
              "C++",
              "Dart",
              "SQL"
            ]}
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
              "Express.js"
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
              "Query Optimization"
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
              "Material UI"
            ]}
          />

          <SkillCard
            title="Mobile Development"
            icon={Smartphone}
            items={[
              "Flutter",
              "Dart",
              "REST Integration",
              "JWT Authentication"
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
              "GitHub Actions"
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
        relative group
        h-full
        rounded-3xl
        p-8
        bg-slate-900/60
        border border-white/10
        backdrop-blur-xl
        transition-all duration-500
        hover:-translate-y-3
        hover:shadow-[0_25px_80px_-30px_rgba(168,85,247,0.45)]
      "
    >
      {/* top gradient line */}
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

      {/* header */}
      <div className="relative z-10 flex items-center gap-3 mb-6">
        <Icon className="w-6 h-6 text-purple-400" />
        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>
      </div>

      {/* pills */}
      <div className="relative z-10 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="
              px-4 py-1.5
              rounded-full
              text-sm
              bg-slate-800/80
              text-gray-300
              border border-white/10
              transition
              hover:bg-purple-600/20
              hover:text-white
              hover:border-purple-500/40
              cursor-default
            "
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
