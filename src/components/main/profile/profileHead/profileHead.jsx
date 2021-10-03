import React from "react";
import style from "./style.module.scss";
import {Link} from "react-router-dom";

let data = {
    avatar: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-1.jpg',
    editButton: 'Edit profile',
    profileNav: [
        {
            link: '/timeline',
            text: 'Timeline',
        },
        {
            link: '/about',
            text: 'About',
        },
        {
            link: '/photos',
            text: 'Photos',
        },
        {
            link: '/friends',
            text: 'Friends',
        },
        {
            link: '/more',
            text: 'More',
        },
    ]
};

const ProfileHead = () => {
    return (
        <div className={style.head}>
            <div className={style.wrapper}>
                <div className={style.avatarLarge}>
                    <img src={data.avatar} alt="user avatar"/>
                </div>
                <div className={style.profileNavigation}>
                    <nav>
                        <ul>
                            {
                                data.profileNav.map(
                                    item => {
                                        return (
                                            <li>
                                                <Link to={item.link}>{item.text}</Link>
                                            </li>
                                        )
                                    }
                                )
                            }
                        </ul>
                    </nav>
                </div>
                <button className={style.editProfile}>{data.editButton}</button>
            </div>
        </div>
    )
};

export default ProfileHead;