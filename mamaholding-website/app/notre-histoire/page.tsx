'use client'

import { motion } from 'framer-motion'
import { FaCalendar, FaRocket, FaGlobe, FaTrophy, FaQuoteLeft, FaAward, FaHandshake, FaLightbulb } from 'react-icons/fa'

export default function NotreHistoire() {
  const timeline = [
    {
      year: '2004',
      title: 'Création de MAMA SARL',
      description: 'Fondation de MAMA SARL avec la vision de devenir un leader du commerce en gros au Cameroun.',
      icon: <FaRocket />,
    },
    {
      year: '2006',
      title: 'Lancement de CAC',
      description: 'Ouverture de notre première entité commerciale spécialisée dans la distribution.',
      icon: <FaCalendar />,
    },
    {
      year: '2010',
      title: 'Expansion avec TRINCO',
      description: 'Diversification avec des solutions industrielles et commerciales innovantes.',
      icon: <FaGlobe />,
    },
    {
      year: '2015',
      title: 'ECOFOOD rejoint le groupe',
      description: 'Renforcement de notre position dans le secteur alimentaire.',
      icon: <FaTrophy />,
    },
    {
      year: '2024',
      title: 'Naissance de MAMAHOLDING S.A',
      description: 'Création du groupe MAMAHOLDING S.A, regroupant toutes les entités. Plus de 20 ans d\'excellence avec 500+ partenaires et 1000+ clients satisfaits.',
      icon: <FaAward />,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Design Ultra-Dynamique */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-500 to-orange-600 text-white py-20 md:py-32 overflow-hidden">
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
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-yellow-300 rounded-full blur-3xl opacity-10"
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
              animate={{
                textShadow: [
                  '0 0 20px rgba(255,255,255,0.3)',
                  '0 0 40px rgba(255,255,255,0.5)',
                  '0 0 20px rgba(255,255,255,0.3)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Notre Histoire
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl opacity-95 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.95, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Plus de 20 ans d'excellence et d'innovation dans le commerce en gros
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Introduction - Design Ultra-Animé et Interactif */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-red-50/30 to-gray-50 relative overflow-hidden">
        {/* Particules de fond */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`bg-particle-${i}`}
              className="absolute w-2 h-2 bg-red-400 rounded-full"
              style={{
                left: `${(i * 10) % 100}%`,
                top: `${(i * 13) % 100}%`
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
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-primary-red font-semibold">Notre Parcours</span>
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
                Une Vision Ambitieuse
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.03, 
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(220, 38, 38, 0.3)"
                }}
                className="relative bg-white rounded-2xl p-8 shadow-xl border-l-4 border-primary-red overflow-hidden group"
              >
                {/* Effet de brillance au hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-red-100/50 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.8 }}
                />
                
                {/* Badge décoratif animé */}
                <motion.div
                  className="absolute top-4 right-4 w-20 h-20 bg-red-100 rounded-full opacity-20"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                <div className="flex flex-col h-full relative z-10">
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <FaLightbulb className="text-6xl text-primary-red mb-6 drop-shadow-lg" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-primary-dark mb-4 group-hover:text-red-600 transition-colors">
                    Excellence Commerciale
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    MAMAHOLDING S.A est né d'une vision ambitieuse : créer un groupe commercial d'excellence, capable de répondre aux besoins diversifiés de ses clients tout en maintenant les plus hauts standards de qualité et de service.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.03, 
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.3)"
                }}
                className="relative bg-white rounded-2xl p-8 shadow-xl border-l-4 border-primary-green overflow-hidden group"
              >
                {/* Effet de brillance au hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-green-100/50 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.8 }}
                />
                
                {/* Badge décoratif animé */}
                <motion.div
                  className="absolute top-4 right-4 w-20 h-20 bg-green-100 rounded-full opacity-20"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [360, 180, 0]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                <div className="flex flex-col h-full relative z-10">
                  <motion.div
                    animate={{
                      rotate: [0, -10, 10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  >
                    <FaHandshake className="text-6xl text-primary-green mb-6 drop-shadow-lg" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-primary-dark mb-4 group-hover:text-green-600 transition-colors">
                    Groupe Diversifié
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Au fil des années, nous avons construit un groupe solide et diversifié, avec trois entités complémentaires qui font notre force : CAC, TRINCO et ECOFOOD.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Le Fondateur - Design Ultra-Interactif */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-white via-green-50/20 to-white relative overflow-hidden">
        {/* Effet de fond animé */}
        <motion.div
          className="absolute top-10 right-10 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div 
              className="inline-block bg-gradient-to-r from-green-100 to-emerald-100 px-6 py-2 rounded-full mb-6 border border-green-200"
              whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-primary-green font-semibold">Leadership</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-3">
              Le Fondateur
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl overflow-hidden relative group"
            >
              {/* Badge décoratif animé */}
              <motion.div
                className="absolute top-0 right-0 w-40 h-40 bg-green-300 rounded-full blur-3xl opacity-0 group-hover:opacity-20"
                animate={{
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity
                }}
              />

              <div className="bg-gradient-to-r from-primary-green to-green-600 p-8 md:p-10 text-white relative overflow-hidden">
                {/* Effet de vague animé */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{
                    x: ['-100%', '200%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity
                  }}
                >
                  <FaQuoteLeft className="text-4xl opacity-50 mb-4" />
                </motion.div>
                <motion.h3 
                  className="text-3xl md:text-4xl font-bold mb-2"
                  whileHover={{ scale: 1.05, x: 10 }}
                >
                  MOHAMADOU DAHIROU
                </motion.h3>
                <motion.p 
                  className="text-xl opacity-90"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 0.9, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Entrepreneur & Visionnaire
                </motion.p>
              </div>

              <div className="p-8 md:p-12">
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    <span className="font-semibold text-primary-dark">Entrepreneur dynamique et passionné</span>, MOHAMADOU DAHIROU est le fondateur et visionnaire derrière MAMAHOLDING S.A. Son parcours inspirant témoigne d'une détermination sans faille et d'une passion profonde pour le développement du commerce au Cameroun.
                  </p>
                  
                  <div className="border-l-4 border-primary-green pl-6 py-2 bg-green-50/50 rounded-r-lg">
                    <p>
                      Animé par une vision ambitieuse, ce leader a su bâtir un groupe solide et diversifié, faisant preuve d'un sens aigu des affaires et d'une capacité remarquable à identifier les opportunités du marché camerounais.
                    </p>
                  </div>
                  
                  <p>
                    Sa passion pour <span className="font-semibold text-primary-dark">l'entrepreneuriat et l'innovation</span> l'a conduit à embrasser le secteur de la distribution des produits agroalimentaires, avec l'ambition de diversifier ses activités dans le secteur industriel et le commerce des services.
                  </p>
                  
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl border-l-4 border-primary-red">
                    <p>
                      Animé par le désir de révolutionner le secteur de la distribution, MOHAMADOU DAHIROU a mis sur pied plusieurs entreprises dédiées à la grande distribution. Déterminé à concrétiser sa vision, il s'est ensuite lancé dans le secteur industriel avec la création d'entreprises de production industrielle, créant ainsi des chaînes de valeurs intégrées.
                    </p>
                  </div>
                  
                  <p className="text-lg font-medium text-primary-dark">
                    Sa volonté de se développer au-delà des frontières nationales positionne MAMAHOLDING comme un acteur clé du marché commun continental (ZLECAF).
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline - Design Ultra-Interactif avec Animations */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 via-red-50/20 to-white relative overflow-hidden">
        {/* Particules de fond */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`timeline-particle-${i}`}
              className="absolute w-1 h-1 bg-red-500 rounded-full"
              style={{
                left: `${(i * 7) % 100}%`,
                top: `${(i * 11) % 100}%`
              }}
              animate={{
                y: [-30, 30, -30],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div 
              className="inline-block bg-gradient-to-r from-red-100 to-orange-100 px-6 py-2 rounded-full mb-6 border border-red-200"
              whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
            >
              <span className="text-primary-red font-semibold">Chronologie</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark">Les Grandes Étapes</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            {/* Ligne verticale animée */}
            <motion.div 
              className="absolute left-8 md:left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-red via-primary-green to-primary-red"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
              style={{ transformOrigin: "top" }}
            />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative mb-10 last:mb-0 group"
              >
                <div className="flex items-start gap-6 md:gap-8">
                  <div className="flex-shrink-0 relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="relative"
                    >
                      {/* Cercle pulsant en arrière-plan */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-red-400 to-red-600 rounded-full"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 0.2, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3
                        }}
                      />
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary-red to-red-700 rounded-full flex items-center justify-center text-white text-2xl shadow-lg ring-4 ring-white relative z-10">
                        {item.icon}
                      </div>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="flex-grow bg-white rounded-2xl shadow-lg p-6 md:p-8 relative overflow-hidden"
                    whileHover={{ 
                      scale: 1.02,
                      y: -5,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Effet de brillance au hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-red-100/50 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.8 }}
                    />

                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-3">
                        <motion.span 
                          className="bg-gradient-to-r from-primary-red to-red-700 text-white font-bold text-lg px-4 py-1 rounded-full"
                          whileHover={{ scale: 1.1 }}
                        >
                          {item.year}
                        </motion.span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-primary-dark mb-3 group-hover:text-red-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission - Design moderne avec icônes */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary-dark to-gray-900 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre Engagement</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Des valeurs fortes qui guident chacune de nos actions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary-green rounded-xl flex items-center justify-center">
                  <FaLightbulb className="text-2xl text-white" />
                </div>
                <h3 className="text-3xl font-bold">Notre Vision</h3>
              </div>
              <p className="text-lg leading-relaxed opacity-90">
                Acteur de référence internationale dans la distribution et la production des produits de qualité.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary-red rounded-xl flex items-center justify-center">
                  <FaAward className="text-2xl text-white" />
                </div>
                <h3 className="text-3xl font-bold">Notre Mission</h3>
              </div>
              <p className="text-lg leading-relaxed opacity-90">
                Offrir à sa clientèle une variété de produits de qualité à des prix défiant toute concurrence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
