import React from 'react'
import { Link } from 'react-router-dom';

const CourseCard = ({ b }) => {
    const isDateActive = (start, end) => {
        if (!start || !end) return false;
        const now = new Date();
        return now >= new Date(start) && now <= new Date(end);
    };

    const getPrice = (b) => {
        // subscription allowed means paid course
        if (!b?.is_subscription_allowed) return "Free";

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
    return (
        <article className="popular-post">
            {
                b?.mark_as_offer && b?.offer_price && isDateActive(b.offer_start, b.offer_end) ? (
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
                ) : (
                    <span></span>
                )
            }



            <div className="aligncenter">
                <img

                    src={
                        b?.thumbnail
                            ? `${import.meta.env.VITE_APP_URL}/${b.thumbnail}`
                            : "/no-image.png"
                    }
                    alt={b?.title}
                />

            </div>
            <div>
                <strong className="bg-primary text-white font-lato text-uppercase price-tag">
                    {getPrice(b)}
                </strong>
                {b?.difficulty && (
                    <strong
                        className="bg-secondary text-white font-lato text-uppercase price-tag"
                        style={{ marginLeft: 10 }}
                    >
                        For {b?.difficulty}
                    </strong>
                )}

            </div>
            <h3 className="post-heading">
                <Link to={`/course-deatils/${b?.slug}`}>
                    {b?.title}
                </Link>
            </h3>
            {/* <div >
                                        <button className="btn btn-success btn-sm mb-2 ">Add to cart</button>
                                        <button className="btn btn-warning btn-sm mb-2">Wishlist</button>
                                    </div> */}
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

export default CourseCard