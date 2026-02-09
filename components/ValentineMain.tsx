
import React, { useState, useEffect, useRef } from 'react';
import couplePhoto from '../assets/photo.jpg';
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

      {/* Our Photo */}
<div className="mb-8 w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-inner border-2 border-pink-200 animate-in zoom-in duration-700">
  <img 
    src={couplePhoto} 
    alt="Our Photo"
    className="w-full h-full object-cover"
  />
</div>

      <h1 className="text-3xl md:text-5xl font-black text-red-600 mb-16 h-24 flex items-center justify-center">
        {titles[titleIndex]}
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full">
        {/* YES Button */}
        <button
          onClick={onComplete}
          style={{ transform: `scale(${yesScale})` }}
          className="z-40 px-12 py-4 bg-red-600 text-white rounded-full font-black text-2xl shadow-xl hover:bg-red-700 transition-colors whitespace-nowrap active:scale-95"
        >
          YES 💕
        </button>

        {/* NO Button */}
        <button
          onMouseEnter={moveNo}
          onClick={moveNo}
          style={{
            transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
            transition: 'all 0.1s cubic-bezier(0.18, 0.89, 0.32, 1.28)',
          }}
          className="px-10 py-3 bg-slate-200 text-slate-500 rounded-full font-bold text-xl border-2 border-slate-300 shadow-md whitespace-nowrap z-30"
        >
          NO 😌
        </button>
      </div>

      <div className="absolute bottom-4 text-slate-400 font-mono text-sm tracking-widest">
        KTM ↔ BUTWAL • ALWAYS CONNECTED
      </div>
    </div>
  );
};

export default ValentineMain;
