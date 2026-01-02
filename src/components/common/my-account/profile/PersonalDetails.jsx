import React from 'react';

const PersonalDetails = () => {
    return (
        <div className="card shadow-sm border-0 p-4">
            <h3 className="mb-4"><b>Personal Details</b></h3>
            <div className="row g-3">
                <div className="col-md-6">
                    <label className="form-label text-muted small">First Name</label>
                    <input type="text" className="form-control" defaultValue="" />
                </div>
                <div className="col-md-6">
                    <label className="form-label text-muted small">Last Name</label>
                    <input type="text" className="form-control" defaultValue="" />
                </div>
                <div className="col-md-6">
                    <label className="form-label text-muted small">Email Address</label>
                    <input type="email" className="form-control" defaultValue="" disabled />
                </div>
                <div className="col-md-6">
                    <label className="form-label text-muted small">Phone Number</label>
                    <input type="tel" className="form-control" defaultValue="" />
                </div>
                <div className="col-md-6">
                    <label className="form-label text-muted small">Date of Birth</label>
                    <input type="date" className="form-control" defaultValue="" />
                </div>
                <div className="col-md-6">
                    <label className="form-label text-muted small">Gender</label>
                    <select className="form-control" defaultValue="select">
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <button className="btn btn-theme">Save Changes</button>
                    <button className="btn btn-link">Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default PersonalDetails;