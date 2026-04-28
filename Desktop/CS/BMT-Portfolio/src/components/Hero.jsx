export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
      <p className="text-xs tracking-[0.3em] uppercase bg-opacity-50 text-white/80 mb-6">
       Colin Walsh | Final Portfolio
      </p>
      <h1 className="text-5xl md:text-7xl font-light text-white leading-tight mb-6">
        Meditations on<br /> Buddhist Meditation
      </h1>
      <div className="w-12 h-px bg-emerald-700 mx-auto mb-6" />
      <p className="text-white/75 max-w-md text-[1.1rem] leading-relaxed mb-12">
        A collection of materials demonstrating the evolution of my understanding
        of Buddhism and meditation over the last semester
      </p>
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-none sm:w-auto">
        <a
          href="#portfolio"
          className="px-8 py-3 bg-emerald-700 text-white text-sm tracking-wide hover:bg-emerald-600 active:bg-emerald-800 transition-colors duration-200"
        >
          View Portfolio
        </a>
        <a
          href="#statement"
          className="px-8 py-3 border border-white/40 text-white text-sm tracking-wide hover:border-emerald-500 hover:text-emerald-300 active:border-emerald-400 transition-colors duration-200"
        >
          Artist's Statement
        </a>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-emerald-400/60">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-emerald-600/50"></div>
      </div>
    </section>
  )
}
