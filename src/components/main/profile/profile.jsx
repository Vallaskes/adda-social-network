import React from "react";
import style from "./profile.module.scss";
import Timeline from "./timeline/timeline";
import ProfileHead from "./profileHead/profileHead";



const Profile = () => {
    return (
        <div>
            <div className={style.bannerLarge}>
                <img src="https://template.hasthemes.com/adda/adda/assets/images/banner/profile-banner.jpg" alt="banner large"/>
            </div>
            <ProfileHead/>
            {/*<Timeline/>*/}
        </div>
    )
};

export default Profile;