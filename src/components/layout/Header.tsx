'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ShoppingBag, Instagram, Facebook } from 'lucide-react'
import { useCart } from '@/components/cart/CartProvider'
import CartDrawer from '@/components/cart/CartDrawer'
import { siteConfig } from '@/config/site'

const navLinks = [
  { label: 'Femme', href: '/femme' },
  { label: 'Homme', href: '/homme' },
  { label: 'Accessoires', href: '/accessoires' },
  { label: 'Bijoux', href: '/bijoux' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { openCart, itemCount } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Verrouille scroll quand menu ouvert
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0A0A0A] border-b border-[#1A1A1A]' : 'bg-transparent'
        }`}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Nav Desktop — gauche */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white text-xs uppercase tracking-[0.18em] hover:text-[#C9A84C] transition-colors"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Logo — centré desktop, gauche mobile */}
            <Link href="/" className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
              <Image
                src="/images/brand/Logo-white-transparent.png"
                alt="D'class — Luxury Streetwear"
                width={110}
                height={44}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>

            {/* Actions — droite */}
            <div className="flex items-center gap-4">
              {/* Réseaux — desktop seulement */}
              <div className="hidden lg:flex items-center gap-3">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label="Instagram D'class"
                >
                  <Instagram size={18} />
                </a>
              </div>

              {/* Panier */}
              <button
                onClick={openCart}
                className="relative text-white hover:text-[#C9A84C] transition-colors p-1"
                aria-label="Ouvrir le panier"
              >
                <ShoppingBag size={22} />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#C9A84C] text-black text-[10px] font-bold flex items-center justify-center rounded-full">
                    {itemCount}
                  </span>
                )}
              </button>

              {/* Hamburger — mobile */}
              <button
                onClick={() => setMenuOpen(true)}
                className="lg:hidden text-white p-1"
                aria-label="Menu"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Drawer Navigation Mobile — monté à la racine */}
      {menuOpen && (
        <div className="fixed inset-0 z-[999998] flex">
          {/* Backdrop */}
          <div className="flex-1 bg-black/60" onClick={() => setMenuOpen(false)} />

          {/* Drawer */}
          <div className="w-[85vw] max-w-sm h-full bg-[#0A0A0A] flex flex-col px-8 py-8">
            {/* Close */}
            <button
              onClick={() => setMenuOpen(false)}
              className="self-end text-white/60 hover:text-white transition-colors mb-12"
            >
              <X size={24} />
            </button>

            {/* Logo */}
            <Image
              src="/images/brand/Logo-white-transparent.png"
              alt="D'class"
              width={90}
              height={36}
              className="h-8 w-auto object-contain mb-12"
            />

            {/* Links */}
            <nav className="flex flex-col gap-6 flex-1">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white text-3xl hover:text-[#C9A84C] transition-colors"
                  style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontWeight: 600 }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/boutique"
                onClick={() => setMenuOpen(false)}
                className="text-white/50 text-3xl hover:text-[#C9A84C] transition-colors mt-4"
                style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontWeight: 600 }}
              >
                Tout voir
              </Link>
            </nav>

            {/* Contact */}
            <div className="border-t border-[#1A1A1A] pt-6 space-y-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/50 hover:text-white transition-colors text-sm"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <Instagram size={16} />
                {siteConfig.social.instagramHandle}
              </a>
              <p className="text-white/30 text-xs" style={{ fontFamily: 'var(--font-body)' }}>
                {siteConfig.contact.phone}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Drawer Panier */}
      <CartDrawer />
    </>
  )
}
