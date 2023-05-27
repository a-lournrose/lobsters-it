import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import Slide from "./components/Slide/Slide";

const RecommendationsSlider = () => {
    return (
        <Swiper spaceBetween={50}
                slidesPerView={1.5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}>
            <SwiperSlide>
                <Slide/>
            </SwiperSlide>
            <SwiperSlide>
                <Slide/>
            </SwiperSlide>
            <SwiperSlide>
                <Slide/>
            </SwiperSlide>
        </Swiper>
    );
};

export default RecommendationsSlider;