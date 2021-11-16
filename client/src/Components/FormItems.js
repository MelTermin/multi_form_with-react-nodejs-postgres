
import React from 'react'



function FormItems({dataForm}) {

  return (
    <div style= {{marginTop:"250px", textAlign:"center"}}>
      <h1>Form Items</h1>
          {
        dataForm.map((item) => {
          return (//dont forget to return it Melissa!!//
          <div  key= {item.id} className="results">
            <p><strong>Product Type:</strong> {item.product_type}</p>
            <p><strong>Email:</strong> {item.email}</p>
            <p><strong>Coverage:</strong> {item.coverage}</p>
            <p><strong>Gender</strong> {item.gender}</p>
            <p><strong>Postal Code:</strong>{item.postal_code}</p>
            <p><strong>Smoker:</strong> {item.smoker}</p>
            <p><strong>Residency:</strong>{item.residency}</p>

          
          </div>)
        })
      }
    </div>
  )
}

export default FormItems
