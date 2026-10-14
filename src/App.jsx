import { useEffect } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import AboutPage from './pages/About'
import CommunityVoicePage from './pages/CommunityVoice'
import ContactPage from './pages/Contact'
import HomePage from './pages/Home'
import ImpactPage from './pages/Impact'
import ProgrammesPage from './pages/Programmes'
import ResourcesPage from './pages/Resources'
import TrainingPage from './pages/Training'
import './App.css'

const pages = [
  {
    path: '/',
    label: 'Home',
    title: 'Dream Chasers Academy | Discover Your Gift. Maximize Your Potential. Fulfil Your Purpose.',
    heading: 'Discover Your Gift. Maximize Your Potential. Fulfil Your Purpose.',
    description: 'Discover your God-given gifts, develop your potential, and fulfil your purpose through practical personal development, leadership and entrepreneurship training for young people.',
  },
  {
    path: '/about',
    label: 'About Us',
    title: 'About Us | Dream Chasers Academy',
    heading: 'About Dream Chasers Academy',
    description: 'Learn about Dream Chasers Academy, our vision, mission, founder, and commitment to developing young people.',
  },
  {
    path: '/training',
    label: 'Training',
    title: 'Training Academy | Dream Chasers Academy',
    heading: 'The Training Academy',
    description: 'Explore practical personal development and entrepreneurship training at Dream Chasers Academy.',
  },
  {
    path: '/programmes',
    label: 'Programmes',
    title: 'Our Programmes | Dream Chasers Academy',
    heading: 'Our Programmes',
    description: 'Discover the programmes and initiatives offered by Dream Chasers Academy.',
  },
  {
    path: '/impact',
    label: 'Impact',
    title: 'Our Impact | Dream Chasers Academy',
    heading: 'Our Impact',
    description: 'See how Dream Chasers Academy helps people move from potential to purpose and meaningful action.',
  },
  {
    path: '/resources',
    label: 'Resources',
    title: 'Resources | Dream Chasers Academy',
    heading: 'Resources',
    description: 'Learn and grow through Dream Chasers Academy articles, conversations, and development insights.',
  },
  {
    path: '/community-voice',
    label: 'Community Voice',
    title: 'Community Voice | Dream Chasers Academy',
    heading: 'Giving Back. Creating Impact.',
    description: 'Learn about Community Voice, Dream Chasers Academy’s initiative supporting vulnerable members of the community.',
  },
  {
    path: '/contact',
    label: 'Contact Us',
    title: 'Contact Us | Dream Chasers Academy',
    heading: 'Get in Touch',
    description: 'Contact Dream Chasers Academy with questions about programmes, training, partnerships, or community initiatives.',
  },
]

const routeComponents = {
  '/': HomePage,
  '/about': AboutPage,
  '/training': TrainingPage,
  '/programmes': ProgrammesPage,
  '/impact': ImpactPage,
  '/resources': ResourcesPage,
  '/community-voice': CommunityVoicePage,
  '/contact': ContactPage,
}

const routeDescriptions = {
  '/': pages[0].description,
  '/about': 'Learn about Dream Chasers Academy, our vision, mission, founder, and commitment to developing young people.',
  '/training': 'Our training curriculum develops the mindset, skills, abilities, and character required for purposeful personal and professional growth.',
  '/programmes': 'Explore practical programmes, conferences, entrepreneurship initiatives, and conversations from Dream Chasers Academy.',
  '/impact': 'See how Dream Chasers Academy helps people move from potential to purpose and meaningful action.',
  '/resources': 'Learn, grow, and develop through articles, conversations, and insights on purpose, leadership, entrepreneurship and youth development.',
  '/community-voice': 'Learn about Community Voice, an initiative supporting vulnerable members of the community and creating positive impact.',
  '/contact': 'Contact Dream Chasers Academy with questions about programmes, training, partnerships, or community initiatives.',
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

function RouteScreen({ page }) {
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    document.title = page.title
    let descriptionTag = document.querySelector('meta[name="description"]')

    if (!descriptionTag) {
      descriptionTag = document.createElement('meta')
      descriptionTag.name = 'description'
      document.head.append(descriptionTag)
    }

    descriptionTag.content = page.description
  }, [page])

  return (
    <motion.main
      className="route-screen"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={shouldReduceMotion ? undefined : { opacity: 0, y: -16 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="route-screen__content">
        <p className="route-screen__eyebrow">The Dream Chasers Global Resource Centre</p>
        <h1>{page.heading}</h1>
        <p className="route-screen__description">{page.description}</p>
        <p className="route-screen__note">The full page experience is being built in phases.</p>
      </div>
    </motion.main>
  )
}

function AppRoutes() {
  const location = useLocation()

  useEffect(() => {
    const page = pages.find((entry) => entry.path === location.pathname) || pages[0]
    document.title = page.title
    let descriptionTag = document.querySelector('meta[name="description"]')

    if (!descriptionTag) {
      descriptionTag = document.createElement('meta')
      descriptionTag.name = 'description'
      document.head.append(descriptionTag)
    }

    descriptionTag.content = routeDescriptions[page.path]
  }, [location.pathname])

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          {pages.map((page) => (
            <Route key={page.path} path={page.path} element={(() => {
              const PageComponent = routeComponents[page.path]
              return PageComponent ? <PageComponent /> : <RouteScreen page={page} />
            })()} />
          ))}
          <Route path="*" element={<RouteScreen page={pages[0]} />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App