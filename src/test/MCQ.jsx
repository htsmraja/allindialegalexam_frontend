import React from 'react'

const MCQ = ({ question, answer, saveAnswer }) => {
    return (
        <div>
            <h4>{question.question_text}</h4>

            {question.options.map((opt, i) => (
                <label key={i} style={{ display: "block", marginBottom: 5 }}>
                    <input
                        type="radio"
                        name={question.question_id}
                        value={opt.option_text}
                        checked={answer === opt.option_text}
                        onChange={() =>
                            saveAnswer(question.question_id, opt.option_text)
                        }
                    />
                    {opt.option_text}
                </label>
            ))}
        </div>
    )
}

export default MCQ
