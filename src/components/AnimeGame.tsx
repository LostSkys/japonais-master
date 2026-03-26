import React, { useState, useEffect } from 'react';
import { allData, type Word } from '../data';
import { Trophy, Tv, Zap, RefreshCw } from 'lucide-react';

const AnimeGame: React.FC = () => {
  const animeWords = allData.anime;
  const [currentWord, setCurrentWord] = useState<Word | null>(null);
  const [options, setOptions] = useState<Word[]>([]);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const nextQuestion = () => {
    const correct = animeWords[Math.floor(Math.random() * animeWords.length)];
    const wrongs = animeWords
      .filter(w => w.id !== correct.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    
    setCurrentWord(correct);
    setOptions([...wrongs, correct].sort(() => 0.5 - Math.random()));
    setAnswered(false);
    setSelectedId(null);
  };

  useEffect(() => {
    nextQuestion();
  }, []);

  const handleAnswer = (wordId: number) => {
    if (answered) return;
    setSelectedId(wordId);
    setAnswered(true);
    if (wordId === currentWord?.id) {
      setScore(score + 10);
    }
  };

  if (!currentWord) return null;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-3xl shadow-xl border-t-8 border-orange-500">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2 text-orange-600 font-black">
          <Tv size={24} />
          <span>OTAKU QUIZ</span>
        </div>
        <div className="flex items-center gap-2 bg-orange-100 px-4 py-1 rounded-full text-orange-700 font-bold">
          <Trophy size={18} />
          {score} pts
        </div>
      </div>

      <div className="text-center mb-10">
        <div className="text-5xl font-black text-gray-900 mb-2">{currentWord.jp}</div>
        <div className="text-xl text-orange-500 font-medium">{currentWord.romaji}</div>
        <p className="text-gray-400 mt-4 italic">"Comment traduis-tu cela ?"</p>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => handleAnswer(opt.id)}
            className={`p-5 rounded-2xl border-2 font-bold text-lg transition-all flex justify-between items-center ${
              answered 
                ? opt.id === currentWord.id 
                  ? 'border-green-500 bg-green-50 text-green-700' 
                  : opt.id === selectedId ? 'border-red-500 bg-red-50 text-red-700' : 'border-gray-100 opacity-50'
                : 'border-gray-100 hover:border-orange-300 hover:bg-orange-50 text-gray-700'
            }`}
          >
            {opt.fr}
            {answered && opt.id === currentWord.id && <Zap className="text-yellow-500 fill-yellow-500" />}
          </button>
        ))}
      </div>

      {answered && (
        <button
          onClick={nextQuestion}
          className="w-full mt-8 py-4 bg-orange-500 text-white rounded-2xl font-black shadow-lg shadow-orange-200 hover:bg-orange-600 flex items-center justify-center gap-2"
        >
          <RefreshCw size={20} /> Question suivante
        </button>
      )}
    </div>
  );
};

export default AnimeGame;