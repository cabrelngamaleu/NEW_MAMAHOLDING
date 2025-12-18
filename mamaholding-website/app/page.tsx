'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import AnimatedRings from '@/components/AnimatedRings'
import { FaPlay, FaStar, FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'
import { useState } from 'react'
import VideoModal from '@/components/VideoModal'
import Image from 'next/image'
import { newsData } from '@/data/news'

export default function Home() {
  const values = [
    {
      number: '1',
      title: 'Engagement',
      description: 'Nous nous engageons pleinement envers nos clients, partenaires et employés. Notre détermination à tenir nos promesses est au cœur de notre réussite.',
      color: 'bg-primary-red',
    },
    {
      number: '2',
      title: 'Esprit d\'équipe',
      description: 'La collaboration et le travail d\'équipe sont essentiels à notre succès. Nous valorisons chaque membre de notre organisation et cultivons un environnement de synergie.',
      color: 'bg-primary-green',
    },
    {
      number: '3',
      title: 'Intégrité',
      description: 'Nous agissons avec probité et honnêteté dans toutes nos actions. L\'intégrité est le fondement de la confiance que nos partenaires nous accordent.',
      color: 'bg-gray-700',
    },
    {
      number: '4',
      title: 'Respect de l\'environnement',
      description: 'Nous nous engageons dans des pratiques durables et responsables. La protection de notre environnement guide nos décisions pour un avenir meilleur.',
      color: 'bg-primary-red',
    },
  ]

  const entities = [
    {
      name: 'CAC',
      description: 'Commerce et distribution de produits de qualité pour répondre aux besoins du marché.',
      logo: '/cac.jpg',
      color: 'bg-[#DC143C]',
      href: '/entites/cac',
    },
    {
      name: 'TRINCO',
      description: 'Solutions industrielles et commerciales innovantes pour une croissance durable.',
      logo: '/trinco.jpg',
      color: 'bg-[#475569]',
      href: '/entites/trinco',
    },
    {
      name: 'ECOFOOD',
      description: 'Produits alimentaires de qualité supérieure pour une alimentation saine.',
      logo: '/ECOFOOD.jpg',
      color: 'bg-[#22C55E]',
      href: '/entites/ecofood',
    },
  ]

  // Utiliser les 4 premières actualités d'espace-presse
  const news = newsData.slice(0, 4)

  return (
    <>
      <Hero />

      {/* Section "Laissez-moi vous présenter" - Notre Entreprise */}
      <section id="about" className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          {/* Badge de présentation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.span 
              className="inline-block bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-primary-red text-gray-700 px-6 py-3 text-sm font-semibold uppercase tracking-wider mb-8 rounded-r-lg shadow-md"
              whileHover={{ scale: 1.05, x: 5 }}
            >
              Laissez-moi vous présenter
            </motion.span>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Notre entreprise
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Partie Gauche - Texte et Citation */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.p 
                className="text-lg text-gray-700 leading-relaxed italic text-primary-red font-medium bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border-l-4 border-primary-red"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 5 }}
              >
                "Définir ensemble un objectif : c'est un meilleur départ ; s'accorder sur la stratégie : c'est progresser ; courir à ce rêve : c'est le succès."
              </motion.p>
              <motion.p 
                className="text-base text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                Tel est le résumé de l'identité de notre holding MAMAHOLDING et de ses différentes entités, avec pour vision de renforcer et de valoriser son capital humain diversifié et dynamique.
              </motion.p>
              <motion.p 
                className="text-base text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                Fort de plus de 20 ans d'expérience, nous nous efforçons de répondre aux besoins du marché en apportant des produits et services de consommation de qualité.
              </motion.p>
              <motion.div 
                className="flex items-center gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.button 
                  className="bg-primary-red text-white p-4 rounded-full hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPlay className="text-xl" />
                </motion.button>
                <span className="text-gray-700 font-medium">Regarder la vidéo</span>
              </motion.div>
            </motion.div>

            {/* Partie Droite - Badge 20 ans */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -10 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12 shadow-2xl relative overflow-hidden">
                {/* Motif de fond */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-red opacity-5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-green opacity-5 rounded-full blur-3xl"></div>
                
                {/* Contenu */}
                <div className="relative text-center">
                  <div 
                    className="inline-block bg-white border-l-8 border-primary-red px-8 py-6 shadow-lg"
                  >
                    <div className="text-6xl font-bold text-primary-red mb-2">
                      2004
                    </div>
                    <div className="text-xl font-semibold text-gray-700">Depuis</div>
                  </div>
                  <p className="mt-8 text-lg font-semibold text-gray-800">
                    Entreprise citoyenne, impliquée dans le quotidien depuis plus de 20 ans
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Leader de l'industrie avec Note Client */}
      <section className="py-24 bg-gradient-to-br from-red-900 via-green-900 to-gray-900 text-white relative overflow-hidden">
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Motifs de fond */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Partie Gauche - Texte */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Leader de l'industrie du commerce en gros
              </motion.h2>
              <motion.p 
                className="text-lg text-white/90 leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                Depuis plus de 20 ans, notre organisation s'efforce de répondre aux besoins du marché en apportant des produits de consommation de qualité.
              </motion.p>
              <motion.div 
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <button 
                  className="bg-white text-primary-red p-5 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl hover:scale-110 hover:rotate-6"
                >
                  <FaPlay className="text-2xl" />
                </button>
                <span className="text-white font-semibold text-lg">Voir la vidéo promotionnelle de l'entreprise</span>
              </motion.div>
            </motion.div>

            {/* Partie Droite - Note Client */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-end"
            >
              <div 
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-12 text-center relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="flex justify-center mb-4">
                    <FaStar className="text-yellow-400 text-6xl drop-shadow-lg" />
                  </div>
                  <div className="text-7xl font-bold text-white mb-2">
                    9.7
                  </div>
                  <div className="text-2xl font-semibold text-white/90 mb-2">Customer Rating</div>
                  <p className="text-white/70">Avis complets disponibles</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Mot du PDG */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Mot du PDG
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Partie Gauche - Citation (3 colonnes) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-3 space-y-6"
            >
              <motion.p 
                className="text-lg text-primary-red font-medium italic leading-relaxed bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border-l-4 border-primary-red"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 5 }}
              >
                « Définir ensemble un objectif : c'est un meilleur départ ; s'accorder sur la stratégie : c'est progresser ; courir à ce rêve : c'est le succès »
              </motion.p>
              <motion.p 
                className="text-base text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                Cette phrase résume ma petite expérience du monde et ma vision. Les années qui viennent de s'écouler depuis le début de cette aventure ont été riches en apprentissage.
              </motion.p>
              <motion.p 
                className="text-base text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                L'année dernière a été le témoin d'une nouvelle dynamique et d'une intense transformation au sein de notre entreprise. L'identité du groupe se trouve dévoilée et le sentiment d'appartenance de chacun des associés au sein des différentes entités de notre Holding MAMAHOLDING se réaffirme.
              </motion.p>
              <motion.p 
                className="text-base text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                Cette dynamique n'est autre que la continuité d'une vision de renforcer et de valoriser notre Capital Humain qui est culturellement très diversifié et dynamique.
              </motion.p>
              <motion.div 
                className="pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
              >
                <p className="text-xl font-bold text-gray-900">MOHAMADOU DAHIROU</p>
                <p className="text-gray-600">L'Administrateur Directeur Général</p>
              </motion.div>
            </motion.div>

            {/* Partie Droite - Design élégant (2 colonnes) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -10 }}
              className="lg:col-span-2"
            >
              <div className="relative h-full">
                {/* Card élégante avec icône */}
                <motion.div className="h-full bg-gradient-to-br from-primary-red via-red-600 to-primary-green rounded-3xl overflow-hidden shadow-2xl p-8 md:p-12 flex flex-col justify-center relative">
                  {/* Effet de brillance */}
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

                  <div className="relative z-10">
                    {/* Icône leadership */}
                    <div className="mb-8">
                      <motion.div 
                        className="w-24 h-24 md:w-32 md:h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto border-4 border-white/30"
                        animate={{
                          rotate: [0, 360],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        <svg className="w-12 h-12 md:w-16 md:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </motion.div>
                    </div>
                    
                    {/* Texte */}
                    <div className="text-center text-white space-y-4">
                      <h3 className="text-2xl md:text-3xl font-bold">Leadership Visionnaire</h3>
                      <p className="text-lg md:text-xl opacity-90 leading-relaxed">
                        Une direction stratégique forte et une vision claire pour l'avenir de MAMAHOLDING
                      </p>
                      <div className="pt-6 flex justify-center gap-4 flex-wrap">
                        <motion.div 
                          className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30"
                          whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                        >
                          <p className="text-sm font-semibold">+20 ans d'expérience</p>
                        </motion.div>
                        <motion.div 
                          className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30"
                          whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                        >
                          <p className="text-sm font-semibold">Excellence & Innovation</p>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Accents décoratifs */}
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-green rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary-red rounded-full opacity-20 blur-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Nos Valeurs - Style Beetle Heritage */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Anneaux flottants */}
        <AnimatedRings 
          className="absolute inset-0 z-0" 
          size="large" 
          variant="floating" 
          intensity="subtle"
        />
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos valeurs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nos valeurs fondamentales guident chacune de nos actions et définissent notre culture d'entreprise.
            </p>
            <p className="text-base text-gray-600 max-w-2xl mx-auto mt-4">
              Engagement, Esprit d'équipe, Intégrité et Respect de l'environnement : ces 4 piliers orientent toutes nos décisions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, scale: 1.05 }}
                className="relative cursor-pointer"
              >
                <motion.div 
                  className={`${value.color} rounded-2xl p-8 text-white h-full min-h-[320px] flex flex-col relative overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-300`}
                >
                  {/* Effet de brillance */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.8 }}
                  />

                  {/* Motif circulaire de fond animé */}
                  <motion.div 
                    className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-10 -mr-16 -mt-16"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <motion.div 
                    className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full opacity-10 -ml-12 -mb-12"
                    animate={{
                      scale: [1, 1.3, 1],
                      rotate: [360, 180, 0]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Contenu */}
                  <div className="relative z-10">
                    {/* Numéro */}
                    <motion.div 
                      className="text-8xl font-bold opacity-90 mb-4"
                      animate={{
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                    >
                      {value.number}
                    </motion.div>
                    
                    {/* Titre */}
                    <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                    
                    {/* Description */}
                    <p className="text-white/90 leading-relaxed text-sm flex-grow">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Nos Entités - Style Beetle Heritage */}
      <section id="nos-entites" className="py-20 bg-white relative overflow-hidden">
        {/* Anneaux de fond */}
        <AnimatedRings 
          className="absolute inset-0 z-0" 
          size="xl" 
          variant="section" 
          intensity="subtle"
        />
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos Entités
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nous avons une entité pour chacune de nos activités : Commerce, Solutions industrielles et Produits alimentaires.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {entities.map((entity, index) => (
              <Link href={entity.href} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 80, rotateX: -20 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2, type: "spring" }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -25,
                    rotateY: 5,
                    scale: 1.05,
                    transition: { duration: 0.4 }
                  }}
                  className="relative group cursor-pointer"
                  style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
                >
                  {/* Carte principale avec effet 3D */}
                  <div className="relative bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-all duration-500">
                    
                    {/* Dégradé en arrière-plan */}
                    <div
                      className={`absolute inset-0 ${entity.color} opacity-5`}
                      style={{ filter: "blur(60px)" }}
                    />

                    {/* Section logo avec effet spectaculaire */}
                    <div className="relative h-72 flex items-center justify-center overflow-hidden">
                      {/* Cercles concentriques animés */}
                      <motion.div
                        className="absolute w-full h-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.1, 0.2, 0.1]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full ${entity.color} opacity-20 blur-2xl`} />
                      </motion.div>
                      
                      {/* Logo avec effet de lévitation et rotation 3D */}
                      <motion.div
                        className="relative z-10"
                        animate={{
                          y: [0, -15, 0],
                          rotateY: [0, 360],
                        }}
                        transition={{
                          y: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          },
                          rotateY: {
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                          }
                        }}
                        whileHover={{
                          scale: 1.15,
                          rotateY: 0,
                          transition: { duration: 0.3 }
                        }}
                      >
                        {/* Conteneur du logo avec effet de lumière */}
                        <div className="relative bg-white rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.15)] group-hover:shadow-[0_30px_70px_rgba(0,0,0,0.25)] transition-all duration-500">
                          {/* Halo lumineux autour du logo */}
                          <motion.div
                            className={`absolute inset-0 ${entity.color} rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}
                            animate={{
                              scale: [1, 1.1, 1]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          
                          <div className="relative w-40 h-40">
                            <Image
                              src={entity.logo}
                              alt={`${entity.name} logo`}
                              fill
                              className="object-contain"
                            />
                          </div>

                          {/* Rayon de lumière traversant */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-50 rounded-3xl"
                            animate={{
                              x: ['-200%', '200%']
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              repeatDelay: 1,
                              ease: "easeInOut"
                            }}
                          />
                        </div>
                      </motion.div>
                    </div>

                    {/* Badge avec nom de l'entité */}
                    <motion.div 
                      className={`${entity.color} text-white py-4 relative overflow-hidden`}
                      whileHover={{ scaleX: 1.02 }}
                    >
                      {/* Effet de brillance balayant */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{
                          x: ['-100%', '200%']
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                          repeatDelay: 2
                        }}
                      />
                      <h3 className="text-3xl font-bold text-center relative z-10 tracking-wide drop-shadow-lg">
                        {entity.name}
                      </h3>
                    </motion.div>

                    {/* Description avec effet de reveal */}
                    <div className="p-8 relative">
                      <motion.p 
                        className="text-gray-700 leading-relaxed text-center mb-6 font-medium"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {entity.description}
                      </motion.p>

                      {/* Bouton CTA animé avec meilleure visibilité */}
                      <motion.div
                        className="flex items-center justify-center gap-3 font-extrabold text-lg py-4 px-8 rounded-full mx-auto w-fit relative overflow-hidden bg-white shadow-2xl border-2"
                        style={{ 
                          color: entity.color.replace('bg-', ''),
                          borderColor: entity.color.replace('bg-', '')
                        }}
                        whileHover={{ scale: 1.08, y: -2 }}
                        whileTap={{ scale: 0.96 }}
                      >
                        {/* Effet de pulse coloré */}
                        <motion.div
                          className="absolute inset-0 rounded-full opacity-20"
                          style={{ background: entity.color.replace('bg-', '') }}
                          animate={{
                            scale: [1, 1.3],
                            opacity: [0.2, 0]
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeOut"
                          }}
                        />
                        
                        <span className="relative z-10 drop-shadow-sm">Découvrir</span>
                        <motion.div
                          className="relative z-10"
                          animate={{
                            x: [0, 5, 0]
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <FaArrowRight className="drop-shadow-sm" />
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Effet de bordure lumineuse au hover */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `linear-gradient(45deg, transparent 30%, ${entity.color.replace('bg-', '')}40, transparent 70%)`,
                        backgroundSize: "200% 200%"
                      }}
                      animate={{
                        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section Actualités */}
      <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-block mb-4"
              animate={{
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="bg-gradient-to-r from-red-50 to-orange-50 text-primary-red px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider border-2 border-red-200">
                Actualités
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-primary-red to-gray-900">
              Actualité MAMAHOLDING
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {news.map((item, index) => (
              <Link href="/espace-presse" key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 60, rotateX: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.15, type: "spring" }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -20,
                    scale: 1.05,
                    rotateY: 3,
                    transition: { duration: 0.3 }
                  }}
                  className="relative group cursor-pointer h-full"
                  style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
                >
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                    
                    {/* Badge pulsant */}
                    <motion.div
                      className="absolute top-3 right-3 w-3 h-3 bg-primary-red rounded-full z-20 shadow-lg"
                      animate={{
                        scale: [1, 1.6, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    />

                    {/* Dégradé animé en arrière-plan */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.5 }}
                    />

                    {/* Cercle décoratif animé */}
                    <motion.div
                      className="absolute -top-10 -right-10 w-32 h-32 bg-primary-red rounded-full opacity-10 blur-2xl"
                      animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, 180, 360]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />

                    <div className="p-6 relative z-10 flex-1 flex flex-col">
                      {/* Numéro décoratif */}
                      <motion.div 
                        className="absolute top-2 left-2 text-6xl font-bold text-red-100 opacity-50"
                        animate={{
                          scale: [1, 1.1, 1]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.5
                        }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </motion.div>

                      <motion.h3 
                        className="text-xl font-bold text-gray-900 mb-4 leading-tight relative z-10 group-hover:text-primary-red transition-colors duration-300"
                        initial={{ opacity: 0.9 }}
                        whileHover={{ opacity: 1, x: 5 }}
                      >
                        {item.title}
                      </motion.h3>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1 relative z-10">
                        {item.excerpt}
                      </p>

                      {/* Bouton CTA */}
                      <motion.div
                        className="flex items-center gap-2 text-primary-red font-bold text-sm relative z-10"
                        whileHover={{ x: 5 }}
                      >
                        <span>Plus de détails</span>
                        <motion.div
                          animate={{
                            x: [0, 5, 0]
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <FaArrowRight />
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Bordure lumineuse au hover */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: "linear-gradient(45deg, transparent 30%, rgba(220, 38, 38, 0.2), transparent 70%)",
                        backgroundSize: "200% 200%"
                      }}
                      animate={{
                        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />

                    {/* Ligne décorative en bas */}
                    <motion.div
                      className="h-1 bg-gradient-to-r from-transparent via-primary-red to-transparent"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section Newsletter / Contact - Design Ultra-Créatif et Interactif */}
      <section className="py-0 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Newsletter - Gauche (Rouge) */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-red via-red-600 to-red-700 text-white py-24 px-8 md:px-12 relative overflow-hidden"
          >
            {/* Cercles décoratifs */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-yellow-300 rounded-full opacity-10 blur-3xl"></div>

            <div className="max-w-lg mx-auto relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.h3 
                  className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(255,255,255,0.5)",
                      "0 0 40px rgba(255,255,255,0.3)",
                      "0 0 20px rgba(255,255,255,0.5)"
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Newsletter
                </motion.h3>
                <p className="text-white/90 mb-10 text-lg leading-relaxed">
                  Recevez l'actualité de notre organisation par email
                </p>
              </motion.div>

              <motion.form 
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileFocus={{ scale: 1.02 }}
                >
                  <motion.input
                    type="email"
                    placeholder="Votre adresse email"
                    className="w-full px-8 py-5 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-white/50 shadow-2xl backdrop-blur-sm bg-white/95 font-medium transition-all duration-300"
                    whileFocus={{
                      boxShadow: "0 0 0 4px rgba(255,255,255,0.5), 0 20px 40px rgba(0,0,0,0.2)"
                    }}
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full bg-white text-primary-red px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-2xl relative overflow-hidden group"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Effet de brillance au hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-red-100 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10">S'abonner</span>
                </motion.button>
              </motion.form>

              <motion.p 
                className="text-white/70 text-sm mt-6 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
              >
                En vous abonnant, vous acceptez de recevoir nos communications.
              </motion.p>
            </div>
          </motion.div>

          {/* Contact - Droite (Vert) */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-green via-green-600 to-emerald-600 text-white py-24 px-8 md:px-12 relative overflow-hidden"
          >
            {/* Cercles décoratifs */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-teal-300 rounded-full opacity-10 blur-3xl"></div>

            <div className="max-w-lg mx-auto relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.h3 
                  className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(255,255,255,0.5)",
                      "0 0 40px rgba(255,255,255,0.3)",
                      "0 0 20px rgba(255,255,255,0.5)"
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Contactez-nous
                </motion.h3>
                <p className="text-white/90 mb-10 text-lg leading-relaxed">
                  Prêt à collaborer avec nous ? Prenez contact dès aujourd'hui.
                </p>
              </motion.div>

              <div className="space-y-8">
                {[
                  { icon: '📞', label: 'Téléphone', value: '+237 690 201 978 / +237 690 202 555' },
                  { icon: '📧', label: 'Email', value: 'mapprologistique@mamaholding.net' },
                  { icon: '📍', label: 'Adresse', value: 'Yaoundé - Etoudi, Cameroun' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="relative group"
                  >
                    {/* Fond animé au hover */}
                    <motion.div
                      className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm"
                      transition={{ duration: 0.3 }}
                    />
                    
                    <div className="relative bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-lg group-hover:border-white/40 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <motion.div
                          className="text-4xl"
                          animate={{
                            rotate: [0, 10, -10, 0],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.5
                          }}
                        >
                          {item.icon}
                        </motion.div>
                        <div className="flex-1">
                          <p className="text-white/70 mb-2 text-sm font-medium">{item.label}</p>
                          <p className="font-bold text-lg break-words">{item.value}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Link href="/contact">
                    <motion.button
                      className="w-full bg-white text-primary-green px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-2xl relative overflow-hidden group"
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Effet de brillance au hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-green-100 to-transparent"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                      <span className="relative z-10">Formulaire de contact</span>
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </>
  )
}
