export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
      <p className="text-xs tracking-[0.3em] uppercase text-white/80 mb-6">
        End-of-Semester Portfolio
      </p>
      <h1 className="text-5xl md:text-7xl font-light text-white leading-tight mb-6">
        What Is<br />Meditation?
      </h1>
      <p className="text-white/75 max-w-md text-[1.1rem] leading-relaxed mb-12">
        A collection of materials demonstrating the evolution of my understanding
        of Buddhism and Meditation over the last semester
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#portfolio"
          className="px-8 py-3 bg-white text-stone-900 text-sm tracking-wide hover:bg-white/90 transition-colors"
        >
          View Portfolio
        </a>
        <a
          href="#statement"
          className="px-8 py-3 border border-white/60 text-white text-sm tracking-wide hover:border-white transition-colors"
        >
          Artist's Statement
        </a>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/40"></div>
      </div>
    </section>
  )
}
