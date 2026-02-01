import { Github, Play } from "lucide-react";
import { motion } from "framer-motion";

const badgeStyles = {
  Backend: "border-green-400/60 text-green-300",
  "Full-Stack": "border-purple-400/60 text-purple-300",
  Frontend: "border-blue-400/60 text-blue-300",
  Mobile: "border-cyan-400/60 text-cyan-300",
};

export default function ProjectCard({ project }) {
  const fallbackImage = "/projects/project.png";

  const imageSrc =
    project.image && project.image.length > 0
      ? project.image
      : fallbackImage;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10 }}
      className="
        relative flex flex-col
        bg-slate-900/70
        backdrop-blur-xl
        border border-white/10
        rounded-3xl overflow-hidden
        hover:border-purple-500/40
        hover:shadow-[0_30px_80px_-30px_rgba(168,85,247,0.55)]
        transition-all
      "
    >
      {/* ================= DATE ================= */}
      <span
        className="
          absolute top-4 left-4 z-40
          px-3 py-1 text-xs rounded-full
          bg-black/80
          border border-white/20
          text-gray-200
          backdrop-blur-md
        "
      >
        {project.date}
      </span>

      {/* ================= TAGS ================= */}
      <div className="absolute top-4 right-4 z-40 flex gap-2 flex-wrap justify-end">
        {project.tags?.map((tag) => (
          <span
            key={tag}
            className={`
              px-3 py-1 text-xs rounded-full
              bg-black/75
              border
              backdrop-blur-md
              font-medium tracking-wide
              ${badgeStyles[tag]}
            `}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* ================= IMAGE ================= */}
      <div className="relative h-[260px] overflow-hidden bg-slate-900">

        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/55 z-10" />

        {/* gradient fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent z-20" />

        {/* MOBILE */}
        {project.platform === "mobile" ? (
          <div className="absolute inset-0 flex items-center justify-center z-30">
            <motion.img
              src={imageSrc}
              alt={project.title}
              onError={(e) => (e.currentTarget.src = fallbackImage)}
              className="h-[220px] rounded-[28px] shadow-2xl shadow-purple-500/20"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        ) : (
          <motion.img
            src={imageSrc}
            alt={project.title}
            onError={(e) => (e.currentTarget.src = fallbackImage)}
            className="absolute inset-0 w-full h-full object-contain z-20"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.6 }}
          />
        )}
      </div>

      {/* ================= CONTENT ================= */}
      <div className="flex flex-col flex-1 p-7 relative z-30">

        <h3 className="text-xl font-semibold text-white mb-2 tracking-wide">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* buttons */}
        <div className="flex gap-3 mb-6 flex-wrap">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
              flex items-center gap-2
              px-4 py-2 rounded-md
              bg-purple-600 hover:bg-purple-700
              transition text-sm
            "
          >
            <Github size={18} />
            GitHub
          </a>

          {project.preview && (
            <a
              href={project.preview}
              target="_blank"
              rel="noreferrer"
              className="
                flex items-center gap-2
                px-4 py-2 rounded-md
                border border-white/20
                hover:bg-white/5
                transition text-sm
              "
            >
              <Play size={18} />
              Preview
            </a>
          )}
        </div>

        {/* tech stack */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.techs.map((tech, i) => (
            <span
              key={i}
              className="
                px-3 py-1 text-[11px]
                rounded-full
                bg-purple-500/20
                border border-purple-400/30
                text-purple-300
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
