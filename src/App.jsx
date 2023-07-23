import { useState } from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Home from "./components/home";
import NavBar from "./components/navbar";
import Techs from "./components/techs";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode && "dark"}>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Home />
      <About />
      <Techs />
      <Contact />
    </div>
  );
}

export default App;
