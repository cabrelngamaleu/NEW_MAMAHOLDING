'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaUser, FaEnvelope, FaPhone, FaBriefcase, FaFileUpload } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'
import { EMAILJS_CONFIG } from '@/lib/emailjs.config'

interface ApplicationFormProps {
  jobTitle?: string
  entity?: string
}

export default function ApplicationForm({ jobTitle, entity }: ApplicationFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: jobTitle || '',
    experience: '',
    education: '',
    motivation: '',
    availability: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      if (!formData.fullName || !formData.email || !formData.motivation) {
        toast.error('Veuillez remplir tous les champs obligatoires')
        setIsSubmitting(false)
        return
      }

      // Préparation des données pour EmailJS
      const templateParams = {
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone,
        position: formData.position,
        experience: formData.experience,
        education: formData.education,
        motivation: formData.motivation,
        availability: formData.availability,
        entity: entity || 'MAMAHOLDING S.A',
        to_email: 'drh@mamaholding.net',
        subject: `Candidature: ${formData.position || 'Spontanée'}`,
      }

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      )

      toast.success('Candidature envoyée avec succès ! Nous vous contacterons bientôt.')
      
      // Réinitialisation du formulaire
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        position: jobTitle || '',
        experience: '',
        education: '',
        motivation: '',
        availability: '',
      })
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error)
      toast.error('Une erreur est survenue. Veuillez réessayer ou envoyer votre CV par email.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full">
      <Toaster position="top-center" reverseOrder={false} />
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nom Complet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <label className="block text-gray-700 font-semibold mb-2">
            <FaUser className="inline mr-2" />
            Nom Complet *
          </label>
          <motion.input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500 transition-all shadow-sm"
            placeholder="Votre nom complet"
            whileFocus={{ scale: 1.01, boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.2)" }}
          />
        </motion.div>

        {/* Email & Téléphone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label className="block text-gray-700 font-semibold mb-2">
              <FaEnvelope className="inline mr-2" />
              Email *
            </label>
            <motion.input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500 transition-all shadow-sm"
              placeholder="votre.email@exemple.com"
              whileFocus={{ scale: 1.01, boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.2)" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <label className="block text-gray-700 font-semibold mb-2">
              <FaPhone className="inline mr-2" />
              Téléphone *
            </label>
            <motion.input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500 transition-all shadow-sm"
              placeholder="+237 XXX XX XX XX"
              whileFocus={{ scale: 1.01, boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.2)" }}
            />
          </motion.div>
        </div>

        {/* Poste & Expérience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label className="block text-gray-700 font-semibold mb-2">
              <FaBriefcase className="inline mr-2" />
              Poste Visé *
            </label>
            <motion.input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500 transition-all shadow-sm"
              placeholder="Ex: Responsable Commercial"
              whileFocus={{ scale: 1.01, boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.2)" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <label className="block text-gray-700 font-semibold mb-2">Années d'Expérience</label>
            <motion.select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500 transition-all shadow-sm"
              whileFocus={{ scale: 1.01, boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.2)" }}
            >
              <option value="">Sélectionnez...</option>
              <option value="0-1">0-1 an</option>
              <option value="1-3">1-3 ans</option>
              <option value="3-5">3-5 ans</option>
              <option value="5-10">5-10 ans</option>
              <option value="10+">Plus de 10 ans</option>
            </motion.select>
          </motion.div>
        </div>

        {/* Formation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <label className="block text-gray-700 font-semibold mb-2">Niveau d'Études</label>
          <motion.select
            name="education"
            value={formData.education}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500 transition-all shadow-sm"
            whileFocus={{ scale: 1.01, boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.2)" }}
          >
            <option value="">Sélectionnez...</option>
            <option value="Baccalauréat">Baccalauréat</option>
            <option value="Licence/Bachelor">Licence/Bachelor</option>
            <option value="Master">Master</option>
            <option value="Doctorat/PhD">Doctorat/PhD</option>
            <option value="Formation Professionnelle">Formation Professionnelle</option>
          </motion.select>
        </motion.div>

        {/* Lettre de Motivation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
        >
          <label className="block text-gray-700 font-semibold mb-2">Lettre de Motivation *</label>
          <motion.textarea
            name="motivation"
            value={formData.motivation}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500 transition-all resize-none shadow-sm"
            placeholder="Parlez-nous de vos motivations, compétences et ce que vous pouvez apporter à MAMAHOLDING..."
            whileFocus={{ scale: 1.01, boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.2)" }}
          ></motion.textarea>
        </motion.div>

        {/* Disponibilité */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <label className="block text-gray-700 font-semibold mb-2">Disponibilité</label>
          <motion.select
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500 transition-all shadow-sm"
            whileFocus={{ scale: 1.01, boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.2)" }}
          >
            <option value="">Sélectionnez...</option>
            <option value="Immédiate">Immédiate</option>
            <option value="1 mois">Dans 1 mois</option>
            <option value="2-3 mois">Dans 2-3 mois</option>
            <option value="À convenir">À convenir</option>
          </motion.select>
        </motion.div>

        {/* Note CV */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg"
        >
          <p className="text-blue-800 text-sm">
            <FaFileUpload className="inline mr-2" />
            <strong>Note:</strong> Après la soumission de ce formulaire, veuillez envoyer votre CV (format PDF) à 
            <a href="mailto:drh@mamaholding.net" className="font-bold underline ml-1">drh@mamaholding.net</a>
          </p>
        </motion.div>

        {/* Bouton Submit */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: isSubmitting ? 1 : 1.02, boxShadow: "0 20px 40px -10px rgba(16, 185, 129, 0.4)" }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        >
          {!isSubmitting && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            />
          )}
          <span className="relative z-10">
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma Candidature'}
          </span>
        </motion.button>
      </form>
    </div>
  )
}
