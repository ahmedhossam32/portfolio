import { Link } from "react-router-dom";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projectsData";

export default function HomeProjectsPreview() {
  const featuredProjects = projects.filter((project) =>
    [1, 2, 3].includes(project.id)
  );

  return (
    <section className="py-20 md:py-28 px-6 md:px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">

      {/* TITLE */}
      <div className="text-center mb-14 md:mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Featured <span className="text-purple-400">Projects</span>
        </h2>

        <p className="text-gray-400 mt-3 text-sm md:text-base max-w-2xl mx-auto">
          A snapshot of my recent backend and full-stack projects.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-14">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-14 md:mt-20">
        <Link
          to="/projects"
          className="
            px-8 py-3 rounded-lg
            bg-purple-600 hover:bg-purple-700
            text-white font-semibold
            transition
          "
        >
          View All Projects →
        </Link>
      </div>
    </section>
  );
}
