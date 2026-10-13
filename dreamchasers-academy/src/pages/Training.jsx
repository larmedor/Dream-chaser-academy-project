import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { fadeUp, staggerContainer, staggerItem } from '../animations/variants'
import CTABand from '../components/CTABand'
import { trainingModules } from '../data/modules'

function TrainingPage() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.main className="inner-page training-page" initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? undefined : { opacity: 0, y: -16 }} transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}>
      <section className="inner-hero inner-hero--dark training-hero">
        <div className="inner-hero__copy">
          <span className="section-kicker">Knowledge · Skills · Character</span>
          <h1>The Training Academy</h1>
          <p>Our training curriculum cuts across multiple disciplines and focuses on the development of the mindset, skills, abilities, and character required for purposeful personal and professional growth.</p>
        </div>
        <div className="training-hero__stamp" aria-hidden="true"><span>Learn</span><span>Apply</span><span>Grow</span></div>
      </section>

      <section className="training-format">
        <motion.p variants={reduceMotion ? undefined : fadeUp} initial={reduceMotion ? false : 'hidden'} whileInView={reduceMotion ? undefined : 'visible'} viewport={{ once: true, margin: '-80px' }}>
          Delivered virtually and in person — combining classroom theory with practical, hands-on and field sessions.
        </motion.p>
        <a href="#training-modules" aria-label="Explore training modules"><ArrowDown size={18} /></a>
      </section>

      <section className="inner-section modules-section" id="training-modules">
        <div className="modules-section__heading">
          <span className="section-kicker">A Curriculum for Becoming</span>
          <h2>Explore the modules.</h2>
          <p>Fifteen disciplines. One purposeful journey of growth.</p>
        </div>
        <motion.div className="modules-grid" variants={reduceMotion ? undefined : staggerContainer} initial={reduceMotion ? false : 'hidden'} whileInView={reduceMotion ? undefined : 'visible'} viewport={{ once: true, margin: '-80px' }}>
          {trainingModules.map((module, index) => (
            <motion.article className="module-card" key={module} variants={reduceMotion ? undefined : staggerItem}>
              <span className="module-card__number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{module}</h3>
              <span className="module-card__mark" aria-hidden="true">↗</span>
            </motion.article>
          ))}
        </motion.div>
        <p className="modules-section__closing">These modules are designed to help participants better understand themselves, develop relevant competencies, clarify their goals, and maximize their potential.</p>
      </section>
      <CTABand title="Begin your development journey." primaryLabel="Register Now" primaryTo="/contact" />
    </motion.main>
  )
}

export default TrainingPage