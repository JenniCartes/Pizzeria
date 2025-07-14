import { useState } from "react"

const Login = () => {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password){
            setMessage("Todos los campos son obligatorios")
        } else if (password.length < 6){
            setMessage("La contraseña debe tener al menos 6 caracteres")
        } else  {
            setMessage("Inicio de sesión  exitoso")
        }
    };

  return (
    <div className="form-container">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
            <input type="Email"
            placeholder="Correo Electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <input type="password" 
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Ingresar</button>
        </form>
        {message && <p className="message">{message}</p>}
      
    </div>
  )
}

export default Login
