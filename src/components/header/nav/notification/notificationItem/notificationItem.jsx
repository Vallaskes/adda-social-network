import React from "react";
import style from "./notificationItem.module.scss";

const NotificationItem = (props) => {
    return (
        <article className={style.notificationItem}>
            <div className={style.userAvatar}>
                <img src={props.imgSrc} alt={`${props.userName} avatar`}/>
            </div>
            <div>
                <div className={style.message}>
                    <p>{props.content}</p>
                </div>
            </div>
            <div className={style.messageTime}>
                <time pubdate dateTime={props.date}>
                    {props.date}
                </time>
            </div>
        </article>
    )
};

export default NotificationItem;