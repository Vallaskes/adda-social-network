import React from "react";
import {Link} from "react-router-dom";
import style from "./profileBlock.module.scss";

let data = {
    imageBannerSmall: 'https://template.hasthemes.com/adda/adda/assets/images/banner/banner-small.jpg',
    imageUserAvatar: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-midle-1.jpg',
    userName: 'Erik Jhonson',
    profileDescription: 'Any one can join with but Social network us if you want Any one can join with us if you want',
};

const SidebarProfileBlock = ({className}) => {
    return (
        <div className={className}>
            <div>
                <Link className={style.profileImage} to="/profile">
                    <div className={style.profileBannerSmall}>
                        <img src={data.imageBannerSmall} alt="profile banner"/>
                    </div>
                    <div className={style.profileAvatar}>
                        <img src={data.imageUserAvatar} alt="user avatar"/>
                    </div>
                </Link>
            </div>
            <div className={style.profileDesc}>
                <Link to="/profile">{data.userName}</Link>
                <p>{data.profileDescription}</p>
            </div>
        </div>
    )
};

export default SidebarProfileBlock;