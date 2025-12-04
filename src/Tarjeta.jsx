import './App.css'
function Tarjeta(props) {

  return (
    <>
    <div>
        
        <div class="card">
  <img src={props.ruta} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">{props.titulo}</h5>
    <p class="card-text">{props.contenido}</p>
    
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={"#"+props.id_tarjeta}>
  Launch demo modal
</button>


<div class="modal fade" id={props.id_tarjeta} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">{props.titulo}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        {props.contenido}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  </div>
</div>
    </div>
    </>
  )
}

export default Tarjeta