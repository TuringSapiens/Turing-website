import React, { useState } from "react";
import Blog1Detail from "./Blog1Detail";

const Blog1 = () => {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <div>
      {!showComponent ? (
        <section
          className="relative mx-[55px] my-[80px] rounded-[30px] overflow-hidden h-[70vh] cursor-pointer"
          onClick={() => setShowComponent(true)}
        >
          <img
            src="/assets/Blog1Bg.webp"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover opacity-[0.85]"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent"></div>

          <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-full lg:items-center lg:px-8">
            <div className="max-w-xl text-left">
              <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
                5 Simple Tips to Help
                <strong className="block font-extrabold text-[#94d6df]">
                  Start with LLMs
                </strong>
              </h1>

              <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
                LLMs are powerful because they can understand and generate human-like text.
                LLMs are a type of computer program that has been trained on huge amounts of text data...
              </p>
              
              <p className="text-base text-black-600 italic text-left mr-9 mt-2">
                - Trisha Sharma
               </p>

              

            </div>
          </div>
        </section>
      ) : (
        <Blog1Detail />
      )}
    </div>
  );
};

export default Blog1;
