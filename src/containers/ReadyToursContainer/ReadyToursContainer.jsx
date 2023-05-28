import React from 'react';
import {ReadyToursModule} from "../../modules/ReadyToursModule";
import stl from './ReadyToursContainer.module.scss'
import Search from "../../components/Search/Search";
import Sorting from "../../components/Sorting/Sorting";
import ArrowRight from "../../assets/images/arrow-right.svg";
import ArrowLeft from "../../assets/images/arrow-left.svg";
const ReadyToursContainer = () => {
    return (
        <div className={stl.container}>
            <h2>Готовые туры</h2>
            <Search/>
            <Sorting sorting={[
                {text: 'По популярности'},
                {text: 'Направление'},
                {text: 'Время года'},
                {text: 'Бюджет'},
            ]}/>
            <div className={stl.slider}>
                <div className={stl.btn + ' ' + stl.btn_left}>
                    <img src={ArrowLeft}/>
                </div>
                <ReadyToursModule/>
                <div className={stl.btn + ' ' + stl.btn_right}>
                    <img src={ArrowRight}/>
                </div>
            </div>
        </div>
    );
};

export default ReadyToursContainer;