import React from "react";
import style from "./recentNotification.module.scss";

let data = [
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-35x35-9.jpg',
        hvg: 'Any one can join with us if you want',
        time: '5 min ago',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-35x35-8.jpg',
        hvg: 'Any one can join with us if you want',
        time: '15 min ago',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-35x35-7.jpg',
        hvg: 'Any one can join with us if you want',
        time: '25 min ago',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-35x35-6.jpg',
        hvg: 'Any one can join with us if you want',
        time: '35 min ago',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-35x35-4.jpg',
        hvg: 'Any one can join with us if you want',
        time: '55 min ago',
    },
];

const RecentNotification = ({className}) => {
    return (
        <div className={`${style.paddingBlock} ${className}`}>
            <div className={style.titleBlock}>
                <h3>Recent notifications</h3>
            </div>
            <div className={style.notifications}>
                {
                    data.map(
                        item => {
                            return (
                                <div className={style.notificationItem}>
                                    <div className={style.userAvatar}>
                                        <img src={item.img} alt="user avatar"/>
                                    </div>
                                    <div>
                                        <div className={style.heaving}>{item.hvg}</div>
                                        <div className={style.time}>{item.time}</div>
                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
};

export default RecentNotification;