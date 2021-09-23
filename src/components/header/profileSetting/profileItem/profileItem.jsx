import React from "react";
import {Link} from "react-router-dom";
import style from "./profileItem.module.scss";

const ProfileLinkItem = ({ link, icon, title}) => {
    return (
        <li className={style.linkItem}>
            <Link to={link}>
                <span className={`${style.icon} ${icon}`} /> {title}
            </Link>
        </li>
    )
};

const ProfileItem = ({pli}) => {
    return (
        <ul className={style.profileItem}>
            {pli}
        </ul>
    )
};

export {ProfileItem, ProfileLinkItem};