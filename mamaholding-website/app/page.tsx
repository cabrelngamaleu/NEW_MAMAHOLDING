'use client'

import { motion } from 'framer-motion'
import PremiumHero from '@/components/PremiumHero'
import AnimatedCounter from '@/components/AnimatedCounter'
import { FaHandshake, FaChartLine, FaUsers, FaAward, FaShoppingCart, FaIndustry, FaLeaf, FaPlay } from 'react-icons/fa'
import Link from 'next/link'
import { useState } from 'react'
import VideoModal from '@/components/VideoModal'

export default function Home() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  const stats = [
    { number: 20, label: 'Années d\'Expérience', suffix: '+' },
    { number: 3, label: 'Entités Commerciales', suffix: '' },
    { number: 500, label: 'Partenaires', suffix: '+' },
    { number: 1000, label: 'Clients Satisfaits', suffix: '+' },
  ]

  const values = [
    {
      icon: <FaAward />,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans tous nos services et produits',
    },
    {
      icon: <FaHandshake />,
      title: 'Intégrité',
      description: 'La transparence et l\'honnêteté guident nos actions',
    },
    {
      icon: <FaChartLine />,
      title: 'Innovation',
      description: 'Nous innovons constamment pour mieux servir nos clients',
    },
    {
      icon: <FaUsers />,
      title: 'Partenariat',
      description: 'Nous créons des relations durables avec nos partenaires',
    },
  ]

  const entities = [
    {
      name: 'CAC',
      description: 'Commerce et distribution de produits de qualité',
      icon: <FaShoppingCart />,
      color: 'bg-primary-red',
      href: '/entites/cac',
    },
    {
      name: 'TRINCO',
      description: 'Solutions industrielles et commerciales innovantes',
      icon: <FaIndustry />,
      color: 'bg-primary-green',
      href: '/entites/trinco',
    },
    {
      name: 'ECOFOOD',
      description: 'Produits alimentaires de qualité supérieure',
      icon: <FaLeaf />,
      color: 'bg-primary-green',
      href: '/entites/ecofood',
    },
  ]

  const news = [
    {
      title: 'MAMAHOLDING renforce sa position sur le marché',
      date: '15 Mars 2024',
      category: 'Actualité',
      excerpt: 'Le groupe MAMAHOLDING annonce de nouveaux partenariats stratégiques...',
    },
    {
      title: 'Nouvelle filiale ECOFOOD inaugurée',
      date: '10 Mars 2024',
      category: 'Expansion',
      excerpt: 'Ouverture d\'un nouveau centre de distribution pour mieux servir nos clients...',
    },
    {
      title: 'CAC célèbre 10 ans de succès',
      date: '5 Mars 2024',
      category: 'Anniversaire',
      excerpt: 'CAC fête une décennie d\'excellence dans le commerce en gros...',
    },
  ]

  return (
    <>
      <PremiumHero />

      {/* Section À propos - Fond BLANC */}
      <section id="about" className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Vidéo/Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative group">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800"
                  alt="MAMAHOLDING"
                  className="w-full h-[500px] object-cover rounded-lg shadow-xl"
                />
                {/* Overlay léger */}
                <div className="absolute inset-0 bg-gray-900/40 rounded-lg" />
                
                {/* Bouton Play */}
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                >
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center group-hover:bg-primary-red transition-all duration-300 shadow-2xl group-hover:scale-110">
                    <FaPlay className="ml-1 text-primary-red group-hover:text-white text-2xl" />
                  </div>
                </button>
              </div>
            </motion.div>

            {/* Contenu */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-primary-green text-sm font-semibold uppercase tracking-wider">
                Laissez-moi vous présenter
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Notre Entreprise
              </h2>
              <div className="w-20 h-1 bg-primary-red"></div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                "Définir ensemble un objectif : c'est un meilleur départ ; s'accorder sur la stratégie : c'est progresser ; courir à ce rêve : c'est le succès."
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Tel est le résumé de l'identité de notre holding MAMAHOLDING et de ses différentes entités, avec pour vision de renforcer et de valoriser son capital humain diversifié et jeune.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Fort de plus de 20 ans d'expérience, MAMAHOLDING S.A s'est imposé comme un acteur majeur du commerce en gros.
              </p>
              
              <div className="pt-6">
                <Link href="/notre-histoire" className="btn-primary inline-block">
                  Découvrir Notre Histoire
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Chiffres Clés - Fond GRIS CLAIR */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="text-6xl md:text-7xl font-bold text-primary-red mb-4 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-lg md:text-xl text-gray-700 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Nos Valeurs - Fond BLANC */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-green text-sm font-semibold uppercase tracking-wider">
              Ce qui nous guide
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">Nos Valeurs</h2>
            <div className="w-20 h-1 bg-primary-red mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les valeurs qui guident notre action au quotidien
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-lg p-8 text-center group hover:shadow-xl hover:border-primary-red transition-all duration-300"
              >
                <div className="text-5xl text-primary-red mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/nos-valeurs" className="btn-outline inline-block">
              En Savoir Plus
            </Link>
          </div>
        </div>
      </section>

      {/* Section Nos Entités - Fond GRIS CLAIR */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-green text-sm font-semibold uppercase tracking-wider">
              Notre Groupe
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">Nos Entités</h2>
            <div className="w-20 h-1 bg-primary-red mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les entreprises qui composent notre groupe
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {entities.map((entity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={entity.href} className="block group">
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                    <div className={`${entity.color} text-white p-12 group-hover:opacity-90 transition-all duration-300`}>
                      <div className="text-7xl mb-6 flex justify-center">
                        {entity.icon}
                      </div>
                      <h3 className="text-4xl font-bold text-center">{entity.name}</h3>
                    </div>
                    <div className="p-6 bg-white">
                      <p className="text-gray-600 text-center leading-relaxed text-lg">
                        {entity.description}
                      </p>
                      <div className="text-center mt-6">
                        <span className="text-primary-red font-semibold group-hover:underline">
                          En savoir plus →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Actualités - Fond BLANC */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-green text-sm font-semibold uppercase tracking-wider">
              Restez informé
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">Actualités</h2>
            <div className="w-20 h-1 bg-primary-red mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les dernières nouvelles de MAMAHOLDING
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl hover:border-primary-red transition-all duration-300"
              >
                <div className="h-56 bg-primary-red flex items-center justify-center text-white text-2xl font-bold">
                  {item.category}
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary-green font-semibold mb-3">
                    {item.date}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary-red transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{item.excerpt}</p>
                  <Link href="/espace-presse" className="text-primary-red font-semibold hover:underline">
                    Lire la suite →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/espace-presse" className="btn-primary inline-block">
              Voir Toutes les Actualités
            </Link>
          </div>
        </div>
      </section>

      {/* Section CTA - Fond ROUGE */}
      <section className="py-24 bg-primary-red text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Prêt à Collaborer avec Nous ?
            </h2>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment MAMAHOLDING peut vous accompagner.
            </p>
            <Link href="/contact" className="inline-block bg-white text-primary-red px-10 py-5 rounded-md font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl">
              Nous Contacter
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Modal Vidéo */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl="/videos/presentation.mp4"
      />
    </>
  )
}
