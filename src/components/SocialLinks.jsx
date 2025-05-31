import { Instagram, Facebook, Mail, Github } from 'lucide-react';

export default function SocialLinks() {
    return (
        <div className="flex flex-col items-center gap-6 mt-12">
            <p className="text-gray-400 text-lg">Suivez mes réseaus pour en savoir plus</p>
            <div className="flex gap-6">
                <a
                    href="https://www.instagram.com/an.ne_emma.nuella?igsh=MWZueW85b2hpejY4dw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition"
                >
                    <Instagram className="w-6 h-6" />
                </a>
                <a
                    href="https://www.facebook.com/share/1AY9yKo4KM/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition"
                >
                    <Facebook className="w-6 h-6" />
                </a>
                <a
                    href="emmanuellabiboum044@gmail.com"
                    className="text-gray-400 hover:text-cyan-400 transition"
                >
                    < Mail className="w-6 h-6" />
                </a>
                <a
                    href="https://github.com/emmanuellabiboum"
                    className="text-gray-400 hover:text-cyan-400 transition"
                >
                    <Github className="w-6 h-6" />
                </a>
            </div>
        </div>
    );
}
