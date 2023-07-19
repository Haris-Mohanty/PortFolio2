import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Educations from "./pages/Educations/Educations";
import Projects from "./pages/Projects/Projects";
import TechStack from "./pages/TechStack/TechStack";

function App() {
  return (
    <>
      <Layout />
      <div className="container">
        <About />
        <Educations />
        <TechStack />
        <Projects />
      </div>
    </>
  );
}

export default App;
