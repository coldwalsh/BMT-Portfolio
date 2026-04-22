export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm border-b border-white/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
        <span className="text-sm sm:text-lg tracking-widest text-white/80 font-light truncate">
          Buddhist Meditation Traditions
        </span>
        <div className="flex gap-4 sm:gap-6 text-sm sm:text-base text-white/70 shrink-0">
          <a
            href="#portfolio"
            className="hover:text-emerald-400 transition-colors duration-200 relative group"
          >
            Portfolio
            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-emerald-500 group-hover:w-full transition-all duration-200" />
          </a>
          <a
            href="#statement"
            className="hover:text-emerald-400 transition-colors duration-200 relative group"
          >
            Artist's Statement
            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-emerald-500 group-hover:w-full transition-all duration-200" />
          </a>
        </div>
      </div>
    </nav>
  )
}
