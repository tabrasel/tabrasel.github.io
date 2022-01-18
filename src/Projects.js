import styles from './Projects.module.css';

import ProjectListItem from './ProjectListItem';

function Projects() {
  return (
    <div className={styles.projects}>
      <header>
        <h1>Projects</h1>

        <p>
          Below is a collection of coding projects I've worked on over the years, ranging from work and school assignments to personal ventures.
        </p>
      </header>

      <div className={styles.projectList}>
        <ProjectListItem
          title="Music Club"
          description="A music-sharing platform."
          context="Personal"
          timeFrame="Jul 2021 - present"
          tags={['React', 'Angular', 'Node.js', 'Express', 'MongoDB', 'S3', 'Heroku', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Bootstrap']}
          linkTo="/music-club"
        />

        <ProjectListItem
          title="Landslide Susceptibility"
          description="An ArcGIS toolbox for predicting landslide-susceptible areas from topographic variables."
          context="Work (TerrainWorks)"
          timeFrame="Oct 2021 - Nov 2021"
          tags={['R', 'terra', 'mlr3', 'Random forest']}
          linkTo="/music-club"
        />

        <ProjectListItem
          title="Forested Wetlands"
          description="An ArcGIS toolbox for predicting wetland regions from topographic variables."
          context="Work (TerrainWorks)"
          timeFrame="Jul 2021 - Oct 2021"
          tags={['R', 'terra', 'Random forest']}
          linkTo="/music-club"
        />

        <ProjectListItem
          title="Dithereedoo"
          description="A tool for applying paletted dither filters to images."
          context="Personal"
          timeFrame="Sep 2021"
          tags={['HTML', 'CSS', 'JavaScript', 'P5.js', 'Bootstrap']}
          linkTo="/music-club"
        />

        <ProjectListItem
          title="MazamaSatelliteUtils"
          description="An R package for analyzing air quality data from satellite imagery."
          context="Work (Mazama Science)"
          timeFrame="Oct 2021 - Nov 2021"
          tags={['R', 'raster', 'ggplot2', 'ffmpeg']}
          linkTo="/music-club"
        />

        <ProjectListItem
          title="Recipes4U"
          description="A recipe website tailored for college students."
          context="School (SaaS)"
          timeFrame="Jan 2021 - Mar 2021"
          tags={['Angular', 'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS', 'TypeScript', 'Bootstrap']}
          linkTo="/music-club"
        />

        <ProjectListItem
          title="Air Monitor Archive"
          description="A web interface for interacting with USFS AirFire services."
          context="Work (Mazama Science)"
          timeFrame="Jan 2021 - Mar 2021"
          tags={['HTML', 'CSS', 'JavaScript', 'JQuery', 'Leaflet', 'Bootstrap']}
          linkTo="/projects/air-monitor-archive"
        />

        <ProjectListItem
          title="SproinGL"
          description="A 3D action game built around spring physics."
          context="School (Computer Graphics)"
          timeFrame="Apr 2020 - Jun 2020"
          tags={['C++', 'OpenGL', 'GLFW']}
          linkTo="/music-club"
        />

        <ProjectListItem
          title="VCAS"
          description="A video call web app and quality analysis system."
          context="School (Capstone)"
          timeFrame="Sep 2019 - Jun 2020"
          tags={['HTML', 'CSS', 'TypeScript', 'WebRTC', 'EC2', 'Kinesis', 'S3', 'Lambda', 'ElasticSearch', 'Kibana']}
          linkTo="/music-club"
        />
      </div>
    </div>
  );
}

export default Projects;
