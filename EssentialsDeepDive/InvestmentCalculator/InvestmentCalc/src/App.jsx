import Header from "./components/Header"
import Results from "./components/Results";
import UserInput from "./components/UserInput"
import {useState} from 'react'

function App() {

  //we need state to manage input provided by user
  // we need to keep the old data for the inputs that were not changed
  // we need to lift the state up because we want to pass this state into Results component to calculate results
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  // we are adding this const to prevent negative input
  // Error validation
  const inputIsValid = userInput.duration>=1

  function handleChange(inputKey, newValue){
    setUserInput(prevUserInput => {
        return {
            ...prevUserInput,
            [inputKey]: +newValue 
            // note in JS, the event will always return a String val, we convert into a number using a '+' in front, +newValue
        }
    })
  }


  return (
    <>
    <Header></Header>
    <UserInput 
      onInputChange={handleChange}
      inputStateVal={userInput}></UserInput>
    {/* Calculation results must be output here */}
    {!inputIsValid && <p className="center">Error: Please enter positive duration!</p>}
    {inputIsValid && <Results inputStateVal={userInput}></Results>}
    </>
  )
}

export default App
