import styles from './Projects.module.css';

function Projects() {
  return (
    <div className={styles.projects}>
      <h1>Projects</h1>

      <p>This is a collection of the coding projects I've worked on over the years</p>

      <div className={styles.projectsList}>
        <div className={styles.projectsListItem}>
          <h2>Music Club</h2>
          <p>A platform for sharing music in groups</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
