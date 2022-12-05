import React from 'react';

const styles = {
  navbarStyle: {
    background: 'skyblue',
    justifyContent: 'flex-end',
    display: 'flex'
  },
  linkStyle:{
    margin: '10px',
    color: "gold",
    textShadow: "2px 2px 1px black, 0 0 25px maroon, 0 0 5px darkblue"
  }
};



function Footer() {
  return (
    <nav style={styles.navbarStyle}>
      <a href="https://www.linkedin.com/in/vasu-apparao-312b1513b/"style={styles.linkStyle}>LinkedIn</a>
      <a href="https://github.com/Elduderino23"style={styles.linkStyle}>GithHub</a>
      <a href="https://medium.com/@vasutamirisaapparao"style={styles.linkStyle}>Medium</a>
    </nav>
  );
}

export default Footer;