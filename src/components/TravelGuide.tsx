import React, { useState } from 'react';
import { CheckCircle2, XCircle, Info, Compass } from 'lucide-react';
import { travelGuideData } from '../data/travelData';

const TravelGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState(travelGuideData[0].id);

  const currentSection = travelGuideData.find(s => s.id === activeTab) || travelGuideData[0];

  return (
    <div className="bg-slate-800 rounded-[2rem] p-6 border border-slate-700 w-full max-w-2xl mx-auto shadow-2xl animate-in fade-in duration-500 h-[75vh] flex flex-col">
      
      <div className="text-center mb-4 shrink-0">
        <div className="flex justify-center items-center gap-2 text-indigo-400 mb-1">
          <Compass size={22} className="animate-spin-slow" />
          <h2 className="text-xl font-black text-white uppercase tracking-wider">Guide du Voyageur</h2>
        </div>
        <p className="text-slate-400 text-xs">Les secrets du Japon : Coutumes, bouffe et hébergement</p>
      </div>

      {/* SÉLECTEUR DE CATÉGORIES */}
      <div className="flex gap-2 mb-4 bg-slate-900 p-1.5 rounded-2xl shadow-inner shrink-0 overflow-x-auto scrollbar-hide">
        {travelGuideData.map((section) => (
          <button 
            key={section.id}
            onClick={() => setActiveTab(section.id)} 
            className={`flex-1 py-2.5 px-4 rounded-xl font-black text-[11px] uppercase tracking-wider transition-all whitespace-nowrap flex items-center justify-center gap-2 ${
              activeTab === section.id ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <span>{section.icon}</span>
            <span>{section.title}</span>
          </button>
        ))}
      </div>

      {/* ZONE EXPLICATIVE */}
      <div className="bg-slate-900/40 border border-slate-700/50 p-3 rounded-xl mb-4 shrink-0 text-center text-xs italic text-slate-400">
        "{currentSection.intro}"
      </div>

      {/* CONTENU DÉROULANT DES CONSEILS */}
      <div className="flex-1 overflow-y-auto pr-1 space-y-3 scrollbar-hide">
        {currentSection.tips.map((tip, idx) => (
          <div 
            key={idx} 
            className={`p-4 rounded-2xl border bg-slate-900/90 flex gap-3 shadow-md transition-all hover:scale-[1.01] ${
              tip.type === 'do' ? 'border-l-4 border-l-emerald-500 border-slate-800' :
              tip.type === 'dont' ? 'border-l-4 border-l-rose-500 border-slate-800' :
              'border-l-4 border-l-amber-500 border-slate-800'
            }`}
          >
            <div className="shrink-0 mt-0.5">
              {tip.type === 'do' && <CheckCircle2 className="text-emerald-400" size={18} />}
              {tip.type === 'dont' && <XCircle className="text-rose-400" size={18} />}
              {tip.type === 'info' && <Info className="text-amber-400" size={18} />}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-white font-black text-xs uppercase tracking-wide">{tip.title}</h4>
                <span className={`text-[8px] px-1.5 py-0.5 rounded font-black uppercase ${
                  tip.type === 'do' ? 'bg-emerald-500/10 text-emerald-400' :
                  tip.type === 'dont' ? 'bg-rose-500/10 text-rose-400' :
                  'bg-amber-500/10 text-amber-400'
                }`}>
                  {tip.type === 'do' ? 'À faire' : tip.type === 'dont' ? 'À éviter' : 'Info'}
                </span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed mt-1">{tip.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelGuide;