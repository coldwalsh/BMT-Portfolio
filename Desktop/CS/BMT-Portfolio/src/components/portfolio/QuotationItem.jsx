export default function QuotationItem({ number, quote, source, sourceDetail, caption }) {
  return (
    <article className="grid md:grid-cols-[80px_1fr] gap-6">
      <div className="pt-1">
        <span className="text-sm font-mono text-emerald-600/70">{number}</span>
      </div>
      <div>
        <div className="border-l-2 border-emerald-700 pl-6 mb-4">
          <blockquote className="text-white/90 text-base sm:text-lg font-light whitespace-pre-line leading-relaxed italic">
            "{quote}"
          </blockquote>
          <cite className="mt-3 block text-sm text-white/55 not-italic">
            — {source}{sourceDetail && <span className="text-white/40">{sourceDetail}</span>}
          </cite>
        </div>
        <p className="text-sm sm:text-md leading-relaxed bg-stone-900/80 text-stone-200 px-4 py-3 border-l-2 border-emerald-800">
          <span className="font-medium text-emerald-400">Caption: </span>{caption}
        </p>
      </div>
    </article>
  )
}
