'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaPhone, FaEnvelope, FaFileInvoice } from 'react-icons/fa'

export default function CTABanner() {
  return (
    <section className="relative bg-gradient-to-r from-red-600 via-red-700 to-red-800 py-8 overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Texte CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white text-center lg:text-left"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Prêt à démarrer votre projet ?
            </h3>
            <p className="text-red-100 text-lg">
              Notre équipe d'experts est à votre disposition
            </p>
          </motion.div>

          {/* Boutons CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 justify-center"
          >
            {/* Obtenir un Devis */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-white text-red-700 px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all group"
              >
                <FaFileInvoice className="text-2xl group-hover:rotate-12 transition-transform" />
                <span>Obtenir un Devis</span>
              </Link>
            </motion.div>

            {/* Appeler */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="tel:+237690201978"
                className="inline-flex items-center gap-3 bg-red-800 text-white px-8 py-4 rounded-xl font-bold border-2 border-white/30 hover:bg-red-900 transition-all group"
              >
                <FaPhone className="text-xl group-hover:rotate-12 transition-transform" />
                <span className="hidden sm:inline">+237 690 20 19 78</span>
                <span className="sm:hidden">Appeler</span>
              </a>
            </motion.div>

            {/* Email */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="mailto:drh@mamaholding.net"
                className="inline-flex items-center gap-3 bg-red-800 text-white px-8 py-4 rounded-xl font-bold border-2 border-white/30 hover:bg-red-900 transition-all group"
              >
                <FaEnvelope className="text-xl group-hover:scale-110 transition-transform" />
                <span className="hidden md:inline">drh@mamaholding.net</span>
                <span className="md:hidden">Email</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
