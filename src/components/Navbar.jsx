import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav>
      <Link to="/dashboard">Dashboard</Link>
      {" | "}
      <Link to="/profile">Profile</Link>
      {" | "}
      <Link to="/medical-records">Medical Records</Link>
      {" | "}
      <Link to="/hospital-visits">Hospital Visits</Link>
    </nav>
  )
}

export default Navbar