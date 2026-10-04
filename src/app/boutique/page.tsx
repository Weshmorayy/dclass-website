import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ProductCard from '@/components/product/ProductCard'
import { products, categories, siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Boutique',
  description: `Tout le catalogue D'class — ${siteConfig.tagline}. Femme, Homme, Accessoires, Bijoux.`,
}

export default function BoutiquePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* En-tête */}
        <div className="bg-[#0A0A0A] py-16 text-center">
          <p className="label-caps text-[#C9A84C] mb-3">Catalogue complet</p>
          <h1 className="heading-display text-white text-5xl md:text-6xl">La Collection</h1>
        </div>

        {/* Filtres par catégorie */}
        <div className="bg-white border-b border-[#E0D9CE] sticky top-16 lg:top-20 z-40">
          <div className="container-site">
            <div className="flex items-center gap-8 overflow-x-auto py-4 scrollbar-hide">
              <a href="#tous" className="label-caps text-[#0A0A0A] whitespace-nowrap border-b-2 border-[#0A0A0A] pb-1">
                Tous ({products.length})
              </a>
              {categories.map(cat => (
                <a
                  key={cat.id}
                  href={`/${cat.slug}`}
                  className="label-caps text-[#888] whitespace-nowrap hover:text-[#0A0A0A] transition-colors"
                >
                  {cat.label} ({cat.count})
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Grille */}
        <section id="tous" className="bg-white py-12">
          <div className="container-site">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
