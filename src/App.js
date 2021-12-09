import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css';

import About from './About';
import NavBar from './NavBar';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />

      <div className="container p-4">
        <About />
      </div>

      <div className="p-3">
        <hr />
        <div className="d-flex justify-content-around">
          <div className={styles.linksList}>
            <a href="mailto:tatebrasel@gmail.com"><i className="fas fa-envelope"></i> Email</a>
            <a href="https://www.linkedin.com/in/tate-brasel/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> Linkedin</a>
            <a href="https://github.com/tabrasel" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"> GitHub</i></a>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
