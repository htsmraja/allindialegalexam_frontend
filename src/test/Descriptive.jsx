import React from 'react'

const Descriptive = ({ question, answer, saveAnswer }) => {
    return (
        <div>
            <h4>{question.question_text}</h4>

            <textarea
                rows="4"
                style={{ width: "100%" }}
                value={answer || ""}
                onChange={(e) =>
                    saveAnswer(question.question_id, e.target.value)
                }
            ></textarea>
        </div>
    )
}

export default Descriptive
