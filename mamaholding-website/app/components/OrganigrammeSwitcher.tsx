'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaTh, FaStream, FaLayerGroup } from 'react-icons/fa'
import OrganigrammeCards from './OrganigrammeCards'
import OrganigrammeTimeline from './OrganigrammeTimeline'
import OrganigrammeTabs from './OrganigrammeTabs'

export default function OrganigrammeSwitcher() {
  const [viewMode, setViewMode] = useState<'cards' | 'timeline' | 'tabs'>('cards')

  const viewModes = [
    { 
      id: 'cards' as const, 
      label: 'Vue Cartes', 
      icon: <FaTh />,
      description: 'Grille de cartes interactives'
    },
    { 
      id: 'timeline' as const, 
      label: 'Vue Timeline', 
      icon: <FaStream />,
      description: 'Chronologie par niveaux'
    },
    { 
      id: 'tabs' as const, 
      label: 'Vue Onglets', 
      icon: <FaLayerGroup />,
      description: 'Organisation par catégories'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Sélecteur de vue */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Mode d'affichage</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {viewModes.map((mode) => (
            <motion.button
              key={mode.id}
              onClick={() => setViewMode(mode.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-6 rounded-xl border-2 transition-all ${
                viewMode === mode.id
                  ? 'bg-gradient-to-r from-primary-red to-primary-green text-white border-transparent shadow-lg'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-primary-red'
              }`}
            >
              <div className="flex flex-col items-center gap-3">
                <div className="text-3xl">{mode.icon}</div>
                <div className="font-bold text-base">{mode.label}</div>
                <div className="text-sm opacity-80 text-center">{mode.description}</div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Affichage du composant sélectionné */}
      <motion.div
        key={viewMode}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {viewMode === 'cards' && <OrganigrammeCards />}
        {viewMode === 'timeline' && <OrganigrammeTimeline />}
        {viewMode === 'tabs' && <OrganigrammeTabs />}
      </motion.div>
    </div>
  )
}
