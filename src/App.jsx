import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Comp1 from './Comp1'
import Comp2 from './Comp2'
import Principal from './Principal'

function App() {

  return (
    <>
      <div class="container">
        <div class="cont1"><h1>LOGO, NOMBRE DE CARRERA Y MATERIA</h1></div>
        <div class="cont2">
          <h1>CENTRO DE SALUD PATITO</h1>

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
              <Link className="nav-link" to="/comp1">Comp1</Link>
              <Link className="nav-link" to="/comp2">Comp2</Link>
            </div>
          </div>
        </div>
      </nav>

        <div class="cont3">
          <div class="componentes">
            <Routes>
        <Route path='/' element={<Principal />} />
        <Route path='/comp1' element={<Comp1 />} />
        <Route path='/comp2' element={<Comp2 />} />
      </Routes>
          </div>
          <div class="redes"></div>
        </div>

        <div class="footer"><h1>IGNACIO ZARATE</h1></div>
        </div>
      </div>

      
    </>
  )
}

export default App
