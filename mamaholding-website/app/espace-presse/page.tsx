'use client'

import { motion } from 'framer-motion'
import { FaNewspaper, FaCalendar } from 'react-icons/fa'
import Link from 'next/link'

export default function EspacePresse() {
  const news = [
    {
      title: 'MAMAHOLDING célèbre 20 ans d\'excellence',
      date: '15 Octobre 2024',
      category: 'Actualité Groupe',
      excerpt: 'Depuis sa création en 2004, MAMAHOLDING S.A s\'est imposé comme un acteur majeur du commerce en gros au Cameroun. Avec ses trois entités CAC, TRINCO et ECOFOOD, le groupe continue d\'innover et de servir plus de 1000 clients à travers le pays. Nos valeurs d\'Engagement, d\'Esprit d\'équipe, d\'Intégrité et de Respect de l\'environnement nous guident vers l\'excellence.',
      image: 'https://placehold.co/800x400/DC143C/FFFFFF?text=20+ans',
    },
    {
      title: 'L\'importance de la Qualité dans notre secteur',
      date: '28 Septembre 2024',
      category: 'Qualité',
      excerpt: 'La qualité dans notre secteur est d\'une importance capitale pour plusieurs raisons. Elle joue un rôle essentiel dans la satisfaction des consommateurs et la pérennité de nos activités. MAMAHOLDING s\'engage à maintenir les plus hauts standards de qualité à travers toutes ses entités, garantissant ainsi la confiance de nos partenaires.',
      image: 'https://placehold.co/800x400/22C55E/FFFFFF?text=Qualite',
    },
    {
      title: 'L\'Engagement : notre force motrice',
      date: '12 Septembre 2024',
      category: 'Nos Valeurs',
      excerpt: 'L\'engagement dans notre organisation reflète notre détermination à tenir nos promesses envers nos clients, partenaires et employés. C\'est l\'une de nos quatre valeurs fondamentales qui guide nos actions quotidiennes. Notre engagement professionnel et notre volonté d\'excellence sont au cœur de notre réussite.',
      image: 'https://placehold.co/800x400/1F2937/FFFFFF?text=Discipline',
    },
    {
      title: 'ECOFOOD : Engagement pour une alimentation saine',
      date: '5 Septembre 2024',
      category: 'ECOFOOD',
      excerpt: 'Depuis 2015, ECOFOOD s\'engage à fournir des produits alimentaires de qualité supérieure. Avec plus de 500 produits disponibles et 80 producteurs partenaires, nous privilégions les circuits courts et soutenons l\'agriculture locale. 70% de nos produits sont d\'origine locale, garantissant fraîcheur et traçabilité à 100%.',
      image: 'https://placehold.co/800x400/3B82F6/FFFFFF?text=ECOFOOD',
    },
    {
      title: 'CAC : 18 ans au service des professionnels',
      date: '20 Août 2024',
      category: 'CAC',
      excerpt: 'Depuis 2006, CAC est l\'entité commerciale phare de MAMAHOLDING. Avec plus de 1000 produits disponibles et 500 clients actifs, nous offrons des solutions complètes en commerce de gros : produits de grande consommation, articles ménagers, fournitures diverses. Notre taux de satisfaction de 95% témoigne de notre engagement envers l\'excellence.',
      image: 'https://placehold.co/800x400/8B5CF6/FFFFFF?text=CAC',
    },
    {
      title: 'TRINCO : Solutions industrielles innovantes',
      date: '10 Août 2024',
      category: 'TRINCO',
      excerpt: 'Créée en 2010, TRINCO est spécialisée dans les solutions industrielles et commerciales. Avec 14 ans d\'expérience, plus de 2000 produits en stock et 400 clients professionnels, nous fournissons équipements industriels, outillages professionnels et matériaux de construction. Notre expertise technique et notre service après-vente garantissent votre satisfaction.',
      image: 'https://placehold.co/800x400/EF4444/FFFFFF?text=TRINCO',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Design Ultra-Dynamique */}
      <section className="relative bg-gradient-to-br from-primary-red via-red-600 to-red-800 text-white py-32 overflow-hidden">
        {/* Particules flottantes */}
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
                scale: [1, 1.8, 1],
                opacity: [0.3, 0.9, 0.3]
              }}
              transition={{
                duration: 5 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.15
              }}
            />
          ))}
        </div>

        {/* Halos animés */}
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            className="absolute top-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.4, 1],
              x: [0, 50, 0],
              y: [0, -40, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-80 h-80 bg-white rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.5, 1],
              x: [0, -40, 0],
              y: [0, 50, 0],
              rotate: [360, 180, 0]
            }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Lignes animées */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute h-px bg-white"
              style={{ top: `${15 + i * 14}%`, width: '100%' }}
              animate={{
                x: ['-100%', '200%'],
                opacity: [0, 0.6, 0]
              }}
              transition={{
                duration: 7 + i,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.6
              }}
            />
          ))}
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-white/30"
            >
              <span className="text-white font-semibold">Actualités & Communiqués</span>
            </motion.div>
            
            <div className="flex justify-center mb-6">
              <FaNewspaper className="text-6xl" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Espace Presse
            </h1>
            <p className="text-xl md:text-2xl opacity-95 leading-relaxed">
              Toutes les actualités et communiqués de presse de MAMAHOLDING S.A
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction - Design Ultra-Animé */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-red-50/20 to-gray-50 relative overflow-hidden">
        {/* Particules de fond */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`intro-particle-${i}`}
              className="absolute w-2 h-2 bg-red-400 rounded-full"
              style={{
                left: `${(i * 12) % 100}%`,
                top: `${(i * 15) % 100}%`
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="inline-block bg-gradient-to-r from-red-100 to-orange-100 px-6 py-2 rounded-full mb-4 border border-red-200"
                whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
              >
                <span className="text-primary-red font-semibold">Actualités du Groupe</span>
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
                Suivez Notre Actualité
              </h2>
            </motion.div>

            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-primary-red relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Effet de brillance */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-red-100/30 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.8 }}
              />

              <div className="flex flex-col h-full relative z-10">
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <FaNewspaper className="text-6xl text-primary-red mb-6 drop-shadow-lg" />
                </motion.div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Retrouvez ici toute l'actualité du groupe MAMAHOLDING et de ses entités CAC, TRINCO et ECOFOOD. Découvrez nos dernières réalisations, nos initiatives et notre engagement pour l'excellence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Articles de Presse - Design Ultra-Animé */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -15,
                  scale: 1.03,
                  boxShadow: "0 25px 50px -12px rgba(220, 38, 38, 0.3)"
                }}
                className="card overflow-hidden p-0 group cursor-pointer relative"
              >
                {/* Badge décoratif animé */}
                <motion.div
                  className="absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full z-20"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                />

                <div className="h-48 bg-gradient-to-br from-primary-red to-red-700 flex items-center justify-center text-white text-xl font-bold overflow-hidden relative">
                  {/* Effet de vague animé */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    animate={{
                      x: ['-100%', '200%']
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.5
                    }}
                  />

                  <motion.div 
                    className="text-center p-4 relative z-10"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                    >
                      <FaNewspaper className="text-6xl mb-2 mx-auto drop-shadow-lg" />
                    </motion.div>
                    <p className="font-bold">{article.category}</p>
                  </motion.div>
                </div>
                
                <div className="p-6 relative overflow-hidden">
                  {/* Effet de brillance au hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-red-50 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.8 }}
                  />

                  <div className="relative z-10">
                    <motion.div 
                      className="flex items-center gap-2 text-sm text-primary-red font-semibold mb-3"
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        animate={{
                          rotate: [0, 10, -10, 0]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <FaCalendar />
                      </motion.div>
                      <span>{article.date}</span>
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-primary-dark mb-3 group-hover:text-primary-red transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                    
                    <motion.button 
                      className="text-primary-red font-semibold hover:underline inline-flex items-center gap-2"
                      whileHover={{ x: 5 }}
                    >
                      Lire la suite 
                      <motion.span
                        animate={{
                          x: [0, 5, 0]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity
                        }}
                      >
                        →
                      </motion.span>
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Presse - Design Ultra-Animé */}
      <section className="py-20 bg-gradient-to-br from-red-50/30 via-gray-50 to-red-50/30 relative overflow-hidden">
        {/* Particules de fond */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`contact-particle-${i}`}
              className="absolute w-2 h-2 bg-red-400 rounded-full"
              style={{
                left: `${(i * 10) % 100}%`,
                top: `${(i * 13) % 100}%`
              }}
              animate={{
                y: [-30, 30, -30],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="card bg-white max-w-4xl mx-auto text-center relative overflow-hidden shadow-2xl"
          >
            {/* Effet de brillance */}
            <motion.div
              className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"
              animate={{
                x: ['-100%', '100%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            <motion.h2 
              className="text-4xl font-bold text-primary-dark mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Contact Presse
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-700 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Pour toute demande d'information ou interview, contactez notre service de communication
            </motion.p>
            
            <div className="space-y-4 mb-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, x: 5 }}
                className="inline-block bg-gradient-to-r from-red-50 to-orange-50 px-6 py-3 rounded-lg border border-red-200"
              >
                <p className="text-lg">
                  <span className="font-semibold text-red-600">Email :</span>{' '}
                  <span className="text-gray-800">mapprologistique@mamaholding.net</span>
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, x: 5 }}
                className="inline-block bg-gradient-to-r from-red-50 to-orange-50 px-6 py-3 rounded-lg border border-red-200"
              >
                <p className="text-lg">
                  <span className="font-semibold text-red-600">Téléphone :</span>{' '}
                  <span className="text-gray-800">+237 690 201 978 / +237 690 202 555</span>
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, x: 5 }}
                className="inline-block bg-gradient-to-r from-red-50 to-orange-50 px-6 py-3 rounded-lg border border-red-200"
              >
                <p className="text-lg">
                  <span className="font-semibold text-red-600">Adresse :</span>{' '}
                  <span className="text-gray-800">Yaoundé -Etoudi, Cameroun</span>
                </p>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="btn-primary inline-flex items-center gap-3">
                  Contactez-Nous
                  <motion.span
                    animate={{
                      x: [0, 5, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity
                    }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
