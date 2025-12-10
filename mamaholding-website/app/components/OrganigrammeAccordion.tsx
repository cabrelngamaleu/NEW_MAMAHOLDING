'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaUserTie, FaChevronDown, FaChevronRight } from 'react-icons/fa'

export default function OrganigrammeAccordion() {
  const [expandedNodes, setExpandedNodes] = useState<string[]>(['ag', 'ca', 'adg'])

  const toggleNode = (nodeId: string) => {
    setExpandedNodes(prev => 
      prev.includes(nodeId) 
        ? prev.filter(id => id !== nodeId)
        : [...prev, nodeId]
    )
  }

  const orgData = {
    id: 'ag',
    title: 'ASSEMBLÉE GÉNÉRALE',
    color: 'purple',
    children: [{
      id: 'ca',
      title: 'CONSEIL D\'ADMINISTRATION',
      color: 'green',
      children: [{
        id: 'adg',
        title: 'ADMINISTRATEUR DIRECTEUR GÉNÉRAL',
        color: 'gray',
        children: [
          {
            id: 'juridique',
            title: 'CHEF SERVICE JURIDIQUE',
            color: 'teal',
            children: []
          },
          {
            id: 'attache',
            title: 'ATTACHÉ DE DIRECTION',
            color: 'teal',
            children: [{
              id: 'dga',
              title: 'DIRECTEUR GÉNÉRAL ADJOINT',
              color: 'teal',
              children: []
            }]
          },
          {
            id: 'commercial',
            title: 'CHEF DE DÉPARTEMENT COMMERCIAL',
            color: 'orange',
            children: [
              {
                id: 'compta-fisc',
                title: 'CHEF DE DÉPARTEMENT COMPTABILITÉ ET FISCALITÉ',
                color: 'orange',
                children: [
                  { id: 'ventes', title: 'CHEF DE SERVICE VENTES', color: 'teal', children: [] },
                  { id: 'marketing', title: 'CHEF DE SERVICE MARKETING', color: 'teal', children: [] }
                ]
              },
              {
                id: 'appro',
                title: 'CHEF DE DÉPARTEMENT APPROVISIONNEMENT',
                color: 'orange',
                children: [
                  { id: 'logistique', title: 'CHEF DE SERVICE LOGISTIQUE ET TRANSPORT', color: 'teal', children: [] },
                  { id: 'exploitation', title: 'CHEF SERVICE EXPLOITATION', color: 'teal', children: [] },
                  { id: 'maintenance', title: 'CHEF SERVICE MAINTENANCE', color: 'teal', children: [] },
                  { id: 'achats', title: 'CHEF SERVICE ACHATS', color: 'teal', children: [] },
                  { id: 'stock', title: 'CHEF SERVICE STOCK', color: 'teal', children: [] },
                  { id: 'planif', title: 'CHEF DE SERVICE DES PLANIFICATIONS', color: 'teal', children: [] }
                ]
              },
              {
                id: 'financier',
                title: 'CHEF DE DÉPARTEMENT FINANCIER',
                color: 'orange',
                children: [
                  { id: 'fin', title: 'CHEF SERVICE FINANCIER', color: 'teal', children: [] },
                  { id: 'tresor', title: 'CHEF SERVICE TRÉSORERIE', color: 'teal', children: [] },
                  { id: 'paie', title: 'SERVICE PAIE & IMPÔTS', color: 'teal', children: [] },
                  { id: 'compt', title: 'CHEF SERVICE COMPTABLE', color: 'teal', children: [] }
                ]
              },
              {
                id: 'rh',
                title: 'CHEF DE DÉPARTEMENT RH ET ADMINISTRATION',
                color: 'orange',
                children: [
                  { id: 'client', title: 'CHEF DE SERVICE CLIENTÈLE & DISTRIBUTION', color: 'teal', children: [] },
                  { id: 'exploit2', title: 'CHEF SERVICE EXPLOITATION', color: 'teal', children: [] },
                  { id: 'moyens', title: 'CHEF SERVICE DES MOYENS GÉNÉRAUX', color: 'teal', children: [] },
                  { id: 'rh-serv', title: 'CHEF SERVICE RESSOURCES HUMAINES', color: 'teal', children: [] },
                  { id: 'controle', title: 'CHEF SERVICE CONTRÔLE GESTION', color: 'teal', children: [] }
                ]
              },
              {
                id: 'logist',
                title: 'CHEF DE DÉPARTEMENT LOGISTIQUE',
                color: 'orange',
                children: [
                  { id: 'exploit3', title: 'CHEF SERVICE EXPLOITATION', color: 'teal', children: [] },
                  { id: 'maint-veh', title: 'CHEF SERVICE MAINTENANCE VÉHICULES', color: 'teal', children: [] }
                ]
              }
            ]
          },
          {
            id: 'info',
            title: 'CHEF SERVICE INFORMATIQUE',
            color: 'blue',
            children: []
          },
          {
            id: 'comptabilite',
            title: 'CHEF SERVICE DE COMPTABILITÉ',
            color: 'blue',
            children: []
          }
        ]
      }]
    }]
  }

  const colorClasses: Record<string, string> = {
    purple: 'bg-gradient-to-r from-purple-600 to-purple-800 border-purple-400',
    green: 'bg-gradient-to-r from-green-600 to-green-800 border-green-400',
    gray: 'bg-gradient-to-r from-gray-600 to-gray-800 border-gray-400',
    teal: 'bg-gradient-to-r from-teal-600 to-teal-800 border-teal-400',
    orange: 'bg-gradient-to-r from-orange-600 to-orange-800 border-orange-400',
    blue: 'bg-gradient-to-r from-blue-600 to-blue-800 border-blue-400',
  }

  const renderNode = (node: any, level: number = 0) => {
    const isExpanded = expandedNodes.includes(node.id)
    const hasChildren = node.children && node.children.length > 0

    return (
      <div key={node.id} className="mb-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className={`${colorClasses[node.color]} text-white rounded-lg shadow-lg p-3 border-2 cursor-pointer hover:scale-[1.02] transition-transform`}
          style={{ marginLeft: `${level * 24}px` }}
          onClick={() => hasChildren && toggleNode(node.id)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <FaUserTie className="text-sm" />
              </div>
              <div className="text-sm font-semibold">{node.title}</div>
            </div>
            {hasChildren && (
              <div className="text-white">
                {isExpanded ? <FaChevronDown /> : <FaChevronRight />}
              </div>
            )}
          </div>
        </motion.div>

        <AnimatePresence>
          {isExpanded && hasChildren && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-2"
            >
              {node.children.map((child: any) => renderNode(child, level + 1))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4 text-center">
          <p className="text-sm text-gray-600">Cliquez sur un poste pour développer/réduire</p>
        </div>
        {renderNode(orgData)}
      </div>
    </div>
  )
}
