import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Headphones, ArrowUpRight } from 'lucide-react'
import { fadeUp, scaleIn, staggerContainer, staggerItem } from '../animations/variants'
import podcastCover from '../assets/images/mattew Awoyale podcast.jpg'
import ImageSlot from '../components/ImageSlot'
import { articleCategories } from '../data/articles'

function ResourcesPage() {
  const reduceMotion = useReducedMotion()
  return (
    <motion.main className="inner-page resources-page" initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? undefined : { opacity: 0, y: -16 }} transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}>
      <section className="inner-hero inner-hero--dark resources-hero">
        <div className="inner-hero__copy">
          <span className="section-kicker">Ideas for the Journey</span>
          <h1>Resources</h1>
          <p>Learn, grow, and develop through articles, conversations, and insights on purpose, leadership, entrepreneurship and youth development.</p>
        </div>
        <div className="resources-hero__note"><span>Read</span><span>Listen</span><span>Reflect</span></div>
      </section>

      {articleCategories.map((group, groupIndex) => (
        <section className="article-category" key={group.category}>
          <div className="article-category__heading"><span className="section-kicker">0{groupIndex + 1} — Knowledge to Carry</span><h2>{group.category}</h2></div>
          <motion.div className="article-grid" variants={reduceMotion ? undefined : staggerContainer} initial={reduceMotion ? false : 'hidden'} whileInView={reduceMotion ? undefined : 'visible'} viewport={{ once: true, margin: '-80px' }}>
            {group.articles.map((article, articleIndex) => {
              const articleNumber = groupIndex * 2 + articleIndex + 1
              return (
                <motion.article className="article-card" key={article.title} variants={reduceMotion ? undefined : staggerItem}>
                  <ImageSlot slotName={`ARTICLE-THUMBNAIL-0${articleNumber}`} alt={`${article.title} article thumbnail`} aspect="16 / 10" />
                  <span className="article-card__category">{group.category}</span>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <a className="text-link" href="#">Read More <ArrowUpRight size={16} /></a>
                </motion.article>
              )
            })}
          </motion.div>
        </section>
      ))}

      <section className="inner-section featured-podcast">
        <motion.div className="featured-podcast__cover" variants={reduceMotion ? undefined : scaleIn} initial={reduceMotion ? false : 'hidden'} whileInView={reduceMotion ? undefined : 'visible'} viewport={{ once: true, margin: '-80px' }}>
          <ImageSlot src={podcastCover} slotName="PODCAST-COVER" alt="The Matthew Awoyale Podcast cover about discovering and maximizing your gifts" aspect="1 / 1" />
          <span className="featured-podcast__cover-title">The Matthew<br />Awoyale Podcast</span>
        </motion.div>
        <motion.div className="featured-podcast__copy" variants={reduceMotion ? undefined : fadeUp} initial={reduceMotion ? false : 'hidden'} whileInView={reduceMotion ? undefined : 'visible'} viewport={{ once: true, margin: '-80px' }}>
          <span className="section-kicker">Featured Conversation</span>
          <h2>Discover. Develop. Maximize.</h2>
          <p>A platform focused on helping people discover and maximize their God-given gifts. Through conversations and insights around purpose, personal development, entrepreneurship, and potential, the podcast encourages listeners to gain clarity about who they are and what they can become.</p>
          <div className="audio-placeholder"><span className="audio-placeholder__icon"><Headphones size={20} /></span><span className="audio-placeholder__track"><strong>[Podcast episode to be provided.]</strong><span>Audio player placeholder</span></span><span className="audio-placeholder__duration">00:00</span></div>
          <a className="button-link" href="#">Listen Now <ArrowUpRight size={16} /></a>
        </motion.div>
      </section>

      <section className="newsletter-band">
        <NewsletterForm />
      </section>
    </motion.main>
  )
}

function NewsletterForm() {
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubscribed(true)
    event.currentTarget.reset()
  }

  return (
    <div className="newsletter-band__inner">
      <div><span className="section-kicker">A Note for Your Journey</span><h2>Get development insights in your inbox.</h2></div>
      <form onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="resources-email">Email address</label>
        <input id="resources-email" name="email" type="email" placeholder="Your email address" required />
        <button className="button-link" type="submit">Subscribe</button>
        {subscribed && <span className="newsletter-band__success" role="status">Thank you for subscribing.</span>}
      </form>
    </div>
  )
}

export default ResourcesPage