import React from "react";
import style from "./messageModal.module.scss";
import {Link} from "react-router-dom";
import MessageItem from "./messageItem/messageItem";

let data = {
    msgItmM: [
        {
            imgSrc: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-3.jpg',
            linkProfile: '/profile',
            userName: 'Mili Raoulin',
            msgCnt: 'Many desktop publishing packages and web page edition now use Lorem Ipsum as their default',
            date: '25 Apr 2019',
        },
        {
            imgSrc: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-4.jpg',
            linkProfile: '/profile',
            userName: 'Jhon Doe',
            msgCnt: 'Many desktop publishing packages and web page edition now use Lorem Ipsum as their default',
            date: '15 May 2019',
        },
        {
            imgSrc: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-5.jpg',
            linkProfile: '/profile',
            userName: 'Jon Wileyam',
            msgCnt: 'Many desktop publishing packages and web page edition now use Lorem Ipsum as their default',
            date: '20 Jun 2019',
        },
    ],
    msgStgLM: [
        {
            link: '#',
            className: `${style.linkDropdown}`,
            text: 'New group',
        },
        {
            link: '#',
            className: `${style.linkDropdown}`,
            text: 'New Message',
        }
    ],
    msgFtrM: [
        {
            link: '#',
            className: `${style.linkDropdown}`,
            text: 'See all in messenger',
        },
        {
            link: '#',
            className: `${style.linkDropdown}`,
            text: 'Mark All as Read',
        }
    ],
};

let msgItm = data.msgItmM.map(i =>
    <MessageItem
        imgSrc={i.imgSrc}
        linkProfile={i.linkProfile}
        userName={i.userName}
        msgCnt={i.msgCnt}
        date={i.date}
    />
);

let msgStgL = data.msgStgLM.map(i =>
    <Link className={i.className} to={i.link}>
        {i.text}
    </Link>
);

let msgFtr = data.msgFtrM.map(i =>
    <Link className={i.className} to={i.link}>
        {i.text}
    </Link>
);

const dropdownMenu = (e) => {
    let dm = e.target.parentNode.querySelector('div[data-dropdown]').dataset.dropdown;
    if (dm === 'hidden') {
        e.target.parentNode.querySelector('div[data-dropdown]').dataset.dropdown = 'visible'
    } else {
        e.target.parentNode.querySelector('div[data-dropdown]').dataset.dropdown = 'hidden';
    }
};

const MessageModal = (props) => {
    return (
        <div className={style.messageModal}>
            <div onClick={dropdownMenu} className={style.link}>
                {props.textBtn}
            </div>
            <div data-dropdown="hidden" className={style.messageDropdown}>
                <div className={style.messageHeader}>
                    <div className={style.messageTitle}>
                        {props.text}
                    </div>
                    <div className={style.messageSetting}>
                        {msgStgL}
                    </div>
                </div>
                <div>
                    {msgItm}
                </div>
                <div className={style.messageFooter}>
                    {msgFtr}
                </div>
            </div>
        </div>
    )
};

export default MessageModal;