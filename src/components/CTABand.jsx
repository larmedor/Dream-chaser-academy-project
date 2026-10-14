import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp } from '../animations/variants'

function ActionLink({ to, children, variant = 'light' }) {
  const className = `button-link button-link--${variant}`
  if (to.startsWith('#')) {
    return <a className={className} href={to}>{children}</a>
  }
  return <Link className={className} to={to}>{children}</Link>
}

function CTABand({ title, description, primaryLabel = 'Register Now', primaryTo = '/contact', secondaryLabel, secondaryTo }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="cta-band">
      <motion.div
        className="cta-band__inner"
        variants={shouldReduceMotion ? undefined : fadeUp}
        initial={shouldReduceMotion ? false : 'hidden'}
        whileInView={shouldReduceMotion ? undefined : 'visible'}
        viewport={{ once: true, margin: '-80px' }}
      >
        <p className="cta-band__eyebrow">Dream Chasers Academy</p>
        <h2>{title}</h2>
        {description && <p className="cta-band__description">{description}</p>}
        <div className="cta-band__actions">
          <ActionLink to={primaryTo}>{primaryLabel}</ActionLink>
          {secondaryLabel && <ActionLink to={secondaryTo || '/contact'} variant="outline">{secondaryLabel}</ActionLink>}
        </div>
      </motion.div>
    </section>
  )
}

export default CTABand
