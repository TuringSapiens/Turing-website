import { useRef } from 'react';

export default function Alphasia() {
  const nextSectionRef = useRef(null);

  const handleScrollDown = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden relative">
      <section 
        className="relative flex flex-col items-center justify-center h-screen bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/public/assets/alphasia.webp')" }}

      >
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black opacity-75"></div>
        {/* Main content with glitch header */}
        <div className="relative z-10 text-center px-4">
          <div className="relative inline-block">
            <h1 
              className="text-6xl md:text-8xl font-extrabold text-white glitch" 
              data-text="ALPHASIA"
            >
              ALPHASIA
            </h1>
          </div>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mt-4">
            Where technology and innovation converge to shape the future.
          </p>
        </div>
        {/* Bouncing arrow positioned at the bottom to scroll down */}
        <div 
          onClick={handleScrollDown}
          className="absolute bottom-8 w-full flex flex-col items-center animate-bounce cursor-pointer"
        >
          <svg
            className="w-8 h-8 text-white mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
          <span className="text-sm uppercase tracking-widest">Scroll Down</span>
        </div>
      </section>

      {/* Next Section - Coming Soon */}
      <section ref={nextSectionRef} className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
        <h1 className="text-5xl text-white font-bold mb-8 animate-pulse">
          Coming Soon
        </h1>
        <p className="text-white text-lg mb-8">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
      </section>

      {/* Glitch effect CSS */}
      <style>{`
        .glitch {
          position: relative;
        }
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          top: 0;
          opacity: 0.8;
          clip: rect(0, 900px, 0, 0);
        }
        .glitch::before {
          animation: glitchTop 2s infinite linear alternate-reverse;
        }
        .glitch::after {
          animation: glitchBottom 2s infinite linear alternate-reverse;
        }
        @keyframes glitchTop {
          0% { clip: rect(2px, 9999px, 0, 0); transform: translate(2px, -2px); }
          20% { clip: rect(10px, 9999px, 4px, 0); transform: translate(-2px, 2px); }
          40% { clip: rect(3px, 9999px, 0, 0); transform: translate(2px, 0); }
          60% { clip: rect(8px, 9999px, 2px, 0); transform: translate(-2px, -2px); }
          80% { clip: rect(1px, 9999px, 0, 0); transform: translate(0, 2px); }
          100% { clip: rect(4px, 9999px, 3px, 0); transform: translate(-2px, 0); }
        }
        @keyframes glitchBottom {
          0% { clip: rect(2px, 9999px, 10px, 0); transform: translate(-2px, 2px); }
          20% { clip: rect(4px, 9999px, 8px, 0); transform: translate(2px, -2px); }
          40% { clip: rect(1px, 9999px, 5px, 0); transform: translate(-2px, 0); }
          60% { clip: rect(3px, 9999px, 7px, 0); transform: translate(2px, 2px); }
          80% { clip: rect(2px, 9999px, 6px, 0); transform: translate(-2px, -2px); }
          100% { clip: rect(4px, 9999px, 9px, 0); transform: translate(2px, 0); }
        }
      `}</style>
    </div>
  );
}
