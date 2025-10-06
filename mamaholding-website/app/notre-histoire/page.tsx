'use client'

import { motion } from 'framer-motion'
import { FaCalendar, FaRocket, FaGlobe, FaTrophy } from 'react-icons/fa'

export default function NotreHistoire() {
  const timeline = [
    {
      year: '2000',
      title: 'Création de MAMAHOLDING',
      description: 'Fondation du groupe avec la vision de devenir un leader du commerce en gros.',
      icon: <FaRocket />,
    },
    {
      year: '2005',
      title: 'Lancement de CAC',
      description: 'Ouverture de notre première entité commerciale CAC.',
      icon: <FaCalendar />,
    },
    {
      year: '2010',
      title: 'Expansion avec TRINCO',
      description: 'Création de TRINCO pour diversifier nos activités industrielles.',
      icon: <FaGlobe />,
    },
    {
      year: '2015',
      title: 'ECOFOOD rejoint le groupe',
      description: 'Acquisition d\'ECOFOOD pour renforcer notre position dans l\'alimentaire.',
      icon: <FaTrophy />,
    },
    {
      year: '2024',
      title: 'Leadership confirmé',
      description: 'MAMAHOLDING est aujourd\'hui un acteur majeur du commerce en gros.',
      icon: <FaTrophy />,
    },
  ]

  return (
    <div className="min-h-screen bg-white mt-20 md:mt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-red to-red-700 text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Notre Histoire</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Plus de 20 ans d'excellence et d'innovation dans le commerce en gros
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-xl text-gray-700 leading-relaxed mb-8"
            >
              MAMAHOLDING S.A est né d'une vision ambitieuse : créer un groupe commercial d'excellence, capable de répondre aux besoins diversifiés de ses clients tout en maintenant les plus hauts standards de qualité et de service.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-700 leading-relaxed"
            >
              Au fil des années, nous avons construit un groupe solide et diversifié, avec trois entités complémentaires qui font notre force : CAC, TRINCO et ECOFOOD.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-primary-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Les Grandes Étapes</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-red to-primary-green mx-auto"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-12 last:mb-0"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-red to-red-700 rounded-full flex items-center justify-center text-white text-2xl">
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex-grow bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="text-primary-red font-bold text-lg mb-2">{item.year}</div>
                    <h3 className="text-2xl font-bold text-primary-dark mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-3xl font-bold text-primary-dark mb-6">Notre Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Être le partenaire commercial de référence en Afrique, reconnu pour son excellence, son innovation et son engagement envers la satisfaction client.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nous aspirons à créer de la valeur durable pour nos clients, partenaires et employés, tout en contribuant au développement économique de nos communautés.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-3xl font-bold text-primary-dark mb-6">Notre Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Fournir des solutions commerciales de qualité supérieure, adaptées aux besoins spécifiques de chaque client.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nous nous engageons à maintenir les plus hauts standards de service, à innover constamment et à construire des partenariats durables basés sur la confiance et le respect mutuel.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
