import "./login.css";

const Login = () => {
  return (
<div className="login-form">
      <h2>Iniciar sesión</h2>
      <form>
        <div className="form-group">
          <label htmlFor="usuario">Usuario</label>
          <input type="text" id="usuario" name="usuario" required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" required />
        </div>

        <div className="form-links">
          <a >¿Olvidaste tu contraseña?</a>
          <a >¿Olvidaste tu usuario?</a>
        </div>

        <button type="submit" className="btn-login">Ingresar</button>
      </form>

      <button className="btn-login-new">
        Solicitar nuevo usuario
      </button>
    </div>
  )
}

export default Login