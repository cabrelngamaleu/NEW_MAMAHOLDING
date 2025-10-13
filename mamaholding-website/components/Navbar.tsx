'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'ACCUEIL', href: '/' },
    {
      name: 'NOTRE GROUPE',
      submenu: [
        { name: 'NOTRE HISTOIRE', href: '/notre-histoire' },
        { name: 'NOS VALEURS', href: '/nos-valeurs' },
        { name: 'GOUVERNANCE', href: '/gouvernance' },
      ],
    },
    {
      name: 'NOS ENTITÉS',
      submenu: [
        { name: 'CAC', href: '/entites/cac' },
        { name: 'TRINCO', href: '/entites/trinco' },
        { name: 'ECOFOOD', href: '/entites/ecofood' },
      ],
    },
    { name: 'ESPACE PRESSE', href: '/espace-presse' },
    { name: 'CONTACT', href: '/contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-4' : 'bg-white/95 py-6'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 md:w-16 md:h-16 relative">
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
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-primary-red">MAMA</h1>
              <p className="text-sm text-gray-600">HOLDING S.A</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-2">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative group menu-item-container"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.submenu ? (
                  <button className="menu-button flex items-center space-x-2 px-4 py-3 text-sm font-semibold text-gray-800 hover:text-primary-red hover:bg-gray-50 rounded-lg transition-all duration-200 border border-transparent hover:border-gray-200 menu-text">
                    <span>{item.name}</span>
                    <FaChevronDown className={`text-xs transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    href={item.href || '#'}
                    className="menu-link block px-4 py-3 text-sm font-semibold text-gray-800 hover:text-primary-red hover:bg-gray-50 rounded-lg transition-all duration-200 border border-transparent hover:border-gray-200 menu-text"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu - Amélioré */}
                {item.submenu && activeDropdown === item.name && (
                  <div className="dropdown-menu absolute top-full left-0 mt-1 w-64 bg-white shadow-2xl rounded-xl overflow-hidden border border-gray-100 animate-slide-down z-50">
                    <div className="py-2">
                      {item.submenu.map((subitem, subindex) => (
                        <Link
                          key={subindex}
                          href={subitem.href}
                          className="dropdown-item block px-6 py-4 text-sm font-medium text-gray-700 hover:bg-primary-red hover:text-white transition-all duration-200 border-l-4 border-transparent hover:border-white"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-primary-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <span className="menu-text">{subitem.name}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                    {/* Indicateur visuel */}
                    <div className="absolute -top-1 left-6 w-3 h-3 bg-white border-l border-t border-gray-100 transform rotate-45"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-2xl text-primary-red"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu - Amélioré */}
        {isOpen && (
          <div className="lg:hidden mt-6 pb-6 space-y-2 animate-slide-down bg-white rounded-lg shadow-lg p-4">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-gray-100 last:border-b-0">
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() =>
                        setActiveDropdown(activeDropdown === item.name ? null : item.name)
                      }
                      className="flex items-center justify-between w-full text-left font-semibold text-gray-800 hover:text-primary-red hover:bg-gray-50 transition-all duration-200 py-4 px-3 rounded-lg"
                    >
                      <span>{item.name}</span>
                      <FaChevronDown
                        className={`text-sm transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="ml-4 mt-2 mb-4 space-y-1 bg-gray-50 rounded-lg p-3">
                        {item.submenu.map((subitem, subindex) => (
                          <Link
                            key={subindex}
                            href={subitem.href}
                            className="block text-sm font-medium text-gray-700 hover:text-primary-red hover:bg-white transition-all duration-200 py-3 px-4 rounded-lg border-l-4 border-transparent hover:border-primary-red"
                            onClick={() => setIsOpen(false)}
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href || '#'}
                    className="block font-semibold text-gray-800 hover:text-primary-red hover:bg-gray-50 transition-all duration-200 py-4 px-3 rounded-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
