import React from 'react'

const TrueFalse = ({ question, answer, saveAnswer }) => {
    return (
        <div>
            <h4>{question.question_text}</h4>

            {question.true_false_options.map((val) => (
                <label key={val} style={{ display: "block" }}>
                    <input
                        type="radio"
                        name={question.question_id}
                        value={val}
                        checked={answer === val}
                        onChange={() => saveAnswer(question.question_id, val)}
                    />
                    {val}
                </label>
            ))}
        </div>
    )
}

export default TrueFalse
