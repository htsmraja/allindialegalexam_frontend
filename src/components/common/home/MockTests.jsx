import React, { useEffect } from 'react'
// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useCommonContext } from '../../../context/commonContext';
import MockTestCard from '../../../page/mocktest/MockTestCard';
const MockTests = () => {
    const { getMockTestList, mockTestList } = useCommonContext();
    useEffect(() => {
        getMockTestList({});
    }, [])
    const mockTests = mockTestList?.data || [];
    const isLoading = mockTestList?.loading;
    return (
        <>
            <section className="upcoming-events-block container" style={{ paddingTop: '50px', paddingBottom: '73px' }}>
                <header className="block-header">
                    <div className="pull-left">
                        <h2 className="block-header-heading">Mock Tests</h2>
                        <p>Recent and upcoming educational events listed here</p>
                    </div>
                    <Link to="/mock-test-list" className="btn btn-default text-uppercase pull-right">
                        View More
                    </Link>
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
                            delay: 3000,
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
                        className="mockTests"
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
                            mockTests.length > 0 &&
                            mockTests.map((b, index) => (
                                <SwiperSlide key={index}>
                                    <MockTestCard b={b} />
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
                {/* product showcase end */}
            </section>
        </>
    )
}

export default MockTests