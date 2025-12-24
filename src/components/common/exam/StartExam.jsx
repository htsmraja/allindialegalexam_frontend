// import React, { useEffect, useState } from 'react'
// import { useCommonContext } from '../../../context/commonContext'
// import { useLocation, useNavigate } from 'react-router-dom';
// import QuestionRenderer from '../../../test/QuestionRenderer';

// const StartExam = () => {
//     const { state } = useLocation();
//     const navigate = useNavigate();
//     const id = state?.id;

//     const { getPaperQuestions, paperQuestionList, submitAttempt } = useCommonContext();

//     const [questions, setQuestions] = useState([]);
//     const [index, setIndex] = useState(0);
//     const [answers, setAnswers] = useState({});
//     const [timeLeft, setTimeLeft] = useState(0);
//     const [submitted, setSubmitted] = useState(false);

//     // Fetch exam paper
//     useEffect(() => {
//         if (id) getPaperQuestions(id);
//     }, [id]);

//     // Load questions + timer
//     useEffect(() => {
//         if (paperQuestionList?.data?.questions?.length > 0) {
//             setQuestions(paperQuestionList.data.questions);

//             const totalSeconds =
//                 (paperQuestionList?.data?.paper?.total_duration_minutes || 30) * 60;

//             setTimeLeft(totalSeconds);
//         }
//     }, [paperQuestionList]);

//     const currentQuestion = questions[index];

//     // Countdown timer
//     useEffect(() => {
//         if (timeLeft <= 0 || submitted) return;

//         const timer = setInterval(() => {
//             setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
//         }, 1000);

//         return () => clearInterval(timer);
//     }, [timeLeft, submitted]);

//     // Auto-submit when timer ends
//     useEffect(() => {
//         if (timeLeft === 0 && questions.length > 0 && !submitted) {
//             submitExam("timeout");
//         }
//     }, [timeLeft, submitted]);

//     // Auto-submit on tab close, refresh, URL change, minimize, or switch tab
//     useEffect(() => {
//         const handleUnload = (e) => {
//             if (!submitted) submitExam("interrupted");
//         };

//         const handleVisibilityChange = () => {
//             if (!submitted && document.visibilityState === "hidden") {
//                 submitExam("interrupted");
//             }
//         };

//         window.addEventListener("beforeunload", handleUnload);
//         document.addEventListener("visibilitychange", handleVisibilityChange);

//         return () => {
//             window.removeEventListener("beforeunload", handleUnload);
//             document.removeEventListener("visibilitychange", handleVisibilityChange);
//         };
//     }, [answers, submitted]);

//     const formatTime = () => {
//         const mins = Math.floor(timeLeft / 60);
//         const secs = timeLeft % 60;
//         return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
//     };

//     const saveAnswer = (qid, value) => {
//         setAnswers((prev) => ({
//             ...prev,
//             [qid]: value,
//         }));
//     };

//     const nextQuestion = () => {
//         if (index < questions.length - 1) setIndex(index + 1);
//     };

//     const prevQuestion = () => {
//         if (index > 0) setIndex(index - 1);
//     };

//     // FINAL SUBMIT FUNCTION
//     const submitExam = (customStatus = "submitted") => {
//         if (submitted) return; // prevent duplicate submits
//         setSubmitted(true);

//         const payload = {
//             attempt_id: state?.attempt_id,
//             status: customStatus, // submitted | timeout | interrupted
//             answers
//         };

//         submitAttempt(payload);

//         // Navigate to home page after submission
//         navigate("/");
//     };

//     if (!paperQuestionList?.data?.paper) {
//         return <div style={{ padding: 40 }}>Loading exam...</div>;
//     }

//     return (
//         <div style={{ padding: 40, maxWidth: 700, margin: "auto" }}>
//             <h2>Online Exam</h2>

//             {/* Timer */}
//             <div
//                 style={{
//                     fontSize: 20,
//                     fontWeight: "bold",
//                     marginBottom: 20,
//                     color: timeLeft < 30 ? "red" : "black",
//                 }}
//             >
//                 Time Left: {formatTime()}
//             </div>

//             {/* Question */}
//             {currentQuestion && (
//                 <QuestionRenderer
//                     question={currentQuestion}
//                     answer={answers[currentQuestion.question_id]}
//                     saveAnswer={saveAnswer}
//                 />
//             )}

