import React from 'react';

const styles = {
  navbarStyle: {
    background: 'white',
    justifyContent: 'flex-end',
    display: 'flex'
  },
  linkStyle:{
    margin: '10px',
  }
};



function Footer() {
  return (
    <nav style={styles.navbarStyle}>
      <a href="/" style={styles.linkStyle}>LinkedIn</a>
      <a href="/" style={styles.linkStyle}>GithHub</a>
      <a href="/" style={styles.linkStyle}>Medium</a>
    </nav>
  );
}

export default Footer;