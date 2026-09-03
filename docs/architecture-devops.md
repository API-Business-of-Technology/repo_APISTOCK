# 🛠 Architecture DevOps — APISTOCK

APISTOCK utilise une pipeline CI/CD de niveau professionnel.

## Pipeline GitLab

Jobs :

- `lint`  
- `test:unit`  
- `test:integration`  
- `test:e2e`  
- `test:load`  
- `sonar`  
- `build`  
- `deploy`

## Qualité

- SonarQube  
- ESLint  
- Prettier  
- Husky

## Artefacts

- Rapports de tests  
- Couverture  
- Build frontend  
- Build desktop  
