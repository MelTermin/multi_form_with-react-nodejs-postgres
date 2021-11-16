import React from 'react'

function ProductType({ formData, setFormData }) {
  return (
    <form className="product_info" >
        <input className="input" type="radio" value="Term Life Insurance" name="product_type"   onChange={(event) =>
          setFormData({ ...formData, product_type: event.target.value })
        } /> 
        <label> Term Life Insurance</label>
         <br/>

         
        <input type="radio" value="Whole Life Insurance" name="product_type" onChange={(event) =>
          setFormData({ ...formData, product_type: event.target.value })
        } /> 
        <label> Whole Life Insurance</label>
        <br/>

        <input type="radio" value="Mortgage Protection" name="product_type" onChange={(event) =>
          setFormData({ ...formData, product_type: event.target.value })
        } /> 
        <label>Mortgage Protection</label>
    </form>
  )
}

export default ProductType
