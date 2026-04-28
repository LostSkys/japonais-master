import React, { useState } from 'react';
import { Volume2, Turtle } from 'lucide-react';

const JapaneseRef: React.FC = () => {
  const [view, setView] = useState<'basics' | 'alphabet'>('basics');

  // FONCTION DE PAROLE ROBUSTE (Spéciale Android/Xiaomi)
  const speak = (text: string, isSlow: boolean = false) => {
    if (!window.speechSynthesis) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    
    // Recherche active de la voix japonaise dans le système
    const voices = window.speechSynthesis.getVoices();
    const jpVoice = voices.find(v => v.lang.toLowerCase().includes('ja') || v.lang.toLowerCase().includes('jp'));
    if (jpVoice) utterance.voice = jpVoice;

    utterance.rate = isSlow ? 0.55 : 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;

    window.speechSynthesis.speak(utterance);
  };

  const basics = [
    { jp: "私", ro: "Watashi", fr: "Je / Moi" },
    { jp: "は", ro: "Wa", fr: "Particule Sujet" },
    { jp: "です", ro: "Desu", fr: "Être (Poli)" },
    { jp: "の", ro: "No", fr: "Possession / Lien" },
    { jp: "を", ro: "O", fr: "Objet Direct" },
    { jp: "に", ro: "Ni", fr: "Cible / Temps / Lieu" },
    { jp: "へ", ro: "E", fr: "Direction (Vers)" },
    { jp: "で", ro: "De", fr: "Lieu d'action / Moyen" },
    { jp: "から", ro: "Kara", fr: "Depuis / Parce que" },
    { jp: "まで", ro: "Made", fr: "Jusqu'à" },
    { jp: "も", ro: "Mo", fr: "Aussi / Également" },
    { jp: "と", ro: "To", fr: "Avec / Et" },
    { jp: "が", ro: "Ga", fr: "Sujet (Insistance)" },
    { jp: "か", ro: "Ka", fr: "Question (?)" },
    { jp: "ね", ro: "Ne", fr: "N'est-ce pas ?" },
    { jp: "よ", ro: "Yo", fr: "Affirmation (Info)" },
    { jp: "ます", ro: "Masu", fr: "Verbe (Poli)" },
    { jp: "ました", ro: "Mashita", fr: "Verbe (Passé)" },
    { jp: "たい", ro: "Tai", fr: "Vouloir faire" },
    { jp: "ない", ro: "Nai", fr: "Négation (Neutre)" },
    { jp: "ください", ro: "Kudasai", fr: "S'il vous plaît" },
    { jp: "人", ro: "Hito", fr: "Personne / Humain" },
    { jp: "これ", ro: "Kore", fr: "Ceci" },
    { jp: "何", ro: "Nani", fr: "Quoi / Quel" }
  ];

  const alphabetAZ = [
    { letter: "A", jp: "あ", ro: "A" }, { letter: "B", jp: "ば", ro: "Ba" },
    { letter: "C", jp: "し", ro: "Shi" }, { letter: "D", jp: "だ", ro: "Da" },
    { letter: "E", jp: "え", ro: "E" }, { letter: "F", jp: "ふ", ro: "Fu" },
    { letter: "G", jp: "げ", ro: "Ge" }, { letter: "H", jp: "は", ro: "Ha" },
    { letter: "I", jp: "い", ro: "I" }, { letter: "J", jp: "じ", ro: "Ji" },
    { letter: "K", jp: "か", ro: "Ka" }, { letter: "L", jp: "ら", ro: "Ra" },
    { letter: "M", jp: "ま", ro: "Ma" }, { letter: "N", jp: "ん", ro: "N" },
    { letter: "O", jp: "お", ro: "O" }, { letter: "P", jp: "ぱ", ro: "Pa" },
    { letter: "Q", jp: "く", ro: "Ku" }, { letter: "R", jp: "ら", ro: "Ra" },
    { letter: "S", jp: "す", ro: "Su" }, { letter: "T", jp: "た", ro: "Ta" },
    { letter: "U", jp: "う", ro: "U" }, { letter: "V", jp: "ぶ", ro: "Bu" },
    { letter: "W", jp: "わ", ro: "Wa" }, { letter: "X", jp: "くす", ro: "Kusu" },
    { letter: "Y", jp: "い", ro: "I" }, { letter: "Z", jp: "ざ", ro: "Za" },
  ];

  return (
    <div className="bg-slate-800 rounded-[2rem] p-4 border border-slate-700 w-full max-w-md mx-auto shadow-2xl animate-in fade-in duration-500">
      
      <div className="flex gap-2 mb-6 bg-slate-900 p-1.5 rounded-2xl shadow-inner">
        <button 
          onClick={() => setView('basics')} 
          className={`flex-1 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${
            view === 'basics' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'
          }`}
        >
          Grammaire
        </button>
        <button 
          onClick={() => setView('alphabet')} 
          className={`flex-1 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${
            view === 'alphabet' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'
          }`}
        >
          Alphabet A-Z
        </button>
      </div>

      <div className="max-h-[60vh] overflow-y-auto pr-2 scrollbar-hide">
        {view === 'basics' ? (
          <div className="grid grid-cols-2 gap-3">
            {basics.map((item, i) => (
              <div key={i} className="bg-slate-900 p-4 rounded-2xl border border-slate-800 flex flex-col items-center">
                <span className="text-3xl font-black text-white mb-1">{item.jp}</span>
                <span className="text-blue-400 text-[10px] font-black uppercase tracking-tighter mb-1">{item.ro}</span>
                <span className="text-slate-500 text-[9px] font-medium italic text-center leading-tight mb-3 px-1">{item.fr}</span>
                
                <div className="flex gap-3 pt-3 border-t border-slate-800 w-full justify-center">
                  <button onClick={() => speak(item.jp, false)} className="p-1.5 text-slate-500 active:text-blue-400 transition-colors">
                    <Volume2 size={16} />
                  </button>
                  <button onClick={() => speak(item.jp, true)} className="p-1.5 text-slate-500 active:text-amber-500 transition-colors">
                    <Turtle size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-2">
            {alphabetAZ.map((item, i) => (
              <button 
                key={i} 
                onClick={() => speak(item.jp)} 
                className="bg-slate-900 p-4 rounded-2xl border border-slate-800 flex flex-col items-center active:scale-95 transition-all group relative overflow-hidden"
              >
                <span className="absolute top-1 left-2 text-[8px] font-black text-slate-700">{item.letter}</span>
                <span className="text-2xl font-bold text-white group-active:text-blue-400">{item.jp}</span>
                <span className="text-blue-500 text-[10px] font-black uppercase mt-1">{item.ro}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JapaneseRef;