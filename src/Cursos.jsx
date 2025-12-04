// 1. IMPORTA LAS IMÁGENES ARRIBA (Asegurate que el nombre coincida: .jpg o .jpeg)
import img1 from './assets/1.jpg' 
import img2 from './assets/2.jpeg'
import img3 from './assets/3.jpg'

function Cursos() {
  return (
    <>
      <div>
        <div id="carouselExample" className="carousel slide"> {/* Recuerda usar className */}
          <div className="carousel-inner">
            
            <div className="carousel-item active">
              {/* 2. USA LA VARIABLE IMPORTADA EN EL SRC (Sin comillas) */}
              <img src={img1} className="d-block w-100" alt="Curso 1" />
            </div>

            <div className="carousel-item">
              <img src={img2} className="d-block w-100" alt="Curso 2" />
            </div>

            <div className="carousel-item">
              <img src={img3} className="d-block w-100" alt="Curso 3" />
            </div>

          </div>
          
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Cursos
