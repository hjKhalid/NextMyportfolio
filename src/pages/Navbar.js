import React from 'react'
import Avatar from '@mui/material/Avatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from '@/styles/Home.module.css'
import { style } from '@mui/system';

const Navbar = () => {
    const handleOnClickAboutMe = () => {

    }
    const handleOnClickTechnologies = () => {

    }
    const handleOnClickProjects = () => {

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
                        <GitHubIcon />
                    </div>
                    <div className={styles.linkedInIcon}>
                        <LinkedInIcon />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Navbar