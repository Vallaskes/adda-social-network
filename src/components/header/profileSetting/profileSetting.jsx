import style from "./profileSetting.module.scss";
import {Link} from "react-router-dom";
import React from "react";

const dropdownSetting = (e) => {
    let dm = e.target.parentNode.parentNode.querySelector('div[data-dropdown]').dataset.dropdown;
    if (dm === 'hidden') {
        e.target.parentNode.parentNode.querySelector('div[data-dropdown]').dataset.dropdown = 'visible'
    } else {
        e.target.parentNode.parentNode.querySelector('div[data-dropdown]').dataset.dropdown = 'hidden';
    }
};

const ProfileSetting = (props) => {
    return (
        <div className={style.profileSetting}>
            <div onClick={dropdownSetting} className={style.buttonModal}>
                <img src="https://template.hasthemes.com/adda/adda/assets/images/profile/profile-midle-1.jpg" alt="user image"/>
            </div>
            <div data-dropdown="hidden" className={style.profileDropdown}>
                <div className="profileHead">
                    <h6>
                        <Link to="/">Madison Howard</Link>
                    </h6>
                    <p className="mail">mailnam@mail.com</p>
                </div>
                <div className="profileBody">
                    <ul>
                        <li>
                            <Link to="/"><span className="icon profileIcon"/> Profile</Link>
                        </li>
                        <li>
                            <Link to="/"><span className="icon inboxIcon"/> Inbox</Link>
                        </li>
                        <li>
                            <Link to="/"><span className="icon ActivityIcon"/> Activity</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/"><span className="icon settingIcon"/> Setting</Link>
                        </li>
                        <li>
                            <Link to="/"><span className="icon singOutIcon"/> Sing out</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default ProfileSetting;