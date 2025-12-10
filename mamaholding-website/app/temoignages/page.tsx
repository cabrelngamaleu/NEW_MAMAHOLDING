'use client'

import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

type Entity = 'CAC' | 'TRINCO' | 'ECOFOOD'

export default function Temoignages() {
  const testimonials = [
    {
      name: 'Amadou Njoya',
      company: 'Supermarché Le Palmier',
      location: 'Douala',
      role: 'Gérant',
      entity: 'CAC' as 'CAC' | 'TRINCO' | 'ECOFOOD',
      rating: 5,
      text: 'Nous travaillons avec CAC depuis plus de 5 ans. Leur professionnalisme et la qualité de leurs produits sont exceptionnels. Les livraisons sont toujours ponctuelles et le service client est très réactif. Je recommande vivement !',
      image: '👨🏿‍💼',
    },
    {
      name: 'Marie-Claire Ebelle',
      company: 'Restaurant Chez Tantine',
      location: 'Yaoundé',
      role: 'Propriétaire',
      entity: 'ECOFOOD',
      rating: 5,
      text: 'ECOFOOD nous fournit des produits frais de qualité exceptionnelle. Leurs fruits et légumes sont toujours frais et leur traçabilité nous rassure. C\'est un partenaire de confiance pour notre restaurant.',
      image: '👩🏿‍💼',
    },
    {
      name: 'Jean-Paul Fotso',
      company: 'Entreprise BTP Fotso & Fils',
      location: 'Bafoussam',
      role: 'Directeur Général',
      entity: 'TRINCO',
      rating: 5,
      text: 'TRINCO est notre fournisseur principal pour tous nos équipements de construction. Leur expertise technique et leurs conseils nous ont permis de réaliser plusieurs projets avec succès. Excellent rapport qualité-prix !',
      image: '👨🏿‍💼',
    },
    {
      name: 'Françoise Mbida',
      company: 'Boutique Élégance',
      location: 'Douala',
      role: 'Commerçante',
      entity: 'CAC',
      rating: 5,
      text: 'Je commande régulièrement mes articles chez CAC. Leur large gamme de produits et leurs prix compétitifs me permettent de satisfaire ma clientèle. Le service est impeccable et la livraison rapide.',
      image: '👩🏿‍💼',
    },
    {
      name: 'Paul Nkengue',
      company: 'Hôtel Le Meridien',
      location: 'Kribi',
      role: 'Chef de Cuisine',
      entity: 'ECOFOOD',
      rating: 5,
      text: 'La qualité des produits ECOFOOD est irréprochable. Nous recevons toujours des produits frais et conformes à nos commandes. Leur engagement pour les produits locaux est remarquable. Bravo !',
      image: '👨🏿‍🍳',
    },
    {
      name: 'Bernadette Tchoua',
      company: 'Quincaillerie Moderne',
      location: 'Garoua',
      role: 'Gérante',
      entity: 'TRINCO',
      rating: 5,
      text: 'TRINCO est un partenaire fiable. Leurs produits sont de qualité et conformes aux normes. Le service après-vente est excellent et leur équipe technique est toujours disponible pour nous conseiller.',
      image: '👩🏿‍💼',
    },
    {
      name: 'Samuel Ndi',
      company: 'Épicerie du Quartier',
      location: 'Bamenda',
      role: 'Propriétaire',
      entity: 'CAC',
      rating: 5,
      text: 'CAC m\'a permis de développer mon commerce grâce à leurs produits diversifiés et leurs prix attractifs. La gestion des commandes est simple et efficace. Je suis très satisfait de notre collaboration.',
      image: '👨🏿‍💼',
    },
    {
      name: 'Angeline Mbassi',
      company: 'Traiteur Saveurs d\'Afrique',
      location: 'Douala',
      role: 'Chef Traiteur',
      entity: 'ECOFOOD',
      rating: 5,
      text: 'ECOFOOD comprend parfaitement les besoins des professionnels de la restauration. Leurs produits sont frais, bien conditionnés et livrés à temps. C\'est un plaisir de travailler avec eux !',
      image: '👩🏿‍🍳',
    },
    {
      name: 'Thomas Ekani',
      company: 'Atelier Métallique Ekani',
      location: 'Limbé',
      role: 'Artisan',
      entity: 'TRINCO',
      rating: 5,
      text: 'Je trouve tous mes outils et équipements chez TRINCO. Leur stock est bien fourni et les prix sont raisonnables. L\'équipe est compétente et me conseille toujours bien. Merci TRINCO !',
      image: '👨🏿‍🔧',
    },
    {
      name: 'Clarisse Onana',
      company: 'Superette Chez Clarisse',
      location: 'Yaoundé',
      role: 'Commerçante',
      entity: 'CAC',
      rating: 5,
      text: 'Depuis que je travaille avec CAC, mon chiffre d\'affaires a augmenté. Leurs produits se vendent bien et mes clients sont satisfaits. La relation commerciale est excellente et professionnelle.',
      image: '👩🏿‍💼',
    },
    {
      name: 'Robert Kamga',
      company: 'Hôtel des Montagnes',
      location: 'Dschang',
      role: 'Directeur',
      entity: 'ECOFOOD',
      rating: 5,
      text: 'ECOFOOD nous approvisionne en produits alimentaires de qualité depuis 3 ans. Leur sérieux et leur ponctualité sont remarquables. Nos clients apprécient la qualité des repas que nous servons grâce à eux.',
      image: '👨🏿‍💼',
    },
    {
      name: 'Jacqueline Fouda',
      company: 'Entreprise de Peinture JF',
      location: 'Douala',
      role: 'Entrepreneure',
      entity: 'TRINCO',
      rating: 5,
      text: 'TRINCO est mon fournisseur de confiance pour tous mes matériaux de peinture et de construction. Leurs produits sont de marques reconnues et leur service est impeccable. Je recommande fortement !',
      image: '👩🏿‍💼',
    },
  ]

  const entityColors: Record<Entity, { gradient: string, light: string, border: string }> = {
    CAC: { gradient: 'from-red-500 to-red-700', light: 'from-red-50 to-red-100', border: 'border-red-500' },
    TRINCO: { gradient: 'from-blue-500 to-blue-700', light: 'from-blue-50 to-blue-100', border: 'border-blue-500' },
    ECOFOOD: { gradient: 'from-green-500 to-red-600', light: 'from-green-50 to-red-50', border: 'border-green-500' },
  }

  return (
    <div className="min-h-screen bg-white mt-20 md:mt-24">
      {/* Hero Section - Design Ultra Interactif */}
      <section className="relative bg-gradient-to-br from-purple-900 via-pink-800 to-red-900 text-white py-32 overflow-hidden">
        {/* Fond animé avec particules flottantes */}
        <div className="absolute inset-0">
          {/* Cercles animés multiples */}
          <motion.div 
            className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-pink-400 to-red-500 rounded-full blur-3xl opacity-30"
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl opacity-30"
            animate={{ 
              scale: [1, 1.4, 1],
              x: [0, -40, 0],
              y: [0, 40, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl opacity-20"
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
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <FaStar className="text-yellow-300 text-xl" />
                </motion.div>
                <span className="text-white font-bold text-lg">Avis & Satisfaction</span>
              </div>
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
              Témoignages Clients
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl opacity-95 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.95 }}
              transition={{ delay: 0.4 }}
            >
              Découvrez ce que nos clients pensent de nos services
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Introduction - Design moderne */}
      <section className="py-16 bg-primary-light">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block bg-red-100 px-6 py-2 rounded-full mb-4">
                <span className="text-primary-red font-semibold">Confiance & Excellence</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
                La Voix de Nos Clients
              </h2>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary-red">
              <div className="flex flex-col h-full">
                <FaStar className="text-5xl text-yellow-400 mb-6" />
                <p className="text-primary-dark text-lg leading-relaxed" style={{ color: '#1F2937' }}>
                  Depuis plus de 20 ans, MAMAHOLDING S.A accompagne des centaines d'entreprises et de professionnels au Cameroun. 
                  Voici quelques témoignages de nos clients satisfaits qui nous font confiance au quotidien.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)"
                }}
                className="relative bg-white rounded-2xl overflow-hidden group cursor-pointer border-2 border-transparent hover:border-purple-300 transition-all duration-300"
              >
                {/* Fond dégradé animé au hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${entityColors[testimonial.entity as Entity].light} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                
                <div className="relative p-8">
                  {/* Badge Entité Animé */}
                  <motion.div 
                    className={`absolute -top-2 -right-2 bg-gradient-to-br ${entityColors[testimonial.entity as Entity].gradient} text-white px-5 py-2.5 text-sm font-bold rounded-bl-2xl rounded-tr-2xl shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {testimonial.entity}
                  </motion.div>

                  {/* Icône Quote avec animation */}
                  <motion.div 
                    className="text-5xl opacity-10 mb-4"
                    style={{ color: testimonial.entity === 'CAC' ? '#DC2626' : testimonial.entity === 'TRINCO' ? '#2563EB' : '#16A34A' }}
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <FaQuoteLeft />
                  </motion.div>

                  {/* Étoiles animées */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        whileHover={{ scale: 1.3, rotate: 360 }}
                      >
                        <FaStar className="text-yellow-400 text-xl" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Témoignage avec meilleure typographie */}
                  <p className="text-gray-700 leading-relaxed mb-6 italic text-base">
                    <span className="text-2xl text-gray-400 font-serif">“</span>
                    {testimonial.text}
                    <span className="text-2xl text-gray-400 font-serif">”</span>
                  </p>

                  {/* Profil Client avec animation */}
                  <motion.div 
                    className="flex items-center gap-4 pt-5 border-t-2 border-gray-100 group-hover:border-purple-200 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="text-5xl"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      {testimonial.image}
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600 mb-0.5">{testimonial.role}</p>
                      <p className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{testimonial.company}</p>
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <span>📍</span> {testimonial.location}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary-red to-red-700 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold mb-4">1000+</div>
              <div className="text-lg md:text-xl opacity-90">Clients Satisfaits</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold mb-4">95%</div>
              <div className="text-lg md:text-xl opacity-90">Taux de Satisfaction</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold mb-4">20+</div>
              <div className="text-lg md:text-xl opacity-90">Ans d'Expérience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold mb-4">3</div>
              <div className="text-lg md:text-xl opacity-90">Entités Spécialisées</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Rejoignez nos clients satisfaits
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Faites confiance à MAMAHOLDING S.A pour vos besoins en commerce de gros, solutions industrielles et produits alimentaires.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Nous Contacter
              </a>
              <a href="/entites/cac" className="btn-secondary">
                Découvrir Nos Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
