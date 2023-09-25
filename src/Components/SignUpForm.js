import './App.css';
import React, { useState } from 'react';

function SignUpForm () {
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
    //Displaying Errors if there are any after Submitting the form
    document.getElementById('nameError').innerText = newErrors.name|| '';
    document.getElementById('emailError').innerText = newErrors.email|| '';
    document.getElementById('passwordError').innerText = newErrors.password || '';
    document.getElementById('confirmPasswordError').innerText = newErrors.confirmPassword || '';

    // If there are no errors, you can proceed with form submission
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      setFormData({name: '',
      email: '',
      password: '',
      confirmPassword: ''})
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
                <div id="nameError" className="error"></div>
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
                <div id="emailError" className="error"></div>
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
                <div className="extraSpace"></div>
                <div id="passwordError" className="error"></div>
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
                <br/>
                <div id="confirmPasswordError" className="error"></div>
            </div>
            <button type="submit">Sign Up</button>
        </form>
        {isSubmitted && <p className="success">Success! Form submitted.</p>}
    </div>
  );
};

export default SignUpForm;

// import './App.css';
// import React, { useState } from 'react';


// const SignupForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false); // Track submission status

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     setErrors({ ...errors, [name]: '' });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = {};
//     // Validating name
//     if (!formData.name) {
//       newErrors.name = 'Please enter a name.';
//     }

// if (!formData.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
//     newErrors.email = 'Email should include @ and . symbols.';
//   }
//     // Validating password
//     if (!formData.password) {
//       newErrors.password = 'Password is required.';
//     }

//     // Validating confirmPassword
//     if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords must match.';
//     }

//     // Set the errors if there are any
//     setErrors(newErrors);

//     // If there are no errors, you can proceed with form submission
//     if (Object.keys(newErrors).length === 0) {
//       // Perform your signup logic here

//       // Update the submission status
//       setIsSubmitted(true);
//     }
//   };

//   return (
//     <div>
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             placeholder='Enter Your Name'
//             value={formData.name}
//             onChange={handleInputChange}
//           />
//           <div className="extraSpace"></div>
//           {errors.name && (<div>
//             <span className="error">{errors.name}</span>
//             <div className="extraSpace"></div>
//             </div>)}
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type='email'
//             name="email"
//             placeholder='Enter Your E-mail'
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//            <div className="extraSpace"></div> 
//           {errors.email && (<div>
//             <span className="error">{errors.email}</span>
//             <div className="extraSpace"></div>
//             </div>) }
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             placeholder='Create Password'
//             value={formData.password}
//             onChange={handleInputChange}
//           />
//           {errors.password && (<div>
//                 <span className="error">{errors.password}</span>
//                 <div className="extraSpace"></div>
//             </div>)}
//         </div>
//           <div className="extraSpace"></div>
//         <div>
//           <label>Confirm Password:</label>
//           <input
//             type="password"
//             name="confirmPassword"
//             placeholder='Confirm Password'
//             value={formData.confirmPassword}
//             onChange={handleInputChange}
//           />
//           {errors.confirmPassword && (<div>
//             <span className="error">{errors.confirmPassword}</span>
//             <div className='extraSpace'></div>
//             </div>
//           )}
//           <div className="extraSpace"></div>
//         </div>
//         <button type="submit">Sign Up</button>
//       </form>
//       {isSubmitted && <p className="success">Success! Form submitted.</p>}
//     </div>
//   );
// };

// export default SignupForm;
