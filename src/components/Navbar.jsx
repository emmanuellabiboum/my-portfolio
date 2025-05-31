import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="bg-gray-800/40 backdrop-blur-md shadow-md px-6 py-4 flex justify-between items-center">
            <Link to="/" className="text-xl font-bold text-cyan-800">Emma</Link>
            <ul className="flex gap-6 text-gray-400">
                <li><Link to="/" className="hover:text-cyan-400 transition">Accueil</Link></li>
                <li><Link to="/about" className="hover:text-cyan-400 transition">À propos</Link></li>
                <li><Link to="/projects" className="hover:text-cyan-400 transition">Projets</Link></li>
                <li><Link to="/contact" className="hover:text-cyan-400 transition">Contact</Link></li>
            </ul>
        </nav>
    );
}