//             {/* Navigation Buttons */}
//             <div style={{ marginTop: 30, display: "flex", gap: 10 }}>
//                 <button disabled={index === 0} onClick={prevQuestion}>
//                     ⬅ Previous
//                 </button>

//                 {index < questions.length - 1 ? (
//                     <button onClick={nextQuestion}>Next ➡</button>
//                 ) : (
//                     <button
//                         style={{ background: "green", color: "white", padding: "10px 20px" }}
//                         onClick={() => submitExam("submitted")}
//                     >
//                         Submit Exam
//                     </button>
//                 )}
//             </div>

//             <p style={{ marginTop: 10 }}>
//                 Question {index + 1} / {questions.length}
//             </p>
//         </div>
//     )
// }

// export default StartExam;


// import React, { useEffect, useState } from 'react'
// import { useCommonContext } from '../../../context/commonContext'
// import { useLocation, useNavigate } from 'react-router-dom';
// import QuestionRenderer from '../../../test/QuestionRenderer';

// const StartExam = () => {
//   const { state } = useLocation();
//   const navigate = useNavigate();
//   const id = state?.id;

//   const { getPaperQuestions, paperQuestionList, submitAttempt } = useCommonContext();

//   const [questions, setQuestions] = useState([]);
//   const [index, setIndex] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [timeLeft, setTimeLeft] = useState(0);
//   const [submitted, setSubmitted] = useState(false);

//   // Fetch exam paper
//   useEffect(() => {
//     if (id) getPaperQuestions(id);
//   }, [id]);

//   // Load questions + timer
//   useEffect(() => {
//     if (paperQuestionList?.data?.questions?.length > 0) {
//       setQuestions(paperQuestionList.data.questions);

//       const totalSeconds =
//         (paperQuestionList?.data?.paper?.total_duration_minutes || 30) * 60;

//       setTimeLeft(totalSeconds);
//     }
//   }, [paperQuestionList]);

//   const currentQuestion = questions[index];

//   // Countdown timer
//   useEffect(() => {
//     if (timeLeft <= 0 || submitted) return;

//     const timer = setInterval(() => {
//       setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [timeLeft, submitted]);

//   // Auto-submit when timer ends
//   useEffect(() => {
//     if (timeLeft === 0 && questions.length > 0 && !submitted) {
//       submitExam("timeout");
//     }
//   }, [timeLeft, submitted]);

//   // Auto-submit on tab close, refresh, URL change, minimize, or switch tab
//   useEffect(() => {
//     const handleUnload = (e) => {
//       if (!submitted) submitExam("interrupted");
//     };

//     const handleVisibilityChange = () => {
//       if (!submitted && document.visibilityState === "hidden") {
//         submitExam("interrupted");
//       }
//     };

//     window.addEventListener("beforeunload", handleUnload);
//     document.addEventListener("visibilitychange", handleVisibilityChange);

//     return () => {
//       window.removeEventListener("beforeunload", handleUnload);
//       document.removeEventListener("visibilitychange", handleVisibilityChange);
//     };
//   }, [answers, submitted]);

//   const formatTime = () => {
//     const mins = Math.floor(timeLeft / 60);
//     const secs = timeLeft % 60;
//     return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
//   };

//   const saveAnswer = (qid, value) => {
//     setAnswers((prev) => ({
//       ...prev,
//       [qid]: value,
//     }));
//   };

//   const nextQuestion = () => {
//     if (index < questions.length - 1) setIndex(index + 1);
//   };

//   const prevQuestion = () => {
//     if (index > 0) setIndex(index - 1);
//   };

//   // FINAL SUBMIT FUNCTION
//   const submitExam = (customStatus = "submitted") => {
//     if (submitted) return; // prevent duplicate submits
//     setSubmitted(true);

//     const payload = {
//       attempt_id: state?.attempt_id,
//       status: customStatus, // submitted | timeout | interrupted
//       answers
//     };

//     submitAttempt(payload);

//     // Navigate to home page after submission
//     navigate("/");
//   };

//   if (!paperQuestionList?.data?.paper) {
//     return <div style={{ padding: 40 }}>Loading exam...</div>;
//   }

//   return (
//     <>
//       <div className='container'>
//         {/* Mock Test part start */}
//         <div className='mockTestBx'>
//           <div className='row'>
//             {/* left part start */}
//             <div className='col-md-9 col-sm-8 col-12'>
//               <div className='dtlPart'>
//                 <div className='headTitel'>Online Exam</div>

