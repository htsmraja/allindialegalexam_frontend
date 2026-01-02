import React from 'react';

const ChangePassword = () => {
    return (
        <div className="card shadow-sm border-0 p-4" style={{ maxWidth: '500px' }}>
            <h3 className="mb-4"><b>Change Password</b></h3>
            <form>
                <div className="mb-3">
                    <label className="form-label">Current Password</label>
                    <input type="password" name='current_password' className="form-control" placeholder="Enter current password" />
                </div>
                <div className="mb-3">
                    <label className="form-label">New Password</label>
                    <input type="password" name='new_password' className="form-control" placeholder="Enter new password" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Confirm New Password</label>
                    <input type="password" name='confirm_password' className="form-control" placeholder="Confirm new password" />
                </div>
                <button type="submit" className="btn btn-theme w-100 mt-3 shadow-sm">
                    Update Password
                </button>
            </form>
        </div>
    );
};

export default ChangePassword;
