import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import { fadeUp } from '../animations/variants'
import CTABand from '../components/CTABand'
import FAQAccordion from '../components/FAQAccordion'
import SectionHeading from '../components/SectionHeading'
import YoutubeIcon from '../components/YoutubeIcon'
import { faqs } from '../data/faqs'

const contactDetails = [
  { label: 'Phone', Icon: Phone, values: [{ text: '0814 575 3529', href: 'tel:08145753529' }, { text: '09072982970', href: 'tel:09072982970' }] },
  { label: 'Email', Icon: Mail, values: [{ text: 'dreamchaserbrand3@gmail.com', href: 'mailto:dreamchaserbrand3@gmail.com' }] },
  { label: 'Address', Icon: MapPin, values: [{ text: 'Shop 1, Adeniji Adele Road, Dolphin Estate Phase 4' }] },
  { label: 'YouTube', Icon: YoutubeIcon, values: [{ text: '@awoyalematthewdreamchaserb1961', href: 'https://www.youtube.com/@awoyalematthewdreamchaserb1961' }] },
]

function ContactPage() {
  const reduceMotion = useReducedMotion()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <motion.main className="inner-page contact-page" initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? undefined : { opacity: 0, y: -16 }} transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}>
      <section className="contact-hero">
        <div className="contact-hero__inner">
          <span className="section-kicker">Start a Conversation</span>
          <h1>Get in Touch</h1>
          <p>Have a question about our programmes, training, partnerships, or community initiatives? We would love to hear from you.</p>
        </div>
      </section>
      <section className="inner-section contact-main">
        <div className="contact-details">
          <span className="section-kicker">We'd Love to Hear from You</span>
          <h2>Let's connect.</h2>
          <div className="contact-details__list">
            {contactDetails.map(({ label, values, Icon }) => (
              <div className="contact-detail" key={label}>
                <span className="contact-detail__icon"><Icon size={19} strokeWidth={1.5} aria-hidden="true" /></span>
                <span><strong>{label}</strong>{values.map(({ text, href }) => (
                  <span key={text}>{href ? <a href={href}>{text}</a> : text}</span>
                ))}</span>
              </div>
            ))}
          </div>
        </div>
        <motion.div className="contact-form-panel" variants={reduceMotion ? undefined : fadeUp} initial={reduceMotion ? false : 'hidden'} whileInView={reduceMotion ? undefined : 'visible'} viewport={{ once: true, margin: '-80px' }}>
          <h2>Send an enquiry</h2>
          {submitted ? (
            <div className="form-success" role="status">
              <span>Thank you.</span>
              <p>Thank you — your enquiry has been received. We will get back to you shortly.</p>
              <button className="text-link" type="button" onClick={() => setSubmitted(false)}>Send another enquiry</button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form__row">
                <label>Name<input name="name" type="text" autoComplete="name" required /></label>
                <label>Email<input name="email" type="email" autoComplete="email" required /></label>
              </div>
              <div className="contact-form__row">
                <label>Phone<input name="phone" type="tel" autoComplete="tel" /></label>
                <label>Subject
                  <select name="subject" defaultValue="" required>
                    <option value="" disabled>Select a subject</option>
                    <option>Programmes</option><option>Training</option><option>Partnership</option><option>Community Voice</option><option>General</option>
                  </select>
                </label>
              </div>
              <label>Message<textarea name="message" rows="5" required /></label>
              {/* TODO: connect Formspree or similar form endpoint. */}
              <button className="button-link" type="submit">Send Enquiry <span aria-hidden="true">↗</span></button>
            </form>
          )}
        </motion.div>
      </section>
      <section className="inner-section contact-faq" id="faqs">
        <SectionHeading eyebrow="Frequently Asked Questions" title="A few things you may be wondering." description="Learn more about participating, training, and getting involved with the Academy." />
        <FAQAccordion items={faqs} />
      </section>
      <CTABand title="We look forward to hearing from you." primaryLabel="Explore Programmes" primaryTo="/programmes" />
    </motion.main>
  )
}

export default ContactPage
