'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaUserTie, FaBuilding, FaUsers, FaCog } from 'react-icons/fa'

export default function OrganigrammeTabs() {
  const [activeTab, setActiveTab] = useState('direction')

  const tabs = [
    { id: 'direction', label: 'Direction Générale', icon: <FaBuilding /> },
    { id: 'services', label: 'Services Centraux', icon: <FaCog /> },
    { id: 'departements', label: 'Départements', icon: <FaUsers /> },
    { id: 'operationnel', label: 'Opérationnel', icon: <FaUserTie /> }
  ]

  const content: Record<string, any> = {
    direction: {
      title: 'Direction Générale',
      nodes: [
        {
          title: 'ASSEMBLÉE GÉNÉRALE',
          color: 'purple',
          description: 'Organe suprême de décision composé de tous les actionnaires',
          responsibilities: ['Approbation des comptes', 'Nomination des administrateurs', 'Décisions stratégiques majeures']
        },
        {
          title: 'CONSEIL D\'ADMINISTRATION',
          color: 'green',
          description: 'Organe de gouvernance et de contrôle stratégique',
          responsibilities: ['Définition de la stratégie', 'Contrôle de la gestion', 'Nomination de la direction']
        },
        {
          title: 'ADMINISTRATEUR DIRECTEUR GÉNÉRAL',
          color: 'gray',
          description: 'Direction opérationnelle et stratégique du groupe',
          responsibilities: ['Management global', 'Exécution de la stratégie', 'Représentation de l\'entreprise']
        }
      ]
    },
    services: {
      title: 'Services Centraux',
      nodes: [
        {
          title: 'CHEF SERVICE JURIDIQUE',
          color: 'teal',
          description: 'Gestion des affaires juridiques et conformité',
          responsibilities: ['Contrats', 'Contentieux', 'Conformité réglementaire']
        },
        {
          title: 'ATTACHÉ DE DIRECTION',
          color: 'teal',
          description: 'Support à la direction générale',
          responsibilities: ['Coordination', 'Communication interne', 'Suivi des projets']
        },
        {
          title: 'DIRECTEUR GÉNÉRAL ADJOINT',
          color: 'teal',
          description: 'Assistance à la direction générale',
          responsibilities: ['Suppléance DG', 'Projets spéciaux', 'Coordination']
        },
        {
          title: 'CHEF SERVICE INFORMATIQUE',
          color: 'blue',
          description: 'Gestion des systèmes d\'information',
          responsibilities: ['Infrastructure IT', 'Sécurité', 'Support technique']
        },
        {
          title: 'CHEF SERVICE DE COMPTABILITÉ',
          color: 'blue',
          description: 'Gestion comptable et financière',
          responsibilities: ['Comptabilité générale', 'Reporting', 'Contrôle']
        }
      ]
    },
    departements: {
      title: 'Départements',
      nodes: [
        {
          title: 'CHEF DE DÉPARTEMENT COMMERCIAL',
          color: 'orange',
          description: 'Pilotage de l\'activité commerciale',
          responsibilities: ['Stratégie commerciale', 'Ventes', 'Marketing']
        },
        {
          title: 'CHEF DE DÉPARTEMENT COMPTABILITÉ ET FISCALITÉ',
          color: 'orange',
          description: 'Gestion comptable et fiscale',
          responsibilities: ['Comptabilité', 'Fiscalité', 'Audit']
        },
        {
          title: 'CHEF DE DÉPARTEMENT APPROVISIONNEMENT',
          color: 'orange',
          description: 'Gestion des achats et approvisionnements',
          responsibilities: ['Achats', 'Stocks', 'Fournisseurs']
        },
        {
          title: 'CHEF DE DÉPARTEMENT FINANCIER',
          color: 'orange',
          description: 'Gestion financière et trésorerie',
          responsibilities: ['Trésorerie', 'Finance', 'Budget']
        },
        {
          title: 'CHEF DE DÉPARTEMENT RH ET ADMINISTRATION',
          color: 'orange',
          description: 'Gestion des ressources humaines',
          responsibilities: ['Recrutement', 'Formation', 'Paie']
        },
        {
          title: 'CHEF DE DÉPARTEMENT LOGISTIQUE',
          color: 'orange',
          description: 'Gestion de la logistique et transport',
          responsibilities: ['Transport', 'Entrepôts', 'Distribution']
        }
      ]
    },
    operationnel: {
      title: 'Services Opérationnels',
      nodes: [
        {
          title: 'CHEF DE SERVICE VENTES',
          color: 'teal',
          description: 'Gestion des ventes',
          responsibilities: ['Équipe commerciale', 'Objectifs', 'Clients']
        },
        {
          title: 'CHEF DE SERVICE MARKETING',
          color: 'teal',
          description: 'Stratégie marketing',
          responsibilities: ['Communication', 'Promotion', 'Marque']
        },
        {
          title: 'CHEF SERVICE LOGISTIQUE ET TRANSPORT',
          color: 'teal',
          description: 'Gestion logistique',
          responsibilities: ['Flotte', 'Livraisons', 'Planning']
        },
        {
          title: 'CHEF SERVICE EXPLOITATION',
          color: 'teal',
          description: 'Opérations quotidiennes',
          responsibilities: ['Production', 'Qualité', 'Efficacité']
        },
        {
          title: 'CHEF SERVICE MAINTENANCE',
          color: 'teal',
          description: 'Maintenance des équipements',
          responsibilities: ['Entretien', 'Réparations', 'Préventif']
        },
        {
          title: 'CHEF SERVICE ACHATS',
          color: 'teal',
          description: 'Gestion des achats',
          responsibilities: ['Négociation', 'Commandes', 'Fournisseurs']
        }
      ]
    }
  }

  const colorClasses: Record<string, string> = {
    purple: 'from-purple-600 to-purple-800',
    green: 'from-green-600 to-green-800',
    gray: 'from-gray-600 to-gray-800',
    teal: 'from-teal-600 to-teal-800',
    orange: 'from-orange-600 to-orange-800',
    blue: 'from-blue-600 to-blue-800',
  }

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-300 pb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-primary-red to-primary-green text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-6">{content[activeTab].title}</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {content[activeTab].nodes.map((node: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`bg-gradient-to-br ${colorClasses[node.color]} text-white rounded-xl shadow-lg p-5 hover:scale-105 transition-transform`}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaUserTie className="text-xl" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-sm mb-1">{node.title}</h4>
                  <p className="text-xs opacity-90">{node.description}</p>
                </div>
              </div>
              
              <div className="border-t border-white/20 pt-3 mt-3">
                <div className="text-xs font-semibold mb-2 opacity-80">Responsabilités :</div>
                <ul className="space-y-1">
                  {node.responsibilities.map((resp: string, idx: number) => (
                    <li key={idx} className="text-xs opacity-90 flex items-start gap-2">
                      <span className="text-white/60">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
