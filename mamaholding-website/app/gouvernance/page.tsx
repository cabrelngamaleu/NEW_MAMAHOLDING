'use client'

import { motion } from 'framer-motion'
import { FaUserTie, FaUsers, FaChartLine } from 'react-icons/fa'

export default function Gouvernance() {
  const leaders = [
    {
      name: 'Directeur Général',
      role: 'Direction Générale',
      description: 'Leadership stratégique et vision globale du groupe',
    },
    {
      name: 'Directeur Commercial',
      role: 'Direction Commerciale',
      description: 'Développement commercial et relations clients',
    },
    {
      name: 'Directeur Financier',
      role: 'Direction Financière',
      description: 'Gestion financière et contrôle de gestion',
    },
    {
      name: 'Directeur des Opérations',
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Gouvernance</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Une structure organisationnelle solide au service de notre ambition
            </p>
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

      {/* Direction */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Notre Direction</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-red to-primary-green mx-auto mb-6"></div>
            <p className="section-subtitle">
              Une équipe dirigeante expérimentée au service de notre croissance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-red to-red-700 rounded-full flex items-center justify-center text-white text-3xl flex-shrink-0">
                    <FaUserTie />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary-dark mb-2">{leader.name}</h3>
                    <div className="text-primary-red font-semibold mb-3">{leader.role}</div>
                    <p className="text-gray-600 leading-relaxed">{leader.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
