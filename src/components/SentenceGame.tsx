import React, { useState, useEffect } from 'react';
import { sentencesV2 } from '../data/sentencesV2'; 

const SentenceGame: React.FC = () => {
  const [current, setCurrent] = useState<any>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);

  const nextQ = () => {
    const q = sentencesV2[Math.floor(Math.random() * sentencesV2.length)];
    const wrongs = sentencesV2
      .filter(s => s.id !== q.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map(s => s.fr);
    
    setCurrent(q);
    setOptions([...wrongs, q.fr].sort(() => 0.5 - Math.random()));
    setSelected(null);
  };

  useEffect(() => { nextQ(); }, []);

  if (!current) return null;

  return (
    <div className="w-full max-w-2xl mx-auto p-4 animate-in fade-in duration-300">
      {/* Question Card */}
      <div className="bg-white rounded-[2rem] p-8 text-center shadow-2xl mb-6 border-b-8 border-slate-300">
        <h2 className="text-5xl font-black text-slate-900 mb-2 leading-tight">{current.jp}</h2>
        <p className="text-blue-600 text-xl font-bold">{current.romaji}</p>
      </div>

      {/* Options - DARK GAMING LOOK */}
      <div className="grid grid-cols-1 gap-3">
        {options.map((opt, i) => (
          <button
            key={i}
            onClick={() => setSelected(opt)}
            className={`p-5 rounded-2xl font-bold text-left transition-all border-2 
              ${selected === opt 
                ? (opt === current.fr ? 'bg-green-600 border-green-400 text-white' : 'bg-red-600 border-red-400 text-white') 
                : 'bg-slate-800 border-slate-700 text-white hover:border-blue-500 hover:bg-slate-750'}`}
          >
            {opt}
          </button>
        ))}
      </div>

      {selected && (
        <button onClick={nextQ} className="w-full mt-6 py-4 bg-white text-slate-900 rounded-2xl font-black uppercase shadow-xl hover:bg-blue-500 hover:text-white transition-all">
          Phrase Suivante →
        </button>
      )}
    </div>
  );
};

export default SentenceGame;