'use client'

import { motion } from 'framer-motion'
import { FaUserTie, FaUsers, FaChartLine } from 'react-icons/fa'
import OrganigrammeSwitcher from '../components/OrganigrammeSwitcher'

export default function Gouvernance() {
  const leaders = [
    {
      name: 'Administrateur Directeur Général',
      role: 'Administrateur Direction Générale',
      description: 'Leadership stratégique et vision globale du groupe',
    },
    {
      name: 'Chef de département Commercial',
      role: 'Direction Commerciale',
      description: 'Développement commercial et relations clients',
    },
    {
      name: 'Chef de département Financier & Comptabilité',
      role: 'Chef de département Financier & Comptabilité',
      description: 'Gestion financière et contrôle de gestion',
    },
    {
      name: 'Attaché de Direction',
      role: 'Direction des Opérations',
      description: 'Optimisation des processus et logistique',
    },
  ]

  const principles = [
    {
      icon: <FaUserTie />,
      title: 'Leadership Responsable',
      description: 'Un leadership éthique et transparent au service de la performance',
    },
    {
      icon: <FaUsers />,
      title: 'Collégialité',
      description: 'Des décisions prises de manière collégiale pour garantir leur pertinence',
    },
    {
      icon: <FaChartLine />,
      title: 'Performance',
      description: 'Un suivi rigoureux de la performance pour atteindre nos objectifs',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Design Ultra-Dynamique */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 text-white py-20 md:py-32 overflow-hidden">
        {/* Particules flottantes animées */}
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
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 4 + (i % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2
              }}
            />
          ))}
        </div>

        {/* Halos géants animés */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500 rounded-full blur-3xl opacity-10"
          animate={{
            scale: [1, 1.4, 1],
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Lignes lumineuses traversantes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
            style={{
              top: `${15 + i * 15}%`,
              width: '100%'
            }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 0.4, 0]
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.5
            }}
          />
        ))}

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-extrabold mb-6"
              animate={{
                textShadow: [
                  '0 0 20px rgba(255,255,255,0.3)',
                  '0 0 40px rgba(255,255,255,0.5)',
                  '0 0 20px rgba(255,255,255,0.3)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Gouvernance
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.9, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Une structure organisationnelle solide au service de notre ambition
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              MAMAHOLDING S.A s'appuie sur une gouvernance structurée et efficace, garantissant transparence, responsabilité et excellence opérationnelle à tous les niveaux de l'organisation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Principes de Gouvernance */}
      <section className="py-20 bg-primary-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Principes de Gouvernance</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-red to-primary-green mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="text-5xl text-primary-red mb-6 flex justify-center">
                  {principle.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary-dark mb-4">{principle.title}</h3>
                <p className="text-gray-600 leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Organigramme */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Organigramme de Direction</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-red to-primary-green mx-auto mb-6"></div>
            <p className="section-subtitle">
              Structure hiérarchique et organisation de MAMAHOLDING
            </p>
          </motion.div>

          <OrganigrammeSwitcher />
        </div>
      </section>

      {/* Engagement */}
      <section className="py-20 bg-gradient-to-r from-primary-green to-green-700 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Notre Engagement</h2>
            <p className="text-xl leading-relaxed opacity-90">
              Nous nous engageons à maintenir les plus hauts standards de gouvernance d'entreprise, garantissant transparence, éthique et responsabilité dans toutes nos opérations.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
