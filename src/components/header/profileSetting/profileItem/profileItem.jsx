import React from "react";
import {Link} from "react-router-dom";
import style from "./profileItem.module.scss";

const ProfileLinkItem = (props) => {
    return (
        <li className={style.linkItem}>
            <Link to={props.link}>
                <span className={`${style.icon} ${props.icon}`} /> {props.title}
            </Link>
        </li>
    )
};

const ProfileItem = (props) => {
    return (
        <ul className={style.profileItem}>
            {props.pli}
        </ul>
    )
};

export {ProfileItem, ProfileLinkItem};