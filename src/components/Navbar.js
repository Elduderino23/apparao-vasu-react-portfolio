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



function Navbar({setCurrentPage, currentPage}) {
  return (
    <nav style={styles.navbarStyle}>
      <a href="#" className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}style={styles.linkStyle}onClick={()=>{setCurrentPage("about")}}>About Me</a>
      <a href="#" className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}style={styles.linkStyle}onClick={()=>{setCurrentPage("portfolio")}}>Portfolio</a>
      <a href="#" className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}style={styles.linkStyle}onClick={()=>{setCurrentPage("contact")}}>Contact</a>
      <a href="#" className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}style={styles.linkStyle}onClick={()=>{setCurrentPage("resume")}}>Resume</a>
    </nav>
  );
}

export default Navbar;