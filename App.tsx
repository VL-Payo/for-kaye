
import React, { useState, useEffect } from 'react';
import { STEPS, ASCII_HEART, FINAL_MESSAGE } from './constants';
import { SootSprite, FloatingFlower } from './components/Decoration';

const App: React.FC = () => {
  const [step, setStep] = useState(0);
  const [isFinal, setIsFinal] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(false);
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, [step, isFinal, isRevealed]);

  const handleNext = () => {
    if (step < STEPS.length - 1) {
      setStep(step + 1);
    } else {
      setIsFinal(true);
    }
  };

  const currentStep = STEPS[step];

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 font-body text-[#5a4632]">
      {/* Background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="ghibli-cloud absolute top-10 left-0 text-white opacity-40">
           <svg width="200" height="100" viewBox="0 0 200 100" fill="currentColor">
              <circle cx="40" cy="60" r="30" />
              <circle cx="80" cy="50" r="40" />
              <circle cx="130" cy="60" r="35" />
              <circle cx="160" cy="70" r="25" />
           </svg>
        </div>
        <div className="ghibli-cloud absolute top-1/2 left-0 text-white opacity-20" style={{ animationDelay: '-15s' }}>
           <svg width="150" height="80" viewBox="0 0 200 100" fill="currentColor">
              <circle cx="40" cy="60" r="25" />
              <circle cx="90" cy="50" r="45" />
              <circle cx="150" cy="65" r="30" />
           </svg>
        </div>
        
        <SootSprite top="15%" left="10%" delay="0s" />
        <SootSprite top="75%" left="85%" delay="1s" />
        <SootSprite top="85%" left="5%" delay="2.5s" />
        
        <FloatingFlower top="5%" left="80%" color="#ffc1b1" duration="10s" />
        <FloatingFlower top="40%" left="90%" color="#9bc99e" duration="15s" />
        <FloatingFlower top="80%" left="20%" color="#c4f0e8" duration="12s" />
      </div>

      <main className={`max-w-2xl w-full bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-4 border-[#ffc1b1] transition-all duration-700 transform ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} relative z-10`}>
        {!isFinal ? (
          <div className="space-y-8 text-center">
            <h1 className="text-4xl md:text-5xl font-header text-[#b6916b] mb-4">
              My Beloved Kaye.
            </h1>
            
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-cottage-teal via-cottage-peach to-cottage-green rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative aspect-video rounded-xl overflow-hidden border-8 border-white shadow-inner bg-cottage-cream">
                <img 
                  src={currentStep.image} 
                  alt="Memory" 
                  className="w-full h-full object-cover grayscale-[20%] sepia-[10%] group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-cottage-peach text-white p-2 rounded-full shadow-lg transform rotate-12">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
            </div>

            <p className="text-xl md:text-2xl leading-relaxed font-body">
              {currentStep.message}
            </p>

            <button 
              onClick={handleNext}
              className="bg-[#ffc1b1] hover:bg-[#ffb3a1] text-[#5a4632] font-header px-8 py-3 rounded-full text-2xl transition-all hover:scale-105 active:scale-95 shadow-lg border-b-4 border-[#b6916b]"
            >
              {currentStep.buttonLabel || "Next"}
            </button>
            
            <div className="pt-4 flex justify-center space-x-2">
              {STEPS.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-2 rounded-full transition-all duration-500 ${step === i ? 'w-8 bg-cottage-peach' : 'w-2 bg-[#d1c6ad]'}`}
                />
              ))}
            </div>
          </div>
        ) : !isRevealed ? (
          <div className="space-y-12 text-center flex flex-col items-center py-10">
            <h2 className="text-4xl md:text-5xl font-header text-cottage-peach">The Surprise Awaits...</h2>
            <div className="floating-gift text-9xl cursor-pointer hover:scale-110 transition-transform duration-300" onClick={() => setIsRevealed(true)}>
              🎁
            </div>
            <p className="text-xl md:text-2xl max-w-sm mx-auto">
              I've been waiting for this part. Are you ready to open your gift, love?
            </p>
            <button 
              onClick={() => setIsRevealed(true)}
              className="bg-cottage-green hover:bg-[#8bb98d] text-white font-header px-10 py-4 rounded-full text-3xl transition-all shadow-xl border-b-4 border-cottage-wood"
            >
              Open It! ❤️
            </button>
          </div>
        ) : (
          <div className="space-y-8 flex flex-col items-center">
            <h1 className="text-5xl md:text-6xl font-header text-cottage-peach text-center animate-pulse">
              My Whole Heart
            </h1>
            
            <div className="heart-pop heart-pulse overflow-visible py-4">
              <div className="ascii-heart text-[6px] sm:text-[10px] md:text-xs lg:text-sm leading-tight select-none pointer-events-none transform transition-transform duration-500">
                {ASCII_HEART}
              </div>
            </div>

            <div className="bg-white/80 p-6 md:p-10 rounded-2xl border-2 border-dashed border-cottage-peach shadow-sm relative overflow-hidden mt-4">
               {/* Decorative corners */}
               <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-cottage-green -translate-x-1 -translate-y-1"></div>
               <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-cottage-green translate-x-1 -translate-y-1"></div>
               <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-cottage-green -translate-x-1 translate-y-1"></div>
               <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-cottage-green translate-x-1 translate-y-1"></div>

               <p className="text-xl md:text-2xl leading-relaxed text-center italic">
                {FINAL_MESSAGE}
               </p>
               
               <div className="mt-8 flex justify-center space-x-4">
                  <span className="text-cottage-wood">Forever yours,</span>
               </div>
               <div className="mt-2 text-center text-3xl font-header text-cottage-peach">
                  Vince
               </div>
            </div>

            <button 
              onClick={() => {setIsFinal(false); setIsRevealed(false); setStep(0)}}
              className="text-[#b6916b] hover:text-cottage-peach transition-colors font-body text-lg border-b border-transparent hover:border-cottage-peach mt-4"
            >
              Relive the moments
            </button>
          </div>
        )}
      </main>

      {/* Footer Decoration */}
      <footer className="fixed bottom-0 left-0 right-0 h-16 bg-[#9bc99e]/20 pointer-events-none z-0">
        <div className="flex justify-around items-end h-full overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i} 
              className="w-16 h-24 bg-[#9bc99e]/40 rounded-t-full transform translate-y-8" 
              style={{ height: `${Math.random() * 40 + 60}px` }}
            ></div>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default App;
