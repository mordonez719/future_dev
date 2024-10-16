import './Home.css'
import Branch from './components/Branch'

function Home() {
    return (
        <>
        <h1>FutureDev</h1>

        <section id="mission">
            <h2>Our Mission</h2>
            <p>Our mission is to create a community centered around mentorship in technology. 
                With a combination of social events and learning-focused group sessions, 
                we want to enrich your journey in the tech industry!</p>
        </section>
        <section id="branches">
            <Branch title="Web Development" p1="Learn how to build modern websites and web applications using front-end and back-end technologies! 
                    Whether it be representing your portfolio or your own passion project, we want to give you 
                    the skills create your own website." p2="We would like to explore the most relevant languages and frameworks for web development, 
                    including as HTML, CSS, JavaScript, and React. Within these tools, you will get a better 
                    understanding on the functional and aesthetic elements of website production." 
                    pic="/src/assets/web_dev_img.png"
                    />
            <Branch title="Mobile Development" p1="Dive into mobile technology by building apps for both Android and iOS. 
                    Create something that you and your friends can use on your phones!" p2="We want to explore the most common tools used in mobile app development today, 
                    including React Native, Flutter, Android Studio, Java, Swift. Within these tools, 
                    we hope to give you a glimpse into what developing an app might look like!" 
                    pic="src/assets/mobile_dev.png"/>
            <Branch title="Game Development" 
                p1="Ever curious how the games you play work? Explore the fundamental elements of creating your own game!" 
                p2="We hope to explore user interface (UI) and user experience (UX) design in games to allow you to get a better 
                    idea of how to make one of your own!" 
                pic="/src/assets/game-dev.png"    
                />
        </section>
        </>
    )
}

export default Home