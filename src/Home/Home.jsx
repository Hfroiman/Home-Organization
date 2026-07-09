import './home.css'

const Home = () => {
  return (
    <div className='home-content'>
        <section className='home-welcome'></section>
        <section className='home-notificaciones'></section>
        <section className='home-tareas-totales'></section>
        <section className='home-tareas-completadas'></section>
        <section className='home-tareas-pendientes'></section>
        <section className='home-tareas-racha'></section>
        <section className='home-tareas-recientes'></section>
        <section className='home-progreso'></section>
    </div>
  )
}

export default Home