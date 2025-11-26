import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useCommonContext } from '../../../context/commonContext';
const Courses = () => {
    const { getCourseList, courseList } = useCommonContext();
    const filters = { page: 1 };
    const key = JSON.stringify(filters);
    useEffect(() => {
        getCourseList(filters);
    }, [])
    const courses = courseList?.data?.[key]?.products || [];
    console.log(courses, "course")
    return (
        <>
            <section className="popular-posts-block container coursesPart">
                <header className="popular-posts-head">
                    <h2 className="popular-head-heading">Most Popular Courses</h2>
                </header>
                {/* Swiper slider part start */}
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    navigation={false}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    autoplay={{
                        delay: 4000,
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
                    </SwiperSlide>
                    {/* item end */}

                    {/* item start */}
                    <SwiperSlide>
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
                                            <strong className="text fw-normal">150</strong>
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
                    </SwiperSlide>
                    {/* item end */}

                    {/* item start */}
                    <SwiperSlide>
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
                    </SwiperSlide>
                    {/* item end */}

                    {/* item start */}
                    <SwiperSlide>
                        <article className="popular-post">
                            <div className="aligncenter">
                                <img src="./assets/images/img05.jpg" alt="image description" />
                            </div>
                            <div>
                                <strong className="bg-primary text-white font-lato text-uppercase price-tag">
                                    $68.00
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
                                            src="./assets/images/img09.jpg"
                                            className="rounded-circle"
                                            alt="image description"
                                        />
                                    </a>
                                </div>
                                <h4 className="author-heading">
                                    <a href="javascript:void(0)">Peter Parker</a>
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
                    </SwiperSlide>
                    {/* item end */}

                    {/* item start */}
                    <SwiperSlide>
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
                    </SwiperSlide>
                    {/* item end */}

                    {/* item start */}
                    <SwiperSlide>
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
                                            <strong className="text fw-normal">150</strong>
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
                    </SwiperSlide>
                    {/* item end */}

                    {/* item start */}
                    <SwiperSlide>
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
                    </SwiperSlide>
                    {/* item end */}

                    {/* item start */}
                    <SwiperSlide>
                        <article className="popular-post">
                            <div className="aligncenter">
                                <img src="./assets/images/img05.jpg" alt="image description" />
                            </div>
                            <div>
                                <strong className="bg-primary text-white font-lato text-uppercase price-tag">
                                    $68.00
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
                                            src="./assets/images/img09.jpg"
                                            className="rounded-circle"
                                            alt="image description"
                                        />
                                    </a>
                                </div>
                                <h4 className="author-heading">
                                    <a href="javascript:void(0)">Peter Parker</a>
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
                    </SwiperSlide>
                    {/* item end */}

                </Swiper>
                {/* Swiper slider part end */}
            </section>
        </>
    )
}

export default Courses