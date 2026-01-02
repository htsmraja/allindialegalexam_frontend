import React from 'react';

const ProfilePicture = () => {
    return (
        <div className="card shadow-sm border-0 p-4 text-center">
            <h4 className="mb-4 text-start"><b>Profile Picture</b></h4>
            <div className="mb-4">
                <div className="userPhoto">
                    <button className="btn btn-theme"><i className="fa fa-camera"></i></button>
                    <img
                        src="assets/images/user.jpg"
                        alt="Profile"
                        style={{objectFit:'cover'}}
                    />
                </div>
            </div>
            <br />
            <p className="text-muted text-white" style={{marginBottom:'10px'}}>Allowed formats: JPG, PNG. Max size: 2MB</p>
            <div className="mt-0">
                <button className="btn btn-theme me-2">Upload New Photo</button>&nbsp;&nbsp;
                <button className="btn btn-outline-danger">Remove</button>
            </div>
        </div>
    );
};

export default ProfilePicture;
