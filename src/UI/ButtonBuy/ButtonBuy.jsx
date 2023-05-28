import React from 'react';
import stl from './ButtonBuy.module.scss'
const ButtonBuy = ({children, paddingLeft, paddingRight}) => {
    return (
        <div style={{paddingLeft: paddingLeft, paddingRight: paddingRight}} className={`${stl.button} flex-center`}>
            {children}
        </div>
    );
};

export default ButtonBuy;