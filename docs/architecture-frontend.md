# Architecture Frontend — APISTOCK

Le frontend est construit avec **Next.js**, offrant performance, SEO et modularité.

## Structure

- `pages/` — routes
- `components/` — UI réutilisable
- `hooks/` — logique partagée
- `services/` — appels API
- `tests/` — tests E2E Playwright

## Tests E2E

Playwright simule :

- Connexion utilisateur  
- Gestion de produits  
- Mouvements de stock  
- Scénarios critiques

## Dashboard

- Graphiques  
- Statistiques  
- Alertes stock critique  
