import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCommonContext } from '../../context/commonContext';
import CommonLayout from '../../components/common_for_website/CommonLayout';
import BookDeatilsReview from '../book/BookDeatilsReview';

const MockTestDetails = () => {
    const { id } = useParams();
    const {
        getMockTestDetails,
        mockTestDetails,
        quantity,
        setQuantity,
        addToCart, addToSubscribe
    } = useCommonContext();

    const data = mockTestDetails?.data;

    useEffect(() => {
        getMockTestDetails(id);
    }, [id]);

    /* ----------------------------------------------------
        OFFER / PRICE CALCULATIONS
    ---------------------------------------------------- */
    const isDateActive = (start, end) => {
        if (!start || !end) return false;
        const now = new Date();
        return now >= new Date(start) && now <= new Date(end);
    };

    const getPrice = (b) => {
        if (!b?.is_paid) return "Free";

        const isOfferActive = isDateActive(b.offer_start, b.offer_end);

        if (b?.mark_as_offer && b?.offer_price && isOfferActive)
            return `₹${b.offer_price}`;

        if (b?.sale_price)
            return `₹${b.sale_price}`;

        return `₹${b.price}`;
    };

    /* ----------------------------------------------------
        ADD TO CART → MOCK TEST
    ---------------------------------------------------- */
    const handleAddToCart = () => {
        const cartData = {
            mocktest_id: data.id,
            item_type: "mock_test",
            quantity: quantity
        };

        addToCart(cartData);
    };



    const handleAddToSubscribe = () => {
        const subscribeData = {
            product_id: data.id,
            product_type: "mock_test",
            quantity: quantity
        };

        addToSubscribe(subscribeData);
    };

    if (!data) {
        return (
            <div className="innerPageBx">
                <CommonLayout>
                    <p className="text-center mt-5">Loading...</p>
                </CommonLayout>
            </div>
        );
    }

    return (
        <div className="innerPageBx">
            <CommonLayout>
                {/* breadcrumb */}
                <nav className="breadcrumb-nav">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li><Link to="/">Home</Link></li>
                            <li className="active">{data?.title}</li>
                        </ol>
                    </div>
                </nav>

                <div id="two-columns" className="container">
                    <div className="row">
                        <article id="content" className="col-xs-12 col-md-9">

                            {/* TOP SECTION */}
                            <div className="product-description-column">
                                <div className="alignleft">
                                    <img
                                        src={
                                            data?.cover_image
                                                ? `${import.meta.env.VITE_APP_URL}/uploads/mocktest/${data.cover_image}`
                                                : "/no-image.png"
                                        }
                                        alt={data?.title}
                                    />
                                </div>

                                <div className="descr-wrap">
                                    <h2>{data?.title}</h2>
                                    <p>{data?.subtitle}</p>

                                    {/* PRICE */}
                                    <p style={{ fontSize: 22, fontWeight: 600, marginTop: 20 }}>
                                        Price: {getPrice(data)}
                                    </p>

                                    {/* SHORT DESCRIPTION */}
                                    <p>
                                        {data?.description?.substring(0, 200)}...
                                    </p>

                                    {/* QUANTITY + ADD TO CART */}
                                    <div className="query-wrap">
                                        <div className="quantity">
                                            <button
                                                onClick={() =>
                                                    setQuantity(quantity > 1 ? quantity - 1 : 1)
                                                }
                                            >
                                                -
                                            </button>

                                            <input type="number" readOnly value={quantity} />

                                            <button onClick={() => setQuantity(quantity + 1)}>+</button>
                                        </div>

                                        <button
                                            className="btn btn-warning btn-theme font-lato text-uppercase"
                                            onClick={handleAddToCart}
                                        >
                                            Add to cart
                                        </button>
                                        <button
                                            className="btn btn-warning btn-theme font-lato text-uppercase"
                                            onClick={handleAddToSubscribe}
                                        >
                                            Add to Subscribe
                                        </button>
                                    </div>

                                    {/* PAPERS LIST */}
                                    <h4 style={{ marginTop: 25 }}>Included Papers</h4>
                                    <ul>
                                        {data?.papers?.length > 0 ? (
                                            data.papers.map((p, index) => (
                                                <li key={index}>{p.paper_title}</li>
                                            ))
                                        ) : (
                                            <li>No papers available</li>
                                        )}
                                    </ul>

                                </div>
                            </div>

                            {/* TABS */}
                            <ul className="nav nav-tabs pro-descr-tab-list font-roboto" role="tablist">
                                <li role="presentation">
                                    <a href="#Description" role="tab" data-toggle="tab">Description</a>
                                </li>
                                <li role="presentation" className="active">
                                    <a href="#Reviews" role="tab" data-toggle="tab">Reviews</a>
                                </li>
                            </ul>

                            <BookDeatilsReview />
                        </article>
                    </div>
                </div>
            </CommonLayout>
        </div>
    );
};

export default MockTestDetails;
