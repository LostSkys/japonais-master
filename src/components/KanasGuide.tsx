import React from 'react';
import { AlertCircle } from 'lucide-react';

const KanasGuide: React.FC = () => {
  return (
    <div className="bg-slate-800 rounded-[2rem] p-6 border border-slate-700 w-full max-w-2xl mx-auto shadow-2xl animate-in fade-in duration-500 h-[75vh] overflow-y-auto scrollbar-hide">
      
      <div className="text-center mb-6">
        <h2 className="text-xl font-black text-white uppercase tracking-wider">Le Système d'Écriture Japonais</h2>
        <p className="text-slate-400 text-xs mt-1">Pourquoi existe-t-il 3 alphabets et comment choisir ?</p>
      </div>

      <div className="space-y-6">
        
        {/* HIRAGANA */}
        <div className="bg-slate-900 p-5 rounded-2xl border-l-4 border-l-emerald-500 shadow-md">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">あ</span>
            <h3 className="text-emerald-400 font-black text-sm uppercase tracking-wide">1. Les Hiragana (ひらがな)</h3>
          </div>
          <p className="text-slate-300 text-xs leading-relaxed">
            C'est l'alphabet de base, tout en rondeur. On l'utilise pour tout ce qui est **purement japonais** : la grammaire (particules), les mots sans kanji, et pour donner un ton doux.
          </p>
          <div className="mt-3 bg-slate-950 p-2.5 rounded-xl flex flex-col gap-1 text-[11px]">
            <div className="flex justify-between"><span className="text-slate-500">Mots traditionnels :</span> <span className="text-white font-bold">おかゆ (Okayu - Bouillie)</span></div>
            <div className="flex justify-between"><span className="text-slate-500">Style Mignon / Idoles :</span> <span className="text-pink-400 font-bold">ぺこら (Pekora)</span></div>
            <div className="flex justify-between"><span className="text-slate-500">Grammaire :</span> <span className="text-white font-bold">です (Desu), から (Kara)</span></div>
          </div>
        </div>

        {/* KATAKANA */}
        <div className="bg-slate-900 p-5 rounded-2xl border-l-4 border-l-blue-500 shadow-md">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">ア</span>
            <h3 className="text-blue-400 font-black text-sm uppercase tracking-wide">2. Les Katakana (カタカナ)</h3>
          </div>
          <p className="text-slate-300 text-xs leading-relaxed">
            Plus anguleux et tranchants. On les utilise exclusivement pour **les mots empruntés à l'étranger**, les prénoms occidentaux, les onomatopées (mangas) et pour insister (comme des *italiques*).
          </p>
          <div className="mt-3 bg-slate-950 p-2.5 rounded-xl flex flex-col gap-1 text-[11px]">
            <div className="flex justify-between"><span className="text-slate-500">Prénoms étrangers :</span> <span className="text-white font-bold">マリン (Marin / Marine)</span></div>
            <div className="flex justify-between"><span className="text-slate-500">Mots importés :</span> <span className="text-white font-bold">テレビ (Terebi - Télévision)</span></div>
            <div className="flex justify-between"><span className="text-slate-500">Bruitages Manga :</span> <span className="text-amber-400 font-bold">ドキドキ (Doki Doki - Battement de cœur)</span></div>
          </div>
        </div>

        {/* KANJI */}
        <div className="bg-slate-900 p-5 rounded-2xl border-l-4 border-l-amber-500 shadow-md">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">漢</span>
            <h3 className="text-amber-400 font-black text-sm uppercase tracking-wide">3. Les Kanji (漢字)</h3>
          </div>
          <p className="text-slate-300 text-xs leading-relaxed">
            Ce sont des **signes-idées** (idéogrammes) importés de Chine. Chaque symbole représente un concept, un objet ou une action. Ils permettent de séparer les mots visuellement car le japonais s'écrit sans espaces !
          </p>
          <div className="mt-3 bg-slate-950 p-2.5 rounded-xl flex flex-col gap-1 text-[11px]">
            <div className="flex justify-between"><span className="text-slate-500">Idée de l'eau chaude :</span> <span className="text-white font-bold">湯 (Yu)</span></div>
            <div className="flex justify-between"><span className="text-slate-500">Idée de manger :</span> <span className="text-white font-bold">食べる (Taberu)</span></div>
          </div>
        </div>

        {/* RECAP / REGLE D'OR */}
        <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-indigo-400 shrink-0 mt-0.5" size={18} />
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wide mb-1">La Règle d'Or du Développeur</h4>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Une phrase japonaise normale est un **mélange des trois**. 
                <br />
                Exemple : <span className="text-white font-mono">私はテレビを見ます。</span> (Je regarde la télé).
                <br />
                • <span className="text-amber-400 font-bold">私</span> (Kanji - Je) et <span className="text-amber-400 font-bold">見</span> (Kanji - Voir) portent le sens.
                <br />
                • <span className="text-emerald-400 font-bold">は</span>, <span className="text-emerald-400 font-bold">を</span>, <span className="text-emerald-400 font-bold">ます</span> (Hiragana) lient la grammaire.
                <br />
                • <span className="text-blue-400 font-bold">テレビ</span> (Katakana) désigne l'objet technologique importé.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default KanasGuide;