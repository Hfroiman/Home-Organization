import './HomeProgreso.css'

const HomeProgreso = () => {
  return (
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
  )
}

export default HomeProgreso