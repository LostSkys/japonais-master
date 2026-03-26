import React, { useState, useEffect } from 'react';
import { type Word, allData } from '../data'; 
import { CheckCircle, RefreshCw } from 'lucide-react';

const SentenceGame: React.FC = () => {
  const allSentences: Word[] = [...allData.sentences, ...allData.sentencesV2];
  const [currentSentence, setCurrentSentence] = useState<Word | null>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);

  const generateQuestion = () => {
    const randomSentence = allSentences[Math.floor(Math.random() * allSentences.length)];
    setCurrentSentence(randomSentence);
    
    const otherSentences = allSentences
      .filter(s => s.id !== randomSentence.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map(s => s.fr);

    const allOptions = [...otherSentences, randomSentence.fr].sort(() => 0.5 - Math.random());
    setOptions(allOptions);
    setIsCorrect(null);
  };

  useEffect(() => { generateQuestion(); }, []);

  const handleSelect = (option: string) => {
    if (isCorrect !== null) return;
    const correct = option === currentSentence?.fr;
    setIsCorrect(correct);
    if (correct) setScore(score + 1);
  };

  if (!currentSentence) return null;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-100">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Traduisez la phrase</h2>
        <div className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full font-semibold">Score: {score}</div>
      </div>
      <div className="bg-gray-50 p-8 rounded-2xl mb-8 text-center border border-gray-100">
        <div className="text-4xl font-bold text-gray-900 mb-4">{currentSentence.jp}</div>
        <div className="text-xl text-blue-600 font-medium">{currentSentence.romaji}</div>
      </div>
      <div className="grid grid-cols-1 gap-4 mb-8">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelect(option)}
            disabled={isCorrect !== null}
            className={`p-4 text-left rounded-xl border-2 transition-all ${
              isCorrect === null ? 'border-gray-200 hover:border-blue-400' : 
              option === currentSentence.fr ? 'border-green-500 bg-green-50 text-green-700' : 'border-red-200 bg-red-50 text-red-700 opacity-60'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      <button onClick={generateQuestion} className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold flex items-center justify-center gap-2">
        <RefreshCw className="w-5 h-5" /> Suivant
      </button>
    </div>
  );
};

export default SentenceGame;