// import React from 'react'

// const MCQ = ({ question, answer, saveAnswer }) => {
//     return (
//         <div className='innerDtl'>
//             <h4 className='mb20'>{question.question_text}</h4>

//             {question.options.map((opt, i) => (
//                 <label key={i} style={{ display: "block", marginBottom: 5 }}>
//                     <input
//                         type="radio"
//                         name={question.question_id}
//                         value={opt.option_text}
//                         checked={answer === opt.option_text}
//                         onChange={() =>
//                             saveAnswer(question.question_id, opt.option_text)
//                         }
//                     />
//                     {opt.option_text}
//                 </label>
//             ))}
//         </div>
//     )
// }

// export default MCQ


import React from 'react'

const MCQ = ({ question, answer, saveAnswer }) => {
    return (
        <div className='innerDtl'>
            <h4 className='mb20'>{question.question_text}</h4>
            <div>
                <div className='row'>
                    {question.options.map((opt, i) => (
                        <div className='col-sm-6 mb5' key={i}>
                            <label style={{ display: "block", marginBottom: 5 }}>
                                <input
                                    type="radio"
                                    name={question.question_id}
                                    value={opt.option_text}
                                    checked={answer === opt.option_text}
                                    onChange={() =>
                                        saveAnswer(question.question_id, opt.option_text)
                                    }
                                />
                                &nbsp;{opt.option_text}
                            </label>
                        </div>
                    ))}

                </div>

            </div>

        </div>
    )
}

export default MCQ
