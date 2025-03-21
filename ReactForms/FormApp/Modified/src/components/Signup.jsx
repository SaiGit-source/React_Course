import { useState } from "react"

export default function Signup() {
  // custom error state
  const [passwdNotEqual, setPasswdNotEqual] = useState(false)

    function handleSubmit(event){
        event.preventDefault() // to prevent submit action to send a HTTP request to Backend
        const fdata = new FormData(event.target) // built into browser --> FormData() makes it easy to get hold of different form values
        //const inputEmail = fdata.get('email') // get value of input field that has the name="email"
        const acquisitionChannel = fdata.getAll('acquisition') // name set on checkbox elements 'acquisition'
        const data = Object.fromEntries(fdata.entries())
        data.acquisition = acquisitionChannel
        
        if (data.password !== data['confirm-password']){ // note: '-' is an invalid notation when we use data.confirm-password
// checking whether passwords match
          setPasswdNotEqual(true)
          return
        }
        console.log(data)
        event.target.reset()
    }

    /* when using entries() method, multi-select user fields are lost
    so we use fdata.getAll()
    {
    "email": "test@abc.com",
    "password": "Passwd",
    "confirm-password": "Passwd",
    "first-name": "Abc",
    "last-name": "Xyz",
    "role": "student",
    "acquisition": "google",
    "terms": "on"
} */

    return (
      <form onSubmit={handleSubmit}>
              {/* <form>, we modify the default behavior right
              redirect to handleSubmit() method */}
        <h2>Welcome on board!</h2>
        <p>We just need a little bit of data from you to get you started 🚀</p>
  
        <div className="control">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required/>
        </div>
  
        <div className="control-row">
          <div className="control">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" name="password" required minLength={6}/>
          </div>
  
          <div className="control">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              id="confirm-password"
              type="password"
              name="confirm-password"
              required
            />
            <div className="control-error">{passwdNotEqual && <p>Passwords must match!</p>}</div>
          </div>
        </div>
  
        <hr />
  
        <div className="control-row">
          <div className="control">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" name="first-name" />
          </div>
  
          <div className="control">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" name="last-name" />
          </div>
        </div>
  
        <div className="control">
          <label htmlFor="phone">What best describes your role?</label>
          <select id="role" name="role" required>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="employee">Employee</option>
            <option value="founder">Founder</option>
            <option value="other">Other</option>
          </select>
        </div>
  
        <fieldset>
          <legend>How did you find us?</legend>
          <div className="control">
            <input
              type="checkbox"
              id="google"
              name="acquisition"
              value="google"
            />
            <label htmlFor="google">Google</label>
          </div>
  
          <div className="control">
            <input
              type="checkbox"
              id="friend"
              name="acquisition"
              value="friend"
            />
            <label htmlFor="friend">Referred by friend</label>
          </div>
  
          <div className="control">
            <input type="checkbox" id="other" name="acquisition" value="other" />
            <label htmlFor="other">Other</label>
          </div>
        </fieldset>
  
        <div className="control">
          <label htmlFor="terms-and-conditions">
            <input type="checkbox" id="terms-and-conditions" name="terms" required />I
            agree to the terms and conditions
          </label>
        </div>
  
        <p className="form-actions">
          <button type="reset" className="button button-flat">
            Reset
          </button>
          <button type="submit" className="button">
            Sign up
          </button>
        </p>
      </form>
    );
  }