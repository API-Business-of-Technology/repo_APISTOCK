
# **README DevOps — (devops/README.md)**

```markdown
# DevOps — APISTOCK

APISTOCK utilise une pipeline CI/CD complète basée sur GitLab.

## Pipeline CI/CD
Jobs :
- Lint
- Tests unitaires
- Tests d’intégration
- Tests E2E
- Tests de charge (Artillery)
- Analyse SonarQube
- Build frontend
- Build desktop
- Déploiement

## Qualité
- ESLint
- Prettier
- SonarQube
- Husky (pre-commit, pre-push)

## Artefacts
- Rapports de tests
- Couverture
- Builds
- Rapports de qualité

## Infrastructure
- Docker
- Environnements staging & production
- Variables CI/CD sécurisées
