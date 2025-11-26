import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { useCommonContext } from '../../../context/commonContext';
const Banner = () => {
    const { getBannerList, bannerData } = useCommonContext();
    useEffect(() => {
        getBannerList();
    }, [])
    // console.log(bannerData, "bannerData")
    return (
        <>
            {/* banner section start */}
            <section className="intro-block">
                {/* slider part start */}
                {
                    bannerData.loading ? (
                        <div>Loading...</div>
                    ) : (
                        bannerData.data.length > 0 ? (
                            <Swiper
                                navigation={true}
                                pagination={{
                                    clickable: false,
                                }}
                                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                                loop={true}
                                effect={'fade'}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                className="mainBanner"
                            >
                                {
                                    bannerData.data
                                        ?.filter((bannerItem) => bannerItem.banner_type === "main_banner")
                                        .map((item, index) => (
                                            <SwiperSlide>
                                                <div className="">
                                                    <article className="intro-block-slide overlay bg-cover" style={{
                                                        backgroundImage: `url(${import.meta.env.VITE_APP_URL}/uploads/banner/${item.image})`
                                                    }}
                                                    >
                                                        <div className="align-wrap container">
                                                            <div className="align">
                                                                <div className="">
                                                                    <h1 className="intro-block-heading">Discover the Power of Law Education</h1>
                                                                </div>
                                                                <div className="delay1">
                                                                    <p>Explore comprehensive legal curricula crafted for today’s dynamic legal environment.</p>
                                                                </div>
                                                                <div className="delay2">
                                                                    <div className="btns-wrap">
                                                                        <a href="/" className="btn btn-warning btn-theme text-uppercase">Our Courses</a>
                                                                        <a href="/" className="btn btn-white text-uppercase">Contact us</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </article>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                }
                            </Swiper>
                        ) : (
                            <div>& nbsp;</div>
                        )
                    )
                }

                {/* slider part end */}

                {/* banner info part start */}
                <div className="container introBx">
                    {/* features aside */}
                    <aside className="features-aside">
                        <a href="#" className="col">
                            <span className="icn-wrap text-center no-shrink">
                                <img
                                    src="assets/images/icon01.svg"
                                    width={44}
                                    height={43}
                                    alt="trophy"
                                />
                            </span>
                            <div className="description">
                                <h2 className="features-aside-heading">World’d Best Instructors</h2>
                                <span className="view-more element-block text-uppercase">
                                    view more
                                </span>
                            </div>
                        </a>
                        <a href="#" className="col">
                            <span className="icn-wrap text-center no-shrink">
                                <img
                                    src="assets/images/icon02.svg"
                                    width={43}
                                    height={39}
                                    alt="computer"
                                />
                            </span>
                            <div className="description">
                                <h2 className="features-aside-heading">Learn Courses Onlines</h2>
                                <span className="view-more element-block text-uppercase">
                                    view more
                                </span>
                            </div>
                        </a>
                        <a href="#" className="col">
                            <span className="icn-wrap text-center no-shrink">
                                <img
                                    src="assets/images/icon03.svg"
                                    width={43}
                                    height={39}
                                    alt="computer"
                                />
                            </span>
                            <div className="description">
                                <h2 className="features-aside-heading">
                                    Online Library &amp; Store
                                </h2>
                                <span className="view-more element-block text-uppercase">
                                    view more
                                </span>
                            </div>
                        </a>
                    </aside>
                </div>
                {/* banner info part end */}
            </section >
            {/* banner section end */}
        </>
    )
}

export default Banner