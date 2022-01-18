import 'bootstrap/dist/css/bootstrap.min.css';

import RulesImg from './rules.png';

import { Link } from 'react-router-dom';

function ProjectMusicClub() {
  return (
    <div>
      <h1>Music Club</h1>

      <section>
        <h2>Backstory</h2>

        <p>
          I can't remember what prompted it now, but back in 2019 two of my friends and I started a group chat for sharing music. We each posted an album for the others to check out and, several days later, one of us had a brainwave:
        </p>

        <img src={RulesImg} alt="The message that started it all" width="400px" />

        <p>
          Doing this in monthly "rounds" seemed like a fun and structured way for us to share and discover albums while also learning about each others' music tastes. More rules were quickly established:
        </p>

        <img src="" alt="Message on voting for our top 3 songs" />

        <img src="" alt="Message on voting for our own albums too" />

        <img src="" alt="Message on breaking ties" />

        <img src="" alt="Message on album length limits" />

        <p>
          The "round" structure we eventually agreed on went something like this:
        </p>

        <ol>
          <li>
            Each participant posts a link to an album on Spotify.
          </li>
          <li>
            Participants listen to all posted albums and note down their three favorite songs for each.
          </li>
          <li>
            Participants post their picked songs.
          </li>
          <li>
            Votes for the picked songs are tallied. For each album, the song with the most votes is added to a shared Spotify playlist.
          </li>
          <li>
            Rinse, repeat.
          </li>
        </ol>

        <p>
          We kept this going for several years, and our system continued to evolve. While we three "founders" have participated in every round, we now usually have a guest who joins in for a few rounds at a time too. We've also started doing "themed" rounds where participants are given a prompt to decide what albums to post. Some have been objective like: "participants must post an artist who shares their star sign", or entirely subjective like: "rainy day music". The majority of rounds so far have been a complete free-for-all—anyone can post anything that hasn't been shared yet. We do try to limit ourselves to albums of reasonable length and number of songs though, and repeat artists are allowed but generally avoided.
        </p>

        <p>
          Overall, our music club been a fun, low-committment activity that keeps us connected and involves something we all enjoy.
        </p>
      </section>

      <section>
        <h2>Problems</h2>

        <p>
          Unfortunately, I quicky realized that a group chat was not a great place for organizing information. If I wanted to remember my friends' favorite Avril Lavigne songs from her 2002 hit, <em>Let Go</em>, or find out who posted <em>Twin Temple (Bring You Their Signature Sound... Satanic Doo-Wop)</em>, I had to do a lot of scrolling through our multi-year chat history. The text thread format simply wasn't practical for summarizing our dozens of rounds, and on top of that we also migrated to a different messaging app at one point—further fragmenting our already disorganized club history.
        </p>

        <p>
          Besides the practical shortcomings of our group chat, something else also began to dawn on me: <em>we're generating a lot of data!</em> Every posted album and liked song gave insight into our members' listening habits. We could learn a lot of interesting things about ourselves and the club by studying how we participated. Things like:
        </p>

        <ul>
          <li>
            Which members have the greatest overlap of favorite songs?
          </li>
          <li>
            Who do <em>I</em> share the most favorite songs with?
          </li>
          <li>
            Who posts the oldest music? The newest?
          </li>
          <li>
            Who most consistently votes for the top song of each album?
          </li>
          <li>
            What albums were the most divisive? The most unifying?
          </li>
          <li>
            What was the shortest round? The longest?
          </li>
        </ul>

        <p>
          If I could get access to music metadata (like through <a href="https://developer.spotify.com/documentation/web-api/">Spotify's API</a>), maybe I could answer more complex questions too:
        </p>

        <ul>
          <li>
            What genre does each member post the most?
          </li>
          <li>
            Who posts the most danceable music? Instrumental? Sad? Etc.
          </li>
          <li>
            What songs will each participant likely vote for? (Could I feed track metadata and a member's past votes into a machine-learning model and have it try to predict their favorites?)
          </li>
        </ul>

        <p>
          By the middle of 2021, I realized there were two things I wanted for our club: 1) a way to easily view information about our past rounds and 2) the ability to gain insights from our listening habits. Feeling invigorated by my <Link to="/">SaaS coursework</Link> and eager for a new side-project, I decided that building a website was the best way to achieve both goals.
        </p>
      </section>

      <section>
        <h2>Starting at the Back(end)</h2>

        <h3>Database</h3>

        <p>
          So where to begin? At the very least, I needed all the data we were generating to be kept in a single place—an organized structure that could be queried to answer those pressing questions I had. A database! But what information needed to be stored? What information did we even have?
        </p>

        <div className="d-flex justify-content-between">
          <div>
            <p>
              Members
            </p>

            <ul>
              <li>Name</li>
            </ul>
          </div>

          <div>
            <p>
              Rounds
            </p>

            <ul>
              <li>Number</li>
              <li>Description</li>
              <li>Timeframe</li>
              <li>Participants</li>
              <li>Albums</li>
            </ul>
          </div>

          <div>
            <p>
              Albums
            </p>

            <ul>
              <li>Title</li>
              <li>Artist</li>
              <li>Track count</li>
              <li>Poster</li>
              <li>Top track</li>
            </ul>
          </div>

          <div>
            <p>
              Picked Tracks
            </p>

            <ul>
              <li>Title</li>
              <li>Track number</li>
              <li>Pickers</li>
            </ul>
          </div>
        </div>

        <p>
          Given the small (and relatively private) scope of my project and the likelyhood of my models changing drastically with my vision for the platform, I decided to go the NoSQL route and set up a free MongoDB Atlas Cluster as my primary database. Looking back now, in some ways I regret my decision since my data has become increasingly relational and doesn't utilyze all the benefits of document-based stores, but at the same time I am thankful for the flexibility and its allowance for me to experiment with the information I keep track of.
        </p>

        <img src="" alt="MongoDB Atlas Cluster" />

        <h3>REST API & Web Service</h3>

        <p>
          After creating my MongoDB Atals Cluster I theoretically could have just used its web interface to populate my database document-by-document, but who wants to do that?! I wanted to input data in a pretty UI with custom forms for each model! I wanted input validation! Dropdown lists! But in order to do any of that, my database had to be managable from outside MongoDB Atlas. I needed an API so that, using REST principles, I could CRUD documents using simple HTTP requests like POST, GET, PUT, and DELETE.
        </p>

        <p>
          These requests had to be sent somewhere though—a server, specifically, which would respond to them by carrying out the appropriate actions in the database and any other necessary operations.
        </p>

        <p>
          by myself since my goal was not to formalize the Music Club by making it an app everyone had to use. As bad as group chats are for organizing information, they're still pretty good for, well...chatting! I didn't want to change the atmosphere of the club for everyone.
        </p>
      </section>

      <section>
        <h2>Admin Interface</h2>

        <p>
          Now that I had a functional API to CRUD objects in my database, the next step was to actually populate the database with members, rounds, and albums.
        </p>
      </section>

      <section>
        <h2>Member Interface</h2>

        <p>
          The admin app provided just about everything I had first hoped to accomplish: an interface that could display our round history as well as some data insights. Unfortunately, I had to admit it wasn't very pretty to look at. The birds-eye view layout was too busy and tailored more for admin tasks than for a clean read-only experience. I didn't want to make this public and give every visitor the ability to manipulate the database. I could have added authentication so just I could  access to  There was also the issue of authentication, since anyone who could run the app could make any changes they wished. Not that I didn't trust my friends to keep their hands off, but . My remedy to this was to create a second interface—one designed specifically for club <em>members</em> who only want to read data and not write it.
        </p>

        <p>
          Round thumbnails
        </p>
      </section>

      <section>
        <h2>Future Goals</h2>

        <p>
          Although I purposefully left out interaction from the member interface (sign-in, creating).......
          this would require a substantial database rehaul.
        </p>
      </section>
    </div>
  );
}

export default ProjectMusicClub;
