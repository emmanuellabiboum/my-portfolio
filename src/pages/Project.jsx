import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ImageModal from '../components/ImageModal';

const projects = [
    {
        id: 1,
        titre: 'Implémentation d\'une Authentification à Deux Facteurs (2FA) avec Laravel',
        image: '/my-portfolio/images/p1.jpeg',
        description: "Ce mini projet vise à tester mon aptitude à mettre sur pied la logique de la double authentification sans me servir des starter kit. Il démontre ma capacité à développer des fonctionnalités de sécurité cruciales de manière autonome. Technologies utilisées : Laravel, HTML, CSS." // Description légèrement embellie
    },
    {
        id: 2,
        titre: 'Application Éducative : Maîtriser les ODD par le Jeu',
        image: '/my-portfolio/images/p.jpg',
        description: "Ce jeu de quiz interactif est en cours de développement. Il est conçu pour sensibiliser aux 17 Objectifs de Développement Durable (ODD) de manière ludique. Le back-end est réalisé en **Python** avec l'API **FastAPI** (choix adapté pour un projet simple), tandis que le front-end utilise **React-Native** et **CSS** pour une expérience utilisateur engageante. Ce projet combine programmation et engagement social." // Description légèrement embellie
    },
];

export default function Project() {
    const { id } = useParams();
    const project = projects.find((p) => p.id === Number(id));
    const [isOpen, setIsOpen] = useState(false);

    if (!project) return <div>Projet non trouvé</div>;

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-extrabold text-cyan-400 mb-8 border-b-2 border-cyan-400 pb-2">{project.titre}
                </h1>
                <div className="bg-gray-800 rounded-xl p-8 shadow-2xl">

                    <div className="flex flex-col md:flex-row gap-8">

                        <div className="md:w-1/2">
                            <img
                                src={project.image}
                                alt={project.titre}
                                className="w-full h-auto cursor-pointer rounded-lg shadow-xl transition-shadow hover:shadow-cyan-400/30"
                                onClick={() => setIsOpen(true)}
                            />
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-2xl font-semibold text-cyan-400 mb-3">Détails du Projet</h2>
                            <p className="text-gray-300 text-lg whitespace-pre-line leading-relaxed">
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