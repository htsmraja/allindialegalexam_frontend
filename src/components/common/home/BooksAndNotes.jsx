import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
const BooksAndNotes = () => {
  return (
    <>
      {/* add new section here {start} */}
      <section class="container">
        <br />
        <header class="block-header">
          <div class="pull-left">
            <h2 class="block-header-heading">Books & Notes</h2>
            <p>Recent and upcoming educational events listed here</p>
          </div>
          <Link to='/book-list' class="btn btn-default text-uppercase pull-right">View More</Link>
        </header>

        {/* product showcase start */}
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={false}
            pagination={{
              clickable: true,
            }}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
            }}
            modules={[Autoplay, Navigation, Pagination]}
            className=""
          >
            {/* item start */}
            <SwiperSlide>
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
            </SwiperSlide>
            {/* item end */}

            {/* item start */}
            <SwiperSlide>
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
            </SwiperSlide>
            {/* item end */}

            {/* item start */}
            <SwiperSlide>
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
            </SwiperSlide>
            {/* item end */}

            {/* item start */}
            <SwiperSlide>
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
            </SwiperSlide>
            {/* item end */}

            {/* item start */}
            <SwiperSlide>
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
            </SwiperSlide>
            {/* item end */}

            {/* item start */}
            <SwiperSlide>
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
            </SwiperSlide>
            {/* item end */}

            {/* item start */}
            <SwiperSlide>
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
            </SwiperSlide>
            {/* item end */}
          </Swiper>
        </div>
        {/* product showcase end */}
        <br />
      </section >
      {/* add new section here {end} */}
    </>
  )
}

export default BooksAndNotes