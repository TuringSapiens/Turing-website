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





function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar />
        {/* <div className="py-20"> */}
          <Routes>
            <Route path="/" element={<Home></Home>} />

            <Route path="events" element={<Events/>} />

            <Route path="blogs" element={<Blog />} />

            <Route path="membership" element={<Membership />} />

            <Route path="projects" element={<Projects />} />

            <Route path="teams" element={<Teams />} />

            <Route  path="/*" element={<Home />} />


          </Routes>
        {/* </div> */}
        <Footer />
      </BrowserRouter>


    </>
  )
}

export default App
