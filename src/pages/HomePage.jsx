import React, { useEffect, useState } from 'react';
import Aboutus from "../components/AboutUs";
import Events from "../components/Events";
import Executive from "../components/Executive";
import Footer from "../components/Footer";
import Marquee from "../components/Marquee";
import Landing from "../components/Landing";
import { FaArrowDown } from "react-icons/fa";
import ClubWebsite from '../components/ClubWebsite';

// ⬅️ NEW
import TuringSplash from "../components/TuringSplash"; // make sure the file exists

const Home = () => {
  // ⬅️ NEW: show splash once per tab
  const [showSplash, setShowSplash] = useState(() => !sessionStorage.getItem("ts_splash_seen_v1"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ⬅️ NEW: lock scroll while splash plays + safety timeout
  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = "hidden";
      const t = setTimeout(() => {
        sessionStorage.setItem("ts_splash_seen_v1", "1");
        setShowSplash(false);
      }, 4000); // fallback auto-close
      return () => {
        clearTimeout(t);
        document.body.style.overflow = "";
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [showSplash]);

  return (
    <>
      {/* ⬅️ NEW: full-screen overlay; fades out, revealing your page */}
      {showSplash && (
        <TuringSplash
          logoSrc="/assets/ts_logo.svg" // change path if needed
          onDone={() => {
            sessionStorage.setItem("ts_splash_seen_v1", "1");
            setShowSplash(false);
          }}
        />
      )}

      <Landing />

      <Aboutus />

      <div
        id="events"                         // helpful anchor for links
        className="text-center justify-center w-screen grid place-items-center py-16 "
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-8 tracking-wide">
          Events
        </h2>
      </div>

      <Events />

      <section className="py-20" id="terminal-section">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Try Our Terminal</h2>
          <div className="max-w-6xl mx-auto">
            <ClubWebsite />
          </div>
        </div>
      </section>

      <Executive />
      {/* <Footer />  // if you use it */}
    </>
  );
}

export default Home;