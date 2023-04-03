import React from 'react'
import styles from '@/styles/Home.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
   <>
   <div className='container'>
    <div className={styles.Footer}>
        <p className={styles.call}>Call me: 6394765113</p>
        <p className={styles.email}>Email: hk810773@gmail.com</p>
        <div className={styles.group21}>
          <div className={styles.github1}><GitHubIcon/></div>  
          <div className={styles.linkedin1}><LinkedInIcon/></div>
        </div>
    </div>
   </div>
   </>
  )
}

export default Footer