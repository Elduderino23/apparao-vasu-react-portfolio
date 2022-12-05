
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
    marginRight: "300px",
  },
  textStyle: {
    color: "gold",
    textShadow: "2px 2px 1px black, 0 0 25px maroon, 0 0 5px darkblue"
  },

};


function Portfolio() {
  return (
    <section style={styles.sectionStyles} className="Websites">
    <div className="gif_1">
      <a href="https://elduderino23.github.io/apparao_vasu_password_generator/">
        <img src="https://c.tenor.com/AtJ9NKLndOQAAAAd/simonriley-simon-ghost-riley.gif" alt="PasswordGenerator"
          style={styles.imageStyles}/>
        <div className="gif_1_middle">
          <div className="text">Password Generator</div>
        </div>
      </a>
    </div>
    <div className="gif_1">
    <a href="https://github.com/Elduderino23/apparao_vasu_password_generator">
        <div className="gif_1_middle">
        <img src={GitHub} alt="Repo"style={styles.gitHubStyles}/>
        </div>
      </a> 
    </div>

    <div className="gif_1">
      <a href="https://elduderino23.github.io/horiseon-accessibility-rework/">
        <img src="https://c.tenor.com/pA8Od8zd87UAAAAd/korndawg-cod.gif" alt="Horiseon"
          style={styles.imageStyles}/>
        <div className="gif_1_middle">
          <div className="text">Horiseon</div>
        </div>
      </a>
    </div>
    <div className="gif_1">
    <a href="https://github.com/Elduderino23/horiseon-accessibility-rework">
        <div className="gif_1_middle">
        <img src={GitHub} alt="Repo"style={styles.gitHubStyles}/>
        </div>
      </a> 
    </div>

    <div className="gif_1">
    <a href="https://turtle2001.github.io/Kronos-StatIM/">
        <img src="https://c.tenor.com/__txIuNwJpEAAAAC/modern-warfare-call-of-duty.gif" alt="KronosStatim"
          style={styles.imageStyles}/>
        <div className="gif_1_middle">
          <div className="text">KronosStatim</div>
        </div>
      </a>
    </div>
    <div className="gif_1">
    <a href="https://github.com/turtle2001/Kronos-StatIM">
        <div className="gif_1_middle">
        <img src={GitHub} alt="Repo"style={styles.gitHubStyles}/>
        </div>
      </a>
    </div>

    <div className="gif_1">
    <a href="https://apparao-vasu-pwa.herokuapp.com/">
        <img src="https://media.tenor.com/ZN-NVOQqSV8AAAAd/alex-mason-codm.gif"  alt="PWA"
          style={styles.imageStyles}/>
        <div className="gif_1_middle">
          <div className="text">PWA</div>
        </div>
      </a>
    </div>
    <div className="gif_1">
    <a href="https://github.com/Elduderino23/apparao-vasu-pwa">
        <div className="gif_1_middle">
        <img src={GitHub} alt="Repo"style={styles.gitHubStyles}/>
        </div>
      </a>
    </div>

    <div className="gif_1">
    <a href="https://elduderino23.github.io/apparao-vasu-calender/">
        <img src="https://media.tenor.com/mSygXLnH7cUAAAAC/dogearmy-dogecoin.gif" alt="Calendar"
          style={styles.imageStyles}/>
        <div className="gif_1_middle">
          <div className="text">Calendar</div>
          </div>
      </a>
    </div>
    <div className="gif_1">
    <a href="https://github.com/Elduderino23/apparao-vasu-calender">
        <div className="gif_1_middle">
        <img src={GitHub} alt="Repo"style={styles.gitHubStyles}/>
        </div>
      </a>
    </div>

    <div className="gif_1">
    <a href="https://elduderino23.github.io/apparao-vasu-weather/">
        <img src="https://media.tenor.com/UPCN5wj34n0AAAAd/call-of.gif" alt="Weather"
          style={styles.imageStyles}/>
        <div className="gif_1_middle">
          <div className="text">Weather</div>
        </div>
      </a>
    </div>
    <div className="gif_1">
    <a href="https://github.com/Elduderino23/apparao-vasu-weather">
        <div className="gif_1_middle">
        <img src={GitHub} alt="Repo"style={styles.gitHubStyles}/>
        </div>
      </a>
    </div>

    </section>
  );
}


export default Portfolio;
