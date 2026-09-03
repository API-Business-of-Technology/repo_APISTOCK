# Backend — APISTOCK

Le backend d’APISTOCK est une API REST moderne, sécurisée et extensible, construite avec Node.js, Express et MongoDB.

## Fonctionnalités principales

- Gestion des produits
- Gestion des mouvements de stock (entrées/sorties)
- Authentification JWT
- Rôles utilisateurs (admin, opérateur)
- Logs et audit des opérations
- Validation stricte des données

## Architecture

- `controllers/` — logique API
- `services/` — logique métier
- `models/` — schémas MongoDB
- `middlewares/` — sécurité, validation
- `routes/` — endpoints REST
- `tests/` — Jest + Supertest

## Sécurité

- Rate limiting
- Sanitisation des entrées
- Protection contre injections
- Headers de sécurité

## Tests

- Tests unitaires (Jest)
- Tests d’intégration (Supertest)
- Base de données en mémoire pour tests rapides

## Installation

```bash
npm install
npm run dev
