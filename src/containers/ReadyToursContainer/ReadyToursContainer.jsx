import React from 'react';
import {ReadyToursModule} from "../../modules/ReadyToursModule";
import stl from './ReadyToursContainer.module.scss'
import ButtonBuy from "../../UI/ButtonBuy/ButtonBuy";
const ReadyToursContainer = () => {
    return (
        <div className={stl.container}>
            <h2>Готовые туры</h2>
            <div className={stl.search}>
                <input type="text" placeholder={"поиск"}/>
                <div className={stl.calendar}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.8576 3.21763H17.3576V1.50335C17.3576 1.38549 17.2611 1.28906 17.1433 1.28906H15.6433C15.5254 1.28906 15.429 1.38549 15.429 1.50335V3.21763H8.57185V1.50335C8.57185 1.38549 8.47542 1.28906 8.35756 1.28906H6.85756C6.7397 1.28906 6.64328 1.38549 6.64328 1.50335V3.21763H2.14328C1.66917 3.21763 1.28613 3.60067 1.28613 4.07478V21.8605C1.28613 22.3346 1.66917 22.7176 2.14328 22.7176H21.8576C22.3317 22.7176 22.7147 22.3346 22.7147 21.8605V4.07478C22.7147 3.60067 22.3317 3.21763 21.8576 3.21763ZM20.7861 20.7891H3.2147V10.6105H20.7861V20.7891ZM3.2147 8.78906V5.14621H6.64328V6.43192C6.64328 6.54978 6.7397 6.64621 6.85756 6.64621H8.35756C8.47542 6.64621 8.57185 6.54978 8.57185 6.43192V5.14621H15.429V6.43192C15.429 6.54978 15.5254 6.64621 15.6433 6.64621H17.1433C17.2611 6.64621 17.3576 6.54978 17.3576 6.43192V5.14621H20.7861V8.78906H3.2147Z" fill="#1F1F1F"/>
                    </svg>
                    <p>27.05  — 28.05</p>
                </div>
                <div className={stl.btn}>
                    <ButtonBuy paddingLeft={115} paddingRight={115}>Поиск</ButtonBuy>
                </div>
            </div>
            <ReadyToursModule/>
        </div>
    );
};

export default ReadyToursContainer;