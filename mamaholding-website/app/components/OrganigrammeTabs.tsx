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
          description: 'Organe suprême de décision',
          responsibilities: ['Approbation des comptes', 'Nomination des administrateurs', 'Décisions stratégiques']
        },
        {
          title: 'CONSEIL D\'ADMINISTRATION',
          color: 'green',
          description: 'Organe de gouvernance stratégique',
          responsibilities: ['Stratégie globale', 'Contrôle de gestion', 'Nomination direction']
        },
        {
          title: 'ADMINISTRATEUR DIRECTEUR GÉNÉRAL',
          color: 'gray',
          description: 'Direction opérationnelle du groupe',
          responsibilities: ['Management global', 'Exécution stratégie', 'Représentation']
        },
        {
          title: 'DIRECTEUR GÉNÉRAL ADJOINT',
          color: 'teal',
          description: 'Assistance direction générale',
          responsibilities: ['Suppléance DG', 'Projets spéciaux', 'Coordination']
        }
      ]
    },
    services: {
      title: 'Services Support',
      nodes: [
        {
          title: 'CHEF SERVICE JURIDIQUE',
          color: 'teal',
          description: 'Affaires juridiques et conformité',
          responsibilities: ['Contrats', 'Contentieux', 'Conformité']
        },
        {
          title: 'ATTACHÉ DE DIRECTION',
          color: 'teal',
          description: 'Support direction générale',
          responsibilities: ['Coordination', 'Communication', 'Projets']
        },
        {
          title: 'CHEF SERVICE INFORMATIQUE',
          color: 'blue',
          description: 'Systèmes d\'information',
          responsibilities: ['Infrastructure IT', 'Sécurité', 'Support']
        },
        {
          title: 'CHEF SERVICE DE COMPTABILITÉ',
          color: 'blue',
          description: 'Comptabilité générale',
          responsibilities: ['Comptabilité', 'Reporting', 'Contrôle']
        },
        {
          title: 'CHEF SERVICE APPROVISIONNEMENT',
          color: 'teal',
          description: 'Gestion approvisionnements',
          responsibilities: ['Achats', 'Stocks', 'Planning']
        },
        {
          title: 'CHEF SERVICE DE L\'AUDIT INTERNE',
          color: 'blue',
          description: 'Audit et contrôle interne',
          responsibilities: ['Audits', 'Contrôles', 'Recommandations']
        },
        {
          title: 'CHEF SERVICE SÉCURITÉ',
          color: 'teal',
          description: 'Sécurité et sûreté',
          responsibilities: ['Sécurité physique', 'Sûreté', 'Surveillance']
        }
      ]
    },
    departements: {
      title: 'Départements',
      nodes: [
        {
          title: 'CHEF DE DÉPARTEMENT COMMERCIAL',
          color: 'orange',
          description: 'Direction commerciale',
          responsibilities: ['Ventes', 'Marketing', 'Stratégie commerciale']
        },
        {
          title: 'CHEF DE DÉPARTEMENT COMPTABILITÉ ET FISCALITÉ',
          color: 'orange',
          description: 'Comptabilité et fiscalité',
          responsibilities: ['Comptabilité', 'Fiscalité', 'Audits']
        },
        {
          title: 'CHEF DE DÉPARTEMENT APPROVISIONNEMENT',
          color: 'orange',
          description: 'Achats et approvisionnements',
          responsibilities: ['Achats', 'Stocks', 'Logistique']
        },
        {
          title: 'CHEF DE DÉPARTEMENT FINANCIER',
          color: 'orange',
          description: 'Gestion financière',
          responsibilities: ['Trésorerie', 'Finance', 'Budget']
        },
        {
          title: 'CHEF DE DÉPARTEMENT RH ET ADMINISTRATION',
          color: 'orange',
          description: 'Ressources humaines',
          responsibilities: ['RH', 'Formation', 'Administration']
        },
        {
          title: 'CHEF DE DÉPARTEMENT LOGISTIQUE',
          color: 'orange',
          description: 'Logistique et transport',
          responsibilities: ['Transport', 'Entrepôts', 'Distribution']
        },
        {
          title: 'CHEF DE DÉPARTEMENT MARKETING',
          color: 'orange',
          description: 'Marketing et communication',
          responsibilities: ['Marketing', 'Communication', 'Digital']
        }
      ]
    },
    operationnel: {
      title: 'Services Opérationnels',
      nodes: [
        { title: 'CHEF DE SERVICE VENTES', color: 'teal', description: 'Gestion des ventes', responsibilities: ['Équipe commerciale', 'Objectifs', 'Clients'] },
        { title: 'CHEF DE SERVICE MARKETING', color: 'teal', description: 'Opérations marketing', responsibilities: ['Campagnes', 'Marque', 'Communication'] },
        { title: 'CHEF DE SERVICE LOGISTIQUE ET TRANSPORT', color: 'teal', description: 'Logistique transport', responsibilities: ['Flotte', 'Livraisons', 'Planning'] },
        { title: 'CHEF SERVICE EXPLOITATION', color: 'teal', description: 'Exploitation', responsibilities: ['Opérations', 'Production', 'Qualité'] },
        { title: 'CHEF SERVICE MAINTENANCE', color: 'teal', description: 'Maintenance', responsibilities: ['Entretien', 'Réparations', 'Préventif'] },
        { title: 'CHEF SERVICE ACHATS', color: 'teal', description: 'Achats', responsibilities: ['Négociation', 'Commandes', 'Fournisseurs'] },
        { title: 'CHEF SERVICE STOCK', color: 'teal', description: 'Gestion stocks', responsibilities: ['Inventaire', 'Réassort', 'Optimisation'] },
        { title: 'CHEF DE SERVICE DES PLANIFICATIONS DES APPROVISIONNEMENTS', color: 'teal', description: 'Planification', responsibilities: ['Planning', 'Prévisions', 'Coordination'] },
        { title: 'CHEF SERVICE FINANCIER', color: 'teal', description: 'Gestion financière', responsibilities: ['Finance', 'Analyse', 'Budget'] },
        { title: 'CHEF SERVICE TRÉSORERIE', color: 'teal', description: 'Trésorerie', responsibilities: ['Cash', 'Paiements', 'Prévisions'] },
        { title: 'SERVICE PAIE & IMPÔTS', color: 'teal', description: 'Paie et impôts', responsibilities: ['Paie', 'Déclarations', 'Social'] },
        { title: 'CHEF SERVICE COMPTABLE', color: 'teal', description: 'Comptabilité', responsibilities: ['Écritures', 'Rapprochements', 'Clôtures'] },
        { title: 'CHEF DE SERVICE CLIENTÈLE & DISTRIBUTION', color: 'teal', description: 'Clientèle', responsibilities: ['Service client', 'Distribution', 'SAV'] },
        { title: 'CHEF SERVICE DES MOYENS GÉNÉRAUX', color: 'teal', description: 'Moyens généraux', responsibilities: ['Locaux', 'Fournitures', 'Services'] },
        { title: 'CHEF SERVICE RESSOURCES HUMAINES', color: 'teal', description: 'RH', responsibilities: ['Recrutement', 'Formation', 'Gestion RH'] },
        { title: 'CHEF SERVICE CONTRÔLE GESTION', color: 'teal', description: 'Contrôle gestion', responsibilities: ['Tableaux de bord', 'KPIs', 'Analyse'] },
        { title: 'CHEF SERVICE MAINTENANCE VÉHICULES', color: 'teal', description: 'Maintenance véhicules', responsibilities: ['Entretien flotte', 'Réparations', 'Gestion parc'] }
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
