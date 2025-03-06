import { useRef } from "react"

export default function Answers({answers, selectedAnswer, answerState, onSelect}){

    // we want to shuffle this answers only once
    // value wont change if some component function is executed
    const shuffledAnswers = useRef()

    if (shuffledAnswers.current===undefined){
        // i will not shuffle them again even if component function executes again or reloads
        // we want to shuffle this answers only once thats why we are using useRef()
        // shuffledAnswers.current = [...QUESTIONS[activeQuestionIndex].answers]
        
        shuffledAnswers.current = [...answers]
        shuffledAnswers.current.sort(()=>Math.random()-0.5) // return => negative number they will swap otherwise they will stay in the order they are. opposite to Java sort
    }

    return (
        <ul id="answers">
        {shuffledAnswers.current.map(answer =>
            {
                const isSelected = selectedAnswer===answer
                let cssClass = ''
                if (answerState === 'answered' && isSelected){
                    cssClass='selected'
                }

                if ((answerState==='correct' || answerState==='wrong') && isSelected){
                    cssClass=answerState
                }
                return (
                    <li key={answer} className="answer">
                    <button onClick={()=>onSelect(answer)} 
                        className={cssClass} 
                        disabled={answerState!==''}>
                            {answer}</button>
                    </li>
                )
            }
        )
    }
    </ul>

    )
}