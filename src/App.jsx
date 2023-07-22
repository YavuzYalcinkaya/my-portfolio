import About from "./components/about";
import Contact from "./components/contact";
import Home from "./components/home";
import NavBar from "./components/navbar";
import SocialLinks from "./components/social-links";
import Techs from "./components/techs";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Techs />
      <Contact />
      <SocialLinks />
    </>
  );
}

export default App;
