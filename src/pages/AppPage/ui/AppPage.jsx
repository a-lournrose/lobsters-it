import React from 'react';
import {CentralBannerModule} from "../../../modules/CentralBannerModule";
import RecommendationsContainer from "../../../containers/RecommendationsContainer/RecommendationsContainer";

const AppPage = () => {
    return (
        <div>
            <CentralBannerModule/>
            <RecommendationsContainer/>
        </div>
    );
};

export default AppPage;