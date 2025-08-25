import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">About Me</h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                I'm Alex Morgan, a passionate landscape photographer based in New York City.
                For over a decade, I've been capturing the dynamic energy and architectural beauty
                of metropolitan environments around the world.
              </p>
              <p>
                My work focuses on the intersection of human design and natural light, finding
                extraordinary moments in the everyday urban experience. I believe that cities are
                living, breathing entities with their own unique personalities waiting to be
                discovered.
              </p>
              <p>
                When I'm not behind the camera, you can find me exploring hidden corners of the
                city, planning my next adventure, or sharing photography techniques with fellow
                enthusiasts.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Experience</h3>
                <p className="text-gray-400">10+ Years</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Projects</h3>
                <p className="text-gray-400">200+ Completed</p>
              </div>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://picsum.photos/600/600?random=2"
                alt="Professional portrait of Alex Morgan, urban landscape photographer, smiling warmly"
                className="w-full h-[600px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Decorative elements */}
            <div
              className="absolute -top-4 -left-4 w-24 h-24 border-2 border-white/20 rounded-lg -z-10"
              aria-hidden="true"></div>
            <div
              className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-white/20 rounded-lg -z-10"
              aria-hidden="true"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
