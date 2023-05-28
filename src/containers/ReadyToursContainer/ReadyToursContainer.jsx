import React from 'react';
import {ReadyToursModule} from "../../modules/ReadyToursModule";
import stl from './ReadyToursContainer.module.scss'
import Search from "../../components/Search/Search";
import Sorting from "../../components/Sorting/Sorting";
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
            <ReadyToursModule/>
        </div>
    );
};

export default ReadyToursContainer;