import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/config/site'

export const metadata: Metadata = {
  title: 'Accessoires',
  description: "Casquettes, lunettes, montres, maroquinerie — D'class Dakar. Livraison 2.000 F.",
}

const accessoiresProducts = products.filter(p => p.category === 'accessoires')
const familles = [
  { label: 'Lunettes', subcategory: 'lunettes' },
  { label: 'Casquettes', subcategory: 'casquettes' },
  { label: 'Maroquinerie', subcategory: 'maroquinerie' },
  { label: 'Montres', subcategory: 'montres' },
]

export default function AccessoiresPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* En-tête */}
        <section className="bg-white py-16 border-b border-[#E0D9CE]">
          <div className="container-site">
            <p className="label-caps text-[#888] mb-3">Accessoires</p>
            <h1 className="heading-display text-[#0A0A0A] text-5xl md:text-7xl">
              Les pièces qui<br />font la différence.
            </h1>
          </div>
        </section>

        {/* Par famille — chaque famille a son propre format */}
        {familles.map((famille, fi) => {
          const familleProducts = accessoiresProducts.filter(p => p.subcategory === famille.subcategory)
          if (familleProducts.length === 0) return null

          const bg = fi % 2 === 0 ? 'bg-white' : 'bg-[#F5F0E8]'

          return (
            <section key={famille.subcategory} className={`${bg} py-14`}>
              <div className="container-site">
                <div className="flex items-baseline justify-between mb-8">
                  <h2 className="heading-display text-[#0A0A0A] text-3xl">{famille.label}</h2>
                  <span className="label-caps text-[#888]">{familleProducts.length} produit{familleProducts.length > 1 ? 's' : ''}</span>
                </div>

                {/* Format variable selon la famille */}
                {famille.subcategory === 'lunettes' ? (
                  // Lunettes : grille compacte avec grandes photos
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                    {familleProducts.map(p => (
                      <ProductCard key={p.id} product={p} size="lg" />
                    ))}
                  </div>
                ) : famille.subcategory === 'casquettes' ? (
                  // Casquettes : une seule grande carte horizontale
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {familleProducts.map(p => (
                      <ProductCard key={p.id} product={p} size="md" />
                    ))}
                  </div>
                ) : famille.subcategory === 'montres' ? (
                  // Montres : carte large centrée
                  <div className="max-w-sm">
                    {familleProducts.map(p => (
                      <ProductCard key={p.id} product={p} size="lg" />
                    ))}
                  </div>
                ) : (
                  // Default
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {familleProducts.map(p => (
                      <ProductCard key={p.id} product={p} />
                    ))}
                  </div>
                )}
              </div>
            </section>
          )
        })}
      </main>
      <Footer />
    </>
  )
}
