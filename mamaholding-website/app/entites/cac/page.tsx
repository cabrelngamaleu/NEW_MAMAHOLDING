'use client'

import { motion } from 'framer-motion'
import { FaIndustry, FaGlobeAmericas, FaProjectDiagram, FaSeedling, FaShoppingCart, FaCheckCircle } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

export default function CAC() {
  const services = [
    {
      icon: <FaIndustry />,
      title: 'Transformation Agroalimentaire',
      description: 'Industrie de transformation des produits agro-alimentaires avec un complexe agro-industriel dédié à la production d\'huile, de sucre, de lait et de confiserie',
    },
    {
      icon: <FaProjectDiagram />,
      title: 'Études & Réalisation de Projets',
      description: 'Études et réalisation de projets agro-industriels clés en main avec expertise technique et accompagnement complet',
    },
    {
      icon: <FaSeedling />,
      title: 'Agriculture et Élevage',
      description: 'Production agricole et élevage moderne avec des pratiques durables et innovantes',
    },
    {
      icon: <FaGlobeAmericas />,
      title: 'Achat, Vente & Location',
      description: 'Achat, vente en gros et en détail des matières premières, avec location de matériel et équipements',
    },
    {
      icon: <FaShoppingCart />,
      title: 'Commerce Général & Logistique',
      description: 'Commerce général avec importation de matières premières (sucre et soja) et solutions logistiques complètes',
    },
  ]

  const stats = [
    { number: '30M', label: 'Capital Social FCFA' },
    { number: '2,7Mds', label: 'CA 2020 FCFA' },
    { number: '2Mds+', label: 'CA 2021 FCFA' },
    { number: '500M+', label: 'Résultat 2021 FCFA' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Design Premium & Dynamique */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-red-50/30 py-20 overflow-hidden">
        {/* Barre animée en haut */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        ></motion.div>
        
        {/* Éléments décoratifs animés - Plus dynamiques */}
        <div className="absolute inset-0 opacity-30">
          <motion.div 
            className="absolute top-10 right-10 w-64 h-64 bg-red-200 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.4, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
          <motion.div 
            className="absolute bottom-10 left-10 w-96 h-96 bg-red-100 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.5, 1],
              x: [0, -40, 0],
              y: [0, 50, 0],
              rotate: [360, 180, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
          <motion.div 
            className="absolute top-1/2 right-1/4 w-48 h-48 bg-orange-200 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, -30, 0],
              y: [0, 40, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
        </div>
        
        {/* Particules flottantes - Plus nombreuses et dynamiques */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-red-400 rounded-full opacity-20"
              style={{
                left: `${(i * 7) % 100}%`,
                top: `${(i * 13) % 100}%`,
              }}
              animate={{
                y: [-30, 40, -30],
                x: [-20, 20, -20],
                opacity: [0.1, 0.5, 0.1],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
        
        {/* Vagues animées en arrière-plan */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`wave-${i}`}
              className="absolute w-full h-32 bg-gradient-to-r from-transparent via-red-300 to-transparent"
              style={{
                top: `${20 + i * 30}%`,
                transformOrigin: 'center'
              }}
              animate={{
                x: ['-100%', '100%'],
                opacity: [0, 0.3, 0]
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 2
              }}
            />
          ))}
        </div>
        
        {/* Motif géométrique subtil */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc2626' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-6xl mx-auto"
          >
            {/* Layout horizontal premium */}
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
              {/* Logo à gauche avec effet premium */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="flex-shrink-0 relative"
              >
                {/* Cercle décoratif en arrière-plan */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-red-600 rounded-full blur-2xl opacity-20 scale-110"></div>
                
                <motion.div 
                  className="relative w-44 h-44 md:w-56 md:h-56 bg-white rounded-[2.5rem] shadow-2xl flex items-center justify-center p-8 border border-red-100 group cursor-pointer"
                  whileHover={{ 
                    scale: 1.15,
                    rotate: [0, -5, 5, 0],
                    boxShadow: "0 30px 60px -12px rgba(220, 38, 38, 0.6)",
                    y: -10
                  }}
                  animate={{
                    y: [0, -10, 0],
                    boxShadow: [
                      "0 20px 40px -12px rgba(220, 38, 38, 0.3)",
                      "0 25px 50px -12px rgba(220, 38, 38, 0.4)",
                      "0 20px 40px -12px rgba(220, 38, 38, 0.3)"
                    ]
                  }}
                  transition={{ 
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    hover: { duration: 0.3 }
                  }}
                >
                  {/* Effet de brillance animé */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent rounded-[2.5rem]"
                    animate={{
                      opacity: [0, 0.5, 0],
                      x: ['-100%', '100%']
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  ></motion.div>
                  
                  {/* Cercles animés multiples autour du logo */}
                  <motion.div
                    className="absolute inset-0 border-2 border-red-400 rounded-[2.5rem] opacity-20"
                    animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.div>
                  <motion.div
                    className="absolute inset-0 border-2 border-red-300 rounded-[2.5rem] opacity-15"
                    animate={{ scale: [1, 1.25, 1], opacity: [0.15, 0.3, 0.15] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  ></motion.div>
                  
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    animate={{ rotate: [0, 5, 0, -5, 0] }}
                    transition={{ 
                      rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                      hover: { duration: 0.6 }
                    }}
                    className="relative z-10"
                  >
                    <Image 
                      src="/cac.jpg" 
                      alt="Logo CAC" 
                      width={200} 
                      height={200}
                      className="object-contain"
                      priority
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
              
              {/* Contenu à droite avec typographie élégante */}
              <div className="flex-1 text-center md:text-left">
                <motion.div
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                  {/* Badge premium */}
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-50 to-red-100 px-5 py-2 rounded-full mb-6 border border-red-200 shadow-sm">
                    <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                    <span className="text-red-700 font-semibold text-sm tracking-wide">Commercial Alliance And Company</span>
                  </div>
                  
                  {/* Titre avec effet dégradé animé plus dynamique */}
                  <motion.h1 
                    className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-none"
                    whileHover={{ scale: 1.1, y: -5 }}
                    animate={{ 
                      textShadow: [
                        "0 0 0px rgba(220, 38, 38, 0)",
                        "0 0 20px rgba(220, 38, 38, 0.3)",
                        "0 0 0px rgba(220, 38, 38, 0)"
                      ]
                    }}
                    transition={{ 
                      textShadow: { duration: 3, repeat: Infinity },
                      hover: { duration: 0.2 }
                    }}
                  >
                    <motion.span 
                      className="bg-gradient-to-r from-red-600 via-red-500 to-red-700 bg-clip-text text-transparent drop-shadow-sm inline-block"
                      style={{ backgroundSize: '200% auto' }}
                      animate={{ 
                        backgroundPosition: ['0%', '100%', '0%']
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      CAC
                    </motion.span>
                  </motion.h1>
                  
                  {/* Sous-titre élégant */}
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-2xl font-light">
                    Complexe agro-industriel de <span className="font-semibold text-gray-900">production et transformation</span> alimentaire
                  </p>
                  
                  {/* Lignes décoratives animées plus dynamiques */}
                  <div className="mt-6 flex items-center gap-3 justify-center md:justify-start">
                    <motion.div 
                      className="h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full"
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ 
                        width: [0, 80, 80],
                        opacity: [0, 1, 1],
                        scaleY: [1, 1.5, 1]
                      }}
                      transition={{ 
                        width: { duration: 0.8, delay: 0.6 },
                        scaleY: { duration: 2, repeat: Infinity, delay: 1 }
                      }}
                    ></motion.div>
                    <motion.div 
                      className="h-1 bg-gradient-to-r from-red-400 to-red-300 rounded-full"
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ 
                        width: [0, 48, 48],
                        opacity: [0, 1, 1],
                        scaleY: [1, 1.5, 1]
                      }}
                      transition={{ 
                        width: { duration: 0.8, delay: 0.8 },
                        scaleY: { duration: 2, repeat: Infinity, delay: 1.3 }
                      }}
                    ></motion.div>
                    <motion.div 
                      className="h-1 bg-gradient-to-r from-red-300 to-red-200 rounded-full"
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ 
                        width: [0, 32, 32],
                        opacity: [0, 1, 1],
                        scaleY: [1, 1.5, 1]
                      }}
                      transition={{ 
                        width: { duration: 0.8, delay: 1 },
                        scaleY: { duration: 2, repeat: Infinity, delay: 1.6 }
                      }}
                    ></motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Bordure inférieure décorative */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
      </section>

      {/* Introduction - Design Ultra-Dynamique */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-50 via-red-50/30 to-gray-50">
        {/* Particules flottantes multiples */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-3 h-3 rounded-full"
              style={{
                left: `${(i * 7) % 100}%`,
                top: `${(i * 11) % 100}%`,
                background: `rgba(220, 38, 38, ${0.1 + (i % 3) * 0.1})`
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, (i % 2 === 0 ? 30 : -30), 0],
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 4 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2
              }}
            />
          ))}
        </div>

        {/* Halos animés multiples */}
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-red-400 to-red-600 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, 40, 0],
              y: [0, -30, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-orange-400 to-red-500 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.4, 1],
              x: [0, -30, 0],
              y: [0, 40, 0],
              rotate: [360, 180, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Lignes animées en arrière-plan */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"
              style={{ top: `${20 + i * 15}%`, width: '100%' }}
              animate={{
                x: ['-100%', '200%'],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5
              }}
            />
          ))}
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Colonne Gauche - Texte */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.h2 
                className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.span 
                  className="bg-gradient-to-r from-red-600 via-red-500 to-red-700 bg-clip-text text-transparent inline-block"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  style={{ backgroundSize: '200% auto' }}
                >
                  Complexe
                </motion.span>
                <br />
                <motion.span 
                  className="bg-gradient-to-r from-red-700 via-orange-500 to-red-600 bg-clip-text text-transparent inline-block"
                  animate={{
                    backgroundPosition: ['100% 50%', '0% 50%', '100% 50%']
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  style={{ backgroundSize: '200% auto' }}
                >
                  Agro-Industriel
                </motion.span>
                <br />
                d'Excellence
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="h-1 w-32 bg-gradient-to-r from-red-600 to-red-400 rounded-full mb-8"
              />
              
              <motion.p 
                className="text-lg text-gray-700 leading-relaxed mb-6 bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-red-100 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <span className="font-bold text-red-600">CAC S.A (Commercial Alliance And Company)</span> est une société anonyme du Groupe MAMA, créée par <span className="font-semibold text-gray-900">Monsieur MOHAMADOU DAHIROU</span>. Siège : <strong>Yaoundé</strong> • Capital : <strong>30M FCFA</strong>
              </motion.p>
              
              <motion.p 
                className="text-lg text-gray-700 leading-relaxed mb-6 bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-red-100 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <strong className="text-red-600 text-xl">Production :</strong> Huile, sucre, lait et confiserie. Importation de matières premières (sucre, soja). Transformation agro-alimentaire, projets agro-industriels, agriculture et élevage.
              </motion.p>
              
              <motion.p 
                className="text-lg text-gray-700 leading-relaxed mb-8 bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-2xl border-2 border-red-200 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <strong className="text-red-600 text-xl">Excellence</strong> & performances solides • Acteur majeur de l'agro-industrie camerounaise
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -12px rgba(220, 38, 38, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/contact" className="btn-primary inline-flex items-center gap-3">
                    Nous Contacter
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Colonne Droite - Carte Points Forts */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative"
              style={{ perspective: '1000px' }}
            >
              {/* Effet de halo animé */}
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-red-400 via-orange-500 to-red-600 rounded-3xl blur-2xl opacity-30"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              
              <motion.div
                className="relative bg-gradient-to-br from-red-500 via-red-600 to-red-700 rounded-3xl p-10 text-white shadow-2xl overflow-hidden"
                whileHover={{ 
                  scale: 1.03,
                  rotateX: 2,
                  rotateY: -2,
                  boxShadow: "0 30px 60px -12px rgba(220, 38, 38, 0.6)"
                }}
                transition={{ duration: 0.4 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Effet de brillance traversant */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-100%', '200%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut"
                  }}
                />

                {/* Particules dans la carte */}
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={`card-particle-${i}`}
                    className="absolute w-2 h-2 bg-white rounded-full"
                    style={{
                      left: `${(i * 13) % 100}%`,
                      top: `${(i * 17) % 100}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.2, 0.6, 0.2],
                      scale: [1, 1.3, 1]
                    }}
                    transition={{
                      duration: 3 + i * 0.2,
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                  />
                ))}
                
                <motion.h3 
                  className="text-4xl font-bold mb-10 text-center relative z-10"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <motion.span
                    animate={{
                      textShadow: [
                        '0 0 10px rgba(255,255,255,0.3)',
                        '0 0 20px rgba(255,255,255,0.5)',
                        '0 0 10px rgba(255,255,255,0.3)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Nos Points Forts
                  </motion.span>
                </motion.h3>
                
                <ul className="space-y-6 relative z-10">
                  {[
                    { text: 'Complexe agro-industriel moderne', delay: 0.4, icon: '🏭' },
                    { text: 'Production huile, sucre, lait, confiserie', delay: 0.5, icon: '🍬' },
                    { text: 'Importation de matières premières', delay: 0.6, icon: '📦' },
                    { text: 'Expertise en projets agro-industriels', delay: 0.7, icon: '⚙️' },
                    { text: 'Performances financières solides', delay: 0.8, icon: '📈' }
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-4 group cursor-pointer bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: item.delay }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        x: 10,
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        scale: 1.05
                      }}
                    >
                      <motion.div
                        className="text-3xl"
                        animate={{ 
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 1
                        }}
                      >
                        {item.icon}
                      </motion.div>
                      <motion.div
                        animate={{ 
                          rotate: [0, 360]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        className="mt-1 group-hover:scale-125 transition-transform duration-300"
                      >
                        <FaCheckCircle className="text-2xl drop-shadow-2xl" />
                      </motion.div>
                      <span className="text-lg font-medium group-hover:text-white transition-colors duration-300 leading-relaxed">{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
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
            <h2 className="section-title">Principales Activités</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="text-5xl text-red-600 mb-6 flex justify-center">
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
      <section className="py-20 bg-gradient-to-br from-red-500 to-red-700 text-white">
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
              Intéressé par nos services ?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Contactez notre équipe pour découvrir comment CAC peut répondre à vos besoins commerciaux.
            </p>
            <Link href="/contact" className="btn-primary">
              Demander un Devis
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
