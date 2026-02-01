import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import Pagination from "../components/Pagination";
import { projects } from "../data/projectsData";

const PROJECTS_PER_PAGE = 6;

const filters = ["All", "Backend", "Full-Stack", "Mobile"];

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.tags?.includes(activeFilter)
        );

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE)
  );

  const start = (currentPage - 1) * PROJECTS_PER_PAGE;
  const currentProjects = filteredProjects.slice(
    start,
    start + PROJECTS_PER_PAGE
  );

  return (
    <section className="min-h-screen pt-24 md:pt-32 px-6 md:px-8 text-white bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">

      {/* ================= HEADER ================= */}
      <div className="text-center mb-12 md:mb-16 space-y-3 md:space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold">
          Projects &{" "}
          <span className="text-purple-400">Case Studies</span>
        </h1>

        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
          Backend and full-stack projects focused on clean architecture,
          scalable systems, and real-world problem solving.
        </p>
      </div>

      {/* ================= FILTERS ================= */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-20">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => {
              setActiveFilter(filter);
              setCurrentPage(1);
            }}
            className={`
              px-4 md:px-5 py-1.5 md:py-2
              rounded-full
              text-xs md:text-sm font-medium
              border transition
              ${
                activeFilter === filter
                  ? "bg-purple-600 text-white border-purple-500"
                  : "border-white/15 text-gray-300 hover:bg-white/5"
              }
            `}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* ================= GRID ================= */}
      {currentProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-14">
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-400 py-20">
          No projects found for this category.
        </div>
      )}

      {/* ================= PAGINATION ================= */}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setPage={setCurrentPage}
      />
    </section>
  );
}
