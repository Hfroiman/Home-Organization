import './home.css'
import Navbar from "../Navbar/Navbar.jsx"

const Home = () => {
  return (
    <div className='home-content'>
      <section className='home-welcome'>
        <h2>!Bienvenido, LAUDAA¡ 👋</h2>
        <h4>Resumen de tareas y actividades en casa</h4>
      </section>

      <section className='home-notificaciones'>
        <img src="ss" alt="imagendenotificaciones" />
      </section>

      <section className='home-tareas-totales' id='home-tareas'>
        <section className='home-img'>
          <img className='home-img-logo' src="https://w7.pngwing.com/pngs/648/943/png-transparent-instagram-logo-logo-instagram-computer-icons-camera-instagram-logo-text-trademark-magenta-thumbnail.png" alt="" />
        </section>
        <section className='home-info'>
          <h3>Tareas totales</h3>
          <p>24</p>
          <p>Esta semana</p>
        </section>
      </section>

      <section className='home-tareas-completadas' id='home-tareas'>
        <section className='home-img'>
          <img className='home-img-logo' src="https://w7.pngwing.com/pngs/648/943/png-transparent-instagram-logo-logo-instagram-computer-icons-camera-instagram-logo-text-trademark-magenta-thumbnail.png" alt="" />
        </section>
        <section className='home-info'>
          <h4>Completadas</h4>
          <p>16</p>
          <p>67% completado</p>
        </section>
      </section>

      <section className='home-tareas-pendientes' id='home-tareas'>
        <section className='home-img'>
          <img className='home-img-logo' src="https://w7.pngwing.com/pngs/648/943/png-transparent-instagram-logo-logo-instagram-computer-icons-camera-instagram-logo-text-trademark-magenta-thumbnail.png" alt="" />
        </section>
        <section className='home-info'>
          <h4>Pendientes</h4>
          <p>5</p>
          <p>3% restante</p>
        </section>
      </section>

      <section className='home-tareas-racha' id='home-tareas'>
        <section className='home-img'>
          <img className='home-img-logo' src="https://w7.pngwing.com/pngs/648/943/png-transparent-instagram-logo-logo-instagram-computer-icons-camera-instagram-logo-text-trademark-magenta-thumbnail.png" alt="" />
        </section>
        <section className='home-info'>
          <h4>Racha familiar</h4>
          <p>5 dias</p>
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