import React, { useState, useEffect } from 'react';
import { CheckCircle2, ChevronLeft, Volume2, Turtle } from 'lucide-react';
import { scenarios } from '../data/scenarios';
import type { Step } from '../data/scenarios';

const Conversation: React.FC = () => {
  const [view, setView] = useState<'menu' | 'chat'>('menu');
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [status, setStatus] = useState<'idle' | 'listening' | 'success' | 'error'>('idle');
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // Sécurisation de la récupération des données
  const scenario = scenarios[currentScenarioIndex];
  const currentStep = scenario?.steps[stepIndex] as Step;

  // FONCTION DE PAROLE OPTIMISÉE POUR XIAOMI / ANDROID
  const speakText = (text: string, isSlow: boolean = false) => {
    if (!window.speechSynthesis) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    
    const voices = window.speechSynthesis.getVoices();
    const jpVoice = voices.find(v => v.lang.toLowerCase().includes('ja') || v.lang.toLowerCase().includes('jp'));
    if (jpVoice) utterance.voice = jpVoice;

    utterance.rate = isSlow ? 0.55 : 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;

    window.speechSynthesis.speak(utterance);
  };

  // LECTURE AUTOMATIQUE (IA) AVEC DÉLAI POUR ANDROID
  useEffect(() => {
    if (view === 'chat' && currentStep?.role === 'IA') {
      const timer = setTimeout(() => speakText(currentStep.text), 400);
      return () => clearTimeout(timer);
    }
  }, [stepIndex, view, currentStep]);

  useEffect(() => {
    setStatus('idle');
    setSelectedOption(null);
  }, [stepIndex]);

  const startScenario = (index: number) => {
    setCurrentScenarioIndex(index);
    setStepIndex(0);
    setView('chat');
  };

  // --- VUE MENU (SCÉNARIOS) ---
  if (view === 'menu') {
    return (
      <div className="w-full max-w-2xl mx-auto p-4 animate-in fade-in duration-500">
        <h2 className="text-white text-2xl font-black mb-8 text-center uppercase tracking-tighter italic">Conversations</h2>
        <div className="grid grid-cols-1 gap-4">
          {scenarios.map((s, idx) => (
            <button 
              key={s.id || idx} 
              onClick={() => startScenario(idx)} 
              className="bg-slate-800 border border-slate-700 p-6 rounded-[2rem] active:scale-95 transition-all text-left flex items-center gap-4 hover:bg-slate-750 shadow-xl"
            >
              <span className="text-4xl">{s.icon}</span>
              <div>
                <h3 className="text-white font-bold text-lg">{s.title}</h3>
                <p className="text-slate-500 text-[10px] uppercase font-black tracking-widest">{s.steps.length} Étapes</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // --- VUE CHAT (CONVERSATION ACTIVE) ---
  return (
    <div className="w-full max-w-2xl mx-auto p-2 animate-in slide-in-from-right duration-300">
      <div className="bg-slate-800 rounded-[2rem] p-5 shadow-2xl border border-slate-700 min-h-[580px] flex flex-col">
        
        <button 
          onClick={() => setView('menu')} 
          className="flex items-center gap-2 text-slate-500 text-[10px] font-black mb-6 uppercase hover:text-white transition-colors"
        >
          <ChevronLeft size={14} /> Quitter le scénario
        </button>

        <div className="flex-1 space-y-4 overflow-y-auto mb-4 px-1 scrollbar-hide">
          {scenario.steps.slice(0, stepIndex + 1).map((step, index) => {
            const isUser = step.role === "USER";
            const isLast = index === stepIndex;
            return (
              <div key={index} className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} animate-in slide-in-from-bottom-2 duration-500`}>
                <div className={`max-w-[90%] p-4 rounded-2xl shadow-md ${isUser ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-100'}`}>
                  <p className="text-sm font-bold leading-relaxed">
                    {step.text.includes("____") 
                      ? step.text.replace("____", (isLast && isUser ? (selectedOption || "____") : (step.answer || "")))
                      : step.text}
                  </p>
                  <p className="text-[10px] mt-2 opacity-70 italic font-medium">{step.fr}</p>
                </div>
                
                {!isUser && isLast && (
                  <div className="flex gap-4 mt-2 ml-1">
                    <button 
                      onClick={() => speakText(step.text)} 
                      className="flex items-center gap-1 text-[10px] font-black text-blue-400 uppercase hover:text-blue-300"
                    >
                      <Volume2 size={12} /> Normal
                    </button>
                    <button 
                      onClick={() => speakText(step.text, true)} 
                      className="flex items-center gap-1 text-[10px] font-black text-amber-500 uppercase hover:text-amber-400"
                    >
                      <Turtle size={12} /> Lent
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CHOIX DES RÉPONSES */}
        {currentStep.type === 'write' && status !== 'success' && (
          <div className="flex flex-wrap gap-2 justify-center mb-6 animate-in zoom-in duration-300">
            {currentStep.options?.map((opt) => (
              <button 
                key={opt} 
                onClick={() => {
                  setSelectedOption(opt);
                  if (opt === currentStep.answer) {
                    setStatus('success');
                    setTimeout(() => {
                        if (stepIndex < scenario.steps.length - 1) setStepIndex(prev => prev + 1);
                    }, 1200);
                  } else {
                    setStatus('error');
                    setTimeout(() => setStatus('idle'), 800);
                  }
                }} 
                className={`px-5 py-3 rounded-2xl font-bold text-xs uppercase border-2 transition-all active:scale-90 ${
                  selectedOption === opt 
                    ? (opt === currentStep.answer ? 'bg-green-600 border-green-400 text-white' : 'bg-red-600 border-red-400 text-white') 
                    : 'bg-slate-700 border-slate-600 text-slate-200'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        )}

        {/* BOUTON D'ACTION PRINCIPAL */}
        <div className="flex flex-col items-center gap-3 py-4 border-t border-slate-700/50">
           <button 
            onClick={() => {
              if (currentStep.role === 'IA') {
                if (stepIndex < scenario.steps.length - 1) setStepIndex(prev => prev + 1);
                else setView('menu');
              } else if (status === 'success') {
                if (stepIndex < scenario.steps.length - 1) setStepIndex(prev => prev + 1);
              }
            }}
            className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl active:scale-90 transition-all ${
              status === 'success' ? 'bg-green-500 animate-bounce' : 'bg-pink-600'
            }`}
          >
            {status === 'success' ? <CheckCircle2 size={28} color="white" /> : <Volume2 size={28} color="white" />}
          </button>
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
            {currentStep.role === 'IA' ? "Écouter / Continuer" : "Choisis la réponse"}
          </p>
        </div>

      </div>
    </div>
  );
};

export default Conversation;