import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { mobileMenuContainer, mobileMenuItem } from '../animations/variants'
import { navLinks } from '../data/navLinks'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 40)
    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  const lightHero = ['/about', '/programmes', '/impact', '/contact'].includes(pathname)
  const headerClass = `site-header${scrolled ? ' site-header--scrolled' : ''}${lightHero && !scrolled ? ' site-header--light-hero' : ''}${menuOpen ? ' site-header--menu-open' : ''}`

  return (
    <>
      <header className={headerClass}>
        <Link className="site-header__brand" to="/" aria-label="Dream Chasers Academy home" onClick={() => setMenuOpen(false)}>
          <span>Dream Chasers</span><span>Academy</span>
        </Link>
        <nav className="site-header__nav" aria-label="Main navigation">
          {navLinks.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={({ isActive }) => `site-header__link${isActive ? ' is-active' : ''}`}>
              {({ isActive }) => <>{item.label}{isActive && <motion.span className="site-header__active-line" layoutId="active-nav-line" transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }} />}</>}
            </NavLink>
          ))}
        </nav>
        <Link className="site-header__cta" to="/contact">Register Now</Link>
        <button
          className="site-header__menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <motion.span animate={{ rotate: menuOpen ? 90 : 0 }} transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.span>
        </button>
      </header>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            id="mobile-navigation"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.nav
              className="mobile-menu__links"
              aria-label="Mobile navigation"
              variants={shouldReduceMotion ? undefined : mobileMenuContainer}
              initial={shouldReduceMotion ? false : 'hidden'}
              animate={shouldReduceMotion ? undefined : 'visible'}
              exit={shouldReduceMotion ? undefined : 'exit'}
            >
              {navLinks.map((item) => (
                <motion.div key={item.to} variants={shouldReduceMotion ? undefined : mobileMenuItem}>
                  <NavLink to={item.to} end={item.to === '/'} onClick={() => setMenuOpen(false)}>{item.label}</NavLink>
                </motion.div>
              ))}
              <motion.div variants={shouldReduceMotion ? undefined : mobileMenuItem}>
                <Link className="mobile-menu__register" to="/contact" onClick={() => setMenuOpen(false)}>Register Now</Link>
              </motion.div>
            </motion.nav>
            <p className="mobile-menu__caption">The Dream Chasers Global Resource Centre</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
