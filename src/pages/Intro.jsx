// src/pages/Intro.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TuringSplash from "../components/TuringSplash"; // the GSAP splash we built

export default function Intro() {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <TuringSplash
      logoSrc="/assets/ts_logo.svg"          
      onDone={() => {
        sessionStorage.setItem("ts_splash_seen_v1", "1"); 
        navigate("/", { replace: true });
      }}
    />
  );
}
