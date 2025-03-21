import { useRef, useState } from "react";

export default function Login() {
  // Second way to handle input changes is ref
  // Disadvantages of using Refs here
  // could end up with a lot of Refs if form has many inputs
  // resetting or cleaning Refs is not easy
  // got to connect Refs manually step-by-step
  const email = useRef() // setting ref() establishes connnection between HTML element ref={email} and this ref variable
  const passwd = useRef()
  
  function handleSubmit(event) {
    event.preventDefault() // it prevents the default browser behavior, which would be to generate and send HTTP requests
    console.log('Submitted!')
    const inputEmail = email.current.value
    const inputPassword = passwd.current.value
    console.log(inputEmail, inputPassword)
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
            ref={email} 
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
            id="password" 
            type="password" 
            name="password"
            ref={passwd}
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
