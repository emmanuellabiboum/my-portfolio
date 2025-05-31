import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
    { id: 1, titre: 'Réalisation de sites portfolio pour des particuliers', image: '/images/p1.jpeg' },
    { id: 2, titre: 'Réalisation d un portefeuil électronique en cours...', image: '/images/p2.jpeg' },
];

export default function Projects() {
    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
            <h1 className="text-3xl font-bold text-cyan-400 mb-6">Mes projets</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((projet) => (
                    <Link
                        key={projet.id}
                        to={`/projects/${projet.id}`}
                        className="bg-gray-800 rounded-xl p-6 transition-transform hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-400/10"
                    >
                        <img
                            src={projet.image}
                            alt={projet.titre}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-xl font-semibold text-cyan-400 mb-2">{projet.titre}</h3>
                    </Link>
                ))}
            </div>
        </div>
    );
}
