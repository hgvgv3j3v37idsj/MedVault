import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
function Dashboard() {
  return (
    <div>
      <Navbar />
      <h1>MedVault Dashboard</h1>

      <p>Welcome to MedVault.</p>

      <Link to="/profile">Patient Profile</Link>

      <br />
      
      <Link to="/medical-records">Medical Records</Link>

      <br />
      <Link to="/hospital-visits">Hospital Visits</Link>

      <button type="button">Logout</button>
    </div>
  )
}

export default Dashboard