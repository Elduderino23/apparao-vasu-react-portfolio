import React from 'react';

const styles = {
  navbarStyle: {
    background: 'skyblue',
    justifyContent: 'flex-end',
    display: 'flex'
  },
  activePage:{
    margin: '10px',
    color: "goldenrod",
    textShadow: "2px 2px 1px black, 0 0 25px maroon, 0 0 5px darkblue",
  },
};



function Navbar({setCurrentPage, currentPage}) {
  return (
    <nav style={styles.navbarStyle}>
      <a href="#"style={currentPage == "about"?styles.activePage: null}className="linkStyle"onClick={()=>{setCurrentPage("about")}}>About Me</a>
      <a href="#"style={currentPage == "portfolio"?styles.activePage: null}className="linkStyle"onClick={()=>{setCurrentPage("portfolio")}}>Portfolio</a>
      <a href="#"style={currentPage == "contact"?styles.activePage: null}className="linkStyle"onClick={()=>{setCurrentPage("contact")}}>Contact</a>
      <a href="#"style={currentPage == "resume"?styles.activePage: null}className="linkStyle"onClick={()=>{setCurrentPage("resume")}}>Resume</a>
    </nav>
  );
}

export default Navbar;