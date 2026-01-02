import React from 'react';

const ContactDetails = () => {
    return (
        <div className="card shadow-sm border-0 p-4">
            <h4 className="mb-4"><b>Contact & Guardian Details</b></h4>
            <div className="row g-4">
                <div className="col-md-6">
                    <h5 className="text-primary mb-3">Student Contact</h5>
                    <div className="mb-3">
                        <label className="text-muted small">Mobile Number</label>
                        <p className="fw-bold">+91 98765 43210</p>
                    </div>
                    <div className="mb-3">
                        <label className="text-muted small">Email Address</label>
                        <p className="fw-bold">rajarajan@example.com</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <h5 className="text-primary mb-3">Guardian Info</h5>
                    <div className="mb-3">
                        <label className="text-muted small">Guardian Name</label>
                        <p className="fw-bold">Mr. S. Rajan</p>
                    </div>
                    <div className="mb-3">
                        <label className="text-muted small">Guardian Relation</label>
                        <p className="fw-bold">Father</p>
                    </div>
                    <div className="mb-3">
                        <label className="text-muted small">Guardian Contact</label>
                        <p className="fw-bold">+91 98765 43211</p>
                    </div>
                </div>
            </div>
            <div className="mt-4 border-top pt-4">
                <button className="btn btn-theme">Update Contact Info</button>
            </div>
        </div>
    );
};

export default ContactDetails;
