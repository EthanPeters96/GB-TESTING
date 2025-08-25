import React, { useCallback, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const heroImages = [
    'https://picsum.photos/2070/1380?random=1',
    'https://picsum.photos/2070/1380?random=20',
    'https://picsum.photos/2070/1380?random=21',
    'https://picsum.photos/2070/1380?random=22',
    'https://picsum.photos/2070/1380?random=23',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      )
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [heroImages.length])

  const scrollToPortfolio = useCallback(() => {
    const portfolioSection = document.querySelector('#portfolio')
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      role="banner"
      aria-label="Hero section - Alex Morgan Photography">
      {/* Background Images with Crossfade */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${image}')`,
            }}
            role="img"
            aria-label="Urban cityscape background"
          />
        ))}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6">
          ALEX MORGAN
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
          Landscape Photographer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Capturing the soul of the city through light, shadow, and architectural beauty
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}>
          <button
            onClick={scrollToPortfolio}
            className="btn-primary"
            aria-label="Navigate to portfolio section">
            View Portfolio
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        role="img"
        aria-label="Scroll down indicator">
        <div className="w-px h-16 bg-white/30 mx-auto">
          <div className="w-px h-8 bg-white animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
