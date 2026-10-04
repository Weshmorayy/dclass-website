import { MetadataRoute } from 'next'
import { siteConfig, products } from '@/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/boutique`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/femme`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/homme`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/accessoires`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/bijoux`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
  ]

  const productRoutes: MetadataRoute.Sitemap = products.map(p => ({
    url: `${base}/produit/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...productRoutes]
}
