import React, { useState } from 'react';
import { Award, RotateCcw, CheckCircle2 } from 'lucide-react';

interface ParagraphExercise {
  id: number;
  title: string;
  template: string; 
  answers: string[];
  allOptions: string[];
  translation: string;
}

const paragraphData: ParagraphExercise[] = [
  {
    id: 1, title: "Présentation",
    template: "はじめまして。私は 田中 [0]。フランス [1] 来ました。どうぞ [2] お願いします。",
    answers: ["です", "から", "よろしく"],
    allOptions: ["です", "から", "よろしく", "の", "に", "こんにちは"],
    translation: "Enchanté. Je suis Tanaka. Je viens de France. Ravi de vous rencontrer."
  },
  {
    id: 2, title: "Au restaurant",
    template: "すみません、メニューを [0] ください。コーヒーを [1] と、ケーキを [2] お願いします。",
    answers: ["見せて", "ひとつ", "ふたつ"],
    allOptions: ["見せて", "ひとつ", "ふたつ", "食べて", "三人", "どこ"],
    translation: "Excusez-moi, montrez-moi le menu s'il vous plaît. Un café et deux gâteaux s'il vous plaît."
  },
  {
    id: 3, title: "Ma Routine",
    template: "私は毎日、六時に [0]。朝ご飯を [1] から、学校へ [2]。",
    answers: ["起きます", "食べて", "行きます"],
    allOptions: ["起きます", "食べて", "行きます", "寝ます", "飲んで", "見ます"],
    translation: "Chaque jour, je me lève à 6h. Après avoir mangé le petit-déjeuner, je vais à l'école."
  },
  {
    id: 4, title: "Météo et Projets",
    template: "今日はいい [0] ですね。明日、一緒に海へ [1] か？車 [2] 行きましょう。",
    answers: ["天気", "行きません", "で"],
    allOptions: ["天気", "行きません", "で", "元気", "見ません", "に"],
    translation: "Il fait beau aujourd'hui. Et si on allait à la mer ensemble demain ? Allons-y en voiture."
  },
  {
    id: 5, title: "Shopping à Shibuya",
    template: "このシャツはいくら [0] か？少し [1] ですね。もっと [2] シャツはありますか？",
    answers: ["です", "高い", "安い"],
    allOptions: ["です", "高い", "安い", "ます", "赤い", "大きい"],
    translation: "Combien coûte cette chemise ? C'est un peu cher. En avez-vous une plus moins chère ?"
  },
  {
    id: 6, title: "Demander son chemin",
    template: "すみません、銀行は [0] ですか？この道をまっすぐ [1]、右に [2] ください。",
    answers: ["どこ", "行って", "曲がって"],
    allOptions: ["どこ", "行って", "曲がって", "何", "見て", "止まって"],
    translation: "Excusez-moi, où est la banque ? Allez tout droit sur cette route, puis tournez à droite."
  },
  {
    id: 7, title: "Hobby et Loisirs",
    template: "私の趣味は写真を [0] ことです。週末はよく友達 [1] 公園でテニスを [2]。",
    answers: ["撮る", "と", "します"],
    allOptions: ["撮る", "と", "します", "見る", "に", "来ます"],
    translation: "Mon hobby est de prendre des photos. Le week-end, je joue souvent au tennis avec des amis au parc."
  },
  {
    id: 8, title: "Invitation au Cinéma",
    template: "今晩、暇 [0] か？面白い映画が [1] よ。一緒に [2] に行きましょう。",
    answers: ["です", "あります", "見"],
    allOptions: ["です", "あります", "見", "ます", "います", "食べ"],
    translation: "Es-tu libre ce soir ? Il y a un film intéressant. Allons le voir ensemble."
  },
  {
    id: 9, title: "Le Voyage au Japon",
    template: "去年、日本へ [0]。京都の古いお寺はとても [1] でした。また [2] です。",
    answers: ["行きました", "綺麗", "行きたい"],
    allOptions: ["行きました", "綺麗", "行きたい", "来ました", "静か", "見たい"],
    translation: "L'année dernière, je suis allé au Japon. Les vieux temples de Kyoto étaient magnifiques. Je veux y retourner."
  },
  {
    id: 10, title: "Le Travail",
    template: "私は会社員です。仕事は [0] ですが、とても [1] です。毎日忙しい [2]。",
    answers: ["大変", "面白い", "です"],
    allOptions: ["大変", "面白い", "です", "簡単", "つまらない", "ます"],
    translation: "Je suis employé de bureau. Le travail est dur, mais très intéressant. Je suis occupé chaque jour."
  }
];

