import { useState } from 'react'
import { Globe, MessageCircle, Radio } from 'lucide-react'
import { Link } from 'react-router-dom'
import { footerProgrammeLinks, navLinks, resourceLinks } from '../data/navLinks'
import YoutubeIcon from './YoutubeIcon'

const socialLinks = [
  { label: 'Instagram', Icon: Radio, href: '#' },
  { label: 'Facebook', Icon: MessageCircle, href: '#' },
  { label: 'YouTube', Icon: YoutubeIcon, href: 'https://www.youtube.com/@awoyalematthewdreamchaserb1961', external: true },
  { label: 'LinkedIn', Icon: Globe, href: '#' },
]

function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (event) => {
    event.preventDefault()
    setSubscribed(true)
    event.currentTarget.reset()
  }

  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="site-footer__brand-column">
          <Link className="site-footer__brand" to="/">Dream Chasers Academy</Link>
          <p>A personal development and entrepreneurship academy dedicated to helping young people discover their God-given gifts, develop their potential, pursue their purpose, and turn their abilities into meaningful success.</p>
          <div className="site-footer__socials" aria-label="Social media">
            {socialLinks.map(({ label, Icon, href, external }) => (
              <a href={href} key={label} aria-label={label} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}><Icon size={18} strokeWidth={1.5} /></a>
            ))}
          </div>
        </div>
        <div className="site-footer__link-column">
          <h2>Pages</h2>
          {navLinks.map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}
        </div>
        <div className="site-footer__link-column">
          <h2>Programmes</h2>
          {footerProgrammeLinks.map((item) => <Link key={item.label} to={item.to}>{item.label}</Link>)}
        </div>
        <div className="site-footer__link-column">
          <h2>Resources</h2>
          {resourceLinks.map((item) => <Link key={item.label} to={item.to}>{item.label}</Link>)}
          <div className="site-footer__newsletter">
            <h3>Stay in the loop</h3>
            <form onSubmit={handleSubscribe}>
              <label className="sr-only" htmlFor="footer-email">Email address</label>
              <input id="footer-email" name="email" type="email" placeholder="Your email address" required />
              <button type="submit">Subscribe</button>
            </form>
            {subscribed && <p className="site-footer__success" role="status">Thank you for subscribing.</p>}
          </div>
        </div>
        <div className="site-footer__link-column">
          <h2>Contact</h2>
          <a href="mailto:dreamchaserbrand3@gmail.com">dreamchaserbrand3@gmail.com</a>
          <a href="tel:08145753529">0814 575 3529</a>
          <a href="tel:09072982970">09072982970</a>
          <span>Shop 1, Adeniji Adele Road, Dolphin Estate Phase 4</span>
        </div>
      </div>
      <div className="site-footer__bottom">
        <p>© 2026 Dream Chasers Academy. All Rights Reserved.</p>
        <div><Link to="/contact">Privacy Policy</Link><Link to="/contact">Terms of Use</Link></div>
      </div>
    </footer>
  )
}

export default Footer
