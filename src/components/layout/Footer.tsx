import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#1A1A1A]">
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Colonne 1 — Commandes */}
          <div>
            <p className="label-caps text-[#C9A84C] mb-4">Commandes</p>
            <p className="text-white/60 text-sm mb-1" style={{ fontFamily: 'var(--font-body)' }}>
              DM Instagram ou WhatsApp
            </p>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 text-sm hover:text-white transition-colors"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {siteConfig.social.instagramHandle}
            </a>
          </div>

          {/* Colonne 2 — Livraison */}
          <div>
            <p className="label-caps text-[#C9A84C] mb-4">Livraison</p>
            <p className="text-white/60 text-sm mb-1" style={{ fontFamily: 'var(--font-body)' }}>
              {siteConfig.delivery.note}
            </p>
            <p className="text-white/40 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              Commande confirmée par messagerie
            </p>
          </div>

          {/* Colonne 3 — Contact */}
          <div>
            <p className="label-caps text-[#C9A84C] mb-4">Contact</p>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 text-sm hover:text-white transition-colors block mb-1"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              +221 {siteConfig.contact.phone}
            </a>
            <div className="flex items-center gap-4 mt-4">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-[#C9A84C] transition-colors"
                aria-label="Instagram D'class"
              >
                <Instagram size={18} />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-[#C9A84C] transition-colors"
                aria-label="Facebook D'class"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Logo centré + copyright */}
        <div className="border-t border-[#1A1A1A] pt-10 flex flex-col items-center gap-4">
          <Image
            src="/images/brand/Logo-white-transparent.png"
            alt="D'class"
            width={100}
            height={40}
            className="h-9 w-auto object-contain opacity-70"
          />
          <p className="text-white/20 text-xs text-center" style={{ fontFamily: 'var(--font-body)' }}>
            © {new Date().getFullYear()} D&apos;class · Dakar 🇸🇳 · Luxury Streetwear &amp; Creation
          </p>
        </div>
      </div>
    </footer>
  )
}
