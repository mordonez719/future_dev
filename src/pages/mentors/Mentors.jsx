import './Mentors.css'
import Ege from '/src/assets/ege.png'
import Ethan from '/src/assets/ethan.png'
import Evan from '/src/assets/evan.png'
import Michelle from '/src/assets/michelle.jpeg'


function Mentors() {
    return (
        <>
        <h1>MENTORS</h1>
        <br></br>
        <section className='mentor-container'>
            <div className='mentor-card'>
                <img src={Ethan} className='member-pic'/>
                <h3>Ethan Piñeda</h3>
                <h5 className='position'>Mobile Development (Intermediate)</h5>
            </div>
            <div className='mentor-card'>
                <img src={Michelle} className='member-pic'/>
                <h3>Michelle Ordoñez Campos</h3>
                <h5 className='position'>Web Development (Beginner)</h5>
            </div>
        </section>
        <br></br>
        <section className='mentor-container'>
            <div className='mentor-card'>
                <img src={Evan} className='member-pic'/>
                <h3>Evan Bertis-Sample</h3>
                <h5 className='position'>Game Development (Intermediate/Beginner)</h5>
            </div>
            <div className='mentor-card'>
                <img src={Ege} className='member-pic'/>
                <h3>Ege</h3>
                <h5 className='position'>Game Development (Beginner)</h5>
            </div>
        </section>
        </>
    )
}

export default Mentors