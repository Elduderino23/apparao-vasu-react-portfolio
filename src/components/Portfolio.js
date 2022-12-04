
import React from 'react';
import Bike from '../images background/Bike.jpg'
import GitHub from '../images background/GitHub.png'
const styles = {
  sectionStyles: {
    background: `url(${Bike})`,
    height: "900px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  imageStyles:{
    width: "250px",
    height: "250px",
  },
  gitHubStyles:{
    background: `url(${GitHub})`,
    width: "50px",
    height: "50px",
    marginLeft: "200px"
  }

};


function Portfolio() {
  return (
    <section style={styles.sectionStyles} class="Websites">
         
    <div class="gif_1">
      <a href="https://elduderino23.github.io/prework-study-guide/">
        <img src="https://c.tenor.com/AtJ9NKLndOQAAAAd/simonriley-simon-ghost-riley.gif" alt="Prework"
          style={styles.imageStyles}/>
        <div class="gif_1_middle">
          <div class="text">Prework</div>
        </div>
      </a>

      <a href="https://github.com/Elduderino23/prework-study-guide">
        <div class="gif_1_middle">
        <img src={GitHub} alt="Repo"style={styles.gitHubStyles}/>
        </div>
      </a>

    </div>
    <div class="gif_1">
      <a href="https://elduderino23.github.io/horiseon-accessibility-rework/">
        <img src="https://c.tenor.com/pA8Od8zd87UAAAAd/korndawg-cod.gif" alt="Horiseon"
          style={styles.imageStyles}/>
        <div class="gif_1_middle">
          <div class="text">Horiseon</div>
        </div>
      </a>

      <a href="https://github.com/Elduderino23/horiseon-accessibility-rework">
        <div class="gif_1_middle">
        <img src={GitHub} alt="Repo"style={styles.gitHubStyles}/>
        </div>
      </a>
    </div>

    <div class="gif_1">
      <a href="https://elduderino23.github.io/apparao-mini-project/">
        <img src="https://c.tenor.com/mSygXLnH7cUAAAAC/dogearmy-dogecoin.gif" alt="Mini Project"
          style={styles.imageStyles}/>
        <div class="gif_1_middle">
          <div class="text">Mini Project</div>
        </div>
      </a>

      <a href="https://github.com/Elduderino23/apparao-mini-project">
        <div class="gif_1_middle">
        <img src={GitHub} alt="Repo"style={styles.gitHubStyles}/>
        </div>
      </a>
    </div>
    <div class="gif_1">
      <a href="https://turtle2001.github.io/Kronos-StatIM/">
        <img src="https://c.tenor.com/__txIuNwJpEAAAAC/modern-warfare-call-of-duty.gif" alt="KronosStatim"
          style={styles.imageStyles}/>
        <div class="gif_1_middle">
          <div class="text">KronosStatim</div>
        </div>
      </a>

      <a href="https://github.com/turtle2001/Kronos-StatIM">
        <div class="gif_1_middle">
        <img src={GitHub} alt="Repo"style={styles.gitHubStyles}/>
        </div>
      </a>
    </div>
    <div class="gif_1">
      <a href="https://apparao-vasu-pwa.herokuapp.com/">
        <img src="https://media.tenor.com/ZN-NVOQqSV8AAAAd/alex-mason-codm.gif"  alt="PWA"
          style={styles.imageStyles}/>
        <div class="gif_1_middle">
          <div class="text">PWA</div>
        </div>
      </a>

      <a href="https://github.com/Elduderino23/apparao-vasu-pwa">
        <div class="gif_1_middle">
        <img src={GitHub} alt="Repo"style={styles.gitHubStyles}/>
        </div>
      </a>
    </div>
    <div class="gif_1">
      <a href="https://elduderino23.github.io/apparao-vasu-calender/">
        <img src="https://media.tenor.com/UPCN5wj34n0AAAAd/call-of.gif" alt="Calendar"
          style={styles.imageStyles}/>
        <div class="gif_1_middle">
          <div class="text">Calendar</div>
        </div>

        <a href="https://github.com/Elduderino23/apparao-vasu-calender">
        <div class="gif_1_middle">
        <img src={GitHub} alt="Repo"style={styles.gitHubStyles}/>
        </div>
      </a>
      </a>
    </div>
 
      
    </section>
  );
}


export default Portfolio;