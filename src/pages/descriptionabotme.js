import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import HomeWorkSharpIcon from '@mui/icons-material/HomeWorkSharp';
import SchoolSharpIcon from '@mui/icons-material/SchoolSharp';
import DownhillSkiingSharpIcon from '@mui/icons-material/DownhillSkiingSharp';
import SportsGymnasticsSharpIcon from '@mui/icons-material/SportsGymnasticsSharp';

function descriptionabotme() {
    return (
        <div style={{ color: "white" }}>

            <div className='currentLocation' style={{ display: "flex" }}>
                <div className='img'>
                    <img src="/pexels-vivek-chugh-739987.jpg" alt="" width="650" height="600"></img>
                </div>
                <div className='LocationDescriptio'>
                    <h3><LocationOnSharpIcon />Current location</h3>
                    < hr style={{ color: "white" }} />
                    <h4>HSR Layout Bengluru Kaanataka</h4>

                    <p>
                        Bengaluru, also known as Bangalore, is a vibrant and cosmopolitan city located in the southern part of India. It is the capital of the Indian state of Karnataka and is one of the fastest-growing cities in the country.

                        Bengaluru has a rich history and has been a center of culture, art, and technology for centuries. It was founded in the 16th century by Kempegowda, a local chieftain, and was later ruled by various dynasties, including the Mughals and the British. The city's name is derived from the Kannada words "benda kaalu ooru," which means "the town of boiled beans."

                        Today, Bengaluru is a major hub for information technology and is often referred to as the "Silicon Valley of India." It is home to many multinational companies and is a popular destination for tech professionals from all over the world. The city has a bustling startup scene and is known for its entrepreneurial spirit.

                        Apart from its technological prowess, Bengaluru is also renowned for its beautiful parks, gardens, and lakes. Lalbagh Botanical Garden, Cubbon Park, and Bannerghatta National Park are some of the popular green spaces in the city. Bengaluru is also famous for its food, which reflects the diverse cultural influences that have shaped the city over the years.

                        Overall, Bengaluru is a dynamic and exciting city that offers a unique blend of traditional and modern culture, making it a must-visit destination for travelers and business professionals alike.</p>
                </div>

            </div>
            <div className='NativePlace' style={{ display: "flex" }}>
                <div className='img' >
                    <img src="/pexels-dipanjan-saha-5183011.jpg" alt="" width="650" height="600"></img>
                </div>
                <div className='NativePlaceDescriptio'>
                    <h3><HomeWorkSharpIcon />My Native</h3>
                    <h4>Varanasi UP</h4>
                    <p>Varanasi, also known as Benares or Kashi, is a historic city located on the banks of the Ganges River in the northern Indian state of Uttar Pradesh. It is one of the oldest continuously inhabited cities in the world and is considered to be a sacred city in Hinduism, Buddhism, and Jainism.

                        Varanasi is known for its ghats, which are series of steps leading down to the river. Pilgrims come from all over India and the world to bathe in the Ganges and perform rituals to absolve themselves of sins. The city is also famous for its numerous temples, including the Kashi Vishwanath Temple, which is dedicated to Lord Shiva.

                        Apart from its religious significance, Varanasi is also a center of art and culture. It is renowned for its silk sarees, which are made from the famous Banarasi silk, and for its classical music and dance performances.

                        Overall, Varanasi is a city of immense cultural and spiritual significance, offering visitors a unique glimpse into the rich history and traditions of India.



                    </p>
                </div>

            </div>
            <div className='Education' style={{ display: "flex" }}>
                <div className='img'>
                    <img src="/pexels-pixabay-159866.jpg" alt="" width="650" height="600"></img>
                </div>
                <div className='EducationDescriptioon'>
                    <h3><SchoolSharpIcon />Educaion</h3>
                    <h3>Gradgution</h3>
                    <h4>B,Tech(Instrumentation and control engineering)</h4>
                    <h4>IERT Allahabad</h4>
                    <h3>Intemediate</h3>
                    <h4>Mukularanyam English school</h4>
                    <h4>Varanasi</h4>
                    <h3>High School</h3>
                    <h4>Children Academy</h4>
                    <h4>Varanasi</h4>


                </div>

            </div>
            <div className='Skillset' style={{ display: "flex" }}>
                <div className='img'>
                    <img src="/pexels-sora-shimazaki-5926382.jpg" alt="" width="650" height="600"></img>
                </div>
                <div className='SkillsetDescriptioon'>
                    <h3><DownhillSkiingSharpIcon />Skills Set</h3>
                    <ul>
                        <li>Java</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>React.js</li>
                        <li>Next.js</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MongoDB</li>
                        <li>Git</li>
                        <li>GitHub</li>


                    </ul>




                </div>

            </div>
            <div className='Hobby' style={{ display: "flex" }}>
                <div className='img'>
                    <img src="/pexels-craig-adderley-1767014.jpg" alt="" width="650" height="600"></img>
                </div>
                <div className='Hobby
             Descriptioon'>
                    <h3><SportsGymnasticsSharpIcon />My hobbies</h3>


                    <h4> Playing badminton </h4>
                    <p>
                        Is a great way to stay active and improve your physical fitness. It can help improve your hand-eye coordination, balance, and agility, as well as provide a fun and competitive way to stay in shape.
                        Badminton is a sport that can be played indoors or outdoors, making it a great option for different seasons or weather conditions. You can play casually with friends or family, or join a local league or club to take your skills to the next level.
                        Badminton is a sport that can be played at different levels of intensity, making it suitable for players of all ages and skill levels. Whether you're looking to play for fun or compete at a high level, there's always room to improve and challenge yourself.
                        Reading books:
                    </p>
                    <h4>Reading books </h4>
                    <p>Is a fantastic way to learn, grow, and expand your knowledge. It allows you to explore different perspectives, ideas, and worlds, as well as improve your vocabulary and critical thinking skills.
                        Reading books can also be a great way to unwind and relax after a long day. It provides an escape from reality and allows you to lose yourself in a good story.
                        With so many different genres and styles of books available, there's always something new to discover and explore. Whether you prefer fiction or non-fiction, mystery or romance, there's a book out there for everyone.
                        Overall, your hobbies of playing badminton and reading books provide a great balance of physical and mental stimulation. They allow you to challenge yourself, improve your skills, and expand your knowledge in different ways.
                    </p>

                </div>

            </div>
        </div>
    )
}

export default descriptionabotme