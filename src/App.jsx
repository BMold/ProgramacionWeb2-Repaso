import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Principal from './Principal'
import Cursos from './Cursos'
import Perfil from './Perfil'

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {/* USA LINK SIEMPRE, NO 'a' */}
              <Link className="nav-link" to="/">Principal</Link>
              <Link className="nav-link" to="/cursos">Cursos</Link>
              <Link className="nav-link" to="/perfil">Perfil</Link>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Principal />} />
        <Route path='/cursos' element={<Cursos />} />
        <Route path='/perfil' element={<Perfil />} />
      </Routes>
    </>
  )
}

export default App