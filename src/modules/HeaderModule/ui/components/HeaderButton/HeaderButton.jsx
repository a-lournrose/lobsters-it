import React from 'react';
import cls from './HeaderButton.module.scss';

const HeaderButton = ({children}) => {
    return (
        <div className={cls.button}>
            {children}
        </div>
    );
};

export default HeaderButton;