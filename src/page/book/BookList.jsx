import React from 'react'
import CommonLayout from '../../components/common_for_website/CommonLayout'
import { Link } from 'react-router-dom'

const BookList = () => {
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
                <li className="active">Book List</li>
              </ol>
            </div>
          </nav>
          {/* page header end */}

          {/* page body part start */}
          <div id="two-columns" className="container">
            <div className="row">
              {/* content */}
              <article id="content" className="col-xs-12 col-md-9">
                {/* show head */}
                <header className="show-head">
                  <p>Showing 1–9 of 15 results</p>
                  <select className="form-control">
                    <option value={0}>Default Sorting</option>
                    <option value={0}>Default Sorting</option>
                    <option value={0}>Default Sorting</option>
                    <option value={0}>Default Sorting</option>
                  </select>
                </header>
                <div className="row flex-wrap">
                  <div className="col-xs-12 col-sm-6 col-lg-4">
                    {/* product module */}
                    <article className="product-module">
                      <div className="aligncenter">
                        <a href="javascript:void(0)">
                          <img
                            src="./assets/images/img66.jpg"
                            alt="image description"
                          />
                        </a>
                      </div>
                      <h3 className="fw-semi">
                        <a href="javascript:void(0)">Wirebound Notebook</a>
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
                      <strong className="price element-block fw-semi">$45.00</strong>
                      <a
                        href="javascript:void(0)"
                        className="btn btn-default font-lato text-uppercase"
                      >
                        Add to cart
                      </a>
                    </article>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-lg-4">
                    {/* product module */}
                    <article className="product-module">
                      <div className="aligncenter">
                        <a href="javascript:void(0)">
                          <img
                            src="./assets/images/img67.jpg"
                            alt="image description"
                          />
                        </a>
                      </div>
                      <h3 className="fw-semi">
                        <a href="javascript:void(0)">Compact Stabler - Blue</a>
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
                      <strong className="price element-block fw-semi">$99.00</strong>
                      <a
                        href="javascript:void(0)"
                        className="btn btn-default font-lato text-uppercase"
                      >
                        Add to cart
                      </a>
                    </article>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-lg-4">
                    {/* product module */}
                    <article className="product-module">
                      <div className="aligncenter">
                        <a href="javascript:void(0)">
                          <img
                            src="./assets/images/img68.jpg"
                            alt="image description"
                          />
                        </a>
                      </div>
                      <h3 className="fw-semi">
                        <a href="javascript:void(0)">Wooden Pencil Yellow</a>
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
                      <strong className="price element-block fw-semi">$84.00</strong>
                      <a
                        href="javascript:void(0)"
                        className="btn btn-default font-lato text-uppercase"
                      >
                        Add to cart
                      </a>
                    </article>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-lg-4">
                    {/* product module */}
                    <article className="product-module">
                      <div className="aligncenter">
                        <a href="javascript:void(0)">
                          <img
                            src="./assets/images/img69.jpg"
                            alt="image description"
                          />
                        </a>
                      </div>
                      <h3 className="fw-semi">
                        <a href="javascript:void(0)">Excercise Book Sets</a>
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
                      <strong className="price element-block fw-semi">$65.00</strong>
                      <a
                        href="javascript:void(0)"
                        className="btn btn-default font-lato text-uppercase"
                      >
                        Add to cart
                      </a>
                    </article>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-lg-4">
                    {/* product module */}
                    <article className="product-module">
                      <div className="aligncenter">
                        <a href="javascript:void(0)">
                          <img
                            src="./assets/images/img72.jpg"
                            alt="image description"
                          />
                        </a>
                      </div>
                      <h3 className="fw-semi">
                        <a href="javascript:void(0)">Paper scissors</a>
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
                      <strong className="price element-block fw-semi">$40.00</strong>
                      <a
                        href="javascript:void(0)"
                        className="btn btn-default font-lato text-uppercase"
                      >
                        Add to cart
                      </a>
                    </article>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-lg-4">
                    {/* product module */}
                    <article className="product-module">
                      <div className="aligncenter">
                        <a href="javascript:void(0)">
                          <img
                            src="./assets/images/img71.jpg"
                            alt="image description"
                          />
                        </a>
                      </div>
                      <h3 className="fw-semi">
                        <a href="javascript:void(0)">Pencil Sharpner-3 in one</a>
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
                      <strong className="price element-block fw-semi">$55.00</strong>
                      <a
                        href="javascript:void(0)"
                        className="btn btn-default font-lato text-uppercase"
                      >
                        Add to cart
                      </a>
                    </article>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-lg-4">
                    {/* product module */}
                    <article className="product-module">
                      <div className="aligncenter">
                        <a href="javascript:void(0)">
                          <img
                            src="./assets/images/img74.jpg"
                            alt="image description"
                          />
                        </a>
                      </div>
                      <h3 className="fw-semi">
                        <a href="javascript:void(0)">Wirebound Notebook Set</a>
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
                      <a
                        href="javascript:void(0)"
                        className="btn btn-default font-lato text-uppercase"
                      >
                        Add to cart
                      </a>
                    </article>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-lg-4">
                    {/* product module */}
                    <article className="product-module">
                      <div className="aligncenter">
                        <a href="javascript:void(0)">
                          <img
                            src="./assets/images/img66.jpg"
                            alt="image description"
                          />
                        </a>
                      </div>
                      <h3 className="fw-semi">
                        <a href="javascript:void(0)">Boll Point Pen</a>
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
                      <a
                        href="javascript:void(0)"
                        className="btn btn-default font-lato text-uppercase"
                      >
                        Add to cart
                      </a>
                    </article>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-lg-4">
                    {/* product module */}
                    <article className="product-module">
                      <div className="aligncenter">
                        <a href="javascript:void(0)">
                          <img
                            src="./assets/images/img68.jpg"
                            alt="image description"
                          />
                        </a>
                      </div>
                      <h3 className="fw-semi">
                        <a href="javascript:void(0)">Cashbound File Book</a>
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
                      <a
                        href="javascript:void(0)"
                        className="btn btn-default font-lato text-uppercase"
                      >
                        Add to cart
                      </a>
                    </article>
                  </div>
                </div>
                <nav aria-label="Page navigation">
                  {/* pagination */}
                  <ul className="pagination">
                    <li className="active">
                      <a href="#">
                        1 <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#" aria-label="Next">
                        <span aria-hidden="true">›</span>
                      </a>
                    </li>
                  </ul>
                </nav>
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
                      <a href="javascript:void(0)">Notebook</a>
                    </li>
                    <li className="cat-item active cat-item-2">
                      <a href="javascript:void(0)">Office</a>
                    </li>
                    <li className="cat-item cat-item-3">
                      <a href="javascript:void(0)">Basics</a>
                    </li>
                    <li className="cat-item cat-item-4">
                      <a href="javascript:void(0)">Art Supplies</a>
                    </li>
                    <li className="cat-item cat-item-5">
                      <a href="javascript:void(0)">Materials</a>
                    </li>
                  </ul>
                </section>
                {/* widget popular posts */}
                <section className="widget widget_popular_posts">
                  <h3>Popular Courses</h3>
                  {/* widget cources list */}
                  <ul className="widget-cources-list list-unstyled">
                    <li>
                      <a href="javascript:void(0)">
                        <div className="alignleft">
                          <img src="./assets/images/img66.jpg" alt="image description" />
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
                      <a href="javascript:void(0)">
                        <div className="alignleft">
                          <img src="./assets/images/img67.jpg" alt="image description" />
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
                      <a href="javascript:void(0)">
                        <div className="alignleft">
                          <img src="./assets/images/img68.jpg" alt="image description" />
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

export default BookList