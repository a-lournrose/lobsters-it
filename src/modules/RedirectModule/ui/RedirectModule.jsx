import React from 'react';
import cls from './RedirectModule.module.scss';
import RedirectImage1 from '../../../assets/images/redirect-image-1.png';
import RedirectImage2 from '../../../assets/images/redirect-image-2.png';

const RedirectModule = () => {
    return (
        <div className={cls.cards}>
            <div className={cls.cards__separator}>
                <h3>или</h3>
            </div>
            <div className={cls.cards__card} style={{backgroundColor: 'var(--primary-color)'}}>
                <div className={cls.card__text_container}>
                    <h3>Выбирай готовое решение<br/> от компании!</h3>
                </div>
                <img src={RedirectImage1}/>
            </div>
            <div className={cls.cards__card} style={{backgroundColor: 'var(--purple-color)'}}>
                <div className={cls.card__text_container}>
                    <h3>Собери свой тур!</h3>
                </div>
                <img src={RedirectImage2}/>
            </div>
        </div>
    );
};

export default RedirectModule;