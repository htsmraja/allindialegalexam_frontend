import React, { useEffect } from 'react'
import CommonLayout from '../../common_for_website/CommonLayout'
import { Link, Outlet } from 'react-router-dom'
import { useCommonContext } from '../../../context/commonContext'
import { useAuthContext } from '../../../context/authcontext'
const MyAccount = () => {
  const { getUserProfile, userData, isLogin } = useAuthContext();
  // useEffect(() => {
  //   if (isLogin) {
  //     getUserProfile();
  //   }
  // }, [isLogin]);

  return (
    <>

      <div className='innerPageBx' style={{ background: '#f8fafc' }}>
        {/* main page content start */}
        <>
          <div className='afterLogin sidebarPage'>
            {/* Sidebar part start */}
            <aside className="sidebar" id="sidebar">
              <div className="sidebar-header">
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
              <ul className="nav nav-sidebar">
                {/* Dashboard */}
                <li className="active">
                  <Link to="/my-account/dashboard">
                    <i className="fa fa-address-card nav-icon" />
                    Dashboard
                  </Link>
                </li>
                {/* Profile */}
                <li>
                  <Link to="#menuProfile" data-toggle="collapse" className="collapsed">
                    <i className="fa fa-user nav-icon" />
                    Profile
                    <i className="fa fa-chevron-down arrow" />
                  </Link>
                  <div id="menuProfile" className="collapse">
                    <ul className="submenu">
                      <li>
                        <Link to="/my-account/profile/personal-details">Personal Details</Link>
                      </li>
                      <li>
                        <Link to="/my-account/profile/academic-info">Academic Info</Link>
                      </li>
                      <li>
                        <Link to="/my-account/profile/profile-picture">Profile Picture</Link>
                      </li>
                      <li>
                        <Link to="/my-account/profile/contact-guardian">Contact &amp; Guardian Details</Link>
                      </li>
                      <li>
                        <Link to="/my-account/profile/change-password">Change Password</Link>
                      </li>
                      <li>
                        <Link to="/my-account/profile/manage-address">Manage Address (Book Delivery)</Link>
                      </li>
                      <li>
                        <Link to="/my-account/profile/referral-wallet">View Referral Code / Wallet</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* Courses & Classes */}
                <li>
                  <Link to="#menuCourses" data-toggle="collapse" className="collapsed">
                    <i className="fa fa-book nav-icon" />
                    Courses &amp; Classes
                    <i className="fa fa-chevron-down arrow" />
                  </Link>
                  <div id="menuCourses" className="collapse">
                    <ul className="submenu">
                      <li>
                        <Link to="/my-account/courses/enrolled">View Enrolled Courses</Link>
                      </li>
                      <li>
                        <Link
                          to="/my-account/courses/batch-details"
                          data-toggle="collapse"
                          className="collapsed"
                        >
                          Batch Details (Teacher, Schedule)
                          <span className="label-status">Info</span>
                          <i className="fa fa-chevron-down arrow" />
                        </Link>
                        <div id="menuBatchDetails" className="collapse">
                          <ul className="subsubmenu">
                            <li>
                              <Link to="#">Teacher List</Link>
                            </li>
                            <li>
                              <Link to="#">Weekly Schedule</Link>
                            </li>
                            <li>
                              <Link to="#">Holiday Calendar</Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <Link to="#">Join Live Class (Google Meet)</Link>
                      </li>
                      <li>
                        <Link to="#">Watch Recorded Lectures</Link>
                      </li>
                      <li>
                        <Link to="#">Download Notes &amp; Assignments</Link>
                      </li>
                      <li>
                        <Link to="#">Submit Assignments / Homework</Link>
                      </li>
                      <li>
                        <Link to="#">Track Progress by Chapter</Link>
                      </li>
                      <li>
                        <Link to="#">Ask Questions under Each Topic</Link>
                      </li>
                      <li>
                        <Link to="#">Certificate Download (After Completion)</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* Mock Tests */}
                <li>
                  <Link to="#menuMockTests" data-toggle="collapse" className="collapsed">
                    <i className="fa fa-file nav-icon" />
                    Mock Tests
                    <i className="fa fa-chevron-down arrow" />
                  </Link>
                  <div id="menuMockTests" className="collapse">
                    <ul className="submenu">
                      <li>
                        <Link to="/my-account/exams/mock-tests">Available Tests by Exam Type</Link>
                      </li>
                      <li>
                        <Link to="#">Practice by Subject / Topic</Link>
                      </li>
                      <li>
                        <Link to="#">Start Test (Timer Enabled)</Link>
                      </li>
                      <li>
                        <Link to="#">Auto-Save Progress</Link>
                      </li>
                      <li>
                        <Link to="#">Result &amp; Rank (Graph View)</Link>
                      </li>
                      <li>
                        <Link to="#">Compare My Rank (All India)</Link>
                      </li>
                      <li>
                        <Link to="#">Review Answers &amp; Explanations</Link>
                      </li>
                      <li>
                        <Link to="#">Retake Test (If Allowed)</Link>
                      </li>
                      <li>
                        <Link to="#">Generate Report Card (PDF)</Link>
                      </li>
                      <li>
                        <Link to="#">Weak Area Suggestions</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* Books & Notes Store */}
                <li>
                  <Link to="#menuStore" data-toggle="collapse" className="collapsed">
                    <i className="fa fa-shopping-cart nav-icon" />
                    Books &amp; Notes Store
                    <i className="fa fa-chevron-down arrow" />
                  </Link>
                  <div id="menuStore" className="collapse">
                    <ul className="submenu">
                      <li>
                        <Link to="#">Browse Books by Exam Type</Link>
                      </li>
                      <li>
                        <Link to="#">View Book Details (Sample, Author, Price)</Link>
                      </li>
                      <li>
                        <Link to="#">Add to Cart / Wishlist</Link>
                      </li>
                      <li>
                        <Link to="#">Razorpay Payment</Link>
                      </li>
                      <li>
                        <Link to="#">Download eBooks / Track Shipment</Link>
                      </li>
                      <li>
                        <Link to="#">Combo Offers (Books + Courses)</Link>
                      </li>
                      <li>
                        <Link to="#">My Orders List</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* Attendance & Performance */}
                <li>
                  <Link to="/my-account/performance" data-toggle="collapse" className="collapsed">
                    <i className="fa fa-id-badge nav-icon" />
                    Attendance &amp; Performance
                    <i className="fa fa-chevron-down arrow" />
                  </Link>
                  <div id="menuPerformance" className="collapse">
                    <ul className="submenu">
                      <li>
                        <Link to="#">Attendance per Batch / Class</Link>
                      </li>
                      <li>
                        <Link to="#">Course Completion Percentage</Link>
                      </li>
                      <li>
                        <Link to="#">Test History &amp; Marks Chart</Link>
                      </li>
                      <li>
                        <Link to="#">Teacher Feedback Option</Link>
                      </li>
                      <li>
                        <Link to="#">Time Spent on Platform</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* Discussion Forum */}
                <li>
                  <Link to="#menuForum" data-toggle="collapse" className="collapsed">
                    <i className="fa fa-comments nav-icon" />
                    Discussion Forum
                    <i className="fa fa-chevron-down arrow" />
                  </Link>
                  <div id="menuForum" className="collapse">
                    <ul className="submenu">
                      <li>
                        <Link to="#">Topic-wise Discussion Boards</Link>
                      </li>
                      <li>
                        <Link to="#">Ask / Answer Questions</Link>
                      </li>
                      <li>
                        <Link to="#">Upvote / Report / Bookmark</Link>
                      </li>
                      <li>
                        <Link to="#">Mention Teachers (@TeacherName)</Link>
                      </li>
                      <li>
                        <Link to="#">Threaded Replies</Link>
                      </li>
                      <li>
                        <Link to="#">Leaderboard (Top Contributors)</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* Payments & Subscriptions */}
                <li>
                  <Link to="#menuPayments" data-toggle="collapse" className="collapsed">
                    <i className="fa fa-credit-card nav-icon" />
                    Payments &amp; Subscriptions
                    <i className="fa fa-chevron-down arrow" />
                  </Link>
                  <div id="menuPayments" className="collapse">
                    <ul className="submenu">
                      <li>
                        <Link to="#">My Courses &amp; Payments</Link>
                      </li>
                      <li>
                        <Link to="#">Active / Expired Subscriptions</Link>
                      </li>
                      <li>
                        <Link to="#">Razorpay Invoice Download</Link>
                      </li>
                      <li>
                        <Link to="#">Coupon &amp; Discount Support</Link>
                      </li>
                      <li>
                        <Link to="#">Wallet System (Add / Redeem)</Link>
                      </li>
                      <li>
                        <Link to="#">Refund Request</Link>
                      </li>
                      <li>
                        <Link to="#">Referral Rewards</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* Notifications & Messages */}
                <li>
                  <a
                    href="#menuNotifications"
                    data-toggle="collapse"
                    className="collapsed"
                  >
                    <i className="fa fa-bell nav-icon" />
                    Notifications &amp; Messages
                    <i className="fa fa-chevron-down arrow" />
                  </a>
                  <div id="menuNotifications" className="collapse">
                    <ul className="submenu">
                      <li>
                        <Link to="#">Live Class &amp; Result Notifications</Link>
                      </li>
                      <li>
                        <Link to="#">Chat with Teacher</Link>
                      </li>
                      <li>
                        <Link to="#">Chat with Support</Link>
                      </li>
                      <li>
                        <Link to="#">Message History</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* Support & Help */}
                <li>
                  <Link to="#menuSupport" data-toggle="collapse" className="collapsed">
                    <i className="fa fa-life-ring nav-icon" />
                    Support &amp; Help
                    <i className="fa fa-chevron-down arrow" />
                  </Link>
                  <div id="menuSupport" className="collapse">
                    <ul className="submenu">
                      <li>
                        <Link to="#">Raise Support Ticket</Link>
                      </li>
                      <li>
                        <Link to="#">Chatbot for FAQs</Link>
                      </li>
                      <li>
                        <Link to="#">Email / Phone Support</Link>
                      </li>
                      <li>
                        <Link to="#">Feedback Form</Link>
                      </li>
                      <li>
                        <Link to="#">Request Certificate Reissue</Link>
                      </li>
                      <li>
                        <Link to="#">Report Technical Issue</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* Study Planner */}
                <li>
                  <Link to="#menuPlanner" data-toggle="collapse" className="collapsed">
                    <i className="fa fa-calendar nav-icon" />
                    Study Planner
                    <i className="fa fa-chevron-down arrow" />
                  </Link>
                  <div id="menuPlanner" className="collapse">
                    <ul className="submenu">
                      <li>
                        <Link to="#">Dark Mode / Accessibility Settings</Link>
                      </li>
                      <li>
                        <Link to="#">Daily Quiz / Legal Current Affairs</Link>
                      </li>
                      <li>
                        <Link to="#">Student Leaderboard (Top 10)</Link>
                      </li>
                      <li>
                        <Link to="#">Badge System (Gold / Silver / Bronze)</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* Section separators */}
                <div className="menu-divider" />
                <div className="menu-section">Shortcuts</div>
                <li>
                  <Link to="#">
                    <i className="fa fa-bolt nav-icon" /> Quick Start Test
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa fa-file-pdf nav-icon" /> Download Report Card
                  </Link>
                </li>
                {/* old menue link start */}
                <div className="menu-divider" />
                <div className="menu-section">Old Sidebar Options</div>
                <li className="active"><Link><i className="fa fa-life-ring nav-icon" /> My Account</Link></li>
                <li><Link to='/my-account/wishlist'><i className="fa fa-life-ring nav-icon" /> Wish List</Link></li>
                <li><Link to='/cart-page'><i className="fa fa-life-ring nav-icon" /> Checkout</Link></li>
                <li><Link to='/cart-page'><i className="fa fa-life-ring nav-icon" /> Cart</Link></li>
                <li><Link to='/my-account/order-list'><i className="fa fa-life-ring nav-icon" /> Order List</Link></li>
                <li><Link to='/my-account/my-subscription'><i className="fa fa-life-ring nav-icon" /> Subscription List</Link></li>
                {/* old menue link end */}
              </ul>
            </aside>
            {/* Sidebar part end */}

            {/* body part start */}
            <section className="content">

              {/* top head start */}
              <div className='topHead'>
                <CommonLayout></CommonLayout>
              </div>
              {/* top head end */}
              <div >
                <Outlet />
              </div>

            </section>
            {/* body part end */}
          </div>
        </>
        {/* main page content end */}
      </div>
    </>
  )
}

export default MyAccount