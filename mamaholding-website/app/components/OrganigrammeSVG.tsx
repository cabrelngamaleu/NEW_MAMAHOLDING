'use client'

import { motion } from 'framer-motion'
import { FaUserTie } from 'react-icons/fa'

interface OrgNode {
  id: string
  title: string
  subtitle?: string
  color: string
  x: number
  y: number
}

interface OrgConnection {
  from: string
  to: string
}

export default function OrganigrammeSVG() {
  // Définition des nœuds avec positions
  const nodes: OrgNode[] = [
    // Niveau 1
    { id: 'ag', title: 'ASSEMBLÉE', subtitle: 'GÉNÉRALE', color: 'purple', x: 900, y: 50 },
    
    // Niveau 2
    { id: 'ca', title: 'CONSEIL', subtitle: "D'ADMINISTRATION", color: 'green', x: 900, y: 150 },
    
    // Niveau 3
    { id: 'adg', title: 'ADMINISTRATEUR', subtitle: 'DIRECTEUR GÉNÉRAL', color: 'gray', x: 900, y: 250 },
    
    // Niveau 4 - Ligne principale
    { id: 'juridique', title: 'CHEF SERVICE', subtitle: 'JURIDIQUE', color: 'teal', x: 200, y: 380 },
    { id: 'attache', title: 'ATTACHÉ DE', subtitle: 'DIRECTION', color: 'teal', x: 500, y: 380 },
    { id: 'commercial', title: 'CHEF DE DÉPARTEMENT', subtitle: 'COMMERCIAL', color: 'orange', x: 900, y: 380 },
    { id: 'informatique', title: 'CHEF SERVICE', subtitle: 'INFORMATIQUE', color: 'blue', x: 1300, y: 380 },
    { id: 'comptabilite', title: 'CHEF SERVICE DE', subtitle: 'COMPTABILITÉ', color: 'blue', x: 1600, y: 380 },
    
    // Postes latéraux
    { id: 'appro-lateral', title: 'CHEF SERVICE', subtitle: 'APPROVISIONNEMENT', color: 'teal', x: 50, y: 500 },
    { id: 'dga', title: 'DIRECTEUR', subtitle: 'GÉNÉRAL ADJOINT', color: 'teal', x: 350, y: 500 },
    { id: 'info-lateral', title: 'CHEF SERVICE', subtitle: 'INFORMATIQUE', color: 'blue', x: 1450, y: 500 },
    { id: 'audit', title: 'CHEF SERVICE DE', subtitle: "L'AUDIT INTERNE", color: 'blue', x: 1650, y: 500 },
    { id: 'securite', title: 'CHEF SERVICE', subtitle: 'SÉCURITÉ', color: 'teal', x: 1750, y: 500 },
    
    // Niveau 5 - Départements
    { id: 'compta-fisc', title: 'CHEF DE DÉPARTEMENT', subtitle: 'COMPTABILITÉ ET FISCALITÉ', color: 'orange', x: 300, y: 600 },
    { id: 'appro', title: 'CHEF DE DÉPARTEMENT', subtitle: 'APPROVISIONNEMENT', color: 'orange', x: 550, y: 600 },
    { id: 'financier', title: 'CHEF DE DÉPARTEMENT', subtitle: 'FINANCIER', color: 'orange', x: 800, y: 600 },
    { id: 'rh', title: 'CHEF DE DÉPARTEMENT', subtitle: 'RH ET ADMINISTRATION', color: 'orange', x: 1050, y: 600 },
    { id: 'logistique', title: 'CHEF DE DÉPARTEMENT', subtitle: 'LOGISTIQUE', color: 'orange', x: 1300, y: 600 },
  ]

  // Définition des connexions
  const connections: OrgConnection[] = [
    { from: 'ag', to: 'ca' },
    { from: 'ca', to: 'adg' },
    { from: 'adg', to: 'juridique' },
    { from: 'adg', to: 'attache' },
    { from: 'adg', to: 'commercial' },
    { from: 'adg', to: 'informatique' },
    { from: 'adg', to: 'comptabilite' },
    { from: 'juridique', to: 'appro-lateral' },
    { from: 'attache', to: 'dga' },
    { from: 'comptabilite', to: 'info-lateral' },
    { from: 'comptabilite', to: 'audit' },
    { from: 'dga', to: 'securite' },
    { from: 'commercial', to: 'compta-fisc' },
    { from: 'commercial', to: 'appro' },
    { from: 'commercial', to: 'financier' },
    { from: 'commercial', to: 'rh' },
    { from: 'commercial', to: 'logistique' },
  ]

  const getNodeById = (id: string) => nodes.find(n => n.id === id)

  const getColorClass = (color: string) => {
    const colors: Record<string, string> = {
      purple: 'from-purple-600 to-purple-800 border-purple-400',
      green: 'from-green-600 to-green-800 border-green-400',
      gray: 'from-gray-600 to-gray-800 border-gray-400',
      teal: 'from-teal-600 to-teal-800 border-teal-400',
      orange: 'from-orange-600 to-orange-800 border-orange-400',
      blue: 'from-blue-600 to-blue-800 border-blue-400',
    }
    return colors[color] || colors.gray
  }

  return (
    <div className="w-full bg-gray-50 rounded-xl p-8 overflow-x-auto">
      <div className="relative" style={{ minWidth: '1800px', minHeight: '800px' }}>
        {/* SVG pour les connexions */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 10 3, 0 6" fill="#9CA3AF" />
            </marker>
          </defs>
          
          {connections.map((conn, idx) => {
            const fromNode = getNodeById(conn.from)
            const toNode = getNodeById(conn.to)
            if (!fromNode || !toNode) return null

            const x1 = fromNode.x + 75
            const y1 = fromNode.y + 40
            const x2 = toNode.x + 75
            const y2 = toNode.y

            return (
              <motion.line
                key={idx}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#9CA3AF"
                strokeWidth="2"
                markerEnd="url(#arrowhead)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              />
            )
          })}
        </svg>

        {/* Nœuds */}
        {nodes.map((node, idx) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="absolute"
            style={{ 
              left: `${node.x}px`, 
              top: `${node.y}px`,
              zIndex: 10
            }}
          >
            <div className={`bg-gradient-to-br ${getColorClass(node.color)} text-white rounded-lg shadow-lg p-3 w-[150px] border-2 hover:scale-105 transition-transform cursor-pointer`}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaUserTie className="text-xs" />
                </div>
                <div className="text-[9px] leading-tight">
                  <div className="font-bold">{node.title}</div>
                  {node.subtitle && <div>{node.subtitle}</div>}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