//                 {currentQuestion && (
//                   <QuestionRenderer
//                     question={currentQuestion}
//                     answer={answers[currentQuestion.question_id]}
//                     saveAnswer={saveAnswer}
//                   />
//                 )}
//                 <div className='dtlFooter'>
//                   <button disabled={index === 0} onClick={prevQuestion}>⬅ Previous</button>
//                   <h5>Question {index + 1} / {questions.length}</h5>
//                   {index < questions.length - 1 ? (
//                     <button style={{}} onClick={nextQuestion}>Save & Next ➡</button>
//                   ) : (
//                     <button
//                       style={{}}
//                       onClick={() => submitExam("submitted")}
//                     >
//                       Submit Exam
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </div>
//             {/* left part end */}

//             {/* right part start */}
//             <div className='col-md-3 col-sm-4 col-12'>
//               <div className='leftSidebar'>
//                 <div className='headTitel'>Time Left</div>
//                 <div className='innerDtl'>
//                   <div className='timer'>
//                     <h5>
//                       00
//                       <span>hours</span>
//                     </h5>
//                     <h5>
//                       42
//                       <span>minutes</span>
//                     </h5>
//                     <h5>
//                       34
//                       <span>Seconds</span>
//                     </h5>
//                   </div>
//                 </div>
//                 <div className='headTitel'>Quant</div>
//                 <div className='innerDtl'>
//                   <ul className='qusCount'>
//                     <li><button className='attempted'>1</button></li>
//                     <li><button className='attempted'>2</button></li>
//                     <li><button className='attempted'>3</button></li>
//                     <li><button className='attempted'>4</button></li>
//                     <li><button className='attempted'>5</button></li>
//                     <li><button className='attempted'>6</button></li>
//                     <li><button className='attempted'>7</button></li>
//                     <li><button className='attempted'>8</button></li>
//                     <li><button>9</button></li>
//                     <li><button>10</button></li>
//                     <li><button>11</button></li>
//                     <li><button>12</button></li>
//                     <li><button className='attempted'>13</button></li>
//                     <li><button className='attempted'>14</button></li>
//                     <li><button className='attempted'>15</button></li>
//                     <li><button className='attempted'>16</button></li>
//                     <li><button className='attempted'>17</button></li>
//                     <li><button>18</button></li>
//                     <li><button>19</button></li>
//                     <li><button className='current'>20</button></li>
//                     <li><button>21</button></li>
//                     <li><button>22</button></li>
//                     <li><button>23</button></li>
//                     <li><button>24</button></li>
//                     <li><button>25</button></li>
//                     <li><button className='attempted'>26</button></li>
//                     <li><button className='attempted'>27</button></li>
//                     <li><button>28</button></li>
//                     <li><button>29</button></li>
//                     <li><button>30</button></li>
//                   </ul>
//                 </div>
//                 <div className='indicator'>
//                   <ul>
//                     <li className='current'><span></span> Current</li>
//                     <li className='answered'><span></span> Answered</li>
//                     <li><span></span> Not Attempted</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//             {/* right part end */}
//           </div>
//         </div>
//         {/* Mock Test part end */}
//       </div>
//     </>
//   )
// }

// export default StartExam;


import React, { useEffect, useState } from 'react'
import { useCommonContext } from '../../../context/commonContext'
import { useLocation, useNavigate } from 'react-router-dom'
import QuestionRenderer from '../../../test/QuestionRenderer'

