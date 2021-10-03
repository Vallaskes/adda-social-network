import React from "react";
import style from "./friendsZone.module.scss";
import Like from "../../../like/like";

let data = [
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-35x35-15.jpg',
        hvg: 'Ammeya Jakson',
        cat: 'Adventure',
        like: true,
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-35x35-18.jpg',
        hvg: 'Jashon Muri',
        cat: 'Food',
        like: false,
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-35x35-14.jpg',
        hvg: 'Rolin Theitar',
        cat: 'Drama',
        like: false,
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-35x35-20.jpg',
        hvg: 'Active Mind',
        cat: 'Fitness',
        like: false,
    },
];

const FriendsZone = ({className}) => {
    return (
        <div className={`${style.paddingBlock} ${className}`}>
            <div className={style.titleBlock}>
                <h3>Friends Zone</h3>
            </div>
            <div className={style.friends}>
                {
                    data.map(
                        item => {
                            return (
                                <div className={style.friendsItem}>
                                    <div className={style.userAvatar}>
                                        <img src={item.img} alt="user avatar"/>
                                    </div>
                                    <div>
                                        <div className={style.heaving}>{item.hvg}</div>
                                        <div className={style.time}>{item.cat}</div>
                                    </div>
                                    <Like uLike={item.like}/>
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
};

export default FriendsZone;