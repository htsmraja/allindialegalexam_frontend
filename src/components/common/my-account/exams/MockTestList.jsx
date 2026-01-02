import React from 'react';

const MockTestList = () => {
    const tests = [
        { id: 1, name: 'JEE Mains - Full Syllabus Mock 01', date: 'Oct 25, 2023', duration: '180 mins', status: 'Upcoming' },
        { id: 2, name: 'NEET Practice Test - Biology', date: 'Oct 20, 2023', duration: '90 mins', status: 'Completed', score: '85/100' },
        { id: 3, name: 'Engineering Mathematics Quiz', date: 'Oct 15, 2023', duration: '45 mins', status: 'Completed', score: '40/50' }
    ];

    return (
        <div className="card shadow-sm border-0 p-4">
            <h4 className="mb-4"><b>Mock Tests</b></h4>
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead className="table-light">
                        <tr>
                            <th>Test Name</th>
                            <th>Date</th>
                            <th>Duration</th>
                            <th>Status/Score</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tests.map(test => (
                            <tr key={test.id}>
                                <td className="fw-bold">{test.name}</td>
                                <td>{test.date}</td>
                                <td>{test.duration}</td>
                                <td>
                                    {test.status === 'Upcoming' ?
                                        <span className="badge bg-warning text-dark">Upcoming</span> :
                                        <span className="text-success fw-bold">{test.score}</span>
                                    }
                                </td>
                                <td>
                                    <button className={`btn btn-sm ${test.status === 'Upcoming' ? 'btn-primary' : 'btn-outline-secondary'}`}>
                                        {test.status === 'Upcoming' ? 'Start Now' : 'Review'}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MockTestList;
