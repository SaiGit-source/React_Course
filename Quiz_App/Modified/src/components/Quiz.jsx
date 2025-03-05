import { useCallback, useState } from "react"
import QUESTIONS from '../questions.js'
import quizCompleteImage from '../assets/quiz-complete.png'
import QuestionTimer from "./QuestionTimer.jsx"


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


    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer){
        setUserAnswers((prevAnswers)=>{
            return [...prevAnswers, selectedAnswer]
        })
    }, []) // add selectedAnswer to the prevAnswers array. [] empty because we are not using any State or Props in handleSelectAnswer func. State updating funvtions dont require any dependencies
// 10 sec timer is 10000 milliseconds
// handleSelectAnswer(null) -> timer has expired but no answer is selected by user this is for the timeout event
// handleSelectAnswer(null) executes when timeout occurs, it changes 'userAnswers' state, which reloads App component, inturn calls QuestionTimer -> again timer is created
// but when ()=>handleSelectAnswer(null) function is executed -> a new object is created in memory -> work around is: 'useCallback' hook ensure functions dont get re-created in memory unless there is a need for it 
    const handleSkipAnswer = useCallback(
        ()=>handleSelectAnswer(null), [handleSelectAnswer]
    ) // handleSelectAnswer is the dependency

    return (
        <div id="quiz">
        <div id="question">
            <QuestionTimer
                key={activeQuestionIndex} 
                // 'activeQuestionIndex' changes when question changes therefore re-loads QuestionTimer component
                timeout={10000} 
                onTimeOut={handleSkipAnswer}>
                </QuestionTimer>
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