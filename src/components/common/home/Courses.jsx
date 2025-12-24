import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useCommonContext } from '../../../context/commonContext';
import { Link } from 'react-router-dom';
import CourseCard from '../../../page/course/CourseCard';
const Courses = () => {
    const { getCourseList, courseList } = useCommonContext();
    const filters = { page: 1 };
    const key = JSON.stringify(filters);
    useEffect(() => {
        getCourseList(filters);
    }, [])
    const courses = courseList?.data?.[key]?.products || [];
    const isLoading = courseList?.loading;
    const isDateActive = (start, end) => {
        if (!start || !end) return false;
        const now = new Date();
        return now >= new Date(start) && now <= new Date(end);
    };

    const getPrice = (b) => {
        // subscription allowed means paid course
        if (!b.is_subscription_allowed) return "Free";

        const isOfferActive = isDateActive(b.offer_start, b.offer_end);

        // OFFER PRICE
        if (b.mark_as_offer && b.offer_price && isOfferActive) {
            return `₹${b.offer_price}`;
        }

        // SALE PRICE
        if (b.sale_price) {
            return `₹${b.sale_price}`;
        }

        // NORMAL PRICE
        return `₹${b.price}`;
    };


    return (
        <>
            <section className="popular-posts-block container coursesPart pt50 pb25">
                <header className="popular-posts-head">
                    {/* <h2 className="popular-head-heading">Most Popular Courses</h2> */}
                    <div className="pull-left">
                        <h2 className="block-header-heading mt0">Most Popular Courses</h2>
                        <p>Recent and upcoming educational events listed here</p>
                    </div>
                    <Link to="/course-list" className="btn btn-default text-uppercase pull-right">
                        View More
                    </Link>
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
                    {isLoading &&
                        [...Array(4)].map((_, i) => (
                            <SwiperSlide key={i}>
                                <article className="product-module">
                                    <div className="aligncenter skeleton-box" style={{ height: 180 }}></div>
                                    <h3 className="fw-semi skeleton-box" style={{ width: "80%", height: 18 }}></h3>
                                    <div className="skeleton-box" style={{ width: "60%", height: 15 }}></div>
                                    <div className="skeleton-box" style={{ width: "40%", height: 15 }}></div>
                                </article>
                            </SwiperSlide>
                        ))}
                    {!isLoading &&
                        courses.length > 0 &&
                        courses.map((b, index) => (
                            <SwiperSlide key={index}>
                                <CourseCard b={b} />
                            </SwiperSlide>
                        ))}

                </Swiper>
                {/* Swiper slider part end */}
            </section>
        </>
    )
}

export default Courses