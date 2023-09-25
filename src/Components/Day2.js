// 1. Explain when to lift state up to a parent component.
// when multiple child components need access to the same piece of data and if change's in one component state needs to be 
//reflected in another component we can lift the state up to a parent component.
// 2. Lift the state from all above components to a component called Parent.
//    - Call <Parent /> in App and all state should be managed in Parent
//    - state updaters should be sent as props to children and should be updated from children.
import './App.css';
import React, { useState } from 'react';
export default function Parent(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false); // Track submission status
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const newErrors={};
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name) {
          newErrors.name = 'Please enter a name.';
        }
        if (!formData.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
            newErrors.email = 'Email should include @ and . symbols.';
        }
        // Validating password
        if (!formData.password) {
          newErrors.password = 'Password is required.';
        }
    
        // Validating confirmPassword
        if (formData.password !== formData.confirmPassword) {
          newErrors.confirmPassword = 'Passwords must match.';
        }
        //Displaying Errors if there are any after Submitting the form
        document.getElementById('nameErrorProp').innerText = newErrors.name|| '';
        document.getElementById('emailErrorProp').innerText = newErrors.email|| '';
        document.getElementById('passwordErrorProp').innerText = newErrors.password || '';
        document.getElementById('confirmPasswordErrorProp').innerText = newErrors.confirmPassword || '';
    
        // If there are no errors, you can proceed with form submission
        if (Object.keys(newErrors).length === 0) {
          setIsSubmitted(true);
          setFormData({name: '',
          email: '',
          password: '',
          confirmPassword: ''})
        }
    
    };
    return(
        <SignUpForm formData={formData} newErrors={newErrors} isSubmitted={isSubmitted} handleInputChange={handleInputChange} handleSubmit={handleSubmit}/>
    );
    
}
function SignUpForm (props) {
    const isSubmitted=props.isSubmitted; // Track submission status
    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        value={props.formData.name}
                        onChange={props.handleInputChange}
                    />
                    <div className="extraSpace"></div>
                    <div id="nameErrorProp" className="error"></div>
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Your E-mail"
                        value={props.formData.email}
                        onChange={props.handleInputChange}
                    />
                    <div className="extraSpace"></div>
                    <div id="emailErrorProp" className="error"></div>
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Create Password"
                        value={props.formData.password}
                        onChange={props.handleInputChange}
                    />
                    <div className="extraSpace"></div>
                    <div id="passwordErrorProp" className="error"></div>
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={props.formData.confirmPassword}
                        onChange={props.handleInputChange}
                    />
                    <div className="extraSpace"></div>
                    <div id="confirmPasswordErrorProp" className="error"></div>
                </div>
                <button type="submit">Sign Up</button>
            </form>
            {isSubmitted && <p className="success">Success! Form submitted.</p>}
        </div>
  );
};


