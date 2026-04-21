export default function VisualItem({ number, title, source, caption }) {
  return (
    <article className="grid md:grid-cols-[80px_1fr] gap-6">
      <div className="pt-1">
        <span className="text-xs font-mono text-stone-300">{number}</span>
      </div>
      <div>
        {/* Placeholder visual frame */}
        <div className="w-full aspect-video bg-stone-200 border border-stone-300 flex flex-col items-center justify-center mb-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-stone-200 to-stone-300" />
          <div className="relative z-10 text-center px-6">
            <div className="w-12 h-12 border border-stone-400 flex items-center justify-center mx-auto mb-3">
              <svg className="w-5 h-5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-stone-500 text-sm font-light">{title}</p>
          </div>
        </div>
        <div className="mb-2">
          <span className="text-xs text-stone-900">{source}</span>
        </div>
        <p className="text-sm text-stone-400 leading-relaxed bg-stone-900 px-4 py-3 border-l border-stone-200">
          <span className="font-medium text-stone-100">Caption: </span>{caption}
        </p>
      </div>
    </article>
  )
}
