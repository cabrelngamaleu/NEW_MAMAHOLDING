'use client'

import { motion } from 'framer-motion'
import { FaShoppingCart, FaCheckCircle, FaTruck, FaWarehouse } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

export default function CAC() {
  const services = [
    {
      icon: <FaShoppingCart />,
      title: 'Commerce de Gros',
      description: 'Large gamme de produits pour professionnels',
    },
    {
      icon: <FaTruck />,
      title: 'Livraison Rapide',
      description: 'Service de livraison efficace et ponctuel',
    },
    {
      icon: <FaWarehouse />,
      title: 'Stockage Sécurisé',
      description: 'Entrepôts modernes et sécurisés',
    },
    {
      icon: <FaCheckCircle />,
      title: 'Qualité Garantie',
      description: 'Produits de qualité supérieure certifiés',
    },
  ]

  const stats = [
    { number: '500+', label: 'Produits Disponibles' },
    { number: '200+', label: 'Clients Actifs' },
    { number: '24/7', label: 'Service Client' },
    { number: '100%', label: 'Satisfaction' },
  ]

  return (
    <div className="min-h-screen bg-white mt-20 md:mt-24">
      {/* Hero Section - Design Ultra-Dynamique Spectaculaire */}
      <section className="relative bg-gradient-to-br from-red-50 via-white to-red-50 py-24 overflow-hidden min-h-[600px]">
        {/* Barre supérieure qui s'étend */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-red-600 to-transparent shadow-lg"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        
        {/* Cercles colorés GÉANTS flottants animés - Couvrent TOUTE la section */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-gradient-to-br from-red-300 to-red-200 rounded-full blur-3xl opacity-40"
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, 50, 0],
              y: [0, -40, 0],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute -bottom-20 -left-20 w-[700px] h-[700px] bg-gradient-to-br from-red-200 to-red-100 rounded-full blur-3xl opacity-40"
            animate={{ 
              scale: [1, 1.4, 1],
              x: [0, -40, 0],
              y: [0, 50, 0],
              rotate: [0, -90, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-gradient-to-br from-pink-300 to-red-200 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"
            animate={{ 
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>
        
        {/* 20 Particules flottantes PARTOUT qui dansent */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-red-500 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-30, 30, -30],
                x: [-20, 20, -20],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        {/* Motif géométrique animé VISIBLE */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc2626' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '160px 160px'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Lignes ondulantes animées */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #dc2626 0px, #dc2626 2px, transparent 2px, transparent 12px)',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '100px 100px'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 hover:shadow-3xl transition-shadow duration-500 relative overflow-hidden">
              {/* Effet de brillance qui traverse */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-red-200/20 to-transparent"
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
              />
              
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
                {/* Logo interactif ultra-dynamique */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 200 }}
                  className="flex-shrink-0 relative"
                >
                  <div className="relative w-32 h-32 md:w-40 md:h-40">
                    {/* Cercle animé qui pulse autour */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl border-2 border-red-400 opacity-30"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    
                    {/* Cercle décoratif animé derrière */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-red-100 to-red-50 rounded-3xl"
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    
                    {/* Logo avec rotation 360° au survol et balancement */}
                    <motion.div
                      className="relative bg-white rounded-3xl shadow-lg flex items-center justify-center p-4 border border-gray-100 w-full h-full cursor-pointer"
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.1,
                      }}
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        y: {
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                        rotate: {
                          duration: 0.8,
                        },
                        scale: {
                          duration: 0.3,
                        },
                      }}
                      style={{
                        boxShadow: '0 10px 40px rgba(220, 38, 38, 0.3)',
                      }}
                    >
                      <Image 
                        src="/cac.jpg" 
                        alt="Logo CAC" 
                        width={140} 
                        height={140}
                        className="object-contain"
                        priority
                      />
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* Contenu à droite avec typographie animée */}
                <div className="flex-1 text-center md:text-left">
                  <motion.div
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {/* Badge avec point pulsant */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-red-50 to-red-100 px-5 py-2 rounded-full mb-6 border border-red-200 shadow-sm"
                    >
                      <motion.div
                        className="w-2 h-2 bg-red-600 rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [1, 0.5, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                      <span className="text-red-700 font-semibold text-sm tracking-wide">Commerce & Distribution</span>
                    </motion.div>
                    
                    {/* Titre avec gradient animé et zoom au survol */}
                    <motion.h1 
                      className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.span 
                        className="bg-gradient-to-r from-red-600 via-red-500 to-red-700 bg-clip-text text-transparent drop-shadow-sm inline-block"
                        animate={{
                          backgroundPosition: ['0%', '100%', '0%'],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                        }}
                        style={{
                          backgroundSize: '200% 200%',
                        }}
                      >
                        CAC
                      </motion.span>
                    </motion.h1>
                    
                    {/* Lignes décoratives qui se dessinent */}
                    <div className="flex gap-2 mb-4 justify-center md:justify-start">
                      <motion.div
                        className="h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: 80 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                      />
                      <motion.div
                        className="h-1 bg-gradient-to-r from-red-400 to-red-300 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: 48 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                      />
                      <motion.div
                        className="h-1 bg-gradient-to-r from-red-300 to-red-200 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: 32 }}
                        transition={{ duration: 0.8, delay: 1 }}
                      />
                    </div>
                    
                    {/* Description */}
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                      Commerce et distribution de produits de qualité pour professionnels
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Barre inférieure */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent" />
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-primary-dark mb-6">
                Votre Partenaire Commercial de Confiance
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <span className="font-semibold text-primary-dark">CAC (Commercial Alliance and Company)</span> est l'entité commerciale phare de MAMAHOLDING, spécialisée dans le commerce en gros de produits diversifiés. Fondée en <span className="font-semibold">2006</span>, CAC s'est imposée comme un acteur majeur de la distribution au Cameroun.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nous offrons à nos clients professionnels une gamme complète de produits : <strong>produits alimentaires de grande consommation, articles ménagers, cosmétiques, textiles, fournitures diverses</strong> et bien plus encore. Notre catalogue compte plus de 1000 références soigneusement sélectionnées.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Notre force réside dans notre capacité à comprendre et anticiper les besoins du marché camerounais. Nous travaillons avec des fournisseurs internationaux reconnus pour garantir la qualité, la disponibilité et la compétitivité de nos produits.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Avec plus de <strong>18 ans d'expérience</strong>, un réseau de distribution étendu couvrant tout le territoire national, et un service client dédié, CAC garantit à ses partenaires des solutions commerciales adaptées, des prix compétitifs et une livraison fiable.
              </p>
              <Link href="/contact" className="btn-primary">
                Nous Contacter
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-500 to-red-700 rounded-2xl p-12 text-white"
            >
              <h3 className="text-3xl font-bold mb-8 text-center">Nos Points Forts</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-2xl flex-shrink-0 mt-1" />
                  <span className="text-lg">Large gamme de produits</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-2xl flex-shrink-0 mt-1" />
                  <span className="text-lg">Prix compétitifs</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-2xl flex-shrink-0 mt-1" />
                  <span className="text-lg">Service client dédié</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-2xl flex-shrink-0 mt-1" />
                  <span className="text-lg">Livraison fiable</span>
                </li>
              </ul>
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
            <h2 className="section-title">Nos Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
