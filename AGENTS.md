# AGENTS.md — D'class Website

> Règles spécifiques au projet dclass-website. Lire en plus de ~/atelier/AGENTS.md.

## Infos Projet

- **Client** : D'class
- **Slug** : dclass
- **Type** : Boutique en ligne complète (vitrine + panier WhatsApp)
- **Stack** : Next.js 15 + React 19 + TypeScript + Tailwind CSS
- **Statut** : Build en cours

## Palette

| Variable | Hex | Rôle |
|---|---|---|
| `--color-bg-primary` | `#FFFFFF` | Fond principal |
| `--color-bg-secondary` | `#0A0A0A` | Fond sombre |
| `--color-bg-accent` | `#F5F0E8` | Ivoire |
| `--color-accent` | `#C9A84C` | Or chaud |

## Pages

- `/` Accueil 8 sections
- `/boutique` Catalogue complet
- `/femme` `/homme` `/accessoires` `/bijoux` Pages catégories
- `/produit/[slug]` Fiche produit

## Architecture

- Données : `src/config/site.ts` uniquement
- Panier : Context API dans `CartProvider` (pas de zustand)
- Commandes : WhatsApp +221776916943

## Contacts Client

- WhatsApp : +221 77 691 69 43
- Instagram : @dclass_sn
- Facebook : D'class (382 abonnés)
