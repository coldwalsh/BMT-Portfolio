const paragraphs = [
  {
    id: 1,
    theme: "Opening — A Question That Wouldn't Stay Still",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. I entered this course believing I understood what meditation was — a technique for calming the mind, a stress-management practice, something measurable and exportable from its original context. The materials I have curated here trace the gradual undoing of that assumption.",
  },
  {
    id: 2,
    theme: "Recurrence — Attention as Subject",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Looking back across my selected items, a recurring question emerges: what exactly is the relationship between attention and practice? The passage I selected from the primary text (Item 01) and my own in-class writing (Item 05) both circle this question from different angles. One is authoritative, historical, doctrinal; the other is confused, immediate, first-person. Together they mark a movement from inherited definition toward lived inquiry.",
  },
  {
    id: 3,
    theme: "Shift — The Interview and the Wandering Mind",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. The single most significant reorientation I experienced this semester came not from a text but from a conversation — represented in Item 04. The interviewee's observation that distraction is not the failure of meditation but its very material changed how I read everything that came after. Buddhist theories of mind that had seemed abstract suddenly described something I recognized from experience. The wandering mind is not an obstacle to practice; it is the practice's occasion.",
  },
  {
    id: 4,
    theme: "Tension — The Problem of the Observer",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis. A tension I have not fully resolved: if meditation involves observing the mind, who or what does the observing? This question, which surfaces in Item 05, is not merely philosophical — it cuts to the heart of what Buddhist epistemology asks us to examine. My prior assumptions were grounded in a stable, unified self who could step back and watch its own thoughts. The readings on no-self (anattā) made this model increasingly untenable, but I have not yet found a replacement that feels fully adequate.",
  },
  {
    id: 5,
    theme: "Visual Knowledge — Meditation in Space",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. The visual element I selected (Item 06) represents something the written materials could not fully capture: meditation as a practice embedded in material and spatial context. Encountering [describe image/object here] reminded me that meditation is not a purely internal event — it is shaped by architecture, ritual objects, posture, community, and time. This shifted my understanding from meditation as a mental technique to meditation as a form of cultural practice with ethical and historical dimensions.",
  },
  {
    id: 6,
    theme: "Closing — What Remains Open",
    text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. What I carry forward from this semester is less a definition of meditation than a set of better questions. How does a practice designed to examine experience transform the experiencer? What is gained and what is lost when contemplative traditions migrate across cultural and historical contexts? How do ethical commitments shape — or emerge from — meditative practice? I do not expect these questions to resolve. But I have learned, perhaps, how to sit with them.",
  },
]

export default function ArtistStatement() {
  return (
    <section id="statement" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Section header */}
        <div className="mb-20 border-b border-white/30 pb-8">
          <p className="text-xs tracking-[0.3em] uppercase text-white/60 mb-3">Part Two</p>
          <h2 className="text-4xl font-light text-white">
            Artist's Statement
          </h2>
          <p className="mt-4 text-white/70 max-w-xl leading-relaxed">
            How my understanding of meditation
            has changed over the course of the semester.
          </p>
          <div className="mt-6 flex gap-8 text-xs text-white/50">
            <span>~700 words</span>
            <span>·</span>
            <span>Spring 2025</span>
          </div>
        </div>

        {/* Essay body */}
        <div className="max-w-2xl mx-auto space-y-16">
          {paragraphs.map((para) => (
            <div key={para.id} className="grid md:grid-cols-[200px_1fr] gap-8">
              <div className="md:pt-1">
                <p className="text-xs text-white/50 leading-relaxed italic">
                  {para.theme}
                </p>
              </div>
              <p
                className="text-white/90 leading-8 text-base"
               
              >
                {para.text}
              </p>
            </div>
          ))}
        </div>

        {/* Word count note */}
        <div className="max-w-2xl mx-auto mt-16 pt-8 border-t border-white/20">
          <p className="text-xs text-white/40">
            Word count: approximately 620 words. All written excerpts and captions in Part 1 total approximately 380 words.
          </p>
        </div>

      </div>
    </section>
  )
}
