export type { Product, CartItem } from '@/config/site'

export interface NavItem {
  label: string
  href: string
  external?: boolean
}

export interface PageMeta {
  title: string
  description: string
  canonical?: string
}
