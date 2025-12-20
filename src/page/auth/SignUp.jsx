import React, { useState } from 'react';
import CommonLayout from '../../components/common_for_website/CommonLayout';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/authcontext';

const SignUp = () => {
    const { register, loading } = useAuthContext();
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        mobile: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        register(formData);
    };

    return (
        <>
            <div className="innerPageBx">
                <CommonLayout>
                    <section className='loginSignupPage'>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6" align="center">
                                    <img src="assets/images/signup.svg" alt="" />
                                </div>
                                <div className="col-sm-6">
                                    <div className='bgBx'>
                                        <form className="" onSubmit={handleSubmit}>
                                            <h2 className='mt0 mb2 text-white'>Register Form</h2>
                                            <hr className='mt0' />
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="first_name"
                                                    value={formData.first_name}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    placeholder="First Name *"
                                                    required
                                                />
                                            </div>

                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="last_name"
                                                    value={formData.last_name}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    placeholder="Last Name *"
                                                    required
                                                />
                                            </div>

                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    placeholder="Email Address *"
                                                    required
                                                />
                                            </div>

                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="mobile"
                                                    value={formData.mobile}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    placeholder="Mobile Number *"
                                                    maxLength="10"
                                                    required
                                                />
                                            </div>

                                            <div className="btns-wrap">
                                                <div className="d-flex" style={{alignItems:'baseline'}}>
                                                    <button
                                                        type="submit"
                                                        disabled={loading}
                                                        className="btn btn-theme btn-warning fw-bold font-lato text-uppercase"
                                                    >
                                                        {loading ? "Please wait..." : "Register"}
                                                    </button>
                                                    &nbsp;&nbsp;
                                                    <p>Existing user?{' '} <Link className="themeColor" to="/login"><u>Login</u></Link></p>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </CommonLayout>
            </div>
        </>
    );
};

export default SignUp;
