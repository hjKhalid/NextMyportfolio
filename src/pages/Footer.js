import React from 'react'
import styles from '@/styles/Home.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link'

const Footer = () => {
  return (
   <>
   <div className='container'>
    <div className={styles.Footer}>
        <p className={styles.call}>Call me: 6394765113</p>
        <p className={styles.email}>Email:<Link href="https://hk810773@gmail.com"> hk810773@gmail.com</Link></p>
        <div className={styles.group21}>
          <div className={styles.github1}><Link href="https://github.com/hjKhalid"><GitHubIcon/></Link></div>  
          <div className={styles.linkedin1}><Link href="https://www.linkedin.com/in/khalid-hussain-9129931ab/"><LinkedInIcon/></Link></div>
        </div>
    </div>
   </div>
   </>
  )
}

export default Footer