import styles from './About.module.css';

import Profile from './profile.jpg';

function About() {
  return (
    <section>
      <div className="d-flex justify-content-center mb-4">
        <img className={styles.profileImg} src={Profile} alt="Profile" title="What you can't see here is the banana split I'm holding--the real reason I'm smiling."/>
      </div>

      <section className="mb-5">
        <h1 className="mb-2">About</h1>

        <p className={styles.p}>
          Hi, I'm Tate! I'm a recent computer science graduate from Seattle University and an aspiring software engineer.
        </p>

        <p className={styles.p}>
          I have experience building various geospatial data analysis tools from my time working at <a href="https://terrainworks.com/" target="_blank" rel="noopener noreferrer">TerrainWorks</a> and <a href="http://mazamascience.com/" target="_blank" rel="noopener noreferrer">Mazama Science</a>. At Mazama Science I helped build R packages for air quality data analysis and visualization, while at TerrainWorks I created machine-learning ArcGIS toolboxes for detecting geospatial features from LiDAR imagery. Although I didn't foresee specializing in GIS, I found both experiences incredibly interesting, instructive, and rewarding given the roles our products played in land-use planning, environmental protection, and public health.
        </p>

        <p className={styles.p}>
          While my professional experience so far has focused on R backends for GIS tools, I've always had a personal interest in frontends and visuals. The university courses I took in web development and SaaS inspired me to start building full-stack web applications in my free time—my goal being to work towards a full career building web-based tools.
        </p>

        <p className={styles.p}>
          In my remaining free time (when I'm not coding!) you can usually find me reading vintage mystery novels, watching gialli, or listening to 70s poliziotteschi film soundtracks.
        </p>
      </section>

      <section>
        <h1 className="mb-2">Skills</h1>

        <h3>Languages</h3>
        <p className={styles.p}>
          Java, Python, R, HTML, CSS, JavaScript, TypeScript, SQL
        </p>

        <h3>Web Technologies</h3>
        <p className={styles.p}>
          React, Angular, Node.js, Express, Mongoose, P5.js
        </p>

        <h3>Other Technologies</h3>
        <p className={styles.p}>
          git, GitHub, MongoDB, AWS, Heroku, ArcGIS
        </p>

        <h3>Development Process</h3>
        <p className={styles.p}>
          Working in an agile team, pair programming, planning sprints, giving technical presentations, writing documantation, project tracking with Jira
        </p>
      </section>
    </section>
  );
}

export default About;
