import React from 'react';
import stl from './Button.module.scss'
const Button = ({children}) => {
    return (
        <div className={`${stl.button} flex-center`}>
            {children}
        </div>
    );
};

export default Button;