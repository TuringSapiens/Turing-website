import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const WORD_TOP = "TURING";
const WORD_BOTTOM = "SAPIENS";

export default function Landing() {
  const root = useRef(null);

  const Letters = ({ text }) => (
    <span className="inline-block">
      {text.split("").map((ch, i) => (
        <span
          key={i}
          className="letter inline-block mx-[0.12em] md:mx-[0.14em]"
          style={{ opacity: 0 }} 
        >
          {ch}
        </span>
      ))}
    </span>
  );

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".letter", {
        opacity: 1,
        duration: 0.15,
        stagger: { each: 0.06, from: "start" },
        ease: "none",
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-image relative h-screen w-screen overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-screen"
        style={{
          backgroundImage:
            "linear-gradient(transparent 95%, rgba(255,255,255,.35) 96%), linear-gradient(90deg, transparent 95%, rgba(255,255,255,.35) 96%)",
          backgroundSize: "42px 42px",
        }}
      />

      <div
        ref={root}
        className="relative z-10 grid h-full place-items-center px-6 text-center"
      >
        <h1
          className="font-extrabold tracking-[0.22em] leading-[0.88] select-none text-white"
        >
          <span className="block text-[12vw] md:text-[9vw] lg:text-[7vw]">
            <Letters text={WORD_TOP} />
          </span>
          <span className="mt-3 block text-[12vw] md:text-[9vw] lg:text-[7vw]">
            <Letters text={WORD_BOTTOM} />
          </span>
        </h1>
      </div>
    </section>
  );
}
