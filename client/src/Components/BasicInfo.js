import React from 'react'

function BasicInfo({ formData, setFormData }) {
  return (
    <form className="basic_info" >

        <label>Gender</label>
        <br/>
      
        <input type="radio" value="Female" name="gender" onChange={(event) =>
          setFormData({ ...formData, gender: event.target.value })
        }  />
        <label>Female</label>
        <input type="radio" value="Male" name="gender" onChange={(event) =>
          setFormData({ ...formData, gender: event.target.value })
        }  /> 
        <label>Male</label> 
        <br/>
        <label>Smoker?</label>
        <br/>
        
        <input type="radio" value="Do" name="smoker" onChange={(event) =>
          setFormData({ ...formData, smoker: event.target.value })
        }  />
        <label>Do</label>
        <input type="radio" value="Do Not" name="smoker" onChange={(event) =>
          setFormData({ ...formData, smoker: event.target.value })
        }  /> 
        <label>Do not</label> 
        <br/>
        <label>Postal Code:</label>
        <br/>
        <input type="text" name="postal_code"  value={formData.postal_code} onChange={(event) =>
          setFormData({ ...formData, postal_code: event.target.value })
        }></input>
        <br/>
        <label>Coverage</label>
        <br/>
        <input type="radio" value="Myself" name="coverage" onChange={(event) =>
          setFormData({ ...formData, coverage: event.target.value })
        }  /> 
        <label>Myself</label>
        <input type="radio" value="My spouse and myself" name="coverage" onChange={(event) =>
          setFormData({ ...formData, coverage: event.target.value })
        } />
        <label>My spouse and myself</label>
        <br/>

        <label>Residency</label>
        <br/>
        <input type="radio" value="Permanent Residence" name="residency" onChange={(event) =>
          setFormData({ ...formData, residency: event.target.value })
        }  /> 
        <label>Permanent Residence</label>
        <input type="radio" value="Visiting" name="residency" onChange={(event) =>
          setFormData({ ...formData, residency: event.target.value })
        } />
        <label>Visiting</label>
        <br/>
    </form>
  )
}

export default BasicInfo
