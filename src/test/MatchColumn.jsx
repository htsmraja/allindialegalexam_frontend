
// const MatchColumn = ({ question, answer = {}, saveAnswer }) => {
//     const handleSelect = (leftPos, rightPos) => {
//         saveAnswer(question.question_id, {
//             ...answer,
//             [leftPos]: Number(rightPos),   // FIXED
//         });
//     };

//     return (
//         <div>
//             <h3>{question.question_text}</h3>

//             <table border="1" cellPadding="8" style={{ width: "100%" }}>
//                 <thead>
//                     <tr>
//                         <th>Left</th>
//                         <th>Match</th>
//                         <th>Right</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {question.match_left.map((left, index) => (
//                         <tr key={index}>
//                             <td>{left}</td>

//                             <td>
//                                 <select
//                                     value={answer[index] || ""}
//                                     onChange={(e) => handleSelect(index, e.target.value)}
//                                 >
//                                     <option value="">Select</option>

//                                     {question.match_right.map((right, rIndex) => (
//                                         <option key={rIndex} value={rIndex}>
//                                             {right}
//                                         </option>
//                                     ))}
//                                 </select>
//                             </td>

//                             <td>
//                                 {question.match_right[answer[index]] || ""}
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };
// export default MatchColumn



const MatchColumn = ({ question, answer = {}, saveAnswer }) => {
    const handleSelect = (leftPos, rightPos) => {
        saveAnswer(question.question_id, {
            ...answer,
            [leftPos]: Number(rightPos),   // FIXED
        });
    };

    return (
        <div className='innerDtl'>
            <h4 className='mb20'>{question.question_text}</h4>

            <div className='table-responsive'>
                <table className='table table-bordered table-sm bg-light'>
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
                                        className='form-control pt0 input-sm' style={{ maxWidth: '250px' }}
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

        </div>
    );
};
export default MatchColumn
