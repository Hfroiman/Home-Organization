import './Homework.css'

const Homework = () => {
  return (
    <div className='homework-body'>
        <section className="Jobs-header">
            <div><h3>Tareas</h3></div>
            <div><button>+ Nueva tarea</button></div>
        </section>

        <section className="Jobs-btns">
          <section className='jobs-btns-1'>
            <button>Todas</button>
            <button>Pendientes</button>
            <button>Completadas</button>
          </section>
          <section className='jobs-btns-2'>
            <button>Todas las personas</button>
          </section>
        </section>
        
        <section className="Jobs-table">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Tareas Pendientes</th>
              <th>Usuarios</th>
              <th>Puntos</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lavar platos</td>
              <td>Carlos Pérez</td>
              <td>10</td>
              <td>Terminado</td>
            </tr>
            <tr>
              <td>planchar</td>
              <td>Ana Gómez</td>
              <td>12</td>
              <td>Pendiente</td>
            </tr>
          </tbody>
        </table>
        </section>
    </div>
  )
}

export default Homework