# Architecture Backend — APISTOCK

Le backend repose sur une architecture propre, testée et extensible.

## Structure

- `controllers/` — logique API
- `services/` — logique métier
- `models/` — schémas MongoDB
- `middlewares/` — sécurité, validation
- `routes/` — endpoints REST
- `tests/` — unitaires + intégration

## Sécurité

- Rate limiting  
- Validation stricte des données  
- Nettoyage des entrées (sanitisation)  
- Headers de sécurité  
- Protection contre injections

## Tests

- **Jest** pour les tests unitaires  
- **Supertest** pour les tests d’intégration  
- Base de données en mémoire pour tests rapides

## Scalabilité

- Architecture stateless  
- Compatible microservices  
- Peut évoluer vers Kafka / RabbitMQ  
