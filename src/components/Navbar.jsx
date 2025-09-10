import { useState } from "react";
import { Link } from "react-router-dom";
import logoUrl from "/assets/ts_logo.jpg"; /
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const NavLink = ({ to, children }) => (
    <Link
      to={to}
      onClick={() => setOpen(false)}             // close mobile on navigate
      className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl"
    >
      {children}
    </Link>
  );

  return (
    <header
      className="
        fixed top-0 left-0 right-0
        z-[200]                                 /* ⬅️ sits above hero */
        bg-[#09070b]/85 backdrop-blur
        border-b border-white/10
      "
    >
      <nav className="mx-auto max-w-7xl px-4 md:px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2" onClick={() => setOpen(false)}>
          <img src={logoUrl} alt="Turing Sapiens" className="h-10 w-auto" />
        </Link>

        {/* desktop */}
        <div className="hidden md:flex items-center">
          <NavLink to="/">Home</NavLink>
          <span className="px-1.5" />
          <NavLink to="/Alphasia">Alphasia</NavLink>
          <span className="px-1.5" />
          <NavLink to="/events">Events</NavLink>
          <span className="px-1.5" />
          <NavLink to="/teams">Team</NavLink>
          <span className="px-1.5" />
          <NavLink to="/projects">Projects</NavLink>
          <span className="px-1.5" />
          <NavLink to="/membership">Membership</NavLink>
          <span className="px-1.5" />
          <NavLink to="/blogs">Blog</NavLink>
        </div>

        {/* mobile button */}
        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden text-white hover:text-gray-300"
          onClick={() => setOpen(!open)}
        >
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </nav>

      {/* mobile menu */}
      <div className={`md:hidden ${open ? "block" : "hidden"} bg-[#09070b]/95`}>
        <div className="px-4 pt-2 pb-4 space-y-1">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Alphasia">Alphasia</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/teams">Team</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/membership">Membership</NavLink>
          <NavLink to="/blogs">Blog</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
