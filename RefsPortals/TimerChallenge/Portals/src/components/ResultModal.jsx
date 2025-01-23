// a pop-up to see our result and score
// the closer we are to timer expiring higher the score should be
// we wrap the ResultModal function because it is going to receive the 'ref' prop
import {forwardRef} from 'react'

const ResultModal = forwardRef(function ResultModal({result, targetTime}, ref) {
    return (
    <dialog ref={ref} className="result-modal">
        <h2>You {result}</h2>
        <p>The Target time was <strong>{targetTime} seconds. </strong></p>
        <p>You stopped the timer with X seconds left.</p>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
    )
}); // we wrap the ResultModal function because it is going to receive the ref prop

export default ResultModal;