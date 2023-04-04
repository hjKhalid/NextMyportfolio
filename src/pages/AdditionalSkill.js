import React from 'react'
import styles from '@/styles/Home.module.css'

const AdditionalSkill = () => {
  return (
    <div>
        <div className={styles.AdditionalSkill}>
            <h1 className={styles.AdditionalSkillHeading}>Additional Technologies And Skills</h1>
            <div className='container' >
                <div className={styles.list}>
                <ul className={styles.ul} >
                    <li className={styles.li}>Git</li>
                    <li className={styles.li}>Github</li>
                    <li className={styles.li}>VS_Code</li>
                </ul>
                <ul  className={styles.ul}>
                    <li className={styles.li}>JAVA</li>
                    <li className={styles.li}>Wordpress</li>
                    <li className={styles.li}>Intellije</li>
                </ul>

                </div>
               
            </div>
        </div>
    </div>
  )
}

export default AdditionalSkill