const StartExam = () => {
  const { state } = useLocation()
  const navigate = useNavigate()
  const paperId = state?.id

  const { getPaperQuestions, paperQuestionList, submitAttempt } = useCommonContext()

  const [questions, setQuestions] = useState([])
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [timeLeft, setTimeLeft] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  /* ================= FETCH QUESTIONS ================= */
  useEffect(() => {
    if (paperId) getPaperQuestions(paperId)
  }, [paperId])

  /* ================= LOAD QUESTIONS & TIMER ================= */
  useEffect(() => {
    if (paperQuestionList?.data?.questions?.length > 0) {
      setQuestions(paperQuestionList.data.questions)

      const totalSeconds =
        (paperQuestionList?.data?.paper?.total_duration_minutes || 30) * 60

      setTimeLeft(totalSeconds)
    }
  }, [paperQuestionList])

  const currentQuestion = questions[index]

  /* ================= TIMER ================= */
  useEffect(() => {
    if (timeLeft <= 0 || submitted) return

    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft, submitted])

  /* ================= AUTO SUBMIT ON TIMEOUT ================= */
  useEffect(() => {
    if (timeLeft === 0 && questions.length > 0 && !submitted) {
      submitExam('timeout')
    }
  }, [timeLeft])

  /* ================= AUTO SUBMIT ON TAB SWITCH / REFRESH ================= */
  useEffect(() => {
    const handleUnload = () => {
      if (!submitted) submitExam('interrupted')
    }

    const handleVisibility = () => {
      if (document.visibilityState === 'hidden' && !submitted) {
        submitExam('interrupted')
      }
    }

    window.addEventListener('beforeunload', handleUnload)
    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      window.removeEventListener('beforeunload', handleUnload)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [submitted])

  /* ================= TIME FORMAT ================= */
  const getTimeParts = () => {
    const hours = Math.floor(timeLeft / 3600)
    const minutes = Math.floor((timeLeft % 3600) / 60)
    const seconds = timeLeft % 60
    return { hours, minutes, seconds }
  }

  const { hours, minutes, seconds } = getTimeParts()

  /* ================= ANSWER SAVE ================= */
  const saveAnswer = (qid, value) => {
    setAnswers(prev => ({ ...prev, [qid]: value }))
  }

  /* ================= NAVIGATION ================= */
  const nextQuestion = () => {
    if (index < questions.length - 1) setIndex(index + 1)
  }

  const prevQuestion = () => {
    if (index > 0) setIndex(index - 1)
  }

  const goToQuestion = (i) => {
    setIndex(i)
  }

  /* ================= SUBMIT ================= */
  const submitExam = (status = 'submitted') => {
    if (submitted) return
    setSubmitted(true)

    submitAttempt({
      attempt_id: state?.attempt_id,
      status,
      answers
    })

    navigate('/')
  }

  if (!paperQuestionList?.data?.paper) {
    return <div style={{ padding: 40 }}>Loading exam...</div>
  }

  /* ================= UI ================= */
  return (
    <div className='container'>
      <div className='mockTestBx'>
        <div className='row'>

          {/* LEFT SIDE */}
          <div className='col-md-9 col-sm-8 col-12'>
            <div className='dtlPart'>
              <div className='headTitel'>Online Exam</div>

              {currentQuestion && (
                <QuestionRenderer
                  question={currentQuestion}
                  answer={answers[currentQuestion.question_id]}
                  saveAnswer={saveAnswer}
                />
              )}

              <div className='dtlFooter'>
                <button disabled={index === 0} onClick={prevQuestion}>
                  ⬅ Previous
                </button>

                <h5>
                  Question {index + 1} / {questions.length}
                </h5>

                {index < questions.length - 1 ? (
                  <button onClick={nextQuestion}>
                    Save & Next ➡
                  </button>
                ) : (
                  <button onClick={() => submitExam('submitted')}>
                    Submit Exam
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className='col-md-3 col-sm-4 col-12'>
            <div className='leftSidebar'>

              <div className='headTitel'>Time Left</div>
              <div className='innerDtl'>
                <div className='timer'>
                  <h5>{String(hours).padStart(2, '0')}<span>hours</span></h5>
                  <h5>{String(minutes).padStart(2, '0')}<span>minutes</span></h5>
                  <h5>{String(seconds).padStart(2, '0')}<span>seconds</span></h5>
                </div>
              </div>

              <div className='headTitel'>Questions</div>
              <div className='innerDtl'>
                <ul className='qusCount'>
                  {questions.map((q, i) => {
                    const isAnswered = answers[q.question_id] !== undefined
                    const isCurrent = i === index

                    return (
                      <li key={q.question_id}>
                        <button
                          className={`${isCurrent ? 'current' : ''} ${isAnswered ? 'attempted' : ''}`}
                          onClick={() => goToQuestion(i)}
                        >
                          {i + 1}
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </div>

              <div className='indicator'>
                <ul>
                  <li className='current'><span></span> Current</li>
                  <li className='answered'><span></span> Answered</li>
                  <li><span></span> Not Attempted</li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default StartExam
