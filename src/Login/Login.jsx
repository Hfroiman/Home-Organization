import "./login.css";

const Login = () => {

  const [userLogueado, setUserLogueado] = useEstate();
  const formulario = document.getElementById("formulario");

  formulario.addEventListener("submit", function(event){
    event.preventDefault();
    const user = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;
    console.log("Formulario enviado");

    bool ingreso = consumoApi(user, password);
  });

  const consumoApi (user, password)=>{
    try {
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
<div className="login-form">
      <h2>Iniciar sesión</h2>
      <form id="Formulario">
        <div className="form-group">
          <label htmlFor="usuario">Usuario</label>
          <input type="text" id="usuario" name="usuario" required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" required />
        </div>

        <div className="form-links">
          <a>¿Olvidaste tu contraseña?</a>
          <a>¿Olvidaste tu usuario?</a>
        </div>

        <button type="submit" className="btn-login">Ingresar</button>
      </form>

      <button className="btn-login-new">Solicitar nuevo usuario</button>
    </div>
  )
}

export default Login