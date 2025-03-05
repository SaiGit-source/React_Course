import { useState } from "react"
import QUESTIONS from '../questions.js'
import quizCompleteImage from '../assets/quiz-complete.png'

// idea is to change questions when user answers them then store answers in useState()
export default function Quiz(){
    // const [activeQuestionIndex, setActiveQuestionIndex] = useState(0)
    // it tells which question should be displayed to the user
    // however i dont need to keep track of the activeQuestionIndex if i store answers anyways. i can derive from the asnwers array
    const [userAnswers, setUserAnswers] = useState([])

    // derived state from userAnswers for activeQuestionIndex
    const activeQuestionIndex = userAnswers.length
    const quizIsComplete = activeQuestionIndex===QUESTIONS.length
    // we cant exceed the number of questions we have otherwise it throws an error

    if (quizIsComplete){
        return (
            <div id="summary">
                <img src={quizCompleteImage} alt="Trophy icon"></img>
                <h2>Quiz completed!</h2>
            </div>
        )
    }

    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers]
    shuffledAnswers.sort(()=>Math.random()-0.5) // return => negative number they will swap otherwise they will stay in the order they are. opposite to Java sort


    function handleSelectAnswer(selectedAnswer){
        setUserAnswers((prevAnswers)=>{
            return [...prevAnswers, selectedAnswer]
        })
    } // add selectedAnswer to the prevAnswers array

    return (
        <div id="quiz">
        <div id="question">
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
            <ul id="answers">
                {shuffledAnswers.map(answer => (
                    <li key={answer} className="answer">
                        <button onClick={()=>handleSelectAnswer(answer)}>{answer}</button>
                    </li>
                ))
            }
            </ul>
        </div>
        </div>
    )
}