'use client'

import { motion } from 'framer-motion'
import { FaUserTie } from 'react-icons/fa'

export default function OrganigrammeComplet() {
  return (
    <div className="w-full overflow-x-auto pb-8">
      <div className="min-w-[1800px] p-8">
        
        {/* Niveau 1 - ASSEMBLÉE GÉNÉRALE */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white rounded-lg shadow-lg p-3 w-[180px] border-2 border-purple-400">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <FaUserTie className="text-sm" />
                </div>
                <div className="text-[10px] leading-tight">
                  <div className="font-bold">ASSEMBLÉE</div>
                  <div>GÉNÉRALE</div>
                </div>
              </div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 top-full w-0.5 h-6 bg-gray-400"></div>
            <div className="absolute left-1/2 -translate-x-1/2 top-full translate-y-[22px] w-0 h-0 border-l-3 border-r-3 border-t-6 border-l-transparent border-r-transparent border-t-gray-400"></div>
          </motion.div>
        </div>

        {/* Niveau 2 - CONSEIL D'ADMINISTRATION */}
        <div className="flex justify-center mb-6 mt-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-green-700 to-green-900 text-white rounded-lg shadow-lg p-3 w-[180px] border-2 border-green-500">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <FaUserTie className="text-sm" />
                </div>
                <div className="text-[10px] leading-tight">
                  <div className="font-bold">CONSEIL</div>
                  <div>D'ADMINISTRATION</div>
                </div>
              </div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 top-full w-0.5 h-6 bg-gray-400"></div>
            <div className="absolute left-1/2 -translate-x-1/2 top-full translate-y-[22px] w-0 h-0 border-l-3 border-r-3 border-t-6 border-l-transparent border-r-transparent border-t-gray-400"></div>
          </motion.div>
        </div>

        {/* Niveau 3 - ADMINISTRATEUR DIRECTEUR GÉNÉRAL */}
        <div className="flex justify-center mb-6 mt-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-600 to-gray-800 text-white rounded-lg shadow-lg p-3 w-[200px] border-2 border-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <FaUserTie className="text-sm" />
                </div>
                <div className="text-[10px] leading-tight">
                  <div className="font-bold">ADMINISTRATEUR</div>
                  <div>DIRECTEUR GÉNÉRAL</div>
                </div>
              </div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 top-full w-0.5 h-8 bg-gray-400"></div>
            <div className="absolute left-1/2 -translate-x-1/2 top-full translate-y-[30px] w-0 h-0 border-l-3 border-r-3 border-t-6 border-l-transparent border-r-transparent border-t-gray-400"></div>
          </motion.div>
        </div>

        {/* Niveau 4 - Ligne horizontale avec 5 postes */}
        <div className="relative mt-12 mb-8">
          <div className="absolute top-0 left-[8%] right-[8%] h-0.5 bg-gray-400"></div>
          
          <div className="flex justify-center gap-4">
            {[
              { title: 'CHEF SERVICE', subtitle: 'JURIDIQUE', color: 'from-teal-600 to-teal-800', index: 0 },
              { title: 'ATTACHÉ DE', subtitle: 'DIRECTION', color: 'from-teal-600 to-teal-800', index: 1 },
              { title: 'CHEF DE', subtitle: 'DÉPARTEMENT COMMERCIAL', color: 'from-orange-600 to-orange-800', index: 2 },
              { title: 'CHEF SERVICE', subtitle: 'INFORMATIQUE', color: 'from-blue-600 to-blue-800', index: 3 },
              { title: 'CHEF SERVICE DE', subtitle: 'COMPTABILITÉ', color: 'from-blue-600 to-blue-800', index: 4 },
            ].map((dept) => (
              <motion.div
                key={dept.index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + dept.index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full w-0.5 h-8 bg-gray-400"></div>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full -translate-y-[30px] w-0 h-0 border-l-3 border-r-3 border-b-6 border-l-transparent border-r-transparent border-b-gray-400"></div>
                
                <div className={`bg-gradient-to-br ${dept.color} text-white rounded-lg shadow-lg p-2.5 w-[150px] border-2 border-white/30`}>
                  <div className="flex items-center gap-1.5">
                    <div className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center">
                      <FaUserTie className="text-xs" />
                    </div>
                    <div className="text-[9px] leading-tight">
                      <div className="font-bold">{dept.title}</div>
                      <div>{dept.subtitle}</div>
                    </div>
                  </div>
                </div>
                
                {dept.index === 2 && (
                  <>
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-0.5 h-8 bg-gray-400"></div>
                    <div className="absolute left-1/2 -translate-x-1/2 top-full translate-y-[30px] w-0 h-0 border-l-3 border-r-3 border-t-6 border-l-transparent border-r-transparent border-t-gray-400"></div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Postes latéraux */}
        <div className="flex justify-between px-8 mb-8" style={{ marginTop: '-30px' }}>
          <div className="flex flex-col gap-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-teal-600 to-teal-800 text-white rounded-lg shadow-lg p-2.5 w-[150px] border-2 border-white/30">
                <div className="flex items-center gap-1.5">
                  <div className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center">
                    <FaUserTie className="text-xs" />
                  </div>
                  <div className="text-[9px] leading-tight">
                    <div className="font-bold">CHEF SERVICE</div>
                    <div>APPROVISIONNEMENT</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-teal-600 to-teal-800 text-white rounded-lg shadow-lg p-2.5 w-[150px] border-2 border-white/30">
                <div className="flex items-center gap-1.5">
                  <div className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center">
                    <FaUserTie className="text-xs" />
                  </div>
                  <div className="text-[9px] leading-tight">
                    <div className="font-bold">DIRECTEUR</div>
                    <div>GÉNÉRAL ADJOINT</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="flex flex-col gap-3">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-lg shadow-lg p-2.5 w-[150px] border-2 border-white/30">
                <div className="flex items-center gap-1.5">
                  <div className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center">
                    <FaUserTie className="text-xs" />
                  </div>
                  <div className="text-[9px] leading-tight">
                    <div className="font-bold">CHEF SERVICE</div>
                    <div>INFORMATIQUE</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-lg shadow-lg p-2.5 w-[150px] border-2 border-white/30">
                <div className="flex items-center gap-1.5">
                  <div className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center">
                    <FaUserTie className="text-xs" />
                  </div>
                  <div className="text-[9px] leading-tight">
                    <div className="font-bold">CHEF SERVICE DE</div>
                    <div>L'AUDIT INTERNE</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-teal-600 to-teal-800 text-white rounded-lg shadow-lg p-2.5 w-[150px] border-2 border-white/30">
              <div className="flex items-center gap-1.5">
                <div className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center">
                  <FaUserTie className="text-xs" />
                </div>
                <div className="text-[9px] leading-tight">
                  <div className="font-bold">CHEF SERVICE</div>
                  <div>SÉCURITÉ</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Niveau 5 - 5 Départements sous Commercial */}
        <div className="flex justify-center gap-4 mt-12 mb-8">
          {[
            'CHEF DE DÉPARTEMENT COMPTABILITÉ ET FISCALITÉ',
            'CHEF DE DÉPARTEMENT APPROVISIONNEMENT',
            'CHEF DE DÉPARTEMENT FINANCIER',
            'CHEF DE DÉPARTEMENT RESSOURCES HUMAINES ET ADMINISTRATION',
            'CHEF DE DÉPARTEMENT LOGISTIQUE',
          ].map((dept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-orange-500 to-orange-700 text-white rounded-lg shadow-md p-2.5 w-[150px] border border-white/30">
                <div className="flex items-center gap-1.5">
                  <div className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center">
                    <FaUserTie className="text-xs" />
                  </div>
                  <div className="text-[8px] leading-tight">
                    <div className="font-bold">{dept}</div>
                  </div>
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 top-full w-0.5 h-6 bg-gray-400"></div>
              <div className="absolute left-1/2 -translate-x-1/2 top-full translate-y-[22px] w-0 h-0 border-l-3 border-r-3 border-t-6 border-l-transparent border-r-transparent border-t-gray-400"></div>
            </motion.div>
          ))}
        </div>

        {/* Niveau 6 - Services sous chaque département */}
        <div className="grid grid-cols-5 gap-4 mt-8">
          {/* Colonne 1 - Comptabilité */}
          <div className="space-y-2">
            {['CHEF DE SERVICE VENTES', 'CHEF DE SERVICE MARKETING'].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1 + idx * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-teal-500 to-teal-700 text-white rounded-md shadow-sm p-2 text-center">
                  <div className="text-[8px] font-semibold leading-tight">{service}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Colonne 2 - Approvisionnement */}
          <div className="space-y-2">
            {[
              'CHEF DE SERVICE LOGISTIQUE ET TRANSPORT',
              'CHEF SERVICE EXPLOITATION',
              'CHEF SERVICE MAINTENANCE',
              'CHEF SERVICE ACHATS',
              'CHEF SERVICE STOCK',
              'CHEF DE SERVICE DES PLANIFICATIONS DES APPROVISIONNEMENTS'
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1 + idx * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-teal-500 to-teal-700 text-white rounded-md shadow-sm p-2 text-center">
                  <div className="text-[8px] font-semibold leading-tight">{service}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Colonne 3 - Financier */}
          <div className="space-y-2">
            {[
              'CHEF SERVICE FINANCIER',
              'CHEF SERVICE TRÉSORERIE',
              'SERVICE PAIE & IMPÔTS',
              'CHEF SERVICE COMPTABLE'
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1 + idx * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-teal-500 to-teal-700 text-white rounded-md shadow-sm p-2 text-center">
                  <div className="text-[8px] font-semibold leading-tight">{service}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Colonne 4 - RH */}
          <div className="space-y-2">
            {[
              'CHEF DE SERVICE CLIENTÈLE & DISTRIBUTION',
              'CHEF SERVICE EXPLOITATION',
              'CHEF SERVICE DES MOYENS GÉNÉRAUX',
              'CHEF SERVICE RESSOURCES HUMAINES',
              'CHEF SERVICE CONTRÔLE GESTION'
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1 + idx * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-teal-500 to-teal-700 text-white rounded-md shadow-sm p-2 text-center">
                  <div className="text-[8px] font-semibold leading-tight">{service}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Colonne 5 - Logistique */}
          <div className="space-y-2">
            {[
              'CHEF SERVICE EXPLOITATION',
              'CHEF SERVICE MAINTENANCE VÉHICULES'
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1 + idx * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-teal-500 to-teal-700 text-white rounded-md shadow-sm p-2 text-center">
                  <div className="text-[8px] font-semibold leading-tight">{service}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
