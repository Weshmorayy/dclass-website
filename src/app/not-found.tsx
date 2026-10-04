import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0A0A0A] flex items-center justify-center text-center px-4 pt-20">
        <div>
          <p className="label-caps text-[#C9A84C] mb-4">Erreur 404</p>
          <h1 className="heading-display text-white text-6xl md:text-8xl mb-6">Page introuvable</h1>
          <p className="text-white/40 text-sm mb-10" style={{ fontFamily: 'var(--font-body)' }}>
            Cette page n&apos;existe pas ou a été déplacée.
          </p>
          <Link href="/" className="btn-outline-white">
            Retour à l&apos;accueil
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
