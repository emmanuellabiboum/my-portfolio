import React, { useState } from 'react';
import SocialLinks from '../components/SocialLinks';

export default function About() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
            <h1 className="text-3xl font-bold text-cyan-400 mb-6">À propos</h1>


            <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                <div className="md:w-1/2">
                    <h2 className="text-2xl font-semibold text-cyan-400 mb-3">Qui suis-je ?</h2>
                    <p className="text-gray-300 mb-4">
                        Bonjour, je m’appelle Biboum Anne Emmanuella, Passionnée par le développement web et le marketing digital, je suis disposée à apprendre et à mettre mes compétences à votre service.
                    </p>
                    <p className="text-gray-300 mb-4">
                       Je poursuis des études en Electronic-business et en dehors des cours, je suis passionnée par le developpent web et le designe UX/UI.
                    </p>
                    <p className="text-gray-300">
                        J’aime apprendre, partager mes connaissances et relever de nouveaux défis.
                    </p>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src="/my-portfolio/images/2.jpg"
                        alt="Ma photo"
                        className="rounded-lg shadow-lg w-full max-w-xs md:max-w-md"
                    />
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-cyan-400 mb-3">Cette vidéo sera bientôt disponible et vous présentera l'objet de mon stage, des conseils pour
                    intégrer le monde du digital et des sites utiles que j'utilise au quotidien dans mon apprentissage.
                </h2>
                <p className="text-gray-300 mb-4">
                    Vous découvrez mon parcours en vidéo.
                </p>
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded"
                >
                    Voir la vidéo
                </button>
            </div>


            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <video
                        controls
                        className="w-full max-w-3xl"
                        src="/images/about.mp4"
                    ></video>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-4 right-4 text-white text-xl"
                    >
                        ×
                    </button>
                </div>
            )}


            <div className="mt-12 mb-8">
                <h2 className="text-2xl font-semibold text-cyan-400 mb-4">FAQ</h2>
                <div className="space-y-4">
                    <div className="bg-gray-800 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-cyan-300 mb-2">Quelles sont mes compétences principales ?</h3>
                        <p className="text-gray-300">
                            Je maîtrise PHP,C, Java, HTML, CSS, et bien d’autres outils modernes comme PL/SQL et bien d'autres.
                        </p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-cyan-300 mb-2">Comment puis-je te contacter ?</h3>
                        <p className="text-gray-300">
                            Tu peux utiliser le formulaire de contact ou me retrouver sur mes différents réseaux sociaux.
                        </p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-cyan-300 mb-2">Quels sont mes projets récents ?</h3>
                        <p className="text-gray-300">
                            Tu peux découvrir mes derniers projets dans la section dédiée.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}
