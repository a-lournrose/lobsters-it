import React from 'react';
import cls from './Slide.module.scss';
import SliderImage1 from '../../../../../assets/images/rec-slider/slider-image-1.jpg';

const Slide = () => {
    return (
        <div className={cls.slide}>
            <div className={cls.slide__text}>
                <h3>Санкт-Петербург</h3>
                <div className={cls.slide__line}></div>
                <p>Я люблю это небо за смелость быть голубым сквозь серость.</p>
            </div>
            <div className={cls.slide__image} style={{background: `url(${SliderImage1})`}}></div>
        </div>
    );
};

export default Slide;