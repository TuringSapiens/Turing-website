import { useState } from 'react';


const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [top, setTop] = useState(false);

  // useEffect(() => {
  //   const scrollHandler = () => {
  //     setTop(window.pageYOffset <= 20)

  //     if (window.scrollY >= 20) {
  //       setTop(true)
  //     } else {
  //       setTop(false)
  //     };
  //   }

  //     window.addEventListener('scroll', scrollHandler);

  //     scrollHandler();


  //   }, []);

  // const navactive = "fixed top-0 left-0 right-0 z-10 bg-black text-white font-sans px-4 py-4 md:px-6 md:py-6 opacity-100 backdrop-blur bg-transparent shadow-md border-b border-gray-900" ;

  // const nav = " fixed top-0 left-0 right-0 z-10 text-white font-sans px-4 py-4 md:px-6 md:py-6 bg-black backdrop-blur bg-transparent shadow-md border-b border-gray-900";





  return (
    <>

      <nav className=" fixed top-0 left-0 right-0 z-10 text-white font-sans px-4 py-4 md:px-6 md:py-4 bg-[#09070b]  shadow-md border-b border-gray-900 overflow-x-hidden">

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <ul>
              <li>
                <a href="/" className="flex items-center space-x-1">
                  <img className="h-10 mr-3" src='/src/assets/ts_logo.jpg' alt="Turing Sapiens" />
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden md:block">

            <a href="/" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl">
              Home
            </a>
            <span className="px-1.5"></span>
            <a href="/events" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl">
              Events
            </a>
            <span className="px-1.5"></span>
            <a href="/teams" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl">
              Team
            </a>
            <span className="px-1.5"></span>
            <a href="/projects" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl">
              Projects
            </a>
            <span className="px-1.5"></span>
            <a href="/membership" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl">
              Membership
            </a>
            <span className="px-1.5"></span>
            <a href="/blogs" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl">
              Blog
            </a>

          </div>
          <button
            type="button"
            className="md:hidden text-white hover:text-gray-300"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className={`md:hidden ${showMobileMenu ? '' : 'hidden'}`}>
          <div className="bg-opacity-75 pt-2 pb-3 space-y-1">
            <span className="px-1.5"></span>

            {/* <a href="/" className="block text-white hover:text-gray-300 px-3 py-2 rounded-md">
              Home
            </a>
            <span className="px-1.5"></span>
            <a href="/team" className="block text-white hover:text-gray-300 px-3 py-2 rounded-md">
              Team
            </a> */}

            <a href="/" className="block text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl ">
              Home
            </a>
            <span className="px-1.5"></span>
            <a href="/events" className="block text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl">
              Events
            </a>
            <span className="px-1.5"></span>
            <a href="/teams" className="block text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl">
              Team
            </a>
            <span className="px-1.5"></span>
            <a href="/projects" className="block text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl">
              Projects
            </a>
            <span className="px-1.5"></span>
            <a href="/membership" className="block text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl">
              Membership
            </a>
            <span className="px-1.5"></span>
            <a href="/blogs" className="block text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl">
              Blog
            </a>

          </div>
        </div>

      </nav>





    </>
  );
};

export default Navbar;
