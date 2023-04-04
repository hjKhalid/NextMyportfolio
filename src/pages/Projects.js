import React from 'react'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';




const Projects = () => {
  return (
    <>
      <div className='container'>
        <div className={styles.Projects}>
          <h1 className={styles.headingProject}>Projects</h1>
          <div className={styles.project} >



            <div className={styles.project1}>
              <div className={styles.rectangle}>
                <div className={styles.img}>
                  <Image src="/Duniya_bhar_ki_khabar.gif" alt='' width="500" height="266" />
                </div>
                <h4 className={styles.projectHeading} >Duniya_bhar_ki_khabar </h4>
                <hr className={styles.breakingLine} />
                <p className={styles.projectPara}>
                  This project is a news application built using React.js and Axios to fetch API data. The application provides users with the latest news articles from different sources around the world. With a simple and user-friendly interface, users can browse news articles by category and search for news articles by keyword. The application uses Axios to fetch data from a News API and provides a responsive design for different screen sizes and devices. Overall, this news application is a great tool for staying up-to-date with the latest news updates.
                </p>
                <div className={styles.ProjectBtn}>
                  <p className={styles.btnParaProject}><Link href="https://github.com/hjKhalid/Duniya-bhar-ki-khabr">Look it up <GitHubIcon /></Link></p>
                </div>

              </div>
            </div>
            <div className={styles.project2}>
              <div className={styles.rectangle}>
                <div className={styles.img}>
                  <Image src="/WeatherApp.gif" alt='' width="500" height="266" />
                </div>
                <h4 className={styles.projectHeading} style={{ textAlign: "center" }}> WeatherApp </h4>
                <hr className={styles.breakingLine} />
                <p className={styles.projectPara}>
                  My weather app project was built using React.js. I used React&apos;s component-based architecture and state management hooks to create a modular and flexible app structure. I integrated a weather API to fetch weather data and parsed the response to display it in the app. I used third-party CSS-in-JS libraries for styling. The app can be deployed to a web server for public use.
                </p>
                <div className={styles.ProjectBtn}>
                  <p className={styles.btnParaProject}><Link href="https://github.com/hjKhalid/ReactWeatherApp">Look it up <GitHubIcon /></Link></p>
                </div>

              </div>
            </div>


          </div>
          <div className={styles.project} >
            <div className={styles.project1}>
              <div className={styles.rectangle}>
                <div className={styles.img}>
                  <Image src="/Keep app.gif" alt='' width="500" height="266" />
                </div>
                <h4 className={styles.projectHeading} >Keep_App </h4>
                <hr className={styles.breakingLine} />
                <p className={styles.projectPara}>
                My Keep app project was built using React.js and included features such as creating and saving notes, setting reminders, and organizing notes by category. The app&apos;s design and user interface were made visually appealing and easy to use. The project provided opportunities to learn about state management and API integration with tools such as Redux or Axios. Future development could include adding more features or improving the app&apos;s user experience.
                </p>
                <div className={styles.ProjectBtn}>
                  <p className={styles.btnParaProject}> <Link href="https://github.com/hjKhalid/Keep">Look it up <GitHubIcon /></Link> </p>
                </div>

              </div>
            </div>
            <div className={styles.project2}>
              <div className={styles.rectangle}>
                <div className={styles.img}>
                  <Image src="/DrumKit.gif" alt='' width="500" height="266" />
                </div>
                <h4 className={styles.projectHeading} >DrumKit </h4>
                <hr className={styles.breakingLine} />
                <p className={styles.projectPara}>
                  My drumkit app project was built using HTML, CSS, and JavaScript. The app allows users to trigger different drum sounds by clicking on different parts of the screen or pressing corresponding keys on the keyboard. The app&apos;s design and user interface were made visually appealing and easy to use. The project provided opportunities to learn how to work with audio in JavaScript, optimize code for performance, and manage time effectively. Future development could include adding more sounds or additional features to the app.Regenerate response  
                 </p>
                <div className={styles.ProjectBtn}>
                  <p className={styles.btnParaProject}><Link href="https://github.com/hjKhalid/DrumKitMadeByKhalid">Look it up <GitHubIcon /></Link> </p>
                </div>

              </div>
            </div>


          </div>


        </div>

      </div>
    </>
  )
}

export default Projects