import { useState } from "react";

export default function Login() {
  // to get access to the user input data
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredPasswd, setEnteredPasswd] = useState('')
  // Or
  const [inputValues, setInputValues] = useState({
    email: '',
    password: ''
  })

  
  function handleSubmit(event) {
    event.preventDefault() // it prevents the default browser behavior, which would be to generate and send HTTP requests
    console.log('Submitted!')
//    console.log('User email: '+ enteredEmail)
    console.log(inputValues)
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
  }

  return (
    <form onSubmit={handleSubmit}> {/* to prevent default behavior of buttons, which will create an HTTP request */}
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          {/* htmlFor is the React equivalent to 'for' in Native HTML, class and for are reserved words so not Prop names in React */}
          <label htmlFor="email">Email</label>
          <input 
            id="email" 
            type="email" 
            name="email" 
            onChange={(event)=>handleInputChange('email', event.target.value)} // executes when user inputs
            value={inputValues.email} // as state val changes we send it back to input
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
            id="password" 
            type="password" 
            name="password"
            onChange={(event)=>handleInputChange('password', event.target.value)}
            value={inputValues.password} 
            />
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
