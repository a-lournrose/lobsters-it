import React from 'react';
import cls from './RecommendationsContainer.module.scss';
import {RecommendationsSlider} from "../../modules/RecommendationsSlider";

const RecommendationsContainer = () => {
    return (
        <div className={cls.container}>
            <div className={cls.container__wrapper}>
                <h2>Рекомендации:</h2>
                <RecommendationsSlider/>
            </div>
        </div>
    );
};

export default RecommendationsContainer;