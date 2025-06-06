import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ImageModal from '../components/ImageModal';

const projects = [
    { id: 1, titre: 'Réalisation de sites portfolio pour des particuliers', image: '/my-portfolio/images/p1.jpeg' },
    { id: 2, titre: 'Conception de flyers instructifs', image: '/my-portfolio/images/p.jpg' },
];

export default function Project() {
    const { id } = useParams();
    const project = projects.find((p) => p.id === Number(id));
    const [isOpen, setIsOpen] = useState(false);

    if (!project) return <div>Projet non trouvé</div>;

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-cyan-400 mb-6">{project.titre}</h1>
                <div className="bg-gray-800 rounded-xl p-6">
                    <img
                        src={project.image}
                        alt={project.titre}
                        className="w-full h-auto cursor-pointer rounded-lg mb-4"
                        onClick={() => setIsOpen(true)}
                    />
                    <p className="text-gray-300">{project.description}</p>
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
