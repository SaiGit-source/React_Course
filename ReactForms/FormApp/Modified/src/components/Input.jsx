export default function Input({ label, id, error, ...props }) {
    return (
        <div className="control no-margin">
          {/* htmlFor is the React equivalent to 'for' in Native HTML, class and for are reserved words so not Prop names in React */}
          <label htmlFor={id}>{label}</label>
          <input 
            id={id} 
            {...props} // we spread the remaining props as it is in the function call
          />
         {/* <div className="control-error">{emailIsInvalid && <p>Please enter a valid email address</p>}</div> */}
         <div className="control-error">
            {error && <p>{error}</p>}
        </div>
        </div>
    )
}