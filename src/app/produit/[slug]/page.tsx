import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ProductCard from '@/components/product/ProductCard'
import ProductClient from '@/components/product/ProductClient'
import { products, siteConfig } from '@/config/site'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = products.find(p => p.slug === slug)
  if (!product) return {}
  return {
    title: product.name,
    description: `${product.name} — ${product.price.toLocaleString('fr-FR')} F. ${product.description}`,
    openGraph: {
      images: [{ url: product.images[0] }],
    },
  }
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = products.find(p => p.slug === slug)
  if (!product) notFound()

  // Produits similaires (même catégorie, sauf le produit courant)
  const related = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Fil d'Ariane */}
        <div className="bg-white border-b border-[#E0D9CE] px-4 lg:px-8 py-3">
          <div className="container-site flex items-center gap-2">
            <Link href="/" className="text-[#888] text-xs hover:text-[#0A0A0A] transition-colors"
              style={{ fontFamily: 'var(--font-body)' }}>
              Accueil
            </Link>
            <span className="text-[#E0D9CE]">/</span>
            <Link href={`/${product.category}`} className="text-[#888] text-xs hover:text-[#0A0A0A] transition-colors capitalize"
              style={{ fontFamily: 'var(--font-body)' }}>
              {product.category}
            </Link>
            <span className="text-[#E0D9CE]">/</span>
            <span className="text-[#0A0A0A] text-xs truncate" style={{ fontFamily: 'var(--font-body)' }}>
              {product.name}
            </span>
          </div>
        </div>

        {/* Fiche produit */}
        <ProductClient product={product} />

        {/* Produits similaires */}
        {related.length > 0 && (
          <section className="bg-white py-16 border-t border-[#E0D9CE]">
            <div className="container-site">
              <h2 className="heading-display text-[#0A0A0A] text-3xl mb-8">Vous aimerez aussi</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {related.map(p => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
