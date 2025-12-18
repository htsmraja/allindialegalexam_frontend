import React, { useEffect } from 'react'
import { useCommonContext } from '../../../context/commonContext'
import CommonLayout from '../../common_for_website/CommonLayout';
import { Link, useNavigate } from 'react-router-dom';
import Empaty from '../../common_for_website/Empaty';

const SubscribeList = () => {
    const navigate = useNavigate();
    const { subscribeList, userSubscribeList, } = useCommonContext();
    useEffect(() => { userSubscribeList() }, [])
    const getImage = (item) => {
        if (item.product_type === "course") {
            return `${import.meta.env.VITE_APP_URL}/${item.product_details.thumbnail}`;
        }
        if (item.product_type === "book") {
            return `${import.meta.env.VITE_APP_URL}/uploads/books/${item.product_details.cover}`;
        }
        if (item.product_type === "mock_test") {
            return `${import.meta.env.VITE_APP_URL}/uploads/mocktest/${item.product_details.cover}`;
        }
        return "/placeholder.png";
    };
    const handleStart = (e, item) => {
        e.preventDefault();   //  stop page reload

        navigate("/question-paper-list", {
            state: { id: item.product_id }
        });
    };
    return (
        <div className="innerPageBx">
            <CommonLayout>
                <nav className="breadcrumb-nav">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li><Link to="/">Home</Link></li>
                            <li className="active">Subcribtion List</li>
                        </ol>
                    </div>
                </nav>
                <section className="cart-content-block container">
                    <form className="cart-form">
                        {subscribeList.total === 0 ? (
                            <Empaty />
                        ) : (
                            <div className="table-wrap">
                                <table className="table tab-full-responsive cart-data-table font-lato">
                                    <thead className="hidden-xs">
                                        <tr>
                                            <th className="col01">Product</th>
                                            <th>Type</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            subscribeList.data.map((item, index) => (
                                                <tr key={item.id}>
                                                    <td data-title="Product" className="col01">
                                                        <div>


                                                            <div className="pro-name-wrap">
                                                                <div className="alignleft no-shrink hidden-xs">
                                                                    <img
                                                                        src={getImage(item)}
                                                                        alt="thumb"
                                                                        style={{ width: "80px" }}
                                                                    />
                                                                </div>

                                                                <div className="descr-wrap">
                                                                    <h3 className="fw-normal">
                                                                        {item.product_type === "course" && item.product_details.title}
                                                                        {item.product_type === "book" && item.product_details.title}
                                                                        {item.product_type === "mock_test" && item.product_details.title}
                                                                    </h3>

                                                                    <p className="text-muted">
                                                                        {item.product_type === "course" && (
                                                                            <>Batch: <b>{item.product_details.batch.name}</b></>
                                                                        )}
                                                                        {item.product_type === "book" && (
                                                                            <>
                                                                                Type:
                                                                                {/* <b>{item.book_type}</b> */}
                                                                                <b>Soft Copy</b>
                                                                            </>
                                                                        )}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        {item.product_type}
                                                    </td>
                                                    <td className="text-center">
                                                        <button
                                                            className="btn btn-primary btn-sm"
                                                            style={{ padding: "6px 14px", borderRadius: "5px", fontWeight: "500" }}
                                                            onClick={(e) => handleStart(e, item)}
                                                        >
                                                            View Questions
                                                        </button>

                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </form>
                </section>
            </CommonLayout>
        </div>
    )
}

export default SubscribeList