import React from 'react';

const ReferralWallet = () => {
    return (
        <div className="row g-4">
            <div className="col-md-6">
                <div className="card shadow-sm border-0 p-4 bg-primary text-white h-100">
                    <h3 className="mb-3"><b>My Wallet Balance</b></h3>
                    <h2 className="display-4 fw-bold text-white">₹ 1,250</h2>
                    <p className="mb-4">Coins earned through referrals and activities</p>
                    <button className="btn btn-theme">Redeem Balance</button>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card shadow-sm border-0 p-4 h-100">
                    <h3 className="mb-3"><b>Refer & Earn</b></h3>
                    <p className="text-muted small mb-4 text-white">Share your referral code with friends and earn ₹100 for every signup!</p>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" value="STUDY2024REG" readOnly />
                        <button className="btn btn-theme" type="button">Copy</button>
                    </div>
                    <div className="d-flex justify-content-around mt-2">
                        <i className="fa fa-whatsapp fa-2x text-success" title='icons'></i>
                        <i className="fa fa-facebook fa-2x text-primary" title='icons'></i>
                        <i className="fa fa-twitter fa-2x text-info" title='icons'></i>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <div className="card shadow-sm border-0 p-4">
                    <h4 className="mb-4"><b>Recent Activity</b></h4>
                    <table className="table table-bordered align-middle">
                        <thead className="table-light">
                            <tr>
                                <th>Date</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th className="text-end">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Oct 10, 2023</td>
                                <td>Referral Bonus (Rahul S)</td>
                                <td><span className="badge bg-success-subtle text-success">Added</span></td>
                                <td className="text-end fw-bold text-success">+ ₹100</td>
                            </tr>
                            <tr>
                                <td>Oct 05, 2023</td>
                                <td>Course Purchase Discount</td>
                                <td><span className="badge bg-danger-subtle text-danger">Used</span></td>
                                <td className="text-end fw-bold text-danger">- ₹500</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ReferralWallet;
