import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/config/site'

interface ProductCardProps {
  product: Product
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function ProductCard({ product, size = 'md', className = '' }: ProductCardProps) {
  const heights: Record<string, string> = {
    sm: 'h-[200px]',
    md: 'h-[280px]',
    lg: 'h-[360px]',
  }

  return (
    <Link href={`/produit/${product.slug}`} className={`group block ${className}`}>
      {/* Image wrapper */}
      <div className="relative">
        {/* Badge — hors overflow-hidden */}
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 bg-[#0A0A0A] text-white text-[10px] font-medium uppercase tracking-wider px-2 py-1"
            style={{ fontFamily: 'var(--font-body)' }}>
            {product.badge}
          </span>
        )}

        {/* Photo container */}
        <div className={`overflow-hidden bg-white ${heights[size]}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>
      </div>

      {/* Infos */}
      <div className="pt-3 pb-1">
        {product.subcategory && (
          <p className="label-caps text-[#888] mb-1">{product.subcategory.replace(/-/g, ' ')}</p>
        )}
        <p className="text-[#0A0A0A] text-sm leading-snug mb-1 group-hover:text-[#C9A84C] transition-colors"
          style={{ fontFamily: 'var(--font-body)' }}>
          {product.name}
        </p>
        <p className="price-tag text-base">
          {product.price.toLocaleString('fr-FR')} F
        </p>
      </div>
    </Link>
  )
}
