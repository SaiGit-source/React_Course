// a pop-up to see our result and score
// the closer we are to timer expiring higher the score should be
// we wrap the ResultModal function because it is going to receive the 'ref' prop
import {forwardRef, useImperativeHandle, useRef} from 'react'
import { createPortal } from 'react-dom' // deeply nested elements could be hidden by other elements above it. 
// teleport an HTML code into a different place in the DOM

const ResultModal = forwardRef(function ResultModal({remainingTime, targetTime, onReset}, ref) {

    // if different developers work on different components so they can change the function as they like
    // useImperativeHandle() -> we can call this hook to define properties and methods that should be accessible on this component from outside this component
    const dialogRef = useRef()

    useImperativeHandle(ref, () => {
        return {
            open() {
                // this method is callable from outside function
                dialogRef.current.showModal()
            }
        }
    }) // now this component is reusable
    // detaching dialogRef here and in the Timer challenge make the app flexible. for example, i could even change <dialog> to <div> etc

    const userLost = remainingTime<=0
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2) // only 2 decimal places
    const score = Math.round((1 - (remainingTime / (targetTime*1000)))*100)

    return createPortal(
        <dialog ref={dialogRef} className="result-modal">
        {userLost && <h2>You lost!</h2>}
        {!userLost && <h2>Your score: {score}</h2>}
        <p>The Target time was <strong>{targetTime} seconds. </strong></p>
        <p>You stopped the timer with {formattedRemainingTime} seconds left.</p>
        <form method="dialog" onSubmit={onReset}>
            <button>Close</button>
        </form>
    </dialog>,
    document.getElementById('modal') // we get modal id from index.html, where this HTML should be teleported to
    )
}); // we wrap the ResultModal function because it is going to receive the ref prop

export default ResultModal;