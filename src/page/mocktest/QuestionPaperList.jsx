import React, { useEffect } from "react";
import { useCommonContext } from "../../context/commonContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CommonLayout from "../../components/common_for_website/CommonLayout";
import Empaty from "../../components/common_for_website/Empaty";

const QuestionPaperList = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const id = state?.id;

    const { getQuestionPaperList, questionPaperList, startAttempt, fileUrl, downloadAnswerSheet } = useCommonContext();

    useEffect(() => {
        if (id) getQuestionPaperList(id);
    }, [id]);

    const papers = questionPaperList?.data?.papers || [];
    const examTypeName = questionPaperList?.data?.exam_type_name || "";

    const handleStart1 = (e, item) => {
        e.preventDefault();
        navigate("/question-paper-list/start-exam", {
            state: { id: item.question_paper_id }
        });
    };

    const handleStart = async (e, item) => {
        e.preventDefault();

        await startAttempt(item.question_paper_id);
    };


    // console.log(questionPaperList, "questionPaperList")
    return (
        <div className="innerPageBx">
            <CommonLayout>

                {/* Breadcrumb */}
                <nav className="breadcrumb-nav">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li><Link to="/">Home</Link></li>
                            <li className="active">Question Paper List</li>
                        </ol>
                    </div>
                </nav>

                <br /><br />
                {/* Mock Test Info Box */}
                <div className="container">
                    <div className="mock-info-box" style={{
                        background: "#fff",
                        padding: "20px",
                        borderRadius: "8px",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                        marginBottom: "25px"
                    }}>
                        <h2 className="fw-bold mt0 mb0">Mock Test Details</h2>
                        <hr className="mt5 mb5" />
                        <p className="mb5">
                            <strong>Exam:</strong> {questionPaperList?.data?.exam_type_name}
                        </p>
                        <p className="mb5">
                            <strong>Title:</strong> {questionPaperList?.data?.title}
                        </p>
                        <p className="mb5">
                            <strong>Subtitle:</strong> {questionPaperList?.data?.subtitle}
                        </p>
                        <p className="mb0">
                            <strong>Description:</strong> {questionPaperList?.data?.description}
                        </p>
                    </div>
                </div>

                {/* Paper List Table */}
                <section className="container">
                    {papers.length === 0 ? (
                        <Empaty />
                    ) : (
                        <div className="table-responsive shadow-sm" style={{ borderRadius: "8px" }}>
                            <table className="table table-hover table-bordered align-middle">
                                <thead style={{ background: "#f5f6f9" }}>
                                    <tr>
                                        <th style={{ width: "60px" }}>#</th>
                                        <th style={{ width: "150px" }}>Type</th>
                                        <th>Paper Name</th>
                                        <th style={{ width: "140px" }}>Marks</th>
                                        <th style={{ width: "140px" }}>Duration</th>
                                        <th style={{ width: "140px" }}>Attempts</th>
                                        <th style={{ width: "150px" }}>Start Exam</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {papers.map((item, index) => (
                                        <tr key={item.id}>
                                            <td className="text-center">{index + 1}</td>

                                            <td>
                                                <span className="fw-semibold">{examTypeName}</span>
                                            </td>

                                            <td>
                                                <span className="fw-semibold">{item.paper_title}</span>
                                            </td>

                                            <td className="text-center">
                                                <strong>{item.total_marks}</strong>
                                            </td>

                                            <td className="text-center">
                                                <strong>{item.total_duration_minutes} mins</strong>
                                            </td>

                                            <td className="text-center">
                                                <strong>
                                                    {item.user_attempts === 0
                                                        ? `You haven't attempted yet. ${item.attempt_limit} attempts available`
                                                        : `Out of ${item.attempt_limit} attempts, you attempted ${item.user_attempts}`}
                                                </strong>
                                            </td>


                                            <td className="text-center">
                                                <button
                                                    className="btn btn-primary btn-sm"
                                                    style={{
                                                        padding: "6px 14px",
                                                        borderRadius: "5px",
                                                        fontWeight: "500"
                                                    }}
                                                    onClick={(e) => handleStart(e, item)}
                                                >
                                                    Start Exam
                                                </button>
                                            </td>

                                            <td className="text-center">
                                                <button
                                                    onClick={() => downloadAnswerSheet(11)}
                                                    disabled={fileUrl.loading}
                                                    style={{
                                                        padding: "10px 20px",
                                                        background: "blue",
                                                        color: "white",
                                                        border: "none",
                                                        cursor: "pointer",
                                                    }}
                                                >
                                                    {fileUrl.loading ? "Generating PDF..." : "Download Answer Sheet"}
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </section>
                <br />
                <br />
            </CommonLayout>
        </div>
    );
};

export default QuestionPaperList;
