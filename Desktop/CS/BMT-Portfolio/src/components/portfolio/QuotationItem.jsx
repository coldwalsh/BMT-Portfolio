export default function QuotationItem({ number, quote, source, sourceDetail, caption }) {
  return (
    <article className="grid md:grid-cols-[80px_1fr] gap-6">
      <div className="pt-1">
        <span className="text-xs font-mono text-white/40">{number}</span>
      </div>
      <div>
        <div className="border-l-2 border-white/40 pl-6 mb-4">
          <blockquote className="text-white/90 text-lg font-light leading-relaxed italic">
            "{quote}"
          </blockquote>
          <cite className="mt-3 block text-sm text-white/55 not-italic">
            — {source}{sourceDetail && <span className="text-white/40">, {sourceDetail}</span>}
          </cite>
        </div>
        <p className="text-sm leading-relaxed bg-stone-900 text-stone-200 px-4 py-3 border-l border-stone-600">
          <span className="font-medium text-white">Caption: </span>{caption}
        </p>
      </div>
    </article>
  )
}
