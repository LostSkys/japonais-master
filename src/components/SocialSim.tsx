import React, { useState } from 'react';
import { ChevronLeft, Info, CheckCircle, AlertCircle, Home, Briefcase, Utensils, Globe } from 'lucide-react';
import { socialChallenges } from '../data/social';

const SocialSim: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [index, setIndex] = useState(0);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [selected, setSelected] = useState<string | null>(null);

  const challenge = socialChallenges[index];

  const handleSelect = (opt: string) => {
    if (status === 'success') return;
    setSelected(opt);
    if (opt === challenge.answer) {
      setStatus('success');
    } else {
      setStatus('error');
    }
  };

  const next = () => {
    if (index < socialChallenges.length - 1) {
      setIndex(index + 1);
      setStatus('idle');
      setSelected(null);
    }
  };

  const getIcon = (ctx: string) => {
    switch(ctx) {
      case "Maison": return <Home size={18} />;
      case "Travail": return <Briefcase size={18} />;
      case "Restaurant": return <Utensils size={18} />;
      default: return <Globe size={18} />;
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 animate-in fade-in duration-500">
      <div className="bg-slate-800 rounded-[2.5rem] p-8 shadow-2xl border border-slate-700 min-h-[550px] flex flex-col">
        
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 text-xs font-bold mb-8 hover:text-white transition-all uppercase tracking-widest">
          <ChevronLeft size={16} /> Retour au menu
        </button>

        {/* Header Situation */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-blue-400 mb-2">
            {getIcon(challenge.context)}
            <span className="text-[10px] font-black uppercase tracking-widest">{challenge.context}</span>
          </div>
          <h2 className="text-white text-2xl font-black leading-tight mb-4">
            {challenge.situation}
          </h2>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-8">
          {challenge.options.map((opt) => (
            <button
              key={opt}
              onClick={() => handleSelect(opt)}
              className={`w-full p-5 rounded-2xl font-bold text-sm transition-all border-2 text-left flex justify-between items-center ${
                selected === opt 
                  ? (opt === challenge.answer ? 'bg-green-500 border-green-400 text-white' : 'bg-red-500 border-red-400 text-white scale-95')
                  : 'bg-slate-700 border-slate-600 text-slate-200 hover:bg-slate-600'
              }`}
            >
              {opt}
              {selected === opt && (opt === challenge.answer ? <CheckCircle /> : <AlertCircle />)}
            </button>
          ))}
        </div>

        {/* Feedback & Explication */}
        {status !== 'idle' && (
          <div className={`p-6 rounded-3xl animate-in zoom-in duration-300 ${
            status === 'success' ? 'bg-green-500/10 border border-green-500/20' : 'bg-red-500/10 border border-red-500/20'
          }`}>
            <div className="flex gap-3">
              <Info className={status === 'success' ? 'text-green-400' : 'text-red-400'} size={20} />
              <p className={`text-sm leading-relaxed ${status === 'success' ? 'text-green-100' : 'text-red-100'}`}>
                {status === 'success' ? challenge.explanation : "Ce n'est pas tout à fait ça. Réessaie pour comprendre l'étiquette japonaise !"}
              </p>
            </div>
            
            {status === 'success' && (
              <button 
                onClick={next}
                className="mt-4 w-full py-3 bg-green-500 text-white rounded-xl font-black uppercase text-xs tracking-widest hover:bg-green-400 transition-colors"
              >
                Continuer
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialSim;