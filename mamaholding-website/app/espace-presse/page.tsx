'use client'

import { motion } from 'framer-motion'
import { FaNewspaper, FaCalendar } from 'react-icons/fa'
import Link from 'next/link'

export default function EspacePresse() {
  const news = [
    {
      title: 'MAMAHOLDING renforce sa position sur le marché',
      date: '15 Mars 2024',
      category: 'Actualité Groupe',
      excerpt: 'Le groupe MAMAHOLDING annonce de nouveaux partenariats stratégiques pour renforcer sa position de leader dans le commerce en gros. Ces partenariats visent à élargir notre offre et à améliorer notre service client.',
      image: 'https://placehold.co/800x400/DC143C/FFFFFF?text=Actualite+1',
    },
    {
      title: 'Nouvelle filiale ECOFOOD inaugurée',
      date: '10 Mars 2024',
      category: 'Expansion',
      excerpt: 'ECOFOOD ouvre un nouveau centre de distribution pour mieux servir nos clients. Cette infrastructure moderne permettra d\'optimiser la chaîne logistique et d\'assurer une meilleure disponibilité de nos produits.',
      image: 'https://placehold.co/800x400/22C55E/FFFFFF?text=Actualite+2',
    },
    {
      title: 'CAC célèbre 10 ans de succès',
      date: '5 Mars 2024',
      category: 'Anniversaire',
      excerpt: 'CAC fête une décennie d\'excellence dans le commerce en gros. Retour sur 10 ans de croissance, d\'innovation et de partenariats réussis avec nos clients fidèles.',
      image: 'https://placehold.co/800x400/1F2937/FFFFFF?text=Actualite+3',
    },
    {
      title: 'TRINCO remporte un prix d\'excellence',
      date: '1 Mars 2024',
      category: 'Récompense',
      excerpt: 'TRINCO a été récompensé pour son engagement envers l\'innovation et la qualité de service. Ce prix témoigne de notre détermination à toujours exceller dans nos domaines d\'activité.',
      image: 'https://placehold.co/800x400/3B82F6/FFFFFF?text=Actualite+4',
    },
    {
      title: 'MAMAHOLDING lance un programme de formation',
      date: '25 Février 2024',
      category: 'Ressources Humaines',
      excerpt: 'Le groupe met en place un programme de formation continue pour ses employés, renforçant ainsi leurs compétences et leur employabilité dans un marché en constante évolution.',
      image: 'https://placehold.co/800x400/8B5CF6/FFFFFF?text=Actualite+5',
    },
    {
      title: 'Partenariat avec des producteurs locaux',
      date: '20 Février 2024',
      category: 'Développement Durable',
      excerpt: 'ECOFOOD renforce son engagement envers le développement durable en signant de nouveaux partenariats avec des producteurs locaux, garantissant des produits frais et de qualité tout en soutenant l\'économie locale.',
      image: 'https://placehold.co/800x400/EF4444/FFFFFF?text=Actualite+6',
    },
  ]

  return (
    <div className="min-h-screen bg-white mt-20 md:mt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-red to-red-700 text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-8">
              <FaNewspaper className="text-7xl" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Espace Presse</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Toutes les actualités et communiqués de presse de MAMAHOLDING S.A
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-primary-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xl text-gray-700">
              Retrouvez ici toute l'actualité du groupe MAMAHOLDING et de ses entités CAC, TRINCO et ECOFOOD
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles de Presse */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card overflow-hidden p-0 group"
              >
                <div className="h-48 bg-gradient-to-br from-primary-red to-red-700 flex items-center justify-center text-white text-xl font-bold overflow-hidden">
                  <div className="text-center p-4">
                    <FaNewspaper className="text-6xl mb-2 mx-auto" />
                    <p>{article.category}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-primary-red font-semibold mb-3">
                    <FaCalendar />
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark mb-3 group-hover:text-primary-red transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  <button className="text-primary-red font-semibold hover:underline">
                    Lire la suite →
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Presse */}
      <section className="py-20 bg-primary-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card bg-white max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-primary-dark mb-6">Contact Presse</h2>
            <p className="text-xl text-gray-700 mb-8">
              Pour toute demande d'information ou interview, contactez notre service de communication
            </p>
            <div className="space-y-3 mb-8">
              <p className="text-lg">
                <span className="font-semibold">Email :</span> presse@mamaholding.com
              </p>
              <p className="text-lg">
                <span className="font-semibold">Téléphone :</span> +XXX XX XX XX XX
              </p>
            </div>
            <Link href="/contact" className="btn-primary">
              Contactez-Nous
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
