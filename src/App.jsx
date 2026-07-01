import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import FeatureCard from "./components/FeatureCard";
import SocialLinks from "./components/SocialLinks";
import photo from "./assets/1.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { projects } from "./data/proj";

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100">
      <Navbar />

      <main className="container mx-auto px-6 py-10">

        {location.pathname === "/" && (
          <>
            {/* HERO */}
            <section className="mb-20">
              <div className="bg-gray-800/70 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-gray-700">

                <div className="grid lg:grid-cols-2 items-center gap-10 p-8 md:p-14">

                  {/* Texte */}
                  <div>

                    <span className="inline-block bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold mb-5">
                      Bienvenue sur mon portfolio
                    </span>

                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                      Anne Emmanuella
                      <br />
                      <span className="text-cyan-400">Biboum</span>
                    </h1>

                    <p className="text-gray-300 text-lg leading-8">
                      Diplômée d'une Licence en <span className="font-semibold">Business Computing</span>, spécialité <span className="text-cyan-400 font-semibold">E-Business</span>,
                      obtenue à <span className="font-semibold">FSEG Nabeul</span> en juin 2026. Je suis passionnée par le développement web et motivée par
                      l'envie de construire des solutions numériques utiles.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-10">

                      <a
                        href="/my-portfolio/Projects"
                        className="bg-cyan-500 hover:bg-cyan-600 transition px-6 py-3 rounded-xl font-semibold shadow-lg"
                      >
                        Voir mes projets
                      </a>

                      <a
                        href="/my-portfolio/About "
                        className="border border-cyan-500 hover:bg-cyan-500 transition px-6 py-3 rounded-xl font-semibold"
                      >
                        À propos de moi
                      </a>

                    </div>

                  </div>

                  {/* Image */}

                  <div className="flex justify-center">

                    <div className="relative">

                      <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20 rounded-full"></div>

                      <img
                        src={photo}
                        alt="Anne Emmanuella Biboum"
                        className="relative rounded-3xl w-80 md:w-96 object-cover border-4 border-cyan-400 shadow-2xl"
                      />

                    </div>

                  </div>

                </div>

              </div>
            </section>

            {/* PROJETS */}

            <section id="projects" className="mb-20">

              <div className="flex justify-between items-center mb-8">

                <div>

                  <h2 className="text-3xl font-bold text-cyan-400">
                    Projets récents
                  </h2>

                  <p className="text-gray-400 mt-2">
                    Quelques réalisations illustrant mes centres d'intérêt et mon parcours.
                  </p>

                </div>

              </div>

              <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  navigation
  pagination={{ clickable: true }}
  autoplay={{
    delay: 3500,
    disableOnInteraction: false,
  }}
  loop={true}
  spaceBetween={30}
  breakpoints={{
    320: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1200: { slidesPerView: 3 },
  }}
  className="pb-14"
>
  {projects.slice(-3).map((project) => (
    <SwiperSlide key={project.id}>
      <Card
        title={project.titre}
        description={project.descriptionCourte}
        showDescription={false}
      />
    </SwiperSlide>
  ))}
</Swiper>

            </section>

            {/* MES ATOUTS */}

            <section className="mb-16">

              <div className="text-center mb-10">

                <h2 className="text-3xl font-bold text-cyan-400">
                  Mes atouts
                </h2>

                <p className="text-gray-400 mt-2">
                  Des qualités qui m'accompagnent dans chacun de mes projets.
                </p>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                <FeatureCard
                  title="Déterminée"
                  description="Persévérante et assidue, je m'investis pleinement dans chacun de mes projets afin d'atteindre les objectifs que je me fixe."
                />

                <FeatureCard
                  title="Engagée"
                  description="Ma curiosité et mon empathie me permettent de proposer des solutions adaptées aux problématiques rencontrées au quotidien."
                />

                <FeatureCard
                  title="Sociable"
                  description="J'apprécie le travail en équipe, le partage des connaissances et la collaboration autour de projets innovants."
                />

              </div>

            </section>

          </>
        )}

        <Outlet />

        <div className="mt-20">
          <SocialLinks />
        </div>

      </main>
    </div>
  );
}

export default App;