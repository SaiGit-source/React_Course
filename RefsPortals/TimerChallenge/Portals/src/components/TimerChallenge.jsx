import { useRef, useState } from 'react';
import ResultModal from './ResultModal';
//let timer; // we dont want to recreate this variable when the component function re-executes when State changes. so we put it outside component function. however, variable is not a solution

export default function TimerChallenge({title, targetTime}) {
  const [timerExpired, setTimerExpired] = useState(false)
  const [timerStarted, setTimerStarted] = useState(false)

  const timer = useRef() // every component instance will get its own timer ref, which will never be overwritten, cleared or reset unlike variable
  const dialogRef = useRef() // we are using this Ref to open the dialog programatically

  function handleStart() {
    setTimerStarted(true)
    timer.current = setTimeout(
      ()=>{setTimerExpired(true);
        dialogRef.current.showModal(); // we are opening the modal only when times-out
      }, 
      targetTime * 1000) // milliseconds
  }

  function handleStop() {
    clearTimeout(timer.current) // we need to provide id of timer to stop it
    // also we dont want to update UI when we stop timer
  }

    return (
      <>
      <ResultModal ref={dialogRef} targetTime={targetTime} result="lost">
      </ResultModal>
        <section className="challenge">
            <h2>{title}</h2>
            {/*{timerExpired && <p>You Lost!</p>}*/}
            <p className="challenge-time">
                {targetTime} second{targetTime>1 ? 's' : ''}
            </p>
            <p>
            <button onClick={timerStarted ? handleStop : handleStart}>
                {timerStarted ? 'Stop' : 'Start'} Challenge
            </button>
            </p>
            <p className={timerStarted ? 'active' : undefined}>
                {timerStarted ? 'Time is running...' : 'Timer inactive'}
            </p>
        </section>
        </>
    )
}