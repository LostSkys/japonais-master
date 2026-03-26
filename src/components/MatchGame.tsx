import React, { useState, useEffect } from 'react';
import { allWords, type Word } from '../data'; 

interface Card {
  id: string; 
  wordId: number; 
  content: string;
  type: 'lang' | 'jp';
}

interface MatchGameProps {
  dataOverride?: Word[]; // Permet de passer les mots d'anime spécifiquement
}

const MatchGame: React.FC<MatchGameProps> = ({ dataOverride }) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [selected, setSelected] = useState<Card[]>([]);
  const [solved, setSolved] = useState<number[]>([]);

  // Utilise soit les mots fournis (Anime), soit tous les mots par défaut
  const sourceWords = dataOverride || allWords;

  const initGame = () => {
    const selectedWords = [...sourceWords].sort(() => 0.5 - Math.random()).slice(0, 4);
    const gameCards: Card[] = [];

    selectedWords.forEach(w => {
      // Carte Langue
      gameCards.push({ id: `${w.id}-fr`, wordId: w.id, content: w.fr, type: 'lang' });
      // Carte Japonaise
      gameCards.push({ id: `${w.id}-jp`, wordId: w.id, content: `${w.jp} (${w.romaji})`, type: 'jp' });
    });

    setCards(gameCards.sort(() => 0.5 - Math.random()));
    setSolved([]); 
    setSelected([]); 
  };

  useEffect(() => {
    initGame();
  }, [dataOverride]);

  const handleCardClick = (card: Card) => {
    if (selected.length === 2 || solved.includes(card.wordId) || selected.find(s => s.id === card.id)) return;

    const newSelected = [...selected, card];
    setSelected(newSelected);

    if (newSelected.length === 2) {
      if (newSelected[0].wordId === newSelected[1].wordId && newSelected[0].type !== newSelected[1].type) {
        setSolved([...solved, newSelected[0].wordId]);
        setSelected([]);
      } else {
        setTimeout(() => setSelected([]), 1000);
      }
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 animate-in fade-in duration-300">
      {/* --- Look Gaming Dark pour les cartes de jeu --- */}
      <div className="grid grid-cols-2 gap-4">
        {cards.map((card) => {
          const isSolved = solved.includes(card.wordId);
          const isSelected = selected.find(s => s.id === card.id);
          return (
            <div
              key={card.id}
              onClick={() => handleCardClick(card)}
              className={`h-24 flex items-center justify-center rounded-2xl cursor-pointer font-bold text-center p-2 transition-all transform duration-200 shadow-md
                ${isSolved ? 'bg-green-600 text-white border-2 border-green-700 opacity-60 scale-95' : 
                  isSelected ? 'bg-blue-600 text-white border-2 border-blue-400 scale-105 ring-4 ring-blue-500/30' : 
                  'bg-slate-800 text-white border border-slate-700 hover:bg-slate-750 hover:border-blue-400'}`}
            >
              {card.content}
            </div>
          );
        })}
      </div>
      
      {solved.length === 4 && (
        <div className="text-center mt-8 p-6 bg-slate-800 rounded-3xl border border-green-500 shadow-lg animate-bounce">
          <p className="text-xl font-bold text-green-400 mb-4 uppercase tracking-wider">Parfait ! ✨</p>
          <button onClick={initGame} className="bg-white text-slate-900 px-8 py-2 rounded-full font-black uppercase shadow-xl hover:bg-green-400 hover:text-white transition-all">REJOUER</button>
        </div>
      )}
    </div>
  );
};

export default MatchGame;