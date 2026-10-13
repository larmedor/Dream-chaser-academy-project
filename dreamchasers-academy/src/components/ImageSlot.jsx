import { useState } from 'react'

function ImageSlot({ src, alt, slotName = 'IMAGE', aspect = '4 / 3', caption, className = '' }) {
  const [failed, setFailed] = useState(false)
  const showPlaceholder = !src || failed

  return (
    <figure className={`image-slot ${className}`} style={{ aspectRatio: aspect }}>
      {!showPlaceholder ? (
        <img
          className="image-slot__image"
          src={src}
          alt={alt || slotName}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="image-slot__placeholder" role="img" aria-label={`${slotName} image placeholder`}>
          <span>{slotName}</span>
        </div>
      )}
      {caption && <figcaption className="image-slot__caption">{caption}</figcaption>}
    </figure>
  )
}

export default ImageSlot
