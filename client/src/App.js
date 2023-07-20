import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Educations from "./pages/Educations/Educations";
import Projects from "./pages/Projects/Projects";
import TechStack from "./pages/TechStack/TechStack";
import WorkExp from "./pages/workExp/WorkExp";

function App() {
  return (
    <>
      <Layout />
      <div className="container">
        <About />
        <Educations />
        <TechStack />
        <Projects />
        <WorkExp />
        <Contact/>
      </div>
    </>
  );
}

export default App;
