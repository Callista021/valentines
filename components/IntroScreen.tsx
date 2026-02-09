
import React from 'react';

interface IntroScreenProps {
  onComplete: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onComplete }) => {
  return (
    <div className="text-center max-w-lg p-8 bg-white rounded-3xl shadow-2xl border-4 border-red-500 animate-in fade-in zoom-in duration-300">
      <h1 className="text-5xl font-black text-red-600 mb-6 animate-pulse">
        WARNING ⚠️
      </h1>
      <div className="space-y-4 text-xl font-bold text-slate-700 mb-10">
        <p>This website was made by Bubu</p>
        <p className="text-red-500 italic">
          and may cause uncontrollable smiling 😌
        </p>
      </div>
      <button
        onClick={onComplete}
        className="group relative px-10 py-4 bg-red-600 text-white text-2xl font-black rounded-full shadow-[0_10px_0_0_rgba(185,28,28,1)] active:shadow-none active:translate-y-[10px] transition-all"
      >
        I’m brave. Continue →
      </button>
    </div>
  );
};

export default IntroScreen;
