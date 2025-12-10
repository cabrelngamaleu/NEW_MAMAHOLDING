'use client'

import { motion } from 'framer-motion'
import { FaUserTie, FaUsers } from 'react-icons/fa'

export default function OrganigrammeSimple() {
  return (
    <div className="max-w-[1400px] mx-auto overflow-x-auto pb-8 px-4">
      <div className="min-w-[1200px] space-y-8">
        
        {/* Niveau 1 - ASSEMBLÉE GÉNÉRALE */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white rounded-lg shadow-xl p-4 w-[220px] border-2 border-purple-400">
              <div className="flex items-center gap-2 justify-center">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaUserTie className="text-lg" />
                </div>
                <div className="text-xs text-center">
                  <div className="font-bold">ASSEMBLÉE</div>
                  <div>GÉNÉRALE</div>
                </div>
              </div>
            </div>
            {/* Flèche vers le bas */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full w-0.5 h-8 bg-gray-400"></div>
            <div className="absolute left-1/2 -translate-x-1/2 top-full translate-y-[30px] w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-gray-400"></div>
          </motion.div>
        </div>

        {/* Niveau 2 - CONSEIL D'ADMINISTRATION */}
        <div className="flex justify-center mt-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-green-600 to-green-800 text-white rounded-lg shadow-xl p-4 w-[220px] border-2 border-green-400">
              <div className="flex items-center gap-2 justify-center">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaUserTie className="text-lg" />
                </div>
                <div className="text-xs text-center">
                  <div className="font-bold">CONSEIL</div>
                  <div>D'ADMINISTRATION</div>
                </div>
              </div>
            </div>
            {/* Flèche vers le bas */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full w-0.5 h-8 bg-gray-400"></div>
            <div className="absolute left-1/2 -translate-x-1/2 top-full translate-y-[30px] w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-gray-400"></div>
          </motion.div>
        </div>

        {/* Niveau 3 - ADMINISTRATEUR DIRECTEUR GÉNÉRAL */}
        <div className="flex justify-center mt-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-700 to-gray-900 text-white rounded-lg shadow-xl p-4 w-[260px] border-2 border-gray-500">
              <div className="flex items-center gap-2 justify-center">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaUserTie className="text-lg" />
                </div>
                <div className="text-xs text-center">
                  <div className="font-bold">ADMINISTRATEUR</div>
                  <div>DIRECTEUR GÉNÉRAL</div>
                </div>
              </div>
            </div>
            {/* Flèche vers le bas */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full w-0.5 h-12 bg-gray-400"></div>
            <div className="absolute left-1/2 -translate-x-1/2 top-full translate-y-[46px] w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-gray-400"></div>
          </motion.div>
        </div>

        {/* Niveau 4 - Ligne horizontale avec connexions */}
        <div className="relative mt-16">
          {/* Ligne horizontale principale */}
          <div className="absolute top-0 left-[10%] right-[10%] h-0.5 bg-gray-400"></div>
          
          <div className="flex justify-center gap-6">
            {[
              { title: 'CHEF SERVICE', subtitle: 'JURIDIQUE', color: 'from-teal-600 to-teal-800' },
              { title: 'ATTACHÉ DE', subtitle: 'DIRECTION', color: 'from-teal-600 to-teal-800' },
              { title: 'CHEF DE DÉPARTEMENT', subtitle: 'COMMERCIAL', color: 'from-orange-600 to-orange-800' },
              { title: 'CHEF SERVICE', subtitle: 'INFORMATIQUE', color: 'from-blue-600 to-blue-800' },
              { title: 'CHEF SERVICE DE', subtitle: 'COMPTABILITÉ', color: 'from-blue-600 to-blue-800' },
            ].map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Ligne verticale vers la ligne horizontale */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full w-0.5 h-12 bg-gray-400"></div>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full -translate-y-[46px] w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-gray-400"></div>
                
                <div className={`bg-gradient-to-br ${dept.color} text-white rounded-lg shadow-lg p-3 w-[160px] border-2 border-white/30 hover:scale-105 transition-transform`}>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaUserTie className="text-sm" />
                    </div>
                    <div className="text-[10px] leading-tight">
                      <div className="font-bold">{dept.title}</div>
                      <div>{dept.subtitle}</div>
                    </div>
                  </div>
                </div>
                
                {/* Flèche vers le bas pour Chef de Département Commercial */}
                {index === 2 && (
                  <>
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-0.5 h-12 bg-gray-400"></div>
                    <div className="absolute left-1/2 -translate-x-1/2 top-full translate-y-[46px] w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-gray-400"></div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Postes latéraux - DIRECTEUR GÉNÉRAL ADJOINT et CHEF SERVICE SÉCURITÉ */}
        <div className="flex justify-between px-20 relative" style={{ marginTop: '-40px' }}>
          {/* Gauche - DIRECTEUR GÉNÉRAL ADJOINT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-teal-600 to-teal-800 text-white rounded-lg shadow-lg p-3 w-[180px] border-2 border-white/30">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaUserTie className="text-sm" />
                </div>
                <div className="text-[10px] leading-tight">
                  <div className="font-bold">DIRECTEUR</div>
                  <div>GÉNÉRAL ADJOINT</div>
                </div>
              </div>
            </div>
            {/* Flèche vers le haut vers ATTACHÉ DE DIRECTION */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-full w-0.5 h-16 bg-gray-400"></div>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-full -translate-y-[62px] w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-gray-400"></div>
          </motion.div>
          
          {/* Droite - CHEF SERVICE SÉCURITÉ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-teal-600 to-teal-800 text-white rounded-lg shadow-lg p-3 w-[180px] border-2 border-white/30">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaUserTie className="text-sm" />
                </div>
                <div className="text-[10px] leading-tight">
                  <div className="font-bold">CHEF SERVICE</div>
                  <div>SÉCURITÉ</div>
                </div>
              </div>
            </div>
            {/* Flèche horizontale vers la gauche vers DIRECTEUR GÉNÉRAL ADJOINT */}
            <div className="absolute right-full top-1/2 -translate-y-1/2 w-32 h-0.5 bg-gray-400"></div>
            <div className="absolute right-full top-1/2 -translate-y-1/2 -translate-x-[126px] w-0 h-0 border-t-4 border-b-4 border-r-8 border-t-transparent border-b-transparent border-r-gray-400"></div>
          </motion.div>
        </div>

        {/* Niveau 5 - Départements sous Chef de Département Commercial */}
        <div className="flex justify-center gap-4 mt-16">
          {[
            'CHEF DE DÉPARTEMENT APPROVISIONNEMENT',
            'CHEF DE DÉPARTEMENT FINANCIER',
            'CHEF DE DÉPARTEMENT RH ET ADMINISTRATION',
            'CHEF DE DÉPARTEMENT LOGISTIQUE',
          ].map((dept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-orange-500 to-orange-700 text-white rounded-lg shadow-lg p-3 w-[180px] border-2 border-white/30">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaUserTie className="text-sm" />
                  </div>
                  <div className="text-[9px] leading-tight">
                    <div className="font-bold">{dept}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note explicative */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600">
            Structure organisationnelle simplifiée de MAMAHOLDING S.A
          </p>
        </div>
      </div>
    </div>
  )
}
