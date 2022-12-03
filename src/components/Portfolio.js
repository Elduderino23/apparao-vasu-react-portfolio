
import React from 'react';

const styles = {
  sectionStyles: {
    background: 'blue',
  },
  imageStyles:{
    width: "350px",
    height: "350px",
  }

};


function Portfolio() {
  return (
    <section style={styles.sectionStyles} id="Websites" class="Websites">
         
    <div class="gif_1">
      <a href="https://elduderino23.github.io/prework-study-guide/">
        <img src="https://c.tenor.com/AtJ9NKLndOQAAAAd/simonriley-simon-ghost-riley.gif" alt="Prework"
          style={styles.imageStyles}/>
        <div class="gif_1_middle">
          <div class="text">Prework</div>
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
      <a href="https://www.w3schools.com/html/html5_semantic_elements.asp">
        <img src="https://c.tenor.com/__txIuNwJpEAAAAC/modern-warfare-call-of-duty.gif" alt="Special"
          style={styles.imageStyles}/>
        <div class="gif_1_middle">
          <div class="text">Special</div>
        </div>
      </a>
    </div>
 
      
    </section>
  );
}


export default Portfolio;