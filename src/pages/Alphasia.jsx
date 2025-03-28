import { useRef } from 'react';
import NextPage from '../components/NextPage';

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
        style={{ backgroundImage: "url('/assets/alphasiaSwirl.webp')" }}
      >
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black opacity-75"></div>
        {/* Main content with glitch header */}
        <div className="relative z-10 text-center px-4">
          <div className="relative inline-block">
            <h1 
              className="text-6xl md:text-8xl font-extrabold text-white glitch" 
              data-text="ALPHASIA"
              style={{ fontFamily: "sans-serif" }}
            >
              ALPHASIA
            </h1>
          </div>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mt-4"
            style={{ wordSpacing: "14px" }}>
            Innovation   Technolgy   Culture     </p>
        </div>
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

      <NextPage/>


    </div>
  );
}
