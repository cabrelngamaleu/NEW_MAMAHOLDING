'use client'

import { motion } from 'framer-motion'
import PremiumHero from '@/components/PremiumHero'
import AnimatedCounter from '@/components/AnimatedCounter'
import { FaBuilding, FaHandshake, FaChartLine, FaUsers, FaAward, FaGlobe, FaShoppingCart, FaIndustry, FaLeaf, FaPlay } from 'react-icons/fa'
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
      color: 'from-primary-green to-green-600',
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
      <PremiumHero />

      {/* Section À propos avec Vidéo - Style Beetle Heritage */}
      <section id="about" className="py-24 bg-primary-dark-secondary relative overflow-hidden">
        {/* Effets de fond */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-red/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-green/10 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Vidéo avec effet "ailes" */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative group">
                {/* Image de présentation */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800"
                    alt="MAMAHOLDING"
                    className="w-full h-[500px] object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/80 to-primary-dark-secondary/80" />
                  
                  {/* Bouton Play */}
                  <button
                    onClick={() => setIsVideoModalOpen(true)}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                  >
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary-red to-primary-green flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-2xl">
                        <FaPlay className="ml-2 text-white text-3xl" />
                      </div>
                      {/* Effet d'onde */}
                      <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-ping" />
                    </div>
                  </button>
                </div>

                {/* Décorations "ailes" */}
                <div className="absolute -top-8 -left-8 w-32 h-32 border-4 border-primary-red/30 rounded-full" />
                <div className="absolute -bottom-8 -right-8 w-32 h-32 border-4 border-primary-green/30 rounded-full" />
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
              <div className="inline-block">
                <span className="text-primary-green text-sm font-semibold uppercase tracking-wider">
                  Laissez-moi vous présenter
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Notre Entreprise
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-red to-primary-green mb-8"></div>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                "Définir ensemble un objectif : c'est un meilleur départ ; s'accorder sur la stratégie : c'est progresser ; courir à ce rêve : c'est le succès."
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Tel est le résumé de l'identité de notre holding MAMAHOLDING et de ses différentes entités, avec pour vision de renforcer et de valoriser son capital humain diversifié et jeune.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Fort de plus de 20 ans d'expérience, MAMAHOLDING S.A s'est imposé comme un acteur majeur du commerce en gros. Notre groupe se distingue par son expertise, sa fiabilité et son engagement envers l'excellence.
              </p>
              
              <div className="pt-6">
                <Link href="/notre-histoire" className="inline-block bg-gradient-to-r from-primary-red to-red-700 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-300 transform hover:-translate-y-1">
                  Découvrir Notre Histoire
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Chiffres Clés avec Compteurs Animés */}
      <section className="py-24 bg-gradient-to-br from-primary-dark via-primary-dark-secondary to-primary-dark text-white relative overflow-hidden">
        {/* Grille de fond */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 gap-4 h-full">
            {[...Array(64)].map((_, i) => (
              <div key={i} className="border border-white/20" />
            ))}
          </div>
        </div>

        <div className="container-custom relative z-10">
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
                <div className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary-red to-primary-green bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-lg md:text-xl text-gray-300 font-medium">{stat.label}</div>
                {/* Ligne décorative */}
                <div className="w-16 h-1 bg-gradient-to-r from-primary-red to-primary-green mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Nos Valeurs */}
      <section className="py-24 bg-primary-dark-accent">
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Nos Valeurs</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-red to-primary-green mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
                className="bg-primary-dark-secondary rounded-xl p-8 text-center group hover:bg-primary-dark hover:shadow-2xl hover:shadow-primary-red/20 transition-all duration-300 border border-white/5 hover:border-primary-red/50"
              >
                <div className="text-5xl mb-6 flex justify-center text-transparent bg-clip-text bg-gradient-to-br from-primary-red to-primary-green group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/nos-valeurs" className="inline-block border-2 border-primary-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-red hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-300">
              En Savoir Plus
            </Link>
          </div>
        </div>
      </section>

      {/* Section Nos Entités */}
      <section className="py-24 bg-primary-dark relative overflow-hidden">
        {/* Effets lumineux */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-red/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary-green/10 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Nos Entités</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-red to-primary-green mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
                  <div className="bg-primary-dark-secondary rounded-xl overflow-hidden border border-white/5 hover:border-primary-red/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-red/20 h-full">
                    <div className={`bg-gradient-to-br ${entity.color} text-white p-12 group-hover:scale-105 transition-transform duration-300`}>
                      <div className="text-7xl mb-6 flex justify-center">
                        {entity.icon}
                      </div>
                      <h3 className="text-4xl font-bold text-center">{entity.name}</h3>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-400 text-center leading-relaxed text-lg">
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

      {/* Section Actualités */}
      <section className="py-24 bg-primary-dark-secondary">
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Actualités</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-red to-primary-green mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
                className="bg-primary-dark rounded-xl overflow-hidden group hover:shadow-2xl hover:shadow-primary-red/20 transition-all duration-300 border border-white/5 hover:border-primary-red/50"
              >
                <div className="h-56 bg-gradient-to-br from-primary-red to-red-700 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-105 transition-transform duration-300">
                  {item.category}
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary-green font-semibold mb-3">
                    {item.date}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-red transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{item.excerpt}</p>
                  <Link href="/espace-presse" className="text-primary-red font-semibold hover:underline inline-flex items-center gap-2">
                    Lire la suite →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/espace-presse" className="inline-block bg-gradient-to-r from-primary-red to-red-700 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-300 transform hover:-translate-y-1">
              Voir Toutes les Actualités
            </Link>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-24 bg-gradient-to-br from-primary-red via-red-700 to-primary-green text-white relative overflow-hidden">
        {/* Effets de fond */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Prêt à Collaborer avec Nous ?
            </h2>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment MAMAHOLDING peut vous accompagner dans votre réussite.
            </p>
            <Link href="/contact" className="inline-block bg-white text-primary-red px-10 py-5 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-white/50 transform hover:-translate-y-2">
              Nous Contacter Maintenant
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
