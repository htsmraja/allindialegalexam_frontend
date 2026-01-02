import React from 'react';

const AcademicInfo = () => {
    return (
        <div className="card shadow-sm border-0 p-4">
            <h3 className="mb-4"><b>Academic Information</b></h3>
            <div className="row g-3">
                <div className="col-md-6">
                    <label className="form-label text-muted">Current Qualification</label>
                    <p className="fw-bold">Bachelor of Technology (B.Tech)</p>
                </div>
                <div className="col-md-6">
                    <label className="form-label text-muted">Year of Passing</label>
                    <p className="fw-bold">2023</p>
                </div>
                <div className="col-md-6">
                    <label className="form-label text-muted">University/College</label>
                    <p className="fw-bold">State Technical University</p>
                </div>
                <div className="col-md-6">
                    <label className="form-label text-muted">Percentage/CGPA</label>
                    <p className="fw-bold">8.5 CGPA</p>
                </div>
                <div className="col-md-12">
                    <hr />
                    <h5 className='text-white'><b>Target Exam</b></h5>
                    <p className="text-primary fw-bold">GATE / ESE Engineering Exam</p>
                </div>
            </div>
            <div className="mt-4">
                <button className="btn btn-theme px-4">Edit Info</button>
            </div>
        </div>
    );
};

export default AcademicInfo;
