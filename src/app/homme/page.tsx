import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/config/site'

export const metadata: Metadata = {
  title: 'Collection Homme',
  description: "Mode homme D'class — Chemises col mao, polos maille, vestes. Livraison 2.000 F à Dakar.",
}

const hommeProducts = products.filter(p => p.category === 'homme')

const matieres = ['Maille', 'Popeline', 'Jacquard', 'Similicuir', 'Denim']

export default function HommePage() {
  return (
    <>
      <Header />
      <main>
        {/* Split éditorial asymétrique */}
        <section className="bg-[#F5F0E8] min-h-screen grid grid-cols-1 lg:grid-cols-2">
          {/* Photo gauche */}
          <div className="relative min-h-[60vh] lg:min-h-screen order-2 lg:order-1">
            <Image
              src="/images/products/Screenshot_20261004_104047_Chrome.jpg"
              alt="Collection Homme D'class — Polo maille"
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Texte droite */}
          <div className="flex flex-col justify-center px-10 py-20 lg:py-32 order-1 lg:order-2 pt-28 lg:pt-32">
            <p className="label-caps text-[#888] mb-6">Collection Homme</p>
            <h1 className="heading-display text-[#0A0A0A] text-5xl lg:text-7xl mb-8">
              LA CLASSE<br />AVEC<br />D&apos;CLASS
            </h1>

            {/* Matières */}
            <div className="flex flex-wrap gap-2 mb-10">
              {matieres.map(m => (
                <span key={m} className="border border-[#C9A84C]/40 text-[#888] text-xs px-3 py-1"
                  style={{ fontFamily: 'var(--font-body)', letterSpacing: '0.1em' }}>
                  {m}
                </span>
              ))}
            </div>

            <p className="price-tag text-xl">À partir de 10.000 F</p>
          </div>
        </section>

        {/* Marquee matières */}
        <section className="bg-[#0A0A0A] py-4 overflow-hidden">
          <div className="flex whitespace-nowrap">
            <div className="marquee-track flex items-center">
              {[...Array(3)].map((_, i) => (
                <span key={i} className="flex items-center" style={{ fontFamily: 'var(--font-body)' }}>
                  {matieres.map(m => (
                    <span key={m} className="flex items-center">
                      <span className="text-white/40 text-xs uppercase tracking-[0.2em] px-8">{m}</span>
                      <span className="text-[#C9A84C] text-xs">✦</span>
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Grille produits */}
        <section className="bg-white py-16">
          <div className="container-site">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {hommeProducts.map(p => (
                <ProductCard key={p.id} product={p} size="lg" />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
