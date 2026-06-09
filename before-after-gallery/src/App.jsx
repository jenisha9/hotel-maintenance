import { imagePairs } from "./data/mockData";
import ImagePairCard from "./components/ImagePairCard";

function App() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* HEADER */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="HVAI"
              className="h-10"
            />

            {/* <h1 className="font-bold text-2xl text-slate-800">
              HVAI Gallery
            </h1> */}
          </div>

          {/* <button
            className="
            px-5 py-2
            rounded-xl
            text-white
            font-medium
            bg-gradient-to-r
            from-violet-500
            via-blue-400
            to-cyan-400
            "
          >
            Upload
          </button> */}

        </div>
      </header>

      <section className="relative overflow-hidden">

  <div
    className="
    absolute inset-0
    bg-gradient-to-r
    from-violet-500
    via-blue-400
    to-cyan-400
    animate-pulse
    opacity-90
    "
  />

  <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">

    

    <h1 className="text-6xl font-extrabold text-white leading-tight">
      Redefining
      <br />
      Hotel Operations
    </h1>

    <p className="max-w-3xl mx-auto mt-8 text-xl text-white/90">
      AI-powered visual intelligence to detect issues that often go unnoticed during routine inspections. 
      By identifying small defects, inconsistencies, and operational risks early, teams can address them before they escalate into costly problems, helping maintain higher standards across hotel operations.
    </p>

    <div className="flex justify-center gap-4 mt-10">

      <button
        className="
        px-6 py-3
        bg-white
        text-slate-800
        rounded-xl
        font-semibold
        shadow-lg
        "
      >
        Learn More
      </button>

      {/* <button
        className="
        px-6 py-3
        border
        border-white
        text-white
        rounded-xl
        font-semibold
        "
      >
        Learn More
      </button> */}

    </div>

  </div>

</section>

      {/* HERO */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1
            className="
            text-5xl
            font-extrabold
            bg-gradient-to-r
            from-violet-500
            via-blue-400
            to-cyan-400
            bg-clip-text
            text-transparent
            "
          >
            Visual Intelligence in Action
          </h1>

        </div>
      </section>

      {/* GALLERY */}
      <main className="max-w-6xl mx-auto px-6 pb-10">
        <div className="grid gap-8">
          {imagePairs.map((pair) => (
            <ImagePairCard key={pair.id} pair={pair} />
          ))}
        </div>
      </main>

    </div>
  );
}

export default App;