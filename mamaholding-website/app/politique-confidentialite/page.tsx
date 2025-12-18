'use client'

import { motion } from 'framer-motion'
import { FaShieldAlt } from 'react-icons/fa'

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-red to-red-700 text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-8">
              <FaShieldAlt className="text-7xl" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Politique de Confidentialité</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Protection de vos données personnelles
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
                <h2 className="text-3xl font-bold text-primary-dark mb-4">1. Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  MAMAHOLDING S.A (ci-après "nous", "notre" ou "MAMAHOLDING S.A") s'engage à protéger 
                  la confidentialité et la sécurité de vos données personnelles. Cette politique de 
                  confidentialité explique comment nous collectons, utilisons, partageons et protégeons 
                  vos informations personnelles lorsque vous utilisez notre site web ou nos services.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary-dark mb-4">2. Données Collectées</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Nous pouvons collecter les types de données personnelles suivants :
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Informations d'identification :</strong> nom, prénom, adresse email, numéro de téléphone</li>
                  <li><strong>Informations professionnelles :</strong> nom de l'entreprise, fonction, secteur d'activité</li>
                  <li><strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées</li>
                  <li><strong>Données de communication :</strong> messages envoyés via nos formulaires de contact</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary-dark mb-4">3. Utilisation des Données</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Nous utilisons vos données personnelles pour :
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Répondre à vos demandes d'information et de contact</li>
                  <li>Traiter vos commandes et gérer notre relation commerciale</li>
                  <li>Améliorer nos services et notre site web</li>
                  <li>Vous envoyer des informations sur nos produits et services (avec votre consentement)</li>
                  <li>Respecter nos obligations légales et réglementaires</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary-dark mb-4">4. Partage des Données</h2>
                <p className="text-gray-700 leading-relaxed">
                  Nous ne vendons pas vos données personnelles à des tiers. Nous pouvons partager vos 
                  informations avec :
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
                  <li>Nos entités (CAC, TRINCO, ECOFOOD) pour le traitement de vos demandes</li>
                  <li>Nos prestataires de services (hébergement, maintenance, etc.)</li>
                  <li>Les autorités compétentes si requis par la loi</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary-dark mb-4">5. Sécurité des Données</h2>
                <p className="text-gray-700 leading-relaxed">
                  Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles 
                  appropriées pour protéger vos données personnelles contre tout accès non autorisé, 
                  modification, divulgation ou destruction. Cependant, aucune transmission de données 
                  sur Internet n'est totalement sécurisée.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary-dark mb-4">6. Conservation des Données</h2>
                <p className="text-gray-700 leading-relaxed">
                  Nous conservons vos données personnelles aussi longtemps que nécessaire pour les 
                  finalités décrites dans cette politique, sauf si une période de conservation plus 
                  longue est requise ou autorisée par la loi.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary-dark mb-4">7. Vos Droits</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Conformément à la réglementation applicable, vous disposez des droits suivants :
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Droit d'accès :</strong> obtenir une copie de vos données personnelles</li>
                  <li><strong>Droit de rectification :</strong> corriger vos données inexactes ou incomplètes</li>
                  <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
                  <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                  <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Pour exercer ces droits, contactez-nous à : <strong>mapprologistique@mamaholding.net</strong>
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary-dark mb-4">8. Cookies</h2>
                <p className="text-gray-700 leading-relaxed">
                  Notre site web utilise des cookies pour améliorer votre expérience de navigation. 
                  Les cookies sont de petits fichiers texte stockés sur votre appareil. Vous pouvez 
                  configurer votre navigateur pour refuser les cookies, mais cela peut affecter 
                  certaines fonctionnalités du site.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary-dark mb-4">9. Modifications</h2>
                <p className="text-gray-700 leading-relaxed">
                  Nous nous réservons le droit de modifier cette politique de confidentialité à tout 
                  moment. Les modifications seront publiées sur cette page avec une date de mise à jour. 
                  Nous vous encourageons à consulter régulièrement cette page.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary-dark mb-4">10. Contact</h2>
                <p className="text-gray-700 leading-relaxed">
                  Pour toute question concernant cette politique de confidentialité ou le traitement 
                  de vos données personnelles, contactez-nous :
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mt-4">
                  <p className="text-gray-700"><strong>MAMAHOLDING S.A</strong></p>
                  <p className="text-gray-700">Yaoundé -Etoudi, Cameroun</p>
                  <p className="text-gray-700">Email : mapprologistique@mamaholding.net</p>
                  <p className="text-gray-700">Tél : +237 690 201 978 / +237 690 202 555</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
