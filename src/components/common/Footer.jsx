import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            {/* footer area container */}
            <div className="footer-area bg-dark text-gray">
                {/* aside */}
                <aside className="aside container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-3 col">
                            <div className="logo">
                                <a href="home.html">
                                    <img src="assets/images/logo.png" alt="studyLMS" />
                                </a>
                            </div>
                            <p>
                                We have over 20 years experience providing expert Educational both
                                businesses and individuals. Our Investment Committee brings cades
                                the industry expertise in driving our investment approach. portfolio
                                constructor and allocation
                            </p>
                            <a href="#" className="btn btn-default text-uppercase">
                                Start Leaning Now
                            </a>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3 col hidden-xs">
                            <h3>Grow Up</h3>
                            {/* widget cources list */}
                            <ul className="widget-cources-list list-unstyled">
                                <li>
                                    <a href="javascript:void(0)">
                                        <div className="alignleft">
                                            <img
                                                src="./assets/images/img20.jpg"
                                                alt="image description"
                                            />
                                        </div>
                                        <div className="description-wrap">
                                            <h4><b className='themeColor'>Courses</b></h4>
                                            <h4>Introduction to Mobile Apps Development</h4>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <div className="alignleft">
                                            <img
                                                src="./assets/images/img21.jpg"
                                                alt="image description"
                                            />
                                        </div>
                                        <div className="description-wrap">
                                            <h4><b className='themeColor'>Books & Notes</b></h4>
                                            <h4>Become a Professional Film Maker</h4>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <div className="alignleft">
                                            <img
                                                src="./assets/images/img22.jpg"
                                                alt="image description"
                                            />
                                        </div>
                                        <div className="description-wrap">
                                            <h4><b className='themeColor'>Mock Tests</b></h4>
                                            <h4>Swift Programming For Beginners</h4>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <nav className="col-xs-12 col-sm-6 col-md-3 col">
                            <h3>Quick Links</h3>
                            {/* fooer navigation */}
                            <ul className="fooer-navigation list-unstyled">
                                <li><Link>Home</Link></li>
                                <li><Link>About Us</Link></li>
                                <li><Link>Contact Us</Link></li>
                                <li><Link>Privacy Policy</Link></li>
                                <li><Link>Terms & Conditions</Link></li>
                                <li><Link>Cancellation & Refund Policy</Link></li>
                                <li><Link>Teacher Panel</Link></li>
                            </ul>
                        </nav>
                        <div className="col-xs-12 col-sm-6 col-md-3 col">
                            <h3>contact us</h3>
                            <p>
                                If you want to contact us about any issue our support available to
                                help you 8am-7pm Monday to saturday.
                            </p>
                            {/* ft address */}
                            <address className="ft-address">
                                <dl>
                                    <dt>
                                        <span className="fas fa-map-marker">
                                            <span className="sr-only">marker</span>
                                        </span>
                                    </dt>
                                    <dd><b>Address:</b> Kolkata</dd>
                                    <dt>
                                        <span className="fas fa-phone-square">
                                            <span className="sr-only">phone</span>
                                        </span>
                                    </dt>
                                    <dd>
                                        <b>Call:</b> <a href="tel:0000000">+91 0000000</a>
                                    </dd>
                                    <dt>
                                        <span className="fas fa-envelope-square">
                                            <span className="sr-only">email</span>
                                        </span>
                                    </dt>
                                    <dd>
                                        <b>Email:</b> <a href="mailto:info@allindialegalexam.com">info@allindialegalexam.com</a>
                                    </dd>
                                </dl>
                            </address>
                        </div>
                    </div>
                </aside>
                {/* page footer */}
                <footer id="page-footer" className="font-lato">
                    <div className="container">
                        <div className="row holder">
                            <div className="col-xs-12 col-sm-push-6 col-sm-6">
                                <ul className="socail-networks list-unstyled">
                                    <li>
                                        <a href="#">
                                            <span className="fab fa-facebook" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="fab fa-instagram" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="fab fa-linkedin" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xs-12 col-sm-pull-6 col-sm-6">
                                <p> &copy; Copyright 2025 LMS - Law Coaching All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            {/* back top of the page */}
            <span id="back-top" className="text-center fa fa-caret-up" />
            {/* loader of the page */}
            <div id="loader" className="loader-holder">
                <div className="block">
                    <img src="assets/images/svg/hearts.svg" width={100} alt="loader" />
                </div>
            </div>
            <div className="popup-holder">
                <div id="popup1" className="lightbox-demo">
                    <form action="#" className="user-log-form">
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
                                    htmlFor="rem"
                                    className="custom-check-wrap fw-normal font-lato"
                                >
                                    <input type="checkbox" id="rem" className="customFormReset" />
                                    <span className="fake-label element-block">Remember me</span>
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
                </div>
                <div id="popup2" className="lightbox-demo">
                    <form action="#" className="user-log-form">
                        <h2>Register Form</h2>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control element-block"
                                placeholder="Email address *"
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
                                <button
                                    type="submit"
                                    className="btn btn-theme btn-warning fw-bold font-lato text-uppercase"
                                >
                                    Register
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Footer