import React, {useRef} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import Slide from "./components/Slide/Slide";
import cls from './RecommendationsSlider.module.scss';
import ArrowRight from '../../../assets/images/arrow-right.svg';
import {Navigation, Pagination} from "swiper";

const RecommendationsSlider = () => {
    const swiperRef = useRef();
    return (
        <div className={cls.slider}>
            <div className={cls.slider__next_button} onClick={() => swiperRef.current?.slideNext()}>
                <img src={ArrowRight}/>
            </div>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                loop
                modules={[Navigation, Pagination]}
                onBeforeInit={swiper => {
                    swiperRef.current = swiper;
                }}
                spaceBetween={50}
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
        </div>
    );
};

export default RecommendationsSlider;