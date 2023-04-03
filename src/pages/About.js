import React from 'react'
import styles from '@/styles/Home.module.css'
const About = () => {
  return (
    <div>
        <div className='container'>
            <div className={styles.About}>
                <h1 className={styles.abotHeading}>About me</h1>
                <div className={styles.group20}>
                    <div className={styles.year}>
                        <p className={styles.currentYear}>2015</p>
                        <p className={styles.currentYear}>2017</p>
                        <p className={styles.currentYear}>2022</p>
                    </div>
                    <div className={styles.timeline}>
                        <div className={styles.rectangle5}>
                        <div className={styles.ellipse}></div>
                        <div className={styles.ellipse}></div>
                        <div className={styles.ellipse}></div>
                        </div>
                        
                    </div>
                    <div className={styles.experience}>
                        <div className={styles.experienceHeading}><p>ffhfgsdjfsgfjsgdfj gdfjsg dfjsvmcxbbxc vbdfgmcxbvbjh</p></div>
                        <div className={styles.experienceHeading}><p>dsfjgjdgjdfgsdhg sdfgdsjf gsjdgsjdgsdgjfgjdsfgjgf</p></div>
                        <div className={styles.experienceHeading}><p>kjgjkdhjdfhgjkd fghdfjkgh dfjkhfjdhgd jffj jhjdfghfjdgdfjgh</p></div>
                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}

export default About