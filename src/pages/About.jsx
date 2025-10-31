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
                        Je m'appelle BIBOUM ANNE EMMANUELLA. Mon parcours est marqué par une double
                        passion : si j'ai obtenu un baccalauréat littéraire au Cameroun en 2024, mon cœur a
                        toujours penché vers l'univers fascinant de l'informatique.
                    </p>
                    <p className="text-gray-300 mb-4">
                        Cette attirance précoce pour le digital est devenue une évidence lorsque j'ai
                        découvert le HTML et le CSS durant ma première année de faculté. C'est à partir
                        de ma deuxième année que le développement web s'est imposé comme une véritable
                        vocation.
                    </p>
                    <p className="text-gray-300 mb-4">
                        Déterminée à transformer cette passion en carrière, et malgré mon profil initial,
                        j'ai pris l'initiative de postuler pour une bourse d'études en Tunisie afin de me
                        spécialiser en Business Computing (BC). Ma candidature a été retenue, une sélection
                        qui valide mon engagement et ma capacité à réussir une transition audacieuse vers
                        ce domaine l'année même de l'obtention de mon baccalauréat.
                    </p>
                    <p className="text-gray-3003 mb-4">
                        Aujourd'hui, loin des bancs de l'école primaire et secondaire au Cameroun, je suis
                        plus que jamais investie dans le développement web, prête à combiner ma rigueur
                        littéraire avec mes compétences techniques.
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
                <h2 className="text-2xl font-semibold text-cyan-400 mb-3">Cette vidéo sera bientôt disponible .
                </h2>
                <p className="text-gray-300 mb-4">
                    Ceci est mon parcours en vidéo.
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
                            Je maîtrise plusieurs langages de programmation et technologies web comme Java, Python, PHP, HTML, CSS, Laravel etc...
                        </p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-cyan-300 mb-2">Comment te contacter ?</h3>
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
