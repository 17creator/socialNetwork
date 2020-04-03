import React from "react";
import s from "./Nav.module.css";
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={s.nav}>
            <div className = {s.item}>
                <NavLink to='/profile' activeClassName={s.actived}>Profile</NavLink>
            </div>
            <div className = {s.item}>
                <NavLink to='/dialogs' activeClassName={s.actived}>Messages</NavLink>
            </div>
            <div className = {s.item}>
                <NavLink to='/news' activeClassName={s.actived}>News</NavLink>
            </div>
            <div className = {s.item}>
                <NavLink to='/music' activeClassName={s.actived}>Music</NavLink>
            </div>
            <div className = {s.item}>
                <NavLink to='/settings' activeClassName={s.actived}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Nav;