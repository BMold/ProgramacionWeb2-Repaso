import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Principal from './Principal'
import Cursos from './Cursos'
import Perfil from './Perfil'

function App() {

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" to="/">Principal</Link>
        <a class="nav-link" href="/Cursos">Cursos</a>
        <a class="nav-link" href="/Perfil">Perfil</a>
      </div>
    </div>
  </div>
</nav>
      <Routes>
        <Route path='/' element={<Principal></Principal>}></Route>
        <Route path='/cursos' element={<Cursos></Cursos>}></Route>
        <Route path='/perfil' element={<Perfil></Perfil>}></Route>
      </Routes>
    </>
  )
}

export default App
