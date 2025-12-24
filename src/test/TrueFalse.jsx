// import React from 'react'

// const TrueFalse = ({ question, answer, saveAnswer }) => {
//     return (
//         <div>
//             <h4>{question.question_text}</h4>

//             {question.true_false_options.map((val) => (
//                 <label key={val} style={{ display: "block" }}>
//                     <input
//                         type="radio"
//                         name={question.question_id}
//                         value={val}
//                         checked={answer === val}
//                         onChange={() => saveAnswer(question.question_id, val)}
//                     />
//                     {val}
//                 </label>
//             ))}
//         </div>
//     )
// }

// export default TrueFalse



import React from 'react'

const TrueFalse = ({ question, answer, saveAnswer }) => {
    return (
        <div className='innerDtl'>
            <h4 className='mb20'>{question.question_text}</h4>
            <div>
                <div className='row'>
                    {question.true_false_options.map((val, i) => (
                        <div className='col-sm-6 mb5' key={i}>
                            <label style={{ display: "block", marginBottom: 5 }}>
                                <input
                                    type="radio"
                                    name={question.question_id}
                                    value={val}
                                    checked={answer === val}
                                    onChange={() => saveAnswer(question.question_id, val)}
                                />
                                &nbsp;{val}
                            </label>
                        </div>
                    ))}

                </div>

            </div>

        </div>
    )
}

export default TrueFalse
