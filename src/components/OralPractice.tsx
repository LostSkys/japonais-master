import React, { useState, useEffect } from 'react';
import { Mic, MicOff, CheckCircle2, XCircle, Volume2, Turtle } from 'lucide-react';
import { allWords } from '../data'; 
import { sentencesV2 } from '../data/sentencesV2'; 

const OralPractice: React.FC = () => {
  const [exerciseList, setExerciseList] = useState<any[]>([]);
  const [index, setIndex] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [feedback, setFeedback] = useState<'none' | 'success' | 'error'>('none');
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    const randomWords = [...allWords].sort(() => 0.5 - Math.random()).slice(0, 5);
    const randomSentences = [...sentencesV2].sort(() => 0.5 - Math.random()).slice(0, 5);
    setExerciseList([...randomWords, ...randomSentences].sort(() => 0.5 - Math.random()));
  }, []);

  const current = exerciseList[index];

  // FONCTION DE PAROLE SÉCURISÉE ANDROID
  const speak = (isSlow: boolean = false) => {
    if (!current || !window.speechSynthesis) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(current.jp);
    utterance.lang = 'ja-JP';
    
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
    if (!Recognition) return alert("Micro non supporté.");

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

      if (cleanResult === cleanTarget) setFeedback('success');
      else setFeedback('error');
    };

    recognition.onerror = () => {
      setIsListening(false);
      setFeedback('error');
    };

    recognition.onend = () => setIsListening(false);
    recognition.start();
  };

  const nextLevel = () => {
    setFeedback('none');
    setTranscript('');
    if (index < exerciseList.length - 1) {
      setIndex(prev => prev + 1);
    } else {
      const randomWords = [...allWords].sort(() => 0.5 - Math.random()).slice(0, 5);
      const randomSentences = [...sentencesV2].sort(() => 0.5 - Math.random()).slice(0, 5);
      setExerciseList([...randomWords, ...randomSentences].sort(() => 0.5 - Math.random()));
      setIndex(0);
    }
  };

  if (!current) return <div className="text-white text-center font-black uppercase py-20">Chargement...</div>;

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-slate-800 rounded-[2.5rem] border border-slate-700 shadow-2xl animate-in fade-in duration-500">
      
      <div className="text-center mb-8">
        <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Exercice {index + 1} / {exerciseList.length}</span>
        <h2 className="text-4xl font-black text-white mb-2 leading-tight">{current.jp}</h2>
        <p className="text-blue-400 font-bold text-lg mb-1">{current.romaji}</p>
        <p className="text-slate-400 italic text-sm font-medium">"{current.fr}"</p>
      </div>

      <div className="flex flex-col items-center gap-6">
        <div className="flex gap-4">
          <button onClick={() => speak(false)} className="flex items-center gap-2 px-5 py-2.5 bg-slate-700 rounded-xl text-[10px] font-black uppercase text-white active:scale-95">
            <Volume2 size={16}/> Normal
          </button>
          <button onClick={() => speak(true)} className="flex items-center gap-2 px-5 py-2.5 bg-slate-700 rounded-xl text-[10px] font-black uppercase text-amber-400 active:scale-95">
            <Turtle size={16}/> Lent
          </button>
        </div>

        <button 
          onClick={startListening} 
          disabled={isListening || feedback === 'success'}
          className={`relative w-24 h-24 rounded-full flex items-center justify-center transition-all shadow-2xl active:scale-90 ${
            isListening ? 'bg-red-500 animate-pulse' : feedback === 'success' ? 'bg-green-500' : 'bg-blue-600'
          }`}
        >
          {isListening ? <MicOff size={40} color="white" /> : <Mic size={40} color="white" />}
        </button>

        <div className="w-full min-h-[90px] flex flex-col items-center justify-center p-4 rounded-[1.5rem] bg-slate-900 border border-slate-700 text-center shadow-inner">
          {feedback === 'none' && <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{transcript || "Appuie et répète"}</p>}
          {feedback === 'success' && (
            <div className="text-green-400 flex flex-col items-center animate-in zoom-in">
              <CheckCircle2 size={32} />
              <p className="font-black uppercase text-xs mt-2">Prononciation validée !</p>
            </div>
          )}
          {feedback === 'error' && (
            <div className="text-red-400 flex flex-col items-center animate-in shake">
              <XCircle size={32} />
              <p className="font-black uppercase text-[10px] mt-2">Réessaie !</p>
              <span className="text-[10px] opacity-60 mt-1 italic">Entendu : {transcript}</span>
            </div>
          )}
        </div>

        {feedback === 'success' && (
          <button onClick={nextLevel} className="w-full py-4 bg-white text-slate-900 rounded-2xl font-black uppercase tracking-widest shadow-xl active:scale-95 transition-all">
            Suivant →
          </button>
        )}
      </div>
    </div>
  );
};

export default OralPractice;