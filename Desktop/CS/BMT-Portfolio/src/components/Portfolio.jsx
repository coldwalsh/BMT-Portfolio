import QuotationItem from './portfolio/QuotationItem'
import WritingExcerpt from './portfolio/WritingExcerpt'
import VisualItem from './portfolio/VisualItem'
import ConversationItem from './portfolio/ConversationItem'

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">

        {/* Section header */}
        <div className="mb-16 sm:mb-20 border-b border-white/20 pb-8">
          <p className="text-xs tracking-[0.3em] uppercase text-emerald-400/70 mb-3">Part One</p>
          <h2 className="text-3xl sm:text-4xl font-light text-white">
            Curated Portfolio
          </h2>
          <p className="mt-4 text-white/70 max-w-xl leading-relaxed text-sm sm:text-base">
            Selected materials from the semester: passages, writing, and images that
            show the moments of change in my understanding of meditation and Buddhism.
          </p>
        </div>

        {/* Category I: Readings */}
        <div className="mb-16 sm:mb-20">
          <CategoryLabel label="I" title="Quotations from Assigned Readings" />
          <div className="space-y-10 sm:space-y-12 mt-8 sm:mt-10">
            <QuotationItem
              number="01"
              quote={`What are [Concentration's] characterisitic, function, manifestation, and proximate cause?\n
              Concentration has non-distraction as its characteristic. Its function is to eliminate
              distraction. It is manifested as non-wavering. Because of the words, "Being blissful,
              his mind becomes concentrated" (D I 73), its proximate cause is bliss.`}
              sourceDetail="Buddhagosa Path of Purification, Part 2: Concentration (Samādhi) 3"
              caption="This quote is from an earlier reading in the semester that focused on the role of concentration in meditation and how concentration helps manifest certain enlightened qualities.
              Concentration is outlined as a state of consistent and blissful non-distraction. These qualities allow for complete focus and equanimity in the meditator. By embodying these qualities, the three poisons dissolve and the
              meditator is able to separate themselves from their selfish desires. This adjusted my view of meditation away from
              the superficiality of focusing soley on the present moment as a way to relieve stress; a common theme in secular meditation practices"
            />
            <QuotationItem
              number="02"
              quote={"Meditation on emptiness is essential, but meditation on emptiness alone is inadequate for the achievement of enlightenment. Meditation on emptiness needs to be conjoined with altruism and appropriate skillful methods to alleviate the sufferings of and bring happiness to all living beings\u201d"}
              sourceDetail={<><em>Imagining Enlightenment: Icons and Ideology in Vajrayāna Buddhist Practice</em> by Karma Lekshe Tsomo (pg. 39)</>}
              caption="This excerpt adds on to the the importance of emptiness which was seen previously with the reading about
              concentration and how focus can create this emptiness. However, because this is from a Vajrayāna text, a branch of Mahayāna Buddhism,
              the focus becomes more on on the ideals of a bodhissatva. Kindness, compassion, and allievating the suffering of all living beings are
              ways in which emptiness from concentration in meditation is used: an allieviation of selfish desires to help others escape from samsara."
            />
          </div>
        </div>

        {/* Category II: Own Writing */}
        <div className="mb-16 sm:mb-20">
          <CategoryLabel label="II" title="Excerpts from My Own Writing" />
          <div className="space-y-10 sm:space-y-12 mt-8 sm:mt-10">
            <WritingExcerpt
              number="03"
              type="In-Class Writing"
              date="Week 1 — February 2026"
              text="Meditation is a mindfulness practice that involves contemplation and has a variety of different goals. Some meditation is meant to change your physiological state and others are more focused on emotions, feelings and thoughts. It is often a reflective practice that centers on focus inwards and outwards to the current environment the practitioner is in. Lots of anxiety and stress comes from mulling over the past and cowering in fear about the future. Focusing on the present and our physical state is a good way to reduce anxiety, bringing us back to what is in front of us, and therefore creating clarity about what it is that we want and need."
              caption="Initial definition of meditation from the first in-class writing assignment. A noticeably more secular definition than my definition at the end."
            />
            <WritingExcerpt
              number="04"
              type="In-Class Writing"
              date="Week 14 — April 2026"
              text="Meditation is a practice that involves an object, something to focus/concentrate on, a technique (how someone should focus or what about the object to focus on), and a theory (what the concentration is supposed to achieve/evoke in the meditator). In Buddhism, meditation and the concentration involved is aimed at enlightened qualities, embodying those qualities, and or quieting and letting go of qualities that conflict with those. Specifically, concentration allows for complete focus and equanimity that allows the meditator to reach a blissful emptiness where it is easier to let go of self-centered thought and desire. Meditation is also commonly used as a way to focus on compassion for others, both friends and foe equally, to change inferior or superior perspectives we have of different people, and to see everyone as morally equal to each other. The body is often seen as a vehicle for enlightenment and through concentration, aspects of the body can be utilized to evoke enlightened qualities like dissolution of self, impermanence, non-attachment, non-dualism."
              caption="Revised definition of mindfulness from the final in-class writing asignment."
            />
            <WritingExcerpt
              number="05"
              type="Reading Notes"
              date="Feburary 19, 2026"
              text={`104. You may argue: compassion causes us so much suffering,
              Why force it to arise? Yet when one sees how much the
              world suffers, how can this suffering from compassion be
              considered great? (Chapter 8 of the Bodhicaryavatara) \n
              The perfection of meditative absorption is the fifth of the sixth Mahayana perfections. Which are the virtues that Bodhisattvas need to cultivate in order to obtain enlightenment for all beings (people), karmic entities. This chapter focuses on concentration or dhyana. There are four of them that we have already talked about in class that progress from a concentration on an object, to bliss and joy, to equanimity, and then a disconnect from the object and meditation entirely. The quote above acknowledges that the action of compassion for others, exhibited by Bodhissatvas, leads to suffering, but this suffering in comparison to other sources of suffering in the world is insignificant. In this chapter, it shows how meditation can be used to enable compassion by removing distractions that make us selfish, causing us to realize our equality with others (exchange of self and other), and an unbroken commitment to help all sentient beings obtain enlightenment \n
              The website, The Brightly Shining Sun: A Step-by-Step Guide to Meditating on the Bodhicaryāvatāra by Patrul Rinpoche, talks more about this fifth perfection or paramita. To obtain meditative concentration, we must abandon the adverse factors of mundane concerns, attachment to people and things, and let go of discursive thought, focus on the negative effects of desire and the eight worldly concerns. There are two objects of practice, equalizing oneself and other and exchange of self and other. This is what I was talking about in the previous paragraph and what we have talked about in class. It is the realization that we all want happiness and freedom from suffering and are equal in this way. `}
              caption="Reading Notes #10 on Bodhicaryavatara and the influence of compassion on meditative absorption"
            />
          </div>
        </div>

        {/* Category III: Visual / Multimedia */}
        <div className="mb-16 sm:mb-20">
          <CategoryLabel label="III" title="Visual & Multimedia Element" />
          <div className="mt-8 sm:mt-10">
            <VisualItem
              number="06"
              source="Visual Element: Mural of the Vajrayāna Inner Alchemical Practices"
              caption={"This mural depicts the subtle or \u2018inner alchemical\u2019 body central to Vajray\u0101na Buddhist practice, the network of channels (n\u0101\u1e0d\u012bs), energy winds (pr\u0101\u1e47as), and seed-syllables that advanced yogic exercises are designed to affect. In Vajray\u0101na Buddhism, meditation is both a mental and physical practice, through breathwork, visualization, and bodily posture, the practitioner harnesses inner \u201csubtle energies\u201d and directs them toward the dissolution of self/ego and the realization of buddha-hood. Where Therav\u0101da and general Mah\u0101y\u0101na traditions emphasize concentration and insight developed gradually over several lifetimes, the Vajray\u0101na path promises accelerated enlightenment by working directly on the alchemical nature of the body-mind, transforming physical sensation and information into wisdom rather than trying to dissolve it for purposes like the dissolution of ego. This image reframed meditation for me as something that can utilize hidden energies of the body to transform the practitioner spiritually going beyond the basic level of focusing on the breath."}
            />
          </div>
        </div>

        {/* Category IV: Interview */}
        <div className="mb-16 sm:mb-20">
          <CategoryLabel label="IV" title="Excerpt from Interviews"/>
          <div className="mt-8 sm:mt-10">
            <ConversationItem
              number="07"
              quote={`[Colin] What do you think the purpose of the meditation was? What was it trying to cultivate? \n
              [Bobby] Definitely compassion, or like, wishing for the well-being of others. In the context of Buddhism, the practice is really about the dissolution of the self, by putting yourself in other people's shoes. And I think, similar to what the Heart Sutra points to, it's about recognizing that we're all just kind of here, like, the reason someone is a friend, an enemy, or a neutral person in your life comes down to karma. It's not as fixed or personal as we make it out to be. And at one point, as the tradition says, all of these beings were our mothers, in the context of our past lives. So when you sit with that during the meditation, it kind of dissolves the boundaries you've built around who deserves your compassion and who doesn't.`}
              date="February 20, 2026"
              caption="Excerpt from an interview with Bobby Hoey and myself discussing the intentions of the in-class meditation where we were told to focus on taking
              away the suffering of a loved one, a neutral person, and someone we dislike when breathing in and giving them compassion as we breathed out. "
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
      <span className="text-emerald-600 text-sm font-mono">{label}</span>
      <h3 className="text-base sm:text-lg font-light text-white tracking-wide">
        {title}
        {optional && (
          <span className="ml-2 text-xs text-white/50 normal-case tracking-normal">(optional)</span>
        )}
      </h3>
    </div>
  )
}
