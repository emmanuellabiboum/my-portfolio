export default function Card({ title, description, showDescription = true }) {
  return (
    <div className="rounded-xl p-6 h-full flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-red-700/20 card-bg">
      <h3 className="text-xl font-semibold accent mb-4">
        {title}
      </h3>

      {showDescription && (
        <p className="card-text leading-7 flex-1">
          {description}
        </p>
      )}
    </div>
  );
}