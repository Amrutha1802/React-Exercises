import '../App.css';
import React, { useState } from 'react';
import { MyContextProvider } from './LevelContext.js';
import ToggleSwitch from './ToggleSwitch.js'
import SignUpForm from './SignUpForm';

export default function SignUpFormUsingSwitch(){
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
        <div>
            <MyContextProvider>
                <ToggleSwitch/>
                <SignUpForm formData={formData} newErrors={newErrors} isSubmitted={isSubmitted} handleInputChange={handleInputChange} handleSubmit={handleSubmit}/>
            </MyContextProvider>
        </div>
    );
    
}
