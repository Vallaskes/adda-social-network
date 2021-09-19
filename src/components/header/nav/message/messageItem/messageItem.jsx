import {Link} from "react-router-dom";
import React from "react";
import style from "./messageItem.module.scss";

const MessageItem = (props) => {
    return (
        <article className={style.messageItem}>
            <div className={style.userAvatar}>
                <img src={props.imgSrc} alt={`${props.userName} avatar`}/>
            </div>
            <div>
                <h6 className={style.author}>
                    <Link to={props.linkProfile}>
                        {props.userName}
                    </Link>
                </h6>
                <div className={style.message}>
                    {props.msgCnt}
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

export default MessageItem;