import React from 'react'
import CommonLayout from '../../components/common_for_website/CommonLayout'
import { Link } from 'react-router-dom'

const CourseList = () => {
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
                <li className="active">Course List</li>
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
                  <p> Showing 1–9 of 15 results</p>
                  <select className="form-control">
                    <option value={0}>All Courses</option>
                    <option value={0}>All Courses</option>
                    <option value={0}>All Courses</option>
                    <option value={0}>All Courses</option>
                  </select>
                </header>
                <div className="row flex-wrap">
                  <div className="col-xs-12 col-sm-6 col-lg-4">
                    {/* popular post */}
                    <article className="popular-post">
                      <div className="aligncenter">
                        <img src="./assets/images/img02.jpg" alt="image description" />
                      </div>
                      <div>
                        <strong className="bg-primary text-white font-lato text-uppercase price-tag">
                          $99.00
                        </strong>
                      </div>
                      <h3 className="post-heading">
                        <a href="javascript:void(0)">
                          French for Beginners to Advanced Training
                        </a>
                      </h3>
                      <div className="post-author">
                        <div className="alignleft rounded-circle no-shrink">
                          <a href="javascript:void(0)">
                            <img
                              src="./assets/images/img06.jpg"
                              className="rounded-circle"
                              alt="image description"
                            />
                          </a>
                        </div>
                        <h4 className="author-heading">
                          <a href="javascript:void(0)">Keny White</a>
                        </h4>
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
                  </div>
                  <div className="col-xs-12 col-sm-6 col-lg-4">
                    {/* popular post */}
                    <article className="popular-post">
                      <div className="aligncenter">
                        <img src="./assets/images/img03.jpg" alt="image description" />
                      </div>
                      <div>
                        <strong className="bg-success text-white font-lato text-uppercase price-tag">
                          Free
                        </strong>
                      </div>
                      <h3 className="post-heading">
                        <a href="javascript:void(0)">
                          Introduction to Mobile Apps Development
                        </a>
                      </h3>
                      <div className="post-author">
                        <div className="alignleft no-shrink rounded-circle">
                          <a href="javascript:void(0)">
                            <img
                              src="./assets/images/img07.jpg"
                              className="rounded-circle"
                              alt="image description"
                            />
                          </a>
                        </div>
                        <h4 className="author-heading">
                          <a href="javascript:void(0)">Sarah Johnson</a>
                        </h4>
                      </div>
                      <footer className="post-foot gutter-reset">
                        <ul className="list-unstyled post-statuses-list">
                          <li>
                            <a href="#">
                              <span className="fas icn fa-users no-shrink">
                                <span className="sr-only">users</span>
                              </span>
                              <strong className="text fw-normal">200</strong>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="fas icn no-shrink fa-comments">
                                <span className="sr-only">comments</span>
                              </span>
                              <strong className="text fw-normal">3</strong>
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
                            <span className="far fa-star">
                              <span className="sr-only">star</span>
                            </span>
                          </li>
                        </ul>
                      </footer>
                    </article>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-lg-4">
                    {/* popular post */}
                    <article className="popular-post">
                      <div className="aligncenter">
                        <img src="./assets/images/img04.jpg" alt="image description" />
                      </div>
                      <div>
                        <strong className="bg-primary text-white font-lato text-uppercase price-tag">
                          $85.60
                        </strong>
                      </div>
                      <h3 className="post-heading">
                        <a href="javascript:void(0)">How to Become a Startup Founder</a>
                      </h3>
                      <div className="post-author">
                        <div className="alignleft no-shrink rounded-circle">
                          <a href="javascript:void(0)">
                            <img
                              src="./assets/images/img08.jpg"
                              className="rounded-circle"
                              alt="image description"
                            />
                          </a>
                        </div>
                        <h4 className="author-heading">
                          <a href="javascript:void(0)">Jhon Milton</a>
                        </h4>
                      </div>
                      <footer className="post-foot gutter-reset">
                        <ul className="list-unstyled post-statuses-list">
                          <li>
                            <a href="#">
                              <span className="fas icn fa-users no-shrink">
                                <span className="sr-only">users</span>
                              </span>
                              <strong className="text fw-normal">200</strong>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="fas icn no-shrink fa-comments">
                                <span className="sr-only">comments</span>
                              </span>
                              <strong className="text fw-normal">3</strong>
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
                            <span className="far fa-star-half">
                              <span className="sr-only">star</span>
                            </span>
                          </li>
                        </ul>
                      </footer>
                    </article>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-lg-4">
                    {/* popular post */}
                    <article className="popular-post">
                      <div className="aligncenter">
                        <img src="./assets/images/img05.jpg" alt="image description" />
                      </div>
                      <div>
                        <strong className="bg-success text-white font-lato text-uppercase price-tag">
                          free
                        </strong>
                      </div>
                      <h3 className="post-heading">
                        <a href="javascript:void(0)">
                          Your Complete Guide to Self Devlopement
                        </a>
                      </h3>
                      <div className="post-author">
                        <div className="alignleft no-shrink rounded-circle">
                          <a href="javascript:void(0)">
                            <img
                              src="./assets/images/img08.jpg"
                              className="rounded-circle"
                              alt="image description"
                            />
                          </a>
                        </div>
                        <h4 className="author-heading">
                          <a href="javascript:void(0)">Sarah Johnson</a>
                        </h4>
                      </div>
                      <footer className="post-foot gutter-reset">
                        <ul className="list-unstyled post-statuses-list">
                          <li>
                            <a href="#">
                              <span className="fas icn fa-users no-shrink">
                                <span className="sr-only">users</span>
                              </span>
                              <strong className="text fw-normal">48</strong>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="fas icn no-shrink fa-comments">
                                <span className="sr-only">comments</span>
                              </span>
                              <strong className="text fw-normal">5</strong>
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
                  </div>
                  <div className="col-xs-12 col-sm-6 col-lg-4">
                    {/* popular post */}
                    <article className="popular-post">
                      <div className="aligncenter">
                        <img src="./assets/images/img02.jpg" alt="image description" />
                      </div>
                      <div>
                        <strong className="bg-primary text-white font-lato text-uppercase price-tag">
                          $68.00
                        </strong>
                      </div>
                      <h3 className="post-heading">
                        <a href="javascript:void(0)">
                          Adobe InDesign CS6 Tutorial Beginners
                        </a>
                      </h3>
                      <div className="post-author">
                        <div className="alignleft no-shrink rounded-circle">
                          <a href="javascript:void(0)">
                            <img
                              src="./assets/images/img09.jpg"
                              className="rounded-circle"
                              alt="image description"
                            />
                          </a>
                        </div>
                        <h4 className="author-heading">
                          <a href="javascript:void(0)">Ans Niversity</a>
                        </h4>
                      </div>
                      <footer className="post-foot gutter-reset">
                        <ul className="list-unstyled post-statuses-list">
                          <li>
                            <a href="#">
                              <span className="fas icn fa-users no-shrink">
                                <span className="sr-only">users</span>
                              </span>
                              <strong className="text fw-normal">48</strong>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="fas icn no-shrink fa-comments">
                                <span className="sr-only">comments</span>
                              </span>
                              <strong className="text fw-normal">5</strong>
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
                  </div>
                  <div className="col-xs-12 col-sm-6 col-lg-4">
                    {/* popular post */}
                    <article className="popular-post">
                      <div className="aligncenter">
                        <img src="./assets/images/img03.jpg" alt="image description" />
                      </div>
                      <div>
                        <strong className="bg-primary text-white font-lato text-uppercase price-tag">
                          $75.00
                        </strong>
                      </div>
                      <h3 className="post-heading">
                        <a href="javascript:void(0)">Swift Programming for Beginners</a>
                      </h3>
                      <div className="post-author">
                        <div className="alignleft no-shrink rounded-circle">
                          <a href="javascript:void(0)">
                            <img
                              src="./assets/images/img06.jpg"
                              className="rounded-circle"
                              alt="image description"
                            />
                          </a>
                        </div>
                        <h4 className="author-heading">
                          <a href="javascript:void(0)">Don Cooper</a>
                        </h4>
                      </div>
                      <footer className="post-foot gutter-reset">
                        <ul className="list-unstyled post-statuses-list">
                          <li>
                            <a href="#">
                              <span className="fas icn fa-users no-shrink">
                                <span className="sr-only">users</span>
                              </span>
                              <strong className="text fw-normal">48</strong>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="fas icn no-shrink fa-comments">
                                <span className="sr-only">comments</span>
                              </span>
                              <strong className="text fw-normal">5</strong>
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
                  </div>
                  <div className="col-xs-12 col-sm-6 col-lg-4">
                    {/* popular post */}
                    <article className="popular-post">
                      <div className="aligncenter">
                        <img src="./assets/images/img04.jpg" alt="image description" />
                      </div>
                      <div>
                        <strong className="bg-primary text-white font-lato text-uppercase price-tag">
                          $89.00
                        </strong>
                      </div>
                      <h3 className="post-heading">
                        <a href="javascript:void(0)">Become a Professional Film Maker</a>
                      </h3>
                      <div className="post-author">
                        <div className="alignleft no-shrink rounded-circle">
                          <a href="javascript:void(0)">
                            <img
                              src="./assets/images/img07.jpg"
                              className="rounded-circle"
                              alt="image description"
                            />
                          </a>
                        </div>
                        <h4 className="author-heading">
                          <a href="javascript:void(0)">Don Cooper</a>
                        </h4>
                      </div>
                      <footer className="post-foot gutter-reset">
                        <ul className="list-unstyled post-statuses-list">
                          <li>
                            <a href="#">
                              <span className="fas icn fa-users no-shrink">
                                <span className="sr-only">users</span>
                              </span>
                              <strong className="text fw-normal">48</strong>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="fas icn no-shrink fa-comments">
                                <span className="sr-only">comments</span>
                              </span>
                              <strong className="text fw-normal">5</strong>
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
                  </div>
                  <div className="col-xs-12 col-sm-6 col-lg-4">
                    {/* popular post */}
                    <article className="popular-post">
                      <div className="aligncenter">
                        <img src="./assets/images/img05.jpg" alt="image description" />
                      </div>
                      <div>
                        <strong className="bg-primary text-white font-lato text-uppercase price-tag">
                          $55.00
                        </strong>
                      </div>
                      <h3 className="post-heading">
                        <a href="javascript:void(0)">
                          Branding like a professional in 10 days
                        </a>
                      </h3>
                      <div className="post-author">
                        <div className="alignleft no-shrink rounded-circle">
                          <a href="javascript:void(0)">
                            <img
                              src="./assets/images/img08.jpg"
                              className="rounded-circle"
                              alt="image description"
                            />
                          </a>
                        </div>
                        <h4 className="author-heading">
                          <a href="javascript:void(0)">Logancee Wok</a>
                        </h4>
                      </div>
                      <footer className="post-foot gutter-reset">
                        <ul className="list-unstyled post-statuses-list">
                          <li>
                            <a href="#">
                              <span className="fas icn fa-users no-shrink">
                                <span className="sr-only">users</span>
                              </span>
                              <strong className="text fw-normal">48</strong>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="fas icn no-shrink fa-comments">
                                <span className="sr-only">comments</span>
                              </span>
                              <strong className="text fw-normal">5</strong>
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
                  </div>
                  <div className="col-xs-12 col-sm-6 col-lg-4">
                    {/* popular post */}
                    <article className="popular-post">
                      <div className="aligncenter">
                        <img src="./assets/images/img03.jpg" alt="image description" />
                      </div>
                      <div>
                        <strong className="bg-success text-white font-lato text-uppercase price-tag">
                          free
                        </strong>
                      </div>
                      <h3 className="post-heading">
                        <a href="javascript:void(0)">
                          Anatomy for Figure Drawing Mastering Figure
                        </a>
                      </h3>
                      <div className="post-author">
                        <div className="alignleft no-shrink rounded-circle">
                          <a href="javascript:void(0)">
                            <img
                              src="./assets/images/img06.jpg"
                              className="rounded-circle"
                              alt="image description"
                            />
                          </a>
                        </div>
                        <h4 className="author-heading">
                          <a href="javascript:void(0)">Keny White</a>
                        </h4>
                      </div>
                      <footer className="post-foot gutter-reset">
                        <ul className="list-unstyled post-statuses-list">
                          <li>
                            <a href="#">
                              <span className="fas icn fa-users no-shrink">
                                <span className="sr-only">users</span>
                              </span>
                              <strong className="text fw-normal">48</strong>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="fas icn no-shrink fa-comments">
                                <span className="sr-only">comments</span>
                              </span>
                              <strong className="text fw-normal">5</strong>
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
                  <h3>Course Search</h3>
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
                      <a href="#">Business</a>
                    </li>
                    <li className="cat-item active cat-item-2">
                      <a href="#">Design</a>
                    </li>
                    <li className="cat-item cat-item-3">
                      <a href="#">Programing Language</a>
                    </li>
                    <li className="cat-item cat-item-4">
                      <a href="#">Photography</a>
                    </li>
                    <li className="cat-item cat-item-5">
                      <a href="#">Language</a>
                    </li>
                    <li className="cat-item cat-item-6">
                      <a href="#">Life Style</a>
                    </li>
                    <li className="cat-item cat-item-7">
                      <a href="#">IT &amp; Software</a>
                    </li>
                  </ul>
                </section>
                {/* widget intro */}
                <section className="widget widget_intro">
                  <h3>Course Intro</h3>
                  <div className="aligncenter overlay">
                    <a
                      href="http://www.youtube.com/embed/9bZkp7q19f0?autoplay=1"
                      className="btn-play far fa-play-circle lightbox fancybox.iframe"
                      target='_blank'
                    />
                    <img src="./assets/images/img32.jpg" alt="image description" />
                  </div>
                </section>
                {/* widget popular posts */}
                <section className="widget widget_popular_posts">
                  <h3>Popular Courses</h3>
                  {/* widget cources list */}
                  <ul className="widget-cources-list list-unstyled">
                    <li>
                      <a href="javascript:void(0)">
                        <div className="alignleft large">
                          <img src="./assets/images/img33.jpg" alt="image description" />
                        </div>
                        <div className="description-wrap">
                          <h4>Introduction to Mobile Apps Development</h4>
                          <strong className="price text-primary element-block font-lato text-uppercase">
                            $99.00
                          </strong>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <div className="alignleft large">
                          <img src="./assets/images/img33.jpg" alt="image description" />
                        </div>
                        <div className="description-wrap">
                          <h4>Become a Professional Film Maker</h4>
                          <strong className="price text-success element-block font-lato text-uppercase">
                            Free
                          </strong>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <div className="alignleft large">
                          <img src="./assets/images/img33.jpg" alt="image description" />
                        </div>
                        <div className="description-wrap">
                          <h4>Swift Programming For Beginners</h4>
                          <strong className="price text-primary element-block font-lato text-uppercase">
                            $75.00
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

export default CourseList