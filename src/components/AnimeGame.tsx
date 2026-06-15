import React, { useState, useEffect } from 'react';
import { allData, type Word } from '../data';
import { Trophy, Tv, RefreshCw, Star } from 'lucide-react';

type GameMode = 'anime' | 'inazuma' | 'umamusume';

// Fonction utilitaire pour mélanger un tableau (Fisher-Yates)
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const AnimeGame: React.FC = () => {
  const [currentMode, setCurrentMode] = useState<GameMode>('anime');
  const [currentWord, setCurrentWord] = useState<Word | null>(null);
  const [options, setOptions] = useState<Word[]>([]);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // ÉTAT DU SAC : Contient la liste des mots restants à piocher pour chaque mode
  const [bags, setBags] = useState<Record<GameMode, Word[]>>({
    anime: [],
    inazuma: [],
    umamusume: []
  });

  // Conserve le dernier ID joué par mode pour éviter les doublons au reset du sac
  const [lastPlayedIds, setLastPlayedIds] = useState<Record<GameMode, number | null>>({
    anime: null,
    inazuma: null,
    umamusume: null
  });

  // Récupère la bonne liste de mots brute en fonction du mode sélectionné
  const getWordsByMode = (mode: GameMode): Word[] => {
    switch (mode) {
      case 'inazuma': return allData.inazuma || [];
      case 'umamusume': return allData.umamusume || [];
      case 'anime':
      default:
        return allData.anime || [];
    }
  };

  const nextQuestion = (mode = currentMode) => {
    const activeWords = getWordsByMode(mode);
    if (!activeWords || activeWords.length === 0) return;

    let currentBag = [...(bags[mode] || [])];
    const lastId = lastPlayedIds[mode];

    // Si le sac est vide, on doit le re-générer et le mélanger
    if (currentBag.length === 0) {
      let newBag = shuffleArray(activeWords);

      // RÈGLE ANTI-DOUBLON DU SAC : Si le premier élément tiré (la fin du tableau) 
      // est identique au tout dernier joué de la session précédente, on permute.
      if (newBag[newBag.length - 1].id === lastId && newBag.length > 1) {
        [newBag[newBag.length - 1], newBag[0]] = [newBag[0], newBag[newBag.length - 1]];
      }
      currentBag = newBag;
    }

    // On pioche le mot (dernier du tableau pour optimiser les perfs avec .pop())
    const correct = currentBag.pop()!;

    // Filtre les mauvaises réponses depuis la liste complète (pas depuis le sac restants !)
    const wrongs = activeWords
      .filter(w => w.id !== correct.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    
    // Mise à jour des états globaux
    setCurrentWord(correct);
    setOptions([...wrongs, correct].sort(() => 0.5 - Math.random()));
    setAnswered(false);
    setSelectedId(null);

    // Sauvegarde du reste du sac et de l'ID courant pour ce mode
    setBags(prev => ({ ...prev, [mode]: currentBag }));
    setLastPlayedIds(prev => ({ ...prev, [mode]: correct.id }));
  };

  // Changement de mode de jeu
  const handleModeChange = (mode: GameMode) => {
    setCurrentMode(mode);
    setScore(0);
    nextQuestion(mode); // Utilise et met à jour le sac spécifique à ce mode
  };

  // Premier chargement de l'application
  useEffect(() => {
    nextQuestion('anime');
  }, []);

  const handleAnswer = (wordId: number) => {
    if (answered) return;
    setSelectedId(wordId);
    setAnswered(true);
    if (wordId === currentWord?.id) {
      setScore(prev => prev + 10);
    }
  };

  if (!currentWord) return null;

  return (
    <div className="bg-slate-800 rounded-[2rem] p-5 border border-slate-700 w-full max-w-xl mx-auto shadow-2xl animate-in fade-in duration-500 flex flex-col h-[75vh]">
      
      {/* EN-TÊTE DU JEU */}
      <div className="flex justify-between items-center mb-4 shrink-0">
        <div className="flex items-center gap-2 text-amber-500 font-black text-sm tracking-wider uppercase">
          <Tv size={20} />
          <span>Otaku Quiz GaminG</span>
        </div>
        <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full text-amber-400 font-black text-xs border border-slate-700">
          <Trophy size={14} className="fill-amber-500/20" />
          <span>{score} PTS</span>
        </div>
      </div>

      {/* SÉLECTEUR DE MODE DE JEU */}
      <div className="flex gap-2 mb-4 bg-slate-900 p-1.5 rounded-2xl shadow-inner shrink-0">
        <button 
          onClick={() => handleModeChange('anime')} 
          className={`flex-1 py-2 rounded-xl font-black text-[10px] uppercase tracking-wider transition-all ${
            currentMode === 'anime' ? 'bg-amber-500 text-slate-900 shadow-md font-black' : 'text-slate-500 hover:text-slate-300'
          }`}
        >
          Anime Général
        </button>
        <button 
          onClick={() => handleModeChange('inazuma')} 
          className={`flex-1 py-2 rounded-xl font-black text-[10px] uppercase tracking-wider transition-all ${
            currentMode === 'inazuma' ? 'bg-blue-600 text-white shadow-md font-black' : 'text-slate-500 hover:text-slate-300'
          }`}
        >
          ⚽ Inazuma
        </button>
        <button 
          onClick={() => handleModeChange('umamusume')} 
          className={`flex-1 py-2 rounded-xl font-black text-[10px] uppercase tracking-wider transition-all ${
            currentMode === 'umamusume' ? 'bg-emerald-600 text-white shadow-md font-black' : 'text-slate-500 hover:text-slate-300'
          }`}
        >
          🐴 UmaMusume
        </button>
      </div>

      {/* ZONE DE LA QUESTION */}
      <div className="flex-1 flex flex-col justify-center text-center py-4">
        <div className="text-4xl sm:text-5xl font-black text-white mb-2 tracking-tight drop-shadow-md">
          {currentWord.jp}
        </div>
        <div className="text-sm text-slate-400 font-black uppercase tracking-widest mt-1">
          {currentWord.romaji}
        </div>
        <p className="text-slate-500 text-xs italic mt-4">
          "Comment traduis-tu ce terme de jeu ?"
        </p>
      </div>

      {/* OPTIONS DE RÉPONSES */}
      <div className="space-y-2.5 shrink-0">
        {options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => handleAnswer(opt.id)}
            disabled={answered}
            className={`w-full p-4 rounded-2xl border-2 font-black text-xs uppercase tracking-wide transition-all flex justify-between items-center ${
              answered 
                ? opt.id === currentWord.id 
                  ? 'border-emerald-500 bg-emerald-950/40 text-emerald-400' 
                  : opt.id === selectedId 
                    ? 'border-rose-500 bg-rose-950/40 text-rose-400' 
                    : 'border-slate-900 bg-slate-900/30 opacity-40 text-slate-600'
                : 'border-slate-900 bg-slate-900/60 hover:border-slate-600 hover:bg-slate-900 text-slate-300 active:scale-[0.99]'
            }`}
          >
            <span>{opt.fr}</span>
            {answered && opt.id === currentWord.id && <Star className="text-amber-400 fill-amber-400" size={14} />}
          </button>
        ))}
      </div>

      {/* BOUTON SUIVANT */}
      <div className="h-14 mt-4 shrink-0 flex items-center">
        {answered && (
          <button
            onClick={() => nextQuestion(currentMode)}
            className={`w-full py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest text-white shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-all ${
              currentMode === 'inazuma' ? 'bg-blue-600 hover:bg-blue-700 shadow-blue-900/20' :
              currentMode === 'umamusume' ? 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-900/20' :
              'bg-amber-500 text-slate-900 hover:bg-amber-600 shadow-amber-500/10'
            }`}
          >
            <RefreshCw size={14} className="animate-spin-slow" /> 
            <span>Question suivante</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default AnimeGame;