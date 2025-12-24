// import React from 'react'

// const Descriptive = ({ question, answer, saveAnswer }) => {
//     return (
//         <div>
//             <h4>{question.question_text}</h4>

//             <textarea
//                 rows="4"
//                 style={{ width: "100%" }}
//                 value={answer || ""}
//                 onChange={(e) =>
//                     saveAnswer(question.question_id, e.target.value)
//                 }
//             ></textarea>
//         </div>
//     )
// }

// export default Descriptive

import React from 'react'

const Descriptive = ({ question, answer, saveAnswer }) => {
    return (

        <div className='innerDtl'>
            <h4 className='mb20'>{question.question_text}</h4>
            <div>
                <textarea className='form-control mt10' rows={5} style={{ maxWidth: '700px' }} placeholder='Write your answer here' value={answer || ""}
                    onChange={(e) =>
                        saveAnswer(question.question_id, e.target.value)
                    }></textarea>

            </div>

        </div>
    )
}

export default Descriptive

