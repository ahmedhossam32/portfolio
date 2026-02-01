import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Resume from "./pages/Resume";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Projects from "./pages/Projects";
import ScrollToTop from "./components/ScrollToTop"; // ✅ ADD THIS

export default function App() {
  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white min-h-screen flex flex-col">

      <Navbar />

      <ScrollToTop />

      <main className="pt-20 flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
