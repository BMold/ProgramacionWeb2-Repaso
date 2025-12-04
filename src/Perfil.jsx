import Tarjeta from "./Tarjeta"
// 1. IMPORTA LAS IMÁGENES (Asegúrate de que estén en src/assets)
// Si tus imagenes se llaman diferente, ajusta el nombre aquí
import img1 from './assets/1.jpg' 
import img3 from './assets/3.jpg' // O la imagen que uses para el final

function Perfil() {

  return (
    <>
      <div>
        <h1>Hola desde Perfil</h1>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">@</span>
          <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Recipient’s username" aria-label="Recipient’s username" aria-describedby="basic-addon2" />
          <span className="input-group-text" id="basic-addon2">@example.com</span>
        </div>

        <div className="mb-3">
          <label htmlFor="basic-url" className="form-label">Your vanity URL</label>
          <div className="input-group">
            <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
          </div>
          <div className="form-text" id="basic-addon4">Example help text goes outside the input group.</div>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">$</span>
          <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
          <span className="input-group-text">.00</span>
        </div>

        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Username" aria-label="Username" />
          <span className="input-group-text">@</span>
          <input type="text" className="form-control" placeholder="Server" aria-label="Server" />
        </div>

        <div className="input-group">
          <span className="input-group-text">With textarea</span>
          <textarea className="form-control" aria-label="With textarea"></textarea>
        </div>
      </div>

      <div className="card-group">
        {/* 2. USA LAS VARIABLES IMPORTADAS (img1) EN LUGAR DE TEXTO */}
        <Tarjeta ruta={img1} titulo="Tarjeta de Prueba" contenido="contenido de prueba" id_tarjeta="1" />
        <Tarjeta ruta={img1} titulo="Tarjeta de Prueba" contenido="contenido de prueba" id_tarjeta="2" />
        <Tarjeta ruta={img1} titulo="Tarjeta de Prueba" contenido="contenido de prueba" id_tarjeta="3" />
        <Tarjeta ruta={img1} titulo="Tarjeta de Prueba" contenido="contenido de prueba" id_tarjeta="4" />
        <Tarjeta ruta={img1} titulo="Tarjeta de Prueba" contenido="contenido de prueba" id_tarjeta="5" />
        
        {/* Aquí usé img3 para la última tarjeta */}
        <Tarjeta ruta={img3} titulo="Tarjeta de Final" contenido="xd" id_tarjeta="6" />
      </div>
    </>
  )
}

export default Perfil