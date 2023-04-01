
import React from 'react'
import styles from '@/styles/Home.module.css'

const Hero = () => {
  return (
    <div className='container'>
      <div className={styles.hero}>
        <h1 className={styles.heading}> Hi, I am Khalid hussain </h1>
        <p className={styles.para}> I'm excited to share my journey with you as an aspiring frontend developer.

          I completed my Bachelor's degree in Instrumentation and Control Engineering, but my true passion lies in software development, particularly in frontend. I love the process of creating visually appealing, interactive, and user-friendly interfaces that engage and delight users.
          I'm also proficient in version control systems like Git and GitHub, which allow me to collaborate with others effectively. I'm a problem-solver by nature and enjoy working in collaborative environments where I can contribute my ideas and learn from others.

          My ultimate goal is to work as a frontend developer in a dynamic and innovative company where I can contribute to building modern and user-friendly interfaces. Thank you for taking the time to review my portfolio, and I look forward to connecting with you soon!</p>
        <div className={styles.btn}>
          <p className={styles.btnPara}> Let's begins</p>
        </div>
      </div>

    </div>
  )
}

export default Hero