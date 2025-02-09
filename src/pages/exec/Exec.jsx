import './Exec.css'
import Chris from '/src/assets/chris.png'
import Jack from '/src/assets/jack.png'
import Joanna from '/src/assets/joanna.png'
import Melanie from '/src/assets/melanie.png'
import Christina from '/src/assets/christina.jpeg'



function Exec() {
  
    return (
      <>
        <h1>Executive Board</h1>
          <br></br>
          <section className='exec-container'>
            <div className='exec-card'>
              <img src={Chris} className='member-pic'/>
              <h3>Chris Ridad</h3>
              <h5 className='position'>President</h5>
            </div>
            <div className='exec-card'>
              <img src={Jack} className='member-pic'/>
              <h3>Jack Press</h3>
              <h5 className='position'>Treasurer</h5>
            </div>
          </section>
          <br></br>
        <section className='exec-container'>
          <div className='exec-card'>
            <img src={Joanna} className='member-pic'/>
            <h3>Joanna Echeverri Porras</h3>
            <h5 className='position'>Director of Education</h5>
          </div>
          <div className='exec-card'>
            <img src={Christina} className='member-pic'/>
            <h3>Christina Feng</h3>
            <h5 className='position'>Director of Operations</h5>
          </div>
        </section>
        <section className='exec-container'>
          <div className='exec-card'>
            <img src={Melanie} className='member-pic'/>
            <h3>Melanie Cuenca</h3>
            <h5 className='position'>Director of Community Engagement</h5>
          </div>
        </section>
      </>
    )
  }
  
  export default Exec