// import styles from '@/styles/Home.module.css';
import Link from 'next/link';

function AboutME() {
  return (
    <div style={{color:"white",textAlign:"center",paddingTop:"15%",alignItems:"start"}}>
        <h1  className='my-2'><Link href="/descriptionabotme">Abuot me </Link></h1>
        <h1 className='my-3'> <Link href="/mywork">Work</Link></h1>
        <h1 className='my-3'> <a href="">Connect me</a></h1>

    </div>
  )
}

export default AboutME