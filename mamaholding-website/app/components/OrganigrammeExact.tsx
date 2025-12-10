'use client'

import { motion } from 'framer-motion'
import { FaUserTie } from 'react-icons/fa'

export default function OrganigrammeExact() {
  const Card = ({ 
    title, 
    subtitle, 
    color, 
    delay = 0,
    size = 'normal' 
  }: { 
    title: string
    subtitle?: string
    color: string
    delay?: number
    size?: 'small' | 'normal' | 'large'
  }) => {
    const colorClasses: Record<string, string> = {
      purple: 'from-purple-600 to-purple-800 border-purple-400',
      green: 'from-green-700 to-green-900 border-green-500',
      gray: 'from-gray-600 to-gray-800 border-gray-400',
      teal: 'from-teal-600 to-teal-800 border-teal-400',
      orange: 'from-orange-600 to-orange-800 border-orange-400',
      blue: 'from-blue-600 to-blue-800 border-blue-400',
    }

    const sizeClasses = {
      small: 'w-[130px] p-2',
      normal: 'w-[150px] p-2.5',
      large: 'w-[180px] p-3',
    }

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay }}
        viewport={{ once: true }}
        className={`bg-gradient-to-br ${colorClasses[color]} text-white rounded-lg shadow-lg ${sizeClasses[size]} border-2 hover:scale-105 transition-transform`}
      >
        <div className="flex items-center gap-1.5">
          <div className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
            <FaUserTie className="text-xs" />
          </div>
          <div className="text-[8px] leading-tight">
            <div className="font-bold">{title}</div>
            {subtitle && <div className="opacity-90">{subtitle}</div>}
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 overflow-x-auto">
      <div style={{ minWidth: '1800px' }}>
        
        {/* Niveau 1 - ASSEMBLÉE GÉNÉRALE */}
        <div className="flex justify-center mb-4">
          <div className="flex flex-col items-center">
            <Card title="ASSEMBLÉE" subtitle="GÉNÉRALE" color="purple" delay={0} size="large" />
            <div className="w-0.5 h-8 bg-gray-400"></div>
            <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[8px] border-l-transparent border-r-transparent border-t-gray-400"></div>
          </div>
        </div>

        {/* Niveau 2 - CONSEIL D'ADMINISTRATION */}
        <div className="flex justify-center mb-4">
          <div className="flex flex-col items-center">
            <Card title="CONSEIL" subtitle="D'ADMINISTRATION" color="green" delay={0.1} size="large" />
            <div className="w-0.5 h-8 bg-gray-400"></div>
            <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[8px] border-l-transparent border-r-transparent border-t-gray-400"></div>
          </div>
        </div>

        {/* Niveau 3 - ADMINISTRATEUR DIRECTEUR GÉNÉRAL */}
        <div className="flex justify-center mb-6">
          <div className="flex flex-col items-center">
            <Card title="ADMINISTRATEUR" subtitle="DIRECTEUR GÉNÉRAL" color="gray" delay={0.2} size="large" />
            <div className="w-0.5 h-10 bg-gray-400"></div>
          </div>
        </div>

        {/* Ligne horizontale principale */}
        <div className="relative mb-6">
          <div className="absolute top-0 left-[5%] right-[5%] h-0.5 bg-gray-400"></div>
          
          {/* Connexions verticales vers la ligne */}
          <div className="absolute left-[12%] -top-2 w-0.5 h-2 bg-gray-400"></div>
          <div className="absolute left-[28%] -top-2 w-0.5 h-2 bg-gray-400"></div>
          <div className="absolute left-[50%] -top-2 w-0.5 h-2 bg-gray-400"></div>
          <div className="absolute left-[72%] -top-2 w-0.5 h-2 bg-gray-400"></div>
          <div className="absolute left-[88%] -top-2 w-0.5 h-2 bg-gray-400"></div>
          
          {/* Flèches vers le bas */}
          <div className="absolute left-[12%] -top-2 -translate-x-1/2">
            <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-t-[6px] border-l-transparent border-r-transparent border-t-gray-400"></div>
          </div>
          <div className="absolute left-[28%] -top-2 -translate-x-1/2">
            <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-t-[6px] border-l-transparent border-r-transparent border-t-gray-400"></div>
          </div>
          <div className="absolute left-[50%] -top-2 -translate-x-1/2">
            <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-t-[6px] border-l-transparent border-r-transparent border-t-gray-400"></div>
          </div>
          <div className="absolute left-[72%] -top-2 -translate-x-1/2">
            <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-t-[6px] border-l-transparent border-r-transparent border-t-gray-400"></div>
          </div>
          <div className="absolute left-[88%] -top-2 -translate-x-1/2">
            <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-t-[6px] border-l-transparent border-r-transparent border-t-gray-400"></div>
          </div>
        </div>

        {/* Niveau 4 - 5 Postes principaux */}
        <div className="grid grid-cols-12 gap-3 mb-6 px-[5%]">
          <div className="col-span-2 flex justify-center">
            <Card title="CHEF SERVICE" subtitle="JURIDIQUE" color="teal" delay={0.3} />
          </div>
          <div className="col-span-2 flex justify-center">
            <Card title="ATTACHÉ DE" subtitle="DIRECTION" color="teal" delay={0.35} />
          </div>
          <div className="col-span-4 flex justify-center">
            <div className="flex flex-col items-center">
              <Card title="CHEF DE" subtitle="DÉPARTEMENT COMMERCIAL" color="orange" delay={0.4} />
              <div className="w-0.5 h-8 bg-gray-400"></div>
              <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-t-[6px] border-l-transparent border-r-transparent border-t-gray-400"></div>
            </div>
          </div>
          <div className="col-span-2 flex justify-center">
            <Card title="CHEF SERVICE" subtitle="INFORMATIQUE" color="blue" delay={0.45} />
          </div>
          <div className="col-span-2 flex justify-center">
            <Card title="CHEF SERVICE DE" subtitle="COMPTABILITÉ" color="blue" delay={0.5} />
          </div>
        </div>

        {/* Postes latéraux avec flèches */}
        <div className="relative mb-6 px-[3%]">
          <div className="grid grid-cols-12 gap-2">
            {/* Gauche */}
            <div className="col-span-2 space-y-2">
              <Card title="CHEF SERVICE" subtitle="APPROVISIONNEMENT" color="teal" delay={0.55} size="small" />
              <div className="relative">
                <Card title="CHEF SERVICE" subtitle="APPROVISIONNEMENT" color="teal" delay={0.6} size="small" />
                {/* Flèche vers CHEF SERVICE JURIDIQUE */}
                <div className="absolute right-0 top-1/2 w-12 h-0.5 bg-gray-400"></div>
                <div className="absolute right-12 top-1/2 -translate-y-1/2">
                  <div className="w-0 h-0 border-t-[3px] border-b-[3px] border-l-[6px] border-t-transparent border-b-transparent border-l-gray-400"></div>
                </div>
              </div>
            </div>

            <div className="col-span-2 space-y-2">
              <div className="h-8"></div>
              <div className="relative">
                <Card title="DIRECTEUR" subtitle="GÉNÉRAL ADJOINT" color="teal" delay={0.65} size="small" />
                {/* Flèche vers ATTACHÉ DE DIRECTION */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full w-0.5 h-12 bg-gray-400"></div>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full -translate-y-[46px]">
                  <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-b-[6px] border-l-transparent border-r-transparent border-b-gray-400"></div>
                </div>
              </div>
            </div>

            <div className="col-span-4"></div>

            {/* Droite */}
            <div className="col-span-2 space-y-2">
              <Card title="CHEF SERVICE" subtitle="INFORMATIQUE" color="blue" delay={0.7} size="small" />
              <div className="relative">
                <Card title="CHEF SERVICE DE" subtitle="L'AUDIT INTERNE" color="blue" delay={0.75} size="small" />
                {/* Flèche vers CHEF SERVICE DE COMPTABILITÉ */}
                <div className="absolute left-0 top-1/2 w-12 h-0.5 bg-gray-400 -translate-x-full"></div>
                <div className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2">
                  <div className="w-0 h-0 border-t-[3px] border-b-[3px] border-r-[6px] border-t-transparent border-b-transparent border-r-gray-400"></div>
                </div>
              </div>
            </div>

            <div className="col-span-2">
              <div className="relative">
                <Card title="CHEF SERVICE" subtitle="SÉCURITÉ" color="teal" delay={0.8} size="small" />
                {/* Flèche vers DIRECTEUR GÉNÉRAL ADJOINT */}
                <div className="absolute right-full top-1/2 w-32 h-0.5 bg-gray-400"></div>
                <div className="absolute right-full top-1/2 -translate-y-1/2 translate-x-1">
                  <div className="w-0 h-0 border-t-[3px] border-b-[3px] border-r-[6px] border-t-transparent border-b-transparent border-r-gray-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Niveau 5 - 6 Départements sous Commercial */}
        <div className="grid grid-cols-6 gap-2 mb-4 px-[10%]">
          <div className="flex flex-col items-center">
            <Card title="CHEF DE DÉPARTEMENT" subtitle="COMPTABILITÉ ET FISCALITÉ" color="orange" delay={0.85} size="small" />
            <div className="w-0.5 h-6 bg-gray-400"></div>
            <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-t-[6px] border-l-transparent border-r-transparent border-t-gray-400"></div>
          </div>
          <div className="flex flex-col items-center">
            <Card title="CHEF DE DÉPARTEMENT" subtitle="APPROVISIONNEMENT" color="orange" delay={0.9} size="small" />
            <div className="w-0.5 h-6 bg-gray-400"></div>
            <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-t-[6px] border-l-transparent border-r-transparent border-t-gray-400"></div>
          </div>
          <div className="flex flex-col items-center">
            <Card title="CHEF DE DÉPARTEMENT" subtitle="FINANCIER" color="orange" delay={0.95} size="small" />
            <div className="w-0.5 h-6 bg-gray-400"></div>
            <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-t-[6px] border-l-transparent border-r-transparent border-t-gray-400"></div>
          </div>
          <div className="flex flex-col items-center">
            <Card title="CHEF DE DÉPARTEMENT" subtitle="RESSOURCES HUMAINES ET ADMINISTRATION" color="orange" delay={1} size="small" />
            <div className="w-0.5 h-6 bg-gray-400"></div>
            <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-t-[6px] border-l-transparent border-r-transparent border-t-gray-400"></div>
          </div>
          <div className="flex flex-col items-center">
            <Card title="CHEF DE DÉPARTEMENT" subtitle="LOGISTIQUE" color="orange" delay={1.05} size="small" />
            <div className="w-0.5 h-6 bg-gray-400"></div>
            <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-t-[6px] border-l-transparent border-r-transparent border-t-gray-400"></div>
          </div>
          <div className="flex flex-col items-center">
            <Card title="CHEF DE" subtitle="DÉPARTEMENT MARKETING" color="orange" delay={1.1} size="small" />
            <div className="w-0.5 h-6 bg-gray-400"></div>
            <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-t-[6px] border-l-transparent border-r-transparent border-t-gray-400"></div>
          </div>
        </div>

        {/* Niveau 6 - Services sous chaque département */}
        <div className="grid grid-cols-6 gap-2 px-[10%]">
          {/* Colonne 1 - Comptabilité */}
          <div className="space-y-1.5">
            {['CHEF DE SERVICE VENTES', 'CHEF DE SERVICE MARKETING'].map((s, i) => (
              <div key={i} className="bg-gradient-to-br from-teal-500 to-teal-700 text-white rounded-md shadow-sm p-1.5 text-center">
                <div className="text-[7px] font-semibold leading-tight">{s}</div>
              </div>
            ))}
          </div>

          {/* Colonne 2 - Approvisionnement */}
          <div className="space-y-1.5">
            {[
              'CHEF DE SERVICE LOGISTIQUE ET TRANSPORT',
              'CHEF SERVICE EXPLOITATION',
              'CHEF SERVICE MAINTENANCE',
              'CHEF SERVICE ACHATS',
              'CHEF SERVICE STOCK',
              'CHEF DE SERVICE DES PLANIFICATIONS DES APPROVISIONNEMENTS'
            ].map((s, i) => (
              <div key={i} className="bg-gradient-to-br from-teal-500 to-teal-700 text-white rounded-md shadow-sm p-1.5 text-center">
                <div className="text-[7px] font-semibold leading-tight">{s}</div>
              </div>
            ))}
          </div>

          {/* Colonne 3 - Financier */}
          <div className="space-y-1.5">
            {[
              'CHEF SERVICE FINANCIER',
              'CHEF SERVICE TRÉSORERIE',
              'SERVICE PAIE & IMPÔTS',
              'CHEF SERVICE COMPTABLE'
            ].map((s, i) => (
              <div key={i} className="bg-gradient-to-br from-teal-500 to-teal-700 text-white rounded-md shadow-sm p-1.5 text-center">
                <div className="text-[7px] font-semibold leading-tight">{s}</div>
              </div>
            ))}
          </div>

          {/* Colonne 4 - RH */}
          <div className="space-y-1.5">
            {[
              'CHEF DE SERVICE CLIENTÈLE & DISTRIBUTION',
              'CHEF SERVICE EXPLOITATION',
              'CHEF SERVICE DES MOYENS GÉNÉRAUX',
              'CHEF SERVICE RESSOURCES HUMAINES',
              'CHEF SERVICE CONTRÔLE GESTION'
            ].map((s, i) => (
              <div key={i} className="bg-gradient-to-br from-teal-500 to-teal-700 text-white rounded-md shadow-sm p-1.5 text-center">
                <div className="text-[7px] font-semibold leading-tight">{s}</div>
              </div>
            ))}
          </div>

          {/* Colonne 5 - Logistique */}
          <div className="space-y-1.5">
            {[
              'CHEF SERVICE EXPLOITATION',
              'CHEF SERVICE MAINTENANCE VÉHICULES'
            ].map((s, i) => (
              <div key={i} className="bg-gradient-to-br from-teal-500 to-teal-700 text-white rounded-md shadow-sm p-1.5 text-center">
                <div className="text-[7px] font-semibold leading-tight">{s}</div>
              </div>
            ))}
          </div>

          {/* Colonne 6 - Marketing */}
          <div className="space-y-1.5">
            {/* Services marketing si nécessaire */}
          </div>
        </div>

        {/* Légende */}
        <div className="mt-8 flex justify-center gap-6 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-gradient-to-br from-purple-600 to-purple-800"></div>
            <span className="text-xs text-gray-700">Direction Générale</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-gradient-to-br from-orange-600 to-orange-800"></div>
            <span className="text-xs text-gray-700">Départements</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-gradient-to-br from-teal-600 to-teal-800"></div>
            <span className="text-xs text-gray-700">Services</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-gradient-to-br from-blue-600 to-blue-800"></div>
            <span className="text-xs text-gray-700">Support</span>
          </div>
        </div>
      </div>
    </div>
  )
}
