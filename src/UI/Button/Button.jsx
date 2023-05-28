import React from 'react';
import stl from './Button.module.scss'
const Button = ({children, paddingLeft, paddingRight}) => {
    return (
        <div style={{paddingLeft: paddingLeft, paddingRight: paddingRight}} className={`${stl.button} flex-center`}>
            {children}
        </div>
    );
};

export default Button;