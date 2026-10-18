function YoutubeIcon({ size = 24, strokeWidth = 1.8 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default YoutubeIcon