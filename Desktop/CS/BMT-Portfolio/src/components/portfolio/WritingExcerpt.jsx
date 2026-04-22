export default function WritingExcerpt({ number, type, date, text, caption }) {
  return (
    <article className="grid md:grid-cols-[80px_1fr] gap-6">
      <div className="pt-1">
        <span className="text-xs font-mono text-emerald-600/70">{number}</span>
      </div>
      <div>
        <div className="mb-2 flex flex-wrap items-baseline gap-3">
          <span className="text-xs sm:text-sm tracking-widest uppercase text-emerald-400/70">{type}</span>
          <span className="text-sm text-white/30">·</span>
          <span className="text-xs sm:text-sm text-white/50">{date}</span>
        </div>
        <div className="bg-stone-900/80 border border-stone-700 border-l-2 border-l-emerald-700 p-4 sm:p-5 mb-4">
          <p className="text-stone-200 leading-relaxed text-sm sm:text-base whitespace-pre-line">
            {text}
          </p>
        </div>
        <p className="text-sm sm:text-md text-white/65 leading-relaxed">
          <span className="font-medium text-emerald-400">Caption: </span>{caption}
        </p>
      </div>
    </article>
  )
}
