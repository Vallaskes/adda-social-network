import React from "react";
import style from "./profile.module.scss";
import Timeline from "./timeline/timeline";
import ProfileHead from "./profileHead/profileHead";
import Photos from "./photos/photos";
import DoubleHead from "./doubleHead/doubleHead";
import Friends from "./friends/friends";
import About from "./about/about";


let data = {
    photos: {
        title: 'Photos',
        nav: [
            {
                title: 'All',
            },
            {
                title: 'Timeline',
            },
            {
                title: 'Upload',
            },
            {
                title: 'Folder',
            },
        ],
    }
};


const Profile = () => {
    return (
        <div>
            <div className={style.bannerLarge}>
                <img src="https://template.hasthemes.com/adda/adda/assets/images/banner/profile-banner.jpg" alt="banner large"/>
            </div>
            <ProfileHead/>
            <DoubleHead
                titlePage={data.photos.title}
                doubleNavLink={
                    data.photos.nav.map(
                        i => {
                            return (
                                <li>{i.title}</li>
                            )
                        }
                    )
                }
            />
            {/*<Timeline/>*/}
            {/*<Photos title={false}/>*/}
            {/*<Friends mini={true}/>*/}
            <About/>
        </div>
    )
};

export default Profile;