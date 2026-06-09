export default function ImagePairCard({ pair }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

      {/* Title */}
      <div className="p-5 pb-3">
        <h2 className="text-2xl font-bold text-slate-800">
          {pair.title}
        </h2>
      </div>

      {/* Images */}
      <div className="grid grid-cols-2">
        <div className="relative">
          <img
            src={pair.beforeImage}
            alt="Before"
            className="h-72 w-full object-cover"
          />

          <span className="absolute top-3 left-3 bg-violet-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            BEFORE
          </span>
        </div>

        <div className="relative">
          <img
            src={pair.afterImage}
            alt="After"
            className="h-72 w-full object-cover"
          />

          <span className="absolute top-3 left-3 bg-cyan-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            AFTER
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">

        <h3 className="font-semibold text-violet-500 mb-2">
          HVAI Observation
        </h3>

        <p className="text-slate-600 leading-relaxed">
          {pair.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-5">
          {pair.tags.map((tag) => (
            <span
              key={tag}
              className="
                px-3 py-1
                rounded-full
                text-sm
                font-medium
                bg-gradient-to-r
                from-violet-100
                to-cyan-100
                text-slate-700
              "
            >
              {tag}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}