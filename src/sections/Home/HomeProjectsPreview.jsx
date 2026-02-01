import { Link } from "react-router-dom";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data//projectsData";

export default function HomeProjectsPreview() {
  const featuredProjects = projects.filter((project) =>
    [1, 2, 3].includes(project.id)
  );

  return (
    <section className="py-28 px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">

      {/* ================= TITLE ================= */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white">
          Featured{" "}
          <span className="text-purple-400">Projects</span>
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          A snapshot of my recent backend and full-stack projects,
          focusing on scalable architecture and real-world solutions.
        </p>
      </div>

      {/* ================= PROJECTS GRID ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* ================= VIEW ALL BUTTON ================= */}
      <div className="flex justify-center mt-20">
        <Link
          to="/projects"
          className="
            px-9 py-3 rounded-lg
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
