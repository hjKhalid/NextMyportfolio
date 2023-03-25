import Image from "next/image"
import styles from '@/styles/Home.module.css'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import Link from 'next/link';



function HomePageDescription() {
  return (
    <div className="container">

      <div className={styles.frontPageDesigninig}>
        <div>
          <Image src="./IMG_20200817_094023823.jpg" alt="khalid_hussain" width="500" height="650" />
        </div>
        <div className="my-5 mx-5" style={{ paddingTop: "6rem" }}>
          <h1>Khalid hussain </h1>
          <h4 className="my-3">Hi , I am Frontend developer</h4>
          <h6 className="my-4" style={{ fontSize: "18px" }}>
            To secure a position as a Frontend Developer,
            leveraging my expertise in modern frontend technologies to create dynamic and responsive web applications that provide an exceptional user experience.
            I am passionate about designing and building intuitive user interfaces that enhance the user&apos;s engagement with the product.
            My goal is to utilize my skills and experience in frontend development to help organizations achieve their digital goals and deliver high-quality results that exceed client expectations.
            Through my portfolio website, I aim to showcase my proficiency in various frontend technologies such as HTML,
            CSS, JavaScript, React, and Next.js, as well as my ability to create visually appealing designs that are optimized for performance and accessibility.
          </h6>
          <div>Know Me More<Link href="/AboutME"><ArrowForwardIosSharpIcon /></Link></div>
        </div>
      </div>
    </div>
  )
}

export default HomePageDescription