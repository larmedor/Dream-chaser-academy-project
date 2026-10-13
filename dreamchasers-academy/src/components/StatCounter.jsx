import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

function StatCounter({ value, label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const shouldReduceMotion = useReducedMotion()
  const [displayValue, setDisplayValue] = useState('0')
  const numericValue = Number.parseInt(String(value).replace(/\D/g, ''), 10) || 0
  const suffix = String(value).replace(/[\d,]/g, '')

  useEffect(() => {
    if (!inView || shouldReduceMotion) return undefined
    let frame
    const start = performance.now()
    const duration = 1500
    const update = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - progress) ** 4
      setDisplayValue(`${Math.round(numericValue * eased).toLocaleString()}${suffix}`)
      if (progress < 1) frame = requestAnimationFrame(update)
    }
    frame = requestAnimationFrame(update)
    return () => cancelAnimationFrame(frame)
  }, [inView, numericValue, shouldReduceMotion, suffix])

  return (
    <motion.div className="stat-counter" ref={ref}>
      <span className="stat-counter__value">{shouldReduceMotion && inView ? value : displayValue}</span>
      <span className="stat-counter__label">{label}</span>
    </motion.div>
  )
}

export default StatCounter
