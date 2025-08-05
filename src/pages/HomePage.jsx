import React, { useEffect } from 'react';
import Aboutus from "../components/AboutUs";
import Events from "../components/Events";
import Executive from "../components/Executive";
import Footer from "../components/Footer";
import Marquee from "../components/Marquee";
import Landing from "../components/Landing";
import { FaArrowDown } from "react-icons/fa";
import ClubWebsite from '../components/ClubWebsite';




const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Landing></Landing>

            <Aboutus></Aboutus>
            <div className="text-center justify-center w-screen grid place-items-center py-16 ">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-White-500 mb-8 tracking-wide">
                    Events
                </h2>

            </div>

            <Events></Events>
            <section className="py-20" id="terminal-section">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-white text-center mb-12">Try Our Terminal</h2>
                    <div className="max-w-6xl mx-auto">
                        <ClubWebsite />
                    </div>
                </div>
            </section>


            <Executive></Executive>


        </>
    )
}

export default Home;
