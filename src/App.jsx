import React, { useState, useCallback } from 'react'
import ErrorBoundary from './components/ErrorBoundary'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import Lightbox from './components/Lightbox'

function App() {
  const [lightboxImage, setLightboxImage] = useState(null)

  const openLightbox = useCallback((image) => {
    setLightboxImage(image)
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxImage(null)
  }, [])

  return (
    <ErrorBoundary>
      <div className="bg-black text-white min-h-screen">
        <Navigation />
        <main>
          <Hero />
          <Portfolio onImageClick={openLightbox} />
          <About />
          <Contact />
        </main>
        {lightboxImage && <Lightbox image={lightboxImage} onClose={closeLightbox} />}
      </div>
    </ErrorBoundary>
  )
}

export default App
