
# **README Desktop — (desktop/README.md)**

```markdown
# Application Desktop — APISTOCK

L’application desktop est développée avec Electron pour permettre une utilisation hors-ligne dans les entrepôts.

## Fonctionnalités
- Mode hors-ligne complet
- Synchronisation automatique avec l’API
- Interface optimisée pour scanners/code-barres
- Gestion locale des données
- Mise à jour automatique

## Architecture
- `main/` — processus principal
- `renderer/` — interface utilisateur
- `services/` — synchronisation API
- `storage/` — base locale

## Installation
```bash
npm install
npm run electron
