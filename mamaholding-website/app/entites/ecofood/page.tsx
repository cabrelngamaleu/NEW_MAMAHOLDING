'use client'

import { motion } from 'framer-motion'
import { FaLeaf, FaAppleAlt, FaShieldAlt, FaCheckCircle } from 'react-icons/fa'
import Link from 'next/link'

export default function ECOFOOD() {
  const services = [
    {
      icon: <FaAppleAlt />,
      title: 'Produits Frais',
      description: 'Sélection rigoureuse de produits de qualité',
    },
    {
      icon: <FaLeaf />,
      title: 'Approche Durable',
      description: 'Respect de l\'environnement et des producteurs',
    },
    {
      icon: <FaShieldAlt />,
      title: 'Traçabilité',
      description: 'Suivi complet de nos produits',
    },
    {
      icon: <FaCheckCircle />,
      title: 'Certifications',
      description: 'Normes sanitaires et qualité respectées',
    },
  ]

  const stats = [
    { number: '100+', label: 'Produits Alimentaires' },
    { number: '50+', label: 'Producteurs Partenaires' },
    { number: '95%', label: 'Produits Locaux' },
    { number: '100%', label: 'Traçabilité' },
  ]

  const products = [
    'Produits frais',
    'Fruits et légumes',
    'Produits laitiers',
    'Céréales et grains',
    'Produits transformés',
    'Boissons',
  ]

  return (
    <div className="min-h-screen bg-white mt-20 md:mt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-500 to-blue-700 text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-8">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <FaLeaf className="text-6xl" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">ECOFOOD</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 text-center">
              Produits alimentaires de qualité supérieure pour une alimentation saine
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
                Qualité et Fraîcheur Garanties
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                ECOFOOD se spécialise dans la distribution de produits alimentaires de qualité supérieure. Nous travaillons en étroite collaboration avec des producteurs locaux pour vous offrir des produits frais, sains et traçables.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Notre engagement : vous fournir des produits qui respectent les normes sanitaires les plus strictes, tout en soutenant l'agriculture locale et durable.
              </p>
              <Link href="/contact" className="btn-primary">
                Découvrir Nos Produits
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-12 text-white"
            >
              <h3 className="text-3xl font-bold mb-8 text-center">Nos Engagements</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-2xl flex-shrink-0 mt-1" />
                  <span className="text-lg">Produits de qualité supérieure</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-2xl flex-shrink-0 mt-1" />
                  <span className="text-lg">Respect des normes sanitaires</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-2xl flex-shrink-0 mt-1" />
                  <span className="text-lg">Soutien aux producteurs locaux</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-2xl flex-shrink-0 mt-1" />
                  <span className="text-lg">Approche durable et responsable</span>
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
            <h2 className="section-title">Nos Atouts</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto"></div>
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
                <div className="text-5xl text-blue-600 mb-6 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gamme de Produits */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Notre Gamme de Produits</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-6"></div>
            <p className="section-subtitle">
              Une large sélection de produits pour tous vos besoins alimentaires
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center bg-gradient-to-br from-blue-50 to-white"
              >
                <p className="text-lg font-semibold text-primary-dark">{product}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-blue-500 to-blue-700 text-white">
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
              Intéressé par Nos Produits ?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Contactez ECOFOOD pour découvrir notre gamme complète de produits alimentaires de qualité.
            </p>
            <Link href="/contact" className="btn-primary">
              Nous Contacter
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
