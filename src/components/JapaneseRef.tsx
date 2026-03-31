import React, { useState } from 'react';
import { Volume2, Turtle } from 'lucide-react'; // Ajout des icônes pour le son

const JapaneseRef: React.FC = () => {
  const [view, setView] = useState<'basics' | 'alphabet'>('basics');

  // Fonction pour faire parler l'application
  const speak = (text: string, isSlow: boolean = false) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = isSlow ? 0.55 : 1.0; // Vitesse lente à 0.55
    window.speechSynthesis.speak(utterance);
  };

  // Vue 1 : Les mots outils indispensables
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

  // Vue 2 : Alphabet A-Z (Phonétique Japonaise)
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
    <div className="bg-slate-800 rounded-3xl p-4 shadow-2xl animate-in fade-in duration-300 border border-slate-700 w-full max-w-md mx-auto">
      {/* Sélecteur d'onglets */}
      <div className="flex gap-2 mb-6 bg-slate-900 p-1 rounded-xl">
        <button 
          onClick={() => setView('basics')}
          className={`flex-1 py-2 rounded-lg font-bold text-xs uppercase tracking-widest transition-all ${view === 'basics' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
        >
          Grammaire
        </button>
        <button 
          onClick={() => setView('alphabet')}
          className={`flex-1 py-2 rounded-lg font-bold text-xs uppercase tracking-widest transition-all ${view === 'alphabet' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
        >
          Alphabet A-Z
        </button>
      </div>

      <div className="max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar">
        {view === 'basics' ? (
          <div className="grid grid-cols-2 gap-3">
            {basics.map((item, i) => (
              <div key={i} className="bg-slate-900 p-4 rounded-2xl border-b-4 border-blue-900/50 flex flex-col items-center group">
                <span className="text-3xl font-bold text-white">{item.jp}</span>
                <span className="text-blue-400 text-[10px] font-black uppercase mt-1">{item.ro}</span>
                <span className="text-slate-400 text-xs mt-1 mb-3">{item.fr}</span>
                
                {/* Petits boutons audio pour la grammaire */}
                <div className="flex gap-2 mt-auto border-t border-slate-800 pt-2 w-full justify-center">
                  <button onClick={() => speak(item.jp, false)} className="p-1.5 text-slate-500 hover:text-white transition-colors" title="Vitesse normale">
                    <Volume2 size={14} />
                  </button>
                  <button onClick={() => speak(item.jp, true)} className="p-1.5 text-slate-500 hover:text-amber-500 transition-colors" title="Lent">
                    <Turtle size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-2">
            {alphabetAZ.map((item, i) => (
              <div 
                key={i} 
                onClick={() => speak(item.jp)} // Clique sur la carte pour entendre le son
                className="bg-slate-900 p-3 rounded-xl border border-slate-700 flex flex-col items-center relative overflow-hidden group cursor-pointer active:scale-95 transition-all"
              >
                <span className="absolute top-0 left-0 bg-slate-700 text-[8px] px-1 text-slate-300 font-bold">{item.letter}</span>
                <span className="text-2xl font-bold text-white mt-1 group-hover:text-blue-400 transition-colors">{item.jp}</span>
                <span className="text-blue-500 text-[9px] font-black uppercase">{item.ro}</span>
                <Volume2 size={10} className="absolute bottom-1 right-1 text-slate-700 opacity-0 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        )}
      </div>
      
      <p className="mt-6 text-center text-slate-500 text-[10px] italic">
        {view === 'basics' ? "Clique sur les icônes pour entendre la prononciation." : "Clique sur une lettre pour l'entendre !"}
      </p>
    </div>
  );
};

export default JapaneseRef;