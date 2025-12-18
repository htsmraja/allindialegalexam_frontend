import React, { useEffect } from 'react';
import { useCommonContext } from '../../context/commonContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import CommonLayout from '../../components/common_for_website/CommonLayout';

const OrderDeatils = () => {
    const { state } = useLocation();
    const { getOrderDetails, orderDetails } = useCommonContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (state?.order_id) {
            getOrderDetails(state?.order_id);
        }
    }, [state?.order_id]);

    const isLoading = orderDetails?.loading;
    const data = orderDetails?.data;
    const handleStart = (e, item) => {
        e.preventDefault();   //  stop page reload

        navigate("/question-paper-list", {
            state: { id: item.id }
        });
    };
    return (
        <div className="innerPageBx">
            <CommonLayout>

                {/* Breadcrumb */}
                <nav className="breadcrumb-nav">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li><Link to="/">Home</Link></li>
                            <li className="active">Order Details</li>
                        </ol>
                    </div>
                </nav>

                <section className="cart-content-block container">

                    {/* Loader */}
                    {isLoading && (
                        <div className="d-flex justify-content-center py-5">
                            <div className="spinner-border text-primary" />
                        </div>
                    )}

                    {/* MAIN DETAILS */}
                    {!isLoading && data && (
                        <>
                            {/* ORDER SUMMARY */}
                            <div className="card p-4 mb-4 shadow-sm">
                                <h4 className="mb-3">Order Summary</h4>

                                <div className="row">
                                    <div className="col-md-4 mb-2">
                                        <strong>Order Number:</strong><br />
                                        #{data.order.order_number}
                                    </div>

                                    <div className="col-md-4 mb-2">
                                        <strong>Date:</strong><br />
                                        {new Date(data.order.created_at).toLocaleString()}
                                    </div>

                                    <div className="col-md-4 mb-2">
                                        <strong>Status:</strong><br />
                                        {data.order.order_status}
                                    </div>

                                    <div className="col-md-4 mb-2">
                                        <strong>Payment Method:</strong><br />
                                        {data.order.payment_method}
                                    </div>

                                    <div className="col-md-4 mb-2">
                                        <strong>Payment Status:</strong><br />
                                        {data.order.payment_status}
                                    </div>

                                    <div className="col-md-4 mb-2">
                                        <strong>Total Amount:</strong><br />
                                        ₹{data.order.total_amount}
                                    </div>
                                </div>
                            </div>

                            {/* ORDER ITEMS TABLE */}
                            <div className="table-wrap mb-4">
                                <h4 className="mb-3">Items</h4>

                                <table className="table tab-full-responsive cart-data-table font-lato">
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Type</th>
                                            <th>Qty</th>
                                            <th>Price</th>
                                            <th>Total</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {data.items.map((item, idx) => (
                                            <tr key={idx}>
                                                <td>
                                                    <strong>{item.product_details?.title}</strong>
                                                </td>
                                                <td>{item.product_type}</td>
                                                <td>{item.quantity}</td>
                                                <td>₹{item.price}</td>
                                                <td>₹{item.total_price}</td>
                                                <td>{
                                                    item.product_type === "mock_test" ? (
                                                        <button
                                                            className="btn btn-primary btn-sm"
                                                            style={{ padding: "6px 14px", borderRadius: "5px", fontWeight: "500" }}
                                                            onClick={(e) => handleStart(e, item)}
                                                        >
                                                            View Questions
                                                        </button>
                                                    ) : ("")
                                                }</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* PAYMENT HISTORY */}
                            <div className="card p-4 mb-4 shadow-sm">
                                <h4 className="mb-3">Payment Info</h4>

                                {data.payment.length === 0 ? (
                                    <p>No payment history available.</p>
                                ) : (
                                    <ul className="list-group">
                                        {data.payment.map((p, i) => (
                                            <li className="list-group-item" key={i}>
                                                <strong>Status:</strong> {p.payment_status} <br />
                                                <strong>Amount:</strong> ₹{p.amount} <br />
                                                {p.transaction_id && (
                                                    <>
                                                        <strong>Transaction ID:</strong> {p.transaction_id}
                                                    </>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            {/* ORDER HISTORY / TIMELINE */}
                            <div className="card p-4 mb-4 shadow-sm">
                                <h4 className="mb-3">Order Timeline</h4>

                                {data.history.length === 0 ? (
                                    <p>No order updates yet.</p>
                                ) : (
                                    <ul className="list-group">
                                        {data.history.map((h, i) => (
                                            <li className="list-group-item" key={i}>
                                                <strong>{h.new_status}</strong>
                                                <br />
                                                <small className="text-muted">
                                                    {new Date(h.changed_at).toLocaleString()}
                                                </small>
                                                {h.comment && (
                                                    <>
                                                        <br />
                                                        <em>{h.comment}</em>
                                                    </>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            {/* BACK BUTTON */}
                            <Link
                                to="/order-list"
                                className="btn btn-dark btn-rounded btn-icon-right mt-3"
                            >
                                Back to Orders <i className="w-icon-long-arrow-left" />
                            </Link>
                        </>
                    )}

                </section>
            </CommonLayout>
        </div>
    );
};

export default OrderDeatils;
