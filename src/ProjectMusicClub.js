import RulesImg from './rules.png';

function ProjectMusicClub() {
  return (
    <div>
      <h1>Music Club</h1>

      <section>
        <h2>Background</h2>

        <p>
          I can't quite remember what prompted it, but back in 2019, two friends and I started a group chat to share music between us. We each posted a couple of albums and started listening. A week later, when another friend joined in, one of us had an idea:
        </p>

        <img src={RulesImg} width="400px" />

        <p>
          This simple idea not only provided a fun and structured way to share and discover music, it also gave us a chance to learn about each others' tastes. More rules were quickly established:
        </p>

        <img src="" />

        <p>
          The structure that eventually emerged went (and still goes) something like this:
        </p>

        <ol>
          <li>
            Each participant posts a link to an album on Spotify.
          </li>
          <li>
            Participants listen to all posted albums and compile a list of their three favorite songs for each.
          </li>
          <li>
            Participants post their picked songs.
          </li>
          <li>
            The votes for the picked songs are tallied. For each album, the song with the most votes is deemed the winner and added to a shared Spotify playlist.
          </li>
          <li>
            Rinse. Repeat.
          </li>
        </ol>

        <p>
          The setup has continued to evolve over the years. We three "founders" have participated in every round, but we often have a guest who stays on for a few at a time. Recently we've also started doing "themed" rounds where participants are given a prompt to determine what albums to post. It can be objective like: "participants must post an artist who shares their star sign", or entirely subjective like: "rainy day music". So far though, the majority of the rounds have been a complete free-for-all.
        </p>

        <p>
          Unfortunately, I've found group chats are not the best medium for organizing information. If I want to look back at my friends' top songs for Avril Lavigne's 2002 hit <em>Let Go</em>, or find out who posted <em>Twin Temple (Bring You Their Signature Sound... Satanic Doo-Wop)</em>, I'm going to have to do a lot of scrolling to get to those rounds in our chat history! And wait...what rounds were those albums even posted in?! The text thread format simply isn't practical for getting an overview of the dozens of rounds we've held so far, and this problem will only get worse with time. Our recent migration to Facebook messenger now means there isn't even a single thread to find this stuff in!
        </p>

        <p>
          Besides the practical shortcomings of our group chat, something dawned on me earlier this year: <em>hey...we're generating a lot of data!</em> It's true; every posted album and liked song says something about our listening habits. We could learn a lot of interesting things about ourselves and the club by studying how we participate. Things like:
        </p>

        <ul>
          <li>
            Who do I share the most favorite songs with?
          </li>
          <li>
            Which members have the greatest overlap of favorite songs?
          </li>
          <li>
            Who posts the oldest music? The newest?
          </li>
          <li>
            What albums were the most divisive? The most unifying?
          </li>
        </ul>

        <p>
          So I had two things I wanted: a way to easily view information about our past rounds and the ability to gain insights from our listening habits. A website, I decided, was the best way to achieve these.
        </p>
      </section>

      <section>
        <h2>Backend</h2>

        <p>
          In order to convey information about our club, my website had to have access to data from every round. But what data is necessary, and how should it be organized? My first order of business was to design a database that would store all the information I thought would be necessary for summaries and insights:
        </p>
      </section>

      <section>
        <h2>Admin Interface</h2>

        <p>
          Now that I had a functional REST API, the next step was to use it to populate the database with all the information about our past rounds, posted albums, and picked tracks.


        </p>
      </section>

      <section>
        <h2>Member Interface</h2>

        <p>
          The admin app provided just about everything I had first hoped to accomplish: an interface that could display our round history as well as data insights. Unfortunately, I had to admit it wasn't very pretty to look at. The birds-eye view layout was busy and tailored more for admin tasks than for a nice clean read-only experience. I didn't want to make this public and give every visitor the ability to manipulate the database. I could have added authentication so just I could  access to  There was also the issue of authentication, since anyone who could run the app could make any changes they wished. Not that I didn't trust my friends to keep their hands off, but . My remedy to this was to create a second interface—one designed specifically for club <em>members</em> who only want to read data and not write it.
        </p>

        <p>
          Round thumbnails
        </p>
      </section>

      <section>
        <h2>Future Goals</h2>

        <p>
          Although I purposefully left out interaction from the member interface (sign-in, creating)
        </p>
      </section>
    </div>
  );
}

export default ProjectMusicClub;
