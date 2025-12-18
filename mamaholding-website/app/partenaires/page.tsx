'use client'

import { motion } from 'framer-motion'
import { FaHandshake, FaGlobe, FaTruck, FaIndustry, FaLeaf, FaAward, FaUsers, FaRocket, FaBuilding, FaBox } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

export default function Partenaires() {
  const partners = [
    {
      name: 'SCR MAYA',
      category: 'Fournisseur Principal',
      entity: 'MAMAHOLDING',
      description: 'Partenaire stratégique majeur pour l\'approvisionnement en produits diversifiés',
      since: '2010',
      logo: '/src.png',
      hasLogo: true,
    },
    {
      name: 'AFISA',
      category: 'Produits Alimentaires',
      entity: 'ECOFOOD',
      description: 'Fournisseur de produits alimentaires de qualité pour notre réseau de distribution',
      since: '2012',
      icon: <FaBox />,
      hasLogo: false,
    },
    {
      name: 'AFM',
      category: 'Fournitures Diverses',
      entity: 'CAC',
      description: 'Partenariat pour la fourniture de produits de grande consommation',
      since: '2011',
      logo: '/afm.png',
      hasLogo: true,
    },
    {
      name: 'AFI',
      category: 'Solutions Industrielles',
      entity: 'TRINCO',
      description: 'Fournisseur d\'équipements et solutions industrielles',
      since: '2013',
      icon: <FaIndustry />,
      hasLogo: false,
    },
    {
      name: 'AZUR',
      category: 'Distribution',
      entity: 'CAC',
      description: 'Partenaire pour la distribution de produits spécialisés',
      since: '2014',
      logo: '/azur.jpg',
      hasLogo: true,
    },
    {
      name: 'PAFIC',
      category: 'Produits Alimentaires',
      entity: 'ECOFOOD',
      description: 'Fournisseur de produits alimentaires et conserves',
      since: '2015',
      logo: '/Pafic.jpg',
      hasLogo: true,
    },
    {
      name: 'OLAM',
      category: 'Agro-industrie',
      entity: 'ECOFOOD',
      description: 'Leader mondial de l\'agro-industrie, partenaire pour produits agricoles',
      since: '2016',
      logo: '/OLAM.png',
      hasLogo: true,
    },
    {
      name: 'MOI FOOD',
      category: 'Produits Alimentaires',
      entity: 'ECOFOOD',
      description: 'Fournisseur de produits alimentaires frais et transformés',
      since: '2017',
      logo: '/moi_foods.jpg',
      hasLogo: true,
    },
    {
      name: 'Producteurs Locaux',
      category: 'Agriculture Locale',
      entity: 'ECOFOOD',
      description: 'Partenariat avec plus de 80 producteurs locaux pour des produits frais',
      since: '2015',
      icon: <FaUsers />,
      hasLogo: false,
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
    <div className="min-h-screen bg-white">
      {/* Hero Section - Design Ultra-Dynamique */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-900 text-white py-32 overflow-hidden">
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
        {/* Éléments décoratifs futuristes */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        {/* Grille futuriste en arrière-plan */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
        
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
              <span className="text-white font-semibold">Partenariats Stratégiques</span>
            </motion.div>
            
            <div className="flex justify-center mb-6">
              <FaHandshake className="text-6xl" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Nos Partenaires
            </h1>
            <p className="text-xl md:text-2xl opacity-95 leading-relaxed">
              Ensemble, nous construisons un avenir commercial prospère
            </p>
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
                  Depuis plus de 20 ans, MAMAHOLDING collabore avec des partenaires de renom, 
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
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="card text-center group hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Effet de brillance au hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-green-100/30 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.8 }}
                />

                {/* Logo ou icône */}
                <div className="mb-6 relative z-10">
                  {partner.hasLogo && partner.logo ? (
                    <motion.div
                      className="mx-auto w-32 h-32 relative bg-white rounded-2xl shadow-lg p-4 group-hover:shadow-2xl transition-shadow"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={partner.logo}
                        alt={`Logo ${partner.name}`}
                        fill
                        className={`object-contain p-2 ${partner.name === 'OLAM' ? 'brightness-0 saturate-100' : ''}`}
                        style={partner.name === 'OLAM' ? { filter: 'invert(25%) sepia(95%) saturate(1500%) hue-rotate(85deg) brightness(95%)' } : undefined}
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      className="text-6xl text-primary-green mx-auto w-32 h-32 flex items-center justify-center bg-green-50 rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {partner.icon}
                    </motion.div>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-primary-dark mb-2 relative z-10 group-hover:text-primary-green transition-colors">{partner.name}</h3>
                <p className="text-sm font-semibold text-primary-green mb-4 relative z-10">{partner.category}</p>
                <p className="text-gray-600 mb-4 leading-relaxed relative z-10">{partner.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 relative z-10">
                  <span className="text-sm text-gray-500">Depuis {partner.since}</span>
                  <span className="text-sm font-semibold text-primary-red">{partner.entity}</span>
                </div>
              </motion.div>
            ))}
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
              Les avantages d'un partenariat avec MAMAHOLDING
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="text-5xl text-primary-green mb-6 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
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
              MAMAHOLDING évolue dans un environnement concurrentiel dynamique
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
                  <strong className="text-primary-dark">Notre avantage compétitif :</strong> MAMAHOLDING se distingue par son approche intégrée, 
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
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="text-5xl text-primary-red mb-6 flex justify-center">
                  {criterion.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-4">{criterion.title}</h3>
                <p className="text-gray-600">{criterion.description}</p>
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
