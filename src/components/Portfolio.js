
import React from 'react';
import Bike from '../images background/Bike.jpg'
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
        <img src='GitHub.png' alt="Prework"style={styles.imageStyles}/>
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
    </div>

    <div class="gif_1">
      <a href="https://elduderino23.github.io/apparao-mini-project/">
        <img src="https://c.tenor.com/mSygXLnH7cUAAAAC/dogearmy-dogecoin.gif" alt="Mini Project"
          style={styles.imageStyles}/>
        <div class="gif_1_middle">
          <div class="text">Mini Project</div>
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
    </div>
    <div class="gif_1">
      <a href="https://github.com/Elduderino23/apparao-vasu-pwa">
        <img src="https://media.tenor.com/ZN-NVOQqSV8AAAAd/alex-mason-codm.gif"  alt="PWA"
          style={styles.imageStyles}/>
        <div class="gif_1_middle">
          <div class="text">PWA</div>
        </div>
      </a>
    </div>
    <div class="gif_1">
      <a href="https://elduderino23.github.io/apparao-vasu-calender/">
        <img src= alt="Calendar"
          style={styles.imageStyles}/>
        <div class="gif_1_middle">
          <div class="text">Calendar</div>
        </div>
      </a>
    </div>
 
      
    </section>
  );
}


export default Portfolio;