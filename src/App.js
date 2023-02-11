import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css';

import { HashRouter, Route, Routes } from "react-router-dom";

import About from './About';
import NavBar from './NavBar';
import Projects from './Projects';
import ProjectMusicClub from './ProjectMusicClub';
import ProjectAirMonitorArchive from './ProjectAirMonitorArchive/ProjectAirMonitorArchive';

function App() {
  return (
    <HashRouter>
      <div className={styles.App}>
        <NavBar />

        <div className="container-sm p-4">
          <Routes>
            <Route exact path="/" element={<About />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/music-club" element={<ProjectMusicClub />} />
            <Route exact path="/projects/air-monitor-archive" element={<ProjectAirMonitorArchive />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
