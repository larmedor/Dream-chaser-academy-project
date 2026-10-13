import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp } from '../animations/variants'

function SectionHeading({ eyebrow, title, description, dark = false, align = 'left', as = 'h2' }) {
  const shouldReduceMotion = useReducedMotion()
  const HeadingTag = as

  return (
    <motion.div
      className={`section-heading section-heading--${align}${dark ? ' section-heading--dark' : ''}`}
      variants={shouldReduceMotion ? undefined : fadeUp}
      initial={shouldReduceMotion ? false : 'hidden'}
      whileInView={shouldReduceMotion ? undefined : 'visible'}
      viewport={{ once: true, margin: '-80px' }}
    >
      {eyebrow && <p className="section-heading__eyebrow">{eyebrow}</p>}
      <HeadingTag className="section-heading__title">{title}</HeadingTag>
      {description && <p className="section-heading__description">{description}</p>}
    </motion.div>
  )
}

export default SectionHeading
