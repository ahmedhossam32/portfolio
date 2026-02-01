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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -6 }}
      className="
        relative flex flex-col
        bg-slate-900/70
        backdrop-blur-xl
        border border-white/10
        rounded-2xl md:rounded-3xl
        overflow-hidden
        transition-all
        hover:border-purple-500/40
        hover:shadow-[0_20px_60px_-30px_rgba(168,85,247,0.45)]
      "
    >
      {/* DATE */}
      <span className="
        absolute top-3 left-3 z-40
        px-2.5 py-1 text-[11px] rounded-full
        bg-black/80 border border-white/20
        text-gray-200
      ">
        {project.date}
      </span>

      {/* TAGS */}
      <div className="absolute top-3 right-3 z-40 flex gap-1.5 flex-wrap justify-end">
        {project.tags?.map((tag) => (
          <span
            key={tag}
            className={`
              px-2.5 py-1 text-[11px] rounded-full
              bg-black/75 border backdrop-blur-md
              font-medium
              ${badgeStyles[tag]}
            `}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* IMAGE */}
      <div className="relative h-[180px] md:h-[260px] overflow-hidden bg-slate-900">

        <div className="absolute inset-0 bg-black/55 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent z-20" />

        {project.platform === "mobile" ? (
          <div className="absolute inset-0 flex items-center justify-center z-30">
            <motion.img
              src={imageSrc}
              alt={project.title}
              onError={(e) => (e.currentTarget.src = fallbackImage)}
              className="h-[150px] md:h-[220px] rounded-[24px] shadow-lg"
            />
          </div>
        ) : (
          <motion.img
            src={imageSrc}
            alt={project.title}
            onError={(e) => (e.currentTarget.src = fallbackImage)}
            className="absolute inset-0 w-full h-full object-contain z-20"
          />
        )}
      </div>

      {/* CONTENT */}
      <div className="flex flex-col flex-1 p-4 md:p-7 relative z-30">

        <h3 className="text-base md:text-xl font-semibold text-white mb-1.5">
          {project.title}
        </h3>

        <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* BUTTONS */}
        <div className="flex gap-2 mb-4 flex-wrap">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
              flex items-center gap-2
              px-3 py-2 rounded-md
              bg-purple-600 hover:bg-purple-700
              transition text-xs md:text-sm
            "
          >
            <Github size={16} />
            GitHub
          </a>

          {project.preview && (
            <a
              href={project.preview}
              target="_blank"
              rel="noreferrer"
              className="
                flex items-center gap-2
                px-3 py-2 rounded-md
                border border-white/20
                hover:bg-white/5
                transition text-xs md:text-sm
              "
            >
              <Play size={16} />
              Preview
            </a>
          )}
        </div>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.techs.map((tech, i) => (
            <span
              key={i}
              className="
                px-2.5 py-1 text-[10px] md:text-[11px]
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
