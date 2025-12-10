'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FaWhatsapp, FaTimes } from 'react-icons/fa'

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)
  const whatsappNumber = '+237690201978' // Numéro MAMAHOLDING
  const defaultMessage = 'Bonjour MAMAHOLDING, j\'aimerais obtenir plus d\'informations sur vos services.'

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(defaultMessage)}`
    window.open(url, '_blank')
  }

  return (
    <>
      {/* Bouton Principal WhatsApp */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.button
          onClick={handleWhatsAppClick}
          className="relative group bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full p-4 shadow-2xl hover:shadow-green-500/50 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Pulse Animation */}
          <motion.div
            className="absolute inset-0 rounded-full bg-green-400"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Icon */}
          <FaWhatsapp className="text-4xl relative z-10" />
          
          {/* Badge de notification */}
          <motion.div
            className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            1
          </motion.div>
        </motion.button>

        {/* Tooltip */}
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute right-20 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          >
            <p className="text-sm font-semibold">Besoin d'aide ?</p>
            <p className="text-xs opacity-90">Contactez-nous sur WhatsApp</p>
            {/* Arrow */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Version Mobile - Plus petit */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .fixed.bottom-6.right-6 {
            bottom: 1rem;
            right: 1rem;
          }
        }
      `}</style>
    </>
  )
}
