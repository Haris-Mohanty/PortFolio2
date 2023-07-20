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
        <Contact />
      </div>
      <div className="footer mb-3 ms-3">
        <h4 className="text-center">Made With❤️ Haris Mohanty &copy; 2023</h4>
      </div>
    </>
  );
}

export default App;
