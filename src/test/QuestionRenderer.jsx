
import React from "react";
import MCQ from "./MCQ";
import TrueFalse from "./TrueFalse";
import MatchColumn from "./MatchColumn";
import AssertionReason from "./AssertionReason";
import Descriptive from "./Descriptive";

const QuestionRenderer = ({ question, answer, saveAnswer }) => {
    switch (question.question_type) {
        case "MCQ":
            return (
                <MCQ
                    question={question}
                    answer={answer}
                    saveAnswer={saveAnswer}
                />
            );

        case "TRUE_FALSE":
            return (
                <TrueFalse
                    question={question}
                    answer={answer}
                    saveAnswer={saveAnswer}
                />
            );

        case "DESCRIPTIVE":
            return (
                <Descriptive
                    question={question}
                    answer={answer}
                    saveAnswer={saveAnswer}
                />
            );

        case "ASSERTION_REASON":
            return (
                <AssertionReason
                    question={question}
                    answer={answer}
                    saveAnswer={saveAnswer}
                />
            );

        case "MATCH_COLUMN":
            return (
                <MatchColumn
                    question={question}
                    answer={answer}
                    saveAnswer={saveAnswer}
                />
            );

        default:
            return <div>{question.question_text}</div>;
    }
};

export default QuestionRenderer;



// const Descriptive = ({ question, answer, saveAnswer }) => {
//     return (
//         <div>
//             <h4>{question.question_text}</h4>
//             <textarea
//                 rows="4"
//                 style={{ width: "100%" }}
//                 value={answer || ""}
//                 onChange={(e) => saveAnswer(question.id, e.target.value)}
//             ></textarea>
//         </div>
//     );
// };

// ===============================================
// ASSERTION REASON
// ===============================================
// const AssertionReason = ({ question, answer, saveAnswer }) => {
//     const options = [
//         { value: "1", label: "Both True and Reason explains Assertion" },
//         { value: "2", label: "Both True but Reason does not explain Assertion" },
//         { value: "3", label: "Assertion True, Reason False" },
//         { value: "4", label: "Assertion False, Reason True" },
//     ];

//     return (
//         <div>
//             <h4>Assertion: {question.assertion}</h4>
//             <h4>Reason: {question.reason}</h4>

//             {options.map((opt) => (
//                 <label key={opt.value} style={{ display: "block" }}>
//                     <input
//                         type="radio"
//                         name={question.id}
//                         value={opt.value}
//                         checked={answer === opt.value}
//                         onChange={() => saveAnswer(question.id, opt.value)}
//                     />
//                     {opt.label}
//                 </label>
//             ))}
//         </div>
//     );
// };

// ===============================================
// MATCH THE COLUMN
// ===============================================
// const MatchColumn = ({ question, answer = {}, saveAnswer }) => {
//     const handleMatch = (i, value) => {
//         saveAnswer(question.id, { ...answer, [i]: value });
//     };

//     return (
//         <div>
//             <h4>Match the Following</h4>

//             {question.match_left.map((itemA, i) => (
//                 <div key={i} style={{ marginBottom: 10 }}>
//                     {itemA} →
//                     <select
//                         value={answer[i] || ""}
//                         onChange={(e) => handleMatch(i, e.target.value)}
//                     >
//                         <option value="">Select</option>
//                         {question.match_right.map((itemB, j) => (
//                             <option key={j} value={itemB}>
//                                 {itemB}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//             ))}
//         </div>
//     );
// };

