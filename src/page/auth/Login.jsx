import React, { useEffect, useState } from 'react'
import CommonLayout from '../../components/common_for_website/CommonLayout'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../context/authcontext';

const Login = () => {
    const [mobile, setMobile] = useState("");
    const [otp, setOtp] = useState("");
    const [showOtp, setShowOtp] = useState(false);
    const [timer, setTimer] = useState(0);

    const {
        login,
        sendOtp,
        verifyOtp,
        loading,
        message
    } = useAuthContext();

    const navigate = useNavigate();

    // Countdown timer
    useEffect(() => {
        let interval;
        if (timer > 0) {
            interval = setInterval(() => setTimer(prev => prev - 1), 1000);
        }
        return () => clearInterval(interval);
    }, [timer]);

    const handleSendOtp = async () => {
        if (!mobile) return alert("Please enter mobile number");

        try {
            const success = await sendOtp(mobile);  // ← wait for context API call
            if (success) {
                setShowOtp(true); // only show OTP if API succeeds
                setTimer(30);     // start timer
            }
        } catch (err) {
            console.log("Send OTP failed:", err);
        }
    };


    const handleVerifyOtp = async () => {
        if (!otp) return alert("Please enter OTP");

        try {
            const data = await verifyOtp({ mobile, otp });
            // login(data.token);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };

    const handleResendOtp = () => {
        if (timer === 0) {
            handleSendOtp();
        }
    };

    const handleLoginClick = (e) => {
        e.preventDefault();

        if (!showOtp) {
            handleSendOtp();
        } else {
            handleVerifyOtp();
        }
    };

    return (
        <div className='innerPageBx'>
            <CommonLayout>

                <section className="container user-log-block">
                    <div className="row">
                        <div className="col-xs-12 col-md-6 col-md-offset-3">

                            <form className="user-log-form" onSubmit={(e) => e.preventDefault()}>
                                <h2>Login Form</h2>

                                {/* MOBILE INPUT */}
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control element-block"
                                        placeholder="Enter mobile number"
                                        value={mobile}
                                        onChange={(e) => setMobile(e.target.value)}
                                        disabled={showOtp}
                                    />
                                </div>

                                {/* OTP INPUT */}
                                {showOtp && (
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control element-block"
                                            placeholder="Enter OTP"
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value)}
                                        />
                                    </div>
                                )}

                                {/* BUTTONS */}
                                <div className="btns-wrap">
                                    <div className="wrap">
                                        <button
                                            type="button"
                                            className="btn btn-theme btn-warning fw-bold font-lato text-uppercase"
                                            onClick={handleLoginClick}
                                        >
                                            {showOtp ? "Verify OTP" : "Send OTP"}
                                        </button>
                                    </div>

                                    <div className="wrap text-right">
                                        <p>
                                            <span
                                                className="forget-link"
                                                style={{
                                                    cursor: timer === 0 ? "pointer" : "not-allowed",
                                                    color: timer === 0 ? "#007bff" : "gray"
                                                }}
                                                onClick={handleResendOtp}
                                            >
                                                {timer > 0 ? `Resend OTP in ${timer}s` : "Resend OTP"}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </form>

                            <p>
                                Don’t have an account?
                                <Link className='themeColor' to="/signup">
                                    <u>Create an Account</u>
                                </Link>
                            </p>

                        </div>
                    </div>
                </section>

            </CommonLayout>
        </div>
    )
}

export default Login;
