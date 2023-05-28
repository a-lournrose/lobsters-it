import React from 'react';
import cls from './RecommendationsContainer.module.scss';
import {RecommendationsSlider} from "../../modules/RecommendationsSlider";
import {RedirectModule} from "../../modules/RedirectModule";

const RecommendationsContainer = () => {
    return (
        <div className={cls.container}>
            <div className={cls.container__wrapper}>
                <h2>Рекомендации:</h2>
                <RecommendationsSlider/>
                <div style={{marginTop: '76px'}}>
                    <RedirectModule/>
                </div>
            </div>
        </div>
    );
};

export default RecommendationsContainer;