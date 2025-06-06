import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Card from './components/Card';
import FeatureCard from './components/FeatureCard';
import SocialLinks from './components/SocialLinks';
import photo from './assets/1.jpg';
function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">

        {location.pathname === '/' && (
          <div className="bg-gray-800 rounded-xl p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-8 items-center text-center">
              <div className="md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-4">
                  Bienvenue sur mon portfolio
                </h2>
                <p className="text-gray-300 text-lg">
                  Je m’appelle BIBOUM ANNE EMMANUELLA, étudiante en 2e année E-business à <span className="font-semibold text-blue-700">FSEG Nabeul</span>, amatrice en développement web et bientôt entrepreneure junior,
                  je combine mes passions pour devenir la meilleure version de moi-même.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img
                  src={photo}
                  alt="Ma photo"
                  className="rounded-lg shadow-lg w-full max-w-xs md:max-w-md"
                />
              </div>
            </div>
          </div>
        )}

        {location.pathname === '/' && (
          <>
            <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 border-b-2 border-cyan-400 pb-2 mb-8">
              Projets récents ? OUI
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card
                title="Réalisation de sites portfolio pour des particuliers"
                description="Des cadres m'ont approché pour me témoigner leur désir d'avoir une empreinte sur 
                le Web de part des sites portfolio. Il s'agit d'un projet sur lequel je travaille activement 
                et qui m'aide à découvrir les rouages de React, qui est un langage nouveau pour moi mais que j'affectionne énormément."
              />
              <Card
                title="Réalisation des flyers sur les opportunités du digital en Afrique"
                description="Beaucoup de jeunes ont du mal à trouver des bon plan dans le domaine du digital, que ce soit dans le choix des
                établissement ou encore dans le choix de la bonne certification pour mettre en valeur leur CV, dès lors, ce projet est destiné à leur 
                venir en aide."
              />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 border-b-2 border-cyan-400 pb-2 mb-8">
              Mes atouts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <FeatureCard
                title="Déterminée"
                description="Je suis prédisposée à ateindre mes objectifs personnels car je me qualifie comme étant persévérante et assidue dans mon travail."
              />
              <FeatureCard
                title="Engagée"
                description="Ma curiosité et mon emphatie me permettent de pouvoir proposer des solutions efficaces pour les problèmes qui surviennent dans mon environement
                au quotidien."
              />
              <FeatureCard
                title="Sociable"
                description="J'aime apprendre des autres et apporter ma contribution dans les activités de groupe."
              />
            </div>
          </>
        )}
        <Outlet />
        <SocialLinks />
      </main>
    </div>
  );
}

export default App;
