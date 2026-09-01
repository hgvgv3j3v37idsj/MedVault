import { useState } from "react"
import { Link } from "react-router-dom"

function UploadMedicalRecord() {
  const [file, setFile] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()

    if (!file) {
      alert("Please select a file")
         return
    }

alert("File selected: " + file.name)
  }

  return (
    <div>
      <h1>Upload Medical Record</h1>

      <form onSubmit={handleSubmit}>
        <select>
            <option value="">Select Record Type</option>
            <option value="prescription">Prescription</option>
           <option value="lab-report">Lab Report</option>
            <option value="scan">Scan / Imaging</option>
            <option value="discharge">Discharge Summary</option>
            <option value="other">Other</option>
        </select>

        <input type="file" onChange={(e) => setFile(e.target.files[0])}/>

         <button type="submit">Upload</button>
    </form>

      <br />

      <Link to="/medical-records">Back to Medical Records</Link>
    </div>
  )
}

export default UploadMedicalRecord