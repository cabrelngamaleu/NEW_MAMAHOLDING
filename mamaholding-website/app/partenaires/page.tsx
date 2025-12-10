'use client'

import { motion } from 'framer-motion'
import { FaHandshake, FaGlobe, FaTruck, FaIndustry, FaLeaf, FaAward, FaUsers, FaRocket } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

export default function Partenaires() {
  const partners = [
    {
      name: 'Société Camerounaise de Raffinage Maya & Cie',
      category: 'Fournisseur Principal',
      entity: 'MAMAHOLDING S.A',
      description: 'Partenaire stratégique majeur pour l\'approvisionnement en produits diversifiés',
      since: '2010',
      icon: '🏢',
      logo: '/src.png',
      website: 'https://www.scrmaya.com',
    },
    {
      name: 'AFISA',
      category: 'Produits Alimentaires',
      entity: 'ECOFOOD',
      description: 'Fournisseur de produits alimentaires de qualité pour notre réseau de distribution',
      since: '2012',
      icon: '🍫',
    },
    {
      name: 'Africa Food Manufacture',
      category: 'Fournitures Diverses',
      entity: 'CAC',
      description: 'Partenariat pour la fourniture de produits de grande consommation',
      since: '2011',
      icon: '📦',
      logo: '/afm.png',
      website: 'https://africafoodmanufacture.com/',
    },
    {
      name: 'AZUR',
      category: 'Distribution',
      entity: 'CAC',
      description: 'Partenaire pour la distribution de produits spécialisés',
      since: '2014',
      icon: '🚚',
      logo: '/azur.jpg',
    },
    {
      name: 'PAFIC',
      category: 'Produits Alimentaires',
      entity: 'ECOFOOD',
      description: 'Fournisseur de produits alimentaires et conserves',
      since: '2015',
      icon: '🥫',
      logo: '/Pafic.jpg',
    },
    {
      name: 'OLAM',
      category: 'Agro-industrie',
      entity: 'ECOFOOD',
      description: 'Leader mondial de l\'agro-industrie, partenaire pour produits agricoles',
      since: '2016',
      icon: '🌾',
      logo: '/OLAM.png',
      website: 'https://www.olamagri.com/locations/cameroon.html',
    },
    {
      name: 'MOI FOODS',
      category: 'Produits Alimentaires',
      entity: 'ECOFOOD',
      description: 'Fournisseur de produits alimentaires frais et transformés',
      since: '2017',
      icon: '🍱',
      logo: '/moi_foods.jpg',
      website: 'https://www.facebook.com/moifoodscameroun/',
    },
    {
      name: 'Producteurs Locaux',
      category: 'Agriculture Locale',
      entity: 'ECOFOOD',
      description: 'Partenariat avec plus de 80 producteurs locaux pour des produits frais',
      since: '2015',
      icon: '👨‍🌾',
    },
  ]

  const benefits = [
    {
      icon: <FaGlobe />,
      title: 'Réseau Étendu',
      description: 'Accédez à un vaste réseau de distribution à travers le Cameroun',
    },
    {
      icon: <FaTruck />,
      title: 'Logistique Efficace',
      description: 'Bénéficiez de notre infrastructure logistique moderne et performante',
    },
    {
      icon: <FaUsers />,
      title: 'Expertise Locale',
      description: 'Profitez de notre connaissance approfondie du marché camerounais',
    },
    {
      icon: <FaRocket />,
      title: 'Croissance Mutuelle',
      description: 'Développez votre activité avec un partenaire fiable et ambitieux',
    },
  ]

  const stats = [
    { number: '9', label: 'Fournisseurs Principaux' },
    { number: '20+', label: 'Ans d\'Expérience' },
    { number: '3', label: 'Entités Spécialisées' },
    { number: '80+', label: 'Producteurs Locaux' },
  ]

  const criteria = [
    {
      icon: <FaAward />,
      title: 'Qualité',
      description: 'Nous privilégions les partenaires qui partagent notre engagement envers la qualité',
    },
    {
      icon: <FaHandshake />,
      title: 'Fiabilité',
      description: 'La ponctualité et le respect des engagements sont essentiels',
    },
    {
      icon: <FaLeaf />,
      title: 'Durabilité',
      description: 'Nous valorisons les pratiques commerciales responsables et durables',
    },
    {
      icon: <FaIndustry />,
      title: 'Innovation',
      description: 'Nous recherchons des partenaires innovants et tournés vers l\'avenir',
    },
  ]

  return (
    <div className="min-h-screen bg-white mt-20 md:mt-24">
      {/* Hero Section - Design Ultra Interactif */}
      <section className="relative bg-gradient-to-br from-orange-900 via-amber-800 to-yellow-900 text-white py-32 overflow-hidden">
        {/* Fond animé avec particules flottantes */}
        <div className="absolute inset-0">
          {/* Cercles animés multiples */}
          <motion.div 
            className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl opacity-30"
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full blur-3xl opacity-30"
            animate={{ 
              scale: [1, 1.4, 1],
              x: [0, -40, 0],
              y: [0, 40, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full blur-3xl opacity-20"
            animate={{ 
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        </div>
        
        {/* Particules flottantes multiples */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        {/* Grille futuriste animée */}
        <motion.div 
          className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.15) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,.15) 2px, transparent 2px)',
            backgroundSize: '60px 60px'
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
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
              whileHover={{ scale: 1.05 }}
              className="inline-block bg-white/20 backdrop-blur-md px-8 py-3 rounded-full mb-8 border-2 border-white/40 shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FaHandshake className="text-yellow-300 text-xl" />
                </motion.div>
                <span className="text-white font-bold text-lg">Partenariats Stratégiques</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex justify-center mb-6"
              animate={{ 
                rotate: [0, -10, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <FaHandshake className="text-7xl" />
            </motion.div>
            <motion.h1 
              className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
              animate={{ 
                textShadow: [
                  '0 0 20px rgba(255,255,255,0.5)',
                  '0 0 40px rgba(255,255,255,0.8)',
                  '0 0 20px rgba(255,255,255,0.5)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Nos Partenaires
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl opacity-95 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.95 }}
              transition={{ delay: 0.4 }}
            >
              Ensemble, nous construisons un avenir commercial prospère
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Introduction - Design moderne */}
      <section className="py-16 bg-primary-light">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block bg-green-100 px-6 py-2 rounded-full mb-4">
                <span className="text-primary-green font-semibold">Collaboration & Excellence</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
                Partenariats Stratégiques
              </h2>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary-green">
              <div className="flex flex-col h-full">
                <FaHandshake className="text-5xl text-primary-green mb-6" />
                <p className="text-primary-dark text-lg leading-relaxed" style={{ color: '#1F2937' }}>
                  Depuis plus de 20 ans, MAMAHOLDING S.A collabore avec des partenaires de renom, 
                  tant internationaux que locaux. Nos partenariats sont fondés sur la confiance mutuelle, 
                  le respect des engagements et la recherche constante de l'excellence. Ensemble, 
                  nous créons de la valeur pour nos clients et contribuons au développement économique du Cameroun.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partenaires Principaux */}
      <section className="py-20 bg-primary-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Nos Partenaires Principaux</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-green to-primary-red mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => {
              const CardContent = (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center cursor-pointer border-2 border-transparent hover:border-orange-300"
                >
                  {/* Fond dégradé animé au hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-orange-50 to-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  />
                  
                  <div className="relative z-10">
                    {/* Logo ou Icône */}
                    {partner.logo ? (
                      <motion.div
                        className={`${partner.name === 'OLAM' ? 'w-40 h-40' : 'w-32 h-32'} mx-auto mb-4 relative flex items-center justify-center`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {partner.logo.endsWith('.webp') ? (
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="max-w-full max-h-full object-contain"
                          />
                        ) : (
                          <Image
                            src={partner.logo}
                            alt={partner.name}
                            fill
                            className={`object-contain ${partner.name === 'OLAM' ? 'brightness-0 saturate-100' : ''}`}
                            sizes="128px"
                            unoptimized
                            style={partner.name === 'OLAM' ? { filter: 'invert(48%) sepia(79%) saturate(500%) hue-rotate(86deg) brightness(95%) contrast(119%)' } : undefined}
                          />
                        )}
                      </motion.div>
                    ) : (
                      <motion.div 
                        className="text-7xl mb-4"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {partner.icon}
                      </motion.div>
                    )}
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                    <motion.p 
                      className="text-sm font-bold mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent inline-block"
                      whileHover={{ scale: 1.05 }}
                    >
                      {partner.category}
                    </motion.p>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">{partner.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t-2 border-gray-100">
                      <span className="text-xs text-gray-500 font-semibold flex items-center gap-1">
                        <span className="text-orange-600">📅</span> Depuis {partner.since}
                      </span>
                      <span className="text-xs font-bold bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-1 rounded-full">{partner.entity}</span>
                    </div>
                  </div>
                </motion.div>
              )

              // Si le partenaire a un site web, on l'enveloppe dans un lien
              return partner.website ? (
                <a
                  key={index}
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {CardContent}
                </a>
              ) : (
                CardContent
              )
            })}
          </div>
        </div>
      </section>

      {/* Avantages Partenariat */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Pourquoi Devenir Partenaire ?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-red to-primary-green mx-auto mb-6"></div>
            <p className="section-subtitle">
              Les avantages d'un partenariat avec MAMAHOLDING S.A
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center cursor-pointer border-2 border-transparent hover:border-orange-300"
              >
                <motion.div 
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white text-4xl shadow-xl"
                  whileHover={{ scale: 1.15, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-20 bg-gradient-to-br from-primary-green to-green-700 text-white">
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

      {/* Environnement Concurrentiel */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-orange-100 px-6 py-2 rounded-full mb-4">
              <span className="text-orange-600 font-semibold">Marché Compétitif</span>
            </div>
            <h2 className="section-title">Environnement Concurrentiel</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-6"></div>
            <p className="section-subtitle">
              MAMAHOLDING S.A évolue dans un environnement concurrentiel dynamique
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8"
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
                Comme principaux concurrents, on peut citer les sociétés telles que :
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {['HENRI ET FRERES', 'CASH-IMPACT', 'SOACAM', 'NEIMA SHOP', 'GREEN VALLEY'].map((competitor, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg p-4 shadow-md border-l-4 border-orange-500 hover:shadow-lg transition-shadow"
                  >
                    <p className="font-semibold text-primary-dark text-center">{competitor}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 bg-gradient-to-r from-primary-green/10 to-green-50 rounded-xl p-6 border-l-4 border-primary-green">
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-primary-dark">Notre avantage compétitif :</strong> MAMAHOLDING S.A se distingue par son approche intégrée, 
                  sa diversification stratégique et son engagement envers l'excellence opérationnelle, 
                  nous permettant de maintenir une position de leader sur le marché camerounais.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Critères de Sélection */}
      <section className="py-20 bg-primary-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Nos Critères de Sélection</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-red to-primary-green mx-auto mb-6"></div>
            <p className="section-subtitle">
              Ce que nous recherchons chez nos partenaires
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {criteria.map((criterion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center cursor-pointer border-2 border-transparent hover:border-red-300"
              >
                <motion.div 
                  className="text-6xl mb-6 flex justify-center bg-gradient-to-br from-red-500 to-orange-600 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {criterion.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{criterion.title}</h3>
                <p className="text-gray-600 leading-relaxed">{criterion.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Devenir Partenaire */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card bg-gradient-to-r from-primary-light to-white text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-primary-dark mb-6">
              Intéressé par un Partenariat ?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Contactez-nous pour discuter des opportunités de collaboration et découvrir 
              comment nous pouvons travailler ensemble pour créer de la valeur.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Nous Contacter
              </Link>
              <Link href="/entites/cac" className="btn-secondary">
                Découvrir Nos Entités
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
