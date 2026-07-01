import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="px-6 py-4">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3">
                    <div className="text-2xl font-extrabold text-red-400">Mon <span className="text-gray-100">Portfolio</span></div>
                </Link>

                <div className="flex items-center gap-6">
                    <ul className="flex gap-6 text-gray-200 items-center">
                        <li><Link to="/" className="hover:text-red-300 transition">Accueil</Link></li>
                        <li><Link to="/about" className="hover:text-red-300 transition">À propos</Link></li>
                        <li><Link to="/projects" className="hover:text-red-300 transition">Projets</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

