export default function FeatureCard({ icon, title, description }) {
    return (
        <div className="rounded-xl p-6 transition-transform hover:scale-[1.02] hover:shadow-xl hover:shadow-red-700/20 card-bg">
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="text-xl font-semibold accent mb-2">{title}</h3>
            <p className="card-text">{description}</p>
        </div>
    );
}
