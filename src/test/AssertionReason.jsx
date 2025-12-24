import React from 'react'

const AssertionReason = ({ question, answer, saveAnswer }) => {
    const options = [
        { value: "1", label: "Both True and Reason explains Assertion" },
        { value: "2", label: "Both True but Reason does not explain Assertion" },
        { value: "3", label: "Assertion True, Reason False" },
        { value: "4", label: "Assertion False, Reason True" },
    ];

    return (
        <div className='innerDtl'>
            <h4 className='mb20'>Assertion: {question.assertion}</h4>
            <h4 className='mb20'>Reason: {question.reason}</h4>
            <div>
                <div className='row'>
                    {options.map((opt) => (
                        <div className='col-sm-6 mb5' key={opt.value} >
                            <label style={{ display: "block" }}>
                                <input
                                    type="radio"
                                    name={question.question_id}
                                    value={opt.value}
                                    checked={answer === opt.value}
                                    onChange={() => saveAnswer(question.question_id, opt.value)}
                                />
                                {opt.label}
                            </label>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default AssertionReason
