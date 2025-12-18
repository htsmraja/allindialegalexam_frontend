import React from 'react'

const BookDeatilsReview = () => {
    return (
        <>
            <div className="tab-content">
                <div role="tabpanel" className="tab-pane fade" id="Description">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div role="tabpanel" className="tab-pane fade in active" id="Reviews">
                    <h4>2 Reviews for Product</h4>
                    <ul className="list-unstyled reviewsList">
                        <li>
                            <div className="alignleft">
                                <a href="#">
                                    <img src="./assets/images/img37.jpg" alt="Lavin Duster" />
                                </a>
                            </div>
                            <div className="description-wrap">
                                <div className="descrHead">
                                    <h3>
                                        Lavin Duster –{" "}
                                        <time dateTime="2011-01-12">March 7, 2016</time>
                                    </h3>
                                    <ul className="star-rating list-unstyled justify-end">
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
                                </div>
                                <p>
                                    Brunch fap cardigan, gentrify put a bird on it distillery
                                    mumblecore you probably haven't heard of them asymmetrical
                                    bushwick. Put a bird on it schlitz fashion.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="alignleft">
                                <a href="#">
                                    <img src="./assets/images/img38.jpg" alt="Tim Cook" />
                                </a>
                            </div>
                            <div className="description-wrap">
                                <div className="descrHead">
                                    <h3>
                                        Tim Cook – <time dateTime="2011-01-12">March 5, 2016</time>
                                    </h3>
                                    <ul className="star-rating list-unstyled justify-end">
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
                                </div>
                                <p>
                                    Flxie sartorial cray flexitarian pop-up health goth
                                    single-origin coffee sriracha
                                </p>
                            </div>
                        </li>
                    </ul>
                    <form action="#" className="reviesSubmissionForm">
                        <h2 className="text-noCase">Add a Review</h2>
                        <p>
                            Your email address will not be published. Required fields are
                            marked <span className="required">*</span>
                        </p>
                        <div className="form-group">
                            <span className="formLabel fw-normal font-lato no-shrink">
                                Your Rating
                            </span>
                            <ul className="star-rating list-unstyled">
                                <li>
                                    <input
                                        id="rate1"
                                        className="customFormReset"
                                        type="checkbox"
                                    />
                                    <label htmlFor="rate1" className="fas fa-star">
                                        <span className="sr-only">star</span>
                                    </label>
                                </li>
                                <li>
                                    <input
                                        id="rate2"
                                        className="customFormReset"
                                        type="checkbox"
                                    />
                                    <label htmlFor="rate2" className="fas fa-star">
                                        <span className="sr-only">star</span>
                                    </label>
                                </li>
                                <li>
                                    <input
                                        id="rate3"
                                        className="customFormReset"
                                        type="checkbox"
                                    />
                                    <label htmlFor="rate3" className="fas fa-star">
                                        <span className="sr-only">star</span>
                                    </label>
                                </li>
                                <li>
                                    <input
                                        id="rate4"
                                        className="customFormReset"
                                        type="checkbox"
                                    />
                                    <label htmlFor="rate4" className="fas fa-star">
                                        <span className="sr-only">star</span>
                                    </label>
                                </li>
                                <li>
                                    <input
                                        id="rate5"
                                        className="customFormReset"
                                        type="checkbox"
                                    />
                                    <label htmlFor="rate5" className="fas fa-star">
                                        <span className="sr-only">star</span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div className="form-group">
                            <label
                                htmlFor="rview"
                                className="formLabel fw-normal font-lato no-shrink"
                            >
                                Your Review <span className="required">*</span>
                            </label>
                            <textarea
                                id="rview"
                                className="form-control element-block"
                                defaultValue={""}
                            />
                        </div>
                        <div className="form-group">
                            <label
                                htmlFor="name"
                                className="formLabel fw-normal font-lato no-shrink"
                            >
                                Name <span className="required">*</span>
                            </label>
                            <input
                                id="name"
                                className="form-control element-block"
                                type="text"
                            />
                        </div>
                        <div className="form-group">
                            <label
                                htmlFor="Email"
                                className="formLabel fw-normal font-lato no-shrink"
                            >
                                Email <span className="required">*</span>
                            </label>
                            <input
                                id="Email"
                                className="form-control element-block"
                                type="email"
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-theme btn-warning text-uppercase font-lato fw-bold"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <h2>Related Products</h2>
            <div className="row flex-wrap">
                <div className="col-xs-12 col-sm-4">
                    {/* product module */}
                    <article className="product-module">
                        <div className="aligncenter">
                            <a href="#">
                                <img
                                    src="./assets/images/img72.jpg"
                                    alt="image description"
                                />
                            </a>
                        </div>
                        <h3 className="fw-semi">
                            <a href="#">Wirebound Notebook Set</a>
                        </h3>
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
                        <strong className="price element-block fw-semi">$10.00</strong>
                        <a href="#" className="btn btn-default font-lato text-uppercase">
                            Add to cart
                        </a>
                    </article>
                </div>
                <div className="col-xs-12 col-sm-4">
                    {/* product module */}
                    <article className="product-module">
                        <div className="aligncenter">
                            <a href="#">
                                <img
                                    src="./assets/images/img73.jpg"
                                    alt="image description"
                                />
                            </a>
                        </div>
                        <h3 className="fw-semi">
                            <a href="#">Boll Point Pen</a>
                        </h3>
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
                        <strong className="price element-block fw-semi">$10.00</strong>
                        <a href="#" className="btn btn-default font-lato text-uppercase">
                            Add to cart
                        </a>
                    </article>
                </div>
                <div className="col-xs-12 col-sm-4">
                    <article className="product-module">
                        <div className="aligncenter">
                            <a href="#">
                                <img
                                    src="./assets/images/img74.jpg"
                                    alt="image description"
                                />
                            </a>
                        </div>
                        <h3 className="fw-semi">
                            <a href="#">Cashbound File Book</a>
                        </h3>
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
                        <strong className="price element-block fw-semi">$66.00</strong>
                        <a href="#" className="btn btn-default font-lato text-uppercase">
                            Add to cart
                        </a>
                    </article>
                </div>
            </div>
        </>
    )
}

export default BookDeatilsReview