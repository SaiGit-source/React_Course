import { useState } from "react"
import Answers from "./Answers"
import QuestionTimer from "./QuestionTimer"
import QUESTIONS from "../questions.js"

export default function Question({questionIndex, onSelectAnswer, onSkipAnswer}){
    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    })

    function handleLocalSelectAnswer(answer) {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        })

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTIONS[questionIndex].answers[0]===answer
            })

            setTimeout(() => {
                onSelectAnswer(answer)
            }, 2000)
        }, 1000)
    }

    let localAnswerState=''
    if (answer.selectedAnswer && answer.isCorrect!==null){
        localAnswerState=answer.isCorrect ? 'correct' : 'wrong'
    } else if (answer.selectedAnswer){
        localAnswerState='answered'
    }

    return (
            <div id="question">
                        <QuestionTimer

                            // 'activeQuestionIndex' changes when question changes therefore re-loads QuestionTimer component
                            timeout={10000} 
                            onTimeOut={onSkipAnswer}>
                            </QuestionTimer>
                        <h2>{QUESTIONS[questionIndex].text}</h2>

            {/* we want to re-shuffle only when 'activeQuestionIndex' changes
            key prop will force React to destroy and re-create component
            just moving Answers logic into a separate component but adding key works! */}
                    <Answers 
                        answers={QUESTIONS[questionIndex].answers} 
                        selectedAnswer={answer.selectedAnswer}
                        answerState={localAnswerState}
                        onSelect={handleLocalSelectAnswer}
                        ></Answers>            
        </div>
    )
}