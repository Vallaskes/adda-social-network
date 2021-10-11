import {Link} from "react-router-dom";
import React from "react";
import style from "./messageItem.module.scss";

const MessageItem = ({imgSrc, userName, linkProfile, msgCnt, date}) => {
    return (
        <article className={style.messageItem}>
            <div className={style.userAvatar}>
                <img src={imgSrc} alt={`${userName} avatar`}/>
            </div>
            <div>
                <h6 className={style.author}>
                    <Link to={linkProfile}>
                        {userName}
                    </Link>
                </h6>
                <div className={style.message}>
                    {msgCnt}
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

export default MessageItem;