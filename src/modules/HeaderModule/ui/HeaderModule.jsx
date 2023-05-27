import React from 'react';
import cls from "./HeaderModule.module.scss";
import Logo from "../../../assets/images/logo.svg";
import HeaderButton from "./components/HeaderButton/HeaderButton";
import UserIcon from "../../../assets/images/user-icon.svg";

const HeaderModule = () => {
    return (
        <div className={cls.header}>
            <div className={cls.header__content}>
                <img src={Logo} alt='Logo'/>
                <div>
                    <HeaderButton>
                        <span className={cls}>Войти</span>
                        <img src={UserIcon} alt='UserIcon'/>
                    </HeaderButton>
                </div>
            </div>
        </div>
    );
};

export default HeaderModule;