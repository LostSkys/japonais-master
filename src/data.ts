// --- 1. Définition du type commun ---
export interface Word {
  id: number;
  en: string;
  fr: string;
  jp: string;
  romaji: string;
}

// --- 2. Importation de TOUS tes fichiers de données ---
// J'ai vérifié tes fichiers : beaucoup utilisent "words" ou le nom direct du fichier
import { adjectiveWords } from './data/adjectives';
import { animalWords } from './data/animals';
import { animeWords } from './data/anime';
import { bodyWords } from './data/body';
import { countryWords } from './data/countries';
import { foodWords } from './data/food';
import { gameWords } from './data/games';
import { marketWords } from './data/market';
import { objectWords } from './data/objets'; // Corrigé (vu dans ton fichier)
import { placeWords } from './data/places';
import { politWords } from './data/polit';
import { questionWords } from './data/questions';
import { allSentences } from './data/sentences'; // Corrigé (vu dans ton fichier)
import { sentencesV2 } from './data/sentencesV2'; // Corrigé (vu dans ton fichier)
import { sportWords } from './data/sports';
import { timeWords } from './data/time';
import { verbWords } from './data/verbs';

// --- 3. Création de l'objet global par catégories ---
export const allData: Record<string, Word[]> = {
  adjectives: adjectiveWords,
  animals: animalWords,
  anime: animeWords,
  body: bodyWords,
  countries: countryWords,
  food: foodWords,
  games: gameWords,
  market: marketWords,
  objets: objectWords,
  places: placeWords,
  polit: politWords,
  questions: questionWords,
  sentences: allSentences,
  sentencesV2: sentencesV2,
  sports: sportWords,
  time: timeWords,
  verbs: verbWords
};

// --- 4. Utilitaires ---

// Combine tous les tableaux en un seul grand catalogue
export const allWords: Word[] = Object.values(allData).flat();

// Liste des catégories pour ton menu (Label = nom affiché dans l'appli)
export const categories = [
  { id: 'verbs', label: 'Verbes', icon: '🚀' },
  { id: 'adjectives', label: 'Adjectifs', icon: '🎨' },
  { id: 'sentences', label: 'Phrases (V1)', icon: '💬' },
  { id: 'sentencesV2', label: 'Phrases (V2)', icon: '🗣️' },
  { id: 'time', label: 'Temps & Dates', icon: '📅' },
  { id: 'questions', label: 'Questions', icon: '❓' },
  { id: 'body', label: 'Corps Humain', icon: '🧠' },
  { id: 'countries', label: 'Pays', icon: '🌍' },
  { id: 'food', label: 'Nourriture', icon: '🍱' },
  { id: 'games', label: 'Gaming', icon: '🎮' },
  { id: 'sports', label: 'Sports', icon: '⚽' },
  { id: 'animals', label: 'Animaux', icon: '🐾' },
  { id: 'anime', label: 'Anime', icon: '🧧' },
  { id: 'market', label: 'Marché / Achats', icon: '🛒' },
  { id: 'objets', label: 'Objets', icon: '📦' },
  { id: 'places', label: 'Lieux', icon: '📍' },
  { id: 'polit', label: 'Politesse', icon: '🙏' },
];