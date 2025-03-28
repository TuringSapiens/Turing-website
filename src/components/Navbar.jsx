import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  // const [top, setTop] = useState(false); // Uncomment if needed

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-10 text-white font-sans px-4 py-4 md:px-6 md:py-4 bg-[#09070b] shadow-md border-b border-gray-900 overflow-x-hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <ul>
              <li>
                <Link to="/" className="flex items-center space-x-1">
                  <img className="h-10 mr-3" src='/assets/ts_logo.jpg' alt="Turing Sapiens" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden md:block">
            <Link to="/" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl">
              Home
            </Link>
            <span className="px-1.5"></span>
            <Link to="/Alphasia" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl">
              Alphasia
            </Link>
            <span className="px-1.5"></span>
            <Link to="/events" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl">
              Events
            </Link>
            <span className="px-1.5"></span>
            <Link to="/teams" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl">
              Team
            </Link>
            <span className="px-1.5"></span>
            <Link to="/projects" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl">
              Projects
            </Link>
            <span className="px-1.5"></span>
            <Link to="/membership" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl">
              Membership
            </Link>
            <span className="px-1.5"></span>
            <Link to="/blogs" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl">
              Blog
            </Link>
          </div>
          <button
            type="button"
            className="md:hidden text-white hover:text-gray-300"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div className={`md:hidden ${showMobileMenu ? '' : 'hidden'}`}>
          <div className="bg-opacity-75 pt-2 pb-3 space-y-1">
            <span className="px-1.5"></span>
            <Link to="/" className="block text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl">
              Home
            </Link>
            <span className="px-1.5"></span>
            <Link to="/Alphasia" className="block text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl">
              Alphasia
            </Link>
            <span className="px-1.5"></span>
            <Link to="/events" className="block text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl">
              Events
            </Link>
            <span className="px-1.5"></span>
            <Link to="/teams" className="block text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl">
              Team
            </Link>
            <span className="px-1.5"></span>
            <Link to="/projects" className="block text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl">
              Projects
            </Link>
            <span className="px-1.5"></span>
            <Link to="/membership" className="block text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl">
              Membership
            </Link>
            <span className="px-1.5"></span>
            <Link to="/blogs" className="block text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl">
              Blog
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
