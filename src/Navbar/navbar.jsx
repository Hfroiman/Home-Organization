import './navbar.css'

const Navbar = () => {
  return (
    <div className="navbar-body">
      <section className='navbar-title'>
        <img className='navbar-title-img' src="https://previews.123rf.com/images/123vector/123vector1710/123vector171000262/88320161-illustration-of-home-icon-on-white-background.jpg" alt="" />
        <h2 className='navbar-title-h'>Mi Hogar</h2>
      </section>

      <section className='navbar-list'>
        <button>INICIO</button>
        <button>TAREAS</button>
        <button>CALENDARIO</button>
        <button>MIEMBROS</button>
        <button>RECOMPENSAS</button>
        <button>HISTORIAL</button>
        <button>CONFIGURACION</button>
      </section>

      <section className='navbar-profile'>
        <button>NOMBRE Y LOGO DEL USER</button>
      </section> 
    </div>
  )
}

export default Navbar