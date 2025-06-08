import Hero from "./components/Hero";
import Navbar from "./components/Navbar"
import About from "./components/About";
import './index.css';
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Certification from "./components/Certification";

function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Project/>
    <Certification/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
