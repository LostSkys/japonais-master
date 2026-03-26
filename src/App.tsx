import React, { useState } from 'react';
import MatchGame from './components/MatchGame';
import SentenceGame from './components/SentenceGame';
import AnimeGame from './components/AnimeGame';
import FillInBlanks from './components/FillInBlanks';
import { allWords } from './data';

type GameState = 'menu' | 'cards' | 'match' | 'sentences' | 'anime' | 'blanks';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('menu');
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const nextCard = () => {
    setIsFlipped(false); // On remet toujours le recto pour la carte suivante
    setCardIndex((prev) => (prev + 1) % allWords.length);
  };

  const menuButtons = [
    { id: 'cards', label: 'Flashcards', desc: 'Révise tes cartes', icon: '🗂️', border: 'border-b-red-500' },
    { id: 'match', label: 'Match Pairs', desc: 'Associe les paires', icon: '🎴', border: 'border-b-blue-500' },
    { id: 'sentences', label: 'Phrases', desc: 'Traductions cultes', icon: '💬', border: 'border-b-emerald-500' },
    { id: 'anime', label: 'Mode Anime', desc: 'Quiz spécial Otaku', icon: '🧧', border: 'border-b-orange-500' },
    { id: 'blanks', label: 'Paragraphes', desc: 'Textes à trous', icon: '✍️', border: 'border-b-purple-500' },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center py-6 px-4 overflow-hidden">
      {/* Header compact pour laisser de la place au scroll */}
      <header className="mb-6 text-center shrink-0">
        <h1 className="text-3xl font-black tracking-tighter italic">
          JAPONAIS <span className="text-blue-500">MASTER</span>
        </h1>
      </header>

      <main className="w-full max-w-4xl flex flex-col items-center">
        {/* --- MENU (Look Gaming avec bordure colorée) --- */}
        {gameState === 'menu' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full animate-in fade-in duration-300">
            {menuButtons.map((btn) => (
              <button
                key={btn.id}
                onClick={() => setGameState(btn.id as GameState)}
                className={`group p-5 bg-slate-800 rounded-2xl border-l-8 ${btn.border.replace('-b-', '-l-')} hover:bg-slate-750 transition-all text-left shadow-xl active:scale-95`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{btn.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold uppercase tracking-wide">{btn.label}</h3>
                    <p className="text-slate-400 text-xs">{btn.desc}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* --- NAVIGATION RETOUR --- */}
        {gameState !== 'menu' && (
          <button 
            onClick={() => setGameState('menu')} 
            className="mb-4 flex items-center gap-2 font-black text-slate-500 hover:text-white transition-colors uppercase text-xs tracking-widest shrink-0"
          >
            ← Retour au menu
          </button>
        )}

        {/* --- ZONE DE JEU AVEC SCROLL --- */}
        <div className="w-full max-h-[75vh] overflow-y-auto pr-2 custom-scrollbar">
            {gameState === 'cards' && (
              <div className="flex flex-col items-center py-2 animate-in fade-in duration-300">
                {/* --- Look Gaming Dark pour Flashcards --- */}
                <div 
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="w-full max-w-[300px] h-[400px] perspective-1000 cursor-pointer"
                >
                  <div className={`relative w-full h-full transition-all duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                    
                    {/* --- RECTO : Question (Français/Anglais - Fond Dark, Bordure Rouge) --- */}
                    <div className="absolute w-full h-full backface-hidden bg-slate-800 rounded-[2rem] shadow-2xl flex flex-col items-center justify-center p-6 text-center border-b-8 border-red-500">
                      <span className="text-red-300 text-[10px] font-black mb-2 tracking-widest uppercase">Français / Anglais</span>
                      <span className="text-3xl font-black text-white mb-2 leading-tight">{allWords[cardIndex].fr}</span>
                      <span className="text-slate-500 text-sm font-medium italic opacity-60">({allWords[cardIndex].en})</span>
                    </div>

                    {/* --- VERSO : Réponse (Japonais - Fond Bleu sombre, Texte Blanc) --- */}
                    <div className="absolute w-full h-full backface-hidden bg-blue-700 rounded-[2rem] shadow-2xl flex flex-col items-center justify-center p-6 text-center rotate-y-180 border-b-8 border-blue-900">
                      <span className="text-blue-200 text-[10px] font-black mb-2 tracking-widest uppercase">Japonais</span>
                      <span className="text-5xl font-black text-white mb-2 leading-tight">{allWords[cardIndex].jp}</span>
                      <span className="text-blue-100 text-xl font-medium tracking-wide">{allWords[cardIndex].romaji}</span>
                    </div>

                  </div>
                </div>
                <button 
                  onClick={nextCard} 
                  className="mt-6 px-12 py-3 bg-white text-slate-900 rounded-full font-black uppercase text-sm shadow-xl hover:bg-red-400 hover:text-white transition-all active:scale-90"
                >
                  Suivante
                </button>
              </div>
            )}

            {/* Les autres jeux restent les mêmes */}
            {gameState === 'match' && <MatchGame />}
            {gameState === 'sentences' && <SentenceGame />}
            {gameState === 'anime' && <AnimeGame />}
            {gameState === 'blanks' && <FillInBlanks />}
        </div>
      </main>

      {/* Styles CSS pour la scrollbar */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(30, 41, 59, 0.5); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #475569; }
      `}</style>
    </div>
  );
};

export default App;