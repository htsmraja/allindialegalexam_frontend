import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useCommonContext } from '../../../context/commonContext';

const BooksAndNotes = () => {
  const { getBookList, bookList } = useCommonContext();

  const filters = { page: 1 };
  const key = JSON.stringify(filters);

  useEffect(() => {
    getBookList(filters);
  }, []);

  const books = bookList?.data?.[key]?.products || [];
  const isLoading = bookList?.loading;

  return (
    <>
      <section className="container">
        <br />

        <header className="block-header">
          <div className="pull-left">
            <h2 className="block-header-heading">Books & Notes</h2>
            <p>Recent and upcoming educational events listed here</p>
          </div>
          <Link to="/book-list" className="btn btn-default text-uppercase pull-right">
            View More
          </Link>
        </header>

        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={false}
            pagination={{ clickable: true }}
            loop={!isLoading}
            autoplay={!isLoading ? { delay: 5000, disableOnInteraction: false } : false}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 10 },
              768: { slidesPerView: 3, spaceBetween: 15 },
              1024: { slidesPerView: 4, spaceBetween: 15 },
            }}
            modules={[Autoplay, Navigation, Pagination]}
          >
            {/* --------------------  
                 LOADING SKELETON  
            -------------------- */}
            {isLoading && (
              [...Array(4)].map((_, i) => (
                <SwiperSlide key={i}>
                  <article className="product-module">
                    <div className="aligncenter skeleton-box" style={{ height: 180 }}></div>
                    <h3 className="fw-semi skeleton-box" style={{ width: "80%", height: 18 }}></h3>
                    <div className="skeleton-box" style={{ width: "60%", height: 15 }}></div>
                    <div className="skeleton-box" style={{ width: "40%", height: 15 }}></div>
                  </article>
                </SwiperSlide>
              ))
            )}

            {/* --------------------
                 BOOK LIST  
            -------------------- */}
            {!isLoading && books.length > 0 &&
              books.map((b, index) => (
                <SwiperSlide key={index}>
                  <article className="product-module">
                    <div className="aligncenter">
                      <Link to={`/book/${b.slug}`}>
                        <img
                          // src={`${import.meta.env.VITE_APP_URL}/uploads/banner/${item.image}`}
                          src={
                            b.cover_image
                              ? `${import.meta.env.VITE_APP_URL}/uploads/books/${b.cover_image}`
                              : "/no-image.png"
                          }
                          alt={b.title}
                        />
                      </Link>
                    </div>

                    <h3 className="fw-semi">
                      <Link to={`/book/${b.slug}`}>{b.title}</Link>
                    </h3>

                    <ul className="star-rating list-unstyled">
                      {[1, 2, 3, 4, 5].map(star => (
                        <li key={star}>
                          <span className="fas fa-star"></span>
                        </li>
                      ))}
                    </ul>

                    <strong className="price element-block fw-semi">
                      ₹{b.price}
                    </strong>
                  </article>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>

        <br />
      </section>
    </>
  );
};

export default BooksAndNotes;
