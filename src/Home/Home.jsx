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
        <table className="mi-tabla">
          <thead>
            <tr>
              <th>Tareas Rendientes</th>
              <th>Usuarios</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lavar platos</td>
              <td>Carlos Pérez</td>
              <td>Terminado</td>
            </tr>
            <tr>
              <td>planchar</td>
              <td>Ana Gómez</td>
              <td>Pendiente</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className='home-progreso'>
        <section className='home-progreso-title'>
          <h3>Progreso Familiar</h3>
        </section>
        <section className='home-progreso-cake'>
        </section>
        <section className='home-progreso-comments'>
          <p>Excelente trabajo en equipo 💪</p>
        </section>
      </section>
    </div>
  )
}

export default Home