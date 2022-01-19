import timeSeriesImg from './time_series.png';

import styles from '../Project.module.css';

function ProjectAirMonitorArchive() {
  return (
    <div className={styles.Project}>
      <h1>Air Monitor Archive</h1>

      <div className={styles.gallery}>
        <img src={timeSeriesImg} height={480} />
      </div>

      <section>
        <h2>Background</h2>

        <p>
          Our primary client during my time at Mazama Science was the <a href="https://www.airfire.org/">AirFire Research team</a>: one of four such research teams under the U.S. Forest Service's PNW Threat Characterization and Management Program. A large portion of our work for AirFire included developing services to publically communicate historical U.S. air quality data, and for this we built R packages that could generate static images of various plot types. By themselves, these packages were only directly useful to the R developers in the AirFire team, so in order to effectively showcase the insights these plots provided to a larger audience (such as <a href="https://www.wildlandfiresmoke.us/air-resource-advisors">Air Resource Advisors</a>) we also needed an accessible platform for requesting and viewing our visualizations.
        </p>
      </section>

      <section>
        <h2>Solution</h2>

        <p>
          Our solution to this challenge was to create a web frontend that would allow users to request and view different air quality plots. The requests would be sent to a small backend web service that would generate the plot using our R packages and return an image URL for the interface to display.
        </p>

        <p>
          My role in this production was to prototype a single-page web application including the basic features users would require: form fields to input plot parameters and a pane for viewing the resulting visualization image. Initially, there were 4 kinds of these visualizations to support:
        </p>

        <ul>
          <li>Daily average: a plot displaying the daily mean <a href="https://www.epa.gov/pm-pollution/particulate-matter-pm-basics">PM2.5</a> reading for a given monitor during a specified time range.</li>
          <li>Time of Day: a plot displaying the hourly (12am - 11pm) PM2.5 reading for a given monitor during a specified time range.</li>
          <li>Time-series: a plot displaying the raw PM2.5 readings for a given monitor during a specified time range.</li>
          <li>Air Quality Index (AQI): A chart describing the various AQI levels used by the EPA to report air quality.</li>
        </ul>

        <p>
          Since my task was to create a simple prototype, I was given almost complete freedom in designing the interface as I saw fit. Having a sidebar for input and a large pane for visualizations felt like the most natural page layout for the application, and updating the visualizations upon any form change made requests feel snappy and efficient. The similar requirements of 1) a specific monitor and 2) a specific time range across the first 3 plot types also indicated I could display common form fields for those parameters. For selecting the date range I used the handy <a href="https://www.daterangepicker.com/">daterangepicker</a> widget, but monitor selection was a bit more involved. Given that the plotting functions required a monitor ID, I didn't want to just present the user with a gigantic dropdown list of IDs without a hint to the name or location of the monitor they represented. Instead, I chose to embed a small <a href="https://leafletjs.com/">Leaflet</a> map populated with icons representing all the monitors available across the United States. Selecting an icon on a map proved much more intuitive than typing or selecting an ID! Finally, the plot type could be chosen using a selection of radio buttons. Other services, like generating/downloading report documents or raw reading CSVs, were added as clickable links when they became available.
        </p>
      </section>

      <section>
        <h2>Reflection</h2>

        <p>
          Overall, I was very happy with the final result of my prototype. The user interface was the last link connecting a larger, non-coder audience with our services, and my frontend provided all the basic functionality for our clients to start gaining insights from the air quality data provided by the EPA. However, I think there was a lot of room for improvement technology-wise. Since my boss wanted to quickly and easily share my prototype with members of the AirFire team, I was requested to write the entire app (HTML, CS, JS) in a single .html file. This didn't present too much of an issue since the app was small and I was able to keep my code concise, but it certainly isn't a practice I'd like to continue. Given its small size, I was also requested not to use a frontend framework or library and write all page behavior using vanilla JavaScript and JQuery, which in age of React, Angular, and Vue, felt antiquated and less organized.
        </p>
      </section>
    </div>
  );
}

export default ProjectAirMonitorArchive;
