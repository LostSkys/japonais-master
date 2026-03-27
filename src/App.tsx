import React, { useState } from 'react';
import MatchGame from './components/MatchGame';
import SentenceGame from './components/SentenceGame';
import AnimeGame from './components/AnimeGame';
import FillInBlanks from './components/FillInBlanks';
import JapaneseRef from './components/JapaneseRef';
import OralPractice from './components/OralPractice';
import Conversation from './components/Conversation';
import TimeAttack from './components/TimeAttack';
import KanjiDraw from './components/KanjiDraw';
import Cameleon from './components/Cameleon';
import SocialSim from './components/SocialSim';
import { allWords } from './data';

type GameState = 'menu' | 'cards' | 'match' | 'sentences' | 'anime' | 'blanks' | 'ref' | 'oral' | 'conv' | 'chrono' | 'draw' | 'cameleon' | 'social';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('menu');
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const nextCard = () => {
    setIsFlipped(false);
    setCardIndex((prev) => (prev + 1) % allWords.length);
  };

  const menuButtons = [
    { id: 'cards', label: 'Flashcards', desc: 'Révise tes cartes', icon: '🗂️', border: 'border-l-red-500' },
    { id: 'match', label: 'Match Pairs', desc: 'Associe les paires', icon: '🎴', border: 'border-l-blue-500' },
    { id: 'sentences', label: 'Phrases', desc: 'Traductions cultes', icon: '💬', border: 'border-l-emerald-500' },
    { id: 'anime', label: 'Mode Anime', desc: 'Quiz spécial Otaku', icon: '🧧', border: 'border-l-orange-500' },
    { id: 'blanks', label: 'Paragraphes', desc: 'Textes à trous', icon: '✍️', border: 'border-l-purple-500' },
    { id: 'ref', label: 'Guide Kanji', desc: 'Alphabet & Symboles', icon: '📖', border: 'border-l-yellow-500' },
    { id: 'oral', label: 'Entraînement Oral', desc: 'Parle Japonais', icon: '🎤', border: 'border-l-pink-500' },
    { id: 'conv', label: 'Conversation', desc: 'Scénarios réels', icon: '🗣️', border: 'border-l-indigo-500' },
    { id: 'chrono', label: 'Défis Chrono', desc: 'Vitesse maximum !', icon: '⏱️', border: 'border-l-rose-600' },
    { id: 'draw', label: 'Kanji Draw', desc: 'Apprends à tracer', icon: '🖌️', border: 'border-l-cyan-400' },
    { id: 'cameleon', label: 'Le Caméléon', desc: 'Adapte ton registre', icon: '🦎', border: 'border-l-blue-400' },
    { id: 'social', label: 'Savoir-Vivre', desc: 'Étiquette & Codes', icon: '🙇', border: 'border-l-green-500' },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center py-6 px-4 overflow-hidden font-sans">
      
      <header className="mb-6 text-center shrink-0">
        <h1 className="text-3xl font-black tracking-tighter italic uppercase">
          JAPONAIS <span className="text-blue-500">MASTER</span>
        </h1>
        <div className="h-1 w-20 bg-blue-500 mx-auto mt-1 rounded-full opacity-50"></div>
      </header>

      <main className="w-full max-w-4xl flex flex-col items-center">
        
        {gameState === 'menu' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full animate-in fade-in zoom-in-95 duration-300 pb-10">
            {menuButtons.map((btn) => (
              <button
                key={btn.id}
                onClick={() => setGameState(btn.id as GameState)}
                className={`group p-5 bg-slate-800 rounded-2xl border-l-8 ${btn.border} hover:bg-slate-750 transition-all text-left shadow-xl active:scale-95`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl group-hover:scale-110 transition-transform">{btn.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold uppercase tracking-wide text-white">{btn.label}</h3>
                    <p className="text-slate-400 text-xs">{btn.desc}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}

        {gameState !== 'menu' && (
          <button 
            onClick={() => setGameState('menu')} 
            className="mb-4 flex items-center gap-2 font-black text-slate-500 hover:text-white transition-colors uppercase text-xs tracking-widest shrink-0 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Retour au menu
          </button>
        )}

        <div className="w-full max-h-[78vh] overflow-y-auto pr-2 custom-scrollbar">
            
            {/* FLASHCARDS CORRIGÉES */}
            {gameState === 'cards' && (
              <div className="flex flex-col items-center py-2 animate-in slide-in-from-bottom-4 duration-300">
                <div onClick={() => setIsFlipped(!isFlipped)} className="w-full max-w-[280px] h-[350px] perspective-1000 cursor-pointer">
                  <div className={`relative w-full h-full transition-all duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                    {/* FACE AVANT (FRANÇAIS) */}
                    <div className="absolute w-full h-full backface-hidden bg-slate-800 rounded-[2rem] shadow-2xl flex flex-col items-center justify-center p-6 text-center border-b-8 border-red-500">
                      <span className="text-red-400 text-[10px] font-black mb-2 tracking-widest uppercase">Français / Anglais</span>
                      <span className="text-3xl font-black text-white mb-2">{allWords[cardIndex].fr}</span>
                      <span className="text-slate-500 text-sm italic opacity-60">({allWords[cardIndex].en})</span>
                    </div>
                    {/* FACE ARRIÈRE (JAPONAIS + ROMAJI CORRIGÉ) */}
                    <div className="absolute w-full h-full backface-hidden bg-blue-700 rounded-[2rem] shadow-2xl flex flex-col items-center justify-center p-6 text-center rotate-y-180 border-b-8 border-blue-900">
                      <span className="text-blue-200 text-[10px] font-black mb-2 tracking-widest uppercase">Japonais</span>
                      <span className="text-4xl font-black text-white mb-1 leading-tight">{allWords[cardIndex].jp}</span>
                      <span className="text-blue-100 text-xl font-medium italic opacity-80">{allWords[cardIndex].romaji}</span>
                    </div>
                  </div>
                </div>
                <button onClick={nextCard} className="mt-6 px-12 py-3 bg-white text-slate-900 rounded-full font-black uppercase text-sm shadow-xl hover:bg-red-400 hover:text-white transition-all active:scale-90">Suivante</button>
              </div>
            )}

            {gameState === 'match' && <MatchGame />}
            {gameState === 'sentences' && <SentenceGame />}
            {gameState === 'anime' && <AnimeGame />}
            {gameState === 'blanks' && <FillInBlanks />}
            {gameState === 'ref' && <JapaneseRef />}
            {gameState === 'oral' && <OralPractice />}
            {gameState === 'conv' && <Conversation />}
            {gameState === 'chrono' && <TimeAttack />}
            {gameState === 'draw' && <KanjiDraw />}
            {gameState === 'cameleon' && <Cameleon onBack={() => setGameState('menu')} />}
            {gameState === 'social' && <SocialSim onBack={() => setGameState('menu')} />}
        </div>
      </main>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(30, 41, 59, 0.2); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #475569; }
      `}</style>
    </div>
  );
};

export default App;