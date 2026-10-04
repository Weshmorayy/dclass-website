'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from './CartProvider'
import { buildWhatsAppUrl, buildCartOrderMessage } from '@/lib/whatsapp'
import { siteConfig } from '@/config/site'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, total, itemCount } = useCart()

  // Verrouille le scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleOrder = () => {
    const message = buildCartOrderMessage(items, total)
    const url = buildWhatsAppUrl(message)
    window.open(url, '_blank')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[999999] flex">
      {/* Backdrop */}
      <div
        className="flex-1 bg-black/60 backdrop-blur-[2px]"
        onClick={closeCart}
        aria-label="Fermer le panier"
      />

      {/* Drawer */}
      <div className="w-[90vw] max-w-[420px] h-full bg-[#0A0A0A] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#1A1A1A]">
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} className="text-[#C9A84C]" />
            <span className="text-white font-medium tracking-widest text-xs uppercase" style={{ fontFamily: 'var(--font-body)' }}>
              Panier {itemCount > 0 && `(${itemCount})`}
            </span>
          </div>
          <button onClick={closeCart} className="text-white/60 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={48} className="text-white/20" />
              <p className="text-white/40 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                Votre panier est vide
              </p>
            </div>
          ) : (
            items.map((item, i) => (
              <div key={`${item.product.id}-${item.size}-${item.color}-${i}`} className="flex gap-4 border-b border-[#1A1A1A] pb-4">
                {/* Photo */}
                <div className="w-20 h-20 bg-white flex-shrink-0 relative overflow-hidden">
                  <Image
                    src={item.product.images[0]}
                    alt={item.product.name}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Infos */}
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm leading-tight mb-1 truncate" style={{ fontFamily: 'var(--font-body)' }}>
                    {item.product.name}
                  </p>
                  {(item.size || item.color) && (
                    <p className="text-white/40 text-xs mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                      {item.size && `Taille ${item.size}`}{item.size && item.color && ' · '}{item.color}
                    </p>
                  )}
                  <p className="text-[#C9A84C] text-sm font-bold mb-3" style={{ fontFamily: 'var(--font-body)' }}>
                    {(item.product.price * item.quantity).toLocaleString('fr-FR')} F
                  </p>

                  {/* Quantité */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.size, item.color)}
                      className="w-7 h-7 border border-[#333] text-white/60 hover:text-white hover:border-white transition-colors flex items-center justify-center"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="text-white text-sm w-4 text-center" style={{ fontFamily: 'var(--font-body)' }}>
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.size, item.color)}
                      className="w-7 h-7 border border-[#333] text-white/60 hover:text-white hover:border-white transition-colors flex items-center justify-center"
                    >
                      <Plus size={12} />
                    </button>
                    <button
                      onClick={() => removeItem(item.product.id, item.size, item.color)}
                      className="ml-auto text-white/30 hover:text-red-400 transition-colors"
                    >
                      <X size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-[#1A1A1A] space-y-3">
            <div className="flex justify-between items-baseline">
              <span className="text-white/60 text-xs uppercase tracking-widest" style={{ fontFamily: 'var(--font-body)' }}>Total</span>
              <span className="text-white text-xl font-bold" style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic' }}>
                {total.toLocaleString('fr-FR')} F
              </span>
            </div>
            <p className="text-white/30 text-xs" style={{ fontFamily: 'var(--font-body)' }}>
              + Livraison : {siteConfig.delivery.fee.toLocaleString('fr-FR')} F partout à Dakar
            </p>
            <button
              onClick={handleOrder}
              className="w-full py-4 bg-[#C9A84C] text-black text-sm font-semibold tracking-wider hover:bg-[#A88730] transition-colors"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Commander via WhatsApp →
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
