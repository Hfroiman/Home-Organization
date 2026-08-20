import './HomeTareasRecientes.css'

const HomeTareasRecientes = () => {
  return (
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
  )
}

export default HomeTareasRecientes