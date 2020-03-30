import React from "react";
import s from "./Header.module.css";

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.logo} src="https://upload.wikimedia.org/wikipedia/ru/0/0f/Mortal_kombat_logo.png" alt="logo"/>
        </header>
    );
}

export default Header;