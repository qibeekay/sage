import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Footer from "./components/shared/Footer";
import About from "./pages/About";
import Navbar from "./components/shared/Navbar";
import PenTesting from "./pages/services/PenTesting";

function App() {
  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services/penetration-testing" element={<PenTesting />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
