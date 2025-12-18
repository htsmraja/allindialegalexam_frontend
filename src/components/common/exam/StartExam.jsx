import React, { useEffect, useState } from 'react'
import { useCommonContext } from '../../../context/commonContext'
import { useLocation, useNavigate } from 'react-router-dom';
import QuestionRenderer from '../../../test/QuestionRenderer';

const StartExam = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const id = state?.id;

    const { getPaperQuestions, paperQuestionList, submitAttempt } = useCommonContext();

    const [questions, setQuestions] = useState([]);
    const [index, setIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [timeLeft, setTimeLeft] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    // Fetch exam paper
    useEffect(() => {
        if (id) getPaperQuestions(id);
    }, [id]);

    // Load questions + timer
    useEffect(() => {
        if (paperQuestionList?.data?.questions?.length > 0) {
            setQuestions(paperQuestionList.data.questions);

            const totalSeconds =
                (paperQuestionList?.data?.paper?.total_duration_minutes || 30) * 60;

            setTimeLeft(totalSeconds);
        }
    }, [paperQuestionList]);

    const currentQuestion = questions[index];

    // Countdown timer
    useEffect(() => {
        if (timeLeft <= 0 || submitted) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft, submitted]);

    // Auto-submit when timer ends
    useEffect(() => {
        if (timeLeft === 0 && questions.length > 0 && !submitted) {
            submitExam("timeout");
        }
    }, [timeLeft, submitted]);

    // Auto-submit on tab close, refresh, URL change, minimize, or switch tab
    useEffect(() => {
        const handleUnload = (e) => {
            if (!submitted) submitExam("interrupted");
        };

        const handleVisibilityChange = () => {
            if (!submitted && document.visibilityState === "hidden") {
                submitExam("interrupted");
            }
        };

        window.addEventListener("beforeunload", handleUnload);
        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            window.removeEventListener("beforeunload", handleUnload);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, [answers, submitted]);

    const formatTime = () => {
        const mins = Math.floor(timeLeft / 60);
        const secs = timeLeft % 60;
        return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    };

    const saveAnswer = (qid, value) => {
        setAnswers((prev) => ({
            ...prev,
            [qid]: value,
        }));
    };

    const nextQuestion = () => {
        if (index < questions.length - 1) setIndex(index + 1);
    };

    const prevQuestion = () => {
        if (index > 0) setIndex(index - 1);
    };

    // FINAL SUBMIT FUNCTION
    const submitExam = (customStatus = "submitted") => {
        if (submitted) return; // prevent duplicate submits
        setSubmitted(true);

        const payload = {
            attempt_id: state?.attempt_id,
            status: customStatus, // submitted | timeout | interrupted
            answers
        };

        submitAttempt(payload);

        // Navigate to home page after submission
        navigate("/");
    };

    if (!paperQuestionList?.data?.paper) {
        return <div style={{ padding: 40 }}>Loading exam...</div>;
    }

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
                    answer={answers[currentQuestion.question_id]}
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
                        onClick={() => submitExam("submitted")}
                    >
                        Submit Exam
                    </button>
                )}
            </div>

            <p style={{ marginTop: 10 }}>
                Question {index + 1} / {questions.length}
            </p>
        </div>
    )
}

export default StartExam;
