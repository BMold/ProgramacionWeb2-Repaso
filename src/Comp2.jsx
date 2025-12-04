import Tarjeta from "./Tarjeta.jsx";
// 1. IMPORTA LAS IMÁGENES (Asegúrate de que estén en src/assets)
// Si tus imagenes se llaman diferente, ajusta el nombre aquí
import img1 from './assets/1.jpg' 
import img3 from './assets/3.jpg' // O la imagen que uses para el final
function Comp2() {

  return (
    <>
    <div>
        <Tarjeta ruta={img1} titulo="Tarjeta de Prueba" contenido="contenido de prueba" id_tarjeta="1" />
        <Tarjeta ruta={img3} titulo="Tarjeta de Final" contenido="xd" id_tarjeta="6" />
    </div>
    </>
  )
}

export default Comp2