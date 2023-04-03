import React from 'react'
import styles from '@/styles/Home.module.css'
import Image from 'next/Image'
import GitHubIcon from '@mui/icons-material/GitHub';




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
                  <p className={styles.btnParaProject}>Look it up <GitHubIcon /></p>
                </div>

              </div>
            </div>
            <div className={styles.project2}>
              <div className={styles.rectangle}>
                <div className={styles.img}>
                  <Image src="/WeatherApp.gif" alt='' width="500" height="266" />
                </div>
                <h4 className={styles.projectHeading} style={{textAlign:"center"}}> WeatherApp </h4>
                <hr className={styles.breakingLine} />
                <p className={styles.projectPara}>
                  This project is a news application built using React.js and Axios to fetch API data. The application provides users with the latest news articles from different sources around the world. With a simple and user-friendly interface, users can browse news articles by category and search for news articles by keyword. The application uses Axios to fetch data from a News API and provides a responsive design for different screen sizes and devices. Overall, this news application is a great tool for staying up-to-date with the latest news updates.
                </p>
                <div className={styles.ProjectBtn}>
                  <p className={styles.btnParaProject}>Look it up <GitHubIcon /></p>
                </div>

              </div>
            </div>
            

          </div>
          <div className={styles.project} >
           <div className={styles.project1}>
              <div className={styles.rectangle}>
                <div className={styles.img}>
                  <Image src="/text debugger.gif" alt='' width="500" height="266" />
                </div>
                <h4 className={styles.projectHeading} >Text_debugger </h4>
                <hr className={styles.breakingLine} />
                <p className={styles.projectPara}>
                  This project is a news application built using React.js and Axios to fetch API data. The application provides users with the latest news articles from different sources around the world. With a simple and user-friendly interface, users can browse news articles by category and search for news articles by keyword. The application uses Axios to fetch data from a News API and provides a responsive design for different screen sizes and devices. Overall, this news application is a great tool for staying up-to-date with the latest news updates.
                </p>
                <div className={styles.ProjectBtn}>
                  <p className={styles.btnParaProject}>Look it up <GitHubIcon /></p>
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
                  This project is a news application built using React.js and Axios to fetch API data. The application provides users with the latest news articles from different sources around the world. With a simple and user-friendly interface, users can browse news articles by category and search for news articles by keyword. The application uses Axios to fetch data from a News API and provides a responsive design for different screen sizes and devices. Overall, this news application is a great tool for staying up-to-date with the latest news updates.
                </p>
                <div className={styles.ProjectBtn}>
                  <p className={styles.btnParaProject}>Look it up <GitHubIcon /></p>
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