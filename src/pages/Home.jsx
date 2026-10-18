import { useRef } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { easeOutQuint, fadeUp, fadeUpBlur, lineReveal, scaleIn, staggerContainer } from '../animations/variants'
import founderPortrait from '../assets/images/Founder Awoyale Mattew.jpg'
import CTABand from '../components/CTABand'
import ImageSlot from '../components/ImageSlot'
import ProgrammeCard from '../components/ProgrammeCard'
import SectionHeading from '../components/SectionHeading'
import StatCounter from '../components/StatCounter'
import { programmes } from '../data/programmes'
import { impactStats } from '../data/stats'
import { featuredTestimonial } from '../data/testimonials'

const approachPoints = [
  'Understand important concepts',
  'Develop practical skills',
  'Apply what they learn',
  'Build confidence and competence',
  'Develop purposeful goals',
  'Translate their potential into meaningful action',
]

function HomeHero() {
  const heroRef = useRef(null)
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])

  return (
    <section className="home-hero" ref={heroRef} aria-labelledby="home-heading">
      <motion.div className="home-hero__visual" style={{ y: shouldReduceMotion ? 0 : imageY }}>
        <motion.div
          className="home-hero__ken-burns"
          initial={shouldReduceMotion ? false : { scale: 1 }}
          animate={{ scale: shouldReduceMotion ? 1 : 1.08 }}
          transition={{ duration: shouldReduceMotion ? 0 : 12, ease: 'linear' }}
        >
          <ImageSlot src="" alt="Dream Chasers Academy homepage hero" slotName="HOME-HERO" aspect="auto" className="home-hero__image" />
        </motion.div>
      </motion.div>
      <div className="home-hero__overlay" />
      <motion.div
        className="home-hero__content"
        initial={shouldReduceMotion ? false : 'hidden'}
        animate={shouldReduceMotion ? undefined : 'visible'}
        variants={staggerContainer}
      >
        <motion.p className="home-hero__eyebrow" variants={shouldReduceMotion ? undefined : fadeUp}>
          The Dream Chasers Global Resource Centre
        </motion.p>
        <motion.h1 id="home-heading" className="home-hero__title" variants={shouldReduceMotion ? undefined : staggerContainer}>
          {['Discover Your Gift.', 'Maximize Your Potential.', 'Fulfil Your Purpose.'].map((line, index) => (
            <span className="home-hero__line-mask" key={line}>
              <motion.span
                className="home-hero__line"
                variants={shouldReduceMotion ? undefined : lineReveal}
                transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: index * 0.12, ease: easeOutQuint }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </motion.h1>
        <motion.p className="home-hero__description" variants={shouldReduceMotion ? undefined : fadeUp}>
          We help young people discover their God-given gifts, develop their potential, pursue their purpose, and turn their abilities into meaningful success.
        </motion.p>
        <motion.div className="home-hero__actions" variants={shouldReduceMotion ? undefined : fadeUp}>
          <Link className="button-link" to="/programmes">Explore Our Programmes <ArrowUpRight size={16} aria-hidden="true" /></Link>
          <Link className="button-link button-link--outline" to="/contact">Get Started <ArrowRight size={16} aria-hidden="true" /></Link>
        </motion.div>
      </motion.div>
      <a className="home-hero__scroll" href="#who-we-are" aria-label="Scroll to learn about us">
        <span>Scroll to explore</span><ArrowDown size={16} aria-hidden="true" />
      </a>
      <p className="home-hero__index" aria-hidden="true">01 / 08</p>
    </section>
  )
}

function HomePage() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.main
      className="home-page"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={shouldReduceMotion ? undefined : { opacity: 0, y: -16 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: easeOutQuint }}
    >
      <HomeHero />

      <section className="home-section who-section" id="who-we-are">
        <div className="who-section__inner">
          <motion.div
            className="who-section__label"
            variants={shouldReduceMotion ? undefined : fadeUp}
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView={shouldReduceMotion ? undefined : 'visible'}
            viewport={{ once: true, margin: '-80px' }}
          >
            <span className="section-kicker">01 — Who We Are</span>
            <span className="who-section__rule" />
          </motion.div>
          <motion.div
            className="who-section__copy"
            variants={shouldReduceMotion ? undefined : fadeUp}
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView={shouldReduceMotion ? undefined : 'visible'}
            viewport={{ once: true, margin: '-80px' }}
          >
            <h2>The future is already within you.</h2>
            <p>The Dream Chasers Global Resource Centre is a personal development and entrepreneurship academy committed to helping young people discover their God-given talents, develop relevant skills, pursue their purpose, and achieve meaningful success and fulfilment. We believe that every individual has unique gifts and abilities that can be developed and put to meaningful use.</p>
            <Link className="text-link" to="/about">Learn More <ArrowUpRight size={17} aria-hidden="true" /></Link>
          </motion.div>
          <motion.div
            className="who-section__aside"
            variants={shouldReduceMotion ? undefined : scaleIn}
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView={shouldReduceMotion ? undefined : 'visible'}
            viewport={{ once: true, margin: '-80px' }}
          >
            <span className="who-section__aside-number">D / C</span>
            <p>Discover.<br />Develop.<br />Do.</p>
            <span className="who-section__aside-caption">A journey of becoming</span>
          </motion.div>
        </div>
      </section>

      <section className="home-section programmes-section">
        <div className="section-shell">
          <div className="programmes-section__topline">
            <SectionHeading eyebrow="Learn · Grow · Become" title="Our Programmes" description="Practical experiences and conversations to help you turn your potential into purpose and action." />
            <Link className="text-link programmes-section__all" to="/programmes">View All Programmes <ArrowRight size={17} aria-hidden="true" /></Link>
          </div>
          <motion.div
            className="programmes-grid"
            variants={shouldReduceMotion ? undefined : staggerContainer}
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView={shouldReduceMotion ? undefined : 'visible'}
            viewport={{ once: true, margin: '-80px' }}
          >
            {programmes.map((programme, index) => (
              <ProgrammeCard key={programme.title} {...programme} index={index} staggered />
            ))}
          </motion.div>
          <Link className="text-link programmes-section__mobile-all" to="/programmes">View All Programmes <ArrowRight size={17} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="home-section approach-section">
        <div className="section-shell approach-section__inner">
          <div className="approach-section__intro">
            <span className="section-kicker section-kicker--light">02 — Our Approach</span>
            <SectionHeading dark eyebrow="Learning that moves you forward" title="We believe meaningful development requires more than theoretical knowledge." />
          </div>
          <motion.div
            className="approach-grid"
            variants={shouldReduceMotion ? undefined : staggerContainer}
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView={shouldReduceMotion ? undefined : 'visible'}
            viewport={{ once: true, margin: '-80px' }}
          >
            {approachPoints.map((point, index) => (
              <motion.div className="approach-grid__item" key={point} variants={shouldReduceMotion ? undefined : fadeUpBlur}>
                <span className="approach-grid__number">0{index + 1}</span>
                <h3>{point}</h3>
              </motion.div>
            ))}
          </motion.div>
          <p className="approach-section__closing">Our training combines classroom-based learning with practical, hands-on and field sessions, delivered both virtually and in person.</p>
        </div>
      </section>

      <section className="home-section stats-section" aria-label="Our impact at a glance">
        <div className="section-shell">
          <div className="stats-section__heading">
            <span className="section-kicker">03 — Our Impact</span>
            <p>Every number represents a possibility awakened.</p>
          </div>
          <div className="stats-grid">
            {impactStats.map((stat) => <StatCounter key={stat.label} {...stat} />)}
          </div>
          <p className="stats-section__note">Figures to be confirmed by the organization.</p>
        </div>
      </section>

      <section className="home-section testimonial-section">
        <motion.div
          className="testimonial-section__inner"
          variants={shouldReduceMotion ? undefined : fadeUp}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView={shouldReduceMotion ? undefined : 'visible'}
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className="section-kicker">A Voice from the Journey</span>
          <span className="testimonial-section__mark" aria-hidden="true">“</span>
          <blockquote>{featuredTestimonial.quote}</blockquote>
          <p className="testimonial-section__attribution">{featuredTestimonial.name}<span>{featuredTestimonial.description}</span></p>
        </motion.div>
      </section>

      <section className="home-section founder-section">
        <div className="section-shell founder-section__inner">
          <motion.div
            className="founder-section__image-wrap"
            variants={shouldReduceMotion ? undefined : scaleIn}
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView={shouldReduceMotion ? undefined : 'visible'}
            viewport={{ once: true, margin: '-80px' }}
          >
            <ImageSlot src={founderPortrait} alt="Mr. Matthew Awoyale, Founder of Dream Chasers Academy" slotName="FOUNDER-PORTRAIT" aspect="4 / 5" />
            <span className="founder-section__image-index">FOUNDER · DREAM CHASERS ACADEMY</span>
          </motion.div>
          <motion.div
            className="founder-section__copy"
            variants={shouldReduceMotion ? undefined : fadeUp}
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView={shouldReduceMotion ? undefined : 'visible'}
            viewport={{ once: true, margin: '-80px' }}
          >
            <span className="section-kicker">Meet the Founder</span>
            <h2>Mr. Matthew Awoyale</h2>
            <p className="founder-section__role">Founder, Dream Chasers Academy</p>
            <blockquote className="founder-section__quote">“committed to building a generation of purposeful, skilled, innovative, and impact-driven young people”</blockquote>
            <p>Mr. Matthew Awoyale is a purpose-driven entrepreneur, mentor, and personal development advocate passionate about helping people discover their God-given gifts, maximize their potential, and fulfil their purpose. Through the Academy's training programmes, entrepreneurship initiatives, conferences, conversations, and community projects, he is dedicated to helping young people turn their abilities into meaningful impact.</p>
            <Link className="button-link button-link--outline" to="/about">Read Full Bio <ArrowRight size={17} aria-hidden="true" /></Link>
          </motion.div>
        </div>
      </section>

      <CTABand
        title="Your potential deserves to be developed, and your purpose deserves to be pursued."
        description="Explore our programmes and take the next step towards becoming more."
        primaryLabel="Explore Programmes"
        primaryTo="/programmes"
        secondaryLabel="Register Now"
        secondaryTo="/contact"
      />
    </motion.main>
  )
}

export default HomePage
