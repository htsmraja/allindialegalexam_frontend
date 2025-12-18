

import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useCommonContext } from '../../context/commonContext';

const MockTestCard = ({ b }) => {
    const { addToCart, addToSubscribe } = useCommonContext();
    const [quantity, setQuantity] = useState(1);

    const isDateActive = (start, end) => {
        if (!start || !end) return false;
        const now = new Date();
        return now >= new Date(start) && now <= new Date(end);
    };

    const getPrice = (b) => {
        // subscription allowed means paid course
        if (!b?.is_paid) return "Free";

        const isOfferActive = isDateActive(b.offer_start, b.offer_end);

        // OFFER PRICE
        if (b?.mark_as_offer && b?.offer_price && isOfferActive) {
            return `₹${b.offer_price}`;
        }

        // SALE PRICE
        if (b?.sale_price) {
            return `₹${b.sale_price}`;
        }

        // NORMAL PRICE
        return `₹${b.price}`;
    };

    const handleAddToCart = () => {
        const cartData = {
            product_id: b.id,
            product_type: "mock_test",
            quantity,
        };
        addToCart(cartData);
    };

    const handleAddToSubscribe = () => {
        const subscribeData = {
            product_id: b.id,
            product_type: "mock_test",
            quantity: quantity
        };

        addToSubscribe(subscribeData);
    };
    return (
        <article className="popular-post">
            {
                b?.mark_as_offer && b?.offer_price && isDateActive(b.offer_start, b.offer_end) && (
                    <span
                        className="badge bg-primary"
                        style={{
                            position: "absolute",
                            top: 10,
                            left: 10,
                            zIndex: 10,
                            padding: "5px 10px",
                            fontSize: "12px",
                        }}
                    >
                        IN OFFER
                    </span>
                )
            }



            <div className="aligncenter">
                <img

                    src={
                        b?.cover_image
                            ? `${import.meta.env.VITE_APP_URL}/uploads/mocktest/${b.cover_image}`
                            : "/no-image.png"
                    }
                    alt={b?.title}
                />

            </div>
            <div>
                <strong className="bg-primary text-white font-lato text-uppercase price-tag">
                    {getPrice(b)}
                </strong>
                {b?.paper_count > 0 && (
                    <strong
                        className="bg-secondary text-white font-lato text-uppercase price-tag"
                        style={{ marginLeft: 10 }}
                    >
                        For {b?.paper_count}
                    </strong>
                )}
                <strong
                    className="bg-secondary text-white font-lato text-uppercase price-tag"
                    style={{ marginLeft: 10 }}
                >
                    For {b?.exam_type_name}
                </strong>

            </div>
            <h3 className="post-heading">
                <Link to={`/mock-test-details/${b?.id}`}>
                    {b?.title}
                </Link>
            </h3>
            <div>
                {b.is_paid ? (
                    <div className="d-flex flex-column gap-2">
                        <button
                            className="btn btn-success btn-sm w-100"
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                        </button>

                        <button
                            className="btn btn-warning btn-sm w-100"
                        >
                            Wishlist
                        </button>
                    </div>
                ) : (
                    <div className="d-flex flex-column gap-2">
                        <button
                            className="btn btn-primary btn-sm w-100"
                            onClick={handleAddToSubscribe}
                        >
                            Add to Subscribe
                        </button>
                    </div>
                )}
            </div>

            <footer className="post-foot gutter-reset">
                <ul className="list-unstyled post-statuses-list">
                    <li>
                        <a href="#">
                            <span className="fas icn fa-users no-shrink">
                                <span className="sr-only">users</span>
                            </span>
                            <strong className="text fw-normal">98</strong>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="fas icn no-shrink fa-comments">
                                <span className="sr-only">comments</span>
                            </span>
                            <strong className="text fw-normal">10</strong>
                        </a>
                    </li>
                </ul>
                <ul className="star-rating list-unstyled">
                    <li>
                        <span className="fas fa-star">
                            <span className="sr-only">star</span>
                        </span>
                    </li>
                    <li>
                        <span className="fas fa-star">
                            <span className="sr-only">star</span>
                        </span>
                    </li>
                    <li>
                        <span className="fas fa-star">
                            <span className="sr-only">star</span>
                        </span>
                    </li>
                    <li>
                        <span className="fas fa-star">
                            <span className="sr-only">star</span>
                        </span>
                    </li>
                    <li>
                        <span className="fas fa-star">
                            <span className="sr-only">star</span>
                        </span>
                    </li>
                </ul>
            </footer>
        </article>
    )
}

export default MockTestCard