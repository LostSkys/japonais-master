import React, { useState } from 'react';
import { Volume2, Turtle } from 'lucide-react';
import { referenceVocab } from '../data/referenceData';

const JapaneseRef: React.FC = () => {
  const [mainTab, setMainTab] = useState<'vocab' | 'hiragana'>('vocab');
  const [subCategory, setSubCategory] = useState<'all' | 'gram' | 'verbe' | 'chiffre' | 'temps' | 'survie'>('all');

  // Système vocale optimisé pour PC (Chrome/Edge)
  const speak = (text: string, isSlow: boolean = false) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    
    const voices = window.speechSynthesis.getVoices();
    const jaVoice = voices.find(v => v.lang.toLowerCase().includes('ja') || v.lang.toLowerCase().includes('jp'));
    if (jaVoice) utterance.voice = jaVoice;
    
    utterance.rate = isSlow ? 0.55 : 0.9;
    window.speechSynthesis.speak(utterance);
  };

  const hiraganaAZ = [
    { letter: "A", jp: "あ", romaji: "A" }, { letter: "B", jp: "ば", romaji: "Ba" },
    { letter: "C", jp: "し", romaji: "Shi" }, { letter: "D", jp: "だ", romaji: "Da" },
    { letter: "E", jp: "え", romaji: "E" }, { letter: "F", jp: "ふ", romaji: "Fu" },
    { letter: "G", jp: "げ", romaji: "Ge" }, { letter: "H", jp: "は", romaji: "Ha" },
    { letter: "I", jp: "い", romaji: "I" }, { letter: "J", jp: "じ", romaji: "Ji" },
    { letter: "K", jp: "か", romaji: "Ka" }, { letter: "L", jp: "ら", romaji: "Ra" },
    { letter: "M", jp: "ま", romaji: "Ma" }, { letter: "N", jp: "ん", romaji: "N" },
    { letter: "O", jp: "お", romaji: "O" }, { letter: "P", jp: "ぱ", romaji: "Pa" },
    { letter: "Q", jp: "く", romaji: "Ku" }, { letter: "R", jp: "ら", romaji: "Ra" },
    { letter: "S", jp: "す", romaji: "Su" }, { letter: "T", jp: "た", romaji: "Ta" },
    { letter: "U", jp: "う", romaji: "U" }, { letter: "V", jp: "ぶ", romaji: "Bu" },
    { letter: "W", jp: "わ", romaji: "Wa" }, { letter: "X", jp: "くす", romaji: "Kusu" },
    { letter: "Y", jp: "い", romaji: "I" }, { letter: "Z", jp: "ざ", romaji: "Za" },
  ];

  // Filtrage du lexique selon la catégorie active
  const filteredVocab = subCategory === 'all' 
    ? referenceVocab 
    : referenceVocab.filter(item => item.cat === subCategory);

  const categories = [
    { id: 'all', label: 'Tout' },
    { id: 'gram', label: 'Grammaire' },
    { id: 'verbe', label: 'Verbes' },
    { id: 'chiffre', label: 'Chiffres' },
    { id: 'temps', label: 'Temps' },
    { id: 'survie', label: 'Survie / Utile' },
  ];

  return (
    <div className="bg-slate-800 rounded-[2rem] p-4 border border-slate-700 w-full max-w-xl mx-auto shadow-2xl animate-in fade-in duration-500 flex flex-col h-[75vh]">
      
      {/* 1. ONGLETS PRINCIPAUX */}
      <div className="flex gap-2 mb-4 bg-slate-900 p-1.5 rounded-2xl shadow-inner shrink-0">
        <button 
          onClick={() => setMainTab('vocab')} 
          className={`flex-1 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${
            mainTab === 'vocab' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'
          }`}
        >
          Dictionnaire ({referenceVocab.length})
        </button>
        <button 
          onClick={() => setMainTab('hiragana')} 
          className={`flex-1 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${
            mainTab === 'hiragana' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'
          }`}
        >
          Hiragana (A-Z)
        </button>
      </div>

      {/* 2. FILTRES DE SOUS-CATÉGORIES */}
      {mainTab === 'vocab' && (
        <div className="flex gap-1.5 overflow-x-auto pb-3 mb-2 scrollbar-hide shrink-0 mask-gradient">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSubCategory(cat.id as any)}
              className={`px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tight whitespace-nowrap transition-all ${
                subCategory === cat.id 
                  ? 'bg-slate-200 text-slate-900 font-black' 
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      {/* 3. CONTENU DÉROULANT */}
      <div className="flex-1 overflow-y-auto pr-1 space-y-2 scrollbar-hide">
        {mainTab === 'vocab' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {filteredVocab.map((item, i) => (
              <div 
                key={i} 
                className="bg-slate-900/80 p-3.5 rounded-2xl border border-slate-850 flex items-center justify-between gap-3 shadow-md hover:border-slate-700 transition-colors"
              >
                <div className="flex flex-col min-w-0 flex-1">
                  <span className="text-xl font-black text-white truncate leading-tight">{item.jp}</span>
                  {/* Utilisation de item.romaji au lieu de item.ro pour la cohérence */}
                  <span className="text-blue-400 text-[10px] font-black uppercase tracking-wide mt-0.5">{item.romaji}</span>
                  <p className="text-slate-400 text-[11px] font-medium leading-tight mt-1 truncate">
                    {item.fr}
                  </p>
                </div>
                
                <div className="flex flex-col gap-1 shrink-0 border-l border-slate-800/80 pl-2">
                  <button 
                    onClick={() => speak(item.jp, false)} 
                    className="p-2 text-slate-500 hover:text-blue-400 active:scale-90 transition-all"
                  >
                    <Volume2 size={16} />
                  </button>
                  <button 
                    onClick={() => speak(item.jp, true)} 
                    className="p-2 text-slate-500 hover:text-amber-500 active:scale-90 transition-all"
                  >
                    <Turtle size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-2">
            {hiraganaAZ.map((item, i) => (
              <button 
                key={i} 
                onClick={() => speak(item.jp)} 
                className="bg-slate-900 p-4 rounded-2xl border border-slate-800 flex flex-col items-center active:scale-95 transition-all group relative overflow-hidden"
              >
                <span className="absolute top-1 left-2 text-[8px] font-black text-slate-700">{item.letter}</span>
                <span className="text-2xl font-bold text-white group-active:text-blue-400">{item.jp}</span>
                {/* Remplacement de item.ro par item.romaji également sur l'alphabet */}
                <span className="text-blue-500 text-[10px] font-black uppercase mt-1">{item.romaji}</span>
              </button>
            ))}
          </div>
        )}
        
        {mainTab === 'vocab' && filteredVocab.length === 0 && (
          <div className="text-center py-12 text-slate-500 font-bold uppercase text-xs">
            Aucun mot trouvé dans cette catégorie
          </div>
        )}
      </div>
    </div>
  );
};

export default JapaneseRef;