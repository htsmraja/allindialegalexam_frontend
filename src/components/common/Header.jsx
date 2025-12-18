import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../context/authcontext'
import { useCommonContext } from '../../context/commonContext';

const Header = () => {
    const { isLogin, userData, logout } = useAuthContext();
    const { setCartListData, cartlistData } = useCommonContext();
    // console.log(isLogin, "islogin")
    // console.log(userData, "userData")
    const handleLogout = () => {
        logout();
        setCartListData({
            data: [],
            loading: false,
        });
    };
    const items = cartlistData?.data?.items || [];
    // console.log(cartlistData?.data, "cartlistData?.data")
    // console.log(items, "items")
    return (
        <>
            {/* header of the page */}
            <header id="page-header" className="page-header-stick">
                {/* top bar */}
                <div className="top-bar bg-dark text-gray">
                    <div className="container">
                        <div className="row top-bar-holder">
                            <div className="col-xs-9 col">
                                {/* bar links */}
                                <ul className="font-lato list-unstyled bar-links">
                                    <li>
                                        <a href="tel:+611234567890">
                                            <strong className="dt element-block text-capitalize hd-phone">
                                                Call :
                                            </strong>
                                            <strong className="dd element-block hd-phone">
                                                +(91) 9748304782
                                            </strong>
                                            <i className="fas fa-phone-square hd-up-phone hidden-sm hidden-md hidden-lg">
                                                <span className="sr-only">phone</span>
                                            </i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:Example@domain.com">
                                            <strong className="dt element-block text-capitalize hd-phone">
                                                Email :
                                            </strong>
                                            <strong className="dd element-block hd-phone">
                                                allindialegalexams@gmail.com
                                            </strong>
                                            <i className="fas fa-envelope-square hd-up-phone hidden-sm hidden-md hidden-lg">
                                                <span className="sr-only">email</span>
                                            </i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xs-3 col justify-end">
                                {/* user links */}
                                <ul className="list-unstyled user-links fw-bold font-lato">
                                    {
                                        isLogin ? (<li>
                                            <Link to="/my-account">
                                                Hi . {userData?.first_name + " " + userData?.last_name}
                                            </Link>{" "}
                                            <span className="sep">|</span>{" "}
                                            <Link to="#" onClick={handleLogout}>
                                                Logout
                                            </Link>
                                        </li>) : (<li>
                                            <Link to="/login">
                                                Login
                                            </Link>{" "}
                                            <span className="sep">|</span>{" "}
                                            <Link to="/signup">
                                                Register
                                            </Link>
                                        </li>)
                                    }

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* header holder */}
                <div className="header-holder">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-6 col-sm-3">
                                {/* logo */}
                                <div className="logo">
                                    <Link to="/">
                                        <img
                                            className="hidden-xs"
                                            src="assets/images/logo.png"
                                            alt="studylms"
                                        />
                                        <img
                                            className="hidden-sm hidden-md hidden-lg"
                                            src="assets/images/logo-dark.png"
                                            alt="studylms"
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-9 static-block">
                                {/* nav */}
                                <nav id="nav" className="navbar navbar-default">
                                    <div className="navbar-header">
                                        <button
                                            type="button"
                                            className="navbar-toggle collapsed"
                                            data-toggle="collapse"
                                            data-target="#bs-example-navbar-collapse-1"
                                            aria-expanded="false"
                                        >
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="icon-bar" />
                                            <span className="icon-bar" />
                                            <span className="icon-bar" />
                                        </button>
                                    </div>
                                    {/* navbar collapse */}
                                    <div
                                        className="collapse navbar-collapse"
                                        id="bs-example-navbar-collapse-1"
                                    >
                                        {/* main navigation */}
                                        <ul className="nav navbar-nav navbar-right main-navigation text-uppercase font-lato">
                                            <li><Link to="/">home</Link></li>
                                            <li>
                                                <Link to="/about-us">About Us</Link>
                                            </li>
                                            {/* <li className="dropdown">
                                                <a
                                                    href="#"
                                                    className="dropdown-toggle"
                                                    data-toggle="dropdown"
                                                    role="button"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    Courses
                                                </a>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <a href="javascript:void(0)">Course List</a>
                                                    </li>

                                                </ul>
                                            </li> */}
                                            <li>
                                                <Link to="/course-list">Courses</Link>
                                            </li>
                                            <li>
                                                <Link to="/book-list">Books & Notes</Link>
                                            </li>
                                            <li>
                                                <Link to="/cart-page">Cart : {items?.length}</Link>
                                            </li>
                                            {/* <li className="dropdown">
                                                <a href="javscript:void(0)" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                                                <ul className="dropdown-menu">
                                                    <li><Link to="/about-us">About us</Link></li>
                                                    <li><Link to="/login">Login</Link></li>
                                                    <li><Link to="/signup">Signup</Link></li>
                                                    <li><Link to="/book-list">Book List</Link></li>
                                                    <li><Link to="/book-details">Book Details</Link></li>
                                                    <li><Link to="/course-list">Course List</Link></li>
                                                    <li><Link to="/course-deatils">Course Deatils</Link></li>
                                                    <li><Link to="/cart-page">cart-page</Link></li>
                                                    <li><Link to="/checkout-page">checkout-page</Link></li>
                                                    <li><Link to="/my-account">my-account</Link></li>
                                                    <li><Link to="/wishlist-page">wishlist-page</Link></li>
                                                </ul>
                                            </li> */}
                                            <li>
                                                <Link to="/">Mock Tests</Link>
                                            </li>
                                            <li>
                                                <Link to="/contact-us">Contact Us</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* navbar form */}
                                    <form
                                        action="#"
                                        className="navbar-form navbar-search-form navbar-right"
                                    >
                                        <a
                                            className="fas fa-search search-opener"
                                            role="button"
                                            data-toggle="collapse"
                                            href="#searchCollapse"
                                            aria-expanded="false"
                                            aria-controls="searchCollapse"
                                        >
                                            <span className="sr-only">search opener</span>
                                        </a>
                                        {/* search collapse */}
                                        <div className="collapse search-collapse" id="searchCollapse">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Search …"
                                                />
                                                <button type="button" className="fas fa-search btn">
                                                    <span className="sr-only">search</span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* contain main informative part of the site */}
        </>
    )
}

export default Header