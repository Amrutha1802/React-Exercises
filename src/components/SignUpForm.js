import { useContext } from "react";
import LevelContext from "./LevelContext";

export default function SignUpForm (props) {
  const isSubmitted=props.isSubmitted; 
  const {switchToggle}=useContext(LevelContext);
  return (
      <div>
          <h2>Sign Up</h2>
          <form onSubmit={props.handleSubmit}>
              {switchToggle && (<div>
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
              </div>)}
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
}
      
