'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import AnimatedRings from '@/components/AnimatedRings'
import { FaPlay, FaStar, FaShoppingCart, FaIndustry, FaLeaf, FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'
import { useState } from 'react'
import VideoModal from '@/components/VideoModal'

export default function Home() {
  const values = [
    {
      number: '1',
      title: 'Discipline',
      description: 'C\'est la seule voie à laquelle nous croyons. Respect des horaires, des procédures et de l\'engagement professionnel.',
      color: 'bg-primary-red',
    },
    {
      number: '2',
      title: 'Intégrité',
      description: 'La manière dont nous fonctionnons est aussi importante que le résultat. Honnêteté et probité morale.',
      color: 'bg-primary-green',
    },
    {
      number: '3',
      title: 'Passion',
      description: 'Nous aimons ce que nous faisons. Protection du patrimoine et défense de l\'image de marque du groupe.',
      color: 'bg-gray-700',
    },
    {
      number: '4',
      title: 'Rigueur',
      description: 'C\'est l\'exigence morale du travail bien fait. Respect des engagements et amélioration permanente.',
      color: 'bg-primary-red',
    },
  ]

  const entities = [
    {
      name: 'CAC',
      description: 'Commerce et distribution de produits de qualité pour répondre aux besoins du marché.',
      icon: <FaShoppingCart />,
      color: 'bg-primary-red',
      href: '/entites/cac',
    },
    {
      name: 'TRINCO',
      description: 'Solutions industrielles et commerciales innovantes pour une croissance durable.',
      icon: <FaIndustry />,
      color: 'bg-primary-green',
      href: '/entites/trinco',
    },
    {
      name: 'ECOFOOD',
      description: 'Produits alimentaires de qualité supérieure pour une alimentation saine.',
      icon: <FaLeaf />,
      color: 'bg-gray-700',
      href: '/entites/ecofood',
    },
  ]

  const news = [
    {
      title: 'L\'importance de la Qualité dans le commerce',
      description: 'La qualité dans notre secteur est d\'une importance capitale pour plusieurs raisons. Elle joue un rôle essentiel dans la satisfaction des consommateurs...',
    },
    {
      title: 'La discipline, la seule voie à laquelle nous croyons',
      description: 'La discipline dans notre organisation est le respect d\'un ensemble de règles et de comportements que tout associé doit suivre...',
    },
    {
      title: '"Dream big, make it easy target"',
      description: 'Cette phrase transcrit parfaitement notre vision : Être une organisation performante, contribuant à la croissance durable...',
    },
    {
      title: 'Notre engagement pour l\'excellence',
      description: 'Depuis plus de 20 ans, notre organisation s\'efforce de répondre aux besoins du marché en apportant des produits de consommation de qualité...',
    },
  ]

  return (
    <>
      <Hero />

      {/* Section "Laissez-moi vous présenter" - Notre Entreprise */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        {/* Anneaux de fond */}
        <AnimatedRings 
          className="absolute inset-0 z-0" 
          size="xl" 
          variant="section" 
          intensity="subtle"
        />
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          {/* Badge de présentation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-gray-100 border-l-4 border-primary-red text-gray-700 px-6 py-3 text-sm font-semibold uppercase tracking-wider mb-8">
              Laissez-moi vous présenter
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Notre entreprise
            </h2>
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
              <p className="text-lg text-gray-700 leading-relaxed italic text-primary-red font-medium">
                "Définir ensemble un objectif : c'est un meilleur départ ; s'accorder sur la stratégie : c'est progresser ; courir à ce rêve : c'est le succès."
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Tel est le résumé de l'identité de notre holding MAMAHOLDING et de ses différentes entités, avec pour vision de renforcer et de valoriser son capital humain diversifié et dynamique.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Fort de plus de 20 ans d'expérience, nous nous efforçons de répondre aux besoins du marché en apportant des produits et services de consommation de qualité.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <button className="bg-primary-red text-white p-4 rounded-full hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <FaPlay className="text-xl" />
                </button>
                <span className="text-gray-700 font-medium">Regarder la vidéo</span>
              </div>
            </motion.div>

            {/* Partie Droite - Badge 20 ans */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12 shadow-xl relative overflow-hidden">
                {/* Motif de fond */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-red opacity-5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-green opacity-5 rounded-full blur-3xl"></div>
                
                {/* Contenu */}
                <div className="relative text-center">
                  <div className="inline-block bg-white border-l-8 border-primary-red px-8 py-6 shadow-lg">
                    <div className="text-6xl font-bold text-primary-red mb-2">20+</div>
                    <div className="text-xl font-semibold text-gray-700">ans d'expérience</div>
                  </div>
                  <p className="mt-8 text-lg font-semibold text-gray-800">
                    Entreprise citoyenne, impliquée dans le quotidien depuis 2004
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
        
        {/* Anneaux animés spectaculaires */}
        <AnimatedRings 
          className="absolute inset-0 z-5" 
          size="2xl" 
          variant="hero" 
          intensity="medium"
        />
        
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Leader de l'industrie du commerce en gros
              </h2>
              <p className="text-lg text-white/90 leading-relaxed mb-8">
                Depuis plus de 20 ans, notre organisation s'efforce de répondre aux besoins du marché en apportant des produits de consommation de qualité.
              </p>
              <div className="flex items-center gap-4">
                <button className="bg-white text-primary-red p-5 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl">
                  <FaPlay className="text-2xl" />
                </button>
                <span className="text-white font-semibold text-lg">Voir la vidéo promotionnelle de l'entreprise</span>
              </div>
            </motion.div>

            {/* Partie Droite - Note Client */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-end"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-12 text-center">
                <div className="flex justify-center mb-4">
                  <FaStar className="text-yellow-400 text-6xl" />
                </div>
                <div className="text-7xl font-bold text-white mb-2">9.7</div>
                <div className="text-2xl font-semibold text-white/90 mb-2">Customer Rating</div>
                <p className="text-white/70">Avis complets disponibles</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Mot du PDG */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Mot du PDG
            </h2>
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
              <p className="text-lg text-primary-red font-medium italic leading-relaxed">
                « Définir ensemble un objectif : c'est un meilleur départ ; s'accorder sur la stratégie : c'est progresser ; courir à ce rêve : c'est le succès »
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Cette phrase résume ma petite expérience du monde et ma vision. Les années qui viennent de s'écouler depuis le début de cette aventure ont été riches en apprentissage.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                L'année dernière a été le témoin d'une nouvelle dynamique et d'une intense transformation au sein de notre entreprise. L'identité du groupe se trouve dévoilée et le sentiment d'appartenance de chacun des associés au sein des différentes entités de notre Holding MAMAHOLDING se réaffirme.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Cette dynamique n'est autre que la continuité d'une vision de renforcer et de valoriser notre Capital Humain qui est culturellement très diversifié et dynamique.
              </p>
              <div className="pt-4">
                <p className="text-xl font-bold text-gray-900">Nom de l'ADG</p>
                <p className="text-gray-600">L'Administrateur Directeur Général</p>
              </div>
            </motion.div>

            {/* Partie Droite - Image PDG (2 colonnes) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="relative">
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden border-4 border-primary-red shadow-2xl">
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <div className="text-center p-8">
                      <p className="text-6xl mb-4">👤</p>
                      <p className="font-semibold">Photo du PDG</p>
                    </div>
                  </div>
                </div>
                {/* Accent décoratif */}
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-green rounded-full opacity-20 blur-2xl"></div>
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
              Depuis plus de 20 ans, notre organisation a adopté une philosophie gagnante : le DIPRisme. (Discipline, Intégrité, Passion et Rigueur).
            </p>
            <p className="text-base text-gray-600 max-w-2xl mx-auto mt-4">
              Ces 4 principes nous aident dans l'atteinte de tous nos objectifs et orientent toutes nos actions.
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
                className="relative"
              >
                <div className={`${value.color} rounded-2xl p-8 text-white h-full min-h-[320px] flex flex-col relative overflow-hidden group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl`}>
                  {/* Motif circulaire de fond */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-10 -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full opacity-10 -ml-12 -mb-12"></div>
                  
                  {/* Numéro */}
                  <div className="text-8xl font-bold opacity-90 mb-4">{value.number}</div>
                  
                  {/* Titre */}
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  
                  {/* Description */}
                  <p className="text-white/90 leading-relaxed text-sm flex-grow">
                    {value.description}
                  </p>
                </div>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {entities.map((entity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Link href={entity.href} className="block group">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full border border-gray-100 group-hover:-translate-y-2">
                    {/* Header coloré avec icône */}
                    <div className={`${entity.color} text-white p-8 relative overflow-hidden`}>
                      {/* Logo en arrière-plan */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
                        <div className="text-9xl">
                          {entity.icon}
                        </div>
                      </div>
                      
                      {/* Contenu */}
                      <div className="relative z-10 text-center">
                        <div className="text-5xl mb-4 flex justify-center">
                          {entity.icon}
                        </div>
                        <h3 className="text-3xl font-bold">{entity.name}</h3>
                      </div>
                    </div>
                    
                    {/* Contenu */}
                    <div className="p-8">
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {entity.description}
                      </p>
                      <div className="flex items-center text-primary-red font-semibold group-hover:gap-3 gap-2 transition-all duration-300">
                        <span>Plus de détails</span>
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Actualités - Style Beetle Heritage */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Actualité MAMAHOLDING
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {news.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href="/espace-presse" className="block group">
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full group-hover:-translate-y-2">
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-red transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <div className="flex items-center text-primary-red font-semibold text-sm group-hover:gap-2 gap-1 transition-all">
                        <span>Plus de détails</span>
                        <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Newsletter / Contact - Split Design Style Beetle Heritage */}
      <section className="py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Newsletter - Gauche (Rouge) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-primary-red text-white py-20 px-8 md:px-12"
          >
            <div className="max-w-lg mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Newsletter
              </h3>
              <p className="text-white/90 mb-8 text-lg">
                Recevez l'actualité de notre organisation par email
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="w-full px-6 py-4 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-primary-red px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  S'abonner
                </button>
              </form>
              <p className="text-white/70 text-sm mt-4">
                En vous abonnant, vous acceptez de recevoir nos communications.
              </p>
            </div>
          </motion.div>

          {/* Contact - Droite (Vert) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-primary-green text-white py-20 px-8 md:px-12"
          >
            <div className="max-w-lg mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Contactez-nous
              </h3>
              <p className="text-white/90 mb-8 text-lg">
                Prêt à collaborer avec nous ? Prenez contact dès aujourd'hui.
              </p>
              <div className="space-y-6">
                <div>
                  <p className="text-white/80 mb-2">📞 Téléphone</p>
                  <p className="font-semibold text-xl">+237 656 917 202</p>
                </div>
                <div>
                  <p className="text-white/80 mb-2">📧 Email</p>
                  <p className="font-semibold text-xl">contact@mamaholding.net</p>
                </div>
                <div>
                  <p className="text-white/80 mb-2">📍 Adresse</p>
                  <p className="font-semibold">Yaoundé - Etoudi, Cameroun</p>
                </div>
                <Link
                  href="/contact"
                  className="inline-block bg-white text-primary-green px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl mt-4"
                >
                  Formulaire de contact
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </>
  )
}
