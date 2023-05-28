import React from 'react';
import cls from "../CollectTourContainer/CollectTourContainer.module.scss";
import {ProductsCardsModule} from "../../modules/ProductsCardsModule";
import Search from "../../components/Search/Search";

const CollectTourContainer = () => {
    return (
        <div className={cls.container__wrapper}>
            <h2>Собери свой тур!</h2>
            <ProductsCardsModule/>
            <Search/>
        </div>
    );
};

export default CollectTourContainer;