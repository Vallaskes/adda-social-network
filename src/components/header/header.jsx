import React from "react";
import style from "./header.module.scss";
import {Link} from "react-router-dom";
import HeaderNav from "./nav/nav";
import ProfileSetting from "./profileSetting/profileSetting";

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.wrapper}>
                <HeaderNav/>
                <div>
                    <Link to="/">
                        <img src="https://template.hasthemes.com/adda/adda/assets/images/logo/logo.png" alt="logo"/>
                    </Link>
                </div>
                <div className={style.searchHeader}>
                    <form className={style.search}>
                        <input type="search" placeholder="Search" />
                        <button className={style.buttonSearch}/>
                    </form>
                    <ProfileSetting/>
                </div>
            </div>
        </header>
    )
};

export default Header;