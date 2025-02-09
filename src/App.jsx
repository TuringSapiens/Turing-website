import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar.jsx";
import Footer from './components/Footer.jsx';
import Events from './pages/Events';
import Home from './pages/HomePage';
import Teams from './pages/Teams';
import Blog from './pages/Blog';
import Membership from './pages/Membership';
import Projects from './pages/Projects';
import ClubWebsite from './components/ClubWebsite';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/terminal" element={<ClubWebsite />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
