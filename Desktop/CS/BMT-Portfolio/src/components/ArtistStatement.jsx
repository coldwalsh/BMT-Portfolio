const paragraphs = [
  {
    id: 1,
    theme: "How My Understanding of Meditation Shifted",
    text: "When I wrote my first definition of meditation at the start of the semester, I described it the way most people in a Western context probably would: a stress-reduction tool, a way to stay grounded in the present and bring awareness to the good things in one's life. It was personal, individual, and therapeutic — meditation as a coping mechanism rather than a transformative practice. What was missing from this definition is the set of Buddhist ideas and core beliefs that are left out of many secular practices. Is focusing on the breath only meant to bring awareness to the present moment? Or can it also reinforce ideas of non-self, dependent origination, and serve as a vehicle for spreading compassion to others? After studying meditation across Vajrayana, Mahayana, and Theravada Buddhism, I came to understand what these practices are meant to accomplish and how different schools approach enlightenment differently. In Mahayana Buddhism especially, the wellbeing of others is far more central than the wellbeing of a self that Buddhist thought ultimately regards as non-existent — a stark contrast to what most secular meditation practices emphasize. Learning about equalizing self and others, and about the Bodhisattva's goal of liberating all sentient beings from Samsara, revealed the deeply altruistic nature of these practices and completely reshaped my understanding of what meditation is actually for.",
  },
  {
    id: 2,
    theme: "Recurring Themes: Concentration and What It's For",
    text: "The theme that shows up across almost every selection I chose is concentration — specifically, what is the concentration actually for? What is it supposed to accomplish on the path toward enlightenment? Buddhaghosa defines concentration as non-distraction, arising from bliss, which pushed back against my initial assumptions. Initially, I thought the goal was simply to reach a calmer, more aware state. But Buddhaghosa is describing a state of such total absorption that distraction cannot take hold — something quite different from the secular goal of stress relief. My reading notes on the Bodhicaryavatara reinforced this further: the four dhyanas show that concentration is not one flat state but a progression, moving from focused attention on an object, to bliss and joy, to equanimity, and finally to a state where everything, including the object of meditation, falls away entirely. How these qualities lead toward enlightenment, and what enlightenment means beyond simply an escape from Samsara, were questions that stayed with me throughout the semester.",
  },
  {
    id: 3,
    theme: "Tensions and Open Questions",
    text: "The tension I have not fully resolved is between the gradual path and the tantric one. If Theravada and general Mahayana say that concentration and compassion are built slowly over lifetimes, and Vajrayana claims you can work directly on the alchemical infrastructure of the body-mind for accelerated enlightenment, are there meaningful tradeoffs between the two? The idea of accelerated enlightenment feels counterintuitive to ideas of spiritual growth I have encountered both in this class and in other religious traditions. Because Vajrayana is a subset of Mahayana Buddhism, its practitioners share the primary goal of becoming a Bodhisattva rather than simply an arhat. I understand that the advantage of achieving enlightenment in a single lifetime is that practitioners can then help liberate others from Samsara more quickly and effectively once they reach Buddhahood. But the specific mechanism by which these practices help others escape Samsara is something I still do not fully grasp. I understand that embodying the enlightened qualities of a deity is one expression of compassion toward others, but how that translates into helping others achieve their own enlightenment — outside of the practitioner's own internal experience — remains an open question for me.",
  },
]

export default function ArtistStatement() {
  return (
    <section id="statement" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">

        {/* Section header */}
        <div className="mb-16 sm:mb-20 border-b border-white/20 pb-8">
          <p className="text-xs tracking-[0.3em] uppercase text-emerald-400/70 mb-3">Part Two</p>
          <h2 className="text-3xl sm:text-4xl font-light text-white">
            Artist's Statement
          </h2>
          <p className="mt-4 text-white/70 max-w-xl leading-relaxed text-sm sm:text-base">
            How my understanding of meditation
            has changed over the course of the semester.
          </p>
        </div>

        {/* Essay body */}
        <div className="max-w-2xl mx-auto space-y-12 sm:space-y-16">
          {paragraphs.map((para) => (
            <div key={para.id} className="grid md:grid-cols-[200px_1fr] gap-6 sm:gap-8">
              <div className="md:pt-2">
                <p className="text-xs tracking-[0.12em] uppercase text-emerald-500/60 leading-relaxed">
                  {para.theme}
                </p>
              </div>
              <p className="text-white/90 leading-8 text-sm sm:text-base">
                {para.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
