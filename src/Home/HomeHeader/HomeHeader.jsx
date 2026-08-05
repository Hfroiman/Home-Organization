import './HomeHeader.css'

const HomeHeader = () => {
  return (
    <div>
      <section className='home-welcome'>
        <h2>!Bienvenido, LAUDAA¡ 👋</h2>
        <h6>Resumen de tareas y actividades en casa</h6>
      </section>

      <section className='home-notificaciones'>
        <img className='home-notificaciones-img' src="https://static.vecteezy.com/system/resources/thumbnails/001/505/138/small/notification-bell-icon-free-vector.jpg" alt="imagendenotificaciones" />
      </section>
    </div>
  )
}

export default HomeHeader