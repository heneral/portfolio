import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../images/logo.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const links = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <nav className="fixed w-full bg-navy/90 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-green font-mono text-xl">
          <img 
            src={logo} 
            alt="Your Name Logo"
            className="h-8 w-auto hover:opacity-80 transition-all"
            />
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-light-slate hover:text-white transition-colors text-sm font-mono"
            >
              <span className="text-customyellow">0{links.indexOf(link) + 1}.</span> {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-light-slate"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-light-navy p-6 space-y-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-light-slate hover:text-white text-sm font-mono"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}