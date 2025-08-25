import React, { useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, Share2 } from 'lucide-react'

const Lightbox = ({ image, onClose }) => {
  const handleEscape = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    },
    [onClose]
  )

  const handleDownload = useCallback(() => {
    // Enhanced download functionality - could be implemented with actual download logic
    try {
      const link = document.createElement('a')
      link.href = image.src
      link.download = `${image.title}.jpg`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch {
      alert('Download feature would be implemented here')
    }
  }, [image])

  const handleShare = useCallback(async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: image.title,
          text: image.alt,
          url: image.src,
        })
      } catch {
        // User cancelled sharing
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      alert('Share feature would be implemented here')
    }
  }, [image])

  useEffect(() => {
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    // Focus the close button for accessibility
    const closeButton = document.querySelector('[data-lightbox-close]')
    if (closeButton) {
      closeButton.focus()
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [handleEscape])

  const handleBackdropClick = useCallback(
    (e) => {
      if (e.target === e.currentTarget) {
        onClose()
      }
    },
    [onClose]
  )

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={handleBackdropClick}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lightbox-title"
        aria-describedby="lightbox-description">
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

        {/* Content */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-5xl max-h-[90vh] w-full">
          {/* Controls */}
          <div className="absolute top-4 right-4 z-10 flex space-x-2">
            <button
              onClick={handleDownload}
              className="w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-300"
              aria-label={`Download ${image.title}`}>
              <Download className="w-5 h-5" />
            </button>

            <button
              onClick={handleShare}
              className="w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-300"
              aria-label={`Share ${image.title}`}>
              <Share2 className="w-5 h-5" />
            </button>

            <button
              onClick={onClose}
              data-lightbox-close
              className="w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-300"
              aria-label="Close lightbox">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Image */}
          <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto max-h-[80vh] object-contain"
            />

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 id="lightbox-title" className="text-white text-2xl font-bold mb-2">
                {image.title}
              </h3>
              <p id="lightbox-description" className="text-gray-300">
                {image.alt}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

Lightbox.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
}

export default Lightbox
