'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import { FaBuilding, FaHandshake, FaChartLine, FaUsers, FaAward, FaGlobe, FaShoppingCart, FaIndustry, FaLeaf } from 'react-icons/fa'
import Link from 'next/link'

export default function Home() {
  const stats = [
    { number: '20+', label: 'Années d\'Expérience' },
    { number: '3', label: 'Entités Commerciales' },
    { number: '500+', label: 'Partenaires' },
    { number: '1000+', label: 'Clients Satisfaits' },
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
      color: 'from-red-500 to-red-700',
      href: '/entites/cac',
    },
    {
      name: 'TRINCO',
      description: 'Solutions industrielles et commerciales innovantes',
      icon: <FaIndustry />,
      color: 'from-green-500 to-green-700',
      href: '/entites/trinco',
    },
    {
      name: 'ECOFOOD',
      description: 'Produits alimentaires de qualité supérieure',
      icon: <FaLeaf />,
      color: 'from-blue-500 to-blue-700',
      href: '/entites/ecofood',
    },
  ]

  const news = [
    {
      title: 'MAMAHOLDING renforce sa position sur le marché',
      date: '15 Mars 2024',
      category: 'Actualité',
      excerpt: 'Le groupe MAMAHOLDING annonce de nouveaux partenariats stratégiques...',
      image: 'https://placehold.co/400x250/DC143C/FFFFFF?text=Actualite+1',
    },
    {
      title: 'Nouvelle filiale ECOFOOD inaugurée',
      date: '10 Mars 2024',
      category: 'Expansion',
      excerpt: 'Ouverture d\'un nouveau centre de distribution pour mieux servir nos clients...',
      image: 'https://placehold.co/400x250/22C55E/FFFFFF?text=Actualite+2',
    },
    {
      title: 'CAC célèbre 10 ans de succès',
      date: '5 Mars 2024',
      category: 'Anniversaire',
      excerpt: 'CAC fête une décennie d\'excellence dans le commerce en gros...',
      image: 'https://placehold.co/400x250/1F2937/FFFFFF?text=Actualite+3',
    },
  ]

  return (
    <>
      <Hero />

      {/* Section À propos */}
      <section id="about" className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Qui Sommes-Nous ?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-red to-primary-green mx-auto mb-6"></div>
            <p className="section-subtitle">
              MAMAHOLDING S.A est un groupe leader dans le commerce en gros, offrant des solutions complètes et innovantes à travers nos entités CAC, TRINCO et ECOFOOD.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-primary-red to-red-700 rounded-2xl p-8 text-white h-full flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <FaBuilding className="text-8xl mb-6 mx-auto opacity-90" />
                  <h3 className="text-3xl font-bold mb-4">MAMAHOLDING S.A</h3>
                  <p className="text-lg opacity-90">Votre Partenaire Commercial de Confiance</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                Fort de plus de 20 ans d\'expérience, MAMAHOLDING S.A s\'est imposé comme un acteur majeur du commerce en gros. Notre groupe se distingue par son expertise, sa fiabilité et son engagement envers l\'excellence.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nous accompagnons nos clients et partenaires avec des solutions sur mesure, adaptées à leurs besoins spécifiques. Notre force réside dans la diversité de nos entités et la synergie qu\'elles créent.
              </p>
              <Link href="/notre-histoire" className="btn-primary inline-block">
                Découvrir Notre Histoire
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Chiffres Clés */}
      <section className="py-20 bg-gradient-to-br from-primary-dark via-gray-900 to-primary-dark text-white">
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
                <div className="text-5xl md:text-6xl font-bold text-primary-red mb-4">
                  {stat.number}
                </div>
                <div className="text-lg md:text-xl text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Nos Valeurs */}
      <section className="py-20 bg-primary-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Nos Valeurs</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-red to-primary-green mx-auto mb-6"></div>
            <p className="section-subtitle">
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
                className="card text-center group"
              >
                <div className="text-5xl text-primary-red mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary-dark mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/nos-valeurs" className="btn-outline">
              En Savoir Plus
            </Link>
          </div>
        </div>
      </section>

      {/* Section Nos Entités */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Nos Entités</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-red to-primary-green mx-auto mb-6"></div>
            <p className="section-subtitle">
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
                <Link href={entity.href} className="block">
                  <div className="card h-full overflow-hidden group cursor-pointer">
                    <div className={`bg-gradient-to-br ${entity.color} text-white p-8 mb-6 rounded-lg group-hover:scale-105 transition-transform duration-300`}>
                      <div className="text-6xl mb-4 flex justify-center">
                        {entity.icon}
                      </div>
                      <h3 className="text-3xl font-bold text-center">{entity.name}</h3>
                    </div>
                    <p className="text-gray-600 text-center leading-relaxed px-4 pb-4">
                      {entity.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Actualités */}
      <section className="py-20 bg-primary-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Actualités</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-red to-primary-green mx-auto mb-6"></div>
            <p className="section-subtitle">
              Restez informé de nos dernières nouvelles
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
                className="card overflow-hidden p-0"
              >
                <div className="h-48 bg-gradient-to-br from-primary-red to-red-700 flex items-center justify-center text-white text-2xl font-bold">
                  {item.category}
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary-red font-semibold mb-2">
                    {item.date}
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <Link href="/espace-presse" className="text-primary-red font-semibold hover:underline">
                    Lire la suite →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/espace-presse" className="btn-primary">
              Voir Toutes les Actualités
            </Link>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-red to-red-700 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt à Collaborer avec Nous ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Contactez-nous dès aujourd\'hui pour discuter de vos besoins et découvrir comment MAMAHOLDING peut vous accompagner.
            </p>
            <Link href="/contact" className="bg-white text-primary-red px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block">
              Nous Contacter
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
