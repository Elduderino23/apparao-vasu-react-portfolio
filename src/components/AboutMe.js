import React from 'react';
import City from '../images background/City.jpg'
import Portrait from '../images background/Portrait.jpg'
const styles = {
  sectionStyles: {
    background: `url(${City})`,
    height: "900px",
    backgroundSize: "cover"
  },
  textStyle: {
    color: "gold",
    textShadow: "2px 2px 1px black, 0 0 25px maroon, 0 0 5px darkblue",
    backgroundColor: "#00009c8b"
  },
 
};


function AboutMe() {
  return (
    <section style={styles.sectionStyles}>
      <h2 className= "AboutMe"style={styles.textStyle}>About Me</h2>
      <img className="portrait"  src={Portrait}></img>
      <p style={styles.textStyle}>
      My name is Vasu Apparao and I am an aspiring full stack web developer with a background in 2D Animation and Japanese language. 
      I work well in teams and great at completing tasks both large and small. 
      I am always proactive in solving problems and continually in search of new problems to solve in the ever changing world of web development. 
      I am cum laude graduate of California State University Monterey Bay, a recipient of the Louis Armstrong Jazz Award and a also an Eagle Scout from Troop 132. 
      I am consistantly honing my skills in HTML, CSS, JavaScript, Node, SQL, MongoDB, and React. 
      Outside of coding, I am engaged in creative endeavors in drawing, video editing, and painting.
      </p>
    </section>
  );
}

export default AboutMe;