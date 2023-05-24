import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import stl from './Slider.module.scss'

const Slider = ({inSliders}) => {

    return (
        <div style={{overflow: "hidden"}}>
            <Swiper
                slidesPerView={1}
                className={stl.slider}
                spaceBetween={30}
            >
                {inSliders.map(slider => (
                    <SwiperSlide key={slider.title} className={stl.slider_item}>
                        <div className={stl.slider_leftBlock}>
                            <div className={stl.slider_text}>
                                <h3>{slider.title}</h3>
                                <div className={stl.slider_line}></div>
                                <p>{slider.subTitle}</p>
                            </div>
                            <div className={stl.slider_btn}>
                                поехать !
                            </div>
                        </div>
                        <div className={stl.slider_rightBlock}>
                            <img src={slider.img} alt="img"/>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;