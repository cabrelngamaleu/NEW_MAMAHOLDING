'use client'

import { motion } from 'framer-motion'
import { FaUserTie } from 'react-icons/fa'

export default function OrganigrammeTable() {
  const Card = ({ title, subtitle, color, delay = 0 }: { title: string; subtitle?: string; color: string; delay?: number }) => {
    const colorClasses: Record<string, string> = {
      purple: 'from-purple-600 to-purple-800 border-purple-400',
      green: 'from-green-600 to-green-800 border-green-400',
      gray: 'from-gray-600 to-gray-800 border-gray-400',
      teal: 'from-teal-600 to-teal-800 border-teal-400',
      orange: 'from-orange-600 to-orange-800 border-orange-400',
      blue: 'from-blue-600 to-blue-800 border-blue-400',
    }

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay }}
        viewport={{ once: true }}
        className={`bg-gradient-to-br ${colorClasses[color]} text-white rounded-lg shadow-lg p-2.5 border-2 hover:scale-105 transition-transform cursor-pointer`}
      >
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
            <FaUserTie className="text-xs" />
          </div>
          <div className="text-[9px] leading-tight">
            <div className="font-bold">{title}</div>
            {subtitle && <div className="opacity-90">{subtitle}</div>}
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 overflow-x-auto">
      <div className="min-w-[1600px] space-y-6">
        
        {/* Niveau 1 - ASSEMBLÉE GÉNÉRALE */}
        <div className="flex justify-center">
          <div className="w-[200px]">
            <Card title="ASSEMBLÉE" subtitle="GÉNÉRALE" color="purple" delay={0} />
            <div className="h-8 w-0.5 bg-gray-400 mx-auto"></div>
            <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-gray-400 mx-auto"></div>
          </div>
        </div>

        {/* Niveau 2 - CONSEIL D'ADMINISTRATION */}
        <div className="flex justify-center">
          <div className="w-[200px]">
            <Card title="CONSEIL" subtitle="D'ADMINISTRATION" color="green" delay={0.1} />
            <div className="h-8 w-0.5 bg-gray-400 mx-auto"></div>
            <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-gray-400 mx-auto"></div>
          </div>
        </div>

        {/* Niveau 3 - ADMINISTRATEUR DIRECTEUR GÉNÉRAL */}
        <div className="flex justify-center">
          <div className="w-[220px]">
            <Card title="ADMINISTRATEUR" subtitle="DIRECTEUR GÉNÉRAL" color="gray" delay={0.2} />
            <div className="h-12 w-0.5 bg-gray-400 mx-auto"></div>
          </div>
        </div>

        {/* Ligne horizontale de connexion */}
        <div className="relative h-0.5 bg-gray-400 mx-[10%]">
          <div className="absolute -top-2 left-[12%] w-0.5 h-4 bg-gray-400"></div>
          <div className="absolute -top-2 left-[30%] w-0.5 h-4 bg-gray-400"></div>
          <div className="absolute -top-2 left-[50%] w-0.5 h-4 bg-gray-400"></div>
          <div className="absolute -top-2 left-[70%] w-0.5 h-4 bg-gray-400"></div>
          <div className="absolute -top-2 left-[88%] w-0.5 h-4 bg-gray-400"></div>
        </div>

        {/* Niveau 4 - 5 Postes principaux */}
        <div className="grid grid-cols-5 gap-4 px-[10%]">
          <Card title="CHEF SERVICE" subtitle="JURIDIQUE" color="teal" delay={0.3} />
          <Card title="ATTACHÉ DE" subtitle="DIRECTION" color="teal" delay={0.35} />
          <div>
            <Card title="CHEF DE DÉPARTEMENT" subtitle="COMMERCIAL" color="orange" delay={0.4} />
            <div className="h-8 w-0.5 bg-gray-400 mx-auto"></div>
            <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-gray-400 mx-auto"></div>
          </div>
          <Card title="CHEF SERVICE" subtitle="INFORMATIQUE" color="blue" delay={0.45} />
          <Card title="CHEF SERVICE DE" subtitle="COMPTABILITÉ" color="blue" delay={0.5} />
        </div>

        {/* Postes latéraux */}
        <div className="grid grid-cols-12 gap-3 px-4">
          <div className="col-span-2">
            <Card title="CHEF SERVICE" subtitle="APPROVISIONNEMENT" color="teal" delay={0.55} />
          </div>
          <div className="col-span-2">
            <Card title="DIRECTEUR" subtitle="GÉNÉRAL ADJOINT" color="teal" delay={0.6} />
          </div>
          <div className="col-span-4"></div>
          <div className="col-span-2">
            <Card title="CHEF SERVICE" subtitle="INFORMATIQUE" color="blue" delay={0.65} />
          </div>
          <div className="col-span-2">
            <Card title="CHEF SERVICE" subtitle="SÉCURITÉ" color="teal" delay={0.7} />
          </div>
        </div>

        {/* Niveau 5 - 5 Départements */}
        <div className="grid grid-cols-5 gap-3 px-[8%]">
          <div>
            <Card title="CHEF DE DÉPARTEMENT" subtitle="COMPTABILITÉ ET FISCALITÉ" color="orange" delay={0.75} />
            <div className="h-6 w-0.5 bg-gray-400 mx-auto"></div>
          </div>
          <div>
            <Card title="CHEF DE DÉPARTEMENT" subtitle="APPROVISIONNEMENT" color="orange" delay={0.8} />
            <div className="h-6 w-0.5 bg-gray-400 mx-auto"></div>
          </div>
          <div>
            <Card title="CHEF DE DÉPARTEMENT" subtitle="FINANCIER" color="orange" delay={0.85} />
            <div className="h-6 w-0.5 bg-gray-400 mx-auto"></div>
          </div>
          <div>
            <Card title="CHEF DE DÉPARTEMENT" subtitle="RH ET ADMINISTRATION" color="orange" delay={0.9} />
            <div className="h-6 w-0.5 bg-gray-400 mx-auto"></div>
          </div>
          <div>
            <Card title="CHEF DE DÉPARTEMENT" subtitle="LOGISTIQUE" color="orange" delay={0.95} />
            <div className="h-6 w-0.5 bg-gray-400 mx-auto"></div>
          </div>
        </div>

        {/* Niveau 6 - Services */}
        <div className="grid grid-cols-5 gap-3 px-[8%]">
          {/* Colonne 1 - Comptabilité */}
          <div className="space-y-2">
            <div className="bg-gradient-to-br from-teal-500 to-teal-700 text-white rounded-md shadow-sm p-2 text-center">
              <div className="text-[8px] font-semibold">CHEF DE SERVICE VENTES</div>
            </div>
            <div className="bg-gradient-to-br from-teal-500 to-teal-700 text-white rounded-md shadow-sm p-2 text-center">
              <div className="text-[8px] font-semibold">CHEF DE SERVICE MARKETING</div>
            </div>
          </div>

          {/* Colonne 2 - Approvisionnement */}
          <div className="space-y-2">
            {['LOGISTIQUE ET TRANSPORT', 'EXPLOITATION', 'MAINTENANCE', 'ACHATS', 'STOCK', 'PLANIFICATIONS'].map((service, idx) => (
              <div key={idx} className="bg-gradient-to-br from-teal-500 to-teal-700 text-white rounded-md shadow-sm p-2 text-center">
                <div className="text-[8px] font-semibold">{service}</div>
              </div>
            ))}
          </div>

          {/* Colonne 3 - Financier */}
          <div className="space-y-2">
            {['SERVICE FINANCIER', 'TRÉSORERIE', 'PAIE & IMPÔTS', 'COMPTABLE'].map((service, idx) => (
              <div key={idx} className="bg-gradient-to-br from-teal-500 to-teal-700 text-white rounded-md shadow-sm p-2 text-center">
                <div className="text-[8px] font-semibold">{service}</div>
              </div>
            ))}
          </div>

          {/* Colonne 4 - RH */}
          <div className="space-y-2">
            {['CLIENTÈLE & DISTRIBUTION', 'EXPLOITATION', 'MOYENS GÉNÉRAUX', 'RESSOURCES HUMAINES', 'CONTRÔLE GESTION'].map((service, idx) => (
              <div key={idx} className="bg-gradient-to-br from-teal-500 to-teal-700 text-white rounded-md shadow-sm p-2 text-center">
                <div className="text-[8px] font-semibold">{service}</div>
              </div>
            ))}
          </div>

          {/* Colonne 5 - Logistique */}
          <div className="space-y-2">
            {['EXPLOITATION', 'MAINTENANCE VÉHICULES'].map((service, idx) => (
              <div key={idx} className="bg-gradient-to-br from-teal-500 to-teal-700 text-white rounded-md shadow-sm p-2 text-center">
                <div className="text-[8px] font-semibold">{service}</div>
              </div>
            ))}
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
