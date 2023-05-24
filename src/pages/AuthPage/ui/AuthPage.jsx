import React from 'react';
import Slider from "../../../UI/Slider/Slider";

const AuthPage = () => {

    return (
        <div>
            <Slider inSliders={[
                {title: 'Санкт-Петербург', subTitle: 'Я люблю это небо за смелость быть голубым сквозь серость.', img: '/SPB.png'},
                {title: 'Москва', subTitle: 'Москва ... впцу.', img: '/SPB.png'},
                {title: 'avasd', subTitle: '1232222', img: '/SPB.png'}
            ]}>
            </Slider>
        </div>
    );
};

export default AuthPage;