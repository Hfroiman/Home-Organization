import './home.css'

const Home = () => {
  return (
    <div className='home-content'>
      <section className='home-welcome'>
        <h3>!Bienvenido, LAUDAA¡ 👋</h3>
        <h6>Resumen de tareas y actividades en casa</h6>
      </section>

      <section className='home-notificaciones'>
        <a href=""><img src="" alt="imagendenotificaciones" /></a>
      </section>

      <section className='home-tareas-totales'>
        <section className='home-img'></section>
        <section className='home-info'>
          <h4>Tareas totales</h4>
          <p>24</p>
          <p>Esta semana</p>
        </section>
      </section>

      <section className='home-tareas-completadas'>
        <section className='home-img'></section>
        <section className='home-info'>
          <h4>Completadas</h4>
          <p>16</p>
          <p>67% completado</p>
        </section>
      </section>

      <section className='home-tareas-pendientes'>
        <section className='home-img'></section>
        <section className='home-info'>
          <h4>Pendientes</h4>
          <p>5</p>
          <p>3% restante</p>
        </section>
      </section>

      <section className='home-tareas-racha'>
        <section className='home-img'></section>
        <section className='home-info'>
          <h4>Racha familiar</h4>
          <p>5 dias</p>
          <p>sigue asi</p>
        </section>
      </section>

      <section className='home-tareas-recientes'>
        <table class="mi-tabla">
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