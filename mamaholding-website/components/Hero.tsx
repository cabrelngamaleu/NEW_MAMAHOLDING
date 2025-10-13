'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa'
import AnimatedRings from './AnimatedRings'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      badge: '20+ ans d\'expérience',
      title: 'Dream Big, make it',
      highlight: 'easy target',
      description: 'La marque de notre excellence favorise la croissance et la prospérité',
      gradient: 'from-red-900 via-red-700 to-red-600',
    },
    {
      badge: 'Excellence Commerciale',
      title: 'MAMAHOLDING',
      highlight: 'Holding',
      description: 'Votre partenaire de confiance pour le commerce en gros',
      gradient: 'from-green-900 via-green-700 to-green-600',
    },
    {
      badge: 'Innovation & Qualité',
      title: 'Leader du',
      highlight: 'Commerce',
      description: 'Des solutions complètes pour vos besoins commerciaux',
      gradient: 'from-gray-900 via-gray-800 to-gray-700',
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1 }}
          className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].gradient}`}
        >
          {/* Overlay avec motif */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Anneaux animés MAMAHOLDING */}
          <AnimatedRings 
            className="absolute inset-0 z-10" 
            size="2xl" 
            variant="hero" 
            intensity="medium"
          />
          
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          </div>

          {/* Contenu */}
          <div className="relative h-full flex items-center z-20">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
              <div className="max-w-3xl">
                {/* Badge */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="mb-8"
                >
                  <span className="inline-block bg-white/10 backdrop-blur-sm border-l-4 border-white text-white px-6 py-3 text-sm font-semibold uppercase tracking-wider">
                    {slides[currentSlide].badge}
                  </span>
                </motion.div>

                {/* Titre principal */}
                <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
                >
                  {slides[currentSlide].title}{' '}
                  <span className="block text-white font-extrabold">
                    {slides[currentSlide].highlight}
                  </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed"
                >
                  {slides[currentSlide].description}
                </motion.p>

                {/* Boutons d'action */}
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="flex flex-wrap gap-4 items-center"
                >
                  <a
                    href="#nos-entites"
                    className="bg-white text-primary-red px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                  >
                    Notre catalogue
                  </a>
                  <button className="flex items-center gap-3 border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-primary-red transition-all duration-300">
                    <FaPlay className="text-sm" />
                    Regarder la vidéo
                  </button>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Indicateurs */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-white w-12' : 'bg-white/50 w-8'
                }`}
              />
            ))}
          </div>

          {/* Boutons de navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 md:p-4 rounded-full transition-all duration-300 border border-white/30"
            aria-label="Slide précédent"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 md:p-4 rounded-full transition-all duration-300 border border-white/30"
            aria-label="Slide suivant"
          >
            <FaChevronRight size={20} />
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Hero

