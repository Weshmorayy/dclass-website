import { siteConfig, CartItem } from '@/config/site'

export function buildWhatsAppUrl(message: string): string {
  const phone = siteConfig.contact.whatsapp.replace(/\D/g, '')
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${phone}?text=${encoded}`
}

export function buildCartOrderMessage(items: CartItem[], total: number): string {
  const lines = [
    `🛍️ *Commande D'class*`,
    '',
    ...items.map(item => {
      const details = [item.product.name]
      if (item.size) details.push(`Taille : ${item.size}`)
      if (item.color) details.push(`Coloris : ${item.color}`)
      return `• ${details.join(' | ')} x${item.quantity} — ${(item.product.price * item.quantity).toLocaleString('fr-FR')} F`
    }),
    '',
    `💰 *Total : ${total.toLocaleString('fr-FR')} F*`,
    `🚚 Livraison Dakar : 2.000 F`,
    '',
    `Merci de confirmer 🙏`,
  ]
  return lines.join('\n')
}

export function buildProductOrderMessage(productName: string, size?: string, color?: string): string {
  const lines = [
    `Bonjour D'class 👋`,
    '',
    `Je souhaite commander :`,
    `• ${productName}${size ? ` — Taille ${size}` : ''}${color ? ` — Coloris ${color}` : ''}`,
    '',
    `Merci de confirmer la disponibilité 🙏`,
  ]
  return lines.join('\n')
}
