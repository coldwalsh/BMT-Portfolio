export default function WritingExcerpt({ number, type, date, text, caption }) {
  return (
    <article className="grid md:grid-cols-[80px_1fr] gap-6">
      <div className="pt-1">
        <span className="text-xs font-mono text-white/40">{number}</span>
      </div>
      <div>
        <div className="mb-2 flex flex-wrap items-baseline gap-3">
          <span className="text-xs tracking-widest uppercase text-white/60">{type}</span>
          <span className="text-xs text-white/30">·</span>
          <span className="text-xs text-white/50">{date}</span>
        </div>
        <div className="bg-stone-900 border border-stone-600 p-5 mb-4">
          <p className="text-stone-200 leading-relaxed text-sm">
            {text}
          </p>
        </div>
        <p className="text-sm text-white/65 leading-relaxed">
          <span className="font-medium text-white/80">Caption: </span>{caption}
        </p>
      </div>
    </article>
  )
}
