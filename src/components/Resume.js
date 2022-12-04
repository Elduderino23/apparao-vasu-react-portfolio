import React from 'react';
import Farmland from '../images background/Farmland.jpg'
import resume from '../images background/Apparao_Vasu_FS_Resume.pdf'

const styles = {
  resumeStyles: {
    background: `url(${Farmland})`,
    height: "900px",
    backgroundSize: "cover"
  },
}

function Resume() {
  return(
    <div style={styles.resumeStyles}>
    <h1> My Resume </h1>
    <a href= {resume} download>Link text</a>
    </div>
  )
}

export default Resume;