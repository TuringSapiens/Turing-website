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
                <div className="animate-bounce w-12 h-12  rounded-full text-center justify-center grid place-items-center border-2 border-sky-500 ">
                    <FaArrowDown size='1.7rem' />
                    {/* <p> ↓ </p> */}
                </div>
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
