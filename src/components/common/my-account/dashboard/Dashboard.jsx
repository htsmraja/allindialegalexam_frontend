import React from 'react'

const Dashboard = () => {
    return (
        <div className="">
            {/* Header */}
            <div className="row">
                <div className="col-sm-8">
                    <div className="d-flex" style={{ alignItems: 'baseline' }}>
                        <button className="btn btn-primary sidebar-toggle" id="sidebarToggle" style={{ marginRight: '10px' }}><i className="fa fa-bars" /></button>
                        <div>
                            <h3><b>Welcome back, Rajarajan!</b> 👋</h3>
                            <p>You have <b>3 classes</b> scheduled for today.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 text-right">
                    <button className="btn btn-primary btn-lg">
                        <i className="fa fa-bolt" /> Daily Quiz
                    </button>
                </div>
            </div>
            <br />
            {/* Stats */}
            <div className="row">
                <div className="col-sm-3">
                    <div className="card stat-box">
                        <div className="icon-box bg-blue">
                            <i className="fa fa-clock" />
                        </div>
                        <small>Active Hours</small>
                        <h4>
                            <b>120h</b>
                        </h4>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card stat-box">
                        <div className="icon-box bg-purple">
                            <i className="fa fa-book" />
                        </div>
                        <small>Courses</small>
                        <h4>
                            <b>2</b>
                        </h4>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card stat-box">
                        <div className="icon-box bg-orange">
                            <i className="fa fa-trophy" />
                        </div>
                        <small>Avg. Score</small>
                        <h4>
                            <b>78%</b>
                        </h4>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card stat-box">
                        <div className="icon-box bg-green">
                            <i className="fa fa-bolt" />
                        </div>
                        <small>Tests Taken</small>
                        <h4>
                            <b>12</b>
                        </h4>
                    </div>
                </div>
            </div>
            {/* Main */}
            <div className="row">
                {/* Left */}
                <div className="col-md-8">
                    <h4>
                        <b>Live Classes</b>
                    </h4>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card">
                                <span className="live-badge">● Live Now</span>
                                <h4>
                                    <b>Advanced React Patterns</b>
                                </h4>
                                <p>by Jane Smith</p>
                                <button className="join-btn">
                                    <i className="fa fa-video-camera" /> Join Class
                                </button>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card">
                                <span className="upcoming-badge">Upcoming</span>
                                <h4>
                                    <b>Physics: Thermodynamics</b>
                                </h4>
                                <p>by H.C. Verma</p>
                                <button className="btn btn-default btn-block">
                                    <i className="fa fa-bell" /> Remind Me
                                </button>
                            </div>
                        </div>
                    </div>
                    <h4>
                        <b>My Learning</b>
                    </h4>
                    <div className="card">
                        <b>Complete Web Development Bootcamp</b>
                        <span className="pull-right">65%</span>
                        <div className="progress">
                            <div className="progress-bar" style={{ width: "65%" }} />
                        </div>
                    </div>
                    <div className="card">
                        <b>NEET Series 2024</b>
                        <span className="pull-right">30%</span>
                        <div className="progress">
                            <div className="progress-bar" style={{ width: "30%" }} />
                        </div>
                    </div>
                </div>
                {/* Right */}
                <div className="col-md-4">
                    <div className="card mock-card">
                        <h4>
                            <b>Next Mock Test</b>
                        </h4>
                        <p>JEE Mains Full Syllabus</p>
                        <div className="row text-center">
                            <div className="col-xs-6">
                                <h3>02</h3>
                                <small>DAYS</small>
                            </div>
                            <div className="col-xs-6">
                                <h3>14</h3>
                                <small>HRS</small>
                            </div>
                        </div>
                        <br />
                        <button className="btn btn-default btn-block">View Syllabus</button>
                    </div>
                    <div className="card text-center">
                        <div className="row">
                            <div className="col-xs-6">
                                <div className="circle">85%</div>
                                <small>Attendance</small>
                            </div>
                            <div className="col-xs-6">
                                <div className="circle" style={{ borderTopColor: "#22c55e" }}>
                                    40%
                                </div>
                                <small>Course Goal</small>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <h4>
                            <b>Notifications</b>
                        </h4>
                        <p>
                            <span className="notify-dot" /> Mock Test 2 Result Declared
                        </p>
                        <p>
                            <span className="notify-dot" /> New Assignment in Web Dev
                        </p>
                        <p>
                            <span className="notify-dot" style={{ background: "#dc2626" }} /> Live
                            Class Rescheduled
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard