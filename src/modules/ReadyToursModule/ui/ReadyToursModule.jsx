import React from 'react';
import data from './data/cities.json'
import stl from './ReadyToursModule.module.scss'
import CardTour from "./components/CardTour/CardTour";
const ReadyToursModule = () => {

    const isPriority = data.filter(city => city.dictionary_data.is_priority === true)
    const rating = data.filter(city => city.dictionary_data.rating)

    return (
        <div className={stl.cards}>
            {
                isPriority.map( (city) => (
                    <CardTour city={city.dictionary_data.title} priceStart={'от 2500 RUB'}/>
                ))
            }
            {
                rating.filter(city => city.dictionary_data.title !== 'Москва').map( (city) => (
                    <CardTour city={city.dictionary_data.title} priceStart={'от 2500 RUB'}/>
                ))
            }
        </div>
    );
};

export default ReadyToursModule;