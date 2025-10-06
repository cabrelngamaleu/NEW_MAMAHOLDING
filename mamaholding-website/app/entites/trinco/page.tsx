'use client'

import { motion } from 'framer-motion'
import { FaIndustry, FaCogs, FaTools, FaCheckCircle } from 'react-icons/fa'
import Link from 'next/link'

export default function TRINCO() {
  const services = [
    {
      icon: <FaIndustry />,
      title: 'Solutions Industrielles',
      description: 'Équipements et fournitures industrielles',
    },
    {
      icon: <FaCogs />,
      title: 'Maintenance',
      description: 'Services de maintenance et support technique',
    },
    {
      icon: <FaTools />,
      title: 'Conseil Technique',
      description: 'Expertise et conseil pour vos projets',
    },
    {
      icon: <FaCheckCircle />,
      title: 'Qualité Certifiée',
      description: 'Produits conformes aux normes internationales',
    },
  ]

  const stats = [
    { number: '15+', label: 'Ans d\'Expérience' },
    { number: '300+', label: 'Clients Industriels' },
    { number: '1000+', label: 'Projets Réalisés' },
    { number: '98%', label: 'Satisfaction Client' },
  ]

  return (
    <div className="min-h-screen bg-white mt-20 md:mt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-500 to-green-700 text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-8">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <FaIndustry className="text-6xl" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">TRINCO</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 text-center">
              Solutions industrielles et commerciales innovantes pour entreprises
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-primary-dark mb-6">
                Innovation et Expertise Industrielle
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                TRINCO est votre partenaire de choix pour tous vos besoins en solutions industrielles et commerciales. Nous combinons innovation, expertise technique et service de qualité pour accompagner vos projets.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Notre équipe de spécialistes vous apporte conseil et support à chaque étape, de la conception à la réalisation de vos projets industriels.
              </p>
              <Link href="/contact" className="btn-secondary">
                Découvrir Nos Solutions
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-500 to-green-700 rounded-2xl p-12 text-white"
            >
              <h3 className="text-3xl font-bold mb-8 text-center">Nos Domaines d\'Expertise</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-2xl flex-shrink-0 mt-1" />
                  <span className="text-lg">Fournitures industrielles</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-2xl flex-shrink-0 mt-1" />
                  <span className="text-lg">Équipements professionnels</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-2xl flex-shrink-0 mt-1" />
                  <span className="text-lg">Support technique</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-2xl flex-shrink-0 mt-1" />
                  <span className="text-lg">Formation et conseil</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-primary-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Nos Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-700 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="text-5xl text-green-600 mb-6 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-green-500 to-green-700 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold mb-4">{stat.number}</div>
                <div className="text-lg md:text-xl opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card bg-gradient-to-r from-primary-light to-white text-center"
          >
            <h2 className="text-4xl font-bold text-primary-dark mb-6">
              Un Projet Industriel en Vue ?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Notre équipe d'experts est prête à vous accompagner dans la réalisation de vos ambitions.
            </p>
            <Link href="/contact" className="btn-secondary">
              Contactez-Nous
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
