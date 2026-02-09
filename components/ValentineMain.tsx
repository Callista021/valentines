import React, { useState, useEffect, useRef } from 'react';
// NO IMPORT HERE

interface ValentineMainProps {
  onComplete: () => void;
}

const titles = [
  "Be honest 😏",
  "No pressure… okay maybe little pressure",
  "Babe, will you be my Valentine? 💌",
  "Don't even think about it...",
  "Look at the big button! Click it!",
];

const teasingMessages = [
  "Nice try. Absolutely not 😌",
  "Why are you still chasing NO 😭",
  "Just click YES already, munku",
  "Distance is hard enough 😌",
  "NO button is emotionally unstable",
  "Oops, missed again!",
  "Are you even trying? 😏",
];

const ValentineMain: React.FC<ValentineMainProps> = ({ onComplete }) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [yesScale, setYesScale] = useState(1);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [teaseMessage, setTeaseMessage] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2500);

    const growInterval = setInterval(() => {
      setYesScale((prev) => Math.min(prev + 0.05, 5));
    }, 2000);

    return () => {
      clearInterval(titleInterval);
      clearInterval(growInterval);
    };
  }, []);

  const moveNo = () => {
    // Generate a random position that keeps the button roughly within bounds
    const randomX = (Math.random() - 0.5) * 400;
    const randomY = (Math.random() - 0.5) * 400;
    setNoPosition({ x: randomX, y: randomY });
    
    // Show random teasing message
    const msg = teasingMessages[Math.floor(Math.random() * teasingMessages.length)];
    setTeaseMessage(msg);
    setTimeout(() => setTeaseMessage(""), 1500);
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-4xl min-h-[600px] flex flex-col items-center justify-center text-center overflow-visible px-4">
      {/* Floating Teasing Text */}
      {teaseMessage && (
        <div className="absolute top-0 text-red-500 font-bold text-xl md:text-2xl animate-bounce z-50 bg-white/80 px-4 py-2 rounded-full shadow-sm">
          {teaseMessage}
        </div>
      )}

      {/* Our Photo with hover effects */}
      <div className="mb-8 w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-inner border-2 border-pink-200 animate-in zoom-in duration-700 group">
        <img 
          src="/photo.jpg" 
          alt="Our Photo"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <h1 className="text-3xl md:text-5xl font-black text-red-600 mb-16 h-24 flex items-center justify-center">
        {titles[titleIndex]}
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full">
        {/* YES Button - Grows automatically */}
        <button
          onClick={onComplete}
          style={{ transform: `scale(${yesScale})` }}
          className="z-40 px-12 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full font-black text-2xl shadow-xl hover:from-red-600 hover:to-pink-600 transition-all duration-300 whitespace-nowrap active:scale-95 hover:shadow-2xl hover:shadow-red-300/50"
        >
          YES 💕
        </button>

        {/* NO Button - Moves on hover */}
        <button
          onMouseEnter={moveNo}
          onClick={moveNo}
          style={{
            transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
            transition: 'all 0.1s cubic-bezier(0.18, 0.89, 0.32, 1.28)',
          }}
          className="px-10 py-3 bg-slate-100 text-slate-500 rounded-full font-bold text-xl border-2 border-slate-300 shadow-md whitespace-nowrap z-30 hover:bg-slate-200 hover:border-slate-400 active:scale-95"
        >
          NO 😌
        </button>
      </div>

      <div className="absolute bottom-4 text-slate-400 font-mono text-sm tracking-widest animate-pulse">
        KTM ↔ BUTWAL • ALWAYS CONNECTED
      </div>

      {/* Floating hearts animation */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-red-300 opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValentineMain;