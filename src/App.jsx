import { BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import Home from './pages/home/Home';
import Exec from './pages/exec/Exec';
import Events from './pages/events/Events';
import Mentors from './pages/mentors/Mentors';
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
    <header>
      <img src="/src/assets/future_dev_transparent.png" className='logo'></img>
      <nav>
        <NavLink className="page-link" to="/">Home</NavLink>
        <NavLink className="page-link" to="/events">Event Calendar</NavLink>
        <NavLink className="page-link" to="/mentors">Mentors</NavLink>
        <NavLink className="page-link" to="/exec">Exec</NavLink>
      </nav>
    </header>
    <div id="main-content-holder">
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/exec" element={<Exec />} />
        </Routes>
      </main>
    </div>
    <footer>footer</footer>
    </BrowserRouter>
    </>
  )
}

export default App
