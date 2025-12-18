import React from 'react'

const AddReview = () => {
    return (
        <form action="#" className="reviesSubmissionForm">
            <h2 className="text-noCase">Add a Review</h2>
            <p>
                Your email address will not be published. Required fields are marked{" "}
                <span className="required">*</span>
            </p>
            <div className="form-group">
                <span className="formLabel fw-normal font-lato no-shrink">
                    Your Rating
                </span>
                <ul className="star-rating list-unstyled">
                    <li>
                        <input type="checkbox" id="rate1" className="customFormReset" />
                        <label htmlFor="rate1" className="fas fa-star">
                            <span className="sr-only">star</span>
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="rate2" className="customFormReset" />
                        <label htmlFor="rate2" className="fas fa-star">
                            <span className="sr-only">star</span>
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="rate3" className="customFormReset" />
                        <label htmlFor="rate3" className="fas fa-star">
                            <span className="sr-only">star</span>
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="rate4" className="customFormReset" />
                        <label htmlFor="rate4" className="fas fa-star">
                            <span className="sr-only">star</span>
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="rate5" className="customFormReset" />
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
                <input type="text" id="name" className="form-control element-block" />
            </div>
            <div className="form-group">
                <label
                    htmlFor="Email"
                    className="formLabel fw-normal font-lato no-shrink"
                >
                    Email <span className="required">*</span>
                </label>
                <input
                    type="email"
                    id="Email"
                    className="form-control element-block"
                />
            </div>
            <button
                type="submit"
                className="btn btn-theme btn-warning text-uppercase font-lato fw-bold"
            >
                Submit
            </button>
        </form>
    )
}

export default AddReview