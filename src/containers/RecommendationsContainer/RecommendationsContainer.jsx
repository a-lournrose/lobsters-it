import React from 'react';
import cls from './RecommendationsContainer.module.scss';

const RecommendationsContainer = ({children}) => {
    return (
        <div className={cls.container}>
            <div className={cls.container__wrapper}>
                <h2>Рекомендации:</h2>
            </div>
        </div>
    );
};

export default RecommendationsContainer;