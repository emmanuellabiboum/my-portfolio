import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send(
            'service_q3j7i0h',
            'template_7l0rktv',
            { name, email, message },
            'IQhSjapZCLfCITjc6'
        )
            .then(() => {
                setIsSent(true);
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((err) => {
                console.error('Erreur :', err);
            });
    };

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
            <div className="max-w-2xl mx-auto bg-gray-800 rounded-xl p-8">
                <h1 className="text-3xl font-bold text-cyan-400 mb-6">Contact</h1>
                {isSent ? (
                    <div className="text-center py-4 text-green-400">
                        Votre message a bien été envoyé!
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-gray-300 mb-2">Nom</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-300 mb-2">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-300 mb-2">Message</label>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                rows="5"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg transition"
                        >
                            Envoyer
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
