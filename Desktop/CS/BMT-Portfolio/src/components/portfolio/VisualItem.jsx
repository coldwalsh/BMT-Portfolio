export default function VisualItem({ number, title, source, caption }) {
  return (
    <article className="grid md:grid-cols-[80px_1fr] gap-6">
      <div className="pt-1">
        <span className="text-sm font-mono text-emerald-600/70">{number}</span>
      </div>
      <div>
        <div className="w-full mb-4 overflow-hidden border border-stone-700/50">
          <img
            src="/visualElement.png"
            alt={title}
            className="w-full object-contain"
          />
        </div>
        <div className="mb-2">
          <span className="text-xs sm:text-sm text-white/50">{source}</span>
        </div>
        <p className="text-sm sm:text-md text-stone-200 leading-relaxed bg-stone-900/80 px-4 py-3 border-l-2 border-emerald-800">
          <span className="font-medium text-emerald-400">Caption: </span>{caption}
        </p>
      </div>
    </article>
  )
}
