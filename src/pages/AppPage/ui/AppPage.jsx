import React from 'react';
import {CentralBannerModule} from "../../../modules/CentralBannerModule";
import RecommendationsContainer from "../../../containers/RecommendationsContainer/RecommendationsContainer";
import ReadyToursContainer from "../../../containers/ReadyToursContainer/ReadyToursContainer";

const AppPage = () => {
    return (
        <div>
            <CentralBannerModule/>
            <RecommendationsContainer/>
            <ReadyToursContainer/>
        </div>
    );
};

export default AppPage;