export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm border-b border-white/20">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-lg tracking-widest text-white/80 font-light">
          Buddhist Meditation Traditions
        </span>
        <div className="flex gap-6 text-lg text-white/70">
          <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
          <a href="#statement" className="hover:text-white transition-colors">Artist's Statement</a>
        </div>
      </div>
    </nav>
  )
}
