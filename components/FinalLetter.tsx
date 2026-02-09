
import React, { useState, useEffect } from 'react';

interface FinalLetterProps {
  onClose: () => void;
}

const FinalLetter: React.FC<FinalLetterProps> = ({ onClose }) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiPieces, setConfettiPieces] = useState<any[]>([]);

  const handleCelebrate = () => {
    setShowConfetti(true);
    const colors = ['#ff0000', '#ff69b4', '#ff1493', '#ffc0cb', '#ffffff', '#ffd700'];
    const newPieces = Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100 + 'vw',
      delay: Math.random() * 2 + 's',
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 8 + 5 + 'px'
    }));
    setConfettiPieces(newPieces);
    
    // Allow confetti to finish before calling onClose (or just stay here)
    setTimeout(() => {
      onClose();
    }, 4000);
  };

  return (
    <div className="fixed inset-0 bg-[#fffcfc] flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-1000 z-[100] overflow-y-auto">
      {/* Confetti Render */}
      {showConfetti && confettiPieces.map(p => (
        <div 
          key={p.id}
          className="confetti"
          style={{
            left: p.left,
            animationDelay: p.delay,
            backgroundColor: p.color,
            width: p.size,
            height: p.size,
            borderRadius: Math.random() > 0.5 ? '50%' : '0%'
          }}
        />
      ))}

      {/* Subtle floating heart background elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-[10%] left-[15%] text-6xl animate-bounce delay-700">❤️</div>
        <div className="absolute bottom-[15%] right-[10%] text-7xl animate-pulse">💖</div>
        <div className="absolute top-[50%] right-[20%] text-5xl animate-bounce">💕</div>
        <div className="absolute bottom-[40%] left-[5%] text-4xl animate-pulse delay-500">💗</div>
      </div>

      <div className="max-w-xl w-full py-12 px-6 space-y-8 bg-white/50 rounded-3xl backdrop-blur-sm border border-pink-100 shadow-xl">
        <h2 className="text-4xl md:text-5xl font-black text-red-600 animate-in slide-in-from-top-10 duration-1000 delay-300">
          My Dearest Babe,
        </h2>
        
        <div className="space-y-6 text-2xl md:text-3xl text-slate-800 font-calligraphy leading-relaxed">
          <p className="animate-in fade-in duration-1000 delay-[1.2s]">
            As I am here in <span className="text-red-500 font-bold">KTM</span> and you are in <span className="text-red-500 font-bold">Butwal</span>, it’s kinda hard sometimes...
          </p>
          
          <p className="animate-in fade-in duration-1000 delay-[2.5s]">
            But remembering this is all for "us" keeps us strong. This distance is only a temporary chapter in our story.
          </p>
          
          <p className="animate-in fade-in duration-1000 delay-[3.8s]">
            Eventually, we are going to be together soon. I'm counting every single day until that moment comes.
          </p>

          <p className="animate-in fade-in duration-1000 delay-[5.1s] text-red-600 font-bold">
            I love you the most and there’s no going back. 🤍
          </p>
        </div>

        <div className="pt-6 space-y-1 animate-in zoom-in duration-1000 delay-[6.5s]">
          <p className="text-2xl md:text-3xl font-black text-red-600 italic">It's Us.</p>
          <p className="text-3xl md:text-4xl font-black text-red-600 uppercase tracking-tighter">Always and forever.</p>
        </div>

        <div className="pt-6 animate-in fade-in duration-1000 delay-[8s]">
          <button
            onClick={handleCelebrate}
            className="px-10 py-4 bg-red-600 text-white rounded-full font-black text-xl hover:bg-red-700 transition-all shadow-lg active:scale-95 hover:scale-105"
          >
            Close (but not my heart) 🤍
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalLetter;
