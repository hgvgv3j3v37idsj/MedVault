import { useState } from "react"
import { Link } from "react-router-dom"
function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
    function handleSubmit(e) {
    e.preventDefault()

    alert("Login button clicked")
    }
  return (
    <div>
      <h1>MedVault</h1>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
        
      </form>
      <Link to="/forgot-password">Forgot Password?</Link><br />
      <Link to="/register">Create an account</Link>
    </div>
  )
}

export default Login