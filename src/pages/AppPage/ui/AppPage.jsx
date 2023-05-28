import React from 'react';
import {CentralBannerModule} from "../../../modules/CentralBannerModule";
import RecommendationsContainer from "../../../containers/RecommendationsContainer/RecommendationsContainer";
import ReadyToursContainer from "../../../containers/ReadyToursContainer/ReadyToursContainer";
import CollectTourContainer from "../../../containers/CollectTourContainer/CollectTourContainer";

const AppPage = () => {
    return (
        <div>
            <CentralBannerModule/>
            <RecommendationsContainer/>
            <ReadyToursContainer/>
            <CollectTourContainer/>
        </div>
    );
};

export default AppPage;