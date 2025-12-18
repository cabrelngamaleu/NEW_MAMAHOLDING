'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
    { name: 'TÉMOIGNAGES', href: '/temoignages' },
    { name: 'ESPACE PRESSE', href: '/espace-presse' },
    { name: 'CARRIÈRES', href: '/carrieres' },
    { name: 'PARTENAIRES', href: '/partenaires' },
    { name: 'CONTACT', href: '/contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-xl py-3' 
          : 'bg-white shadow-md py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-12 md:h-14 w-auto">
              <Image
                src="/logo.png"
                alt="MAMAHOLDING S.A"
                width={200}
                height={56}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative group menu-item-container"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.submenu ? (
                  <button className="menu-button flex items-center space-x-1.5 px-3 py-2.5 text-xs font-bold text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-primary-red hover:to-primary-green rounded-lg transition-all duration-300 border border-transparent hover:shadow-md menu-text uppercase tracking-wide">
                    <span>{item.name}</span>
                    <FaChevronDown className={`text-[10px] transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    href={item.href || '#'}
                    className="menu-link block px-3 py-2.5 text-xs font-bold text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-primary-red hover:to-primary-green rounded-lg transition-all duration-300 border border-transparent hover:shadow-md menu-text uppercase tracking-wide"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu - Amélioré */}
                {item.submenu && activeDropdown === item.name && (
                  <div
                    className="dropdown-menu absolute top-full left-0 mt-1 w-72 bg-white shadow-2xl rounded-xl overflow-hidden border-2 border-gray-200 animate-slide-down z-50 pointer-events-auto"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="bg-gradient-to-r from-primary-red to-primary-green p-3">
                      <div className="text-white text-xs font-bold uppercase tracking-wider">{item.name}</div>
                    </div>
                    <div className="py-2">
                      {item.submenu.map((subitem, subindex) => (
                        <Link
                          key={subindex}
                          href={subitem.href}
                          className="dropdown-item block px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-red-50 hover:to-green-50 hover:text-primary-red transition-all duration-200 border-l-4 border-transparent hover:border-primary-red"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-1.5 h-1.5 bg-primary-red rounded-full"></div>
                            <span className="menu-text">{subitem.name}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-2xl text-primary-red hover:text-primary-green transition-colors duration-300 p-2 hover:bg-gray-100 rounded-lg"
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
