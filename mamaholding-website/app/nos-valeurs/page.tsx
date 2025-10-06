'use client'

import { motion } from 'framer-motion'
import { FaAward, FaHandshake, FaChartLine, FaUsers, FaShieldAlt, FaLightbulb, FaHeart, FaGlobe } from 'react-icons/fa'

export default function NosValeurs() {
  const values = [
    {
      icon: <FaAward />,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans tous nos services et produits. Chaque action, chaque décision est guidée par la recherche de la perfection et de la qualité supérieure.',
      color: 'from-red-500 to-red-700',
    },
    {
      icon: <FaHandshake />,
      title: 'Intégrité',
      description: 'La transparence et l\'honnêteté sont au cœur de nos relations. Nous agissons avec éthique et droiture dans toutes nos interactions professionnelles.',
      color: 'from-green-500 to-green-700',
    },
    {
      icon: <FaChartLine />,
      title: 'Innovation',
      description: 'Nous innovons constamment pour mieux servir nos clients. L\'amélioration continue et l\'adaptation aux nouvelles technologies sont notre priorité.',
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: <FaUsers />,
      title: 'Esprit d\'Équipe',
      description: 'La collaboration et le travail d\'équipe sont essentiels à notre succès. Nous valorisons chaque membre de notre organisation.',
      color: 'from-purple-500 to-purple-700',
    },
    {
      icon: <FaShieldAlt />,
      title: 'Responsabilité',
      description: 'Nous assumons pleinement nos responsabilités envers nos clients, partenaires, employés et la société.',
      color: 'from-orange-500 to-orange-700',
    },
    {
      icon: <FaLightbulb />,
      title: 'Créativité',
      description: 'Nous encourageons la pensée créative et les solutions innovantes pour relever les défis du marché.',
      color: 'from-yellow-500 to-yellow-700',
    },
    {
      icon: <FaHeart />,
      title: 'Engagement Client',
      description: 'La satisfaction de nos clients est notre raison d\'être. Nous nous engageons à dépasser leurs attentes.',
      color: 'from-pink-500 to-pink-700',
    },
    {
      icon: <FaGlobe />,
      title: 'Durabilité',
      description: 'Nous nous engageons dans des pratiques commerciales durables pour un avenir meilleur.',
      color: 'from-teal-500 to-teal-700',
    },
  ]

  return (
    <div className="min-h-screen bg-white mt-20 md:mt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-green to-green-700 text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Nos Valeurs</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Les principes fondamentaux qui guident nos actions au quotidien
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
            <p className="text-xl text-gray-700 leading-relaxed">
              Chez MAMAHOLDING S.A, nos valeurs ne sont pas de simples mots. Elles sont l\'essence même de notre culture d\'entreprise, guidant chacune de nos décisions et façonnant notre identité.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Valeurs Grid */}
      <section className="py-20 bg-primary-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center text-white text-3xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary-dark mb-4 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Citation */}
      <section className="py-20 bg-gradient-to-r from-primary-red to-red-700 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="text-6xl mb-8 opacity-50">"</div>
            <p className="text-2xl md:text-3xl font-light leading-relaxed mb-8">
              Nos valeurs sont le socle sur lequel nous bâtissons notre succès. Elles nous unissent, nous inspirent et nous propulsent vers l'excellence.
            </p>
            <div className="text-xl font-semibold">Direction MAMAHOLDING S.A</div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
