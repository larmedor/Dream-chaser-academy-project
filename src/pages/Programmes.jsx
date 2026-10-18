import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Headphones } from 'lucide-react'
import { Link } from 'react-router-dom'
import { fadeUp, scaleIn } from '../animations/variants'
import rechargeConference from '../assets/images/Recharge Conference.jpg'
import holystickMoment from '../assets/images/Holystick moment of truth.jpg'
import startBusiness from '../assets/images/So you want to starta business .jpg'
import podcastCover from '../assets/images/mattew Awoyale podcast.jpg'
import CTABand from '../components/CTABand'
import ImageSlot from '../components/ImageSlot'

const programmeDetails = [
  {
    name: 'ENTREPRENEURS ROUND TABLE',
    title: 'Build with clarity. Lead with confidence.',
    slot: 'PROGRAMME-ROUND-TABLE',
    imageAlt: 'Entrepreneurs Round Table programme participants',
    badge: 'A 6-Week Entrepreneurship Development Programme',
    body: 'A six-week training programme designed for early-stage CEOs and business owners. The programme provides participants with practical knowledge and insights to help them better understand entrepreneurship, develop their businesses, and improve their capacity as business leaders.',
    chips: ['Duration: 6 Weeks', 'Certification: Yes'],
    button: 'Register for the Programme',
    link: '/contact',
  },
  {
    name: 'HOLYSTICK MOMENT OF TRUTH WITH CEO',
    title: 'Real Stories. Real Challenges. Real Lessons.',
    slot: 'PROGRAMME-HOLYSTICK',
    image: holystickMoment,
    imageAlt: 'Entrepreneurs sharing lessons during Holystick Moment of Truth with CEO',
    body: 'A platform that brings successful entrepreneurs from different industries into conversation. Through candid conversations, participants and audiences learn about the challenging moments, breakthroughs, failures, lessons, and defining experiences behind entrepreneurial success. The goal is to make success more relatable and provide aspiring entrepreneurs with practical insights from people who have experienced the journey.',
    button: 'Explore the Conversations',
    link: '/resources',
  },
  {
    name: 'THE RECHARGE CONFERENCE',
    title: 'Discover Your Gift. Develop Your Potential. Turn Your Gift into Value.',
    slot: 'PROGRAMME-RECHARGE',
    image: rechargeConference,
    imageAlt: 'Young people attending The Recharge Conference',
    body: 'An annual project that brings young entrepreneurs and aspiring entrepreneurs together for learning, connection, and development. The conference is designed to educate young people about their gifts and show them practical ways to develop and translate those gifts into economic value.',
    button: 'Register for the Conference',
    link: '/contact',
  },
  {
    name: 'SO YOU WANT TO START A BUSINESS?',
    title: 'Everything You Need to Know Before Starting.',
    slot: 'PROGRAMME-START-A-BUSINESS',
    image: startBusiness,
    imageAlt: 'So You Want to Start a Business? learning programme',
    body: 'An online platform designed to educate young people on the practical steps involved in starting, maintaining, and growing a business. The platform provides accessible learning for young people who want to move from having a business idea to understanding how to build and sustain a business.',
    button: 'Visit the Platform',
    link: '#',
  },
  {
    name: 'THE MATTHEW AWOYALE PODCAST',
    title: 'Discover. Develop. Maximize.',
    slot: 'PROGRAMME-PODCAST',
    image: podcastCover,
    imageAlt: 'The Matthew Awoyale Podcast cover',
    body: 'A platform focused on helping people discover and maximize their God-given gifts. Through conversations and insights around purpose, personal development, entrepreneurship, and potential, the podcast encourages listeners to gain clarity about who they are and what they can become.',
    button: 'Listen to the Podcast',
    link: '#',
    podcast: true,
  },
]

function ProgrammesPage() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.main className="inner-page programmes-page" initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? undefined : { opacity: 0, y: -16 }} transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}>
      <section className="inner-hero inner-hero--split programmes-hero">
        <div className="inner-hero__copy">
          <span className="section-kicker">Opportunities to Grow</span>
          <h1>Our Programmes</h1>
          <p>Explore learning experiences created to help you discover your gifts, build your capacity, and move forward with purpose.</p>
        </div>
        <motion.div className="inner-hero__image" variants={reduceMotion ? undefined : scaleIn} initial={reduceMotion ? false : 'hidden'} animate={reduceMotion ? undefined : 'visible'}>
          <ImageSlot slotName="PROGRAMMES-HERO" alt="Dream Chasers Academy programmes" aspect="4 / 3" />
        </motion.div>
      </section>

      {programmeDetails.map((programme, index) => (
        <section className={`programme-detail${index % 2 ? ' programme-detail--dark' : ''}`} key={programme.name}>
          <div className={`programme-detail__inner${index % 2 ? ' programme-detail__inner--reverse' : ''}`}>
            <motion.div className="programme-detail__image" variants={reduceMotion ? undefined : scaleIn} initial={reduceMotion ? false : 'hidden'} whileInView={reduceMotion ? undefined : 'visible'} viewport={{ once: true, margin: '-80px' }}>
              <ImageSlot src={programme.image} slotName={programme.slot} alt={programme.imageAlt || `${programme.name} programme`} aspect="4 / 3" />
            </motion.div>
            <motion.div className="programme-detail__copy" variants={reduceMotion ? undefined : fadeUp} initial={reduceMotion ? false : 'hidden'} whileInView={reduceMotion ? undefined : 'visible'} viewport={{ once: true, margin: '-80px' }}>
              <span className="section-kicker">{String(index + 1).padStart(2, '0')} — {programme.name}</span>
              {programme.badge && <span className="programme-detail__badge">{programme.badge}</span>}
              <h2>{programme.title}</h2>
              <p>{programme.body}</p>
              {programme.chips && <div className="programme-detail__chips">{programme.chips.map((chip) => <span key={chip}>{chip}</span>)}</div>}
              {programme.podcast && (
                <div className="audio-placeholder" aria-label="Podcast audio player placeholder">
                  <span className="audio-placeholder__icon"><Headphones size={20} /></span>
                  <span className="audio-placeholder__track"><strong>[Podcast episode to be provided.]</strong><span>Audio player placeholder</span></span>
                  <span className="audio-placeholder__duration">00:00</span>
                </div>
              )}
              {programme.link === '#' ? <a className="text-link" href="#">{programme.button}<ArrowUpRight size={16} /></a> : <Link className="text-link" to={programme.link}>{programme.button}<ArrowUpRight size={16} /></Link>}
            </motion.div>
          </div>
        </section>
      ))}
      <CTABand title="Find the programme that's right for you." primaryLabel="Explore Programmes" primaryTo="/programmes" secondaryLabel="Register Now" secondaryTo="/contact" />
    </motion.main>
  )
}

export default ProgrammesPage