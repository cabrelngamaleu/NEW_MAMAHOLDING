'use client'

import { motion } from 'framer-motion'
import { FaUserTie, FaUsers } from 'react-icons/fa'

export default function Organigramme() {
  return (
    <div className="max-w-[1400px] mx-auto overflow-x-auto pb-8 px-4">
      <div className="min-w-[1200px]">
        {/* Niveau 1 - ASSEMBLÉE GÉNÉRALE */}
        <div className="flex justify-center mb-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white rounded-lg shadow-xl p-4 w-[200px] border-2 border-purple-400">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaUserTie className="text-lg" />
                </div>
                <div className="text-xs">
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

        {/* Niveau 2 - DG/ADM ADMINISTRATION */}
        <div className="flex justify-center mb-4 mt-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-green-600 to-green-800 text-white rounded-lg shadow-xl p-4 w-[200px] border-2 border-green-400">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaUserTie className="text-lg" />
                </div>
                <div className="text-xs">
                  <div className="font-bold">DG/ADM</div>
                  <div>ADMINISTRATION</div>
                </div>
              </div>
            </div>
            {/* Flèche vers le bas */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full w-0.5 h-8 bg-gray-400"></div>
            <div className="absolute left-1/2 -translate-x-1/2 top-full translate-y-[30px] w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-gray-400"></div>
          </motion.div>
        </div>

        {/* Niveau 3 - ADMINISTRATEUR DIRECTEUR GÉNÉRAL */}
        <div className="flex justify-center mb-4 mt-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-700 to-gray-900 text-white rounded-lg shadow-xl p-4 w-[240px] border-2 border-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaUserTie className="text-lg" />
                </div>
                <div className="text-xs">
                  <div className="font-bold">ADMINISTRATEUR</div>
                  <div>DIRECTEUR GÉNÉRAL</div>
                </div>
              </div>
            </div>
            {/* Flèche vers le bas */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full w-0.5 h-8 bg-gray-400"></div>
            <div className="absolute left-1/2 -translate-x-1/2 top-full translate-y-[30px] w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-gray-400"></div>
          </motion.div>
        </div>

        {/* Niveau 4 - Ligne horizontale avec 5 postes + connexions latérales */}
        <div className="flex justify-center gap-3 mb-4 mt-12 relative">
          {/* Ligne horizontale de connexion principale */}
          <div className="absolute top-0 left-[15%] right-[15%] h-0.5 bg-gray-400"></div>
          
          {[
            { title: 'CHEF SERVICE', subtitle: 'JURIDIQUE', color: 'from-teal-600 to-teal-800', hasLeftArrow: true },
            { title: 'ATTACHÉ DE', subtitle: 'DIRECTION', color: 'from-teal-600 to-teal-800', hasLeftArrow: false },
            { title: 'CHEF DE DÉPARTEMENT', subtitle: 'COMMERCIAL', color: 'from-orange-600 to-orange-800', hasRightArrow: true },
            { title: 'CHEF SERVICE', subtitle: 'INFORMATIQUE', color: 'from-blue-600 to-blue-800', hasLeftArrow: false },
            { title: 'CHEF SERVICE DE', subtitle: 'COMPTABILITÉ', color: 'from-blue-600 to-blue-800', hasRightArrow: true },
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
              <div className="absolute left-1/2 -translate-x-1/2 bottom-full w-0.5 h-8 bg-gray-400"></div>
              <div className="absolute left-1/2 -translate-x-1/2 bottom-full -translate-y-[30px] w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-gray-400"></div>
              
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
              
              {/* Flèche vers le bas pour le Chef de Département Commercial */}
              {index === 2 && (
                <>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-0.5 h-8 bg-gray-400"></div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full translate-y-[30px] w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-gray-400"></div>
                </>
              )}
              
              {/* Flèche horizontale vers la gauche (pour CHEF SERVICE JURIDIQUE) */}
              {dept.hasLeftArrow && (
                <>
                  <div className="absolute right-full top-1/2 -translate-y-1/2 w-16 h-0.5 bg-gray-400"></div>
                  <div className="absolute right-full top-1/2 -translate-y-1/2 -translate-x-[62px] w-0 h-0 border-t-4 border-b-4 border-r-8 border-t-transparent border-b-transparent border-r-gray-400"></div>
                </>
              )}
              
              {/* Flèche horizontale vers la droite (pour CHEF DE DÉPARTEMENT COMMERCIAL et COMPTABILITÉ) */}
              {dept.hasRightArrow && (
                <>
                  <div className="absolute left-full top-1/2 -translate-y-1/2 w-16 h-0.5 bg-gray-400"></div>
                  <div className="absolute left-full top-1/2 -translate-y-1/2 translate-x-[62px] w-0 h-0 border-t-4 border-b-4 border-l-8 border-t-transparent border-b-transparent border-l-gray-400"></div>
                </>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Postes latéraux connectés */}
        <div className="flex justify-between px-4 mb-4 relative" style={{ marginTop: '-80px' }}>
          {/* Gauche - CHEF SERVICE APPROVISIONNEMENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-[160px]"
          >
            <div className="bg-gradient-to-br from-teal-600 to-teal-800 text-white rounded-lg shadow-lg p-3 border-2 border-white/30">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaUserTie className="text-sm" />
                </div>
                <div className="text-[10px] leading-tight">
                  <div className="font-bold">CHEF SERVICE</div>
                  <div>APPROVISIONNEMENT</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Droite - CHEF SERVICE INFORMATIQUE et CHEF SERVICE DE COMPTABILITÉ (en colonne) */}
          <div className="flex flex-col gap-3">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-lg shadow-lg p-3 w-[160px] border-2 border-white/30">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaUserTie className="text-sm" />
                  </div>
                  <div className="text-[10px] leading-tight">
                    <div className="font-bold">CHEF SERVICE</div>
                    <div>INFORMATIQUE</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-lg shadow-lg p-3 w-[160px] border-2 border-white/30">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaUserTie className="text-sm" />
                  </div>
                  <div className="text-[10px] leading-tight">
                    <div className="font-bold">CHEF SERVICE DE</div>
                    <div>L'AUDIT INTERNE</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* DIRECTEUR GÉNÉRAL ADJOINT - en bas à gauche avec flèche vers ATTACHÉ DE DIRECTION */}
        <div className="flex justify-start px-4 mb-4 relative" style={{ marginLeft: '200px', marginTop: '20px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-teal-600 to-teal-800 text-white rounded-lg shadow-lg p-3 w-[160px] border-2 border-white/30">
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
            <div className="absolute left-1/2 -translate-x-1/2 bottom-full w-0.5 h-12 bg-gray-400"></div>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-full -translate-y-[46px] w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-gray-400"></div>
          </motion.div>
        </div>
        
        {/* CHEF SERVICE SÉCURITÉ - en bas à droite avec flèche vers DIRECTEUR GÉNÉRAL ADJOINT */}
        <div className="flex justify-end px-4 mb-8 relative" style={{ marginRight: '100px', marginTop: '-60px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-teal-600 to-teal-800 text-white rounded-lg shadow-lg p-3 w-[160px] border-2 border-white/30">
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
            <div className="absolute right-full top-1/2 -translate-y-1/2 w-24 h-0.5 bg-gray-400"></div>
            <div className="absolute right-full top-1/2 -translate-y-1/2 -translate-x-[94px] w-0 h-0 border-t-4 border-b-4 border-r-8 border-t-transparent border-b-transparent border-r-gray-400"></div>
          </motion.div>
        </div>

        {/* Niveau 5 - Sous le Chef de Département Commercial */}
        <div className="flex justify-center gap-3 mb-4 mt-12">
          {[
            { title: 'CHEF DE SERVICE', subtitle: 'COMPTABILITÉ & FISCALITÉ' },
            { title: 'CHEF DE DÉPARTEMENT', subtitle: 'APPROVISIONNEMENT' },
            { title: 'CHEF DE DÉPARTEMENT', subtitle: 'FINANCIER' },
            { title: 'CHEF DE DÉPARTEMENT', subtitle: 'RESSOURCES HUMAINES ET ADMINISTRATION' },
            { title: 'CHEF DE DÉPARTEMENT', subtitle: 'LOGISTIQUE' },
          ].map((subdept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-orange-500 to-orange-700 text-white rounded-lg shadow-lg p-3 w-[150px] border-2 border-white/30">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaUserTie className="text-sm" />
                  </div>
                  <div className="text-[9px] leading-tight">
                    <div className="font-bold">{subdept.title}</div>
                    <div>{subdept.subtitle}</div>
                  </div>
                </div>
              </div>
              
              {/* Flèches vers le bas */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full w-0.5 h-6 bg-gray-400"></div>
              <div className="absolute left-1/2 -translate-x-1/2 top-full translate-y-[22px] w-0 h-0 border-l-3 border-r-3 border-t-6 border-l-transparent border-r-transparent border-t-gray-400"></div>
            </motion.div>
          ))}
        </div>

        {/* Niveau 6 - Services sous chaque département */}
        <div className="grid grid-cols-5 gap-3 mt-8">
          {/* Colonne 1 - Comptabilité */}
          <div className="space-y-2">
            {['CHEF SERVICE VENTES', 'CHEF SERVICE MARKETING'].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + idx * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-teal-600 to-teal-800 text-white rounded-md shadow-md p-2">
                  <div className="flex items-center gap-1">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaUsers className="text-[10px]" />
                    </div>
                    <p className="text-[8px] font-medium leading-tight">{service}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Colonne 2 - Approvisionnement */}
          <div className="space-y-2">
            {['CHEF DE SERVICE LOGISTIQUE ET TRANSPORT', 'CHEF SERVICE EXPLOITATION', 'CHEF SERVICE MAINTENANCE', 'CHEF SERVICE ACHATS', 'CHEF SERVICE STOCK', 'CHEF DE SERVICE DES PLANIFICATIONS DES APPROVISIONNEMENTS'].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + idx * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-teal-600 to-teal-800 text-white rounded-md shadow-md p-2">
                  <div className="flex items-center gap-1">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaUsers className="text-[10px]" />
                    </div>
                    <p className="text-[8px] font-medium leading-tight">{service}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Colonne 3 - Financier */}
          <div className="space-y-2">
            {['CHEF SERVICE FINANCIER', 'SERVICE PAIE & IMPÔTS'].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + idx * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-teal-600 to-teal-800 text-white rounded-md shadow-md p-2">
                  <div className="flex items-center gap-1">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaUsers className="text-[10px]" />
                    </div>
                    <p className="text-[8px] font-medium leading-tight">{service}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Colonne 4 - RH */}
          <div className="space-y-2">
            {['CHEF DE SERVICE CLIENTÈLE & DISTRIBUTION', 'CHEF SERVICE RESSOURCES HUMAINES', 'CHEF SERVICE CONTRÔLE GESTION'].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + idx * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-teal-600 to-teal-800 text-white rounded-md shadow-md p-2">
                  <div className="flex items-center gap-1">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaUsers className="text-[10px]" />
                    </div>
                    <p className="text-[8px] font-medium leading-tight">{service}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Colonne 5 - Logistique */}
          <div className="space-y-2">
            {['CHEF SERVICE EXPLOITATION', 'CHEF SERVICE MAINTENANCE VÉHICULES'].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + idx * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-teal-600 to-teal-800 text-white rounded-md shadow-md p-2">
                  <div className="flex items-center gap-1">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaUsers className="text-[10px]" />
                    </div>
                    <p className="text-[8px] font-medium leading-tight">{service}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
