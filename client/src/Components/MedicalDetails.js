import React from 'react'

function MedicalDetails({ formData, setFormData }) {
  return (
    <form className="medical_info">
    <label>Email:</label>
        <input type="text" name="email"  value={formData.email} onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }></input>
    </form>
  )
}

export default MedicalDetails
