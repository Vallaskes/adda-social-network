import React from "react";
import style from "./notificationItem.module.scss";

const NotificationItem = ({imgSrc, userName, content, date}) => {
    return (
        <article className={style.notificationItem}>
            <div className={style.userAvatar}>
                <img src={imgSrc} alt={`${userName} avatar`}/>
            </div>
            <div>
                <div className={style.message}>
                    <p>{content}</p>
                </div>
            </div>
            <div className={style.messageTime}>
                <time pubdate dateTime={date}>
                    {date}
                </time>
            </div>
        </article>
    )
};

export default NotificationItem;