import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

function FAQAccordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(null)
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const panelId = `faq-answer-${index}`
        return (
          <article className={`faq-item${isOpen ? ' faq-item--open' : ''}`} key={item.question}>
            <h3 className="faq-item__heading">
              <button
                className="faq-item__trigger"
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <motion.span
                  className="faq-item__chevron"
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ChevronDown size={20} aria-hidden="true" />
                </motion.span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  className="faq-item__answer-wrap"
                  id={panelId}
                  initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={shouldReduceMotion ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="faq-item__answer">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </article>
        )
      })}
    </div>
  )
}

export default FAQAccordion
