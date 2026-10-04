/**
 * site.ts — Source unique de vérité — D'class
 */

export interface Product {
  id: string
  slug: string
  name: string
  category: 'femme' | 'homme' | 'accessoires' | 'bijoux'
  subcategory?: string
  price: number
  sizes?: string[]
  colors?: string[]
  images: string[]
  description: string
  badge?: string
  inStock: boolean
  featured?: boolean
}

export interface CartItem {
  product: Product
  quantity: number
  size?: string
  color?: string
}

export const siteConfig = {
  name: "D'class",
  tagline: 'Luxury Streetwear & Creation',
  description: "Boutique mode dakaroise — Fashion, Sportswear, Jewelry & more. Livraison 2.000 F partout à Dakar.",
  url: 'https://dclass-website.com',

  contact: {
    phone: '77 691 69 43',
    whatsapp: '221776916943',
    email: '',
    address: '',
    neighborhood: 'LVL UP',
    city: 'Dakar',
    country: 'Sénégal',
  },

  social: {
    instagram: 'https://instagram.com/dclass_sn',
    facebook: 'https://facebook.com/dclass',
    instagramHandle: '@dclass_sn',
  },

  delivery: {
    available: true,
    fee: 2000,
    zones: ['Dakar'],
    freeFrom: 0,
    note: 'Livraison 2.000 F partout à Dakar',
  },

  payments: {
    wave: false,
    orangeMoney: false,
    cash: true,
    note: 'Paiement à confirmer avec la boutique',
  },

  seo: {
    keywords: [
      'boutique mode Dakar',
      'streetwear Dakar',
      'vêtements homme femme Dakar',
      'bijoux Dakar',
      'accessoires mode Sénégal',
      'luxury streetwear Dakar',
    ],
    ogImage: '/images/brand/Logo-white-dark-background.png',
  },
}

// ─── Catalogue Produits ───────────────────────────────────────────────────────

