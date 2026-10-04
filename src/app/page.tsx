import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ProductCard from '@/components/product/ProductCard'
import { siteConfig, products } from '@/config/site'

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
}

const featuredProducts = products.filter(p => p.featured)
const femmeProducts = products.filter(p => p.category === 'femme').slice(0, 3)
const accessoiresTop = [
  products.find(p => p.slug === 'lunettes-polygone-multicolores')!,
  products.find(p => p.slug === 'casquettes-streetwear')!,
  products.find(p => p.slug === 'lunettes-rimless-dorees')!,
  products.find(p => p.slug === 'montre-classe')!,
].filter(Boolean)

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* ═══ §01 — HERO ═══════════════════════════════════════════════════════ */}
        <section className="relative min-h-screen bg-[#0A0A0A] flex items-center overflow-hidden">
          {/* Texte centré */}
          <div className="container-site relative z-10 flex flex-col items-center text-center pt-20">
            <p className="label-caps text-[#C9A84C] mb-6 tracking-[0.3em]">Dakar · Sénégal</p>
            <h1 className="heading-display text-white text-6xl md:text-8xl lg:text-[7rem] leading-none mb-6">
              Luxury<br />Streetwear
            </h1>
            <p className="text-white/40 uppercase tracking-[0.25em] text-xs mb-10"
              style={{ fontFamily: 'var(--font-body)' }}>
              Fashion · Sportswear · Jewelry · More
            </p>
            <Link href="/boutique" className="btn-outline-white">
              Découvrir la collection <ArrowRight size={16} />
            </Link>
          </div>

          {/* Buste sculptural — débordant hors cadre */}
          <div className="absolute bottom-0 right-0 w-[45%] max-w-[480px] h-[85%] pointer-events-none select-none">
            <Image
              src="/images/products/Screenshot_20261004_103144_Chrome.jpg"
              alt="Parure D'class — Or & Émeraude"
              fill
              className="object-contain object-bottom"
              priority
              sizes="45vw"
            />
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <div className="w-px h-12 bg-white/20" />
          </div>
        </section>

        {/* ═══ §02 — MARQUEE ═══════════════════════════════════════════════════ */}
        <section className="bg-white border-y border-[#E0D9CE] py-4 overflow-hidden">
          <div className="flex whitespace-nowrap">
            <div className="marquee-track flex items-center gap-0">
              {[...Array(2)].map((_, i) => (
                <span key={i} className="flex items-center" style={{ fontFamily: 'var(--font-body)' }}>
                  {['FEMME', 'HOMME', 'ACCESSOIRES', 'BIJOUX', 'LIVRAISON 2.000 F DAKAR', 'DM TO ORDER', 'READY FOR SAGNSÉ ?'].map((text) => (
                    <span key={text} className="flex items-center">
                      <span className="text-[#0A0A0A] text-xs uppercase tracking-[0.2em] px-8">{text}</span>
                      <span className="text-[#C9A84C] text-xs">✦</span>
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ §03 — SPLIT HOMME ══════════════════════════════════════════════ */}
        <section className="bg-[#F5F0E8]">
          <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[600px]">
            {/* Photo 2/3 */}
            <div className="lg:col-span-2 relative min-h-[400px] lg:min-h-[600px]">
              <Image
                src="/images/products/Screenshot_20261004_103933_Chrome.jpg"
                alt="Collection Homme D'class — Chemise col mao"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 67vw"
              />
            </div>

            {/* Texte 1/3 */}
            <div className="flex flex-col justify-center px-10 py-16 lg:py-20">
              <p className="label-caps text-[#888] mb-4">Collection Homme</p>
              <h2 className="heading-display text-[#0A0A0A] text-4xl lg:text-5xl mb-6">
                La classe,<br />c&apos;est un détail.
              </h2>
              <p className="text-[#2C2C2C] text-sm mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                Chemise col mao. Polo maille half-zip.
              </p>
              <p className="price-tag text-lg mb-8">À partir de 10.000 F</p>
              <Link href="/homme" className="btn-primary self-start">
                Voir la collection <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* ═══ §04 — GALERIE FEMME ════════════════════════════════════════════ */}
        <section className="bg-[#0A0A0A] py-16 lg:py-20">
          <div className="container-site">
            <div className="flex items-baseline justify-between mb-10">
              <h2 className="heading-display text-white text-4xl">Collection Femme</h2>
              <Link href="/femme" className="label-caps text-[#C9A84C] hover:text-white transition-colors">
                Tout voir →
              </Link>
            </div>

            {/* Grille asymétrique */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
              {/* Grande carte */}
              <div className="col-span-2 lg:col-span-2 row-span-2">
                <Link href={`/produit/${femmeProducts[0]?.slug}`} className="group block relative">
                  {femmeProducts[0]?.badge && (
                    <span className="absolute top-3 left-3 z-10 bg-[#C9A84C] text-black text-[10px] font-medium uppercase tracking-wider px-2 py-1"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {femmeProducts[0].badge}
                    </span>
                  )}
                  <div className="relative h-[400px] lg:h-[560px] overflow-hidden bg-[#111]">
                    <Image
                      src={femmeProducts[0]?.images[0] ?? ''}
                      alt={femmeProducts[0]?.name ?? ''}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 67vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="text-white/60 text-xs uppercase tracking-wider mb-1" style={{ fontFamily: 'var(--font-body)' }}>
                        {femmeProducts[0]?.name}
                      </p>
                      <p className="price-tag text-lg">{femmeProducts[0]?.price.toLocaleString('fr-FR')} F</p>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Petites cartes */}
              {[femmeProducts[1], products.find(p => p.slug === 'parure-or-emeraude')].filter(Boolean).map((product) => (
                <Link key={product!.id} href={`/produit/${product!.slug}`} className="group block relative">
                  {product!.badge && (
                    <span className="absolute top-3 left-3 z-10 bg-[#C9A84C] text-black text-[10px] font-medium uppercase tracking-wider px-2 py-1"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {product!.badge}
                    </span>
                  )}
                  <div className="relative h-[196px] lg:h-[274px] overflow-hidden bg-[#111]">
                    <Image
                      src={product!.images[0]}
                      alt={product!.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white/60 text-xs mb-0.5" style={{ fontFamily: 'var(--font-body)' }}>
                        {product!.name}
                      </p>
                      <p className="price-tag text-sm">{product!.price.toLocaleString('fr-FR')} F</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ §05 — BANNIÈRE ÉDITORIALE ══════════════════════════════════════ */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <Image
            src="/images/products/Screenshot_20261004_103808_Chrome.jpg"
            alt="Ready For Sagnsé — D'class Dakar"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
          <div className="relative z-10 text-center px-4">
            <p className="label-caps text-[#C9A84C] mb-4 tracking-[0.3em]">Dakar · {siteConfig.social.instagramHandle}</p>
            <h2 className="heading-display text-white text-5xl md:text-7xl">
              Ready For<br />Sagnsé ?
            </h2>
          </div>
        </section>

        {/* ═══ §06 — ACCESSOIRES LISTE ════════════════════════════════════════ */}
        <section className="bg-white py-16 lg:py-20">
          <div className="container-site">
            <div className="flex items-baseline justify-between mb-12">
              <h2 className="heading-display text-[#0A0A0A] text-4xl lg:text-5xl">
                Les pièces qui<br />finissent le look.
              </h2>
              <Link href="/accessoires" className="label-caps text-[#888] hover:text-[#C9A84C] transition-colors hidden md:block">
                Tout voir →
              </Link>
            </div>

            <div className="divide-y divide-[#E0D9CE]">
              {accessoiresTop.map((product, idx) => (
                <Link
                  key={product.id}
                  href={`/produit/${product.slug}`}
                  className="group flex items-center gap-6 py-5 hover:bg-[#F5F0E8] -mx-4 px-4 transition-colors"
                >
                  <span className="text-4xl font-light text-[#E0D9CE] w-12 flex-shrink-0 select-none"
                    style={{ fontFamily: 'var(--font-heading)' }}>
                    0{idx + 1}
                  </span>
                  <div className="w-16 h-16 bg-white border border-[#E0D9CE] flex-shrink-0 relative overflow-hidden">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-contain"
                      sizes="64px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#0A0A0A] text-sm font-medium truncate" style={{ fontFamily: 'var(--font-body)' }}>
                      {product.name}
                    </p>
                    {product.colors && (
                      <p className="text-[#888] text-xs mt-0.5" style={{ fontFamily: 'var(--font-body)' }}>
                        {product.colors.join(' · ')}
                      </p>
                    )}
                  </div>
                  <p className="price-tag text-base flex-shrink-0">{product.price.toLocaleString('fr-FR')} F</p>
                  <ArrowRight size={16} className="text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </Link>
              ))}
            </div>

            <Link href="/accessoires" className="btn-primary mt-8 md:hidden inline-flex">
              Voir tous les accessoires <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* ═══ §07 — BIJOUX SPLIT ═════════════════════════════════════════════ */}
        <section className="bg-[#F5F0E8]">
          <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[520px]">
            {/* Texte 1/3 */}
            <div className="flex flex-col justify-center px-10 py-16 lg:py-20 order-2 lg:order-1">
              <p className="label-caps text-[#888] mb-4">Bijoux</p>
              <h2 className="heading-display text-[#0A0A0A] text-4xl lg:text-5xl mb-6">
                L&apos;or. L&apos;émeraude.<br />Le reste, c&apos;est<br />le regard.
              </h2>
              <p className="price-tag text-lg mb-8">Collier pendentif — 6.000 F</p>
              <Link href="/bijoux" className="btn-primary self-start">
                Voir les bijoux <ArrowRight size={16} />
              </Link>
            </div>

            {/* Photo 2/3 */}
            <div className="lg:col-span-2 relative min-h-[340px] lg:min-h-[520px] order-1 lg:order-2 bg-[#F5F0E8]">
              <Image
                src="/images/products/Screenshot_20261004_103144_Chrome.jpg"
                alt="Parure D'class — Collier & Créole Or Émeraude"
                fill
                className="object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 67vw"
              />
            </div>
          </div>
        </section>

        {/* ═══ §08 — INFOS PRATIQUES ══════════════════════════════════════════ */}
        <section className="bg-[#0A0A0A] py-16 lg:py-20 border-t border-[#1A1A1A]">
          <div className="container-site">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <p className="label-caps text-[#C9A84C] mb-4">Commandes</p>
                <p className="heading-display text-white text-2xl mb-2">WhatsApp · DM</p>
                <p className="text-white/40 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                  {siteConfig.social.instagramHandle}
                </p>
              </div>
              <div>
                <p className="label-caps text-[#C9A84C] mb-4">Livraison</p>
                <p className="heading-display text-white text-2xl mb-2">2.000 F</p>
                <p className="text-white/40 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                  Partout à Dakar
                </p>
              </div>
              <div>
                <p className="label-caps text-[#C9A84C] mb-4">Contact</p>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="heading-display text-white text-2xl mb-2 hover:text-[#C9A84C] transition-colors block"
                >
                  +221 {siteConfig.contact.phone}
                </a>
                <p className="text-white/40 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                  WhatsApp · Messenger
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
