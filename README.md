# 🎌 Japonais Master v2.0

Une application de révision interactive pour apprendre le japonais avec style. Ce projet inclut des Flashcards, des jeux de paires (Match Game), des quiz sur les phrases cultes d'Anime et des exercices de compréhension textuelle.

---

## 🚀 Installation rapide

Suis ces étapes pour lancer l'application sur ton ordinateur :

1. **Prérequis** : Assure-toi d'avoir [Node.js](https://nodejs.org/) installé (version 18 ou plus recommandée).

2. **Extraire le projet** : Ouvre le dossier du projet dans ton terminal ou ton éditeur (VS Code).

3. **Installer les dépendances** :
   ```bash
   npm install
   ```

4. **Lancer l'application** :
   ```bash
   npm run dev
   ```

5. **Ouvrir dans le navigateur** : L'application sera disponible à l'adresse suivante :
   `http://localhost:5173`

---

## 🎮 Modes de jeu inclus

- 🗂️ **Flashcards** : Révise ton vocabulaire (Français → Japonais). Clique sur la carte pour voir la réponse.
- 🎴 **Match Pairs** : Associe les mots français à leur écriture japonaise le plus vite possible.
- 💬 **Phrases** : Teste tes connaissances sur les phrases de la vie quotidienne.
- 🧧 **Mode Anime** : Un quiz spécial pour les fans d'animation japonaise (répliques cultes).
- ✍️ **Paragraphes** : Complète des textes à trous pour améliorer ta compréhension globale.

---

## 🛠️ Technologies utilisées

- **React + Vite** — pour la rapidité
- **TypeScript** — pour un code propre et robuste
- **Tailwind CSS** — pour le design "Gaming Dark"
- **Lucide React** — pour les icônes

---

## 📂 Structure des données

Si tu veux ajouter tes propres mots ou phrases, tout se passe dans le dossier `src/data/` :

- `data.ts` — Contient le dictionnaire principal.
- `sentences.ts` & `sentencesV2.ts` — Contient les bases de données de phrases.
- `anime.ts` — Le lexique spécial Anime.

---