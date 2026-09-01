import { Link } from "react-router-dom"

function Register() {
  return (
    <div>
      <h1>MedVault</h1>
      <h2>Create Account</h2>

      <form>
        <input
          type="text"
          placeholder="Full Name"
        />

        <input
          type="email"
          placeholder="Email"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <input
          type="password"
          placeholder="Confirm Password"
        />

        <button type="submit">Create Account</button>
      </form>

      <Link to="/login">Already have an account? Login</Link>
    </div>
  )
}

export default Register