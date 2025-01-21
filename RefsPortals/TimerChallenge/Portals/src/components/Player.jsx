import { useRef, useState } from "react";

export default function Player() {
  // quite a lot of code we got to write to just display input value
  // it can be simplified by using Refs
  const [enteredPlayerName, setPlayerName] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  // we dont need these extra functions
  function handleChange(event){
    setSubmitted(false)
    setPlayerName(event.target.value)
  }

  function handleClick() {
    setSubmitted(true)
  }

// Ref in React is just a value just like State
const playerNameRef = useRef()
// we can connect Refs with JSX elements using special props - ref props just like key prop 

  function handleClickRef() {
    setPlayerName(playerNameRef.current.value)
  }


  return (
    <section id="player">
     {/* <h2>Welcome {submitted ? enteredPlayerName : 'unknown entity'}</h2> */}
      {/* <h2>Welcome {enteredPlayerName ? enteredPlayerName : 'unknown entity'}</h2> */}
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        {/*<input type="text" onChange={handleChange} value={enteredPlayerName}/>*/}
        <input 
          ref={playerNameRef}
          type="text" 
          // onChange={handleChange} // not needed due to Ref 
          // value={enteredPlayerName}
          />
        {/*<button onClick={handleClick}>Set Name</button>*/}
        <button onClick={handleClickRef}>Set Name</button>
      </p>
    </section>
  );
}
