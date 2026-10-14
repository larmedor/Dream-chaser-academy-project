import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, scaleIn, staggerContainer, staggerItem } from '../animations/variants'
import CTABand from '../components/CTABand'
import ImageSlot from '../components/ImageSlot'
import SectionHeading from '../components/SectionHeading'

const pillars = [
  ['PURPOSE', 'Helping people understand who they are and why they are here.'],
  ['POTENTIAL', 'Helping individuals discover, develop, and maximize their gifts and abilities.'],
  ['DEVELOPMENT', 'Equipping people with relevant knowledge, skills, mindset, and competencies.'],
  ['ENTREPRENEURSHIP', 'Helping young people transform ideas, gifts, and skills into sustainable value.'],
  ['IMPACT', 'Encouraging individuals to use their growth and success to positively influence others and their communities.'],
]

const academyDescription = 'The Dream Chasers Global Resource Centre is a personal development and entrepreneurship academy committed to helping young people discover their God-given talents, develop relevant skills, pursue their purpose, and achieve meaningful success and fulfilment. We believe that every individual has unique gifts and abilities that can be developed and put to meaningful use.'

function AboutPage() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.main className="inner-page about-page" initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? undefined : { opacity: 0, y: -16 }} transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}>
      <section className="inner-hero inner-hero--split">
        <div className="inner-hero__copy">
          <span className="section-kicker">The Dream Chasers Global Resource Centre</span>
          <h1>About Dream Chasers Academy</h1>
          <p>We exist to help young people discover who they are, develop what they carry, and pursue the purpose they were made for.</p>
        </div>
        <motion.div className="inner-hero__image" variants={reduceMotion ? undefined : scaleIn} initial={reduceMotion ? false : 'hidden'} animate={reduceMotion ? undefined : 'visible'}>
          <ImageSlot slotName="ABOUT-HERO" alt="Dream Chasers Academy community" aspect="4 / 3" />
        </motion.div>
      </section>

      <section className="inner-section about-intro">
        <div className="inner-section__label"><span className="section-kicker">01 — Who We Are</span></div>
        <motion.div className="about-intro__copy" variants={reduceMotion ? undefined : fadeUp} initial={reduceMotion ? false : 'hidden'} whileInView={reduceMotion ? undefined : 'visible'} viewport={{ once: true, margin: '-80px' }}>
          <h2>Every person carries the seed of something meaningful.</h2>
          <p>{academyDescription}</p>
        </motion.div>
      </section>

      <section className="inner-section vision-section">
        <SectionHeading eyebrow="Our Direction" title="Vision & Mission" align="center" />
        <div className="vision-grid">
          <motion.article className="vision-card vision-card--dark" variants={reduceMotion ? undefined : fadeUp} initial={reduceMotion ? false : 'hidden'} whileInView={reduceMotion ? undefined : 'visible'} viewport={{ once: true, margin: '-80px' }}>
            <span className="vision-card__label">Our Vision</span>
            <h3>To help people discover and maximize their God-given talents and fulfil the purpose for which their lives were given.</h3>
          </motion.article>
          <motion.article className="vision-card" variants={reduceMotion ? undefined : fadeUp} initial={reduceMotion ? false : 'hidden'} whileInView={reduceMotion ? undefined : 'visible'} viewport={{ once: true, margin: '-80px' }}>
            <span className="vision-card__label">Our Mission</span>
            <h3>To help people identify their objectives for success, gain clarity and focus, maximize their gifts, fulfil their purpose, and achieve lasting success and fulfilment.</h3>
          </motion.article>
        </div>
      </section>

      <section className="inner-section pillars-section">
        <SectionHeading eyebrow="What Guides Us" title="Our Brand Pillars" description="The beliefs and commitments at the heart of every learning experience." />
        <motion.div className="pillars-grid" variants={reduceMotion ? undefined : staggerContainer} initial={reduceMotion ? false : 'hidden'} whileInView={reduceMotion ? undefined : 'visible'} viewport={{ once: true, margin: '-80px' }}>
          {pillars.map(([title, description], index) => (
            <motion.article className="pillar-card" key={title} variants={reduceMotion ? undefined : staggerItem}>
              <span>0{index + 1}</span><h3>{title}</h3><p>{description}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="inner-section founder-detail">
        <motion.div className="founder-detail__image" variants={reduceMotion ? undefined : scaleIn} initial={reduceMotion ? false : 'hidden'} whileInView={reduceMotion ? undefined : 'visible'} viewport={{ once: true, margin: '-80px' }}>
          <ImageSlot slotName="FOUNDER-PORTRAIT" alt="Portrait of Mr. Matthew Awoyale" aspect="4 / 5" />
        </motion.div>
        <motion.div className="founder-detail__copy" variants={reduceMotion ? undefined : fadeUp} initial={reduceMotion ? false : 'hidden'} whileInView={reduceMotion ? undefined : 'visible'} viewport={{ once: true, margin: '-80px' }}>
          <span className="section-kicker">The Person Behind the Vision</span>
          <h2>Meet the Founder</h2>
          <p>Mr. Matthew Awoyale is a purpose-driven entrepreneur, mentor, and personal development advocate passionate about helping people discover their God-given gifts, maximize their potential, and fulfil their purpose. Driven by a strong belief that every individual has unique abilities and the capacity to create meaningful impact, he founded the Academy to provide young people with the knowledge, skills, clarity, and practical exposure needed to develop their potential and achieve meaningful success. His work focuses on the intersection of purpose, personal development, entrepreneurship, leadership, and human potential, with a particular passion for helping young people transform their gifts into value and their aspirations into tangible results.</p>
          <p className="founder-detail__name">Mr. Matthew Awoyale <span>Founder, Dream Chasers Academy</span></p>
        </motion.div>
      </section>

      <section className="inner-section serve-section">
        <div className="serve-section__copy">
          <span className="section-kicker">Who We Serve</span>
          <h2>For every young person ready to grow.</h2>
          <p>Our programmes are primarily designed for young people between the ages of 10 and 35, regardless of their academic background or status. Whether you are still discovering your abilities, developing an existing talent, exploring entrepreneurship, or seeking greater clarity about your purpose, our programmes provide opportunities for learning, growth, and practical development.</p>
        </div>
        <div className="serve-section__age"><strong>10—35</strong><span>Learning has no single starting point.</span></div>
      </section>

      <section className="inner-section about-approach">
        <SectionHeading eyebrow="How We Learn" title="Development is something you do, not just something you hear." description="We believe meaningful development requires more than theoretical knowledge. Our training combines classroom-based learning with practical, hands-on and field sessions, delivered both virtually and in person." />
      </section>
      <CTABand title="Ready to begin your journey?" primaryLabel="Explore Programmes" primaryTo="/programmes" />
    </motion.main>
  )
}

export default AboutPage