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
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.submenu ? (
                  <button className="flex items-center space-x-1 text-sm font-semibold text-gray-700 hover:text-primary-red transition-colors">
                    <span>{item.name}</span>
                    <FaChevronDown className="text-xs" />
                  </button>
                ) : (
                  <Link
                    href={item.href || '#'}
                    className="text-sm font-semibold text-gray-700 hover:text-primary-red transition-colors"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.submenu && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-lg overflow-hidden animate-slide-down">
                    {item.submenu.map((subitem, subindex) => (
                      <Link
                        key={subindex}
                        href={subitem.href}
                        className="block px-6 py-3 text-sm text-gray-700 hover:bg-primary-red hover:text-white transition-colors"
                      >
                        {subitem.name}
                      </Link>
                    ))}
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

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-6 pb-6 space-y-4 animate-slide-down">
            {menuItems.map((item, index) => (
              <div key={index}>
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() =>
                        setActiveDropdown(activeDropdown === item.name ? null : item.name)
                      }
                      className="flex items-center justify-between w-full text-left font-semibold text-gray-700 hover:text-primary-red transition-colors py-2"
                    >
                      <span>{item.name}</span>
                      <FaChevronDown
                        className={`text-xs transition-transform ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.submenu.map((subitem, subindex) => (
                          <Link
                            key={subindex}
                            href={subitem.href}
                            className="block text-sm text-gray-600 hover:text-primary-red transition-colors py-1"
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
                    className="block font-semibold text-gray-700 hover:text-primary-red transition-colors py-2"
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
