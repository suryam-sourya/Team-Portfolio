import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { AboutPage } from "./components/AboutPage"; // <-- Separate About page
import {TechPage} from "./components/TechPage"
function App() {
  return (
    <Router>
      <Routes>
        {/* Main Single Page */}
        <Route path="/" element={
          <div className="App">
            <NavBar />
            <Banner />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </div>
        } />

        {/* About Page */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/tech-stack" element={<TechPage />} />
      </Routes>
    </Router>
  );
}

export default App;