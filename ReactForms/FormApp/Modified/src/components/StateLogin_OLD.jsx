import { useState } from "react";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation.js'

export default function Login() {
  // to get access to the user input data
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredPasswd, setEnteredPasswd] = useState('')
  // Or
  const [inputValues, setInputValues] = useState({
    email: '',
    password: ''
  }) 
// for blur event / validation
    const [inputStatus, setInputStatus] = useState({
      email: false,
      password: false
    })
  

//  const emailIsInvalid= inputValues.email!=='' && !inputValues.email.includes('@')
//  const emailIsInvalid = inputStatus.email===true && !inputValues.email.includes('@')
    const emailIsInvalid = inputStatus.email===true && !isEmail(inputValues.email) && !isNotEmpty(inputValues.email)
//  const passwdIsInvalid = inputStatus.password===true && inputValues.password.trim().length < 6
    const passwdIsInvalid = inputStatus.password===true && !hasMinLength(inputValues.password, 6)
    // when we start entering passwd and it's < 6 long then invalid

// example of showing error message too early
  
  function handleSubmit(event) {
    event.preventDefault() // it prevents the default browser behavior, which would be to generate and send HTTP requests
    console.log('Submitted!')
//    console.log('User email: '+ enteredEmail)
    console.log(inputValues)

    setInputValues({
      email: '',
      password: '',
    })
  }

  function handleEmailChange(event) {
    setEnteredEmail(event.target.value)
  }

  function handlePasswordChange(event){
    setEnteredPasswd(event.target.value)
  }

  // identifier is the key in Json
  function handleInputChange(identifier, value){
    setInputValues(prevValues => ({
      ...prevValues,
      [identifier]: value
    }))

    // reset focus and out of focus
    setInputStatus(prevStatus => ({
      ...prevStatus,
      [identifier]: false
    }))
  }

  function handleInputBlur(identifier){
    setInputStatus(prevStatus => ({
      ...prevStatus,
      [identifier]: true 
    }))
    // when user types again after out of focus, we set to true again
  }

  return (
    <form onSubmit={handleSubmit}> {/* to prevent default behavior of buttons, which will create an HTTP request */}
      <h2>Login</h2>

      <div className="control-row">
        <Input 
          label="Email" 
          id="email" 
          type="email" 
          name="email"
          onBlur={()=>handleInputBlur('email')} 
          onChange={(event)=>handleInputChange('email', event.target.value)} // executes when user inputs
          value={inputValues.email} // as state val changes we send it back to input
          error={emailIsInvalid && 'Please enter a valid email!'} />

        <Input 
          label="Password" 
          id="password" 
          type="password" 
          name="password"
          onBlur={()=>handleInputBlur('password')} 
          onChange={(event)=>handleInputChange('password', event.target.value)} // executes when user inputs
          value={inputValues.password} // as state val changes we send it back to input
          error={passwdIsInvalid && 'Please enter a valid password!'}/>

        <div className="control no-margin">
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        {/* Default browser behavior for butttons within <form> element is those 'buttons' will 'submit' the form.*/}
        <button className="button" onClick={handleSubmit}>Login</button>
        {/*<button type="button" className="button" onClick={handleSubmit}>Login</button>*/}
        {/* add 'type' prop to prevent default behavior of submitting form data to server, other option is to add onSubmit prop to form element */}
        {/* default type is the 'submit' type */}
      </p>
    </form>
  );
}
