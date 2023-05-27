import React from 'react';
import cls from './Slide.module.scss';

const Slide = () => {
    return (
        <div className={cls.slide}>
            <div>
                <div>Санкт-Петербург</div>
                <div className={cls.slide__line}></div>
                <div>Я люблю это небо за смелость быть голубым сквозь серость.</div>
            </div>
        </div>
    );
};

export default Slide;