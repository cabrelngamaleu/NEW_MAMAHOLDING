'use client'

import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import AnimatedRings from './AnimatedRings'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-primary-red via-red-800 to-primary-red text-white relative overflow-hidden">
      {/* Anneaux de fond */}
      <AnimatedRings 
        className="absolute inset-0 z-0" 
        size="large" 
        variant="floating" 
        intensity="subtle"
      />
      {/* Section principale */}
      <div className="container-custom py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* À propos */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <text
                    x="50"
                    y="55"
                    fontSize="45"
                    fontWeight="bold"
                    fill="#DC143C"
                    textAnchor="middle"
                    fontFamily="Poppins, sans-serif"
                  >
                    M
                  </text>
                  <text
                    x="50"
                    y="75"
                    fontSize="20"
                    fontWeight="bold"
                    fill="#DC143C"
                    textAnchor="middle"
                    fontFamily="Poppins, sans-serif"
                  >
                    H
                  </text>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-red">MAMA</h3>
                <p className="text-sm text-gray-300">HOLDING S.A</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Leader du commerce en gros, MAMAHOLDING S.A accompagne les entreprises avec des solutions complètes et innovantes à travers nos entités CAC, TRINCO et ECOFOOD.
            </p>
            {/* Réseaux sociaux */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white text-primary-red rounded-full flex items-center justify-center hover:bg-primary-red hover:text-white transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 bg-white text-primary-red rounded-full flex items-center justify-center hover:bg-primary-red hover:text-white transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 bg-white text-primary-red rounded-full flex items-center justify-center hover:bg-primary-red hover:text-white transition-colors">
                <FaLinkedinIn />
              </a>
              <a href="#" className="w-10 h-10 bg-white text-primary-red rounded-full flex items-center justify-center hover:bg-primary-red hover:text-white transition-colors">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-primary-green">Liens Rapides</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary-red transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/notre-histoire" className="text-gray-300 hover:text-primary-red transition-colors">
                  Notre Histoire
                </Link>
              </li>
              <li>
                <Link href="/nos-valeurs" className="text-gray-300 hover:text-primary-red transition-colors">
                  Nos Valeurs
                </Link>
              </li>
              <li>
                <Link href="/gouvernance" className="text-gray-300 hover:text-primary-red transition-colors">
                  Gouvernance
                </Link>
              </li>
              <li>
                <Link href="/partenaires" className="text-gray-300 hover:text-primary-red transition-colors">
                  Partenaires
                </Link>
              </li>
              <li>
                <Link href="/temoignages" className="text-gray-300 hover:text-primary-red transition-colors">
                  Témoignages
                </Link>
              </li>
              <li>
                <Link href="/carrieres" className="text-gray-300 hover:text-primary-red transition-colors">
                  Carrières
                </Link>
              </li>
              <li>
                <Link href="/espace-presse" className="text-gray-300 hover:text-primary-red transition-colors">
                  Espace Presse
                </Link>
              </li>
            </ul>
          </div>

          {/* Nos Entités */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-primary-green">Nos Entités</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/entites/cac" className="text-gray-300 hover:text-primary-red transition-colors">
                  CAC
                </Link>
              </li>
              <li>
                <Link href="/entites/trinco" className="text-gray-300 hover:text-primary-red transition-colors">
                  TRINCO
                </Link>
              </li>
              <li>
                <Link href="/entites/ecofood" className="text-gray-300 hover:text-primary-red transition-colors">
                  ECOFOOD
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact et Heures */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-primary-green">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary-red mt-1 flex-shrink-0" />
                <span className="text-gray-300">Yaoundé -Etoudi, Cameroun</span>
              </li>
              <li className="flex items-start space-x-3">
                <FaPhone className="text-primary-red mt-1 flex-shrink-0" />
                <span className="text-gray-300">+237 690 201 978 / +237 690 202 555</span>
              </li>
              <li className="flex items-start space-x-3">
                <FaEnvelope className="text-primary-red mt-1 flex-shrink-0" />
                <span className="text-gray-300">mapprologistique@mamaholding.net</span>
              </li>
            </ul>
            <div className="mt-6">
              <h5 className="font-semibold mb-3 text-primary-green">Heures d'ouverture</h5>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Lundi-Samedi : 8h à 17h30</li>
                <li>Dimanche : 8h à 15h30</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Barre de copyright */}
      <div className="border-t border-white/20 relative z-10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} MAMAHOLDING S.A. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/mentions-legales" className="text-gray-400 hover:text-primary-red transition-colors">
                Mentions Légales
              </Link>
              <Link href="/politique-confidentialite" className="text-gray-400 hover:text-primary-red transition-colors">
                Politique de Confidentialité
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-primary-red transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
