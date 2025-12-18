'use client'

import { motion } from 'framer-motion'
import { FaGavel } from 'react-icons/fa'

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-700 to-gray-900 text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-8">
              <FaGavel className="text-7xl" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Mentions Légales</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Informations légales et réglementaires
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-gray-600 mb-8">
              <strong>Dernière mise à jour :</strong> 4 novembre 2025
            </p>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-primary-dark mb-4">1. Éditeur du Site</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-2"><strong>Raison sociale :</strong> MAMAHOLDING S.A</p>
                  <p className="text-gray-700 mb-2"><strong>Forme juridique :</strong> Société Anonyme</p>
                  <p className="text-gray-700 mb-2"><strong>Siège social :</strong> Yaoundé -Etoudi, Cameroun</p>
                  <p className="text-gray-700 mb-2"><strong>Année de création :</strong> 2004</p>
                  <p className="text-gray-700 mb-2"><strong>Email :</strong> mapprologistique@mamaholding.net</p>
                  <p className="text-gray-700 mb-2"><strong>Téléphone :</strong> +237 690 201 978 / +237 690 202 555</p>
                  <p className="text-gray-700"><strong>Directeur de la publication :</strong> L'Administrateur Directeur Général</p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary-dark mb-4">2. Hébergement</h2>
                <p className="text-gray-700 leading-relaxed">
                  Le site web mamaholding.net est hébergé par un prestataire d'hébergement web professionnel. 
                  Les données sont stockées sur des serveurs sécurisés conformément aux normes de sécurité en vigueur.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary-dark mb-4">3. Propriété Intellectuelle</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  L'ensemble du contenu de ce site web (textes, images, logos, vidéos, graphismes, etc.) 
                  est la propriété exclusive de MAMAHOLDING S.A ou de ses partenaires, et est protégé par 
                  les lois camerounaises et internationales relatives à la propriété intellectuelle.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Toute reproduction, représentation, modification, publication, adaptation de tout ou partie 
                  des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf 
                  autorisation écrite préalable de MAMAHOLDING S.A.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary-dark mb-4">4. Marques et Logos</h2>
                <p className="text-gray-700 leading-relaxed">
                  Les marques "MAMAHOLDING S.A", "CAC", "TRINCO" et "ECOFOOD" ainsi que les logos associés 
                  sont des marques déposées et protégées. Toute utilisation non autorisée de ces marques 
                  constitue une contrefaçon passible de sanctions pénales.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary-dark mb-4">5. Responsabilité</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  MAMAHOLDING S.A s'efforce d'assurer l'exactitude et la mise à jour des informations 
                  diffusées sur ce site. Toutefois, nous ne pouvons garantir l'exactitude, la précision 
                  ou l'exhaustivité des informations mises à disposition.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  MAMAHOLDING S.A ne saurait être tenue responsable des dommages directs ou indirects 
                  résultant de l'accès au site ou de l'utilisation des informations qu'il contient.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary-dark mb-4">6. Liens Hypertextes</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ce site peut contenir des liens vers d'autres sites web. MAMAHOLDING S.A n'exerce 
                  aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  La création de liens hypertextes vers ce site nécessite l'autorisation préalable 
                  écrite de MAMAHOLDING S.A.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary-dark mb-4">7. Données Personnelles</h2>
                <p className="text-gray-700 leading-relaxed">
                  Les informations personnelles collectées sur ce site font l'objet d'un traitement 
                  informatique destiné à la gestion de la relation client. Conformément à la réglementation 
                  en vigueur, vous disposez d'un droit d'accès, de rectification et de suppression des 
                  données vous concernant.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Pour plus d'informations, consultez notre{' '}
                  <a href="/politique-confidentialite" className="text-primary-red hover:underline">
                    Politique de Confidentialité
                  </a>.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary-dark mb-4">8. Cookies</h2>
                <p className="text-gray-700 leading-relaxed">
                  Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. 
                  En poursuivant votre navigation sur ce site, vous acceptez l'utilisation de cookies. 
                  Vous pouvez désactiver les cookies dans les paramètres de votre navigateur.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary-dark mb-4">9. Droit Applicable</h2>
                <p className="text-gray-700 leading-relaxed">
                  Les présentes mentions légales sont régies par le droit camerounais. Tout litige relatif 
                  à l'utilisation de ce site sera soumis à la compétence exclusive des tribunaux camerounais.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary-dark mb-4">10. Modifications</h2>
                <p className="text-gray-700 leading-relaxed">
                  MAMAHOLDING S.A se réserve le droit de modifier les présentes mentions légales à tout moment. 
                  Les modifications entrent en vigueur dès leur publication sur le site.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary-dark mb-4">11. Contact</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700"><strong>MAMAHOLDING S.A</strong></p>
                  <p className="text-gray-700">Yaoundé -Etoudi, Cameroun</p>
                  <p className="text-gray-700">Email : mapprologistique@mamaholding.net</p>
                  <p className="text-gray-700">Tél : +237 690 201 978 / +237 690 202 555</p>
                  <p className="text-gray-700 mt-4">
                    <a href="/contact" className="text-primary-red hover:underline font-semibold">
                      Formulaire de contact →
                    </a>
                  </p>
                </div>
              </div>

              <div className="bg-primary-light p-6 rounded-lg mt-8">
                <p className="text-gray-700 text-center">
                  <strong>© 2004-2025 MAMAHOLDING S.A - Tous droits réservés</strong>
                </p>
                <p className="text-gray-600 text-center mt-2">
                  "Dream big, make it easy target"
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
