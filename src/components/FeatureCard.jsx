export default function FeatureCard({ icon, titre, description }) {
    return (
        <div className="bg-gray-800 rounded-xl p-6 transition-transform hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-400/10">
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">{titre}</h3>
            <p className="text-gray-300">{description}</p>
        </div>
    );
}
