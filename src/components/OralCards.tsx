import React, { useState } from 'react';
import { Mic, MicOff, CheckCircle2, Volume2, Turtle } from 'lucide-react';
import { allWords } from '../data';

const OralCards: React.FC = () => {
  const [bag, setBag] = useState<any[]>(() => [...allWords].sort(() => Math.random() - 0.5));
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [feedback, setFeedback] = useState<'none' | 'success' | 'error'>('none');
  const [transcript, setTranscript] = useState('');

  const current = bag[cardIndex];

  // FONCTION DE PAROLE RENFORCÉE POUR XIAOMI
  const speak = (isSlow: boolean = false) => {
    if (!window.speechSynthesis) return;
    
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(current.jp);
    utterance.lang = 'ja-JP';
    
    // Recherche forcée de la voix japonaise Google installée
    const voices = window.speechSynthesis.getVoices();
    const jpVoice = voices.find(v => v.lang.toLowerCase().includes('ja') || v.lang.toLowerCase().includes('jp'));
    if (jpVoice) utterance.voice = jpVoice;

    utterance.rate = isSlow ? 0.55 : 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;
    
    window.speechSynthesis.speak(utterance);
  };

  const startListening = () => {
    // @ts-ignore
    const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Recognition) {
      alert("La reconnaissance vocale n'est pas supportée.");
      return;
    }

    const recognition = new Recognition();
    recognition.lang = 'ja-JP';
    
    recognition.onstart = () => {
      setIsListening(true);
      setFeedback('none');
    };

    recognition.onresult = (event: any) => {
      const result = event.results[0][0].transcript;
      setTranscript(result);
      const cleanResult = result.replace(/[、。！？ ]/g, "");
      const cleanTarget = current.jp.replace(/[、。！？ ]/g, "");

      if (cleanResult === cleanTarget) {
        setFeedback('success');
        setIsFlipped(true);
      } else {
        setFeedback('error');
      }
    };

    recognition.onerror = () => {
      setIsListening(false);
      setFeedback('error');
    };

    recognition.onend = () => setIsListening(false);
    recognition.start();
  };

  const nextCard = () => {
    setFeedback('none');
    setTranscript('');
    setIsFlipped(false);
    
    setTimeout(() => {
      if (cardIndex >= bag.length - 1) {
        setBag([...allWords].sort(() => Math.random() - 0.5));
        setCardIndex(0);
      } else {
        setCardIndex(prev => prev + 1);
      }
    }, 300);
  };

  return (
    <div className="flex flex-col items-center py-2 animate-in fade-in duration-500">
      <div className="w-full max-w-[280px] h-[350px] perspective-1000">
        <div className={`relative w-full h-full transition-all duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
          
          <div className="absolute w-full h-full backface-hidden bg-slate-800 rounded-[2rem] shadow-2xl flex flex-col items-center justify-center p-6 border-b-8 border-pink-500">
            <span className="text-pink-400 text-[10px] font-black mb-4 uppercase tracking-[0.2em]">Prononce le mot :</span>
            <span className="text-3xl font-black text-white text-center leading-tight">{current.fr}</span>
            
            <div className="flex gap-4 mt-8">
               <button onClick={() => speak(false)} className="p-3 bg-slate-700 rounded-full text-white active:scale-90 transition-all">
                 <Volume2 size={20}/>
               </button>
               <button onClick={() => speak(true)} className="p-3 bg-slate-700 rounded-full text-amber-400 active:scale-90 transition-all">
                 <Turtle size={20}/>
               </button>
            </div>
          </div>

          <div className="absolute w-full h-full backface-hidden bg-green-600 rounded-[2rem] shadow-2xl flex flex-col items-center justify-center p-6 rotate-y-180 border-b-8 border-green-800">
            <CheckCircle2 size={48} className="mb-4 text-white animate-bounce" />
            <span className="text-4xl font-black text-white text-center leading-tight">{current.jp}</span>
            <span className="text-green-100 text-xl font-medium italic mt-2 opacity-90">{current.romaji}</span>
          </div>

        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-4 w-full max-w-[280px]">
        <button
          onClick={startListening}
          disabled={isListening || feedback === 'success'}
          className={`w-20 h-20 rounded-full flex items-center justify-center shadow-2xl transition-all active:scale-90 ${
            isListening ? 'bg-red-500 animate-pulse' : feedback === 'success' ? 'bg-green-500' : 'bg-blue-600'
          }`}
        >
          {isListening ? <MicOff size={32} color="white" /> : <Mic size={32} color="white" />}
        </button>

        <div className="text-center min-h-[50px] px-4">
          {feedback === 'error' && (
            <p className="text-red-400 text-xs font-bold uppercase animate-in shake">
              Entendu : {transcript || "?"} <br/>
              <span className="text-[9px] opacity-70 italic font-normal">Réessaie encore !</span>
            </p>
          )}
          {feedback === 'success' && <p className="text-green-400 text-xs font-black uppercase tracking-widest animate-in zoom-in">Excellent !</p>}
          {feedback === 'none' && !isListening && <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest opacity-50">Appuie sur le micro</p>}
        </div>

        {feedback === 'success' && (
          <button onClick={nextCard} className="w-full py-4 bg-white text-slate-900 rounded-2xl font-black uppercase shadow-xl active:scale-95 transition-all">
            Suivant →
          </button>
        )}
      </div>
    </div>
  );
};

export default OralCards;