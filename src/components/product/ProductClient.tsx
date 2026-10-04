'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ShoppingBag, MessageCircle } from 'lucide-react'
import { Product } from '@/config/site'
import { useCart } from '@/components/cart/CartProvider'
import { buildWhatsAppUrl, buildProductOrderMessage } from '@/lib/whatsapp'
import { siteConfig } from '@/config/site'

interface ProductClientProps {
  product: Product
}

export default function ProductClient({ product }: ProductClientProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState<string | undefined>(product.sizes?.[0])
  const [selectedColor, setSelectedColor] = useState<string | undefined>(product.colors?.[0])
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem(product, 1, selectedSize, selectedColor)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const handleWhatsApp = () => {
    const message = buildProductOrderMessage(product.name, selectedSize, selectedColor)
    const url = buildWhatsAppUrl(message)
    window.open(url, '_blank')
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[80vh]">
      {/* ─ Photos gauche ─ */}
      <div className="bg-white">
        {/* Photo principale */}
        <div className="relative h-[400px] lg:h-[600px] bg-white">
          <Image
            src={product.images[selectedImage]}
            alt={product.name}
            fill
            className="object-contain p-6"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          {product.badge && (
            <span className="absolute top-4 left-4 bg-[#0A0A0A] text-white text-[10px] font-medium uppercase tracking-wider px-3 py-1"
              style={{ fontFamily: 'var(--font-body)' }}>
              {product.badge}
            </span>
          )}
        </div>

        {/* Miniatures */}
        {product.images.length > 1 && (
          <div className="flex gap-2 px-4 pb-4 overflow-x-auto">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`relative w-16 h-16 flex-shrink-0 border-2 transition-colors ${
                  selectedImage === i ? 'border-[#0A0A0A]' : 'border-[#E0D9CE] hover:border-[#888]'
                }`}
              >
                <Image
                  src={img}
                  alt={`${product.name} vue ${i + 1}`}
                  fill
                  className="object-contain p-1"
                  sizes="64px"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ─ Infos droite ─ */}
      <div className="bg-[#F5F0E8] flex flex-col justify-center px-8 py-12 lg:px-12 lg:py-16">
        {/* Catégorie */}
        <p className="label-caps text-[#888] mb-4">
          {product.category}{product.subcategory ? ` · ${product.subcategory.replace(/-/g, ' ')}` : ''}
        </p>

        {/* Nom */}
        <h1 className="heading-display text-[#0A0A0A] text-4xl lg:text-5xl mb-4">
          {product.name}
        </h1>

        {/* Prix */}
        <p className="price-tag text-3xl mb-6">
          {product.price.toLocaleString('fr-FR')} F
        </p>

        {/* Description */}
        <p className="text-[#2C2C2C] text-sm leading-relaxed mb-8 max-w-md"
          style={{ fontFamily: 'var(--font-body)' }}>
          {product.description}
        </p>

        {/* Tailles */}
        {product.sizes && product.sizes.length > 0 && (
          <div className="mb-6">
            <p className="label-caps text-[#888] mb-3">Taille</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-10 text-sm font-medium border transition-colors ${
                    selectedSize === size
                      ? 'bg-[#0A0A0A] text-white border-[#0A0A0A]'
                      : 'bg-white text-[#0A0A0A] border-[#E0D9CE] hover:border-[#0A0A0A]'
                  }`}
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Coloris */}
        {product.colors && product.colors.length > 0 && (
          <div className="mb-8">
            <p className="label-caps text-[#888] mb-3">
              Coloris : {selectedColor}
            </p>
            <div className="flex flex-wrap gap-2">
              {product.colors.map(color => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-3 py-2 text-xs border transition-colors ${
                    selectedColor === color
                      ? 'bg-[#0A0A0A] text-white border-[#0A0A0A]'
                      : 'bg-white text-[#0A0A0A] border-[#E0D9CE] hover:border-[#0A0A0A]'
                  }`}
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* CTAs */}
        <div className="flex flex-col gap-3">
          <button
            onClick={handleAddToCart}
            className="w-full py-4 bg-[#0A0A0A] text-white text-sm font-semibold tracking-wider hover:bg-[#C9A84C] hover:text-black transition-colors flex items-center justify-center gap-3"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <ShoppingBag size={18} />
            {added ? 'Ajouté au panier ✓' : 'Ajouter au panier'}
          </button>

          <button
            onClick={handleWhatsApp}
            className="w-full py-4 border border-[#0A0A0A] text-[#0A0A0A] text-sm font-medium tracking-wider hover:bg-[#0A0A0A] hover:text-white transition-colors flex items-center justify-center gap-3"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <MessageCircle size={18} />
            Commander sur WhatsApp
          </button>
        </div>

        {/* Livraison */}
        <div className="mt-8 pt-6 border-t border-[#E0D9CE]">
          <p className="text-[#888] text-xs" style={{ fontFamily: 'var(--font-body)' }}>
            🚚 {siteConfig.delivery.note}
          </p>
        </div>
      </div>
    </div>
  )
}
