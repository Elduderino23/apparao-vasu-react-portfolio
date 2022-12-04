import React from 'react';
import Farmland from '../images background/Farmland.jpg'
import resume from '../images background/Apparao_Vasu_FS_Resume.pdf'

const styles = {
  resumeStyles: {
    background: `url(${Farmland})`,
    height: "900px",
    backgroundSize: "cover"
  },
  textStyle: {
    color: "gold",
    textShadow: "2px 2px 1px black, 0 0 25px maroon, 0 0 5px darkblue"
  },
}

function Resume() {
  return(
    <div style={styles.resumeStyles}>
    <h2 className="ResumeLink" style={styles.textStyle}> My Resume </h2>
    <a href= {resume} download style={styles.textStyle}>click here for resume</a>
    </div>
  )
}

export default Resume;