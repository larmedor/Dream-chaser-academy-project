import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, HeartHandshake, HandHeart, UsersRound } from 'lucide-react'
import { fadeUp, staggerContainer, staggerItem } from '../animations/variants'
import CTABand from '../components/CTABand'
import ImageSlot from '../components/ImageSlot'
import SectionHeading from '../components/SectionHeading'
import { communityStories } from '../data/impactStories'

const helpWays = [
  { title: 'Donate', text: 'Support our work with vulnerable children.', Icon: HandHeart },
  { title: 'Volunteer', text: 'Give your time and skills to make a difference.', Icon: HeartHandshake },
  { title: 'Partner', text: 'Collaborate with us on community initiatives.', Icon: UsersRound },
]

function CommunityVoicePage() {
  const reduceMotion = useReducedMotion()
  const [supportRequested, setSupportRequested] = useState(false)

  return (
    <motion.main className="inner-page community-page" initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? undefined : { opacity: 0, y: -16 }} transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}>
      <section className="inner-hero inner-hero--dark community-hero">
        <div className="inner-hero__copy">
          <span className="section-kicker">Community Voice · An NGO Initiative</span>
          <h1>Giving Back.<br />Creating Impact.</h1>
          <p>When a community grows together, every person has the opportunity to move forward.</p>
        </div>
        <div className="inner-hero__image"><ImageSlot slotName="COMMUNITY-HERO" alt="Community Voice initiative" aspect="4 / 3" /></div>
      </section>

      <section className="inner-section community-about">
        <div className="inner-section__label"><span className="section-kicker">01 — Our Community</span></div>
        <motion.div className="community-about__copy" variants={reduceMotion ? undefined : fadeUp} initial={reduceMotion ? false : 'hidden'} whileInView={reduceMotion ? undefined : 'visible'} viewport={{ once: true, margin: '-80px' }}>
          <h2>Care that reaches beyond ourselves.</h2>
          <p>Community Voice is an NGO initiative through which we give back to society and support vulnerable members of the community, particularly motherless, homeless, and less-privileged children. Through this initiative, we seek to contribute to the wellbeing and development of people who need support and create opportunities for positive community impact.</p>
        </motion.div>
      </section>

      <section className="inner-section community-stories">
        <SectionHeading eyebrow="Community Stories" title="Every act of care matters." />
        <motion.div className="community-stories__grid" variants={reduceMotion ? undefined : staggerContainer} initial={reduceMotion ? false : 'hidden'} whileInView={reduceMotion ? undefined : 'visible'} viewport={{ once: true, margin: '-80px' }}>
          {communityStories.map((story, index) => (
            <motion.article className="community-story-card" key={index} variants={reduceMotion ? undefined : staggerItem}>
              <ImageSlot slotName={`COMMUNITY-STORY-0${index + 1}`} alt="Community Voice story image placeholder" aspect="4 / 3" />
              <span className="section-kicker">A Community Voice Story</span>
              <h3>{story.title}</h3>
              <p>{story.body}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="inner-section ways-section">
        <SectionHeading eyebrow="Stand with Us" title="Ways to Help" description="Your time, care, and collaboration can make a lasting difference." align="center" />
        <motion.div className="ways-grid" variants={reduceMotion ? undefined : staggerContainer} initial={reduceMotion ? false : 'hidden'} whileInView={reduceMotion ? undefined : 'visible'} viewport={{ once: true, margin: '-80px' }}>
          {helpWays.map(({ title, text, Icon }, index) => (
            <motion.article className="way-card" key={title} variants={reduceMotion ? undefined : staggerItem}>
              <span className="way-card__number">0{index + 1}</span><Icon size={30} strokeWidth={1.2} aria-hidden="true" /><h3>{title}</h3><p>{text}</p>
            </motion.article>
          ))}
        </motion.div>
        <div className="ways-section__action">
          <button className="button-link" type="button" onClick={() => setSupportRequested(true)}>Support Community Voice <ArrowUpRight size={16} /></button>
          {supportRequested && <p role="status">Thank you for your interest. Please get in touch to explore ways to support Community Voice.</p>}
        </div>
      </section>
      <CTABand title="Together, we can create more possibility." description="Join us in building a more caring and supportive community." primaryLabel="Get in Touch" primaryTo="/contact" />
    </motion.main>
  )
}

export default CommunityVoicePage