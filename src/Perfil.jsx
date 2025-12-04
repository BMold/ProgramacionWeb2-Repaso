import Tarjeta from "./Tarjeta"
function Perfil() {

  return (
    <>
    
      <div>
        <h1>Hola desde Perfil</h1>
        <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient’s username" aria-label="Recipient’s username" aria-describedby="basic-addon2"></input>
  <span class="input-group-text" id="basic-addon2">@example.com</span>
</div>

<div class="mb-3">
  <label for="basic-url" class="form-label">Your vanity URL</label>
  <div class="input-group">
    <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4"></input>
  </div>
  <div class="form-text" id="basic-addon4">Example help text goes outside the input group.</div>
</div>

<div class="input-group mb-3">
  <span class="input-group-text">$</span>
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"></input>
  <span class="input-group-text">.00</span>
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Username" aria-label="Username"></input>
  <span class="input-group-text">@</span>
  <input type="text" class="form-control" placeholder="Server" aria-label="Server"></input>
</div>

<div class="input-group">
  <span class="input-group-text">With textarea</span>
  <textarea class="form-control" aria-label="With textarea"></textarea>
</div>
</div>

    <div class="card-group">
        <Tarjeta ruta="../public/1.jpg" titulo="Tarjeta de Prueba" contenido="contenido de prueba" id_tarjeta="1"></Tarjeta>
        <Tarjeta ruta="../public/1.jpg" titulo="Tarjeta de Prueba" contenido="contenido de prueba" id_tarjeta="2"></Tarjeta>
        <Tarjeta ruta="../public/1.jpg" titulo="Tarjeta de Prueba" contenido="contenido de prueba" id_tarjeta="3"></Tarjeta>
        <Tarjeta ruta="../public/1.jpg" titulo="Tarjeta de Prueba" contenido="contenido de prueba" id_tarjeta="4"></Tarjeta>
        <Tarjeta ruta="../public/1.jpg" titulo="Tarjeta de Prueba" contenido="contenido de prueba" id_tarjeta="5"></Tarjeta>
        <Tarjeta ruta="../public/3.jpg" titulo="Tarjeta de Final" contenido="xd" id_tarjeta="6"></Tarjeta>
    </div>
    </>
  )
}

export default Perfil
