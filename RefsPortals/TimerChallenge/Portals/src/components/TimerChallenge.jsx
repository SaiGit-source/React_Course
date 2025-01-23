import { useRef, useState } from 'react';
import ResultModal from './ResultModal';
//let timer; // we dont want to recreate this variable when the component function re-executes when State changes. so we put it outside component function. however, variable is not a solution

export default function TimerChallenge({title, targetTime}) {
  const [timerExpired, setTimerExpired] = useState(false)
  const [timerStarted, setTimerStarted] = useState(false)

  const timer = useRef() // every component instance will get its own timer ref, which will never be overwritten, cleared or reset unlike variable
  const dialogRefTimer = useRef() // we are using this Ref to open the dialog programatically
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000)
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000
  if (timeRemaining <=0){
    //setInterval doesn't stop on its own
    clearInterval(timer.current)
    dialogRefTimer.current.open()
  } // here we didnt stop timer in time so it expired so we lost

  function handleTimeReset() {
    setTimeRemaining(targetTime * 1000)
  }

  function handleStart() {
    setTimerStarted(true)
    /* timer.current = setTimeout(
      ()=>{setTimerExpired(true);
        dialogRefTimer.current.open(); // we are opening the modal only when times-out
        // this open() method is referred from ResultModal
      }, 
      targetTime * 1000) // milliseconds
      */

          // we are using setInterval instead of setTimeout
          // i want to execute every 10 milliseconds and we keep track of remaining time in our state
      timer.current = setInterval(
        ()=>{
          setTimeRemaining(prevTimeRem => prevTimeRem - 10) // every 10ms we deduct 10ms from initial targetTime
        }, 10) // milliseconds
  
  }

  function handleStop() {
    // clearTimeout(timer.current) // we need to provide id of timer to stop it
    // also we dont want to update UI when we stop timer
    dialogRefTimer.current.open()
    clearInterval(timer.current)
  }

    return (
      <>
      <ResultModal 
        ref={dialogRefTimer} 
        targetTime={targetTime} 
        remainingTime={timeRemaining}
        onReset={handleTimeReset}>
      </ResultModal>

        <section className="challenge">
            <h2>{title}</h2>
            {/*{timerExpired && <p>You Lost!</p>}*/}
            <p className="challenge-time">
                {targetTime} second{targetTime>1 ? 's' : ''}
            </p>
            <p>
            <button onClick={timerIsActive ? handleStop : handleStart}>
                {timerStarted ? 'Stop' : 'Start'} Challenge
            </button>
            </p>
            {/* timerIsActive instead of timerStarted */}
            <p className={timerIsActive ? 'active' : undefined}>
                {timerIsActive ? 'Time is running...' : 'Timer inactive'}
            </p>
        </section>
        </>
    )
}