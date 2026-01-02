import React from 'react';

const EnrolledCourses = () => {
    const courses = [
        {
            id: 1,
            title: 'Full Stack Web Development with React',
            instructor: 'John Doe',
            progress: 65,
            image: 'assets/images/mock-tests-1.jpg',
            lastAccessed: '2 hours ago'
        },
        {
            id: 2,
            title: 'Advanced Data Structures & Algorithms',
            instructor: 'Sarah Smith',
            progress: 30,
            image: 'assets/images/mock-tests-1.jpg',
            lastAccessed: 'Yesterday'
        }
    ];

    return (
        <div className="container-fluid p-0">
            <h4 className="mb-4"><b>My Enrolled Courses</b></h4>
            <div className="row g-4">
                {courses.map(course => (
                    <div className="col-md-6" key={course.id}>
                        <div className="card shadow-sm border-0 h-100 overflow-hidden">
                            <img src={course.image} className="card-img-top" alt={course.title} />
                            <div className="card-body">
                                <h5 className="card-title fw-bold text-white">{course.title}</h5>
                                <p className="text-muted small" style={{marginBottom:'10px'}}>By {course.instructor}</p>
                                <div className="mb-2 d-flex justify-content-between">
                                    <span className="small text-muted">Progress</span>
                                    <span className="small fw-bold">{course.progress}%</span>
                                </div>
                                <div className="progress mb-3" style={{ height: '8px' }}>
                                    <div className="progress-bar bg-success" style={{ width: `${course.progress}%` }}></div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center" style={{marginTop:'15px'}}>
                                    <button className="btn btn-theme px-4">Continue</button>&nbsp;&nbsp;
                                    <span className="small text-white italic">Last accessed {course.lastAccessed}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EnrolledCourses;
