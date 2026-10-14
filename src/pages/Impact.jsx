import { motion, useReducedMotion } from 'framer-motion'
import { scaleIn, staggerContainer, staggerItem } from '../animations/variants'
import CTABand from '../components/CTABand'
import ImageSlot from '../components/ImageSlot'
import SectionHeading from '../components/SectionHeading'
import StatCounter from '../components/StatCounter'
import { impactStats } from '../data/stats'
import { impactStories } from '../data/impactStories'

const impactLabels = ['People Trained', 'Programmes Delivered', 'Entrepreneurs Reached', 'Communities Reached', 'Years of Impact']

function ImpactPage() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.main className="inner-page impact-page" initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? undefined : { opacity: 0, y: -16 }} transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}>
      <section className="inner-hero inner-hero--split impact-hero">
        <div className="inner-hero__copy">
          <span className="section-kicker">Potential into Purpose</span>
          <h1>Our Impact</h1>
          <p>Our work is centred on helping people move from potential to purpose, and from purpose to meaningful action. Through our training programmes, entrepreneurship initiatives, conferences, digital platforms, podcast, and community projects, we create opportunities for young people to learn, develop, connect, and grow.</p>
        </div>
        <motion.div className="inner-hero__image" variants={reduceMotion ? undefined : scaleIn} initial={reduceMotion ? false : 'hidden'} animate={reduceMotion ? undefined : 'visible'}>
          <ImageSlot slotName="IMPACT-HERO" alt="Dream Chasers Academy community impact" aspect="4 / 3" />
        </motion.div>
      </section>

      <div className="impact-marquee" aria-label={impactLabels.join(' • ')}>
        <div className="impact-marquee__track">
          {[...impactLabels, ...impactLabels].map((label, index) => <span key={`${label}-${index}`}>{label}<i>✳</i></span>)}
        </div>
      </div>

      <section className="inner-section impact-stats-section">
        <SectionHeading eyebrow="The Journey in Numbers" title="Progress with purpose." description="Every number represents a possibility awakened. Figures to be confirmed by the organization." />
        <div className="impact-stats-grid">{impactStats.map((stat) => <StatCounter key={stat.label} {...stat} />)}</div>
      </section>

      <section className="inner-section impact-stories-section">
        <SectionHeading eyebrow="Voices of Change" title="Stories of becoming." />
        <motion.div className="impact-stories-grid" variants={reduceMotion ? undefined : staggerContainer} initial={reduceMotion ? false : 'hidden'} whileInView={reduceMotion ? undefined : 'visible'} viewport={{ once: true, margin: '-80px' }}>
          {impactStories.map((story, index) => (
            <motion.article className="impact-story-card" key={`${story.name}-${index}`} variants={reduceMotion ? undefined : staggerItem}>
              <span className="impact-story-card__index">0{index + 1} / PARTICIPANT STORY</span>
              <blockquote>{story.quote}</blockquote>
              <p>{story.name}<span>{story.programme}</span></p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="recognition-section">
        <div><span className="section-kicker">Recognition & Achievements</span><h2>Milestones that mark the journey.</h2></div>
        <p>[Awards, certifications, recognitions, milestones and professional affiliations to be provided.]</p>
      </section>

      <section className="inner-section partners-section">
        <div className="partners-section__intro">
          <SectionHeading eyebrow="Together, We Grow" title="Partners & Affiliations" description="We are committed to building meaningful relationships with organizations, institutions, businesses, and individuals who share our vision of developing people and creating positive impact." />
        </div>
        <div className="partner-slots" aria-label="Partner logo placeholders">
          {[1, 2, 3, 4].map((number) => <ImageSlot key={number} slotName={`PARTNER-LOGO-0${number}`} alt={`Partner organization logo placeholder ${number}`} aspect="3 / 2" />)}
        </div>
      </section>
      <CTABand title="Partner with us." primaryLabel="Get in Touch" primaryTo="/contact" />
    </motion.main>
  )
}

export default ImpactPage