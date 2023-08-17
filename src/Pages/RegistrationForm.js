import React, { useState } from "react";

import Button from "../Components/Button";
import Inputs from "../Components/Inputs";
import formfields from "../Components/Formfields";
import Label from "../Components/Label";
import "./registrationform.css";
import InformationPanel from "../Components/InformationPanel";

export default function RegistratonForm() {
  
 /* const [inputs, setInputs] = useState(() => {
    formfields.map((formfield) => {
      return { [formfield.name]: "" };
    });
  });

  console.log(inputs)*/


  const [inputs, setInputs] = useState({});


  //This state is for Information Panel
  const [isPanelActive, setIsPanelActive] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    console.log({ inputs });
    setIsPanelActive((prevState) => !prevState);
  }
  function handlePanelClose() {
    setIsPanelActive((prevState) => !prevState);
  }
  function handleChange(event) {
    const { value, name } = event.target;
    if(name==="phone")
    {
      
      setInputs((preValue) => {
        return {
          ...inputs,
          [name]: value.replace(/\D/g, ''),
        };
      });
      
    }
    else{
    setInputs((preValue) => {
      return {
        ...inputs,
        [name]: value,
      };
    });
  }
  }
  return (
    <div className="container">
      <form>
        <h2>Registration Form</h2>
        {formfields.map((formfield) => (
          <div key={"d" + formfield.id} className="row">
            <div className="col-25">
              <Label
                key={"l" + formfield.id}
                id={"l" + formfield.id}
                labelname={formfield.labelname}
              />
            </div>
            <div className="col-75">
              <Inputs
                key={"i" + formfield.id}
                id={"i" + formfield.id}
                name={formfield.name}
                type={formfield.type}
                placeholder={formfield.placeholder}
                value={inputs.value}
                onChange={handleChange}
              />
            </div>
          </div>
        ))}
        <div className="row">
          <Button onClick={handleSubmit} />
        </div>
        <InformationPanel
          panelClassName={isPanelActive ? "modal-display" : "modal"}
          onCloseClick={handlePanelClose}
          submittedInfo={inputs}
        />
      </form>
    </div>
  );
}
