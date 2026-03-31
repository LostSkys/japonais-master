import React, { useState, useEffect, useRef } from 'react';
import { Mic, CheckCircle2, XCircle, ChevronLeft, Volume2, Turtle } from 'lucide-react';
import { scenarios } from '../data/scenarios';
import type { Step } from '../data/scenarios';

const Conversation: React.FC = () => {
  const [view, setView] = useState<'menu' | 'chat'>('menu');
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  
  const [status, setStatus] = useState<'idle' | 'listening' | 'success' | 'error'>('idle');
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(15);
  
  const scenario = scenarios[currentScenarioIndex];
  const currentStep = scenario.steps[stepIndex] as Step;
  const timerRef = useRef<number | null>(null);

  // Fonction de synthèse vocale
  const speakText = (text: string, isSlow: boolean = false) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = isSlow ? 0.55 : 1.0;
    window.speechSynthesis.speak(utterance);
  };

  // Lecture automatique quand l'IA prend la parole
  useEffect(() => {
    if (view === 'chat' && currentStep.role === 'IA') {
      speakText(currentStep.text);
    }
  }, [stepIndex, view]);

  // Reset à chaque nouvelle étape
  useEffect(() => {
    setStatus('idle');
    setSelectedOption(null);
    setTimeLeft(15);
  }, [stepIndex]);

  const startScenario = (index: number) => {
    setCurrentScenarioIndex(index);
    setStepIndex(0);
    setView('chat');
  };

  // --- CORRECTION : LOGIQUE DU BOUTON PRINCIPAL ---
  const handleMainAction = () => {
    // Cas 1 : L'IA a fini de parler, on passe à la suite
    if (currentStep.role === 'IA') {
      if (stepIndex < scenario.steps.length - 1) {
        setStepIndex(prev => prev + 1);
      } else {
        alert("Scénario terminé ! Bien joué.");
        setView('menu');
      }
      return;
    }
    
    // Cas 2 : C'est à l'utilisateur de parler/répondre
    if (currentStep.type === 'write' && !selectedOption) return;
    
    setStatus('listening');
    // Simulation de réussite pour avancer (ou intégration micro)
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        if (stepIndex < scenario.steps.length - 1) setStepIndex(prev => prev + 1);
      }, 1200);
    }, 2000);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    if (option === currentStep.answer) {
      setStatus('success');
      setTimeout(() => {
        if (stepIndex < scenario.steps.length - 1) setStepIndex(prev => prev + 1);
      }, 1200);
    } else {
      setStatus('error');
    }
  };

  if (view === 'menu') {
    return (
      <div className="w-full max-w-2xl mx-auto p-4 animate-in fade-in duration-500">
        <h2 className="text-white text-2xl font-black mb-8 text-center uppercase tracking-tighter">Choisis ta conversation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {scenarios.map((s, idx) => (
            <button key={s.id} onClick={() => startScenario(idx)} className="bg-slate-800 border border-slate-700 p-6 rounded-[2rem] hover:border-pink-500 transition-all text-left group">
              <span className="text-3xl mb-4 block">{s.icon}</span>
              <h3 className="text-white font-bold text-lg">{s.title}</h3>
              <p className="text-slate-500 text-xs mt-1 uppercase font-black">{s.steps.length} Étapes</p>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-4 animate-in zoom-in duration-300">
      <div className="bg-slate-800 rounded-[2.5rem] p-8 shadow-2xl border border-slate-700 min-h-[600px] flex flex-col relative overflow-hidden">
        
        <button onClick={() => setView('menu')} className="flex items-center gap-2 text-slate-500 text-xs font-bold mb-8 hover:text-white transition-all uppercase tracking-widest">
          <ChevronLeft size={16} /> Retour au menu
        </button>

        <div className="flex-1 space-y-6 overflow-y-auto mb-6 pr-2">
          {scenario.steps.slice(0, stepIndex + 1).map((step, index) => {
            const isLast = index === stepIndex;
            const isUser = step.role === "USER";
            return (
              <div key={index} className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} animate-in slide-in-from-bottom-4`}>
                <div className={`max-w-[85%] p-5 rounded-3xl shadow-lg ${isUser ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-100'}`}>
                  <p className="text-lg font-bold">
                    {step.text.replace("____", (isLast && isUser) ? (selectedOption || "____") : (step.answer || ""))}
                  </p>
                  <p className="text-[10px] mt-2 italic opacity-60">{step.fr}</p>
                </div>
                {!isUser && isLast && (
                  <div className="flex gap-4 mt-2 ml-2">
                    <button onClick={() => speakText(step.text, false)} className="text-slate-500 hover:text-white flex items-center gap-1 text-[10px] font-bold uppercase"><Volume2 size={14}/> Normal</button>
                    <button onClick={() => speakText(step.text, true)} className="text-amber-500/70 hover:text-amber-400 flex items-center gap-1 text-[10px] font-bold uppercase"><Turtle size={14}/> Lent</button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {currentStep.type === 'write' && status !== 'success' && (
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {currentStep.options?.map((opt) => (
              <button key={opt} onClick={() => handleOptionSelect(opt)} className={`px-6 py-3 rounded-2xl font-black text-xs uppercase transition-all border-2 ${selectedOption === opt ? (opt === currentStep.answer ? 'bg-green-500 border-green-400' : 'bg-red-500 border-red-400') : 'bg-slate-700 border-slate-600 text-slate-300'}`}>
                {opt}
              </button>
            ))}
          </div>
        )}

        <div className="pt-6 border-t border-slate-700/50 flex flex-col items-center gap-4">
          <p className="text-pink-500 text-[10px] font-black uppercase tracking-[0.2em]">
            {currentStep.role === 'IA' ? "Écoute bien puis clique pour continuer" : "À toi de répondre !"}
          </p>
          <button 
            onClick={handleMainAction}
            className={`w-20 h-20 rounded-full flex items-center justify-center transition-all shadow-xl ${status === 'listening' ? 'bg-yellow-500' : status === 'success' ? 'bg-green-500' : 'bg-pink-600 hover:scale-110'}`}
          >
            {status === 'success' ? <CheckCircle2 size={32} /> : currentStep.role === 'IA' ? <Volume2 size={32} /> : <Mic size={32} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Conversation;