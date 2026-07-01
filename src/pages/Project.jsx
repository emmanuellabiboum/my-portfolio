import React, { useState } from "react";
import ImageModal from "../components/ImageModal";
import { Layers, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import { projects } from "../data/proj";

export default function Project() {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const project = projects.find((p) => p.id === Number(id));

  if (!project)
    return (
      <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center">
        Projet non trouvé
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      <div className="max-w-5xl mx-auto">

        {/* Back */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 mb-6"
        >
          <ArrowLeft size={18} />
          Retour aux projets
        </Link>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-cyan-400 mb-6">
          {project.titre}
        </h1>

        <div className="bg-gray-800 rounded-2xl p-6 md:p-10 shadow-xl">

          <div className="grid md:grid-cols-2 gap-10">

            {/* Image */}
            <div>
              <img
                src={project.image}
                alt={project.titre}
                className="rounded-xl shadow-lg cursor-pointer hover:scale-[1.02] transition"
                onClick={() => setIsOpen(true)}
              />
            </div>

            {/* Content */}
            <div>

              {/* Tags */}
              <div className="flex items-center gap-2 mb-4">
                <Layers size={18} className="text-cyan-400" />
                <span className="text-gray-400">Technologies</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-cyan-500/10 text-cyan-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <h2 className="text-xl font-semibold text-cyan-400 mb-3">
                Détails du projet
              </h2>

              <p className="text-gray-300 leading-7">
                {project.description}
              </p>

            </div>

          </div>
        </div>

        <ImageModal
          isOpen={isOpen}
          image={project.image}
          onClose={() => setIsOpen(false)}
        />
      </div>
    </div>
  );
}