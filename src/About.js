import styles from './About.module.css';

import { useState, useEffect } from 'react';

import Profile from './profile.jpg';
import Sundae from './sundae.jpg';
import SundaeBW from './sundae_bw.jpg';
import MusicClubThumb from './music_club_thumb.png';
import SproinglThumb from './sproingl_thumb.png';

function About() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => setScrollPosition(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={styles.about}>
      <div className="d-flex justify-content-center">
        <div className={`${styles.porthole}`}>
        <img src={SundaeBW} alt="Profile"
          style={{ position: 'relative', 'top': (scrollPosition * 0.15 - 20) + 'px', }} />
        </div>
      </div>

      <section className="d-flex justify-content-center">
        <div className={styles.blurb}>
          <p className={styles.p}>Hi, I’m Tate! I'm a software engineer at <a href="https://www.concretesoftware.com/" target="_blank" rel="noopener noreferrer">Concrete Software</a> and previously wrote data analysis tools at <a href="https://terrainworks.com/" target="_blank" rel="noopener noreferrer">Terrainworks</a> and <a href="http://mazamascience.com/" target="_blank" rel="noopener noreferrer">Mazama Science</a>.</p>
          <p className={styles.p}>I dabble in game and web development in my free time. Check out some of my projects!</p>
        </div>
      </section>

      <section className={styles.projectList}>
        <div className={styles.projectListItem}>
          <img className={styles.projectThumb} src={MusicClubThumb} alt="Profile" />
          <div>
            <h1>Music Club</h1>
            <p>A web platform for sharing music with friends. It’s like a book club—except instead of reading books you listen to albums!</p>
          </div>
        </div>

        <div className={styles.projectListItem}>
          <img className={styles.projectThumb} src={SproinglThumb} alt="Profile" />
          <div>
            <h1>SproinGL</h1>
            <p>A spring-physics-based 3D action game. Written in C++ with OpenGL for a graphics programming course.</p>
          </div>
        </div>
      </section>
    </section >
  );
}

export default About;
