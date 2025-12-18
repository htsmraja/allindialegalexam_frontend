// ExamPage.jsx
import React, { useEffect, useState } from "react";
import QuestionRenderer from "./QuestionRenderer";

const ExamPage = () => {
    const [questions, setQuestions] = useState([]);
    const [index, setIndex] = useState(0); // current question index
    const [answers, setAnswers] = useState({}); // store answers
    const [timeLeft, setTimeLeft] = useState(300); // 5 minutes

    // ---------------- Timer ----------------
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = () => {
        const mins = Math.floor(timeLeft / 60);
        const secs = timeLeft % 60;
        return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    };

    // ---------------- Load Questions ----------------
    useEffect(() => {
        setQuestions([
            { id: 1, type: "MCQ", text: "Capital of India?", options: ["Delhi", "Kolkata", "Chennai", "Mumbai"] },
            { id: 2, type: "TRUE_FALSE", text: "The earth is flat." },
            { id: 3, type: "DESCRIPTIVE", text: "Explain photosynthesis." },
            { id: 4, type: "ASSERTION_REASON", assertion: "Metals conduct electricity.", reason: "They have free electrons." },
            { id: 5, type: "MATCH_COLUMN", colA: ["Dog", "Cat"], colB: ["Meow", "Bark"] }
        ]);
    }, []);

    const currentQuestion = questions[index];

    // ---------------- Store Answer ----------------
    const saveAnswer = (qid, value) => {
        setAnswers((prev) => ({
            ...prev,
            [qid]: value,
        }));
    };

    // ---------------- Navigation ----------------
    const nextQuestion = () => {
        if (index < questions.length - 1) setIndex(index + 1);
    };

    const prevQuestion = () => {
        if (index > 0) setIndex(index - 1);
    };

    // ---------------- Submit ----------------
    const submitExam = () => {
        console.log("Submitted Answers:", answers);

        alert("Exam Submitted!");
    };

    return (
        <div style={{ padding: 40, maxWidth: 700, margin: "auto" }}>
            <h2>Online Exam</h2>

            {/* Timer */}
            <div
                style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    marginBottom: 20,
                    color: timeLeft < 30 ? "red" : "black",
                }}
            >
                Time Left: {formatTime()}
            </div>

            {/* Question */}
            {currentQuestion && (
                <QuestionRenderer
                    question={currentQuestion}
                    answer={answers[currentQuestion.id]}
                    saveAnswer={saveAnswer}
                />
            )}

            {/* Navigation Buttons */}
            <div style={{ marginTop: 30, display: "flex", gap: 10 }}>
                <button disabled={index === 0} onClick={prevQuestion}>
                    ⬅ Previous
                </button>

                {index < questions.length - 1 ? (
                    <button onClick={nextQuestion}>Next ➡</button>
                ) : (
                    <button
                        style={{ background: "green", color: "white", padding: "10px 20px" }}
                        onClick={submitExam}
                    >
                        Submit Exam
                    </button>
                )}
            </div>

            <p style={{ marginTop: 10 }}>
                Question {index + 1} / {questions.length}
            </p>
        </div>
    );
};

export default ExamPage;
