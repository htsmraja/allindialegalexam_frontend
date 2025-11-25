import React from 'react'
import CommonLayout from '../../components/common_for_website/CommonLayout'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <>
            <div className='innerPageBx'>
                <CommonLayout>
                    {/* login page body start */}
                    <section className="container user-log-block">
                        <div className="row">
                            <div className="col-xs-12 col-md-6 col-md-offset-3">
                                {/* user log form */}
                                <form action="#" className="user-log-form">
                                    <h2>Register Form</h2>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="First Name *"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Last Name *"
                                        />
                                    </div>                                 
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Email Address *"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Mobile Number *"
                                        />
                                    </div>
                                    <div className="btns-wrap">
                                        <div className="wrap">
                                            <button
                                                type="submit"
                                                className="btn btn-theme btn-warning fw-bold font-lato text-uppercase"
                                            >
                                                Register
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                <p>Existing user? <Link className='themeColor' to="/login"><u>Login</u></Link> </p>
                            </div>
                        </div>
                    </section>
                    {/* login page body end */}
                </CommonLayout>
            </div>
        </>
    )
}

export default SignUp