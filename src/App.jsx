//src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    // REMOVED bg-[#0a0a0a] so the body grid can finally show through!
    <div className="min-h-screen text-[#f8f9fa]">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
