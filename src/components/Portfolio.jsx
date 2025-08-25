import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

const Portfolio = ({ onImageClick }) => {
  const [imageErrors, setImageErrors] = useState(new Set())

  const images = [
    {
      id: 1,
      src: 'https://picsum.photos/800/800?random=10',
      alt: 'City skyline at dusk with illuminated buildings and twilight sky',
      title: 'Urban Twilight',
    },
    {
      id: 2,
      src: 'https://picsum.photos/800/800?random=11',
      alt: 'Modern architectural details showing geometric lines and patterns',
      title: 'Geometric Lines',
    },
    {
      id: 3,
      src: 'https://picsum.photos/800/800?random=12',
      alt: 'Urban street photography capturing daily city life',
      title: 'City Streets',
    },
    {
      id: 4,
      src: 'https://picsum.photos/800/800?random=13',
      alt: 'Bridge architecture spanning across water with structural details',
      title: 'Spanning Waters',
    },
    {
      id: 5,
      src: 'https://picsum.photos/800/800?random=14',
      alt: 'Urban reflection in glass and water creating mirror effects',
      title: 'Mirror City',
    },
    {
      id: 6,
      src: 'https://picsum.photos/800/800?random=15',
      alt: 'Night cityscape with neon lights and illuminated streets',
      title: 'Neon Dreams',
    },
    {
      id: 7,
      src: 'https://picsum.photos/800/800?random=16',
      alt: 'Architectural detail showcasing structural beauty and design',
      title: 'Structural Beauty',
    },
    {
      id: 8,
      src: 'https://picsum.photos/800/800?random=17',
      alt: 'Wide city panorama showing urban landscape and skyline',
      title: 'Urban Panorama',
    },
    {
      id: 9,
      src: 'https://picsum.photos/800/800?random=18',
      alt: 'Industrial landscape with elegant architectural forms',
      title: 'Industrial Elegance',
    },
  ]

  const handleImageClick = useCallback(
    (image) => {
      if (onImageClick) {
        onImageClick(image)
      }
    },
    [onImageClick]
  )

  const handleImageError = useCallback((imageId) => {
    setImageErrors((prev) => new Set([...prev, imageId]))
  }, [])

  const handleImageLoad = useCallback((imageId) => {
    setImageErrors((prev) => {
      const newSet = new Set(prev)
      newSet.delete(imageId)
      return newSet
    })
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Portfolio</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of urban landscapes that capture the essence and energy of city life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="grid"
          aria-label="Photography portfolio gallery">
          {images.map((image) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              className="group cursor-pointer overflow-hidden rounded-lg bg-dark-800"
              onClick={() => handleImageClick(image)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  handleImageClick(image)
                }
              }}
              role="gridcell"
              tabIndex={0}
              aria-label={`View ${image.title} - ${image.alt}`}>
              <div className="relative aspect-square overflow-hidden">
                {imageErrors.has(image.id) ? (
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    <p className="text-gray-400">Image failed to load</p>
                  </div>
                ) : (
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={() => handleImageError(image.id)}
                    onLoad={() => handleImageLoad(image.id)}
                    loading="lazy"
                  />
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

Portfolio.propTypes = {
  onImageClick: PropTypes.func.isRequired,
}

export default Portfolio
