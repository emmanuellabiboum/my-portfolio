import React from "react";
import {
  Code2,
  Wrench,
  Award,
} from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Titre */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-cyan-400 mb-3">
            À propos de moi
          </h1>
          <p className="text-gray-400">
            Découvrez mon parcours, mes compétences et les technologies avec lesquelles j'aime travailler.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Présentation */}
          <div>

            <h2 className="text-2xl font-semibold text-cyan-400 mb-5">
              Qui suis-je ?
            </h2>

           <p className="text-gray-300 leading-8 mb-5">
  Je m'appelle <span className="font-semibold">BIBOUM ANNE EMMANUELLA</span>.
  Mon parcours est marqué par une double passion. Bien que j'aie obtenu
  un baccalauréat littéraire au Cameroun en <strong>juillet 2023</strong>,
  mon intérêt pour l'informatique s'est développé très tôt.
</p>

<p className="text-gray-300 leading-8 mb-5">
  Cette curiosité est devenue une véritable passion lorsque j'ai découvert
  le HTML et le CSS dès le lycée, en intégrant le club informatique de mon établissement.
  En parallèle, j’ai également pris l’initiative de participer discrètement à des séances
  pratiques organisées pour les étudiants de filière scientifique, afin de renforcer mes
  compétences et élargir ma compréhension du domaine.
</p>

<p className="text-gray-300 leading-8 mb-5">
  Déterminée à transformer cette passion en carrière, j'ai candidaté à une
  bourse d'études en Tunisie afin de poursuivre une formation en Business
  Computing. Cette opportunité m'a permis d'acquérir de solides bases en
  informatique tout en développant mes compétences techniques et ma capacité
  d'adaptation.
</p>

<p className="text-gray-300 leading-8">
  Aujourd'hui diplômée d'une licence en Business Computing spécialité E-Business, je souhaite
  mettre mes compétences au service de projets innovants en freelance ou en entreprise, tout en combinant
  créativité, rigueur et curiosité.
</p>

          </div>

          {/* Colonne droite */}
          <div className="space-y-8">

            {/* Langages */}
            <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">

              <h2 className="flex items-center gap-3 text-2xl font-semibold text-cyan-400 mb-5">
  <Code2 size={28} />
  Langages & Technologies
</h2>

              <div className="flex flex-wrap gap-3">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React",
                  "Java",
                  "Python",
                  "PHP",
                  "Laravel",
                  "SQL",
                ].map((tech) => (
                  <span key={tech} className="tag-item tag-bg tag-text" title={tech}>
                    {tech}
                  </span>
                ))}
              </div>

            </div>

            {/* Outils */}
            <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">

              <h2 className="flex items-center gap-3 text-2xl font-semibold text-cyan-400 mb-5">
  <Wrench size={28} />
  Outils
</h2>

              <div className="flex flex-wrap gap-3">
                {[
                  "Git",
                  "GitHub",
                  "VS Code",
                  "Postman",
                  "MySQL",
                  "XAMPP",
                ].map((tool) => (
                  <span key={tool} className="tag-item tag-bg tag-text" title={tool}>
                    {tool}
                  </span>
                ))}
              </div>

            </div>

            {/* Certifications */}
            <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">

              <h2 className="flex items-center gap-3 text-2xl font-semibold text-cyan-400 mb-5">
  <Award size={28} />
  Certifications
</h2>

              <div className="space-y-3">

                <div className="bg-gray-700 rounded-lg px-4 py-3">
                  Google Analytics
                </div>

                <div className="bg-gray-700 rounded-lg px-4 py-3">
                  Google Digital Marketing
                </div>

                <div className="bg-gray-700 rounded-lg px-4 py-3">
                  WordPress
                </div>

                <div className="bg-gray-700 rounded-lg px-4 py-3">
                  Microsoft PowerPoint
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}