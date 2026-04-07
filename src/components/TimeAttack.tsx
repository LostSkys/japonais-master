import React, { useState, useEffect, useCallback } from 'react';
import { allWords } from '../data';
import { Heart, Zap } from 'lucide-react';

const TimeAttack: React.FC = () => {
  const [current, setCurrent] = useState<any>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [timeLeft, setTimeLeft] = useState(10); // 10 secondes par question
  const [gameState, setGameState] = useState<'playing' | 'gameover'>('playing');

  const generateQuestion = useCallback(() => {
    const correct = allWords[Math.floor(Math.random() * allWords.length)];
    const wrongs = allWords
      .filter(w => w.jp !== correct.jp)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map(w => w.fr);
    
    setCurrent(correct);
    setOptions([...wrongs, correct.fr].sort(() => 0.5 - Math.random()));
    setTimeLeft(10); // On reset le timer
  }, []);

  useEffect(() => {
    if (gameState === 'playing') generateQuestion();
  }, [generateQuestion, gameState]);

  // Logique du Timer
  useEffect(() => {
    if (gameState !== 'playing') return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          handleWrong();
          return 10;
        }
        return prev - 0.1;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [gameState, current]);

  const handleWrong = () => {
    if (lives <= 1) {
      setGameState('gameover');
    } else {
      setLives(l => l - 1);
      generateQuestion();
    }
  };

  const handleAnswer = (answer: string) => {
    if (answer === current.fr) {
      setScore(s => s + 10);
      generateQuestion();
    } else {
      handleWrong();
    }
  };

  if (gameState === 'gameover') {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-slate-800 rounded-[3rem] border-4 border-red-500 shadow-2xl animate-in zoom-in">
        <h2 className="text-4xl font-black text-white mb-2 uppercase">Game Over</h2>
        <p className="text-slate-400 mb-6 uppercase tracking-widest">Score Final: {score}</p>
        <button 
          onClick={() => { setScore(0); setLives(3); setGameState('playing'); }}
          className="px-8 py-4 bg-red-500 text-white rounded-2xl font-black uppercase hover:bg-red-400 transition-all"
        >
          Réessayer
        </button>
      </div>
    );
  }

  if (!current) return null;

  return (
    <div className="w-full max-w-md mx-auto p-4 animate-in fade-in duration-300">
      {/* Stats Bar */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-1 text-red-500">
          {[...Array(3)].map((_, i) => (
            <Heart key={i} fill={i < lives ? "currentColor" : "none"} size={24} className={i < lives ? "animate-pulse" : "opacity-20"} />
          ))}
        </div>
        <div className="bg-slate-800 px-4 py-1 rounded-full border border-slate-700 font-black text-blue-400">
          SCORE: {score}
        </div>
      </div>

      {/* Timer Bar */}
      <div className="w-full h-4 bg-slate-800 rounded-full mb-8 overflow-hidden border border-slate-700">
        <div 
          className={`h-full transition-all duration-100 ${timeLeft < 3 ? 'bg-red-500' : 'bg-blue-500'}`}
          style={{ width: `${(timeLeft / 10) * 100}%` }}
        ></div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-[2.5rem] p-10 text-center shadow-2xl mb-8 relative overflow-hidden">
        <Zap className="absolute top-4 right-4 text-yellow-400 opacity-20" size={40} />
        <span className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-2">Traduisez vite !</span>
        <h2 className="text-6xl font-black text-slate-900 leading-tight">{current.jp}</h2>
        <p className="text-blue-500 font-bold mt-2">{current.romaji}</p>
      </div>

      {/* Options Grid */}
      <div className="grid grid-cols-2 gap-3">
        {options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(opt)}
            className="p-4 bg-slate-800 border-2 border-slate-700 rounded-2xl text-white font-bold hover:bg-slate-700 hover:border-blue-500 active:scale-90 transition-all text-sm"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeAttack;