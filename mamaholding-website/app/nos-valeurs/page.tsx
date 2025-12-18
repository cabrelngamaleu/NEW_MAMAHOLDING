'use client'

import { motion } from 'framer-motion'
import { FaAward, FaHandshake, FaChartLine, FaUsers, FaShieldAlt, FaLightbulb, FaHeart, FaGlobe } from 'react-icons/fa'

export default function NosValeurs() {
  const values = [
    {
      icon: <FaHeart />,
      title: 'Engagement',
      description: 'Nous nous engageons pleinement envers nos clients, partenaires et employés. Notre détermination à tenir nos promesses et à aller au-delà des attentes est au cœur de notre réussite et de notre crédibilité.',
      color: 'from-red-500 to-red-700',
    },
    {
      icon: <FaUsers />,
      title: 'Esprit d\'équipe',
      description: 'La collaboration et le travail d\'équipe sont essentiels à notre succès. Nous valorisons chaque membre de notre organisation et cultivons un environnement de synergie où chacun contribue à l\'excellence collective.',
      color: 'from-green-500 to-green-700',
    },
    {
      icon: <FaHandshake />,
      title: 'Intégrité',
      description: 'La transparence et l\'honnêteté sont au cœur de nos relations. Nous agissons avec probité, éthique et droiture dans toutes nos interactions professionnelles, établissant ainsi une confiance durable.',
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: <FaGlobe />,
      title: 'Respect de l\'environnement',
      description: 'Nous nous engageons dans des pratiques durables et responsables. La protection de notre environnement guide nos décisions et nos actions quotidiennes pour assurer un avenir meilleur aux générations futures.',
      color: 'from-teal-500 to-teal-700',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Design Ultra-Dynamique */}
      <section className="relative bg-gradient-to-br from-green-600 via-emerald-500 to-teal-600 text-white py-20 md:py-32 overflow-hidden">
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
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl opacity-10"
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
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-300 rounded-full blur-3xl opacity-10"
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
              Nos Valeurs
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.9, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Les principes fondamentaux qui guident nos actions au quotidien
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
