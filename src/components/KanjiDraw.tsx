import React, { useRef, useState, useEffect } from 'react';
import { AlertCircle, Sparkles, Trash2, CheckCircle } from 'lucide-react';
import { allWords } from '../data';

const KanjiDraw: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentWord, setCurrentWord] = useState(allWords[Math.floor(Math.random() * allWords.length)]);
  const [feedback, setFeedback] = useState<'none' | 'success' | 'error'>('none');
  const [fontSize, setFontSize] = useState('8rem');

  // Ajustement de la taille selon la longueur du mot japonais
  useEffect(() => {
    const charCount = currentWord.jp.length;
    if (charCount > 4) setFontSize('5rem');
    else setFontSize('8rem');
    clearCanvas();
  }, [currentWord]);

  const getCoords = (e: any) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    // On calcule le ratio car le canvas a une taille interne (600x800) 
    // différente de sa taille affichée (CSS)
    return {
      x: ((clientX - rect.left) / rect.width) * canvas.width,
      y: ((clientY - rect.top) / rect.height) * canvas.height
    };
  };

  const startDrawing = (e: any) => {
    if (e.touches) e.preventDefault(); // Bloque le scroll Android
    const { x, y } = getCoords(e);
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) {
      setIsDrawing(true);
      setFeedback('none');
      ctx.lineWidth = 20; 
      ctx.lineCap = 'round'; 
      ctx.lineJoin = 'round';
      ctx.strokeStyle = '#3b82f6'; // Bleu clair
      ctx.beginPath(); 
      ctx.moveTo(x, y);
    }
  };

  const draw = (e: any) => {
    if (!isDrawing) return;
    if (e.touches) e.preventDefault();
    const { x, y } = getCoords(e);
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) {
      ctx.lineTo(x, y); 
      ctx.stroke();
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (ctx && canvas) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      setFeedback('none');
    }
  };

  const validate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true })!;

    // On crée un canvas invisible pour dessiner le modèle parfait
    const memCanvas = document.createElement('canvas');
    memCanvas.width = canvas.width;
    memCanvas.height = canvas.height;
    const mctx = memCanvas.getContext('2d')!;
    mctx.font = `${fontSize} serif`;
    mctx.textAlign = 'center';
    mctx.textBaseline = 'middle';
    mctx.fillText(currentWord.jp, canvas.width / 2, canvas.height / 2);

    // Comparaison des pixels
    const userImg = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    const modelImg = mctx.getImageData(0, 0, canvas.width, canvas.height).data;
    
    let hits = 0;
    let modelPixels = 0;

    for (let i = 3; i < modelImg.length; i += 4) {
      if (modelImg[i] > 50) {
        modelPixels++;
        if (userImg[i] > 50) hits++;
      }
    }

    const precision = (hits / modelPixels) * 100;
    if (precision > 15) { // Seuil de tolérance
      setFeedback('success');
    } else {
      setFeedback('error');
    }
  };

  const nextWord = () => {
    setCurrentWord(allWords[Math.floor(Math.random() * allWords.length)]);
  };

  return (
    <div className="w-full max-w-md mx-auto p-2 animate-in fade-in duration-500">
      <div className="bg-slate-800 rounded-[2rem] p-4 shadow-2xl border border-slate-700">
        
        <div className="flex justify-between items-center mb-4 px-2">
          <div>
            <h3 className="text-xl font-black text-white leading-none">{currentWord.fr}</h3>
            <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest mt-1">{currentWord.romaji}</p>
          </div>
          <div className="bg-slate-900 px-3 py-1 rounded-full border border-slate-700">
            <span className="text-[10px] font-black text-slate-500 uppercase">Tracé</span>
          </div>
        </div>

        {/* Zone de dessin */}
        <div className="relative w-full aspect-[3/4] bg-slate-900 rounded-2xl border-2 border-slate-700 overflow-hidden touch-none shadow-inner">
          {/* Modèle fantôme */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.08] pointer-events-none select-none">
            <span style={{ fontSize }} className="font-serif">{currentWord.jp}</span>
          </div>
          
          <canvas 
            ref={canvasRef} 
            width={600} 
            height={800} 
            className="absolute inset-0 w-full h-full cursor-crosshair touch-none"
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
          />
        </div>

        {/* Feedback et Boutons */}
        <div className="mt-4 space-y-3">
          {feedback === 'none' ? (
            <div className="flex gap-2">
              <button 
                onClick={clearCanvas} 
                className="flex-1 py-4 bg-slate-700 text-white rounded-xl font-black uppercase text-xs flex items-center justify-center gap-2 active:scale-95 transition-all"
              >
                <Trash2 size={16} /> Effacer
              </button>
              <button 
                onClick={validate} 
                className="flex-1 py-4 bg-blue-600 text-white rounded-xl font-black uppercase text-xs flex items-center justify-center gap-2 active:scale-95 transition-all"
              >
                <CheckCircle size={16} /> Valider
              </button>
            </div>
          ) : feedback === 'success' ? (
            <div className="bg-green-500/20 border border-green-500 p-4 rounded-xl text-center animate-in zoom-in duration-300">
              <div className="flex items-center justify-center gap-2 text-green-400 mb-2">
                <Sparkles size={18} />
                <span className="font-black uppercase text-xs">C'est parfait !</span>
              </div>
              <button onClick={nextWord} className="w-full py-3 bg-green-600 text-white rounded-lg font-black uppercase text-xs">Suivant →</button>
            </div>
          ) : (
            <div className="bg-red-500/20 border border-red-500 p-4 rounded-xl text-center animate-in shake">
              <div className="flex items-center justify-center gap-2 text-red-400 mb-2">
                <AlertCircle size={18} />
                <span className="font-black uppercase text-xs">Tracé incomplet</span>
              </div>
              <button onClick={clearCanvas} className="w-full py-3 bg-red-600 text-white rounded-lg font-black uppercase text-xs">Réessayer</button>
            </div>
          )}
        </div>

      </div>
      <p className="text-center text-slate-600 text-[9px] font-bold uppercase mt-4 tracking-widest">Utilise ton doigt pour dessiner le Kanji</p>
    </div>
  );
};

export default KanjiDraw;