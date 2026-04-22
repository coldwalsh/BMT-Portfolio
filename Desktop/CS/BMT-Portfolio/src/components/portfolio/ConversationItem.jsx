export default function ConversationItem({ number, quote, source, date, caption }) {
  return (
    <article className="grid md:grid-cols-[80px_1fr] gap-6">
      <div className="pt-1">
        <span className="text-xs font-mono text-emerald-600/70">{number}</span>
      </div>
      <div>
        <div className="mb-2 flex flex-wrap items-baseline gap-3">
          <span className="text-xs sm:text-sm tracking-widest uppercase text-emerald-400/70">Conversation</span>
          <span className="text-sm text-white/30">·</span>
          <span className="text-xs sm:text-sm text-white/50">{date}</span>
        </div>
        <div className="border-l-2 border-emerald-700 pl-6 mb-4">
          <blockquote className="text-white/90 whitespace-pre-line text-sm sm:text-base leading-relaxed">
            "{quote}"
          </blockquote>
          <cite className="mt-2 block text-sm text-white/55 not-italic">{source}</cite>
        </div>
        <p className="text-sm sm:text-md text-white/65 leading-relaxed">
          <span className="font-medium text-emerald-400">Caption: </span>{caption}
        </p>
      </div>
    </article>
  )
}
