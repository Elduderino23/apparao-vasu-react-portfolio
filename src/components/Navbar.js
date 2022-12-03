import React from 'react';

const styles = {
  navbarStyle: {
    background: 'blue',
    justifyContent: 'flex-end',
    display: 'flex'
  }
};



function Navbar() {
  return (
    <nav style={styles.navbarStyle}>
      <a href="/">About Me</a>
    </nav>,

    <nav style={styles.navbarStyle}>
    <a href="/">Contact</a>
  </nav>,

    <nav style={styles.navbarStyle}>
    <a href="/">Portfolio</a>
  </nav>,

    <nav style={styles.navbarStyle}>
    <a href="/">Resume</a>
  </nav>
  );
}

export default Navbar;