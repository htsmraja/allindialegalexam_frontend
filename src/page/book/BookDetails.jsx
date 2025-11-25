import React from 'react'
import CommonLayout from '../../components/common_for_website/CommonLayout'
import { Link } from 'react-router-dom'

const BookDetails = () => {
  return (
    <>
      <div className='innerPageBx'>
        <CommonLayout>
          {/* page header start */}
          <nav className="breadcrumb-nav">
            <div className="container">
              <ol className="breadcrumb">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="active">Book Details</li>
              </ol>
            </div>
          </nav>
          {/* page header end */}

          {/* page body part start */}
          <div id="two-columns" className="container">
            <div className="row">
              {/* content */}
              <article id="content" className="col-xs-12 col-md-9">
                {/* product description column */}
                <div className="product-description-column">
                  <div className="alignleft">
                    <img src="./assets/images/img78.jpg" alt="image description" />
                  </div>
                  <div className="descr-wrap">
                    <h2>Yellow Drawing Pencil Set</h2>
                    {/* reviews wrap */}
                    <div className="reviews-wrap">
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
                      <strong className="fw-normal font-lato element-block text-small">
                        (5 Customers reviews)
                      </strong>
                    </div>
                    {/* price */}
                    <strong className="price element-block fw-semi">$18.00</strong>
                    <p>
                      Air plant keffiyeh tilde umami PBR&amp;B taxidermy yr next level.
                      Glossier authentic normcore, keytar tumblr green juice VHS copper
                      mug chartreuse portland banjo single origin coffee tattooed pabst.
                      Raclette trust fund 8-bit you probably haven't heard of them fap.
                    </p>
                    <strong className="element-block storage-tag text-success fw-normal font-lato">
                      In stock
                    </strong>
                    {/* query wrap */}
                    <div className="query-wrap">
                      <div className="quantity">
                        <input
                          type="number"
                          className="form-control"
                          min={1}
                          defaultValue={1}
                        />
                      </div>
                      <a
                        href="javascript:void(0)"
                        className="btn btn-warning btn-theme font-lato text-uppercase"
                      >
                        Add to cart
                      </a>
                    </div>
                    <div className="categories-wrap font-lato">
                      <p>
                        Category: <a href="#">Stationary</a>, <a href="#">Notebook</a>
                      </p>
                      <p>
                        Tags: <a href="#">Pencil</a>, <a href="#">Drawing</a>
                      </p>
                    </div>
                  </div>
                </div>
                {/* pro descr tab list */}
                <ul
                  className="nav nav-tabs pro-descr-tab-list font-roboto"
                  role="tablist"
                >
                  <li role="presentation">
                    <a
                      href="#Description"
                      aria-controls="Description"
                      role="tab"
                      data-toggle="tab"
                    >
                      Description
                    </a>
                  </li>
                  <li role="presentation" className="active">
                    <a
                      href="#Reviews"
                      aria-controls="Reviews"
                      role="tab"
                      data-toggle="tab"
                    >
                      Reviews (2)
                    </a>
                  </li>
                </ul>
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
              </article>
              {/* sidebar */}
              <aside className="col-xs-12 col-md-3" id="sidebar">
                {/* widget search */}
                <section className="widget widget_search">
                  {/* search form */}
                  <form action="#" className="search-form">
                    <fieldset>
                      <input
                        placeholder=" Search…"
                        className="form-control"
                        name="s"
                        type="search"
                      />
                      <button type="button" className="fas fa-search">
                        <span className="sr-only">search</span>
                      </button>
                    </fieldset>
                  </form>
                </section>
                {/* widget categories */}
                <section className="widget widget_categories">
                  <h3>Course Categories</h3>
                  <ul className="list-unstyled text-capitalize font-lato">
                    <li className="cat-item cat-item-1">
                      <a href="#">Notebook</a>
                    </li>
                    <li className="cat-item active cat-item-2">
                      <a href="#">Office</a>
                    </li>
                    <li className="cat-item cat-item-3">
                      <a href="#">Basics</a>
                    </li>
                    <li className="cat-item cat-item-4">
                      <a href="#">Art Supplies</a>
                    </li>
                    <li className="cat-item cat-item-5">
                      <a href="#">Materials</a>
                    </li>
                  </ul>
                </section>
                {/* widget popular posts */}
                <section className="widget widget_popular_posts">
                  <h3>Popular Courses</h3>
                  {/* widget cources list */}
                  <ul className="widget-cources-list list-unstyled">
                    <li>
                      <a href="#">
                        <div className="alignleft">
                          <img src="./assets/images/img75.jpg" alt="image description" />
                        </div>
                        <div className="description-wrap">
                          <h4>Wirebound Notebook</h4>
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
                          <strong className="price text-primary element-block font-lato text-uppercase">
                            $18.00
                          </strong>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="alignleft">
                          <img src="./assets/images/img76.jpg" alt="image description" />
                        </div>
                        <div className="description-wrap">
                          <h4>Compact Stabler - Blue</h4>
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
                          <strong className="price text-primary element-block font-lato text-uppercase">
                            $24.00
                          </strong>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="alignleft">
                          <img src="./assets/images/img77.jpg" alt="image description" />
                        </div>
                        <div className="description-wrap">
                          <h4>Excercise Book Sets</h4>
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
                          <strong className="price text-primary element-block font-lato text-uppercase">
                            $33.00
                          </strong>
                        </div>
                      </a>
                    </li>
                  </ul>
                </section>
              </aside>
            </div>
          </div>
          {/* page body part end */}


        </CommonLayout>
      </div>
    </>
  )
}

export default BookDetails