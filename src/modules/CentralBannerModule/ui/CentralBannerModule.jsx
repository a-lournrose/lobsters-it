import React from 'react';
import BannerImage from '../../../assets/images/header-banner.jpg';
import cls from './CentralBannerModule.module.scss';

const CentralBannerModule = () => {
    return (
        <div className={cls.banner} style={{background: `url(${BannerImage})`}}>
            <div className={cls.banner__text}>
                Путешествия<br/>начинаются здесь!
            </div>
        </div>
    );
};

export default CentralBannerModule;