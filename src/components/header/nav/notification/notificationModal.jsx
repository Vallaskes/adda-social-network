import React from "react";
import {Link} from "react-router-dom";
import style from "./notification.module.scss";
import NotificationItem from "./notificationItem/notificationItem";

const dropdownMenu = (e) => {
    let dm = e.target.parentNode.querySelector('div[data-dropdown]').dataset.dropdown;
    if (dm === 'hidden') {
        e.target.parentNode.querySelector('div[data-dropdown]').dataset.dropdown = 'visible'
    } else {
        e.target.parentNode.querySelector('div[data-dropdown]').dataset.dropdown = 'hidden';
    }
};

let data = {
    ntfItmM: [
        {
            imgSrc: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-3.jpg',
            userName: 'Robert Faul',
            content: 'Robert Faul, William Jhon and 35 other people reacted to your photo',
            date: '25 Apr 2019',
        },
        {
            imgSrc: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-4.jpg',
            userName: 'Robert Faul',
            content: 'Robert Mushkil, Terry Jhon and 20 other people reacted to your photo',
            date: '20 May 2019',
        },
        {
            imgSrc: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-6.jpg',
            userName: 'Robert Faul',
            content: 'Horijon Mbala, Bashu Jhon and 55 other people reacted to your post',
            date: '15 Jan 2019',
        },
    ],
    title: 'Notification',
    titleBtn: 'Notification',
    lnkFtrM: [
        {
            link: '#',
            text: 'See all in messenger',
        },
        {
            link: '#',
            text: 'Mark All as Read',
        },
    ]
};

let ntfItm = data.ntfItmM.map(e =>
    <NotificationItem
        imgSrc={e.imgSrc}
        userName={e.userName}
        content={e.content}
        date={e.date}
    />
);

let lnkFtr = data.lnkFtrM.map(e => <Link to={e.link}>{e.text}</Link>);

const NotificationModal = () => {
    return (
        <div>
            <div onClick={dropdownMenu} className={style.link}>
                {data.titleBtn}
            </div>
            <div data-dropdown="hidden" className={style.notificationDropdown}>
                <div className={style.notificationHeader}>
                    <div className={style.notificationTitle}>
                        {data.title}
                    </div>
                    <div>
                        <div className={style.iconSetting}/>
                    </div>
                </div>
                <div>
                    {ntfItm}
                </div>
                <div className={style.notificationFooter}>
                    {lnkFtr}
                </div>
            </div>
        </div>
    )
};

export default NotificationModal;