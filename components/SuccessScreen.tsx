
import React, { useState } from 'react';
import GiftBox from './GiftBox';

interface SuccessScreenProps {
  onComplete: () => void;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({ onComplete }) => {
  const [giftOpened, setGiftOpened] = useState(false);

  return (
    <div className="text-center w-full max-w-lg">
      {!giftOpened ? (
        <div className="animate-in fade-in zoom-in duration-500">
          <h2 className="text-4xl font-black text-red-600 mb-8">
            OMG, YEAH! 💖
          </h2>
          <p className="text-xl text-red-400 font-bold mb-12">
            I knew you'd say yes. Eventually. 😌
          </p>
          <div className="flex justify-center">
            <GiftBox onOpen={() => setGiftOpened(true)} />
          </div>
        </div>
      ) : (
        <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-b-8 border-red-500 animate-in slide-in-from-bottom-10 duration-700">
          <h3 className="text-3xl font-black text-red-600 mb-6">Bubu's Note 💌</h3>
          <div className="text-left space-y-6 text-slate-700 text-lg font-bold leading-relaxed">
            <p>
              2026 Valentine. Different cities. Same heart.
            </p>
            <p className="text-red-500">
              Kathmandu ↔ Butwal
            </p>
            <p>
              Distance is just a number, but your smile is my favorite variable. 😌 
              I miss you like crazy, munku. 
            </p>
            <p className="text-center text-3xl mt-8">
              Babe 🤍 Bubu
            </p>
          </div>
          
          <button
            onClick={onComplete}
            className="mt-10 w-full py-4 bg-red-600 text-white rounded-2xl font-black text-xl shadow-[0_6px_0_0_rgba(185,28,28,1)] active:shadow-none active:translate-y-1 transition-all"
          >
            Confirm Valentine Status 💘
          </button>
        </div>
      )}
    </div>
  );
};

export default SuccessScreen;
