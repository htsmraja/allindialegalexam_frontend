import React from 'react'

const Reviews = () => {
    return (
        <div>
            <h2>Reviews</h2>
            <h3 className="h6 fw-semi">There are 2 reviews on this course</h3>
            {/* reviewsList */}
            <ul className="list-unstyled reviewsList">
                <li>
                    <div className="alignleft">
                        <a href="javascript:void(0)">
                            <img src="./assets/images/img37.jpg" alt="Lavin Duster" />
                        </a>
                    </div>
                    <div className="description-wrap">
                        <div className="descrHead">
                            <h3>
                                Lavin Duster – <time dateTime="2011-01-12">March 7, 2016</time>
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
                        <a href="javascript:void(0)">
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
                            Flxie sartorial cray flexitarian pop-up health goth single-origin
                            coffee sriracha
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Reviews