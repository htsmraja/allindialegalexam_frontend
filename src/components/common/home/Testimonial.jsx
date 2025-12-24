import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation} from 'swiper/modules';



const Testimonial = () => {
  return (
    <>
      <section
        className="testimonials-block text-center bg-gray pt60 pb50"
        style={{ backgroundImage: "url(assets/images/bg-pattern01.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-10 col-sm-offset-1">
              <h2>What People Say</h2>
              {/* swipper slider start */}
              <Swiper
                navigation={true}
                modules={[Autoplay, EffectFade, Navigation]}
                loop={true}
                //effect={'fade'}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                className="mainBanner"
              >

                {/* item start */}
                <SwiperSlide>
                  <blockquote className="testimonial-quote font-roboto">
                    <p>
                      “ Trent from punchy rollie grab us a waggin school. Flat out
                      like a bludger where he hasn't got a damper. As stands out like
                      brass razoo heaps it'll be relo. As busy as a paddock.”
                    </p>
                    <cite className="element-block font-lato">
                      <span className="avatar rounded-circle element-block">
                        <img
                          className="rounded-circle"
                          src="./assets/images/img16.jpg"
                          alt="Nethor Doct -Developer"
                        />
                      </span>
                      <strong className="element-block h5 h">
                        Nethor Doct -<span className="text-gray">Developer</span>
                      </strong>
                    </cite>
                  </blockquote>
                </SwiperSlide>
                {/* item start */}

                {/* item start */}
                <SwiperSlide>
                  <blockquote className="testimonial-quote font-roboto">
                    <p>
                      “ 32Trent from punchy rollie grab us a waggin school. Flat out
                      like a bludger where he hasn't got a damper. As stands out like
                      brass razoo heaps it'll be relo. As busy as a paddock.”
                    </p>
                    <cite className="element-block font-lato">
                      <span className="avatar rounded-circle element-block">
                        <img
                          className="rounded-circle"
                          src="./assets/images/img16.jpg"
                          alt="Nethor Doct -Developer"
                        />
                      </span>
                      <strong className="element-block h5 h">
                        Nethor Doct -<span className="text-gray">Developer</span>
                      </strong>
                    </cite>
                  </blockquote>
                </SwiperSlide>
                {/* item start */}

              </Swiper>
              {/* swipper slider end */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonial