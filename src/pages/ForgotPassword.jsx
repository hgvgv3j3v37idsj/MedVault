import { Link } from "react-router-dom"

function ForgotPassword() {
  return (
    <div>
      <h1>Forgot Password</h1>

      <form>
        <input
          type="email"
          placeholder="Enter your email"
        />

        <button type="submit">Send Reset Link</button>
      </form>

      <Link to="/login">Back to Login</Link>
    </div>
  )
}

export default ForgotPassword