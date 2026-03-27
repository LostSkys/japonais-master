import React, { useState } from 'react';
import { ChevronLeft, CheckCircle2, XCircle, Users, Briefcase, UserSearch } from 'lucide-react';
import { cameleonChallenges } from '../data/cameleon';

const Cameleon: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [index, setIndex] = useState(0);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [selected, setSelected] = useState<string | null>(null);

  const challenge = cameleonChallenges[index];

  const handleSelect = (opt: string) => {
    if (status === 'success') return;
    setSelected(opt);
    if (opt === challenge.answer) {
      setStatus('success');
      setTimeout(() => {
        if (index < cameleonChallenges.length - 1) {
          setIndex(index + 1);
          setStatus('idle');
          setSelected(null);
        }
      }, 2000);
    } else {
      setStatus('error'); // La bulle ou le bloc passera en rouge
    }
  };

  const getTargetIcon = (target: string) => {
    if (target === "Boss") return <Briefcase className="text-yellow-500" />;
    if (target === "Ami") return <Users className="text-green-500" />;
    return <UserSearch className="text-blue-500" />;
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 animate-in fade-in duration-500">
      <div className="bg-slate-800 rounded-[2.5rem] p-8 shadow-2xl border border-slate-700 min-h-[500px] flex flex-col">
        
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 text-xs font-bold mb-8 hover:text-white transition-all uppercase tracking-widest">
          <ChevronLeft size={16} /> Retour au menu
        </button>

        <div className="text-center mb-10">
          <span className="bg-slate-700 px-4 py-1 rounded-full text-[10px] font-black text-slate-400 uppercase tracking-tighter">
            Défi {index + 1} / {cameleonChallenges.length}
          </span>
          <h2 className="text-white text-3xl font-black mt-4 uppercase italic tracking-tighter">
            {challenge.basePhrase}
          </h2>
          <p className="text-slate-400 text-sm italic">{challenge.fr}</p>
        </div>

        {/* CIBLE SOCIALE */}
        <div className="bg-slate-900/50 border border-slate-700 rounded-3xl p-6 mb-8 flex items-center gap-4 animate-in zoom-in">
          <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center shadow-inner">
            {getTargetIcon(challenge.target)}
          </div>
          <div>
            <p className="text-slate-500 text-[10px] font-black uppercase">Interlocuteur</p>
            <p className="text-white font-bold text-lg">{challenge.target}</p>
          </div>
        </div>

        {/* OPTIONS (BLOCS) */}
        <div className="flex flex-col gap-3">
          {challenge.options.map((opt) => (
            <button
              key={opt}
              onClick={() => handleSelect(opt)}
              className={`p-5 rounded-2xl font-bold text-left transition-all border-2 flex justify-between items-center ${
                selected === opt 
                  ? (opt === challenge.answer ? 'bg-green-500 border-green-400 text-white' : 'bg-red-500 border-red-400 text-white')
                  : 'bg-slate-700 border-slate-600 text-slate-200 hover:border-blue-500'
              }`}
            >
              {opt}
              {selected === opt && (opt === challenge.answer ? <CheckCircle2 size={20} /> : <XCircle size={20} />)}
            </button>
          ))}
        </div>

        {/* EXPLICATION EN CAS DE SUCCÈS OU ERREUR */}
        {status !== 'idle' && (
          <div className={`mt-6 p-4 rounded-2xl text-xs font-medium animate-in slide-in-from-top-2 ${
            status === 'success' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
          }`}>
            {status === 'success' ? `Parfait ! ${challenge.explanation}` : "Ce n'est pas le bon registre, réessaie !"}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cameleon;