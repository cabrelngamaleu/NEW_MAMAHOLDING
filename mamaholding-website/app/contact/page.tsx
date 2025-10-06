'use client'

import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'

export default function Contact() {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Adresse',
      content: 'Adresse du siège social de MAMAHOLDING S.A',
    },
    {
      icon: <FaPhone />,
      title: 'Téléphone',
      content: '+XXX XX XX XX XX',
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'contact@mamaholding.com',
    },
    {
      icon: <FaClock />,
      title: 'Horaires',
      content: 'Lun - Ven : 8h00 - 17h00',
    },
  ]

  return (
    <div className="min-h-screen bg-white mt-20 md:mt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark to-gray-900 text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contactez-Nous</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Notre équipe est à votre écoute pour répondre à toutes vos questions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="text-5xl text-primary-red mb-6 flex justify-center">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-3">{info.title}</h3>
                <p className="text-gray-600">{info.content}</p>
              </motion.div>
            ))}
          </div>

          {/* Formulaire de Contact */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-primary-dark mb-6">Envoyez-nous un Message</h2>
              <p className="text-lg text-gray-700 mb-8">
                Remplissez le formulaire ci-dessous et notre équipe vous répondra dans les plus brefs délais.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Nom</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-red transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Prénom</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-red transition-colors"
                      placeholder="Votre prénom"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-red transition-colors"
                    placeholder="votre.email@exemple.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Téléphone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-red transition-colors"
                    placeholder="+XXX XX XX XX XX"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Sujet</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-red transition-colors">
                    <option>Demande d'information</option>
                    <option>Partenariat</option>
                    <option>Devis</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-red transition-colors resize-none"
                    placeholder="Votre message..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Envoyer le Message
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-red to-red-700 rounded-2xl p-8 text-white h-fit"
            >
              <h3 className="text-3xl font-bold mb-6">Pourquoi Nous Choisir ?</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Expertise Reconnue</h4>
                    <p className="opacity-90">Plus de 20 ans d'expérience dans le commerce en gros</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Service Personnalisé</h4>
                    <p className="opacity-90">Solutions adaptées à vos besoins spécifiques</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Réactivité</h4>
                    <p className="opacity-90">Réponse rapide et suivi personnalisé de vos demandes</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xl font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Qualité Garantie</h4>
                    <p className="opacity-90">Des produits et services de qualité supérieure</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
