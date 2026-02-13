
import React from 'react';

export const SootSprite: React.FC<{ top: string; left: string; delay: string }> = ({ top, left, delay }) => (
  <div 
    className="absolute pointer-events-none z-0"
    style={{ top, left, animation: `bounce 3s ease-in-out infinite ${delay}` }}
  >
    <div className="w-8 h-8 bg-[#333] rounded-full flex items-center justify-center relative shadow-lg">
      <div className="w-2 h-2 bg-white rounded-full absolute top-2 left-1.5"></div>
      <div className="w-2 h-2 bg-white rounded-full absolute top-2 right-1.5"></div>
      {/* Spikes */}
      <div className="absolute -top-1 w-1 h-1 bg-[#333] rotate-45"></div>
      <div className="absolute -bottom-1 w-1 h-1 bg-[#333] rotate-45"></div>
      <div className="absolute -left-1 w-1 h-1 bg-[#333] rotate-45"></div>
      <div className="absolute -right-1 w-1 h-1 bg-[#333] rotate-45"></div>
    </div>
    <style>{`
      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
    `}</style>
  </div>
);

export const FloatingFlower: React.FC<{ top: string; left: string; color: string; duration: string }> = ({ top, left, color, duration }) => (
  <div 
    className="absolute pointer-events-none z-0 opacity-40"
    style={{ top, left, animation: `spin ${duration} linear infinite` }}
  >
    <svg width="30" height="30" viewBox="0 0 24 24" fill={color}>
      <path d="M12 2L13.5 8.5L20 10L14.5 13L16 20L11 16L6 20L7.5 13L2 10L8.5 8.5L12 2Z" />
    </svg>
    <style>{`
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);
