import BasicInfo from "./BasicInfo"
import MedicalDetails from "./MedicalDetails"
import ProductType from "./ProductType"
import FormItems from "./FormItems";
import React, { useState } from "react";
import axios from "axios"
function Form() {

  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    postal_code: "",
    gender: "",
    product_type: "",
    smoker: "",
    coverage: "",
    residency: "",
   
  });

  const [dataForm,setDataForm]=useState([])

  console.log("dataform", dataForm)

  const [isSubmitted, setIsSubmitted]=useState(false)

  const FormTitles = ["Product Type", "Basic Info", "Medical Details"];
  
  const PageDisplay = () => {
    if (page === 0) {
      return <ProductType formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <BasicInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <MedicalDetails formData={formData} setFormData={setFormData} />;
    }
  };
  
  
  return (
    <div className="form">
    <div className="form-container">
      <div className="header"> 
        <h1 >{FormTitles[page]}</h1>
      </div>
      
    
    <div className="body">{PageDisplay()}</div>
    <div className="footer">
      <button
        disabled={page === 0}
        onClick={() => {
          setPage((currPage) => currPage - 1);
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          if (page === FormTitles.length - 1) {
            alert("FORM SUBMITTED");
            console.log("formdata",formData);
            setIsSubmitted(true)
            axios.post("http://localhost:5005/create-form", {
              email: formData.email,
              postal_code: formData.postal_code,
              gender: formData.gender,
              product_type: formData.product_type,
              smoker: formData.smoker,
              coverage: formData.coverage,
              residency: formData.residency,
            }).then(response => {
              console.log("response", response)
              setDataForm([
                ...dataForm,response.data
              
              ]);
            });
          } else {
            setPage((currPage) => currPage + 1);
          }
        }}
      >
        {page === FormTitles.length - 1 ? "Submit" : "Next"}
      </button>
    </div>
    {isSubmitted ?  <FormItems dataForm= {dataForm} setDataForm= {setDataForm} />: null }
   
    </div>
    </div>
  )
}

export default Form

