import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import About from "./sections/about/About";
import Experience from "./sections/experience/Experience";
import Skills from "./sections/skills/Skills";
import Projects from "./sections/projects/Projects";
import Contact from "./sections/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    const validThemes = ["light", "dark"];
    document.body.className = validThemes.includes(theme) ? theme : "light";
  }, [theme]);

  return (
    <div className="App">
      <Navbar />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
