import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/config/site'

export const metadata: Metadata = {
  title: 'Bijoux',
  description: "Colliers, bracelets, boucles d'oreilles dorés — D'class Dakar. Livraison 2.000 F.",
}

const bijouxProducts = products.filter(p => p.category === 'bijoux')

export default function BijouxPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero galerie — fond ivoire, ambiance joaillerie */}
        <section className="bg-[#F5F0E8] min-h-screen flex flex-col justify-end pt-32 pb-16">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
              <div>
                <p className="label-caps text-[#888] mb-4">Bijoux D&apos;class</p>
                <h1 className="heading-display text-[#0A0A0A] text-6xl md:text-8xl mb-6">
                  L&apos;or.<br />L&apos;émeraude.
                </h1>
                <p className="text-[#2C2C2C] text-base leading-relaxed max-w-sm" style={{ fontFamily: 'var(--font-body)' }}>
                  Colliers, créoles, bracelets. Chaque pièce présentée sur buste sculptural.
                </p>
              </div>

              {/* Grande photo buste sculptural */}
              <div className="relative h-[400px] lg:h-[500px] bg-[#F5F0E8]">
                <Image
                  src="/images/products/Screenshot_20261004_103144_Chrome.jpg"
                  alt="Parure D'class — Buste sculptural Or & Émeraude"
                  fill
                  className="object-contain object-bottom"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Grille bijoux — fond blanc, beaucoup d'espace */}
        <section className="bg-white py-20">
          <div className="container-site">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-3xl mx-auto">
              {bijouxProducts.map(p => (
                <ProductCard key={p.id} product={p} size="lg" />
              ))}
            </div>
          </div>
        </section>

        {/* Bande éditoriale */}
        <section className="bg-[#0A0A0A] py-12">
          <div className="container-site text-center">
            <p className="heading-display text-white/20 text-3xl md:text-5xl">
              Le reste, c&apos;est le regard.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
