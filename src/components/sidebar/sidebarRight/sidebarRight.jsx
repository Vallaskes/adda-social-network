import React from "react";
import FriendsZone from "./friendsZone/friendsZone";
import style from "./style.module.scss";
import Advertizement from "./advertizement/advertizement";
import RecentNotification from "./recentNotification/recentNotification";

const SidebarRight = () => {
    return (
        <aside id="sidebarRight" className={style.column}>
            <FriendsZone className={style.block}/>
            <Advertizement className={style.block}/>
            <RecentNotification className={style.block}/>
        </aside>
    )
};

export default SidebarRight;