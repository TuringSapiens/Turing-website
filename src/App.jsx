import './App.css'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import NavBar from "./components/Navbar.jsx";
import Footer from './components/Footer.jsx';
import Events from './pages/Events';
import Home from './pages/HomePage';
import Teams from './pages/Teams';
import Blog from './pages/Blog';
import Membership from './pages/Membership';
import Projects from './pages/Projects';
import ClubWebsite from './components/ClubWebsite';
import Blog1Detail from "./components/Blog1Detail";
import Blog1 from "./components/Blog1";
import Alphasia from './pages/Alphasia.jsx';
import UniWay from './pages/UniWay.jsx'
import EventsPage from './components/EventsPage';
import NextPage from './components/NextPage.jsx';
import Intro from "./pages/Intro"; // the splash page

function RequireIntro({ children }) {
  const location = useLocation();
  const seen = typeof window !== "undefined" && sessionStorage.getItem("ts_splash_seen_v1");
  if (!seen && location.pathname !== "/intro") {
    return <Navigate to="/intro" replace />;
  }
  return children;
}

function AppShell({ children }) {
  const location = useLocation();
  const isIntro = location.pathname === "/intro"; // hide chrome on intro
  return (
    <div className="flex flex-col min-h-screen">
      {!isIntro && <NavBar />}
      {/* add top padding so fixed navbar doesn't cover content */}
      <main className={`flex-grow ${!isIntro ? "pt-16 md:pt-20" : ""}`}>
        {children}
      </main>
      {!isIntro && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppShell>
        <Routes>
          {/* Intro splash page (no NavBar/Footer visible here) */}
          <Route path="/intro" element={<Intro />} />

          {/* All real pages go behind the intro gate */}
          <Route path="/" element={<RequireIntro><Home /></RequireIntro>} />
          <Route path="/events/uniway" element={<RequireIntro><EventsPage /></RequireIntro>} />
          <Route path="/events" element={<RequireIntro><Events /></RequireIntro>} />
          <Route path="/blogs" element={<RequireIntro><Blog /></RequireIntro>} />
          <Route path="/blog1-detail" element={<RequireIntro><Blog1Detail /></RequireIntro>} />
          <Route path="/blog1" element={<RequireIntro><Blog1 /></RequireIntro>} />
          <Route path="/membership" element={<RequireIntro><Membership /></RequireIntro>} />
          <Route path="/projects" element={<RequireIntro><Projects /></RequireIntro>} />
          <Route path="/teams" element={<RequireIntro><Teams /></RequireIntro>} />
          <Route path="/terminal" element={<RequireIntro><ClubWebsite /></RequireIntro>} />
          <Route path="/Alphasia" element={<RequireIntro><Alphasia /></RequireIntro>} />
          <Route path="/UniWay" element={<RequireIntro><UniWay /></RequireIntro>} />
          <Route path="/next-page" element={<RequireIntro><NextPage /></RequireIntro>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
}

export default App;
