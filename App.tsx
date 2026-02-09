
import React, { useState } from 'react';
import IntroScreen from './components/IntroScreen';
import ValentineMain from './components/ValentineMain';
import SuccessScreen from './components/SuccessScreen';
import FinalLetter from './components/FinalLetter';
import { Stage } from './types';

const App: React.FC = () => {
  const [stage, setStage] = useState<Stage>(Stage.WARNING);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#fff5f5] selection:bg-red-200 selection:text-red-900 overflow-hidden font-['Quicksand']">
      {stage === Stage.WARNING && (
        <IntroScreen onComplete={() => setStage(Stage.QUESTION)} />
      )}
      {stage === Stage.QUESTION && (
        <ValentineMain onComplete={() => setStage(Stage.SUCCESS)} />
      )}
      {stage === Stage.SUCCESS && (
        <SuccessScreen onComplete={() => setStage(Stage.CONFIRMED)} />
      )}
      {stage === Stage.CONFIRMED && (
        <div className="text-center animate-in zoom-in duration-500 max-w-sm px-4">
          <h1 className="text-6xl mb-6">🔒</h1>
          <h2 className="text-4xl font-bold text-red-600 mb-4">Status: LOCKED</h2>
          <p className="text-xl text-red-400 font-semibold mb-2">
            Babe is officially Bubu’s Valentine 😌
          </p>
          <div className="text-sm text-red-300 font-mono mb-12">
            Encrypted with 'munku' protocol.
          </div>
          
          <button 
            onClick={() => setStage(Stage.FINAL_LETTER)}
            className="group relative px-6 py-3 bg-white text-red-500 border-2 border-red-500 rounded-2xl font-black text-lg shadow-[0_4px_0_0_rgba(239,68,68,1)] hover:bg-red-50 active:translate-y-1 active:shadow-none transition-all animate-pulse"
          >
            A final promise from Bubu 💌
          </button>
        </div>
      )}
      {stage === Stage.FINAL_LETTER && (
        <FinalLetter onClose={() => setStage(Stage.CONFIRMED)} />
      )}
    </div>
  );
};

export default App;
