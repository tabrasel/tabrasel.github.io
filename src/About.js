import styles from './About.module.css';

import Profile from './profile.jpg';

function About() {
  return (
    <section>
      <div className="d-flex justify-content-center mb-4">
        <img className={styles.profileImg} src={Profile} alt="Profile" title="What you can't see here is the banana split I'm holding--the real reason I'm smiling."/>
      </div>

      <section className="mb-5">
        <p className={styles.p}>
          Hi, my name's Tate.
        </p>

        <p className={styles.p}>
          I develop geospatial analysis tools at <a href="https://terrainworks.com/">TerrainWorks</a>, and before that I worked for <a href="http://mazamascience.com/">Mazama Science</a> building utilities for air quality monitoring. I've found these experiences incredibly interesting—both the problems we faced and the technologies we used to addressed them—and I hope to continue working on projects similarly concerned with public and environmental health.
        </p>

        <p className={styles.p}>
          Although I have more professional experience in the backend (primarily building R packages and scripts) I've always had an interest in frontend development for its close relationship with visual design and user interaction. I practice this in my spare time by building <a href="#">web applications as well as small games and simulations</a>.
        </p>

        <p className={styles.p}>
          In my remaining free time, you can usually find me reading vintage mystery novels or watching gialli.
        </p>
      </section>

      <section>
        <h2 className="h2">Skills</h2>
      </section>

      <div className="row">
        <div className="col">
          <p className={styles.ulTitle}>
            Languages
          </p>

          <ul className={styles.ul}>
            <li>R (tidyverse, mlr3, RMarkdown)</li>
            <li>JavaScript (React, Bootstrap)</li>
            <li>TypeScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Java</li>
            <li>Processing</li>
          </ul>
        </div>

        <div className="col">
          <p className={styles.ulTitle}>
            Web Technologies
          </p>

          <ul className={styles.ul}>
            <li>Angular</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Mongoose</li>
          </ul>
        </div>

        <div className="col">
          <p className={styles.ulTitle}>
            Other Technologies
          </p>

          <ul className={styles.ul}>
            <li>git</li>
            <li>GitHub</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
