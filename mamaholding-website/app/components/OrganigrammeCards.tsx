'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaUserTie, FaTimes } from 'react-icons/fa'

export default function OrganigrammeCards() {
  const [selectedNode, setSelectedNode] = useState<any>(null)

  const nodes = [
    // Niveau 1 - Direction Stratégique
    { id: 'ag', title: 'ASSEMBLÉE GÉNÉRALE', color: 'purple', level: 'Gouvernance', description: 'Organe suprême de décision', reports: 1 },
    { id: 'ca', title: 'CONSEIL D\'ADMINISTRATION', color: 'green', level: 'Gouvernance', description: 'Organe de gouvernance stratégique', reports: 1 },
    { id: 'adg', title: 'ADMINISTRATEUR DIRECTEUR GÉNÉRAL', color: 'gray', level: 'Direction Générale', description: 'Direction opérationnelle du groupe', reports: 11 },
    
    // Niveau 2 - Services Support
    { id: 'juridique', title: 'CHEF SERVICE JURIDIQUE', color: 'teal', level: 'Service Support', description: 'Affaires juridiques et conformité', reports: 0 },
    { id: 'attache', title: 'ATTACHÉ DE DIRECTION', color: 'teal', level: 'Service Support', description: 'Support direction générale', reports: 0 },
    { id: 'informatique', title: 'CHEF SERVICE INFORMATIQUE', color: 'blue', level: 'Service Support', description: 'Systèmes d\'information', reports: 0 },
    { id: 'comptabilite', title: 'CHEF SERVICE DE COMPTABILITÉ', color: 'blue', level: 'Service Support', description: 'Comptabilité générale', reports: 0 },
    { id: 'approvisionnement', title: 'CHEF SERVICE APPROVISIONNEMENT', color: 'teal', level: 'Service Support', description: 'Gestion des approvisionnements', reports: 0 },
    { id: 'dga', title: 'DIRECTEUR GÉNÉRAL ADJOINT', color: 'teal', level: 'Direction Adjointe', description: 'Assistance direction générale', reports: 0 },
    { id: 'audit', title: 'CHEF SERVICE DE L\'AUDIT INTERNE', color: 'blue', level: 'Service Support', description: 'Audit et contrôle interne', reports: 0 },
    { id: 'securite', title: 'CHEF SERVICE SÉCURITÉ', color: 'teal', level: 'Service Support', description: 'Sécurité et sûreté', reports: 0 },
    
    // Niveau 3 - Départements
    { id: 'commercial', title: 'CHEF DE DÉPARTEMENT COMMERCIAL', color: 'orange', level: 'Département', description: 'Direction commerciale', reports: 0 },
    { id: 'dept-compta', title: 'CHEF DE DÉPARTEMENT COMPTABILITÉ ET FISCALITÉ', color: 'orange', level: 'Département', description: 'Comptabilité et fiscalité', reports: 2 },
    { id: 'dept-appro', title: 'CHEF DE DÉPARTEMENT APPROVISIONNEMENT', color: 'orange', level: 'Département', description: 'Achats et approvisionnements', reports: 6 },
    { id: 'dept-financier', title: 'CHEF DE DÉPARTEMENT FINANCIER', color: 'orange', level: 'Département', description: 'Gestion financière', reports: 4 },
    { id: 'dept-rh', title: 'CHEF DE DÉPARTEMENT RH ET ADMINISTRATION', color: 'orange', level: 'Département', description: 'Ressources humaines', reports: 5 },
    { id: 'dept-logistique', title: 'CHEF DE DÉPARTEMENT LOGISTIQUE', color: 'orange', level: 'Département', description: 'Logistique et transport', reports: 2 },
    { id: 'dept-marketing', title: 'CHEF DE DÉPARTEMENT MARKETING', color: 'orange', level: 'Département', description: 'Marketing et communication', reports: 0 },
    
    // Services opérationnels - Comptabilité
    { id: 'srv-ventes', title: 'CHEF DE SERVICE VENTES', color: 'teal', level: 'Service Opérationnel', description: 'Gestion des ventes', reports: 0 },
    { id: 'srv-marketing', title: 'CHEF DE SERVICE MARKETING', color: 'teal', level: 'Service Opérationnel', description: 'Opérations marketing', reports: 0 },
    
    // Services opérationnels - Approvisionnement
    { id: 'srv-logistique-transport', title: 'CHEF DE SERVICE LOGISTIQUE ET TRANSPORT', color: 'teal', level: 'Service Opérationnel', description: 'Logistique et transport', reports: 0 },
    { id: 'srv-exploitation', title: 'CHEF SERVICE EXPLOITATION', color: 'teal', level: 'Service Opérationnel', description: 'Exploitation', reports: 0 },
    { id: 'srv-maintenance', title: 'CHEF SERVICE MAINTENANCE', color: 'teal', level: 'Service Opérationnel', description: 'Maintenance', reports: 0 },
    { id: 'srv-achats', title: 'CHEF SERVICE ACHATS', color: 'teal', level: 'Service Opérationnel', description: 'Gestion des achats', reports: 0 },
    { id: 'srv-stock', title: 'CHEF SERVICE STOCK', color: 'teal', level: 'Service Opérationnel', description: 'Gestion des stocks', reports: 0 },
    { id: 'srv-planif', title: 'CHEF DE SERVICE DES PLANIFICATIONS DES APPROVISIONNEMENTS', color: 'teal', level: 'Service Opérationnel', description: 'Planification approvisionnements', reports: 0 },
    
    // Services opérationnels - Financier
    { id: 'srv-financier', title: 'CHEF SERVICE FINANCIER', color: 'teal', level: 'Service Opérationnel', description: 'Gestion financière', reports: 0 },
    { id: 'srv-tresorerie', title: 'CHEF SERVICE TRÉSORERIE', color: 'teal', level: 'Service Opérationnel', description: 'Trésorerie', reports: 0 },
    { id: 'srv-paie', title: 'SERVICE PAIE & IMPÔTS', color: 'teal', level: 'Service Opérationnel', description: 'Paie et impôts', reports: 0 },
    { id: 'srv-comptable', title: 'CHEF SERVICE COMPTABLE', color: 'teal', level: 'Service Opérationnel', description: 'Comptabilité', reports: 0 },
    
    // Services opérationnels - RH
    { id: 'srv-clientele', title: 'CHEF DE SERVICE CLIENTÈLE & DISTRIBUTION', color: 'teal', level: 'Service Opérationnel', description: 'Clientèle et distribution', reports: 0 },
    { id: 'srv-exploitation-rh', title: 'CHEF SERVICE EXPLOITATION', color: 'teal', level: 'Service Opérationnel', description: 'Exploitation RH', reports: 0 },
    { id: 'srv-moyens-gen', title: 'CHEF SERVICE DES MOYENS GÉNÉRAUX', color: 'teal', level: 'Service Opérationnel', description: 'Moyens généraux', reports: 0 },
    { id: 'srv-rh', title: 'CHEF SERVICE RESSOURCES HUMAINES', color: 'teal', level: 'Service Opérationnel', description: 'Ressources humaines', reports: 0 },
    { id: 'srv-controle', title: 'CHEF SERVICE CONTRÔLE GESTION', color: 'teal', level: 'Service Opérationnel', description: 'Contrôle de gestion', reports: 0 },
    
    // Services opérationnels - Logistique
    { id: 'srv-exploitation-log', title: 'CHEF SERVICE EXPLOITATION', color: 'teal', level: 'Service Opérationnel', description: 'Exploitation logistique', reports: 0 },
    { id: 'srv-maintenance-veh', title: 'CHEF SERVICE MAINTENANCE VÉHICULES', color: 'teal', level: 'Service Opérationnel', description: 'Maintenance véhicules', reports: 0 }
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
