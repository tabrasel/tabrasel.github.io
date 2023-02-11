import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './NavBar.module.css';

import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className={styles.socialIconList}>
        <a href="https://www.linkedin.com/in/tate-brasel/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
        <a href="https://github.com/tabrasel" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
      </div>
      <div className="">
        <a className={styles.emailz} href="mailto:tatebrasel@gmail.com">tatebrasel@gmail.com</a>
      </div>
    </div>
  );
}

export default NavBar;

// 