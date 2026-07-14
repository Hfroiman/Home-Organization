import './Homework.css'

const Homework = () => {
  return (
    <div>
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
    </div>
  )
}

export default Homework