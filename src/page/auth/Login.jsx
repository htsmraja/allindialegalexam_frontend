import React from 'react'
import CommonLayout from '../../components/common_for_website/CommonLayout'
import { Link } from 'react-router-dom'


const Login = () => {
    return (
        <>
            <div className='innerPageBx'>
                <CommonLayout>
                    {/* login page body start */}
                    <section className="container user-log-block">
                        <div className="row">
                            <div className="col-xs-12 col-md-6 col-md-offset-3">
                                {/* user log form */}
                                <form className="user-log-form">
                                    <h2>Login Form</h2>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control element-block"
                                            placeholder="Username or email address *"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="password"
                                            className="form-control element-block"
                                            placeholder="Password *"
                                        />
                                    </div>
                                    <div className="btns-wrap">
                                        <div className="wrap">
                                            <label
                                                htmlFor="rem2"
                                                className="custom-check-wrap fw-normal font-lato"
                                            >
                                                <input type="checkbox" id="rem2" className="customFormReset" />
                                            </label>
                                            <button
                                                type="submit"
                                                className="btn btn-theme btn-warning fw-bold font-lato text-uppercase"
                                            >
                                                Login
                                            </button>
                                        </div>
                                        <div className="wrap text-right">
                                            <p>
                                                <a href="#" className="forget-link">
                                                    Lost your Password?
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </form>
                                <p>Don’t have an account? <Link className='themeColor' to="/signup"><u>Create an Account</u></Link> </p>
                            </div>
                        </div>
                    </section>
                    {/* login page body end */}
                </CommonLayout>
            </div>
        </>
    )
}

export default Login