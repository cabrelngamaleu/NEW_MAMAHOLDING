'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaUserTie, FaTimes } from 'react-icons/fa'

export default function OrganigrammeCards() {
  const [selectedNode, setSelectedNode] = useState<any>(null)

  const nodes = [
    {
      id: 'ag',
      title: 'ASSEMBLÉE GÉNÉRALE',
      color: 'purple',
      level: 'Direction Générale',
      description: 'Organe suprême de décision de l\'entreprise',
      reports: 1
    },
    {
      id: 'ca',
      title: 'CONSEIL D\'ADMINISTRATION',
      color: 'green',
      level: 'Direction Générale',
      description: 'Organe de gouvernance et de contrôle stratégique',
      reports: 1
    },
    {
      id: 'adg',
      title: 'ADMINISTRATEUR DIRECTEUR GÉNÉRAL',
      color: 'gray',
      level: 'Direction Exécutive',
      description: 'Direction opérationnelle et stratégique du groupe',
      reports: 5
    },
    {
      id: 'juridique',
      title: 'CHEF SERVICE JURIDIQUE',
      color: 'teal',
      level: 'Service',
      description: 'Gestion des affaires juridiques et conformité',
      reports: 0
    },
    {
      id: 'attache',
      title: 'ATTACHÉ DE DIRECTION',
      color: 'teal',
      level: 'Service',
      description: 'Support à la direction générale',
      reports: 1
    },
    {
      id: 'commercial',
      title: 'CHEF DE DÉPARTEMENT COMMERCIAL',
      color: 'orange',
      level: 'Département',
      description: 'Pilotage de l\'activité commerciale et marketing',
      reports: 6
    },
    {
      id: 'informatique',
      title: 'CHEF SERVICE INFORMATIQUE',
      color: 'blue',
      level: 'Service',
      description: 'Gestion des systèmes d\'information',
      reports: 0
    },
    {
      id: 'comptabilite',
      title: 'CHEF SERVICE DE COMPTABILITÉ',
      color: 'blue',
      level: 'Service',
      description: 'Gestion comptable et financière',
      reports: 0
    },
    {
      id: 'dga',
      title: 'DIRECTEUR GÉNÉRAL ADJOINT',
      color: 'teal',
      level: 'Direction Exécutive',
      description: 'Assistance à la direction générale',
      reports: 0
    },
    {
      id: 'compta-fisc',
      title: 'CHEF DE DÉPARTEMENT COMPTABILITÉ ET FISCALITÉ',
      color: 'orange',
      level: 'Département',
      description: 'Gestion comptable, fiscale et financière',
      reports: 2
    },
    {
      id: 'appro',
      title: 'CHEF DE DÉPARTEMENT APPROVISIONNEMENT',
      color: 'orange',
      level: 'Département',
      description: 'Gestion des achats et approvisionnements',
      reports: 6
    },
    {
      id: 'financier',
      title: 'CHEF DE DÉPARTEMENT FINANCIER',
      color: 'orange',
      level: 'Département',
      description: 'Gestion financière et trésorerie',
      reports: 4
    },
    {
      id: 'rh',
      title: 'CHEF DE DÉPARTEMENT RH ET ADMINISTRATION',
      color: 'orange',
      level: 'Département',
      description: 'Gestion des ressources humaines',
      reports: 5
    },
    {
      id: 'logistique',
      title: 'CHEF DE DÉPARTEMENT LOGISTIQUE',
      color: 'orange',
      level: 'Département',
      description: 'Gestion de la logistique et transport',
      reports: 2
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
      <div className="mb-6 text-center">
        <p className="text-sm text-gray-600">Cliquez sur une carte pour voir les détails</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {nodes.map((node, index) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className={`bg-gradient-to-br ${colorClasses[node.color]} text-white rounded-xl shadow-lg p-4 border-2 cursor-pointer`}
            onClick={() => setSelectedNode(node)}
          >
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <FaUserTie className="text-xl" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs opacity-80 mb-1">{node.level}</div>
                <div className="text-sm font-bold leading-tight mb-2">{node.title}</div>
                <div className="text-xs opacity-90">
                  {node.reports} rapport{node.reports > 1 ? 's' : ''} direct{node.reports > 1 ? 's' : ''}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal de détails */}
      <AnimatePresence>
        {selectedNode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedNode(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className={`bg-gradient-to-br ${colorClasses[selectedNode.color]} text-white rounded-2xl shadow-2xl p-8 max-w-lg w-full border-2`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <FaUserTie className="text-3xl" />
                  </div>
                  <div>
                    <div className="text-sm opacity-80 mb-1">{selectedNode.level}</div>
                    <div className="text-xl font-bold">{selectedNode.title}</div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedNode(null)}
                  className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-sm opacity-80 mb-1">Description</div>
                  <div className="text-base">{selectedNode.description}</div>
                </div>

                <div>
                  <div className="text-sm opacity-80 mb-1">Rapports directs</div>
                  <div className="text-2xl font-bold">{selectedNode.reports}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
