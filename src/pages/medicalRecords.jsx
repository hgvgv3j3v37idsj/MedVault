import { Link } from "react-router-dom"

function MedicalRecords() {
  return (
    <div>
      <h1>Medical Records</h1>

      <p>Your medical records will appear here.</p>

      <Link to="/upload-medical-record"> Upload Medical Record </Link>

      <br />

      <Link to="/dashboard">Back to Dashboard</Link>
    </div>
  )
}

export default MedicalRecords