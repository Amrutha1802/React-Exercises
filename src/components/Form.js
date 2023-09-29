import '../App.css';
import React, { useState } from 'react';


const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const newErrors={};
  const [isSubmitted, setIsSubmitted] = useState(false); // Track submission status

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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

    // Set the errors if there are any
    //setErrors(newErrors);
    document.getElementById('nameError').innerText = newErrors.name|| '';
    document.getElementById('emailError').innerText = newErrors.email|| '';
    document.getElementById('passwordError').innerText = newErrors.password || '';
    document.getElementById('confirmPasswordError').innerText = newErrors.confirmPassword || '';


    // If there are no errors, you can proceed with form submission
    if (Object.keys(newErrors).length === 0) {
      // Perform your signup logic here

      // Update the submission status
      setIsSubmitted(true);
    }

  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
      <div>
  <label>Name:</label>
  <input
    type="text"
    name="name"
    placeholder="Enter Your Name"
    value={formData.name}
    onChange={handleInputChange}
  />
  <div className="extraSpace"></div>
  <div id="nameError" className="error">name</div>
</div>
<div>
  <label>Email:</label>
  <input
    type="email"
    name="email"
    placeholder="Enter Your E-mail"
    value={formData.email}
    onChange={handleInputChange}
  />
  <div className="extraSpace"></div>
  <div id="emailError" className="error">email</div>
</div>
<div>
  <label>Password:</label>
  <input
    type="password"
    name="password"
    placeholder="Create Password"
    value={formData.password}
    onChange={handleInputChange}
  />
  <div id="passwordError" className="error">password</div>
</div>
<div>
  <label>Confirm Password:</label>
  <input
    type="password"
    name="confirmPassword"
    placeholder="Confirm Password"
    value={formData.confirmPassword}
    onChange={handleInputChange}
  />
  <div className="extraSpace"></div>
  <div id="confirmPasswordError" className="error">jhhh</div>
</div>

        <button type="submit">Sign Up</button>
      </form>
      {isSubmitted && <p className="success">Success! Form submitted.</p>}
    </div>
  );
};

export default SignupForm;
