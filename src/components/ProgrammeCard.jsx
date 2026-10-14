import { ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { staggerItem } from '../animations/variants'
import ImageSlot from './ImageSlot'

function ProgrammeCard({ title, description, to = '/programmes', image, slotName = 'PROGRAMME-IMAGE', staggered = false }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.article
      className="programme-card"
      variants={shouldReduceMotion ? undefined : staggerItem}
      initial={staggered ? undefined : shouldReduceMotion ? false : 'hidden'}
      whileInView={staggered || shouldReduceMotion ? undefined : 'visible'}
      viewport={staggered ? undefined : { once: true, margin: '-60px' }}
    >
      <Link className="programme-card__link" to={to}>
        <ImageSlot src={image} alt={title} slotName={slotName} aspect="1.28 / 1" />
        <div className="programme-card__body">
          <h3>{title}</h3>
          <p>{description}</p>
          <span className="programme-card__more">Explore <ArrowUpRight size={17} strokeWidth={1.5} aria-hidden="true" /></span>
        </div>
      </Link>
    </motion.article>
  )
}

export default ProgrammeCard
