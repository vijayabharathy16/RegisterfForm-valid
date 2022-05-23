import React from 'react';
import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';


export function RegistrationFrom() {

  const initialValues = {
    fullname: "",
    email: "",
    phonenumber: "",
    country: "",
    city: "",
    state: "",
    message: ""
  };
  const [fromValues, setFromValues] = useState(initialValues);
  const [fromErrors, setFromErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFromValues({...fromValues, [name]: value});
  };

  const handleSubmit = (e) =>{
   e.preventDefault();
   setFromErrors(validate(fromValues));
   setIsSubmit(true);
  };

  useEffect(() => {
    if(Object.keys(fromErrors).length === 0 && isSubmit){
    }

    
  },[fromErrors]);
  

  const validate =(values) =>{
const errors = {};
const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
if (!values.fullname){
  errors.fullname = "name is required";
}else if(values.fullname.length < 3){
  errors.fullname = "Name must be more than 3 characters!";
}else if(values.fullname.length > 15){
  errors.fullname = "Name must be less than 15 characters!";
}

if (!values.email){
  errors.email = "email is required"  
}else if(!regex.test(values.email)){
  errors.email = "This is not a valid email format!";
}
return errors;
  }
  return (
    <div className = "wrapper">
           <h1 className = "title">Registration Form</h1>

          { Object.keys(fromErrors).length === 0 && isSubmit ? 
          (<div className="success" style={{color:"green"}}>Registered Successfully</div>)
        : (<div className="style" >Register Here</div>) 
        }
           <Form className="form" onSubmit={handleSubmit}  >
           <label>
         Full Name:
          <input
            className = "inputfield"
             name="fullname"
            type="text"
            placeholder="Enter the Name" 
            value={fromValues.fullname} 
            onChange={handleChange} 
             />
         <span style={{ color: "red" }}></span> 
        </label>
        <p style={{color:"red"}}>{fromErrors.fullname} </p>
        <br />
        <label>
        Email address:
        <input
        className = "inputfield"
          name="email"
          type="text"
          placeholder="Enter the Email" 
          value={fromValues.email} 
          onChange={handleChange} 
          />
      </label>
      <p style={{color:"red"}}>{fromErrors.email}</p>
      <br />
      <label s>
    Phone Number
      <input
      className = "inputfield"
        name="phonenumber"
        type="number"
        placeholder="phone number" 
        value={fromValues.phonenumber} 
        onChange={handleChange} 
        />
    </label>
    <br />

    <label>
    Country:
          <input
          className = "inputfield"
            name="country"
            type="text"
            placeholder="country" 
            value={fromValues.country} 
            onChange={handleChange} 
            />
        </label>
       <br />
        <label>
        City:

          <input
          className = "inputfield"
            name="city"
            type="text"
            placeholder="city" 
            value={fromValues.city} 
            onChange={handleChange} 
            />
        </label>
        <br />
        <label>
        State:
          <input
          className = "inputfield"
            name="state"
            type="text"
            placeholder="State" 
            value={fromValues.state} 
            onChange={handleChange} 
            />
        </label>
        <br />

        <label>
        Message:
          <textarea class="textarea"
          className = "inputfield"
            name="message"
            type="text"
            placeholder="Message" 
            value={fromValues.message} 
            onChange={handleChange} 
            />
        </label>
        <br />

  <Button className ="button"variant="primary" type="submit" class="btn">
    Submit
  </Button>

</Form>
    </div>
  );
}