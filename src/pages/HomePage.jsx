import Aboutus from "../components/AboutUs";
import Events from "../components/Events";
import Executive from "../components/Executive";
import Footer from "../components/Footer";
import Marquee from "../components/Marquee";
import Landing from "../components/Landing";
import { FaArrowDown } from "react-icons/fa";




const Home = () => {


    return (

        <>
        
            {/* <div className="bg-gradient-to-bl from-neutral-900 via-zinc-900 to-stone-900"> */}
                <Landing></Landing>

                <Aboutus></Aboutus>
                <div className="text-center justify-center w-screen grid place-items-center py-16 ">
                    <div className="animate-bounce w-12 h-12  rounded-full text-center justify-center grid place-items-center border-2 border-sky-500 ">
                        <FaArrowDown size='1.7rem' />
                        {/* <p> ↓ </p> */}
                    </div>
                </div>

                <Events></Events>

                <Marquee></Marquee>

                <Executive></Executive>

            {/* </div> */}

        </>
    )
}

export default Home;
