'use client'

import { motion } from 'framer-motion'
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaGraduationCap, FaUsers, FaRocket, FaHeart, FaTrophy } from 'react-icons/fa'
import Link from 'next/link'

export default function Carrieres() {
  const jobs = [
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
      color: 'from-blue-500 to-blue-700',
    },
    {
      title: 'Comptable',
      entity: 'MAMAHOLDING',
      location: 'Yaoundé',
      type: 'CDI',
      experience: '3-5 ans',
      description: 'Poste de comptable pour gérer la comptabilité générale et analytique du groupe MAMAHOLDING.',
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
      location: 'Yaoundé',
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
      icon: <FaHeart />,
      title: 'Engagement',
      description: 'Nous nous engageons pleinement envers nos clients et notre équipe',
    },
    {
      icon: <FaUsers />,
      title: 'Esprit d\'équipe',
      description: 'La collaboration est au cœur de notre réussite collective',
    },
    {
      icon: <FaTrophy />,
      title: 'Intégrité',
      description: 'Nous agissons avec probité et honnêteté dans toutes nos actions',
    },
    {
      icon: <FaRocket />,
      title: 'Respect de l\'environnement',
      description: 'Nous nous engageons dans des pratiques durables et responsables',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Design Ultra-Dynamique */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-32 overflow-hidden">
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
        {/* Éléments décoratifs futuristes */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        {/* Grille futuriste en arrière-plan */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
        
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
              className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-white/30"
            >
              <span className="text-white font-semibold">Opportunités de Carrière</span>
            </motion.div>
            
            <div className="flex justify-center mb-6">
              <FaBriefcase className="text-6xl" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Carrières
            </h1>
            <p className="text-xl md:text-2xl opacity-95 leading-relaxed">
              Rejoignez MAMAHOLDING et construisez votre avenir avec nous
            </p>
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
                Pourquoi Rejoindre MAMAHOLDING ?
              </h2>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary-red">
              <div className="flex flex-col h-full">
                <FaRocket className="text-5xl text-primary-red mb-6" />
                <p className="text-primary-dark text-lg leading-relaxed" style={{ color: '#1F2937' }}>
                  Depuis plus de 20 ans, MAMAHOLDING est un leader du commerce en gros au Cameroun. 
                  Nous offrons un environnement de travail stimulant où chaque collaborateur peut s'épanouir 
                  et contribuer à notre succès collectif. Nos valeurs (Engagement, Esprit d'équipe, Intégrité, Respect de l'environnement) 
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
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="text-5xl text-primary-red mb-6 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
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
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Badge Entité */}
                <div className={`absolute top-0 right-0 bg-gradient-to-br ${job.color} text-white px-4 py-2 text-sm font-bold rounded-bl-lg`}>
                  {job.entity}
                </div>

                <div className="pt-8">
                  <h3 className="text-2xl font-bold text-primary-dark mb-4">{job.title}</h3>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaMapMarkerAlt className="text-primary-red" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaClock className="text-primary-green" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaBriefcase className="text-blue-600" />
                      <span>{job.experience}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">{job.description}</p>

                  <div className="mb-6">
                    <h4 className="font-bold text-primary-dark mb-3">Profil Recherché :</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600">
                          <span className="text-primary-red mt-1">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    href="/contact" 
                    className="btn-primary w-full text-center"
                  >
                    Postuler Maintenant
                  </Link>
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

      {/* CTA Candidature Spontanée */}
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
            <Link href="/contact" className="btn-primary">
              Candidature Spontanée
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
