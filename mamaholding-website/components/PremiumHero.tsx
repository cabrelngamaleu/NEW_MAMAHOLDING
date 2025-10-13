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
      description: 'Le symbole de l\'excellence commerciale, favorisant la croissance et la réussite de nos partenaires',
      bgImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920',
    },
    {
      title: 'MAMAHOLDING',
      subtitle: 'Holding',
      description: 'Ensemble vers le succès - Une vision partagée pour un avenir prospère',
      bgImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920',
    },
    {
      title: 'Excellence &',
      subtitle: 'Innovation',
      description: 'CAC, TRINCO, ECOFOOD - Trois entités, une ambition commune',
      bgImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920',
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
      <div className="relative h-screen overflow-hidden bg-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            {/* Image de fond */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slides[currentSlide].bgImage})`,
              }}
            />

            {/* Overlay blanc/transparent */}
            <div className="absolute inset-0 bg-white/10" />

            {/* Contenu */}
            <div className="relative h-full flex items-center">
              <div className="container-custom">
                <div className="max-w-4xl">
                  <motion.h3
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-4"
                  >
                    {slides[currentSlide].title}{' '}
                    <strong className="text-primary-red">
                      {slides[currentSlide].subtitle}
                    </strong>
                  </motion.h3>

                  <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-xl text-white mb-12 max-w-3xl leading-relaxed"
                  >
                    {slides[currentSlide].description}
                  </motion.p>

                  {/* Boutons d'action */}
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="flex flex-wrap gap-6 items-center"
                  >
                    {/* Bouton Catalogue */}
                    <a
                      href="/catalogue-mamaholding.pdf"
                      download
                      className="bg-primary-red text-white px-8 py-4 rounded-md font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3"
                    >
                      <FaDownload />
                      Notre Catalogue
                    </a>

                    {/* Bouton Vidéo */}
                    <button
                      onClick={() => setIsVideoModalOpen(true)}
                      className="flex items-center gap-3 text-white hover:text-primary-green transition-all duration-300 group"
                    >
                      <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center group-hover:bg-primary-green group-hover:border-primary-green transition-all duration-300">
                        <FaPlay className="ml-1 text-xl" />
                      </div>
                      <span className="text-lg font-semibold">Regarder la vidéo</span>
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Indicateurs de slides */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 h-2 rounded-full ${
                currentSlide === index
                  ? 'bg-primary-red w-12'
                  : 'bg-white/60 w-2'
              }`}
            />
          ))}
        </div>

        {/* Boutons de navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-primary-red hover:text-white text-white p-4 rounded-full transition-all duration-300 z-10 backdrop-blur-sm"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-primary-red hover:text-white text-white p-4 rounded-full transition-all duration-300 z-10 backdrop-blur-sm"
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      {/* Modal Vidéo */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl="/videos/presentation.mp4"
      />
    </>
  )
}

export default PremiumHero
