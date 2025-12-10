'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaGraduationCap, FaUsers, FaRocket, FaHeart, FaTrophy } from 'react-icons/fa'
import Link from 'next/link'
import ApplicationForm from '@/components/ApplicationForm'

export default function Carrieres() {
  const [particles, setParticles] = useState<Array<{left: number, top: number, xMovement: number, duration: number, delay: number}>>([])
  const [showApplicationForm, setShowApplicationForm] = useState(false)
  const [selectedJob, setSelectedJob] = useState<{title: string, entity: string} | null>(null)

  useEffect(() => {
    // Réduire le nombre de particules pour de meilleures performances
    const newParticles = [...Array(10)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      xMovement: Math.random() * 20 - 10,
      duration: 4 + Math.random() * 3,
      delay: Math.random() * 2,
    }))
    setParticles(newParticles)
  }, [])

  const handleApply = (jobTitle: string, entity: string) => {
    setSelectedJob({ title: jobTitle, entity })
    setShowApplicationForm(true)
    // Scroll vers le formulaire
    setTimeout(() => {
      document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }
  const jobs = [
    {
      title: 'Responsable Commercial',
      entity: 'CAC',
      location: 'Douala',
      type: 'CDI',
      experience: '3-5 ans',
      description: 'Nous recherchons un(e) responsable commercial(e) dynamique pour développer notre portefeuille clients et gérer une équipe de vente.',
      requirements: [
        'Diplôme en Commerce ou Marketing',
        'Minimum 3 ans d\'expérience en vente B2B',
        'Excellentes compétences en négociation',
        'Maîtrise du français et de l\'anglais',
        'Permis de conduire',
      ],
      color: 'from-red-500 to-red-700',
    },
    {
      title: 'Technicien Maintenance',
      entity: 'TRINCO',
      location: 'Douala',
      type: 'CDI',
      experience: '2-4 ans',
      description: 'Rejoignez notre équipe technique pour assurer la maintenance et le support technique de nos équipements industriels.',
      requirements: [
        'Formation technique en électromécanique',
        'Expérience en maintenance industrielle',
        'Capacité à diagnostiquer et réparer',
        'Autonomie et rigueur',
        'Disponibilité pour déplacements',
      ],
      color: 'from-blue-500 to-blue-700',
    },
    {
      title: 'Chef de Rayon Alimentaire',
      entity: 'ECOFOOD',
      location: 'Yaoundé',
      type: 'CDI',
      experience: '2-3 ans',
      description: 'Nous cherchons un(e) chef de rayon pour gérer notre département alimentaire et garantir la qualité de nos produits.',
      requirements: [
        'Formation en gestion ou commerce',
        'Connaissance du secteur alimentaire',
        'Sens de l\'organisation',
        'Respect des normes d\'hygiène',
        'Leadership et esprit d\'équipe',
      ],
      color: 'from-green-500 to-red-600',
    },
    {
      title: 'Comptable',
      entity: 'MAMAHOLDING S.A',
      location: 'Douala',
      type: 'CDI',
      experience: '3-5 ans',
      description: 'Poste de comptable pour gérer la comptabilité générale et analytique du groupe MAMAHOLDING S.A.',
      requirements: [
        'Licence en Comptabilité ou Finance',
        'Maîtrise des logiciels comptables',
        'Connaissance des normes OHADA',
        'Rigueur et précision',
        'Capacité d\'analyse',
      ],
      color: 'from-gray-700 to-gray-900',
    },
    {
      title: 'Chauffeur-Livreur',
      entity: 'CAC',
      location: 'Douala',
      type: 'CDI',
      experience: '1-2 ans',
      description: 'Nous recherchons des chauffeurs-livreurs pour assurer la livraison de nos produits à nos clients.',
      requirements: [
        'Permis de conduire catégorie C',
        'Expérience en conduite de poids lourds',
        'Connaissance de Douala et environs',
        'Ponctualité et fiabilité',
        'Bonne présentation',
      ],
      color: 'from-red-500 to-red-700',
    },
    {
      title: 'Assistant(e) RH',
      entity: 'MAMAHOLDING S.A',
      location: 'Douala',
      type: 'CDD - 6 mois',
      experience: '1-2 ans',
      description: 'Poste d\'assistant(e) RH pour soutenir notre département des ressources humaines dans la gestion administrative.',
      requirements: [
        'Formation en Ressources Humaines',
        'Maîtrise de MS Office',
        'Excellentes compétences relationnelles',
        'Discrétion et confidentialité',
        'Sens de l\'organisation',
      ],
      color: 'from-gray-700 to-gray-900',
    },
  ]

  const benefits = [
    {
      icon: <FaUsers />,
      title: 'Équipe Dynamique',
      description: 'Rejoignez une équipe passionnée et multiculturelle',
    },
    {
      icon: <FaRocket />,
      title: 'Évolution de Carrière',
      description: 'Opportunités de développement et de promotion',
    },
    {
      icon: <FaGraduationCap />,
      title: 'Formation Continue',
      description: 'Programmes de formation et développement des compétences',
    },
    {
      icon: <FaHeart />,
      title: 'Avantages Sociaux',
      description: 'Assurance santé, primes et autres avantages',
    },
  ]

  const values = [
    {
      icon: <FaTrophy />,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans tout ce que nous faisons',
    },
    {
      icon: <FaUsers />,
      title: 'Esprit d\'Équipe',
      description: 'La collaboration est au cœur de notre réussite',
    },
    {
      icon: <FaHeart />,
      title: 'Respect',
      description: 'Nous valorisons chaque membre de notre équipe',
    },
    {
      icon: <FaRocket />,
      title: 'Innovation',
      description: 'Nous encourageons la créativité et l\'innovation',
    },
  ]

  return (
    <div className="min-h-screen bg-white mt-20 md:mt-24">
      {/* Hero Section - Design Ultra Interactif */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 text-white py-32 overflow-hidden">
        {/* Fond animé avec particules flottantes */}
        <div className="absolute inset-0">
          {/* Cercles animés multiples */}
          <motion.div 
            className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full blur-3xl opacity-30"
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-30"
            animate={{ 
              scale: [1, 1.4, 1],
              x: [0, -40, 0],
              y: [0, 40, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full blur-3xl opacity-20"
            animate={{ 
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        </div>
        
        {/* Particules flottantes multiples */}
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, particle.xMovement, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
              }}
            />
          ))}
        </div>
        
        {/* Grille futuriste animée */}
        <motion.div 
          className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.15) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,.15) 2px, transparent 2px)',
            backgroundSize: '60px 60px'
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="inline-block bg-white/20 backdrop-blur-md px-8 py-3 rounded-full mb-8 border-2 border-white/40 shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FaBriefcase className="text-emerald-300 text-xl" />
                </motion.div>
                <span className="text-white font-bold text-lg">Opportunités de Carrière</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex justify-center mb-6"
              animate={{ 
                y: [0, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <FaBriefcase className="text-7xl" />
            </motion.div>
            <motion.h1 
              className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
              animate={{ 
                textShadow: [
                  '0 0 20px rgba(255,255,255,0.5)',
                  '0 0 40px rgba(255,255,255,0.8)',
                  '0 0 20px rgba(255,255,255,0.5)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Carrières
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl opacity-95 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.95 }}
              transition={{ delay: 0.4 }}
            >
              Rejoignez MAMAHOLDING S.A et construisez votre avenir avec nous
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Introduction - Design moderne */}
      <section className="py-16 bg-primary-light">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block bg-red-100 px-6 py-2 rounded-full mb-4">
                <span className="text-primary-red font-semibold">Rejoignez-Nous</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
                Pourquoi Rejoindre MAMAHOLDING S.A ?
              </h2>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary-red">
              <div className="flex flex-col h-full">
                <FaRocket className="text-5xl text-primary-red mb-6" />
                <p className="text-primary-dark text-lg leading-relaxed" style={{ color: '#1F2937' }}>
                  Depuis plus de 20 ans, MAMAHOLDING S.A est un leader du commerce en gros au Cameroun. 
                  Nous offrons un environnement de travail stimulant où chaque collaborateur peut s'épanouir 
                  et contribuer à notre succès collectif. Nos valeurs fondamentales (Engagement, Esprit d'équipe, Intégrité, Respect de l'environnement) 
                  guident nos actions et créent une culture d'excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-primary-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Nos Avantages</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-red to-primary-green mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center cursor-pointer border-2 border-transparent hover:border-emerald-300"
              >
                <motion.div 
                  className="text-6xl mb-6 flex justify-center bg-gradient-to-br from-emerald-500 to-teal-600 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offres d'Emploi */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Offres d'Emploi</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-red to-primary-green mx-auto mb-6"></div>
            <p className="section-subtitle">
              Découvrez nos opportunités actuelles et postulez dès maintenant
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-emerald-300"
              >
                {/* Fond dégradé animé au hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* Badge Entité Animé */}
                <motion.div 
                  className={`absolute -top-2 -right-2 bg-gradient-to-br ${job.color} text-white px-5 py-2.5 text-sm font-bold rounded-bl-2xl rounded-tr-2xl shadow-lg z-10`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {job.entity}
                </motion.div>

                <div className="p-8 relative">
                  <h3 className="text-2xl font-bold text-gray-900 mb-5 pt-4">{job.title}</h3>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    <motion.div 
                      className="flex items-center gap-2 bg-gradient-to-r from-red-50 to-red-100 px-3 py-2 rounded-full"
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaMapMarkerAlt className="text-red-600" />
                      <span className="text-gray-700 text-sm font-semibold">{job.location}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-2 bg-gradient-to-r from-green-50 to-green-100 px-3 py-2 rounded-full"
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaClock className="text-green-600" />
                      <span className="text-gray-700 text-sm font-semibold">{job.type}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-blue-100 px-3 py-2 rounded-full"
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaBriefcase className="text-blue-600" />
                      <span className="text-gray-700 text-sm font-semibold">{job.experience}</span>
                    </motion.div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">{job.description}</p>

                  <div className="mb-6 bg-gray-50 rounded-xl p-5">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <FaGraduationCap className="text-emerald-600" />
                      Profil Recherché :
                    </h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-start gap-3 text-gray-600"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <span className="text-emerald-600 mt-1 text-lg">✓</span>
                          <span>{req}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <button
                      onClick={() => handleApply(job.title, job.entity)}
                      className="block w-full text-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold py-3.5 rounded-full hover:shadow-lg transition-all duration-300"
                    >
                      Postuler Maintenant →
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 bg-gradient-to-br from-primary-red to-red-700 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Nos Valeurs</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Nos valeurs fondamentales guident notre culture d'entreprise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="opacity-90">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire de Candidature */}
      {showApplicationForm && (
        <section id="application-form" className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block bg-gradient-to-r from-emerald-100 to-teal-100 px-6 py-3 rounded-full mb-4"
                  >
                    <span className="text-emerald-700 font-bold text-lg">
                      {selectedJob ? selectedJob.entity : 'MAMAHOLDING S.A'}
                    </span>
                  </motion.div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                    {selectedJob ? `Postuler: ${selectedJob.title}` : 'Candidature Spontanée'}
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Remplissez le formulaire ci-dessous pour nous faire parvenir votre candidature
                  </p>
                </div>

                <ApplicationForm 
                  jobTitle={selectedJob?.title} 
                  entity={selectedJob?.entity}
                />

                <motion.button
                  onClick={() => setShowApplicationForm(false)}
                  className="mt-8 text-gray-600 hover:text-gray-900 underline"
                  whileHover={{ scale: 1.05 }}
                >
                  ← Retour aux offres
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Candidature Spontanée */}
      {!showApplicationForm && (
        <section className="py-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card bg-gradient-to-r from-primary-light to-white text-center max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-primary-dark mb-6">
                Vous ne trouvez pas le poste idéal ?
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Envoyez-nous votre candidature spontanée. Nous sommes toujours à la recherche de talents !
              </p>
              <motion.button
                onClick={() => {
                  setSelectedJob(null)
                  setShowApplicationForm(true)
                }}
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Candidature Spontanée
              </motion.button>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  )
}
