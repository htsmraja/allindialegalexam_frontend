import React from 'react';

const PerformanceChart = () => {
    return (
        <div className="card shadow-sm border-0 p-4">
            <h3 className="mb-4"><b>Attendance & Performance</b></h3>
            <div className="row g-4 mb-5">
                <div className="col-md-3">
                    <div className="text-center p-3 border rounded">
                        <h2 className="text-primary mb-1">85%</h2>
                        <small className="text-white" style={{fontSize:'16px'}}>Total Attendance</small>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="text-center p-3 border rounded">
                        <h2 style={{color:'#00ff04'}}>78%</h2>
                        <small className="text-white" style={{fontSize:'16px'}}>Avg. Test Score</small>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="text-center p-3 border rounded">
                        <h2 style={{color:'#00abff'}}>12</h2>
                        <small className="text-white" style={{fontSize:'16px'}}>Tests Completed</small>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="text-center p-3 border rounded">
                        <h2 style={{color:'#ff4207'}}>05</h2>
                        <small className="text-white" style={{fontSize:'16px'}}>Badges Earned</small>
                    </div>
                </div>
            </div>
            <br />
            <h4 className="text-white" style={{marginTop:'25px'}}><b>Course Completion Status</b></h4>
            <div style={{margin:'25px 0'}}>
                <div className="d-flex justify-content-between mb-1">
                    <span className="small font-weight-bold">Web Development Bootcamp</span>
                    <span className="small font-weight-bold">65%</span>
                </div>
                <div className="progress" style={{ height: '10px' }}>
                    <div className="progress-bar bg-success" style={{ width: '65%' }}></div>
                </div>
            </div>
            <div className="mb-4">
                <div className="d-flex justify-content-between mb-1">
                    <span className="small font-weight-bold">Advanced React Mastery</span>
                    <span className="small font-weight-bold">40%</span>
                </div>
                <div className="progress" style={{ height: '10px' }}>
                    <div className="progress-bar bg-primary" style={{ width: '40%' }}></div>
                </div>
            </div>
        </div>
    );
};

export default PerformanceChart;
