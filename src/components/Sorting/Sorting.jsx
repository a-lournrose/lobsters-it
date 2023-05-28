import React from 'react';
import stl from "./Sorting.module.scss";

const Sorting = ({sorting}) => {
    return (
        <div className={stl.sorting}>
            {
                sorting.map(item => (
                    <div className={stl.sorting_item}>
                        <p>{item.text}</p>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.6427 3.42871H13.3034C13.2123 3.42871 13.1266 3.47335 13.073 3.54657L7.99981 10.5394L2.9266 3.54657C2.87303 3.47335 2.78731 3.42871 2.69624 3.42871H1.35696C1.24088 3.42871 1.17303 3.56085 1.24088 3.6555L7.53731 12.3359C7.76589 12.6501 8.23374 12.6501 8.46053 12.3359L14.757 3.6555C14.8266 3.56085 14.7587 3.42871 14.6427 3.42871Z" fill="black" fillOpacity="0.85"/>
                        </svg>
                    </div>
                ))
            }
        </div>
    );
};

export default Sorting;