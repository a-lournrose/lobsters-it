import React from 'react';
import {ReadyToursModule} from "../../modules/ReadyToursModule";
import stl from './ReadyToursContainer.module.scss'
import Search from "../../components/Search/Search";
const ReadyToursContainer = () => {
    return (
        <div className={stl.container}>
            <h2>Готовые туры</h2>
            <Search/>
            <div className={stl.filters}>
                <div className={stl.filter}>
                    <p>По популярности</p>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.6427 3.42871H13.3034C13.2123 3.42871 13.1266 3.47335 13.073 3.54657L7.99981 10.5394L2.9266 3.54657C2.87303 3.47335 2.78731 3.42871 2.69624 3.42871H1.35696C1.24088 3.42871 1.17303 3.56085 1.24088 3.6555L7.53731 12.3359C7.76589 12.6501 8.23374 12.6501 8.46053 12.3359L14.757 3.6555C14.8266 3.56085 14.7587 3.42871 14.6427 3.42871Z" fill="black" fillOpacity="0.85"/>
                    </svg>
                </div>
                <div className={stl.filter}>
                    <p>Направление</p>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.6427 3.42871H13.3034C13.2123 3.42871 13.1266 3.47335 13.073 3.54657L7.99981 10.5394L2.9266 3.54657C2.87303 3.47335 2.78731 3.42871 2.69624 3.42871H1.35696C1.24088 3.42871 1.17303 3.56085 1.24088 3.6555L7.53731 12.3359C7.76589 12.6501 8.23374 12.6501 8.46053 12.3359L14.757 3.6555C14.8266 3.56085 14.7587 3.42871 14.6427 3.42871Z" fill="black" fillOpacity="0.85"/>
                    </svg>
                </div>
                <div className={stl.filter}>
                    <p>Время года</p>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.6427 3.42871H13.3034C13.2123 3.42871 13.1266 3.47335 13.073 3.54657L7.99981 10.5394L2.9266 3.54657C2.87303 3.47335 2.78731 3.42871 2.69624 3.42871H1.35696C1.24088 3.42871 1.17303 3.56085 1.24088 3.6555L7.53731 12.3359C7.76589 12.6501 8.23374 12.6501 8.46053 12.3359L14.757 3.6555C14.8266 3.56085 14.7587 3.42871 14.6427 3.42871Z" fill="black" fillOpacity="0.85"/>
                    </svg>
                </div>
                <div className={stl.filter}>
                    <p>Бюджет</p>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.6427 3.42871H13.3034C13.2123 3.42871 13.1266 3.47335 13.073 3.54657L7.99981 10.5394L2.9266 3.54657C2.87303 3.47335 2.78731 3.42871 2.69624 3.42871H1.35696C1.24088 3.42871 1.17303 3.56085 1.24088 3.6555L7.53731 12.3359C7.76589 12.6501 8.23374 12.6501 8.46053 12.3359L14.757 3.6555C14.8266 3.56085 14.7587 3.42871 14.6427 3.42871Z" fill="black" fillOpacity="0.85"/>
                    </svg>
                </div>
            </div>
            <ReadyToursModule/>
        </div>
    );
};

export default ReadyToursContainer;