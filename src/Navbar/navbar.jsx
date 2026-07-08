import './navbar.css'

const navbar = () => {
  return (
    <div className="navbar-body">
      <section className='navbar-title'>MI HOGAR</section>

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
  );
};

export default navbar;