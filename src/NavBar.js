import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <div>
      <nav className={`navbar navbar-expand-sm navbar-light px-3`}>
        <a className="navbar-brand" href="https://tabrasel.github.io/">Tate Brasel</a>
        <button className={`${styles.navbarToggler} navbar-toggler`} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Projects</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
