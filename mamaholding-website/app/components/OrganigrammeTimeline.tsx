'use client'

import { motion } from 'framer-motion'
import { FaUserTie } from 'react-icons/fa'

export default function OrganigrammeTimeline() {
  const levels = [
    {
      level: 'Niveau 1',
      title: 'Direction Générale',
      nodes: [
        { title: 'ASSEMBLÉE GÉNÉRALE', color: 'purple' }
      ]
    },
    {
      level: 'Niveau 2',
      title: 'Gouvernance',
      nodes: [
        { title: 'CONSEIL D\'ADMINISTRATION', color: 'green' }
      ]
    },
    {
      level: 'Niveau 3',
      title: 'Direction Exécutive',
      nodes: [
        { title: 'ADMINISTRATEUR DIRECTEUR GÉNÉRAL', color: 'gray' }
      ]
    },
    {
      level: 'Niveau 4',
      title: 'Services Centraux',
      nodes: [
        { title: 'CHEF SERVICE JURIDIQUE', color: 'teal' },
        { title: 'ATTACHÉ DE DIRECTION', color: 'teal' },
        { title: 'CHEF DE DÉPARTEMENT COMMERCIAL', color: 'orange' },
        { title: 'CHEF SERVICE INFORMATIQUE', color: 'blue' },
        { title: 'CHEF SERVICE DE COMPTABILITÉ', color: 'blue' }
      ]
    },
    {
      level: 'Niveau 5',
      title: 'Départements',
      nodes: [
        { title: 'CHEF DE DÉPARTEMENT COMPTABILITÉ ET FISCALITÉ', color: 'orange' },
        { title: 'CHEF DE DÉPARTEMENT APPROVISIONNEMENT', color: 'orange' },
        { title: 'CHEF DE DÉPARTEMENT FINANCIER', color: 'orange' },
        { title: 'CHEF DE DÉPARTEMENT RH ET ADMINISTRATION', color: 'orange' },
        { title: 'CHEF DE DÉPARTEMENT LOGISTIQUE', color: 'orange' }
      ]
    },
    {
      level: 'Niveau 6',
      title: 'Services Opérationnels',
      nodes: [
        { title: 'CHEF DE SERVICE VENTES', color: 'teal' },
        { title: 'CHEF DE SERVICE MARKETING', color: 'teal' },
        { title: 'CHEF SERVICE LOGISTIQUE ET TRANSPORT', color: 'teal' },
        { title: 'CHEF SERVICE EXPLOITATION', color: 'teal' },
        { title: 'CHEF SERVICE MAINTENANCE', color: 'teal' },
        { title: 'CHEF SERVICE ACHATS', color: 'teal' },
        { title: 'CHEF SERVICE FINANCIER', color: 'teal' },
        { title: 'CHEF SERVICE TRÉSORERIE', color: 'teal' },
        { title: 'CHEF SERVICE RESSOURCES HUMAINES', color: 'teal' },
        { title: 'CHEF SERVICE CONTRÔLE GESTION', color: 'teal' }
      ]
    }
  ]

  const colorClasses: Record<string, string> = {
    purple: 'from-purple-600 to-purple-800 border-purple-400',
    green: 'from-green-600 to-green-800 border-green-400',
    gray: 'from-gray-600 to-gray-800 border-gray-400',
    teal: 'from-teal-600 to-teal-800 border-teal-400',
    orange: 'from-orange-600 to-orange-800 border-orange-400',
    blue: 'from-blue-600 to-blue-800 border-blue-400',
  }

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6">
      <div className="max-w-6xl mx-auto">
        {levels.map((level, levelIndex) => (
          <div key={levelIndex} className="relative mb-12 last:mb-0">
            {/* Ligne verticale */}
            {levelIndex < levels.length - 1 && (
              <div className="absolute left-8 top-full w-0.5 h-12 bg-gradient-to-b from-gray-400 to-transparent"></div>
            )}

            {/* En-tête du niveau */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-red to-primary-green rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                {levelIndex + 1}
              </div>
              <div>
                <div className="text-sm text-gray-500">{level.level}</div>
                <div className="text-xl font-bold text-gray-800">{level.title}</div>
              </div>
            </motion.div>

            {/* Cartes du niveau */}
            <div className="ml-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {level.nodes.map((node, nodeIndex) => (
                <motion.div
                  key={nodeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: nodeIndex * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`bg-gradient-to-br ${colorClasses[node.color]} text-white rounded-lg shadow-md p-3 border-2`}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaUserTie className="text-xs" />
                    </div>
                    <div className="text-[9px] leading-tight font-semibold">
                      {node.title}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
