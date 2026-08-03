'use client'

import { useEffect, useState } from 'react'

const logoImages = [
  '/cb6b93e93c3a24143083eef6350ab534.jpg',
  '/istockphoto-511119416-612x612.jpg',
  '/istockphoto-1146517111-612x612.jpg',
  '/86720d05f9ba6f01b083d55fcc1cd08a.jpg',
]

const maskStyles = {
  WebkitMaskImage: 'url(/TNSA.svg)',
  maskImage: 'url(/TNSA.svg)',
  WebkitMaskPosition: 'center bottom',
  maskPosition: 'center bottom',
  WebkitMaskRepeat: 'no-repeat',
  maskRepeat: 'no-repeat',
  WebkitMaskSize: 'contain',
  maskSize: 'contain',
}

export default function FooterImageLogo() {
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % logoImages.length)
    }, 3000)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <div
      aria-label="TNSA"
      className="relative mx-auto aspect-[55/17] w-full overflow-hidden"
      role="img"
      style={maskStyles}
    >
      {logoImages.map((src, index) => (
        <div
          key={src}
          aria-hidden="true"
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 motion-reduce:transition-none ${
            index === activeImage ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url("${src}")` }}
        />
      ))}
    </div>
  )
}
