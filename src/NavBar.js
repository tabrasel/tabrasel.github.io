import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './NavBar.module.css';

import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className={styles.NavBar}>
      <nav className={`navbar navbar-expand-sm navbar-light container-sm px-3`}>
        <a className={styles.navBarBrand} href="https://tabrasel.github.io/">Tate Brasel</a>

        <button className={`${styles.navbarToggler} navbar-toggler`} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={`${styles.navLink} nav-link`} to="/projects">Projects</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