export const products: Product[] = [
  // ── FEMME ──
  {
    id: 'f-01',
    slug: 'beret-laine-rouge',
    name: 'Béret laine — Rouge',
    category: 'femme',
    subcategory: 'accessoires-tête',
    price: 4000,
    colors: ['Rouge', 'Noir'],
    images: [
      '/images/products/Screenshot_20261004_103242_Chrome.jpg',
      '/images/products/Screenshot_20261004_103315_Chrome.jpg',
    ],
    description: 'Béret en laine feutrée. Disponible en rouge cerise et noir velouté.',
    badge: 'Nouveau',
    inStock: true,
    featured: true,
  },
  {
    id: 'f-02',
    slug: 'beret-laine-noir',
    name: 'Béret laine — Noir',
    category: 'femme',
    subcategory: 'accessoires-tête',
    price: 4000,
    colors: ['Noir', 'Rouge'],
    images: [
      '/images/products/Screenshot_20261004_103315_Chrome.jpg',
      '/images/products/Screenshot_20261004_103242_Chrome.jpg',
    ],
    description: 'Béret en laine feutrée. Disponible en noir velouté et rouge cerise.',
    inStock: true,
    featured: true,
  },
  {
    id: 'f-03',
    slug: 'parure-or-emeraude',
    name: 'Parure collier & créole — Or & Émeraude',
    category: 'bijoux',
    price: 6000,
    images: [
      '/images/products/Screenshot_20261004_103144_Chrome.jpg',
      '/images/products/Screenshot_20261004_103207_Chrome.jpg',
    ],
    description: 'Collier herringbone doré avec pendentif émeraude et créole assortie. Buste sculptural inclus dans la mise en scène.',
    badge: 'Best-seller',
    inStock: true,
    featured: true,
  },
  // ── HOMME ──
  {
    id: 'h-01',
    slug: 'chemise-col-mao-blanche',
    name: 'Chemise col mao — Blanche',
    category: 'homme',
    subcategory: 'hauts',
    price: 10000,
    sizes: ['M', 'L', 'XL', '2XL'],
    images: [
      '/images/products/Screenshot_20261004_104002_Chrome.jpg',
      '/images/products/Screenshot_20261004_103933_Chrome.jpg',
    ],
    description: 'The Essential Mandarin Shirt. Popeline lisse, coupe ajustée, col mao. Disponible en M, L, XL, 2XL.',
    badge: 'Prix fixe',
    inStock: true,
    featured: true,
  },
  {
    id: 'h-02',
    slug: 'polo-maille-zip-noir',
    name: 'Polo maille half-zip — Noir',
    category: 'homme',
    subcategory: 'hauts',
    price: 10000,
    sizes: ['L', 'XL', '2XL', '3XL'],
    images: [
      '/images/products/Screenshot_20261004_104047_Chrome.jpg',
      '/images/products/Screenshot_20261004_104108_Chrome.jpg',
    ],
    description: 'The Essential Knitted Half-Zip Polo Shirt. Maille fine noire, bandes verticales blanc et camel, zip central. Disponible en L, XL, 2XL, 3XL.',
    inStock: true,
    featured: true,
  },
  // ── ACCESSOIRES ──
  {
    id: 'a-01',
    slug: 'lunettes-polygone-multicolores',
    name: 'Lunettes de mode Polygone',
    category: 'accessoires',
    subcategory: 'lunettes',
    price: 5000,
    colors: ['Bleu glacier', 'Rose poudré', 'Gris fumé', 'Noir'],
    images: [
      '/images/products/Screenshot_20261004_103345_Chrome.jpg',
    ],
    description: 'Lunettes rectangulaires à masque intégral. Monture noire épaisse, verres teintés. 4 coloris disponibles.',
    inStock: true,
    featured: true,
  },
  {
    id: 'a-02',
    slug: 'lunettes-rimless-dorees',
    name: 'Lunettes rimless — Monture dorée',
    category: 'accessoires',
    subcategory: 'lunettes',
    price: 10000,
    images: [
      '/images/products/Screenshot_20261004_103515_Chrome.jpg',
    ],
    description: 'Lunettes sans cerclage, verres transparents, branches dorées finement travaillées. Livrées avec étui rigide noir.',
    inStock: true,
    featured: false,
  },
  {
    id: 'a-03',
    slug: 'casquettes-streetwear',
    name: 'Casquettes Streetwear',
    category: 'accessoires',
    subcategory: 'casquettes',
    price: 5000,
    images: [
      '/images/products/Screenshot_20261004_103808_Chrome.jpg',
      '/images/products/Screenshot_20261004_103734_Chrome.jpg',
    ],
    description: "Casquettes en denim délavé. Vendues à l'unité.",
    inStock: true,
    featured: false,
  },
  {
    id: 'a-04',
    slug: 'trousse-premium',
    name: 'Sac premium — 2 coloris',
    category: 'accessoires',
    subcategory: 'maroquinerie',
    price: 10000,
    colors: ['Noir', 'Cognac'],
    images: [
      '/images/products/Screenshot_20261004_103631_Chrome.jpg',
    ],
    description: 'Trousse/pochette en cuir PU. Fermetures dorées, poignée latérale. Disponible en noir mat et brun cognac.',
    inStock: true,
    featured: false,
  },
  // ── BIJOUX ──
  {
    id: 'b-01',
    slug: 'bracelet-jubilee-or-argent',
    name: 'Bracelets Jubilee — Or & Argent',
    category: 'bijoux',
    price: 6000,
    colors: ['Or', 'Argent'],
    images: [
      '/images/products/Screenshot_20261004_103547_Chrome.jpg',
    ],
    description: 'Bracelets à maillons plats type jubilee. Disponibles en finition dorée et argentée.',
    inStock: true,
    featured: true,
  },
  // ── MONTRES ──
  {
    id: 'a-05',
    slug: 'montre-classe',
    name: 'Montre de classe — Acier',
    category: 'accessoires',
    subcategory: 'montres',
    price: 20000,
    images: [
      '/images/products/Screenshot_20261004_104318_Chrome.jpg',
    ],
    description: 'Montre homme acier argenté, cadran LED bleu. Livrée avec coffret complet.',
    badge: 'Cadeau',
    inStock: true,
    featured: false,
  },
]

export const categories = [
  { id: 'femme', slug: 'femme', label: 'Femme', count: products.filter(p => p.category === 'femme').length },
  { id: 'homme', slug: 'homme', label: 'Homme', count: products.filter(p => p.category === 'homme').length },
  { id: 'accessoires', slug: 'accessoires', label: 'Accessoires', count: products.filter(p => p.category === 'accessoires').length },
  { id: 'bijoux', slug: 'bijoux', label: 'Bijoux', count: products.filter(p => p.category === 'bijoux').length },
]
