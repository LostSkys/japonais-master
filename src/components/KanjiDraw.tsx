import React, { useRef, useState, useEffect } from 'react';
import {AlertCircle, Sparkles } from 'lucide-react';
import { allWords } from '../data';

const KanjiDraw: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentWord, setCurrentWord] = useState(allWords[0]);
  const [feedback, setFeedback] = useState<'none' | 'success' | 'error'>('none');
  const [fontSize, setFontSize] = useState('12rem');

  // Sécurité pour les noms de propriétés dans data.ts
  const displayRomaji = (currentWord as any).romaji || (currentWord as any).ro || "";

  // Ajustement de la taille du texte selon la longueur du mot
  useEffect(() => {
    const charCount = currentWord.jp.length;
    if (charCount > 8) setFontSize('5rem');
    else if (charCount > 4) setFontSize('8rem');
    else setFontSize('12rem');
    clearCanvas();
  }, [currentWord]);

  const getCoords = (e: any) => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: (clientX - rect.left) * (canvas.width / canvas.offsetWidth),
      y: (clientY - rect.top) * (canvas.height / canvas.offsetHeight)
    };
  };

  const startDrawing = (e: any) => {
    if (e.touches) e.preventDefault();
    const { x, y } = getCoords(e);
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) {
      setIsDrawing(true);
      setFeedback('none');
      ctx.lineWidth = 18; // Trait un peu plus large pour aider à la couverture
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.strokeStyle = '#3b82f6';
      ctx.beginPath();
      ctx.moveTo(x, y);
    }
  };

  const draw = (e: any) => {
    if (!isDrawing) return;
    const { x, y } = getCoords(e);
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) {
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
    }
    setFeedback('none');
  };

  const validate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true })!;
    
    // Création du modèle de comparaison en mémoire
    const memCanvas = document.createElement('canvas');
    memCanvas.width = canvas.width;
    memCanvas.height = canvas.height;
    const mctx = memCanvas.getContext('2d')!;
    mctx.font = `normal ${fontSize} serif`;
    mctx.textAlign = 'center';
    mctx.textBaseline = 'middle';
    mctx.fillText(currentWord.jp, memCanvas.width / 2, memCanvas.height / 2);

    const userImg = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    const modelImg = mctx.getImageData(0, 0, memCanvas.width, memCanvas.height).data;
    
    let hits = 0; 
    let modelPixels = 0; 

    for (let i = 3; i < modelImg.length; i += 4) {
      if (modelImg[i] > 20) { // Zone occupée par le texte modèle
        modelPixels++;
        if (userImg[i] > 20) hits++; // Zone couverte par l'utilisateur
      }
    }

    const accuracy = (hits / modelPixels) * 100;

    // Seuil de 25% : Tolérant pour les traits fins, mais bloque le gribouillis
    if (accuracy > 25) {
      setFeedback('success');
    } else {
      setFeedback('error');
    }
  };

  const handleNext = () => {
    const randomIndex = Math.floor(Math.random() * allWords.length);
    setCurrentWord(allWords[randomIndex]);
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4 animate-in fade-in duration-500">
      <div className="bg-slate-800 rounded-[2.5rem] p-6 shadow-2xl border border-slate-700">
        
        <div className="text-center mb-6">
          <h2 className="text-sm font-black text-blue-400 uppercase tracking-widest">Écriture Japonaise</h2>
          <h3 className="text-3xl font-black text-white mt-2 leading-tight">{currentWord.fr}</h3>
          <p className="text-slate-400 text-sm italic mt-1 opacity-70">({displayRomaji})</p>
        </div>

        {/* Canvas Ratio 2:1 Adaptatif */}
        <div className="relative w-full aspect-[2/1] bg-slate-900 rounded-3xl border-4 border-slate-700 overflow-hidden shadow-inner">
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.1] pointer-events-none select-none">
            <span className="font-serif text-white leading-none transition-all duration-300" style={{ fontSize }}>
              {currentWord.jp}
            </span>
          </div>
          <canvas
            ref={canvasRef}
            width={800}
            height={400}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={() => setIsDrawing(false)}
            onMouseLeave={() => setIsDrawing(false)}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={() => setIsDrawing(false)}
            className="absolute inset-0 w-full h-full touch-none cursor-crosshair"
          />
        </div>

        {/* Actions & Feedback */}
        <div className="mt-8 flex flex-col items-center gap-4 max-w-md mx-auto">
          {feedback === 'none' && (
            <div className="flex gap-4 w-full">
              <button onClick={clearCanvas} className="flex-1 py-4 bg-slate-700 text-slate-300 rounded-2xl font-black uppercase text-xs hover:bg-slate-600 transition-all">
                Effacer
              </button>
              <button onClick={validate} className="flex-1 py-4 bg-blue-600 text-white rounded-2xl font-black uppercase text-xs hover:bg-blue-500 shadow-lg shadow-blue-900/20 transition-all">
                Valider
              </button>
            </div>
          )}

          {feedback === 'error' && (
            <div className="w-full animate-in zoom-in duration-300 bg-red-500/10 border-2 border-red-500 p-4 rounded-2xl text-center">
              <div className="flex items-center justify-center gap-2 text-red-500 mb-3">
                <AlertCircle size={20} />
                <p className="font-bold uppercase text-xs tracking-tighter">Pas assez précis, recommence !</p>
              </div>
              <button onClick={clearCanvas} className="w-full py-3 bg-red-500 text-white rounded-xl font-black text-xs uppercase hover:bg-red-400 transition-all">
                Réessayer
              </button>
            </div>
          )}

          {feedback === 'success' && (
            <div className="w-full animate-in zoom-in duration-300 bg-green-500/10 border-2 border-green-500 p-4 rounded-2xl text-center">
              <div className="flex items-center justify-center gap-2 text-green-500 mb-3">
                <Sparkles size={20} />
                <p className="font-bold uppercase text-xs tracking-tighter">Magnifique tracé !</p>
              </div>
              <button onClick={handleNext} className="w-full py-4 bg-white text-slate-900 rounded-xl font-black text-xs uppercase shadow-xl hover:bg-green-500 hover:text-white transition-all">
                Suivant
              </button>
            </div>
          )}
        </div>
      </div>
      <p className="text-[10px] text-slate-600 mt-6 text-center italic uppercase tracking-widest">
        Repasse sur les traits gris pour valider l'étape
      </p>
    </div>
  );
};

export default KanjiDraw;