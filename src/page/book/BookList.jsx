import React, { useEffect } from 'react'
import CommonLayout from '../../components/common_for_website/CommonLayout'
import { Link } from 'react-router-dom'
import { useCommonContext } from '../../context/commonContext';
import BookCard from '../../components/common/book/BookCard';

const BookList = () => {
  const { getBookList, bookList } = useCommonContext();
  const filters = { page: 1 };

  useEffect(() => {
    getBookList(filters);
  }, []);

  const key = JSON.stringify(filters);

  // Always access bookList.data
  const books = bookList?.data?.[key]?.products || [];
  const isLoading = bookList?.loading;


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
                  {isLoading &&
                    [...Array(4)].map((_, i) => (
                      <div className="col-xs-12 col-sm-6 col-lg-4" key={i}>
                        <article className="product-module">
                          <div className="aligncenter skeleton-box" style={{ height: 180 }}></div>
                          <h3 className="fw-semi skeleton-box" style={{ width: "80%", height: 18 }}></h3>
                          <div className="skeleton-box" style={{ width: "60%", height: 15 }}></div>
                          <div className="skeleton-box" style={{ width: "40%", height: 15 }}></div>
                        </article>
                      </div>
                    ))}
                  {!isLoading &&
                    books.length > 0 &&
                    books.map((b, index) => (
                      <div className="col-xs-12 col-sm-6 col-lg-4">

                        <BookCard b={b} />
                      </div>
                    ))}


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