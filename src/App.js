import Navbar from "./components/Navbar/Navbar.jsx";
import Intro from "./components/Intro/Intro.js";
import Skills from "./components/Skills/Skills.js";
import Projects from "./components/projects/Project.js";
import Contact from "./components/Contact/Contact.js";


function App() {
  return (
    <>
      <div>
        <Navbar />
        <Intro />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
