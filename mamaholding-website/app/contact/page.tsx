'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'Demande d\'information',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

      if (!accessKey) {
        throw new Error('Configuration Web3Forms manquante. Veuillez configurer la clé API dans .env.local')
      }

      // Préparer les données pour Web3Forms
      const formDataToSend = new FormData()
      formDataToSend.append('access_key', accessKey)
      formDataToSend.append('name', `${formData.firstName} ${formData.lastName}`)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('phone', formData.phone)
      formDataToSend.append('subject', `[MAMAHOLDING] ${formData.subject}`)
      formDataToSend.append('message', formData.message)
      formDataToSend.append('from_name', 'Site MAMAHOLDING')
      formDataToSend.append('redirect', 'false')

      // Envoyer via Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus('success')
        setStatusMessage('Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.')
        
        // Réinitialiser le formulaire
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: 'Demande d\'information',
          message: ''
        })

        // Masquer le message après 5 secondes
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 5000)
      } else {
        throw new Error(data.message || 'Erreur lors de l\'envoi')
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error)
      setSubmitStatus('error')
      setStatusMessage('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer ou nous contacter directement par email.')
      
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Adresse',
      content: 'Yaoundé -Etoudi, Cameroun',
    },
    {
      icon: <FaPhone />,
      title: 'Téléphone',
      content: '+237 690 201 978 / +237 690 202 555',
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'mapprologistique@mamaholding.net',
    },
    {
      icon: <FaClock />,
      title: 'Horaires',
      content: 'Lun -Sam : 8h00 - 17h30',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Design Ultra-Dynamique */}
      <section className="relative bg-gradient-to-br from-primary-dark to-gray-900 text-white py-32 overflow-hidden">
        {/* Particules flottantes */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${(i * 7) % 100}%`,
                top: `${(i * 11) % 100}%`,
                opacity: 0.3 + (i % 3) * 0.1
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, (i % 2 === 0 ? 40 : -40), 0],
                scale: [1, 1.8, 1],
                opacity: [0.3, 0.9, 0.3]
              }}
              transition={{
                duration: 5 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.15
              }}
            />
          ))}
        </div>

        {/* Halos animés */}
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            className="absolute top-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.4, 1],
              x: [0, 50, 0],
              y: [0, -40, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-80 h-80 bg-white rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.5, 1],
              x: [0, -40, 0],
              y: [0, 50, 0],
              rotate: [360, 180, 0]
            }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Lignes animées */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute h-px bg-white"
              style={{ top: `${15 + i * 14}%`, width: '100%' }}
              animate={{
                x: ['-100%', '200%'],
                opacity: [0, 0.6, 0]
              }}
              transition={{
                duration: 7 + i,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.6
              }}
            />
          ))}
        </div>
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

      {/* Contact Info - Design Ultra-Animé */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(220, 38, 38, 0.3)"
                }}
                className="card text-center relative overflow-hidden group cursor-pointer"
              >
                {/* Effet de brillance au hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-red-100/30 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.8 }}
                />

                {/* Badge décoratif animé */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 bg-red-100 rounded-full opacity-20"
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.5
                  }}
                />

                <div className="relative z-10">
                  <motion.div 
                    className="text-5xl text-primary-red mb-6 flex justify-center"
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                  >
                    {info.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-primary-dark mb-3 group-hover:text-red-600 transition-colors">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 break-words">{info.content}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Formulaire de Contact - Ultra-Animé */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.h2 
                className="text-4xl font-bold text-primary-dark mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Envoyez-nous un Message
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-700 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                Remplissez le formulaire ci-dessous et notre équipe vous répondra dans les plus brefs délais.
              </motion.p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Nom</label>
                    <motion.input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-red focus:ring-2 focus:ring-red-100 transition-all"
                      placeholder="Votre nom"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Prénom</label>
                    <motion.input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-red focus:ring-2 focus:ring-red-100 transition-all"
                      placeholder="Votre prénom"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-red focus:ring-2 focus:ring-red-100 transition-all"
                    placeholder="votre.email@exemple.com"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-gray-700 font-semibold mb-2">Téléphone</label>
                  <motion.input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-red focus:ring-2 focus:ring-red-100 transition-all"
                    placeholder="+XXX XX XX XX XX"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-gray-700 font-semibold mb-2">Sujet</label>
                  <motion.select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-red focus:ring-2 focus:ring-red-100 transition-all"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <option>Demande d'information</option>
                    <option>Partenariat</option>
                    <option>Devis</option>
                    <option>Autre</option>
                  </motion.select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <motion.textarea
                    rows={6}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-red focus:ring-2 focus:ring-red-100 transition-all resize-none"
                    placeholder="Votre message..."
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  <motion.button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer le Message'}
                  </motion.button>

                  {/* Message de statut */}
                  {submitStatus !== 'idle' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-lg flex items-start gap-3 ${
                        submitStatus === 'success' 
                          ? 'bg-green-50 border border-green-200 text-green-800'
                          : 'bg-red-50 border border-red-200 text-red-800'
                      }`}
                    >
                      {submitStatus === 'success' ? (
                        <FaCheckCircle className="text-2xl flex-shrink-0 mt-0.5" />
                      ) : (
                        <FaExclamationCircle className="text-2xl flex-shrink-0 mt-0.5" />
                      )}
                      <p className="flex-1">{statusMessage}</p>
                    </motion.div>
                  )}
                </motion.div>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-primary-red to-red-700 rounded-2xl p-8 text-white h-fit relative overflow-hidden shadow-2xl"
            >
              {/* Effet de brillance */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{
                  x: ['-100%', '200%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              <div className="relative z-10">
                <motion.h3 
                  className="text-3xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Pourquoi Nous Choisir ?
                </motion.h3>
                
                <ul className="space-y-6">
                  {[
                    {
                      num: '1',
                      title: 'Expertise Reconnue',
                      desc: 'Plus de 20 ans d\'expérience dans le commerce en gros'
                    },
                    {
                      num: '2',
                      title: 'Service Personnalisé',
                      desc: 'Solutions adaptées à vos besoins spécifiques'
                    },
                    {
                      num: '3',
                      title: 'Réactivité',
                      desc: 'Réponse rapide et suivi personnalisé de vos demandes'
                    },
                    {
                      num: '4',
                      title: 'Qualité Garantie',
                      desc: 'Des produits et services de qualité supérieure'
                    }
                  ].map((item, idx) => (
                    <motion.li 
                      key={idx}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 10 }}
                    >
                      <motion.div 
                        className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                        whileHover={{ 
                          scale: 1.2,
                          rotate: 360,
                          backgroundColor: 'rgba(255, 255, 255, 0.3)'
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <span className="text-xl font-bold">{item.num}</span>
                      </motion.div>
                      <div>
                        <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                        <p className="opacity-90">{item.desc}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
