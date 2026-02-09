
import React, { useState } from 'react';

interface GiftBoxProps {
  onOpen: () => void;
}

const GiftBox: React.FC<GiftBoxProps> = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
    setTimeout(onOpen, 1000);
  };

  return (
    <div 
      onClick={handleClick}
      className={`relative w-48 h-48 cursor-pointer transition-transform duration-500 ${isOpen ? 'scale-110' : 'hover:rotate-3'}`}
    >
      {/* Lid */}
      <div 
        className={`absolute top-0 left-0 w-full h-1/3 bg-red-500 rounded-t-lg shadow-md z-20 transition-all duration-700 origin-top
          ${isOpen ? '-translate-y-20 -rotate-12 opacity-0' : ''}
        `}
      >
        <div className="absolute top-1/2 left-0 w-full h-2 bg-yellow-400"></div>
        <div className="absolute top-0 left-1/2 w-4 h-full bg-yellow-400 -translate-x-1/2"></div>
        {/* Bow */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10">
          <div className="absolute w-8 h-8 bg-yellow-400 rounded-full -left-4 border-2 border-red-600 rotate-45"></div>
          <div className="absolute w-8 h-8 bg-yellow-400 rounded-full -right-4 border-2 border-red-600 -rotate-45"></div>
        </div>
      </div>

      {/* Box Base */}
      <div className="absolute bottom-0 left-0 w-full h-2/3 bg-red-600 rounded-b-lg shadow-xl z-10 border-t-2 border-red-700">
        <div className="absolute top-0 left-1/2 w-4 h-full bg-yellow-400 -translate-x-1/2"></div>
        <div className="flex items-center justify-center h-full text-4xl text-white/20 select-none">
          🎁
        </div>
      </div>

      {/* Hearts popping out animation */}
      {isOpen && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="absolute animate-ping text-red-500 text-6xl">❤️</div>
          <div className="absolute animate-bounce text-pink-500 text-4xl -top-10">💖</div>
          <div className="absolute animate-bounce text-red-400 text-4xl -left-10 delay-100">💕</div>
          <div className="absolute animate-bounce text-pink-400 text-4xl -right-10 delay-200">💗</div>
        </div>
      )}
    </div>
  );
};

export default GiftBox;
