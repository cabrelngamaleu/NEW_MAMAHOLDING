'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight, FaPlay, FaDownload } from 'react-icons/fa'
import VideoModal from './VideoModal'

const PremiumHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  const slides = [
    {
      title: 'Dream Big, make it',
      subtitle: 'easy target',
      description: 'MAMAHOLDING S.A - Le symbole de l\'excellence et de la fiabilité dans le commerce en gros',
      bgImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920',
      videoUrl: '/videos/presentation.mp4', // Vous remplacerez par votre vidéo
    },
    {
      title: 'MAMAHOLDING',
      subtitle: 'Holding',
      description: 'Le symbole de l\'excellence commerciale, favorisant la croissance et la réussite de nos partenaires',
      bgImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920',
      videoUrl: '/videos/presentation.mp4',
    },
    {
      title: 'Excellence &',
      subtitle: 'Innovation',
      description: 'CAC, TRINCO, ECOFOOD - Trois entités, une vision commune de succès',
      bgImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920',
      videoUrl: '/videos/presentation.mp4',
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
    <>
      <div className="relative h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            {/* Image de fond avec effet parallax */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slides[currentSlide].bgImage})`,
                transform: 'scale(1.1)',
              }}
            />

            {/* Overlay sombre avec dégradé Rouge/Vert */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/95 via-primary-dark/90 to-primary-dark-secondary/95" />

            {/* Effets de lumière */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-primary-red/20 to-transparent blur-3xl" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary-green/20 to-transparent blur-3xl" />

            {/* Contenu */}
            <div className="relative h-full flex items-center">
              <div className="container-custom">
                <div className="max-w-4xl">
                  <motion.h1
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4"
                  >
                    {slides[currentSlide].title}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-red to-primary-green">
                      {slides[currentSlide].subtitle}
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl leading-relaxed"
                  >
                    {slides[currentSlide].description}
                  </motion.p>

                  {/* Boutons d'action */}
                  <motion.div
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="flex flex-wrap gap-6 items-center"
                  >
                    {/* Bouton Catalogue */}
                    <a
                      href="/catalogue-mamaholding.pdf"
                      download
                      className="group relative bg-gradient-to-r from-primary-red to-red-700 text-white px-8 py-4 rounded-lg font-semibold overflow-hidden transition-all duration-300 shadow-2xl hover:shadow-red-500/50 transform hover:-translate-y-1"
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        <FaDownload className="group-hover:animate-bounce" />
                        Notre Catalogue
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-primary-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>

                    {/* Bouton Vidéo */}
                    <button
                      onClick={() => setIsVideoModalOpen(true)}
                      className="group flex items-center gap-4 text-white hover:text-primary-green transition-all duration-300"
                    >
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary-green transition-all duration-300 group-hover:scale-110">
                          <FaPlay className="ml-1 text-2xl" />
                        </div>
                        {/* Effet d'onde */}
                        <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping" />
                      </div>
                      <span className="text-lg font-semibold">Regarder la vidéo</span>
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Décoration géométrique */}
            <div className="absolute bottom-0 right-0 w-96 h-96 opacity-10">
              <div className="absolute inset-0 border-8 border-white rounded-full" />
              <div className="absolute inset-8 border-8 border-primary-red rounded-full" />
              <div className="absolute inset-16 border-8 border-primary-green rounded-full" />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Indicateurs */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-4 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index
                  ? 'bg-gradient-to-r from-primary-red to-primary-green w-12 h-3'
                  : 'bg-white/40 w-3 h-3 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Boutons de navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-6 md:left-12 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-primary-red text-white p-5 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 z-10 group"
        >
          <FaChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 md:right-12 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-primary-red text-white p-5 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 z-10 group"
        >
          <FaChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Indicateur de scroll */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-2 z-10"
        >
          <span className="text-white/60 text-sm font-medium">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent" />
        </motion.div>
      </div>

      {/* Modal Vidéo */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={slides[currentSlide].videoUrl}
      />
    </>
  )
}

export default PremiumHero
