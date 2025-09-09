import React, { useLayoutEffect, useMemo, useRef } from "react";
import gsap from "gsap";

export default function TuringSplash({ onDone, logoSrc = "/assets/turing_sapiens.jpg" }) {
  const root = useRef(null);
  const center = useRef(null);
  const streakWrap = useRef(null);
  const flashRef = useRef(null);
  const cursorLight = useRef(null);
  const sparkWrap = useRef(null);
  const audioRef = useRef(null);

  // force a style per-visit if you want via ?v=neon|glitch|aurora (kept)
  const variant = useMemo(() => {
    const q = new URLSearchParams(window.location.search).get("v");
    if (q && ["neon", "glitch", "aurora"].includes(q)) return q;
    return "neon";
  }, []);

  // helper to drop tiny sparks (after flash)
  const makeSpark = (x, y) => {
    if (!sparkWrap.current) return;
    const s = document.createElement("span");
    s.className = "absolute block rounded-full pointer-events-none";
    s.style.left = `${x}px`;
    s.style.top = `${y}px`;
    s.style.width = "5px";
    s.style.height = "5px";
    s.style.background =
      "radial-gradient(circle at 30% 30%, #fff, #60a5fa 45%, transparent 70%)";
    s.style.filter = "drop-shadow(0 0 6px rgba(96,165,250,.85))";
    sparkWrap.current.appendChild(s);

    const dx = (Math.random() - 0.5) * 120;
    const dy = (Math.random() - 0.5) * 120;
    gsap.to(s, {
      x: dx,
      y: dy,
      opacity: 0,
      scale: 0.6 + Math.random() * 0.7,
      duration: 0.9 + Math.random() * 0.6,
      ease: "power2.out",
      onComplete: () => s.remove(),
    });
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(root.current, { opacity: 0, duration: 0.25 }, 0);

      const N = 10; // number of ribbons
      const container = streakWrap.current;
      const rect = center.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      if (container.childElementCount === 0) {
        for (let i = 0; i < N; i++) {
          const d = document.createElement("div");
          d.className = "absolute pointer-events-none";
          d.style.width = "38vw";           // long streak
          d.style.height = "6px";
          d.style.left = "50%";
          d.style.top = "50%";
          d.style.transformOrigin = "0% 50%";
          d.style.borderRadius = "999px";
          d.style.background =
            "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(20,184,166,0.8) 35%, rgba(56,189,248,0.9) 65%, rgba(0,0,0,0) 100%)";
          d.style.filter =
            "blur(2px) drop-shadow(0 0 8px rgba(56,189,248,.45))";
          container.appendChild(d);

          const ang = gsap.utils.random(-40, 40);           // direction variety
          const preSkew = gsap.utils.random(-10, 10);
          const delay = 0.06 * i;

          gsap.set(d, {
            xPercent: -50,
            yPercent: -50,
            rotate: ang,
            skewX: preSkew,
            scaleX: 0,
            opacity: 0,
          });

          tl.to(
            d,
            {
              opacity: 1,
              scaleX: gsap.utils.random(1.2, 1.8),
              duration: 0.22,
              ease: "power4.out",
              delay,
            },
            0.05
          ).to(
            d,
            {
              opacity: 0,
              scaleX: 0,
              duration: 0.28,
              ease: "power2.in",
            },
            0.05 + delay + 0.18
          );
        }
      }

      tl.from(
        ".ts-logo",
        { scale: 0.8, opacity: 0, filter: "blur(6px)", duration: 0.5, ease: "back.out(1.8)" },
        0.35
      );
      tl.from(
        ".ts-main",
        { opacity: 0, y: 18, filter: "blur(8px)", duration: 0.5 },
        0.38
      );

      // aberration layers pulse
      tl.set(".rgb-red,.rgb-blue", { opacity: 0.0 }, 0.3);
      tl.to(".rgb-red", { opacity: 0.35, x: 2, y: -2, duration: 0.08, ease: "none" }, 0.55)
        .to(".rgb-blue", { opacity: 0.35, x: -2, y: 2, duration: 0.08, ease: "none" }, 0.55)
        .to(".rgb-red,.rgb-blue", { x: 0, y: 0, opacity: 0, duration: 0.08, ease: "none" }, 0.64);

      tl.fromTo(
        flashRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.06, ease: "power4.out" },
        0.66
      ).to(flashRef.current, { opacity: 0, duration: 0.25 }, 0.74);

      tl.call(() => {
        for (let i = 0; i < 16; i++) {
          makeSpark(window.innerWidth / 2, window.innerHeight / 2);
        }
        // play optional audio sting
        try { audioRef.current?.play?.(); } catch (_) {}
      }, null, 0.7);

      tl.to(".ts-main", { y: 0, duration: 0.6, ease: "sine.out" }, 0.8);
      tl.to(
        root.current,
        {
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          onComplete: () => onDone?.(),
        },
        "+=0.5"
      );

      const onMove = (e) => {
        const { clientX: x, clientY: y } = e;
        cursorLight.current?.style.setProperty("--x", `${x}px`);
        cursorLight.current?.style.setProperty("--y", `${y}px`);
      };
      window.addEventListener("pointermove", onMove, { passive: true });
      tl.eventCallback("onComplete", () => window.removeEventListener("pointermove", onMove));
    }, root);

    return () => ctx.revert();
  }, [onDone, variant]);

  return (
    <div ref={root} className="fixed inset-0 z-[9999] bg-black">
      {/* dark overlay covers your grid, so it feels distinct from landing */}
      {/* optional sound — if file absent, it's ignored */}
      <audio ref={audioRef} src="/assets/ta-dum.mp3" preload="auto" />

      {/* small spotlight that follows cursor */}
      <div
        ref={cursorLight}
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(120px 120px at var(--x) var(--y), rgba(56,189,248,0.12), transparent 60%)
          `,
          mixBlendMode: "screen",
        }}
      />

      {/* streak ribbons container */}
      <div ref={streakWrap} className="absolute inset-0" />

      <div
        ref={center}
        className="relative z-10 grid h-full place-items-center text-white text-center select-none"
      >
        <div className="relative ts-main will-change-transform">
          <div
            className="rgb-red absolute inset-0 -z-10"
            style={{ filter: "drop-shadow(0 0 0 rgba(255,40,40,.9))", mixBlendMode: "screen" }}
          />
          <div
            className="rgb-blue absolute inset-0 -z-10"
            style={{ filter: "drop-shadow(0 0 0 rgba(40,160,255,.9))", mixBlendMode: "screen" }}
          />

          {logoSrc && (
            <img
              src={logoSrc}
              alt="Turing Sapiens"
              className="ts-logo mx-auto mb-6 h-16 w-16 object-contain opacity-95"
            />
          )}

          <h1 className="font-extrabold tracking-[0.22em] leading-[0.9]">
            <span className="block text-[12vw] md:text-[9vw] lg:text-[7vw] bg-clip-text text-transparent
              bg-gradient-to-b from-[#6ee7e7] via-[#39c0c3] to-[#0ea5a6]">
              T U R I N G
            </span>
            <span className="mt-2 block text-[12vw] md:text-[9vw] lg:text-[7vw] bg-clip-text text-transparent
              bg-gradient-to-b from-[#6ee7e7] via-[#39c0c3] to-[#0ea5a6]">
              S A P I E N S
            </span>
          </h1>
        </div>
      </div>

      <div
        ref={flashRef}
        className="pointer-events-none absolute inset-0 opacity-0"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,255,255,0.9), rgba(255,255,255,0.35), rgba(255,255,255,0) 70%)",
          mixBlendMode: "screen",
        }}
      />

      <div ref={sparkWrap} className="absolute inset-0 pointer-events-none" />
    </div>
  );
}
