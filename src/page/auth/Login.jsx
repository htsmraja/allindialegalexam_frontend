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
                <section className='loginSignupPage'>
                <div className="container" style={{background:'#f3f6ff'}}>
                    <div className="row">
                        <div className="col-sm-6" align="center">
                            <img src="assets/images/login.svg" alt="" style={{maxHeight:'230px'}} />
                        </div>
                        <div className="col-sm-6">
                            <div className='bgBx'>
                                <form onSubmit={(e) => e.preventDefault()}>
                                    <h2 className='mt0 mb2 text-white'>Login Form</h2>
                                    <hr className='mt0' />
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
                                        <div className="d-flex" style={{alignItems:'baseline'}}>
                                            <button
                                                type="button"
                                                className="btn btn-theme btn-warning fw-bold font-lato text-uppercase"
                                                onClick={handleLoginClick}
                                            >
                                                {showOtp ? "Verify OTP" : "Send OTP"}
                                            </button>
                                            <p>&nbsp;&nbsp;
                                                <span
                                                    className="forget-link"
                                                    style={{
                                                        cursor: timer === 0 ? "pointer" : "not-allowed",
                                                        color: timer === 0 ? "#ffc000" : "gray"
                                                    }}
                                                    onClick={handleResendOtp}
                                                >
                                                    {timer > 0 ? `Resend OTP in ${timer}s` : "Resend OTP"}
                                                </span>
                                            </p>
                                        </div>
                                        
                                    </div>
                                </form>
                                <p className='mb0'>Don’t have an account? <Link className='themeColor' to="/signup"><u>Create an Account</u></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
            </CommonLayout>
        </div>
    )
}

export default Login;
