import React from 'react';

const styles = {
  navbarStyle: {
    background: 'aqua',
    justifyContent: 'flex-end',
    display: 'flex'
  },
  linkStyle:{
    margin: '10px',
  }
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