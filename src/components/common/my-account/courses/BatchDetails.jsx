import React from 'react';

const BatchDetails = () => {
    return (
        <div className="card shadow-sm border-0 p-4">
            <h3 className="mb-4"><b>Batch Details</b></h3>
            <div className="alert alert-info border-0 shadow-sm d-flex align-items-center">
                <i className="fa fa-info-circle fa-2x me-3" style={{marginRight:'15px'}}></i>
                <div>
                    <h6 className="mb-0 fw-bold" style={{margin:'0px'}}>Active Batch: Morning Engineering Batch A1</h6>
                    <small>Started from 15th Aug 2023</small>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <div className="p-3 bg-light rounded text-center" style={{padding:'24px 24px 5px'}}>
                        <i className="fa fa-user-circle fa-2x text-primary mb-2"></i>
                        <h6><b>Primary Teacher</b></h6>
                        <p className="mb-0 small text-muted">Dr. Naveen Kumar</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="bg-light rounded text-center" style={{padding:'24px 24px 5px'}}>
                        <i className="fa fa-calendar-check fa-2x text-success mb-2"></i>
                        <h6><b>Schedule</b></h6>
                        <p className="mb-0 small text-muted">Mon-Fri (9:00 AM - 12:00 PM)</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="p-3 bg-light rounded text-center" style={{padding:'24px 24px 5px'}}>
                        <i className="fa fa-users fa-2x text-warning mb-2"></i>
                        <h6><b>Batch Strength</b></h6>
                        <p className="mb-0 small text-muted">45 Students</p>
                    </div>
                </div>
            </div>
            <br />
            <h3 className="mt-5 mb-3"><b>Weekly Schedule Highlights</b></h3>
            <ul className="list-group" style={{padding:'0'}}>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                        <span className="fw-bold">Monday</span>
                        <p className="mb-0 small text-muted">React Hooks & Context API</p>
                    </div>
                    &nbsp;&nbsp;<span className="badge bg-primary rounded-pill">9:00 AM</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                        <span className="fw-bold">Tuesday</span>
                        <p className="mb-0 small text-muted">Backend Integration with Node.js</p>
                    </div>
                    &nbsp;&nbsp;<span className="badge bg-primary rounded-pill">9:30 AM</span>
                </li>
            </ul>
        </div>
    );
};

export default BatchDetails;