const FillInBlanks: React.FC = () => {
  const [currentParaIndex, setCurrentParaIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [activeSlot, setActiveSlot] = useState<number | null>(0);
  const [isFinished, setIsFinished] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const current = paragraphData[currentParaIndex];

  const handleOptionClick = (option: string) => {
    if (activeSlot === null) return;
    setUserAnswers({ ...userAnswers, [activeSlot]: option });
    if (activeSlot < current.answers.length - 1) {
      setActiveSlot(activeSlot + 1);
    } else {
      setActiveSlot(null);
    }
  };

  const checkParagraph = () => {
    const allCorrect = current.answers.every((ans, i) => userAnswers[i] === ans);
    if (allCorrect) {
      setShowFeedback(true);
      setTimeout(() => {
        if (currentParaIndex < paragraphData.length - 1) {
          setCurrentParaIndex(currentParaIndex + 1);
          setUserAnswers({});
          setActiveSlot(0);
          setShowFeedback(false);
        } else {
          setIsFinished(true);
        }
      }, 2000);
    } else {
      alert("Il y a des erreurs dans le texte, réessaie !");
    }
  };

  if (isFinished) {
    return (
      <div className="max-w-2xl mx-auto p-12 bg-white rounded-3xl shadow-xl text-center animate-in fade-in duration-300">
        <Award className="w-20 h-20 text-yellow-500 mx-auto mb-6" />
        <h2 className="text-3xl font-black mb-4 text-slate-900">Maître des Textes !</h2>
        <button onClick={() => window.location.reload()} className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 mx-auto shadow-xl">
          <RotateCcw size={20} /> Retour au menu
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-3xl shadow-xl border border-gray-100 animate-in fade-in duration-300">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-slate-900">{current.title}</h2>
        <span className="text-sm font-bold text-purple-600">Texte {currentParaIndex + 1} / {paragraphData.length}</span>
      </div>

      {/* ZONE DE TEXTE (PARAGRAPHE - Lisibilité Maximale) */}
      <div className="bg-white p-8 rounded-2xl mb-8 leading-[3.5rem] text-3xl font-medium text-black shadow-inner border border-gray-100">
        {current.template.split(/(\[[0-9]\])/g).map((part, index) => {
          const match = part.match(/\[([0-9])\]/);
          if (match) {
            const slotIndex = parseInt(match[1]);
            return (
              <button
                key={index}
                onClick={() => setActiveSlot(slotIndex)}
                className={`inline-block min-w-[100px] h-12 mx-2 px-3 leading-10 rounded-lg border-2 transition-all transform ${
                  activeSlot === slotIndex ? 'border-purple-500 bg-purple-50 ring-4 ring-purple-100' : 
                  userAnswers[slotIndex] ? 'border-green-400 bg-green-50 text-green-700 font-bold' : 'border-dashed border-gray-300 bg-gray-50 text-transparent'
                }`}
              >
                {userAnswers[slotIndex] || "...."}
              </button>
            );
          }
          return <span key={index}>{part}</span>;
        })}
      </div>

      {/* OPTIONS CLIQUABLES (Gaming Dark) */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        {current.allOptions.map((opt) => (
          <button
            key={opt}
            onClick={() => handleOptionClick(opt)}
            className="p-4 bg-slate-800 border border-slate-700 text-white rounded-2xl font-bold text-lg hover:border-purple-400 hover:bg-slate-750 transition-all shadow-md active:scale-95"
          >
            {opt}
          </button>
        ))}
      </div>

      {/* BOUTON VALIDER */}
      <button
        onClick={checkParagraph}
        disabled={Object.keys(userAnswers).length < current.answers.length || showFeedback}
        className={`w-full py-4 rounded-2xl font-black text-white transition-all flex items-center justify-center gap-2 uppercase tracking-wide ${
          showFeedback ? 'bg-green-600 border-green-700' : 'bg-purple-600 hover:bg-purple-700 border-purple-700'
        } border-b-8`}
      >
        {showFeedback ? <><CheckCircle2 /> Texte Correct !</> : "Vérifier le paragraphe"}
      </button>
      
      <p className="mt-6 text-center text-slate-500 text-sm italic font-medium">{current.translation}</p>
    </div>
  );
};

export default FillInBlanks;