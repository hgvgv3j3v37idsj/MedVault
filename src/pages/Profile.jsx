import { Link } from "react-router-dom"

function Profile() {
  return (
    <div>
      <h1>Patient Profile</h1>

      <p>Name: Your Name</p>
      <p>Email: your@email.com</p>
      <p>Date of Birth: DD/MM/YYYY</p>

      <Link to="/dashboard">Back to Dashboard</Link>
    </div>
  )
}

export default Profile