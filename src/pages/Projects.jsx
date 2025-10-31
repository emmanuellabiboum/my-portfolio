import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
    {
        id: 1,
        titre: "Authentification 2FA Sécurisée (Laravel)",
        sousTitre: "Renforcement de la sécurité des utilisateurs sans starter-kit.",
        image: '/my-portfolio/images/p1.jpeg',
        tags: ["Laravel", "Sécurité", "Backend"],
        descriptionCourte: "Mise en place de la logique de double authentification (2FA) de manière autonome en PHP Laravel."
    },
    {
        id: 2,
        titre: 'ODD Challenge : Quiz Éducatif',
        sousTitre: "Jeu interactif sur les 17 Objectifs de Développement Durable.",
        image: '/my-portfolio/images/p.jpg',
        tags: ["Python", "React Native", "FastAPI", "Éducation"],
        descriptionCourte: "Projet en cours. Application mobile de quiz pour sensibiliser sur l'Agenda 2030."
    },

];

export default function Projects() {
    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 p-6 sm:p-10">
            <h1 className="text-4xl font-extrabold text-cyan-400 mb-8 border-b-2 border-cyan-400 pb-3 max-w-4xl mx-auto">
                Mes Réalisations Techniques
            </h1>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((projet) => (
                    <Link
                        key={projet.id}
                        to={`/projects/${projet.id}`}
                        className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-[1.03] hover:shadow-cyan-400/30 group" // Styles améliorés pour l'interaction
                    >
                        <img
                            src={projet.image}
                            alt={projet.titre}
                            className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-cyan-400 mb-1 leading-tight">
                                {projet.titre}
                            </h3>
                            <p className="text-sm text-gray-400 mb-3">{projet.sousTitre}</p>
                            <p className="text-gray-300 text-base mb-4 line-clamp-2">{projet.descriptionCourte}</p>
                            <div className="flex flex-wrap gap-2">
                                {projet.tags.map(tag => (
                                    <span key={tag} className="text-xs font-medium bg-cyan-900/50 text-cyan-200 px-3 py-1 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}