import './home.css'
import Navbar from "../Navbar/Navbar.jsx"

const Home = () => {
  return (
    <div className='home-content'>
      <section className='home-welcome'>
        <h2>!Bienvenido, LAUDAA¡ 👋</h2>
        <h6>Resumen de tareas y actividades en casa</h6>
      </section>

      <section className='home-notificaciones'>
        <img className='home-notificaciones-img' src="https://static.vecteezy.com/system/resources/thumbnails/001/505/138/small/notification-bell-icon-free-vector.jpg" alt="imagendenotificaciones" />
      </section>

      <section className='home-tareas-totales' id='home-tareas'>
        <section className='home-img'>
          <img className='home-img-logo' src="https://w7.pngwing.com/pngs/648/943/png-transparent-instagram-logo-logo-instagram-computer-icons-camera-instagram-logo-text-trademark-magenta-thumbnail.png" alt="" />
        </section>
        <section className='home-info'>
          <h5>Tareas totales</h5>
          <h3>24</h3>
          <p>Esta semana</p>
        </section>
      </section>

      <section className='home-tareas-completadas' id='home-tareas'>
        <section className='home-img'>
          <img className='home-img-logo' src="https://w7.pngwing.com/pngs/648/943/png-transparent-instagram-logo-logo-instagram-computer-icons-camera-instagram-logo-text-trademark-magenta-thumbnail.png" alt="" />
        </section>
        <section className='home-info'>
          <h5>Completadas</h5>
          <h3>24</h3>
          <p>67% completado</p>
        </section>
      </section>

      <section className='home-tareas-pendientes' id='home-tareas'>
        <section className='home-img'>
          <img className='home-img-logo' src="https://w7.pngwing.com/pngs/648/943/png-transparent-instagram-logo-logo-instagram-computer-icons-camera-instagram-logo-text-trademark-magenta-thumbnail.png" alt="" />
        </section>
        <section className='home-info'>
          <h5>Pendientes</h5>
          <h3>24</h3>
          <p>3% restante</p>
        </section>
      </section>

      <section className='home-tareas-racha' id='home-tareas'>
        <section className='home-img'>
          <img className='home-img-logo' src="https://w7.pngwing.com/pngs/648/943/png-transparent-instagram-logo-logo-instagram-computer-icons-camera-instagram-logo-text-trademark-magenta-thumbnail.png" alt="" />
        </section>
        <section className='home-info'>
          <h5>Racha familiar</h5>
          <h3>24</h3>
          <p>sigue asi</p>
        </section>
      </section>

      <section className='home-tareas-recientes'>
        <section className='home-tareas-recientes-header'>
          <h5>Tareas</h5>
          <button>+ Nueva tarea</button>
        </section>
        <section className='home-tareas-recientes-filtros'>
          <div className='home-tareas-recientes-filtros2'>
            <button>Todas</button>
            <button>Pendientes</button>
            <button>Completadas</button>
          </div>
          <button>Todas las tareas</button>
        </section>
        <section className='home-tareas-recientes-table'>
          <table className="table table-striped ">
            <tbody>
              <tr>
                <td>Lavar platos</td>
                <td>Carlos Pérez</td>
                <td>Terminado</td>
                <td>x</td>
              </tr>
              <tr>
                <td>planchar</td>
                <td>Ana Gómez</td>
                <td>Pendiente</td>
                <td>0</td>
              </tr>
              <tr>
                <td>planchar</td>
                <td>Ana Gómez</td>
                <td>Pendiente</td>
                <td>x</td>
              </tr>
            </tbody>
          </table>
        </section>
      </section>

      <section className='home-progreso'>
        <section className='home-progreso-title'>
          <h3>Progreso Familiar</h3>
        </section>
        <div className="contenedor-progreso">
          <svg className="circulo-svg" viewBox="0 0 150 150">
            <circle className="fondo-circulo" cx="75" cy="75" r="60"></circle>
            <circle className="progreso-circulo" cx="75" cy="75" r="60"></circle>
          </svg>
          <div className="porcentaje">70%</div>
        </div>
        <section className='home-progreso-comments'>
          <p>Excelente trabajo en equipo 💪</p>
        </section>
      </section>
    </div>
  )
}

export default Home