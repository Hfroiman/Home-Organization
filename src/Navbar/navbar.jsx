import './navbar.css'

const Navbar = () => {
  return (
    <div className="navbar-body">
      <section className='navbar-title'>
        <img className='navbar-title-img' src="https://previews.123rf.com/images/123vector/123vector1710/123vector171000262/88320161-illustration-of-home-icon-on-white-background.jpg" alt="" />
        <h5 className='navbar-title-h'>Mi Hogar</h5>
      </section>

      <section className='navbar-list'>
        <button className='btn-list' type='button'>INICIO</button>
        <button className='btn-list' type='button'>TAREAS</button>
        <button className='btn-list' type='button'>CALENDARIO</button>
        <button className='btn-list' type='button'>MIEMBROS</button>
        <button className='btn-list' type='button'>RECOMPENSAS</button>
        <button className='btn-list' type='button'>HISTORIAL</button>
        <button className='btn-list' type='button'>CONFIGURACION</button>
      </section>

      <section className='navbar-profile'>
        <img className='navbar-profile-img'src="https://w7.pngwing.com/pngs/946/556/png-transparent-computer-icons-login-user-profile-client-smiley-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B8-windows-10-thumbnail.png" alt="" />
        <section>
          <h6>Laura</h6>
          <p>Administradora</p>
        </section>
      </section> 
    </div>
  )
}

export default Navbar