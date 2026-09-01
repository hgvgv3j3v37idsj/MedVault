
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MedicalRecords from "./pages/medicalRecords"
import Login from "./pages/login"
import Register from "./pages/Register"
import ForgotPassword from "./pages/ForgotPassword"
import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"
import UploadMedicalRecord from "./pages/uploadMedicalRecord"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/medical-records" element={<MedicalRecords />} />
        <Route path="/upload-medical-record" element={<UploadMedicalRecord />}
/>
      </Routes>
    </BrowserRouter>
  )
}

export default App



