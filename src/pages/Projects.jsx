import React from "react";
import { Link } from "react-router-dom";
import { FolderGit2 } from "lucide-react";
import { projects } from "../data/proj";

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 px-6 py-12">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto mb-12">

        <h1 className="text-4xl font-extrabold text-cyan-400 flex items-center gap-3">
          <FolderGit2 size={32} />
          Mes projets
        </h1>

        <p className="text-gray-400 mt-3 text-lg">
          Projets académiques, personnels et expérimentaux en développement web et IA.
        </p>

      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="group bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition transform hover:-translate-y-1"
          >

            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.titre}
                className="h-52 w-full object-cover transition duration-300 group-hover:scale-110"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">

              {/* TITLE */}
              <h2 className="text-xl font-bold text-cyan-400 group-hover:text-cyan-300 transition">
                {project.titre}
              </h2>

              {/* SUBTITLE */}
              <p className="text-sm text-gray-400 mt-1">
                {project.sousTitre}
              </p>

              {/* DESCRIPTION */}
              <p className="text-gray-300 text-sm mt-3 line-clamp-3">
                {project.descriptionCourte}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-5 text-cyan-400 text-sm font-semibold group-hover:underline">
                Voir les détails →
              </div>

            </div>
          </Link>
        ))}

      </div>

      {/* EMPTY STATE (optionnel futur) */}
      {projects.length === 0 && (
        <div className="text-center text-gray-500 mt-20">
          Aucun projet disponible pour le moment.
        </div>
      )}

    </div>
  );
}