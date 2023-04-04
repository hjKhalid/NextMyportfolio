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
                        <div className={styles.experienceHeading}><p>I completed high school at Children Academy.where I gained a strong academic and extracurricular foundation.The collaborative learning environment allowed me to develop critical thinking and leadership skills. I was involved in sports, music, and community service, which taught me teamwork and giving back. </p></div>
                        <div className={styles.experienceHeading}><p>I completed my intermediate education at Mukularanyam English School, where I gained a strong academic foundation and participated in extracurricular activities. The school provided me with opportunities to develop my critical thinking, teamwork, and leadership skills, which have been valuable in my future pursuits</p></div>
                        <div className={styles.experienceHeading}><p>"I completed a four-year Bachelor of Technology degree in Instrumentation and Control Engineering in 2022. This program equipped me with practical experience in designing and implementing control systems, as well as problem-solving and communication skills</p></div>
                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}

export default About