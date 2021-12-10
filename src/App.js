import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css';

import { HashRouter, Route, Routes } from "react-router-dom";

import About from './About';
import NavBar from './NavBar';
import Projects from './Projects';

function App() {
  return (
    <HashRouter>
      <div className={styles.App}>
        <NavBar />

        <div className="container-sm p-4">
          <Routes>
            <Route exact path="/" element={<About />} />
            <Route exact path="/projects" element={<Projects />} />
          </Routes>
        </div>

        <footer className="footer p-4">
          <div className={styles.linksList}>
            <a href="mailto:tatebrasel@gmail.com"><i className="fas fa-envelope"></i> Email</a>
            <a href="https://www.linkedin.com/in/tate-brasel/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> Linkedin</a>
            <a href="https://github.com/tabrasel" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"> GitHub</i></a>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;
