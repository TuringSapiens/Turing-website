import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

// import { HashLink } from 'react-router-hash-link';




export default function Footer() {
    return (
        <>

            {/* <footer className="bg-black	px-2 overflow-x-hidden">
   
    <div className=" p-1 px-4 py-6 lg:py-8">
        <div className="mb-6 md:mb-0 w-full lg:flex left-0 right-0 z-10 space-x-1  items-center justify-between">
            <a href="/" className="flex items-center ">
                <img
                    src='/src/assets/ts_logo.jpg'
                    className="h-10 mr-3"
                    alt="Turing Sapiens Logo"
                />
            </a>
            <div className="pt-10"></div>
            <div>
                <ul className="text-gray-400 font-medium lg:flex lg:space-x-4 items-center justify-center w-full grid pt-2">
                    <li className="mb-4 ">
                        <a href="/events" className="hover:underline">
                            Events
                        </a>
                    </li>
                    <li className="mb-4">
                        <a href="/projects" className="hover:underline">
                            Projects
                        </a>
                    </li>
                    <li className="mb-4">
                        <a href="/blogs" className="hover:underline">
                            Blogs
                        </a>
                    </li>
                    <li className="mb-4">
                        <a href="/team" className="hover:underline">
                            Our Team
                        </a>
                    </li>
                   
                </ul>
            </div>

        </div>

        <div className="text-gray-500 text-gray-400 font-medium  flex items-center justify-center w-full py-7">

            <ul className="text-gray-500 text-gray-400 font-medium flex space-x-4">
                <li className="mb-4">
                    <a
                        href=""
                        className="hover:underline "
                    >
                        <FaGithub size='2rem' />
                    </a>
                </li>
                <li className="mb-4">
                    <a
                        href=""
                        className="hover:underline"
                    >
                        <FaInstagram size='2rem' />
                    </a>
                </li>
                <li className="mb-4">
                    <a
                        href=""
                        className="hover:underline"
                    >
                        <FaLinkedin size='2rem' />
                    </a>
                </li>
            </ul>

        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center text-gray-400">
                © 2023{" "}
                <a href="/" className="hover:underline">
                    TURING SAPIENS™
                </a>
                . All Rights Reserved.
            </span>

            <img
                    src='/src/assets/muj_logo.jpg'
                    className="h-10 mr-3"
                    alt="Turing Sapiens Logo"
                />

    
        </div>


    </div>



</footer> */}



            <footer class="bg-black">
                <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div class="md:flex md:justify-between">
                        <div class="mb-6 md:mb-0">
                            <a href="/" class="flex items-center">
                                <img
                                    src='/assets/ts_logo.jpg'
                                    className="h-10 mr-3"
                                    alt="Turing Sapiens Logo"
                                />

                            </a>
                        </div>


                        <div className="flex ">

                            <ul className="text-gray-400 font-medium  items-center justify-center ">
                                <li className="mb-4 ">
                                    <a href="/events" className="hover:underline">
                                        Events
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="/projects" className="hover:underline">
                                        Projects
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="/blogs" className="hover:underline">
                                        Blogs
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="/team" className="hover:underline">
                                        Our Team
                                    </a>
                                </li>

                            </ul>

                                  {/* <ul className="text-gray-400 font-medium  items-center justify-center ">
                                <li className="mb-4 ">
                                    <a href="/events" className="hover:underline">
                                        Events
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="/projects" className="hover:underline">
                                        Projects
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="/blogs" className="hover:underline">
                                        Blogs
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="/team" className="hover:underline">
                                        Our Team
                                    </a>
                                </li>

                            </ul> */}

                        </div>


                        <div class="grid grid-cols-2 gap-20 sm:gap-20 sm:grid-cols-3">




                            <div className="">
                                <h2 class="mb-6 text-sm font-semibold  uppercase text-white">Manipal University,<br></br> Bagru Jaipur, <br></br>303007</h2>
                                <ul class=" text-gray-400 font-medium">
                                    <li class="mb-4">
                                       
                                    </li>
                                    <li>
                                        <a href="" class="hover:underline text-[#20b2a2]">turing@muj.manipal.edu</a>
                                    </li>
                                </ul>
                            </div>


                            {/* <div>

                            

                                <h2 class="mb-6 text-sm font-semibold  uppercase text-white ">About the Club</h2>
                                <p class=" text-gray-400 text-sm text-center">We're committed to enhancing students <br></br>tech skills through mentorship<br></br> and industry collaboration </p>
                            </div> */}
                        </div>


                    </div>

                    <hr class="my-6  sm:mx-auto border-gray-700 lg:my-8" />



                    <div class="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm  sm:text-center text-gray-400">
                            © 2023{" "}
                            <a href="/" className="hover:underline">
                                TURING SAPIENS™
                            </a>
                            . All Rights Reserved.
                        </span>

                        {/* <div className=" text-gray-400 font-medium  flex ">

                            <ul className=" text-gray-400 font-medium flex space-x-4">
                                <li className="mb-4">
                                    <a
                                        href=""
                                        className="hover:underline "
                                    >
                                        <FaGithub size='1rem' />
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a
                                        href=""
                                        className="hover:underline"
                                    >
                                        <FaInstagram size='1rem' />
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a
                                        href=""
                                        className="hover:underline"
                                    >
                                        <FaLinkedin size='1rem' />
                                    </a>
                                </li>
                            </ul>

                        </div> */}





                    </div>
                </div>
            </footer>


        </>


    )
}