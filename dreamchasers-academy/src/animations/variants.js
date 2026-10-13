export const easeOutQuint = [0.22, 1, 0.36, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutQuint },
  },
}

export const fadeUpBlur = {
  hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: easeOutQuint },
  },
}

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOutQuint },
  },
}

export const lineReveal = {
  hidden: { y: '110%' },
  visible: {
    y: '0%',
    transition: { duration: 0.8, ease: easeOutQuint },
  },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: easeOutQuint },
  },
}

export const mobileMenuContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
  exit: { transition: { staggerChildren: 0.035, staggerDirection: -1 } },
}

export const mobileMenuItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOutQuint } },
  exit: { opacity: 0, y: 12, transition: { duration: 0.2, ease: easeOutQuint } },
}