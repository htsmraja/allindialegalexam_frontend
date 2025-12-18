import React from 'react'

const AssertionReason = ({ question, answer, saveAnswer }) => {
    const options = [
        { value: "1", label: "Both True and Reason explains Assertion" },
        { value: "2", label: "Both True but Reason does not explain Assertion" },
        { value: "3", label: "Assertion True, Reason False" },
        { value: "4", label: "Assertion False, Reason True" },
    ];

    return (
        <div>
            <h4>Assertion: {question.assertion}</h4>
            <h4>Reason: {question.reason}</h4>

            {options.map((opt) => (
                <label key={opt.value} style={{ display: "block" }}>
                    <input
                        type="radio"
                        name={question.question_id}
                        value={opt.value}
                        checked={answer === opt.value}
                        onChange={() => saveAnswer(question.question_id, opt.value)}
                    />
                    {opt.label}
                </label>
            ))}
        </div>
    )
}

export default AssertionReason
