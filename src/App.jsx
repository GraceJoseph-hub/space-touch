import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import About from './pages/About'
import Home from './pages/Home'
import Destination from './pages/Destination'
import Contact from './pages/Contact'
import Footer from './components/footer/Footer';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  
  gsap.registerPlugin(ScrollTrigger);
  return (
    <div className="bg-off-white dark:bg-darkBg w-full">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App
