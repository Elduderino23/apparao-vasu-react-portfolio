import React from 'react';

const styles = {
  sectionStyles: {
    background: 'orange',
  },
};


function aboutMe() {
  return (
    <section style={styles.sectionStyles}>
      <h2>About Me</h2>
      <p>
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

export default aboutMe;