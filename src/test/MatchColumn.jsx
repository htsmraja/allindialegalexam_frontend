// import React from 'react'

// const MatchColumn = ({ question, answer = {}, saveAnswer }) => {

//     const handleMatch = (index, value) => {
//         saveAnswer(question.question_id, {
//             ...answer,
//             [index]: value
//         });
//     };

//     return (
//         <div>
//             <h4>{question.question_text}</h4>

//             {question.match_left.map((item, i) => (
//                 <div key={i} style={{ marginBottom: 10 }}>
//                     {item} →
//                     <select
//                         value={answer[i] || ""}
//                         onChange={(e) => handleMatch(i, e.target.value)}
//                     >
//                         <option value="">Select</option>
//                         {question.match_right.map((opt, j) => (
//                             <option key={j} value={opt}>
//                                 {opt}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//             ))}
//         </div>
//     )
// }




const MatchColumn = ({ question, answer = {}, saveAnswer }) => {
    const handleSelect = (leftPos, rightPos) => {
        saveAnswer(question.question_id, {
            ...answer,
            [leftPos]: Number(rightPos),   // FIXED
        });
    };

    return (
        <div>
            <h3>{question.question_text}</h3>

            <table border="1" cellPadding="8" style={{ width: "100%" }}>
                <thead>
                    <tr>
                        <th>Left</th>
                        <th>Match</th>
                        <th>Right</th>
                    </tr>
                </thead>
                <tbody>
                    {question.match_left.map((left, index) => (
                        <tr key={index}>
                            <td>{left}</td>

                            <td>
                                <select
                                    value={answer[index] || ""}
                                    onChange={(e) => handleSelect(index, e.target.value)}
                                >
                                    <option value="">Select</option>

                                    {question.match_right.map((right, rIndex) => (
                                        <option key={rIndex} value={rIndex}>
                                            {right}
                                        </option>
                                    ))}
                                </select>
                            </td>

                            <td>
                                {question.match_right[answer[index]] || ""}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default MatchColumn
