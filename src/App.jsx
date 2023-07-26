import { useState } from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Home from "./components/home";
import NavBar from "./components/navbar";
import Techs from "./components/techs";
import Portfolio from "./components/portfolio";
import Experience from "./components/experience";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="bg-white dark:bg-gradient-to-b from-black via-black to-gray-800 text-gray-900 dark:text-white">
        <Home />
        <About />
        <Experience />
        <Portfolio />

        <Techs darkMode={darkMode} />
        <Contact />
      </main>
    </div>
  );
}

export default App;
