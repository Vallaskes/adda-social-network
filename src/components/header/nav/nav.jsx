import React from "react";
import style from "../header.module.scss";
import {Link} from "react-router-dom";
import MessageModal from "./message/messageModal";
import NotificationModal from "./notification/notificationModal";

const HeaderNav = () => {
    return (
        <div className={style.headerNav}>
            <Link className={style.link} to="/home">
                Home
            </Link>
            <MessageModal textBtn="Message" text="Recent Message"/>
            <NotificationModal/>
        </div>
    )
};

export default HeaderNav;