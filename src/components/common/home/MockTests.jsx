import React from 'react'
// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Autoplay, Navigation, Pagination } from 'swiper/modules';
const MockTests = () => {
    return (
        <>
            <section class="upcoming-events-block container" style={{paddingTop:'50px',paddingBottom:'73px'}}>
                <header class="block-header">
                    <div class="pull-left">
                        <h2 class="block-header-heading">Mock Tests</h2>
                        <p>Recent and upcoming educational events listed here</p>
                    </div><a href="javascript:void(0)" class="btn btn-default text-uppercase pull-right">View More</a>
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
                        {/* item start */}
                        <SwiperSlide>
                            <article className="news-post">
                                <div className="aligncenter">
                                    <a href="javascript:void(0)">
                                        <img src="./assets/images/mock-tests-1.jpg" alt="image desciption" />
                                    </a>
                                </div>
                                <h3 style={{marginBottom:'7px'}}><a href="javascript:void(0)">Practise session of AOA 2026</a></h3>
                                <p style={{margin:'3px'}}><i class="far fa-calendar-alt"></i> 30 Questions / <i class="far fa-clock"></i> 30 minutes</p>
                                <div className='timerBx'>
                                    <span>2 Days</span>
                                    <span>12 Hours</span>
                                    <span>20 Min</span>
                                    <span>45 Sec</span>
                                </div>
                                <h4 style={{margin:'5px 0 0 0'}} >₹ 99 join now</h4>
                            </article>
                        </SwiperSlide>
                        {/* item end */}
                        {/* item start */}
                        <SwiperSlide>
                            <article className="news-post">
                                <div className="aligncenter">
                                    <a href="javascript:void(0)">
                                        <img src="./assets/images/mock-tests-2.jpg" alt="image desciption" />
                                    </a>
                                </div>
                                <h3 style={{marginBottom:'7px'}}><a href="javascript:void(0)">Practise session of AOA 2026</a></h3>
                                <p style={{margin:'3px'}}><i class="far fa-calendar-alt"></i> 30 Questions / <i class="far fa-clock"></i> 30 minutes</p>
                                <div className='timerBx'>
                                    <span>2 Days</span>
                                    <span>12 Hours</span>
                                    <span>20 Min</span>
                                    <span>45 Sec</span>
                                </div>
                                <h4 style={{margin:'5px 0 0 0'}} >₹ 99 join now</h4>
                            </article>
                        </SwiperSlide>
                        {/* item end */}                        
                        {/* item start */}
                        <SwiperSlide>
                            <article className="news-post">
                                <div className="aligncenter">
                                    <a href="javascript:void(0)">
                                        <img src="./assets/images/mock-tests-3.jpg" alt="image desciption" />
                                    </a>
                                </div>
                                <h3 style={{marginBottom:'7px'}}><a href="javascript:void(0)">Practise session of AOA 2026</a></h3>
                                <p style={{margin:'3px'}}><i class="far fa-calendar-alt"></i> 30 Questions / <i class="far fa-clock"></i> 30 minutes</p>
                                <div className='timerBx'>
                                    <span>2 Days</span>
                                    <span>12 Hours</span>
                                    <span>20 Min</span>
                                    <span>45 Sec</span>
                                </div>
                                <h4 style={{margin:'5px 0 0 0'}} >₹ 99 join now</h4>
                            </article>
                        </SwiperSlide>
                        {/* item end */}
                        {/* item start */}
                        <SwiperSlide>
                            <article className="news-post">
                                <div className="aligncenter">
                                    <a href="javascript:void(0)">
                                        <img src="./assets/images/mock-tests-1.jpg" alt="image desciption" />
                                    </a>
                                </div>
                                <h3 style={{marginBottom:'7px'}}><a href="javascript:void(0)">Practise session of AOA 2026</a></h3>
                                <p style={{margin:'3px'}}><i class="far fa-calendar-alt"></i> 30 Questions / <i class="far fa-clock"></i> 30 minutes</p>
                                <div className='timerBx'>
                                    <span>2 Days</span>
                                    <span>12 Hours</span>
                                    <span>20 Min</span>
                                    <span>45 Sec</span>
                                </div>
                                <h4 style={{margin:'5px 0 0 0'}} >₹ 99 join now</h4>
                            </article>
                        </SwiperSlide>
                        {/* item end */}
                        {/* item start */}
                        <SwiperSlide>
                            <article className="news-post">
                                <div className="aligncenter">
                                    <a href="javascript:void(0)">
                                        <img src="./assets/images/mock-tests-2.jpg" alt="image desciption" />
                                    </a>
                                </div>
                                <h3 style={{marginBottom:'7px'}}><a href="javascript:void(0)">Practise session of AOA 2026</a></h3>
                                <p style={{margin:'3px'}}><i class="far fa-calendar-alt"></i> 30 Questions / <i class="far fa-clock"></i> 30 minutes</p>
                                <div className='timerBx'>
                                    <span>2 Days</span>
                                    <span>12 Hours</span>
                                    <span>20 Min</span>
                                    <span>45 Sec</span>
                                </div>
                                <h4 style={{margin:'5px 0 0 0'}} >₹ 99 join now</h4>
                            </article>
                        </SwiperSlide>
                        {/* item end */}                        
                        {/* item start */}
                        <SwiperSlide>
                            <article className="news-post">
                                <div className="aligncenter">
                                    <a href="javascript:void(0)">
                                        <img src="./assets/images/mock-tests-3.jpg" alt="image desciption" />
                                    </a>
                                </div>
                                <h3 style={{marginBottom:'7px'}}><a href="javascript:void(0)">Practise session of AOA 2026</a></h3>
                                <p style={{margin:'3px'}}><i class="far fa-calendar-alt"></i> 30 Questions / <i class="far fa-clock"></i> 30 minutes</p>
                                <div className='timerBx'>
                                    <span>2 Days</span>
                                    <span>12 Hours</span>
                                    <span>20 Min</span>
                                    <span>45 Sec</span>
                                </div>
                                <h4 style={{margin:'5px 0 0 0'}} >₹ 99 join now</h4>
                            </article>
                        </SwiperSlide>
                        {/* item end */}
                    </Swiper>
                </div>
                {/* product showcase end */}
            </section>
        </>
    )
}

export default MockTests