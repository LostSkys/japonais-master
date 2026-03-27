import React, { useState, useEffect } from 'react';
import { Mic, MicOff, CheckCircle2, XCircle, Volume2 } from 'lucide-react';
import { allWords } from '../data'; // Import des mots
import { sentencesV2 } from '../data/sentencesV2'; // Import des phrases

const OralPractice: React.FC = () => {
  const [exerciseList, setExerciseList] = useState<any[]>([]);
  const [index, setIndex] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [feedback, setFeedback] = useState<'none' | 'success' | 'error'>('none');
  const [transcript, setTranscript] = useState('');

  // Initialisation : on mélange quelques mots et quelques phrases
  useEffect(() => {
    const randomWords = [...allWords].sort(() => 0.5 - Math.random()).slice(0, 5);
    const randomSentences = [...sentencesV2].sort(() => 0.5 - Math.random()).slice(0, 5);
    
    // On met les mots simples au début et les phrases après
    setExerciseList([...randomWords, ...randomSentences]);
  }, []);

  const current = exerciseList[index];

  const speak = () => {
    if (!current) return;
    const utterance = new SpeechSynthesisUtterance(current.jp);
    utterance.lang = 'ja-JP';
    window.speechSynthesis.speak(utterance);
  };

  const startListening = () => {
    // @ts-ignore
    const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Recognition) {
      alert("Navigateur non supporté. Utilise Chrome !");
      return;
    }

    const recognition = new Recognition();
    recognition.lang = 'ja-JP';
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
      setFeedback('none');
      setTranscript('Écoute...');
    };

    recognition.onresult = (event: any) => {
      const result = event.results[0][0].transcript;
      setTranscript(result);
      
      const cleanResult = result.replace(/[、。！？ ]/g, "");
      const cleanTarget = current.jp.replace(/[、。！？ ]/g, "");

      if (cleanResult === cleanTarget) {
        setFeedback('success');
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

  const nextLevel = () => {
    if (index < exerciseList.length - 1) {
      setIndex(index + 1);
      setFeedback('none');
      setTranscript('');
    } else {
      alert("Bravo ! Tu as terminé la session d'entraînement oral !");
    }
  };

  if (!current) return <div className="text-white">Chargement...</div>;

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-slate-800 rounded-3xl border border-slate-700 shadow-2xl animate-in fade-in duration-300">
      <div className="text-center mb-8">
        <span className="px-3 py-1 bg-pink-600/20 text-pink-400 rounded-full text-[10px] font-black uppercase tracking-widest">
          {index < 5 ? "Niveau : Mot" : "Niveau : Phrase"}
        </span>
        <h2 className="text-5xl font-black text-white mt-4 mb-2 leading-tight">{current.jp}</h2>
        <p className="text-blue-400 font-bold text-xl mb-1">{current.romaji}</p>
        <p className="text-slate-400 italic text-sm">"{current.fr}"</p>
      </div>

      <div className="flex flex-col items-center gap-6">
        <button onClick={speak} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-bold">
          <Volume2 size={20} /> Écouter l'exemple
        </button>

        <button
          onClick={startListening}
          disabled={isListening}
          className={`w-24 h-24 rounded-full flex items-center justify-center transition-all shadow-2xl relative ${
            isListening ? 'bg-red-500 animate-pulse' : 'bg-blue-600 hover:bg-blue-500'
          }`}
        >
          {isListening ? <MicOff size={40} color="white" /> : <Mic size={40} color="white" />}
          {isListening && <span className="absolute -inset-2 border-4 border-red-500 rounded-full animate-ping opacity-25"></span>}
        </button>

        <div className="w-full min-h-[80px] flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-900 border border-slate-700 text-center">
          {feedback === 'none' && <p className="text-slate-500 text-sm">{transcript || "Clique et parle !"}</p>}
          {feedback === 'success' && (
            <div className="text-green-400 flex flex-col items-center animate-bounce">
              <CheckCircle2 size={32} />
              <p className="font-black uppercase text-xs mt-2">C'est ça !</p>
            </div>
          )}
          {feedback === 'error' && (
            <div className="text-red-400 flex flex-col items-center">
              <XCircle size={32} />
              <p className="font-black uppercase text-xs mt-2">Réessaie...</p>
              <span className="text-[10px] opacity-60">Entendu : {transcript}</span>
            </div>
          )}
        </div>

        {feedback === 'success' && (
          <button 
            onClick={nextLevel}
            className="w-full py-4 bg-white text-slate-900 rounded-2xl font-black uppercase tracking-tighter hover:bg-pink-500 hover:text-white transition-all shadow-xl"
          >
            Continuer →
          </button>
        )}
      </div>
    </div>
  );
};

export default OralPractice;