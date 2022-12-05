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
  },
};



function Navbar({setCurrentPage}) {
  return (
    <nav style={styles.navbarStyle}>
      <a href="#" style={styles.linkStyle}onClick={()=>{setCurrentPage("about")}}>About Me</a>
      <a href="#" style={styles.linkStyle}onClick={()=>{setCurrentPage("portfolio")}}>Portfolio</a>
      <a href="#" style={styles.linkStyle}onClick={()=>{setCurrentPage("contact")}}>Contact</a>
      <a href="#" style={styles.linkStyle}onClick={()=>{setCurrentPage("resume")}}>Resume</a>
    </nav>
  );
}

export default Navbar;