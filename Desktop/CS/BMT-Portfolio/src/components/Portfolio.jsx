import QuotationItem from './portfolio/QuotationItem'
import WritingExcerpt from './portfolio/WritingExcerpt'
import VisualItem from './portfolio/VisualItem'
import ConversationItem from './portfolio/ConversationItem'

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Section header */}
        <div className="mb-20 border-b border-white/30 pb-8">
          <p className="text-xs tracking-[0.3em] uppercase text-white/60 mb-3">Part One</p>
          <h2 className="text-4xl font-light text-white">
            Curated Portfolio
          </h2>
          <p className="mt-4 text-white/70 max-w-xl leading-relaxed">
            Selected materials from the semester: passages, writing, and images that
            demonstrate changing moments in my understanding of meditation and Buddhism. 
          </p>
        </div>

        {/* Category I: Readings */}
        <div className="mb-20">
          <CategoryLabel label="I" title="Quotations from Assigned Readings" />
          <div className="space-y-12 mt-10">
            <QuotationItem
              number="01"
              quote="What are its [Concentration's] characterisitic, function, manifestation, and proximate cause? 
              Concentration has non-distraction as its characteristic. 3 Its function is to eliminate
              distraction. It is manifested as non-wavering. Because of the words, “Being blissful,
              his mind becomes concentrated” (D I 73), its proximate cause is bliss."
              sourceDetail="Buddhagosa Path of Purification, Part 2: Concentration (Samādhi) 3"
              caption="This quote is from an earlier reading in the semester that focused on the role of concentration in meditation and how concentration helps manifest certain enlighten qualities
              Concentration is outlined as a state of consistent and blissful non-distraction. These qualities allow for complete focus and equanimity in the meditator. By embodying these qualities, the three poisons dissolve and the
              meditator is able to seperate themselves from their selfish desires. This adjusted my view of meditation away from 
              the superficiality of focusing on soley the present moment as a way to relieve stress; a common theme in secular meditation practices"
            />
            <QuotationItem
              number="02"
              quote="Meditation on emptiness is essential, but meditation on emptiness alone is inadequate for the achievement of enlightenment. Meditation on emptiness needs to be conjoined with altruism and appropriate skillful methods to alleviate the sufferings of and bring happiness to all living beings”"
              sourceDetail="Karma Lekshe Tsomo Imagining EnlightenmentL Icons and Ideology in Vajrayāna Buddhist Practice, Pg. 39"
              caption="This excerpt adds on to the the importance of emptiness which was seen previously with the reading about 
              concentration and how focus can create this emptiness. However, because this is from a Vajrayāna text, a branch of Mahayāna Buddhism, 
              the focus becomes more on on the ideals of a bodhissatva. Kindness, compassion, and allievating the suffering of all living beings are 
              ways in which emptiness from concentration in meditation is used: an allieviation of selfish desires to help other escape from samsara."
            />
          </div>
        </div>

        {/* Category II: Own Writing */}
        <div className="mb-20">
          <CategoryLabel label="II" title="Excerpts from My Own Writing" />
          <div className="space-y-12 mt-10">
            <WritingExcerpt
              number="03"
              type="Reading Notes"
              date="Week 4 — February 2025"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. My initial reaction to this reading was confusion — the word 'meditation' seemed to dissolve the more I tried to pin it down. Does sitting still constitute practice? Does intention matter?"
              caption="Taken from my reading notes on week four's primary text. This entry marks an early turning point: the moment I stopped assuming I already understood what meditation meant and began treating it as a genuine question."
            />
            <WritingExcerpt
              number="04"
              type="Interview Transcript"
              date="Week 9 — March 2025"
              text="Interviewee: '...it is less about emptying the mind and more about learning to notice where the mind has already gone.' [pause] I never thought of it that way — that the wandering itself is the practice, not the failure of the practice. [Laughter.] Me: 'So the distraction is the teacher?' Interviewee: 'In a sense, yes.'"
              caption="Excerpt from an interview conducted for the semester project. This exchange shifted my understanding from meditation as achievement to meditation as relationship — with one's own attention."
            />
            <WritingExcerpt
              number="05"
              type="In-Class Writing"
              date="Week 11 — March 2025"
              text="Lorem ipsum dolor sit amet. If meditation is attention, then what is attention? The prompt asked us to write for ten minutes without stopping. I noticed my hand moving before I had decided what to say. Observation precedes intention. Or does it? I kept returning to the question: who is the one watching?"
              caption="Written during an in-class exercise designed to blur the line between subject and object. This piece surfaces a tension I return to throughout the semester: the recursiveness of trying to observe observation itself."
            />
          </div>
        </div>

        {/* Category III: Visual / Multimedia */}
        <div className="mb-20">
          <CategoryLabel label="III" title="Visual & Multimedia Element" />
          <div className="mt-10">
            <VisualItem
              number="06"
              title="[Image / Photograph / Diagram placeholder]"
              source="Context: Week 7 — Site Visit / Class Session / Personal Collection"
              caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. This image represents a significant shift in my learning: the first time I understood meditation not as an internal mental event but as something embedded in space, ritual, and material culture. The visual qualities of the object — its texture, its silence — said something the readings had not."
            />
          </div>
        </div>

        {/* Category IV: Conversation (Optional) */}
        <div className="mb-20">
          <CategoryLabel label="IV" title="Quotations from Conversations" optional />
          <div className="mt-10">
            <ConversationItem
              number="07"
              quote="I think what surprised me most was realizing that boredom might actually be the point — like the practice is designed to make you confront what you avoid."
              source="Classmate (permission obtained)"
              date="Week 13 Discussion — April 2025"
              caption="Shared during a small-group discussion on contemplative discomfort. This observation crystallized something I had been circling around: that meditation might be less about achieving a state and more about tolerating the states we habitually flee."
            />
          </div>
        </div>

      </div>
    </section>
  )
}

function CategoryLabel({ label, title, optional }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="text-white/40 text-sm font-mono">{label}</span>
      <h3 className="text-lg font-light text-white tracking-wide">
        {title}
        {optional && (
          <span className="ml-2 text-xs text-white/50 normal-case tracking-normal">(optional)</span>
        )}
      </h3>
    </div>
  )
}
