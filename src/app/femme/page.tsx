import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/config/site'

export const metadata: Metadata = {
  title: 'Collection Femme',
  description: "Mode femme D'class — Bérets, parures, t-shirts graphiques, jeans. Livraison 2.000 F à Dakar.",
}

const femmeProducts = products.filter(p => p.category === 'femme')
// Bijoux aussi accessibles via femme
const bijouxProducts = products.filter(p => p.category === 'bijoux')

export default function FemmePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero éditorial plein écran */}
        <section className="relative min-h-screen bg-[#0A0A0A] flex items-end overflow-hidden">
          <Image
            src="/images/products/Screenshot_20261004_103207_Chrome.jpg"
            alt="Collection Femme D'class — Parure Or & Émeraude"
            fill
            className="object-cover object-top"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
          <div className="relative z-10 container-site pb-16">
            <p className="label-caps text-[#C9A84C] mb-3">Collection</p>
            <h1 className="heading-display text-white text-6xl md:text-8xl mb-4">
              L&apos;allure<br />au féminin
            </h1>
            <p className="text-white/50 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              Bérets · Bijoux · Lunettes · Prêt-à-porter
            </p>
          </div>
        </section>

        {/* Sous-catégories visuelles */}
        <section className="bg-[#F5F0E8] py-6">
          <div className="container-site">
            <div className="flex items-center gap-6 overflow-x-auto pb-2">
              {['Tous', 'Bérets', 'Bijoux', 'Lunettes', 'Prêt-à-porter'].map((cat, i) => (
                <button
                  key={cat}
                  className={`label-caps whitespace-nowrap pb-2 border-b-2 transition-colors ${
                    i === 0 ? 'border-[#0A0A0A] text-[#0A0A0A]' : 'border-transparent text-[#888] hover:text-[#0A0A0A]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Produits */}
        <section className="bg-white py-12">
          <div className="container-site">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {femmeProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
              {bijouxProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
