import React, { useState} from 'react';
import { Mic, MicOff, CheckCircle2, Volume2, Turtle} from 'lucide-react';
import { allWords } from '../data';

const OralCards: React.FC = () => {
  // Mélange initial du sac
  const [bag, setBag] = useState<any[]>(() => [...allWords].sort(() => Math.random() - 0.5));
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [feedback, setFeedback] = useState<'none' | 'success' | 'error'>('none');
  const [transcript, setTranscript] = useState('');

  const current = bag[cardIndex];

  const speak = (isSlow: boolean = false) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(current.jp);
    utterance.lang = 'ja-JP';
    utterance.rate = isSlow ? 0.55 : 1.0;
    window.speechSynthesis.speak(utterance);
  };

  const startListening = () => {
    // @ts-ignore
    const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Recognition) return alert("Utilise Chrome !");

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
        setIsFlipped(true); // Retourne la carte automatiquement en cas de succès
      } else {
        setFeedback('error');
      }
    };

    recognition.onerror = () => { setFeedback('error'); setIsListening(false); };
    recognition.onend = () => setIsListening(false);
    recognition.start();
  };

  const nextCard = () => {
    if (cardIndex >= bag.length - 1) {
      setBag([...allWords].sort(() => Math.random() - 0.5));
      setCardIndex(0);
    } else {
      setCardIndex(prev => prev + 1);
    }
    setFeedback('none');
    setTranscript('');
    setIsFlipped(false);
  };

  return (
    <div className="flex flex-col items-center py-2 animate-in slide-in-from-bottom-4">
      {/* Carte style Flashcard */}
      <div className="w-full max-w-[280px] h-[350px] perspective-1000">
        <div className={`relative w-full h-full transition-all duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
          {/* Recto : Français (Bloqué tant qu'on n'a pas parlé) */}
          <div className="absolute w-full h-full backface-hidden bg-slate-800 rounded-[2rem] shadow-2xl flex flex-col items-center justify-center p-6 border-b-8 border-pink-500">
            <span className="text-pink-400 text-[10px] font-black mb-2 uppercase tracking-widest">Prononce le mot :</span>
            <span className="text-3xl font-black text-white">{current.fr}</span>
            <div className="flex gap-4 mt-8">
               <button onClick={() => speak(false)} className="p-3 bg-slate-700 rounded-full hover:bg-blue-500 transition-colors"><Volume2 size={20}/></button>
               <button onClick={() => speak(true)} className="p-3 bg-slate-700 rounded-full hover:bg-amber-500 transition-colors"><Turtle size={20}/></button>
            </div>
          </div>
          {/* Verso : Japonais (Révélé après succès) */}
          <div className="absolute w-full h-full backface-hidden bg-green-600 rounded-[2rem] shadow-2xl flex flex-col items-center justify-center p-6 rotate-y-180 border-b-8 border-green-800">
            <CheckCircle2 size={40} className="mb-4 text-white animate-bounce" />
            <span className="text-4xl font-black text-white">{current.jp}</span>
            <span className="text-green-100 text-xl italic mt-2">{current.romaji}</span>
          </div>
        </div>
      </div>

      {/* Zone de contrôle */}
      <div className="mt-8 flex flex-col items-center gap-4 w-full max-w-[280px]">
        <button
          onClick={startListening}
          disabled={isListening || feedback === 'success'}
          className={`w-20 h-20 rounded-full flex items-center justify-center shadow-xl transition-all ${
            isListening ? 'bg-red-500 animate-pulse' : feedback === 'success' ? 'bg-green-500' : 'bg-blue-600 hover:scale-110'
          }`}
        >
          {isListening ? <MicOff size={32} color="white" /> : <Mic size={32} color="white" />}
        </button>

        <div className="text-center min-h-[40px]">
          {feedback === 'error' && <p className="text-red-400 text-xs font-bold uppercase">Entendu : {transcript || "?"} <br/> Réessaie !</p>}
          {feedback === 'success' && <p className="text-green-400 text-xs font-bold uppercase">Parfait !</p>}
        </div>

        {feedback === 'success' && (
          <button onClick={nextCard} className="w-full py-4 bg-white text-slate-900 rounded-2xl font-black uppercase shadow-xl hover:bg-pink-500 hover:text-white transition-all animate-in zoom-in">
            Mot Suivant →
          </button>
        )}
      </div>
      <div className="mt-4 text-[10px] text-slate-500 font-bold uppercase tracking-widest">Sac : {cardIndex + 1} / {bag.length}</div>
    </div>
  );
};

export default OralCards;