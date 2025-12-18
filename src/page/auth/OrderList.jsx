import React, { useEffect } from 'react'
import { useCommonContext } from '../../context/commonContext';
import { Link } from 'react-router-dom';
import CommonLayout from '../../components/common_for_website/CommonLayout';
import Empaty from '../../components/common_for_website/Empaty';

const OrderList = () => {
    const { getOrderList, orderList } = useCommonContext();

    useEffect(() => {
        getOrderList();
    }, []);

    const isLoading = orderList?.loading;
    const isEmpty = !isLoading && orderList?.data?.total === 0;

    return (
        <div className="innerPageBx">
            <CommonLayout>

                {/* Breadcrumb */}
                <nav className="breadcrumb-nav">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li><Link to="/">Home</Link></li>
                            <li className="active">Order List</li>
                        </ol>
                    </div>
                </nav>

                {/* Order List Section */}
                <section className="cart-content-block container">

                    {/* Loader */}
                    {isLoading && (
                        <div className="d-flex justify-content-center py-5">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    )}

                    {/* Empty State */}
                    {!isLoading && isEmpty && <Empaty />}

                    {/* Table */}
                    {!isLoading && !isEmpty && (
                        <div className="table-wrap">
                            <table className="table tab-full-responsive cart-data-table font-lato">
                                <thead>
                                    <tr>
                                        <th>Order</th>
                                        <th>Date</th>
                                        <th>Mode</th>
                                        <th>Payment Status</th>
                                        <th>Order Status</th>
                                        <th>Total</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {orderList?.data?.data?.map((order, index) => (
                                        <tr key={order?.order_number || index}>
                                            <td>#{order?.order_number}</td>

                                            <td>
                                                {new Date(order?.created_at).toLocaleDateString()}
                                            </td>

                                            <td>{order?.payment_method}</td>

                                            <td>{order?.payment_status}</td>

                                            <td>{order?.order_status}</td>

                                            <td>
                                                <span className="order-price">₹{order?.total_amount}</span>
                                                {" "}for{" "}
                                                <span className="order-quantity">{order?.items_count}</span>
                                                {" "}
                                                item{order?.items_count > 1 ? "s" : ""}
                                            </td>

                                            <td>
                                                <Link
                                                    to="/order-details"
                                                    state={{ order_id: order.id }}
                                                    className="btn btn-outline btn-sm"
                                                >
                                                    Order Details
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <Link
                                to="/shop"
                                className="btn btn-dark btn-rounded btn-icon-right mt-3"
                            >
                                Go Shop <i className="w-icon-long-arrow-right" />
                            </Link>
                        </div>
                    )}

                </section>
            </CommonLayout>
        </div>
    )
}

export default OrderList;
