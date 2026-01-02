import React from 'react';

const ManageAddress = () => {
    const addresses = [
        {
            id: 1,
            type: 'Home',
            name: 'Rajarajan S',
            phone: '+91 98765 43210',
            address: '123, Gandhi Street, Anna Nagar, Chennai - 600040',
            isDefault: true
        },
        {
            id: 2,
            type: 'Office',
            name: 'Rajarajan S',
            phone: '+91 98765 43210',
            address: 'Tidel Park, Tharamani, Chennai - 600113',
            isDefault: false
        }
    ];

    return (
        <div className="card shadow-sm border-0 p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="mb-0 width100" style={{display:'flex',justifyContent:'space-between'}}><b>Manage Delivery Addresses</b> <button className="btn btn-theme">+ Add New</button></h3>
            </div>
            <div className="row g-3">
                {addresses.map(addr => (
                    <div className="col-md-6" key={addr.id}>
                        <div className={`card h-100 ${addr.isDefault ? 'border-primary' : ''}`}>
                            <div className="card-body">
                                <div className="d-flex justify-content-between mb-2">
                                    <span className={`badge ${addr.isDefault ? 'bg-primary' : 'bg-secondary'}`}>{addr.type}</span> 
                                    {addr.isDefault && <span className="small text-primary">&nbsp; Default</span>}
                                </div>
                                <h4 className="fw-bold mb-1">{addr.name}</h4>
                                <p className="small text-muted mb-2">{addr.phone}</p>
                                <p className="small mb-3">{addr.address}</p>
                                <div className="d-flex gap-2">
                                    <button className="btn btn-theme">Edit</button>&nbsp;&nbsp;
                                    <button className="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageAddress;
