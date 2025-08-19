import React, { useEffect, useState } from "react";

export default function Landing() {
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const newScale = 1 + Math.min(scrollY / 400, 2); 
            setScale(newScale);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div
                className="bg-image h-screen w-screen grid place-items-center overflow-x-hidden"
                style={{
                    backgroundAttachment: "fixed", 
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >
                <h1
                    className="heading lg:text-6xl md:text-7xl sm:text-5xl text-6xl text-center justify-center font-extrabold tracking-normal leading-loose"
                    style={{
                        transform: `scale(${scale})`,
                        transition: "transform 0.1s linear",
                    }}
                >
                    T U R I N G <br /> S A P I E N S
                </h1>
            </div>
        </>
    );
}