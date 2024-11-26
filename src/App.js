import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

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
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
