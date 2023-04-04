import React from 'react'
import Avatar from '@mui/material/Avatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from '@/styles/Home.module.css'
import Link from 'next/link'


const Navbar = () => {
    const handleOnClickAboutMe = () => {
        const element =document.getElementById('sectionAboutme');
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
          }

    }
    const handleOnClickTechnologies = () => {
        const element =document.getElementById('sectionTechnologies');
        console.log(element);
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
          }

    
    }
    const handleOnClickProjects = () => {
        const element =document.getElementById('sectionProject');
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
          }

    }
    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.logo}>
                    <Avatar alt="Remy Sharp" src="/me-PhotoRoom.png-PhotoRoom.png" />
                </div>
                <div className={styles.Portfolio}>
                    Portfolio
                </div>
                <div className={styles.navigationPage}>
                    <div><p className={styles.projects} onClick={handleOnClickProjects}>Projects</p></div>
                    <div><p className={styles.technologies} onClick={handleOnClickTechnologies}>Technologies</p></div>
                    <div><p className={styles.aboutme} onClick={handleOnClickAboutMe}>About Me</p></div>

                </div>
                <div className={styles.social}>
                    <div className={styles.github}>
                        <Link href="https://github.com/hjKhalid"><GitHubIcon /></Link>
                    </div>
                    <div className={styles.linkedInIcon}>
                       <Link href="https://www.linkedin.com/in/khalid-hussain-9129931ab/"> <LinkedInIcon /></Link>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Navbar