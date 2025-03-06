import { useEffect, useState } from "react"

export default function QuestionTimer({timeout, onTimeOut, mode}){
    const [remainingTime, setRemainingTime] = useState(timeout)

    // also 'setTimeout' timer will be re-created each time this component re-executes and multuple timers will be there
    // however, we want to create a new timer only when one of the dependencies 'timeout' or 'onTimeOut' changes
    // parent component decides when to run and reset the timer
    useEffect(()=>{
        const timer = setTimeout(onTimeOut, timeout)

        return () => {
            clearTimeout(timer) // cleanup function for the timer once the object disappears
        }
    }, [timeout, onTimeOut])

    // once timer expires we want notify the parent component to move-on with the next question
    // onTimeOut() helps to notify parent component
    /* // with return statement
    setInterval(()=>{
        setRemainingTime(prevRemainingTime => {
            return prevRemainingTime-100
        })
    },100)
    */
   // this will cause an infinite loop because we are updating the state 'remainingTime' and it would re-execute this component so we need 'useEffect()'. 
   useEffect(()=>{
        const interval = setInterval(()=>{
            setRemainingTime(prevRemainingTime => prevRemainingTime-100)
        },100)
    // we want to have only one Interval up and running at the same time. without the 'Cleanup' function it is up and running twice so we have a wired pause after each question   
        return () => {
            clearInterval(interval)
        }
   }, []) 

    // every 100 milliseconds, this function should execute
    // in this function i want to update remainingTime by deducting 100 ms. it should match the frequency of execution
    // 100 milliseconds would have lapsed in the meantime


    return (
        <progress 
            id="question-time" 
            max={timeout} 
            value={remainingTime} 
            className={mode}/>
    )
}