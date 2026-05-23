'use client'

import { useState } from 'react'
import Image from 'next/image'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'BB Gestão', href: '#sobre' },
  // { label: 'Áreas de Atuação', href: '#areas' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-2">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3">
          <Image
            src="/favicon.png"
            alt="BB Gestão"
            width={42}
            height={42}
            className="rounded"
          />
          <div className="leading-tight">
            <span className="block font-display font-bold text-xl tracking-wide text-primary">
              BB GESTÃO
            </span>
            <span className="block text-xs tracking-widest uppercase text-accent">
              Empresarial
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-display font-semibold tracking-wider uppercase transition-colors hover:text-gold text-gray-700"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:21969131553"
            className="flex items-center gap-1 text-sm font-semibold text-primary"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            (21) 96913-1553
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded text-primary"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-xl px-4 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-primary font-display font-semibold text-sm uppercase tracking-wider border-b border-gray-100 pb-2"
            >
              {l.label}
            </a>
          ))}
          <a href="tel:21969131553" className="text-accent font-semibold">
            (21) 96913-1553
          </a>
        </div>
      )}
    </header>
  )
}