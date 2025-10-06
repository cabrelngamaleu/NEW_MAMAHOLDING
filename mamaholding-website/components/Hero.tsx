'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: 'MAMAHOLDING S.A',
      subtitle: 'Leader du Commerce en Gros',
      description: 'Des solutions complètes pour vos besoins commerciaux',
      gradient: 'from-primary-red to-red-700',
    },
    {
      title: 'CAC, TRINCO, ECOFOOD',
      subtitle: 'Nos Entités d\'Excellence',
      description: 'Un groupe diversifié au service de vos ambitions',
      gradient: 'from-primary-green to-green-700',
    },
    {
      title: 'Innovation & Qualité',
      subtitle: 'Notre Engagement',
      description: 'Votre partenaire de confiance depuis des années',
      gradient: 'from-primary-dark to-gray-900',
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative h-screen overflow-hidden mt-20 md:mt-24">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].gradient}`}
        >
          {/* Motif de fond */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          {/* Contenu */}
          <div className="relative h-full flex items-center">
            <div className="container-custom">
              <div className="max-w-4xl">
                <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-5xl md:text-7xl font-bold text-white mb-6"
                >
                  {slides[currentSlide].title}
                </motion.h1>
                <motion.h2
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-2xl md:text-4xl font-semibold text-white/90 mb-8"
                >
                  {slides[currentSlide].subtitle}
                </motion.h2>
                <motion.p
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-xl text-white/80 mb-12 max-w-2xl"
                >
                  {slides[currentSlide].description}
                </motion.p>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="flex flex-wrap gap-4"
                >
                  <a
                    href="#about"
                    className="bg-white text-primary-red px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Découvrir
                  </a>
                  <a
                    href="/contact"
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-red transition-all duration-300"
                  >
                    Nous Contacter
                  </a>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Indicateurs */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Boutons de navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full backdrop-blur-sm transition-all duration-300"
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full backdrop-blur-sm transition-all duration-300"
          >
            <FaChevronRight size={24} />
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Hero
